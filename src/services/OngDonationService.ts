import { OngRepository } from '../repositories/OngRepository';
import { DonationRepository } from '../repositories/DonationRepository';
import { getCustomRepository } from 'typeorm';

import AppError from '../errors/Errors';

interface IRequest {
  donationId: number;
}

export default class OngDonationService {
  async create(ongId: number, { donationId }: IRequest) {
    const ongRepository = getCustomRepository(OngRepository);
    const donationRepository = getCustomRepository(DonationRepository);

    const ong = await ongRepository.findOne(ongId);

    if (!ong) {
      throw new AppError('Ong not found!');
    }

    const donation = await donationRepository.findOne(donationId);

    if (!donation) {
      throw new AppError('Donation not found!');
    }

    ong.donations = [donation];
    await ongRepository.save(ong);

    delete ong.password;

    return ong;
  }

  async list() {
    const ongRepository = getCustomRepository(OngRepository);
    const donations = await ongRepository.find({ relations: ['donations'] });
    donations.map(ong => {
      delete ong.password;
    });

    return donations;
  }
}
