import {
  createConnection,
  getConnection,
  Entity,
  getRepository,
} from 'typeorm';

import { PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class fakeType {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name?: string;
}

beforeEach(() => {
  return createConnection({
    type: 'sqlite',
    database: ':memory:',
    dropSchema: true,
    entities: [fakeType],
    synchronize: true,
    logging: false,
  });
});

afterEach(() => {
  const conn = getConnection();
  return conn.close();
});

describe('Type', () => {
  it('Should be able to create a new Type/Category', async () => {
    await getRepository(fakeType).insert({
      name: 'Unidos pela Paz',
    });

    const typeName = await getRepository(fakeType).find({
      where: {
        id: 1,
      },
    });

    expect(typeName[0].name).toBe('Unidos pela Paz');
  });
});
