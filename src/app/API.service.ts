/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateBetsInput = {
  id?: string | null;
  isProcessed?: boolean | null;
  finalOdds?: number | null;
  payout?: number | null;
  status?: string | null;
  stake?: number | null;
  _version?: number | null;
  betsHorseId?: string | null;
};

export type ModelBetsConditionInput = {
  isProcessed?: ModelBooleanInput | null;
  finalOdds?: ModelFloatInput | null;
  payout?: ModelFloatInput | null;
  status?: ModelStringInput | null;
  stake?: ModelFloatInput | null;
  and?: Array<ModelBetsConditionInput | null> | null;
  or?: Array<ModelBetsConditionInput | null> | null;
  not?: ModelBetsConditionInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateBetsInput = {
  id: string;
  isProcessed?: boolean | null;
  finalOdds?: number | null;
  payout?: number | null;
  status?: string | null;
  stake?: number | null;
  _version?: number | null;
  betsHorseId?: string | null;
};

export type DeleteBetsInput = {
  id?: string | null;
  _version?: number | null;
};

export type CreateUserInput = {
  id?: string | null;
  avatorUrl?: string | null;
  name?: string | null;
  balance?: number | null;
  payments?: Array<string | null> | null;
  subscribedEvents?: Array<string | null> | null;
  _version?: number | null;
};

export type ModelUserConditionInput = {
  avatorUrl?: ModelStringInput | null;
  name?: ModelStringInput | null;
  balance?: ModelFloatInput | null;
  payments?: ModelStringInput | null;
  subscribedEvents?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type UpdateUserInput = {
  id: string;
  avatorUrl?: string | null;
  name?: string | null;
  balance?: number | null;
  payments?: Array<string | null> | null;
  subscribedEvents?: Array<string | null> | null;
  _version?: number | null;
};

export type DeleteUserInput = {
  id?: string | null;
  _version?: number | null;
};

export type CreateResultInput = {
  id?: string | null;
  videoUrl?: string | null;
  totalPot?: number | null;
  _version?: number | null;
  resultWinningHorseId?: string | null;
};

export type ModelResultConditionInput = {
  videoUrl?: ModelStringInput | null;
  totalPot?: ModelFloatInput | null;
  and?: Array<ModelResultConditionInput | null> | null;
  or?: Array<ModelResultConditionInput | null> | null;
  not?: ModelResultConditionInput | null;
};

export type UpdateResultInput = {
  id: string;
  videoUrl?: string | null;
  totalPot?: number | null;
  _version?: number | null;
  resultWinningHorseId?: string | null;
};

export type DeleteResultInput = {
  id?: string | null;
  _version?: number | null;
};

export type CreateHorseInput = {
  id?: string | null;
  number?: number | null;
  name?: string | null;
  liveOdds?: number | null;
  totalBetsForHorse?: number | null;
  raceID: string;
  _version?: number | null;
};

export type ModelHorseConditionInput = {
  number?: ModelIntInput | null;
  name?: ModelStringInput | null;
  liveOdds?: ModelFloatInput | null;
  totalBetsForHorse?: ModelFloatInput | null;
  raceID?: ModelIDInput | null;
  and?: Array<ModelHorseConditionInput | null> | null;
  or?: Array<ModelHorseConditionInput | null> | null;
  not?: ModelHorseConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateHorseInput = {
  id: string;
  number?: number | null;
  name?: string | null;
  liveOdds?: number | null;
  totalBetsForHorse?: number | null;
  raceID?: string | null;
  _version?: number | null;
};

export type DeleteHorseInput = {
  id?: string | null;
  _version?: number | null;
};

export type CreateRaceInput = {
  id?: string | null;
  isActive?: boolean | null;
  name?: string | null;
  payoutFactor?: number | null;
  raceCardImageUrl?: string | null;
  number?: string | null;
  time?: string | null;
  showPayoutFactor?: boolean | null;
  eventID: string;
  isCurrentRace?: boolean | null;
  _version?: number | null;
  raceResultId?: string | null;
};

export type ModelRaceConditionInput = {
  isActive?: ModelBooleanInput | null;
  name?: ModelStringInput | null;
  payoutFactor?: ModelFloatInput | null;
  raceCardImageUrl?: ModelStringInput | null;
  number?: ModelStringInput | null;
  time?: ModelStringInput | null;
  showPayoutFactor?: ModelBooleanInput | null;
  eventID?: ModelIDInput | null;
  isCurrentRace?: ModelBooleanInput | null;
  and?: Array<ModelRaceConditionInput | null> | null;
  or?: Array<ModelRaceConditionInput | null> | null;
  not?: ModelRaceConditionInput | null;
};

export type UpdateRaceInput = {
  id: string;
  isActive?: boolean | null;
  name?: string | null;
  payoutFactor?: number | null;
  raceCardImageUrl?: string | null;
  number?: string | null;
  time?: string | null;
  showPayoutFactor?: boolean | null;
  eventID?: string | null;
  isCurrentRace?: boolean | null;
  _version?: number | null;
  raceResultId?: string | null;
};

export type DeleteRaceInput = {
  id?: string | null;
  _version?: number | null;
};

export type CreateEventInput = {
  id?: string | null;
  date?: string | null;
  eventImage?: string | null;
  name?: string | null;
  organiser?: string | null;
  type?: string | null;
  _version?: number | null;
};

export type ModelEventConditionInput = {
  date?: ModelStringInput | null;
  eventImage?: ModelStringInput | null;
  name?: ModelStringInput | null;
  organiser?: ModelStringInput | null;
  type?: ModelStringInput | null;
  and?: Array<ModelEventConditionInput | null> | null;
  or?: Array<ModelEventConditionInput | null> | null;
  not?: ModelEventConditionInput | null;
};

export type UpdateEventInput = {
  id: string;
  date?: string | null;
  eventImage?: string | null;
  name?: string | null;
  organiser?: string | null;
  type?: string | null;
  _version?: number | null;
};

export type DeleteEventInput = {
  id?: string | null;
  _version?: number | null;
};

export type ModelBetsFilterInput = {
  id?: ModelIDInput | null;
  isProcessed?: ModelBooleanInput | null;
  finalOdds?: ModelFloatInput | null;
  payout?: ModelFloatInput | null;
  status?: ModelStringInput | null;
  stake?: ModelFloatInput | null;
  and?: Array<ModelBetsFilterInput | null> | null;
  or?: Array<ModelBetsFilterInput | null> | null;
  not?: ModelBetsFilterInput | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  avatorUrl?: ModelStringInput | null;
  name?: ModelStringInput | null;
  balance?: ModelFloatInput | null;
  payments?: ModelStringInput | null;
  subscribedEvents?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelResultFilterInput = {
  id?: ModelIDInput | null;
  videoUrl?: ModelStringInput | null;
  totalPot?: ModelFloatInput | null;
  and?: Array<ModelResultFilterInput | null> | null;
  or?: Array<ModelResultFilterInput | null> | null;
  not?: ModelResultFilterInput | null;
};

export type ModelHorseFilterInput = {
  id?: ModelIDInput | null;
  number?: ModelIntInput | null;
  name?: ModelStringInput | null;
  liveOdds?: ModelFloatInput | null;
  totalBetsForHorse?: ModelFloatInput | null;
  raceID?: ModelIDInput | null;
  and?: Array<ModelHorseFilterInput | null> | null;
  or?: Array<ModelHorseFilterInput | null> | null;
  not?: ModelHorseFilterInput | null;
};

export type ModelRaceFilterInput = {
  id?: ModelIDInput | null;
  isActive?: ModelBooleanInput | null;
  name?: ModelStringInput | null;
  payoutFactor?: ModelFloatInput | null;
  raceCardImageUrl?: ModelStringInput | null;
  number?: ModelStringInput | null;
  time?: ModelStringInput | null;
  showPayoutFactor?: ModelBooleanInput | null;
  eventID?: ModelIDInput | null;
  isCurrentRace?: ModelBooleanInput | null;
  and?: Array<ModelRaceFilterInput | null> | null;
  or?: Array<ModelRaceFilterInput | null> | null;
  not?: ModelRaceFilterInput | null;
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null;
  date?: ModelStringInput | null;
  eventImage?: ModelStringInput | null;
  name?: ModelStringInput | null;
  organiser?: ModelStringInput | null;
  type?: ModelStringInput | null;
  and?: Array<ModelEventFilterInput | null> | null;
  or?: Array<ModelEventFilterInput | null> | null;
  not?: ModelEventFilterInput | null;
};

export type CreateBetsMutation = {
  __typename: "Bets";
  id: string;
  isProcessed: boolean | null;
  finalOdds: number | null;
  payout: number | null;
  status: string | null;
  stake: number | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Horse: {
    __typename: "Horse";
    id: string;
    number: number | null;
    name: string | null;
    liveOdds: number | null;
    totalBetsForHorse: number | null;
    raceID: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateBetsMutation = {
  __typename: "Bets";
  id: string;
  isProcessed: boolean | null;
  finalOdds: number | null;
  payout: number | null;
  status: string | null;
  stake: number | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Horse: {
    __typename: "Horse";
    id: string;
    number: number | null;
    name: string | null;
    liveOdds: number | null;
    totalBetsForHorse: number | null;
    raceID: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteBetsMutation = {
  __typename: "Bets";
  id: string;
  isProcessed: boolean | null;
  finalOdds: number | null;
  payout: number | null;
  status: string | null;
  stake: number | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Horse: {
    __typename: "Horse";
    id: string;
    number: number | null;
    name: string | null;
    liveOdds: number | null;
    totalBetsForHorse: number | null;
    raceID: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  avatorUrl: string | null;
  name: string | null;
  balance: number | null;
  payments: Array<string | null> | null;
  subscribedEvents: Array<string | null> | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  avatorUrl: string | null;
  name: string | null;
  balance: number | null;
  payments: Array<string | null> | null;
  subscribedEvents: Array<string | null> | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  avatorUrl: string | null;
  name: string | null;
  balance: number | null;
  payments: Array<string | null> | null;
  subscribedEvents: Array<string | null> | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type CreateResultMutation = {
  __typename: "Result";
  id: string;
  videoUrl: string | null;
  totalPot: number | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  WinningHorse: {
    __typename: "Horse";
    id: string;
    number: number | null;
    name: string | null;
    liveOdds: number | null;
    totalBetsForHorse: number | null;
    raceID: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateResultMutation = {
  __typename: "Result";
  id: string;
  videoUrl: string | null;
  totalPot: number | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  WinningHorse: {
    __typename: "Horse";
    id: string;
    number: number | null;
    name: string | null;
    liveOdds: number | null;
    totalBetsForHorse: number | null;
    raceID: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteResultMutation = {
  __typename: "Result";
  id: string;
  videoUrl: string | null;
  totalPot: number | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  WinningHorse: {
    __typename: "Horse";
    id: string;
    number: number | null;
    name: string | null;
    liveOdds: number | null;
    totalBetsForHorse: number | null;
    raceID: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateHorseMutation = {
  __typename: "Horse";
  id: string;
  number: number | null;
  name: string | null;
  liveOdds: number | null;
  totalBetsForHorse: number | null;
  raceID: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateHorseMutation = {
  __typename: "Horse";
  id: string;
  number: number | null;
  name: string | null;
  liveOdds: number | null;
  totalBetsForHorse: number | null;
  raceID: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteHorseMutation = {
  __typename: "Horse";
  id: string;
  number: number | null;
  name: string | null;
  liveOdds: number | null;
  totalBetsForHorse: number | null;
  raceID: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type CreateRaceMutation = {
  __typename: "Race";
  id: string;
  isActive: boolean | null;
  name: string | null;
  payoutFactor: number | null;
  raceCardImageUrl: string | null;
  number: string | null;
  time: string | null;
  showPayoutFactor: boolean | null;
  eventID: string;
  isCurrentRace: boolean | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Result: {
    __typename: "Result";
    id: string;
    videoUrl: string | null;
    totalPot: number | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  Horses: {
    __typename: "ModelHorseConnection";
    nextToken: string | null;
    startedAt: number | null;
  } | null;
};

export type UpdateRaceMutation = {
  __typename: "Race";
  id: string;
  isActive: boolean | null;
  name: string | null;
  payoutFactor: number | null;
  raceCardImageUrl: string | null;
  number: string | null;
  time: string | null;
  showPayoutFactor: boolean | null;
  eventID: string;
  isCurrentRace: boolean | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Result: {
    __typename: "Result";
    id: string;
    videoUrl: string | null;
    totalPot: number | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  Horses: {
    __typename: "ModelHorseConnection";
    nextToken: string | null;
    startedAt: number | null;
  } | null;
};

export type DeleteRaceMutation = {
  __typename: "Race";
  id: string;
  isActive: boolean | null;
  name: string | null;
  payoutFactor: number | null;
  raceCardImageUrl: string | null;
  number: string | null;
  time: string | null;
  showPayoutFactor: boolean | null;
  eventID: string;
  isCurrentRace: boolean | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Result: {
    __typename: "Result";
    id: string;
    videoUrl: string | null;
    totalPot: number | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  Horses: {
    __typename: "ModelHorseConnection";
    nextToken: string | null;
    startedAt: number | null;
  } | null;
};

export type CreateEventMutation = {
  __typename: "Event";
  id: string;
  date: string | null;
  eventImage: string | null;
  name: string | null;
  organiser: string | null;
  type: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Races: {
    __typename: "ModelRaceConnection";
    nextToken: string | null;
    startedAt: number | null;
  } | null;
};

export type UpdateEventMutation = {
  __typename: "Event";
  id: string;
  date: string | null;
  eventImage: string | null;
  name: string | null;
  organiser: string | null;
  type: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Races: {
    __typename: "ModelRaceConnection";
    nextToken: string | null;
    startedAt: number | null;
  } | null;
};

export type DeleteEventMutation = {
  __typename: "Event";
  id: string;
  date: string | null;
  eventImage: string | null;
  name: string | null;
  organiser: string | null;
  type: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Races: {
    __typename: "ModelRaceConnection";
    nextToken: string | null;
    startedAt: number | null;
  } | null;
};

export type GetBetsQuery = {
  __typename: "Bets";
  id: string;
  isProcessed: boolean | null;
  finalOdds: number | null;
  payout: number | null;
  status: string | null;
  stake: number | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Horse: {
    __typename: "Horse";
    id: string;
    number: number | null;
    name: string | null;
    liveOdds: number | null;
    totalBetsForHorse: number | null;
    raceID: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListBetssQuery = {
  __typename: "ModelBetsConnection";
  items: Array<{
    __typename: "Bets";
    id: string;
    isProcessed: boolean | null;
    finalOdds: number | null;
    payout: number | null;
    status: string | null;
    stake: number | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type SyncBetsQuery = {
  __typename: "ModelBetsConnection";
  items: Array<{
    __typename: "Bets";
    id: string;
    isProcessed: boolean | null;
    finalOdds: number | null;
    payout: number | null;
    status: string | null;
    stake: number | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  avatorUrl: string | null;
  name: string | null;
  balance: number | null;
  payments: Array<string | null> | null;
  subscribedEvents: Array<string | null> | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    avatorUrl: string | null;
    name: string | null;
    balance: number | null;
    payments: Array<string | null> | null;
    subscribedEvents: Array<string | null> | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type SyncUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    avatorUrl: string | null;
    name: string | null;
    balance: number | null;
    payments: Array<string | null> | null;
    subscribedEvents: Array<string | null> | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type ListResultsQuery = {
  __typename: "ModelResultConnection";
  items: Array<{
    __typename: "Result";
    id: string;
    videoUrl: string | null;
    totalPot: number | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetResultQuery = {
  __typename: "Result";
  id: string;
  videoUrl: string | null;
  totalPot: number | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  WinningHorse: {
    __typename: "Horse";
    id: string;
    number: number | null;
    name: string | null;
    liveOdds: number | null;
    totalBetsForHorse: number | null;
    raceID: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type SyncResultsQuery = {
  __typename: "ModelResultConnection";
  items: Array<{
    __typename: "Result";
    id: string;
    videoUrl: string | null;
    totalPot: number | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetHorseQuery = {
  __typename: "Horse";
  id: string;
  number: number | null;
  name: string | null;
  liveOdds: number | null;
  totalBetsForHorse: number | null;
  raceID: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListHorsesQuery = {
  __typename: "ModelHorseConnection";
  items: Array<{
    __typename: "Horse";
    id: string;
    number: number | null;
    name: string | null;
    liveOdds: number | null;
    totalBetsForHorse: number | null;
    raceID: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type SyncHorsesQuery = {
  __typename: "ModelHorseConnection";
  items: Array<{
    __typename: "Horse";
    id: string;
    number: number | null;
    name: string | null;
    liveOdds: number | null;
    totalBetsForHorse: number | null;
    raceID: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetRaceQuery = {
  __typename: "Race";
  id: string;
  isActive: boolean | null;
  name: string | null;
  payoutFactor: number | null;
  raceCardImageUrl: string | null;
  number: string | null;
  time: string | null;
  showPayoutFactor: boolean | null;
  eventID: string;
  isCurrentRace: boolean | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Result: {
    __typename: "Result";
    id: string;
    videoUrl: string | null;
    totalPot: number | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  Horses: {
    __typename: "ModelHorseConnection";
    nextToken: string | null;
    startedAt: number | null;
  } | null;
};

export type ListRacesQuery = {
  __typename: "ModelRaceConnection";
  items: Array<{
    __typename: "Race";
    id: string;
    isActive: boolean | null;
    name: string | null;
    payoutFactor: number | null;
    raceCardImageUrl: string | null;
    number: string | null;
    time: string | null;
    showPayoutFactor: boolean | null;
    eventID: string;
    isCurrentRace: boolean | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type SyncRacesQuery = {
  __typename: "ModelRaceConnection";
  items: Array<{
    __typename: "Race";
    id: string;
    isActive: boolean | null;
    name: string | null;
    payoutFactor: number | null;
    raceCardImageUrl: string | null;
    number: string | null;
    time: string | null;
    showPayoutFactor: boolean | null;
    eventID: string;
    isCurrentRace: boolean | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetEventQuery = {
  __typename: "Event";
  id: string;
  date: string | null;
  eventImage: string | null;
  name: string | null;
  organiser: string | null;
  type: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Races: {
    __typename: "ModelRaceConnection";
    nextToken: string | null;
    startedAt: number | null;
  } | null;
};

export type ListEventsQuery = {
  __typename: "ModelEventConnection";
  items: Array<{
    __typename: "Event";
    id: string;
    date: string | null;
    eventImage: string | null;
    name: string | null;
    organiser: string | null;
    type: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type SyncEventsQuery = {
  __typename: "ModelEventConnection";
  items: Array<{
    __typename: "Event";
    id: string;
    date: string | null;
    eventImage: string | null;
    name: string | null;
    organiser: string | null;
    type: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type OnCreateBetsSubscription = {
  __typename: "Bets";
  id: string;
  isProcessed: boolean | null;
  finalOdds: number | null;
  payout: number | null;
  status: string | null;
  stake: number | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Horse: {
    __typename: "Horse";
    id: string;
    number: number | null;
    name: string | null;
    liveOdds: number | null;
    totalBetsForHorse: number | null;
    raceID: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateBetsSubscription = {
  __typename: "Bets";
  id: string;
  isProcessed: boolean | null;
  finalOdds: number | null;
  payout: number | null;
  status: string | null;
  stake: number | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Horse: {
    __typename: "Horse";
    id: string;
    number: number | null;
    name: string | null;
    liveOdds: number | null;
    totalBetsForHorse: number | null;
    raceID: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteBetsSubscription = {
  __typename: "Bets";
  id: string;
  isProcessed: boolean | null;
  finalOdds: number | null;
  payout: number | null;
  status: string | null;
  stake: number | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Horse: {
    __typename: "Horse";
    id: string;
    number: number | null;
    name: string | null;
    liveOdds: number | null;
    totalBetsForHorse: number | null;
    raceID: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  avatorUrl: string | null;
  name: string | null;
  balance: number | null;
  payments: Array<string | null> | null;
  subscribedEvents: Array<string | null> | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  avatorUrl: string | null;
  name: string | null;
  balance: number | null;
  payments: Array<string | null> | null;
  subscribedEvents: Array<string | null> | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  avatorUrl: string | null;
  name: string | null;
  balance: number | null;
  payments: Array<string | null> | null;
  subscribedEvents: Array<string | null> | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateResultSubscription = {
  __typename: "Result";
  id: string;
  videoUrl: string | null;
  totalPot: number | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  WinningHorse: {
    __typename: "Horse";
    id: string;
    number: number | null;
    name: string | null;
    liveOdds: number | null;
    totalBetsForHorse: number | null;
    raceID: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateResultSubscription = {
  __typename: "Result";
  id: string;
  videoUrl: string | null;
  totalPot: number | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  WinningHorse: {
    __typename: "Horse";
    id: string;
    number: number | null;
    name: string | null;
    liveOdds: number | null;
    totalBetsForHorse: number | null;
    raceID: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteResultSubscription = {
  __typename: "Result";
  id: string;
  videoUrl: string | null;
  totalPot: number | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  WinningHorse: {
    __typename: "Horse";
    id: string;
    number: number | null;
    name: string | null;
    liveOdds: number | null;
    totalBetsForHorse: number | null;
    raceID: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateHorseSubscription = {
  __typename: "Horse";
  id: string;
  number: number | null;
  name: string | null;
  liveOdds: number | null;
  totalBetsForHorse: number | null;
  raceID: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateHorseSubscription = {
  __typename: "Horse";
  id: string;
  number: number | null;
  name: string | null;
  liveOdds: number | null;
  totalBetsForHorse: number | null;
  raceID: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteHorseSubscription = {
  __typename: "Horse";
  id: string;
  number: number | null;
  name: string | null;
  liveOdds: number | null;
  totalBetsForHorse: number | null;
  raceID: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateRaceSubscription = {
  __typename: "Race";
  id: string;
  isActive: boolean | null;
  name: string | null;
  payoutFactor: number | null;
  raceCardImageUrl: string | null;
  number: string | null;
  time: string | null;
  showPayoutFactor: boolean | null;
  eventID: string;
  isCurrentRace: boolean | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Result: {
    __typename: "Result";
    id: string;
    videoUrl: string | null;
    totalPot: number | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  Horses: {
    __typename: "ModelHorseConnection";
    nextToken: string | null;
    startedAt: number | null;
  } | null;
};

export type OnUpdateRaceSubscription = {
  __typename: "Race";
  id: string;
  isActive: boolean | null;
  name: string | null;
  payoutFactor: number | null;
  raceCardImageUrl: string | null;
  number: string | null;
  time: string | null;
  showPayoutFactor: boolean | null;
  eventID: string;
  isCurrentRace: boolean | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Result: {
    __typename: "Result";
    id: string;
    videoUrl: string | null;
    totalPot: number | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  Horses: {
    __typename: "ModelHorseConnection";
    nextToken: string | null;
    startedAt: number | null;
  } | null;
};

export type OnDeleteRaceSubscription = {
  __typename: "Race";
  id: string;
  isActive: boolean | null;
  name: string | null;
  payoutFactor: number | null;
  raceCardImageUrl: string | null;
  number: string | null;
  time: string | null;
  showPayoutFactor: boolean | null;
  eventID: string;
  isCurrentRace: boolean | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Result: {
    __typename: "Result";
    id: string;
    videoUrl: string | null;
    totalPot: number | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  Horses: {
    __typename: "ModelHorseConnection";
    nextToken: string | null;
    startedAt: number | null;
  } | null;
};

export type OnCreateEventSubscription = {
  __typename: "Event";
  id: string;
  date: string | null;
  eventImage: string | null;
  name: string | null;
  organiser: string | null;
  type: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Races: {
    __typename: "ModelRaceConnection";
    nextToken: string | null;
    startedAt: number | null;
  } | null;
};

export type OnUpdateEventSubscription = {
  __typename: "Event";
  id: string;
  date: string | null;
  eventImage: string | null;
  name: string | null;
  organiser: string | null;
  type: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Races: {
    __typename: "ModelRaceConnection";
    nextToken: string | null;
    startedAt: number | null;
  } | null;
};

export type OnDeleteEventSubscription = {
  __typename: "Event";
  id: string;
  date: string | null;
  eventImage: string | null;
  name: string | null;
  organiser: string | null;
  type: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Races: {
    __typename: "ModelRaceConnection";
    nextToken: string | null;
    startedAt: number | null;
  } | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateBets(
    input: CreateBetsInput,
    condition?: ModelBetsConditionInput
  ): Promise<CreateBetsMutation> {
    const statement = `mutation CreateBets($input: CreateBetsInput!, $condition: ModelBetsConditionInput) {
        createBets(input: $input, condition: $condition) {
          __typename
          id
          isProcessed
          finalOdds
          payout
          status
          stake
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Horse {
            __typename
            id
            number
            name
            liveOdds
            totalBetsForHorse
            raceID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBetsMutation>response.data.createBets;
  }
  async UpdateBets(
    input: UpdateBetsInput,
    condition?: ModelBetsConditionInput
  ): Promise<UpdateBetsMutation> {
    const statement = `mutation UpdateBets($input: UpdateBetsInput!, $condition: ModelBetsConditionInput) {
        updateBets(input: $input, condition: $condition) {
          __typename
          id
          isProcessed
          finalOdds
          payout
          status
          stake
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Horse {
            __typename
            id
            number
            name
            liveOdds
            totalBetsForHorse
            raceID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBetsMutation>response.data.updateBets;
  }
  async DeleteBets(
    input: DeleteBetsInput,
    condition?: ModelBetsConditionInput
  ): Promise<DeleteBetsMutation> {
    const statement = `mutation DeleteBets($input: DeleteBetsInput!, $condition: ModelBetsConditionInput) {
        deleteBets(input: $input, condition: $condition) {
          __typename
          id
          isProcessed
          finalOdds
          payout
          status
          stake
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Horse {
            __typename
            id
            number
            name
            liveOdds
            totalBetsForHorse
            raceID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBetsMutation>response.data.deleteBets;
  }
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          avatorUrl
          name
          balance
          payments
          subscribedEvents
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          avatorUrl
          name
          balance
          payments
          subscribedEvents
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          avatorUrl
          name
          balance
          payments
          subscribedEvents
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateResult(
    input: CreateResultInput,
    condition?: ModelResultConditionInput
  ): Promise<CreateResultMutation> {
    const statement = `mutation CreateResult($input: CreateResultInput!, $condition: ModelResultConditionInput) {
        createResult(input: $input, condition: $condition) {
          __typename
          id
          videoUrl
          totalPot
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          WinningHorse {
            __typename
            id
            number
            name
            liveOdds
            totalBetsForHorse
            raceID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateResultMutation>response.data.createResult;
  }
  async UpdateResult(
    input: UpdateResultInput,
    condition?: ModelResultConditionInput
  ): Promise<UpdateResultMutation> {
    const statement = `mutation UpdateResult($input: UpdateResultInput!, $condition: ModelResultConditionInput) {
        updateResult(input: $input, condition: $condition) {
          __typename
          id
          videoUrl
          totalPot
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          WinningHorse {
            __typename
            id
            number
            name
            liveOdds
            totalBetsForHorse
            raceID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateResultMutation>response.data.updateResult;
  }
  async DeleteResult(
    input: DeleteResultInput,
    condition?: ModelResultConditionInput
  ): Promise<DeleteResultMutation> {
    const statement = `mutation DeleteResult($input: DeleteResultInput!, $condition: ModelResultConditionInput) {
        deleteResult(input: $input, condition: $condition) {
          __typename
          id
          videoUrl
          totalPot
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          WinningHorse {
            __typename
            id
            number
            name
            liveOdds
            totalBetsForHorse
            raceID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteResultMutation>response.data.deleteResult;
  }
  async CreateHorse(
    input: CreateHorseInput,
    condition?: ModelHorseConditionInput
  ): Promise<CreateHorseMutation> {
    const statement = `mutation CreateHorse($input: CreateHorseInput!, $condition: ModelHorseConditionInput) {
        createHorse(input: $input, condition: $condition) {
          __typename
          id
          number
          name
          liveOdds
          totalBetsForHorse
          raceID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateHorseMutation>response.data.createHorse;
  }
  async UpdateHorse(
    input: UpdateHorseInput,
    condition?: ModelHorseConditionInput
  ): Promise<UpdateHorseMutation> {
    const statement = `mutation UpdateHorse($input: UpdateHorseInput!, $condition: ModelHorseConditionInput) {
        updateHorse(input: $input, condition: $condition) {
          __typename
          id
          number
          name
          liveOdds
          totalBetsForHorse
          raceID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateHorseMutation>response.data.updateHorse;
  }
  async DeleteHorse(
    input: DeleteHorseInput,
    condition?: ModelHorseConditionInput
  ): Promise<DeleteHorseMutation> {
    const statement = `mutation DeleteHorse($input: DeleteHorseInput!, $condition: ModelHorseConditionInput) {
        deleteHorse(input: $input, condition: $condition) {
          __typename
          id
          number
          name
          liveOdds
          totalBetsForHorse
          raceID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteHorseMutation>response.data.deleteHorse;
  }
  async CreateRace(
    input: CreateRaceInput,
    condition?: ModelRaceConditionInput
  ): Promise<CreateRaceMutation> {
    const statement = `mutation CreateRace($input: CreateRaceInput!, $condition: ModelRaceConditionInput) {
        createRace(input: $input, condition: $condition) {
          __typename
          id
          isActive
          name
          payoutFactor
          raceCardImageUrl
          number
          time
          showPayoutFactor
          eventID
          isCurrentRace
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Result {
            __typename
            id
            videoUrl
            totalPot
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          Horses {
            __typename
            nextToken
            startedAt
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRaceMutation>response.data.createRace;
  }
  async UpdateRace(
    input: UpdateRaceInput,
    condition?: ModelRaceConditionInput
  ): Promise<UpdateRaceMutation> {
    const statement = `mutation UpdateRace($input: UpdateRaceInput!, $condition: ModelRaceConditionInput) {
        updateRace(input: $input, condition: $condition) {
          __typename
          id
          isActive
          name
          payoutFactor
          raceCardImageUrl
          number
          time
          showPayoutFactor
          eventID
          isCurrentRace
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Result {
            __typename
            id
            videoUrl
            totalPot
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          Horses {
            __typename
            nextToken
            startedAt
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRaceMutation>response.data.updateRace;
  }
  async DeleteRace(
    input: DeleteRaceInput,
    condition?: ModelRaceConditionInput
  ): Promise<DeleteRaceMutation> {
    const statement = `mutation DeleteRace($input: DeleteRaceInput!, $condition: ModelRaceConditionInput) {
        deleteRace(input: $input, condition: $condition) {
          __typename
          id
          isActive
          name
          payoutFactor
          raceCardImageUrl
          number
          time
          showPayoutFactor
          eventID
          isCurrentRace
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Result {
            __typename
            id
            videoUrl
            totalPot
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          Horses {
            __typename
            nextToken
            startedAt
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRaceMutation>response.data.deleteRace;
  }
  async CreateEvent(
    input: CreateEventInput,
    condition?: ModelEventConditionInput
  ): Promise<CreateEventMutation> {
    const statement = `mutation CreateEvent($input: CreateEventInput!, $condition: ModelEventConditionInput) {
        createEvent(input: $input, condition: $condition) {
          __typename
          id
          date
          eventImage
          name
          organiser
          type
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Races {
            __typename
            nextToken
            startedAt
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateEventMutation>response.data.createEvent;
  }
  async UpdateEvent(
    input: UpdateEventInput,
    condition?: ModelEventConditionInput
  ): Promise<UpdateEventMutation> {
    const statement = `mutation UpdateEvent($input: UpdateEventInput!, $condition: ModelEventConditionInput) {
        updateEvent(input: $input, condition: $condition) {
          __typename
          id
          date
          eventImage
          name
          organiser
          type
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Races {
            __typename
            nextToken
            startedAt
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateEventMutation>response.data.updateEvent;
  }
  async DeleteEvent(
    input: DeleteEventInput,
    condition?: ModelEventConditionInput
  ): Promise<DeleteEventMutation> {
    const statement = `mutation DeleteEvent($input: DeleteEventInput!, $condition: ModelEventConditionInput) {
        deleteEvent(input: $input, condition: $condition) {
          __typename
          id
          date
          eventImage
          name
          organiser
          type
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Races {
            __typename
            nextToken
            startedAt
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteEventMutation>response.data.deleteEvent;
  }
  async GetBets(id: string): Promise<GetBetsQuery> {
    const statement = `query GetBets($id: ID!) {
        getBets(id: $id) {
          __typename
          id
          isProcessed
          finalOdds
          payout
          status
          stake
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Horse {
            __typename
            id
            number
            name
            liveOdds
            totalBetsForHorse
            raceID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBetsQuery>response.data.getBets;
  }
  async ListBetss(
    filter?: ModelBetsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBetssQuery> {
    const statement = `query ListBetss($filter: ModelBetsFilterInput, $limit: Int, $nextToken: String) {
        listBetss(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            isProcessed
            finalOdds
            payout
            status
            stake
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBetssQuery>response.data.listBetss;
  }
  async SyncBets(
    filter?: ModelBetsFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncBetsQuery> {
    const statement = `query SyncBets($filter: ModelBetsFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncBets(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            isProcessed
            finalOdds
            payout
            status
            stake
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncBetsQuery>response.data.syncBets;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          avatorUrl
          name
          balance
          payments
          subscribedEvents
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            avatorUrl
            name
            balance
            payments
            subscribedEvents
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async SyncUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncUsersQuery> {
    const statement = `query SyncUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncUsers(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            avatorUrl
            name
            balance
            payments
            subscribedEvents
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncUsersQuery>response.data.syncUsers;
  }
  async ListResults(
    filter?: ModelResultFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListResultsQuery> {
    const statement = `query ListResults($filter: ModelResultFilterInput, $limit: Int, $nextToken: String) {
        listResults(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            videoUrl
            totalPot
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListResultsQuery>response.data.listResults;
  }
  async GetResult(id: string): Promise<GetResultQuery> {
    const statement = `query GetResult($id: ID!) {
        getResult(id: $id) {
          __typename
          id
          videoUrl
          totalPot
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          WinningHorse {
            __typename
            id
            number
            name
            liveOdds
            totalBetsForHorse
            raceID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetResultQuery>response.data.getResult;
  }
  async SyncResults(
    filter?: ModelResultFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncResultsQuery> {
    const statement = `query SyncResults($filter: ModelResultFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncResults(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            videoUrl
            totalPot
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncResultsQuery>response.data.syncResults;
  }
  async GetHorse(id: string): Promise<GetHorseQuery> {
    const statement = `query GetHorse($id: ID!) {
        getHorse(id: $id) {
          __typename
          id
          number
          name
          liveOdds
          totalBetsForHorse
          raceID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetHorseQuery>response.data.getHorse;
  }
  async ListHorses(
    filter?: ModelHorseFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListHorsesQuery> {
    const statement = `query ListHorses($filter: ModelHorseFilterInput, $limit: Int, $nextToken: String) {
        listHorses(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            number
            name
            liveOdds
            totalBetsForHorse
            raceID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListHorsesQuery>response.data.listHorses;
  }
  async SyncHorses(
    filter?: ModelHorseFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncHorsesQuery> {
    const statement = `query SyncHorses($filter: ModelHorseFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncHorses(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            number
            name
            liveOdds
            totalBetsForHorse
            raceID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncHorsesQuery>response.data.syncHorses;
  }
  async GetRace(id: string): Promise<GetRaceQuery> {
    const statement = `query GetRace($id: ID!) {
        getRace(id: $id) {
          __typename
          id
          isActive
          name
          payoutFactor
          raceCardImageUrl
          number
          time
          showPayoutFactor
          eventID
          isCurrentRace
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Result {
            __typename
            id
            videoUrl
            totalPot
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          Horses {
            __typename
            nextToken
            startedAt
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRaceQuery>response.data.getRace;
  }
  async ListRaces(
    filter?: ModelRaceFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRacesQuery> {
    const statement = `query ListRaces($filter: ModelRaceFilterInput, $limit: Int, $nextToken: String) {
        listRaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            isActive
            name
            payoutFactor
            raceCardImageUrl
            number
            time
            showPayoutFactor
            eventID
            isCurrentRace
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRacesQuery>response.data.listRaces;
  }
  async SyncRaces(
    filter?: ModelRaceFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncRacesQuery> {
    const statement = `query SyncRaces($filter: ModelRaceFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncRaces(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            isActive
            name
            payoutFactor
            raceCardImageUrl
            number
            time
            showPayoutFactor
            eventID
            isCurrentRace
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncRacesQuery>response.data.syncRaces;
  }
  async GetEvent(id: string): Promise<GetEventQuery> {
    const statement = `query GetEvent($id: ID!) {
        getEvent(id: $id) {
          __typename
          id
          date
          eventImage
          name
          organiser
          type
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Races {
            __typename
            nextToken
            startedAt
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetEventQuery>response.data.getEvent;
  }
  async ListEvents(
    filter?: ModelEventFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListEventsQuery> {
    const statement = `query ListEvents($filter: ModelEventFilterInput, $limit: Int, $nextToken: String) {
        listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            date
            eventImage
            name
            organiser
            type
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListEventsQuery>response.data.listEvents;
  }
  async SyncEvents(
    filter?: ModelEventFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncEventsQuery> {
    const statement = `query SyncEvents($filter: ModelEventFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncEvents(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            date
            eventImage
            name
            organiser
            type
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncEventsQuery>response.data.syncEvents;
  }
  OnCreateBetsListener: Observable<
    SubscriptionResponse<OnCreateBetsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateBets {
        onCreateBets {
          __typename
          id
          isProcessed
          finalOdds
          payout
          status
          stake
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Horse {
            __typename
            id
            number
            name
            liveOdds
            totalBetsForHorse
            raceID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateBetsSubscription>>;

  OnUpdateBetsListener: Observable<
    SubscriptionResponse<OnUpdateBetsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateBets {
        onUpdateBets {
          __typename
          id
          isProcessed
          finalOdds
          payout
          status
          stake
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Horse {
            __typename
            id
            number
            name
            liveOdds
            totalBetsForHorse
            raceID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateBetsSubscription>>;

  OnDeleteBetsListener: Observable<
    SubscriptionResponse<OnDeleteBetsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteBets {
        onDeleteBets {
          __typename
          id
          isProcessed
          finalOdds
          payout
          status
          stake
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Horse {
            __typename
            id
            number
            name
            liveOdds
            totalBetsForHorse
            raceID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteBetsSubscription>>;

  OnCreateUserListener: Observable<
    SubscriptionResponse<OnCreateUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          avatorUrl
          name
          balance
          payments
          subscribedEvents
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateUserSubscription>>;

  OnUpdateUserListener: Observable<
    SubscriptionResponse<OnUpdateUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          avatorUrl
          name
          balance
          payments
          subscribedEvents
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateUserSubscription>>;

  OnDeleteUserListener: Observable<
    SubscriptionResponse<OnDeleteUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          avatorUrl
          name
          balance
          payments
          subscribedEvents
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteUserSubscription>>;

  OnCreateResultListener: Observable<
    SubscriptionResponse<OnCreateResultSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateResult {
        onCreateResult {
          __typename
          id
          videoUrl
          totalPot
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          WinningHorse {
            __typename
            id
            number
            name
            liveOdds
            totalBetsForHorse
            raceID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateResultSubscription>>;

  OnUpdateResultListener: Observable<
    SubscriptionResponse<OnUpdateResultSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateResult {
        onUpdateResult {
          __typename
          id
          videoUrl
          totalPot
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          WinningHorse {
            __typename
            id
            number
            name
            liveOdds
            totalBetsForHorse
            raceID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateResultSubscription>>;

  OnDeleteResultListener: Observable<
    SubscriptionResponse<OnDeleteResultSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteResult {
        onDeleteResult {
          __typename
          id
          videoUrl
          totalPot
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          WinningHorse {
            __typename
            id
            number
            name
            liveOdds
            totalBetsForHorse
            raceID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteResultSubscription>>;

  OnCreateHorseListener: Observable<
    SubscriptionResponse<OnCreateHorseSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateHorse {
        onCreateHorse {
          __typename
          id
          number
          name
          liveOdds
          totalBetsForHorse
          raceID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateHorseSubscription>>;

  OnUpdateHorseListener: Observable<
    SubscriptionResponse<OnUpdateHorseSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateHorse {
        onUpdateHorse {
          __typename
          id
          number
          name
          liveOdds
          totalBetsForHorse
          raceID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateHorseSubscription>>;

  OnDeleteHorseListener: Observable<
    SubscriptionResponse<OnDeleteHorseSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteHorse {
        onDeleteHorse {
          __typename
          id
          number
          name
          liveOdds
          totalBetsForHorse
          raceID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteHorseSubscription>>;

  OnCreateRaceListener: Observable<
    SubscriptionResponse<OnCreateRaceSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateRace {
        onCreateRace {
          __typename
          id
          isActive
          name
          payoutFactor
          raceCardImageUrl
          number
          time
          showPayoutFactor
          eventID
          isCurrentRace
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Result {
            __typename
            id
            videoUrl
            totalPot
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          Horses {
            __typename
            nextToken
            startedAt
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateRaceSubscription>>;

  OnUpdateRaceListener: Observable<
    SubscriptionResponse<OnUpdateRaceSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateRace {
        onUpdateRace {
          __typename
          id
          isActive
          name
          payoutFactor
          raceCardImageUrl
          number
          time
          showPayoutFactor
          eventID
          isCurrentRace
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Result {
            __typename
            id
            videoUrl
            totalPot
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          Horses {
            __typename
            nextToken
            startedAt
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateRaceSubscription>>;

  OnDeleteRaceListener: Observable<
    SubscriptionResponse<OnDeleteRaceSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteRace {
        onDeleteRace {
          __typename
          id
          isActive
          name
          payoutFactor
          raceCardImageUrl
          number
          time
          showPayoutFactor
          eventID
          isCurrentRace
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Result {
            __typename
            id
            videoUrl
            totalPot
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          Horses {
            __typename
            nextToken
            startedAt
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteRaceSubscription>>;

  OnCreateEventListener: Observable<
    SubscriptionResponse<OnCreateEventSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateEvent {
        onCreateEvent {
          __typename
          id
          date
          eventImage
          name
          organiser
          type
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Races {
            __typename
            nextToken
            startedAt
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateEventSubscription>>;

  OnUpdateEventListener: Observable<
    SubscriptionResponse<OnUpdateEventSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateEvent {
        onUpdateEvent {
          __typename
          id
          date
          eventImage
          name
          organiser
          type
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Races {
            __typename
            nextToken
            startedAt
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateEventSubscription>>;

  OnDeleteEventListener: Observable<
    SubscriptionResponse<OnDeleteEventSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteEvent {
        onDeleteEvent {
          __typename
          id
          date
          eventImage
          name
          organiser
          type
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Races {
            __typename
            nextToken
            startedAt
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteEventSubscription>>;
}
