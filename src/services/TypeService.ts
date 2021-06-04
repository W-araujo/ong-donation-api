import { TypeRepository } from '../repositories/TypeRepository';
import { getCustomRepository } from 'typeorm';

import AppError from '../errors/Errors';

interface IRequest {
  name: string;
}

export default class TypeService {
  async create({ name }: IRequest) {
    const typeRepository = getCustomRepository(TypeRepository);

    const typeAlreadyExists = await typeRepository.findOne({ name });

    if (typeAlreadyExists) {
      throw new AppError('Type/category already exists');
    }

    const type = typeRepository.create({
      name: name.toUpperCase(),
    });

    await typeRepository.save(type);
    return type;
  }

  async list() {
    const typeRepository = getCustomRepository(TypeRepository);
    const all = await typeRepository.find();
    return all;
  }

  async delete(id: number) {
    const typeRepository = getCustomRepository(TypeRepository);

    const type = await typeRepository.findOne(id);

    if (!type) {
      throw new AppError('Type/category not found!');
    }

    const deleted = await typeRepository.delete(id);

    return deleted;
  }
}
