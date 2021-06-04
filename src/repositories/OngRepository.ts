import { EntityRepository, Repository } from 'typeorm';
import Ong from '../models/Ong';

@EntityRepository(Ong)
class OngRepository extends Repository<Ong> {}
export { OngRepository };
