import { DonationRepository } from '../repositories/DonationRepository';
import { getCustomRepository } from 'typeorm';

import AppError from '../errors/Errors';

interface IRequest {
  value: number;
}

export default class DonationService {
  async create({ value }: IRequest) {
    const donationRepository = getCustomRepository(DonationRepository);

    const donation = donationRepository.create({
      value,
    });

    await donationRepository.save(donation);
    return donation;
  }

  async list() {
    const donationRepository = getCustomRepository(DonationRepository);
    const all = await donationRepository.find();
    return all;
  }

  async delete(id: number) {
    const donationRepository = getCustomRepository(DonationRepository);

    const donation = await donationRepository.findOne(id);

    if (!donation) {
      throw new AppError('Donation not found!');
    }

    const deleted = await donationRepository.delete(id);

    return deleted;
  }
}
