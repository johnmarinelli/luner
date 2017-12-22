import { schema } from 'normalizr';
/*
 * normalizr schema
 */
const haiku = new schema.Entity('haikus');
const arrayOfHaikus = new schema.Array(haiku);

export { haiku, arrayOfHaikus };
