import { EntityRepository, Repository } from 'typeorm';
import Donation from '../models/Donation';

@EntityRepository(Donation)
class DonationRepository extends Repository<Donation> {}
export { DonationRepository };
