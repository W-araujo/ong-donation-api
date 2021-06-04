import { OngRepository } from '../repositories/OngRepository';
import { getCustomRepository, Like } from 'typeorm';
import { hashed, comparePassword } from '../utils/password';
import { tokenGenerator } from '../utils/jwt';

import { UserRole } from '../models/Ong';
import AppError from '../errors/Errors';

interface IRequest {
  name: string;
  description: string;
  typeId: number;
  phone: string;
  email: string;
  password: string;
  role: UserRole;
}

interface ILogin {
  email: string;
  password: string;
}

export default class OngService {
  async create({
    name,
    description,
    typeId,
    phone,
    email,
    password,
    role,
  }: IRequest) {
    const ongRepository = getCustomRepository(OngRepository);

    const ongAlreadyExists = await ongRepository.findOne({ email });

    if (ongAlreadyExists) {
      throw new AppError('Ong already exists');
    }

    const encryped = await hashed(password);
    const ong = ongRepository.create({
      name: name.toLocaleUpperCase(),
      description,
      typeId,
      phone,
      email,
      password: encryped,
      role,
    });

    await ongRepository.save(ong);

    delete ong.password;

    return ong;
  }

  async list() {
    const ongRepository = getCustomRepository(OngRepository);
    const all = await ongRepository.find();
    all.map(ong => {
      delete ong.password;
    });

    return all;
  }

  async filterByName(name: string) {
    const ongRepository = getCustomRepository(OngRepository);
    const ongs = await ongRepository.find({
      name: Like(`%${name}%`),
    });

    if (!ongs) {
      throw new AppError('Ong not found!');
    }

    return ongs;
  }

  async findByEmail(email: string) {
    const ongRepository = getCustomRepository(OngRepository);
    const ongAlreadyExists = ongRepository.findOne({ email });

    if (!ongAlreadyExists) {
      throw new AppError('Ong not found!');
    }

    return ongAlreadyExists;
  }

  async login({ email, password }: ILogin) {
    const ongRepository = getCustomRepository(OngRepository);
    const { ...ong } = await ongRepository.findOne({
      email,
    });

    const isTrue = await comparePassword(password, ong.password);

    if (!isTrue) {
      throw new AppError('Incorrect email/password combination', 401);
    }

    delete ong.password;

    const token = tokenGenerator(ong);
    return { token, ong };
  }

  async getById(id: number) {
    const ongRepository = getCustomRepository(OngRepository);

    const ong = await ongRepository.findOne(id);

    if (!ong) {
      throw new AppError('Ong not found!');
    }

    delete ong.password;

    return ong;
  }

  async delete(id: number) {
    const ongRepository = getCustomRepository(OngRepository);

    const ong = await ongRepository.findOne(id);

    if (!ong) {
      throw new AppError('Ong not found!');
    }

    const deleted = await ongRepository.delete(id);

    return deleted;
  }

  async Update(
    id: number,
    { name, description, typeId, phone, email, password, role }: IRequest,
  ) {
    const ongRepository = getCustomRepository(OngRepository);

    const ong = await ongRepository.findOne(id);

    if (!ong) {
      throw new AppError('Ong not found!');
    }

    const emailAreadyExists = await ongRepository.findOne({
      email,
    });

    if (email === ong.email || !emailAreadyExists) {
      const encryped = await hashed(password);
      await ongRepository.update(id, {
        name,
        description,
        typeId,
        phone,
        email,
        password: encryped,
        role,
      });

      const ongUpdate = await ongRepository.findOne(id);
      return ongUpdate;
    }
    throw new AppError('Email already used.');
  }
}
