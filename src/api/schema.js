import { schema } from 'normalizr';

export const haiku = new schema.Entity('haikus');
export const arrayOfHaikus = new schema.Array(haiku);
