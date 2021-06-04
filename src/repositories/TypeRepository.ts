import { EntityRepository, Repository } from 'typeorm';
import Type from '../models/Type';

@EntityRepository(Type)
class TypeRepository extends Repository<Type> {}
export { TypeRepository };
