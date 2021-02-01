// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Bet, Horse, User, Result, Race, Event } = initSchema(schema);

export {
  Bet,
  Horse,
  User,
  Result,
  Race,
  Event
};