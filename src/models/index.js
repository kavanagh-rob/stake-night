// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Bet, Horse, PlayerProfile, Result, Race, Event } = initSchema(schema);

export {
  Bet,
  Horse,
  PlayerProfile,
  Result,
  Race,
  Event
};