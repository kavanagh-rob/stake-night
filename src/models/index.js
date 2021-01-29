// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Bets, Horse, User, Event, Race, Result } = initSchema(schema);

export {
  Bets,
  Horse,
  User,
  Event,
  Race,
  Result
};