// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Bets, Horse, User, Result, Race, Event } = initSchema(schema);

export {
  Bets,
  Horse,
  User,
  Result,
  Race,
  Event
};