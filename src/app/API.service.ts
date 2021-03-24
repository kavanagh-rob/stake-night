/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateBetInput = {
  id?: string | null;
  isProcessed?: boolean | null;
  finalOdds?: number | null;
  payout?: number | null;
  result?: string | null;
  stake: number;
  raceId: string;
  playerProfileId?: string | null;
  paymentStatus?: string | null;
  raceNumber?: string | null;
  playerName?: string | null;
  betHorseId?: string | null;
};

export type ModelBetConditionInput = {
  isProcessed?: ModelBooleanInput | null;
  finalOdds?: ModelFloatInput | null;
  payout?: ModelFloatInput | null;
  result?: ModelStringInput | null;
  stake?: ModelFloatInput | null;
  raceId?: ModelStringInput | null;
  playerProfileId?: ModelStringInput | null;
  paymentStatus?: ModelStringInput | null;
  raceNumber?: ModelStringInput | null;
  playerName?: ModelStringInput | null;
  and?: Array<ModelBetConditionInput | null> | null;
  or?: Array<ModelBetConditionInput | null> | null;
  not?: ModelBetConditionInput | null;
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

export type UpdateBetInput = {
  id: string;
  isProcessed?: boolean | null;
  finalOdds?: number | null;
  payout?: number | null;
  result?: string | null;
  stake?: number | null;
  raceId?: string | null;
  playerProfileId?: string | null;
  paymentStatus?: string | null;
  raceNumber?: string | null;
  playerName?: string | null;
  betHorseId?: string | null;
};

export type DeleteBetInput = {
  id?: string | null;
};

export type CreatePlayerProfileInput = {
  id?: string | null;
  avatorUrl?: string | null;
  name: string;
  balance?: number | null;
  payments?: string | null;
  eventId?: string | null;
  userId?: string | null;
};

export type ModelPlayerProfileConditionInput = {
  avatorUrl?: ModelStringInput | null;
  name?: ModelStringInput | null;
  balance?: ModelFloatInput | null;
  payments?: ModelStringInput | null;
  eventId?: ModelStringInput | null;
  userId?: ModelStringInput | null;
  and?: Array<ModelPlayerProfileConditionInput | null> | null;
  or?: Array<ModelPlayerProfileConditionInput | null> | null;
  not?: ModelPlayerProfileConditionInput | null;
};

export type UpdatePlayerProfileInput = {
  id: string;
  avatorUrl?: string | null;
  name?: string | null;
  balance?: number | null;
  payments?: string | null;
  eventId?: string | null;
  userId?: string | null;
};

export type DeletePlayerProfileInput = {
  id?: string | null;
};

export type CreateResultInput = {
  id?: string | null;
  videoUrl?: string | null;
  totalPot?: number | null;
  eventId?: string | null;
  raceId?: string | null;
  finalOdds?: number | null;
  raceNumber?: number | null;
  winningHorseId?: string | null;
  winningHorseName?: string | null;
  winningHorseNumber?: number | null;
};

export type ModelResultConditionInput = {
  videoUrl?: ModelStringInput | null;
  totalPot?: ModelFloatInput | null;
  eventId?: ModelStringInput | null;
  raceId?: ModelStringInput | null;
  finalOdds?: ModelFloatInput | null;
  raceNumber?: ModelIntInput | null;
  winningHorseId?: ModelStringInput | null;
  winningHorseName?: ModelStringInput | null;
  winningHorseNumber?: ModelIntInput | null;
  and?: Array<ModelResultConditionInput | null> | null;
  or?: Array<ModelResultConditionInput | null> | null;
  not?: ModelResultConditionInput | null;
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

export type UpdateResultInput = {
  id: string;
  videoUrl?: string | null;
  totalPot?: number | null;
  eventId?: string | null;
  raceId?: string | null;
  finalOdds?: number | null;
  raceNumber?: number | null;
  winningHorseId?: string | null;
  winningHorseName?: string | null;
  winningHorseNumber?: number | null;
};

export type DeleteResultInput = {
  id?: string | null;
};

export type CreateHorseInput = {
  id?: string | null;
  number: number;
  name: string;
  liveOdds?: number | null;
  totalBetsForHorse?: number | null;
  raceID: string;
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
};

export type DeleteHorseInput = {
  id?: string | null;
};

export type CreateRaceInput = {
  id?: string | null;
  isActive?: boolean | null;
  name?: string | null;
  payoutFactor?: number | null;
  raceCardImageUrl?: string | null;
  number?: number | null;
  time?: string | null;
  showPayoutFactor?: boolean | null;
  eventID: string;
  isCurrentRace?: boolean | null;
  raceResultId?: string | null;
};

export type ModelRaceConditionInput = {
  isActive?: ModelBooleanInput | null;
  name?: ModelStringInput | null;
  payoutFactor?: ModelFloatInput | null;
  raceCardImageUrl?: ModelStringInput | null;
  number?: ModelIntInput | null;
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
  number?: number | null;
  time?: string | null;
  showPayoutFactor?: boolean | null;
  eventID?: string | null;
  isCurrentRace?: boolean | null;
  raceResultId?: string | null;
};

export type DeleteRaceInput = {
  id?: string | null;
};

export type CreateEventInput = {
  id?: string | null;
  date?: string | null;
  eventImage?: string | null;
  name?: string | null;
  organiser?: string | null;
  type?: string | null;
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
};

export type DeleteEventInput = {
  id?: string | null;
};

export type ModelBetFilterInput = {
  id?: ModelIDInput | null;
  isProcessed?: ModelBooleanInput | null;
  finalOdds?: ModelFloatInput | null;
  payout?: ModelFloatInput | null;
  result?: ModelStringInput | null;
  stake?: ModelFloatInput | null;
  raceId?: ModelStringInput | null;
  playerProfileId?: ModelStringInput | null;
  paymentStatus?: ModelStringInput | null;
  raceNumber?: ModelStringInput | null;
  playerName?: ModelStringInput | null;
  and?: Array<ModelBetFilterInput | null> | null;
  or?: Array<ModelBetFilterInput | null> | null;
  not?: ModelBetFilterInput | null;
};

export type ModelPlayerProfileFilterInput = {
  id?: ModelIDInput | null;
  avatorUrl?: ModelStringInput | null;
  name?: ModelStringInput | null;
  balance?: ModelFloatInput | null;
  payments?: ModelStringInput | null;
  eventId?: ModelStringInput | null;
  userId?: ModelStringInput | null;
  and?: Array<ModelPlayerProfileFilterInput | null> | null;
  or?: Array<ModelPlayerProfileFilterInput | null> | null;
  not?: ModelPlayerProfileFilterInput | null;
};

export type ModelResultFilterInput = {
  id?: ModelIDInput | null;
  videoUrl?: ModelStringInput | null;
  totalPot?: ModelFloatInput | null;
  eventId?: ModelStringInput | null;
  raceId?: ModelStringInput | null;
  finalOdds?: ModelFloatInput | null;
  raceNumber?: ModelIntInput | null;
  winningHorseId?: ModelStringInput | null;
  winningHorseName?: ModelStringInput | null;
  winningHorseNumber?: ModelIntInput | null;
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
  number?: ModelIntInput | null;
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

export type CreateBetMutation = {
  __typename: "Bet";
  id: string;
  isProcessed: boolean | null;
  finalOdds: number | null;
  payout: number | null;
  result: string | null;
  stake: number;
  raceId: string;
  playerProfileId: string | null;
  paymentStatus: string | null;
  raceNumber: string | null;
  playerName: string | null;
  createdAt: string;
  updatedAt: string;
  Horse: {
    __typename: "Horse";
    id: string;
    number: number;
    name: string;
    liveOdds: number | null;
    totalBetsForHorse: number | null;
    raceID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateBetMutation = {
  __typename: "Bet";
  id: string;
  isProcessed: boolean | null;
  finalOdds: number | null;
  payout: number | null;
  result: string | null;
  stake: number;
  raceId: string;
  playerProfileId: string | null;
  paymentStatus: string | null;
  raceNumber: string | null;
  playerName: string | null;
  createdAt: string;
  updatedAt: string;
  Horse: {
    __typename: "Horse";
    id: string;
    number: number;
    name: string;
    liveOdds: number | null;
    totalBetsForHorse: number | null;
    raceID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteBetMutation = {
  __typename: "Bet";
  id: string;
  isProcessed: boolean | null;
  finalOdds: number | null;
  payout: number | null;
  result: string | null;
  stake: number;
  raceId: string;
  playerProfileId: string | null;
  paymentStatus: string | null;
  raceNumber: string | null;
  playerName: string | null;
  createdAt: string;
  updatedAt: string;
  Horse: {
    __typename: "Horse";
    id: string;
    number: number;
    name: string;
    liveOdds: number | null;
    totalBetsForHorse: number | null;
    raceID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreatePlayerProfileMutation = {
  __typename: "PlayerProfile";
  id: string;
  avatorUrl: string | null;
  name: string;
  balance: number | null;
  payments: string | null;
  eventId: string | null;
  userId: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePlayerProfileMutation = {
  __typename: "PlayerProfile";
  id: string;
  avatorUrl: string | null;
  name: string;
  balance: number | null;
  payments: string | null;
  eventId: string | null;
  userId: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeletePlayerProfileMutation = {
  __typename: "PlayerProfile";
  id: string;
  avatorUrl: string | null;
  name: string;
  balance: number | null;
  payments: string | null;
  eventId: string | null;
  userId: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateResultMutation = {
  __typename: "Result";
  id: string;
  videoUrl: string | null;
  totalPot: number | null;
  eventId: string | null;
  raceId: string | null;
  finalOdds: number | null;
  raceNumber: number | null;
  winningHorseId: string | null;
  winningHorseName: string | null;
  winningHorseNumber: number | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateResultMutation = {
  __typename: "Result";
  id: string;
  videoUrl: string | null;
  totalPot: number | null;
  eventId: string | null;
  raceId: string | null;
  finalOdds: number | null;
  raceNumber: number | null;
  winningHorseId: string | null;
  winningHorseName: string | null;
  winningHorseNumber: number | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteResultMutation = {
  __typename: "Result";
  id: string;
  videoUrl: string | null;
  totalPot: number | null;
  eventId: string | null;
  raceId: string | null;
  finalOdds: number | null;
  raceNumber: number | null;
  winningHorseId: string | null;
  winningHorseName: string | null;
  winningHorseNumber: number | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateHorseMutation = {
  __typename: "Horse";
  id: string;
  number: number;
  name: string;
  liveOdds: number | null;
  totalBetsForHorse: number | null;
  raceID: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateHorseMutation = {
  __typename: "Horse";
  id: string;
  number: number;
  name: string;
  liveOdds: number | null;
  totalBetsForHorse: number | null;
  raceID: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteHorseMutation = {
  __typename: "Horse";
  id: string;
  number: number;
  name: string;
  liveOdds: number | null;
  totalBetsForHorse: number | null;
  raceID: string;
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
  number: number | null;
  time: string | null;
  showPayoutFactor: boolean | null;
  eventID: string;
  isCurrentRace: boolean | null;
  createdAt: string;
  updatedAt: string;
  Result: {
    __typename: "Result";
    id: string;
    videoUrl: string | null;
    totalPot: number | null;
    eventId: string | null;
    raceId: string | null;
    finalOdds: number | null;
    raceNumber: number | null;
    winningHorseId: string | null;
    winningHorseName: string | null;
    winningHorseNumber: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  Horses: {
    __typename: "ModelHorseConnection";
    nextToken: string | null;
  } | null;
};

export type UpdateRaceMutation = {
  __typename: "Race";
  id: string;
  isActive: boolean | null;
  name: string | null;
  payoutFactor: number | null;
  raceCardImageUrl: string | null;
  number: number | null;
  time: string | null;
  showPayoutFactor: boolean | null;
  eventID: string;
  isCurrentRace: boolean | null;
  createdAt: string;
  updatedAt: string;
  Result: {
    __typename: "Result";
    id: string;
    videoUrl: string | null;
    totalPot: number | null;
    eventId: string | null;
    raceId: string | null;
    finalOdds: number | null;
    raceNumber: number | null;
    winningHorseId: string | null;
    winningHorseName: string | null;
    winningHorseNumber: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  Horses: {
    __typename: "ModelHorseConnection";
    nextToken: string | null;
  } | null;
};

export type DeleteRaceMutation = {
  __typename: "Race";
  id: string;
  isActive: boolean | null;
  name: string | null;
  payoutFactor: number | null;
  raceCardImageUrl: string | null;
  number: number | null;
  time: string | null;
  showPayoutFactor: boolean | null;
  eventID: string;
  isCurrentRace: boolean | null;
  createdAt: string;
  updatedAt: string;
  Result: {
    __typename: "Result";
    id: string;
    videoUrl: string | null;
    totalPot: number | null;
    eventId: string | null;
    raceId: string | null;
    finalOdds: number | null;
    raceNumber: number | null;
    winningHorseId: string | null;
    winningHorseName: string | null;
    winningHorseNumber: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  Horses: {
    __typename: "ModelHorseConnection";
    nextToken: string | null;
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
  createdAt: string;
  updatedAt: string;
  Races: {
    __typename: "ModelRaceConnection";
    nextToken: string | null;
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
  createdAt: string;
  updatedAt: string;
  Races: {
    __typename: "ModelRaceConnection";
    nextToken: string | null;
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
  createdAt: string;
  updatedAt: string;
  Races: {
    __typename: "ModelRaceConnection";
    nextToken: string | null;
  } | null;
};

export type GetBetQuery = {
  __typename: "Bet";
  id: string;
  isProcessed: boolean | null;
  finalOdds: number | null;
  payout: number | null;
  result: string | null;
  stake: number;
  raceId: string;
  playerProfileId: string | null;
  paymentStatus: string | null;
  raceNumber: string | null;
  playerName: string | null;
  createdAt: string;
  updatedAt: string;
  Horse: {
    __typename: "Horse";
    id: string;
    number: number;
    name: string;
    liveOdds: number | null;
    totalBetsForHorse: number | null;
    raceID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListBetsQuery = {
  __typename: "ModelBetConnection";
  items: Array<{
    __typename: "Bet";
    id: string;
    isProcessed: boolean | null;
    finalOdds: number | null;
    payout: number | null;
    result: string | null;
    stake: number;
    raceId: string;
    playerProfileId: string | null;
    paymentStatus: string | null;
    raceNumber: string | null;
    playerName: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetPlayerProfileQuery = {
  __typename: "PlayerProfile";
  id: string;
  avatorUrl: string | null;
  name: string;
  balance: number | null;
  payments: string | null;
  eventId: string | null;
  userId: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListPlayerProfilesQuery = {
  __typename: "ModelPlayerProfileConnection";
  items: Array<{
    __typename: "PlayerProfile";
    id: string;
    avatorUrl: string | null;
    name: string;
    balance: number | null;
    payments: string | null;
    eventId: string | null;
    userId: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type ListResultsQuery = {
  __typename: "ModelResultConnection";
  items: Array<{
    __typename: "Result";
    id: string;
    videoUrl: string | null;
    totalPot: number | null;
    eventId: string | null;
    raceId: string | null;
    finalOdds: number | null;
    raceNumber: number | null;
    winningHorseId: string | null;
    winningHorseName: string | null;
    winningHorseNumber: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetResultQuery = {
  __typename: "Result";
  id: string;
  videoUrl: string | null;
  totalPot: number | null;
  eventId: string | null;
  raceId: string | null;
  finalOdds: number | null;
  raceNumber: number | null;
  winningHorseId: string | null;
  winningHorseName: string | null;
  winningHorseNumber: number | null;
  createdAt: string;
  updatedAt: string;
};

export type GetHorseQuery = {
  __typename: "Horse";
  id: string;
  number: number;
  name: string;
  liveOdds: number | null;
  totalBetsForHorse: number | null;
  raceID: string;
  createdAt: string;
  updatedAt: string;
};

export type ListHorsesQuery = {
  __typename: "ModelHorseConnection";
  items: Array<{
    __typename: "Horse";
    id: string;
    number: number;
    name: string;
    liveOdds: number | null;
    totalBetsForHorse: number | null;
    raceID: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetRaceQuery = {
  __typename: "Race";
  id: string;
  isActive: boolean | null;
  name: string | null;
  payoutFactor: number | null;
  raceCardImageUrl: string | null;
  number: number | null;
  time: string | null;
  showPayoutFactor: boolean | null;
  eventID: string;
  isCurrentRace: boolean | null;
  createdAt: string;
  updatedAt: string;
  Result: {
    __typename: "Result";
    id: string;
    videoUrl: string | null;
    totalPot: number | null;
    eventId: string | null;
    raceId: string | null;
    finalOdds: number | null;
    raceNumber: number | null;
    winningHorseId: string | null;
    winningHorseName: string | null;
    winningHorseNumber: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  Horses: {
    __typename: "ModelHorseConnection";
    nextToken: string | null;
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
    number: number | null;
    time: string | null;
    showPayoutFactor: boolean | null;
    eventID: string;
    isCurrentRace: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetEventQuery = {
  __typename: "Event";
  id: string;
  date: string | null;
  eventImage: string | null;
  name: string | null;
  organiser: string | null;
  type: string | null;
  createdAt: string;
  updatedAt: string;
  Races: {
    __typename: "ModelRaceConnection";
    nextToken: string | null;
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
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateBetSubscription = {
  __typename: "Bet";
  id: string;
  isProcessed: boolean | null;
  finalOdds: number | null;
  payout: number | null;
  result: string | null;
  stake: number;
  raceId: string;
  playerProfileId: string | null;
  paymentStatus: string | null;
  raceNumber: string | null;
  playerName: string | null;
  createdAt: string;
  updatedAt: string;
  Horse: {
    __typename: "Horse";
    id: string;
    number: number;
    name: string;
    liveOdds: number | null;
    totalBetsForHorse: number | null;
    raceID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateBetSubscription = {
  __typename: "Bet";
  id: string;
  isProcessed: boolean | null;
  finalOdds: number | null;
  payout: number | null;
  result: string | null;
  stake: number;
  raceId: string;
  playerProfileId: string | null;
  paymentStatus: string | null;
  raceNumber: string | null;
  playerName: string | null;
  createdAt: string;
  updatedAt: string;
  Horse: {
    __typename: "Horse";
    id: string;
    number: number;
    name: string;
    liveOdds: number | null;
    totalBetsForHorse: number | null;
    raceID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteBetSubscription = {
  __typename: "Bet";
  id: string;
  isProcessed: boolean | null;
  finalOdds: number | null;
  payout: number | null;
  result: string | null;
  stake: number;
  raceId: string;
  playerProfileId: string | null;
  paymentStatus: string | null;
  raceNumber: string | null;
  playerName: string | null;
  createdAt: string;
  updatedAt: string;
  Horse: {
    __typename: "Horse";
    id: string;
    number: number;
    name: string;
    liveOdds: number | null;
    totalBetsForHorse: number | null;
    raceID: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreatePlayerProfileSubscription = {
  __typename: "PlayerProfile";
  id: string;
  avatorUrl: string | null;
  name: string;
  balance: number | null;
  payments: string | null;
  eventId: string | null;
  userId: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePlayerProfileSubscription = {
  __typename: "PlayerProfile";
  id: string;
  avatorUrl: string | null;
  name: string;
  balance: number | null;
  payments: string | null;
  eventId: string | null;
  userId: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePlayerProfileSubscription = {
  __typename: "PlayerProfile";
  id: string;
  avatorUrl: string | null;
  name: string;
  balance: number | null;
  payments: string | null;
  eventId: string | null;
  userId: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateResultSubscription = {
  __typename: "Result";
  id: string;
  videoUrl: string | null;
  totalPot: number | null;
  eventId: string | null;
  raceId: string | null;
  finalOdds: number | null;
  raceNumber: number | null;
  winningHorseId: string | null;
  winningHorseName: string | null;
  winningHorseNumber: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateResultSubscription = {
  __typename: "Result";
  id: string;
  videoUrl: string | null;
  totalPot: number | null;
  eventId: string | null;
  raceId: string | null;
  finalOdds: number | null;
  raceNumber: number | null;
  winningHorseId: string | null;
  winningHorseName: string | null;
  winningHorseNumber: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteResultSubscription = {
  __typename: "Result";
  id: string;
  videoUrl: string | null;
  totalPot: number | null;
  eventId: string | null;
  raceId: string | null;
  finalOdds: number | null;
  raceNumber: number | null;
  winningHorseId: string | null;
  winningHorseName: string | null;
  winningHorseNumber: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateHorseSubscription = {
  __typename: "Horse";
  id: string;
  number: number;
  name: string;
  liveOdds: number | null;
  totalBetsForHorse: number | null;
  raceID: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateHorseSubscription = {
  __typename: "Horse";
  id: string;
  number: number;
  name: string;
  liveOdds: number | null;
  totalBetsForHorse: number | null;
  raceID: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteHorseSubscription = {
  __typename: "Horse";
  id: string;
  number: number;
  name: string;
  liveOdds: number | null;
  totalBetsForHorse: number | null;
  raceID: string;
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
  number: number | null;
  time: string | null;
  showPayoutFactor: boolean | null;
  eventID: string;
  isCurrentRace: boolean | null;
  createdAt: string;
  updatedAt: string;
  Result: {
    __typename: "Result";
    id: string;
    videoUrl: string | null;
    totalPot: number | null;
    eventId: string | null;
    raceId: string | null;
    finalOdds: number | null;
    raceNumber: number | null;
    winningHorseId: string | null;
    winningHorseName: string | null;
    winningHorseNumber: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  Horses: {
    __typename: "ModelHorseConnection";
    nextToken: string | null;
  } | null;
};

export type OnUpdateRaceSubscription = {
  __typename: "Race";
  id: string;
  isActive: boolean | null;
  name: string | null;
  payoutFactor: number | null;
  raceCardImageUrl: string | null;
  number: number | null;
  time: string | null;
  showPayoutFactor: boolean | null;
  eventID: string;
  isCurrentRace: boolean | null;
  createdAt: string;
  updatedAt: string;
  Result: {
    __typename: "Result";
    id: string;
    videoUrl: string | null;
    totalPot: number | null;
    eventId: string | null;
    raceId: string | null;
    finalOdds: number | null;
    raceNumber: number | null;
    winningHorseId: string | null;
    winningHorseName: string | null;
    winningHorseNumber: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  Horses: {
    __typename: "ModelHorseConnection";
    nextToken: string | null;
  } | null;
};

export type OnDeleteRaceSubscription = {
  __typename: "Race";
  id: string;
  isActive: boolean | null;
  name: string | null;
  payoutFactor: number | null;
  raceCardImageUrl: string | null;
  number: number | null;
  time: string | null;
  showPayoutFactor: boolean | null;
  eventID: string;
  isCurrentRace: boolean | null;
  createdAt: string;
  updatedAt: string;
  Result: {
    __typename: "Result";
    id: string;
    videoUrl: string | null;
    totalPot: number | null;
    eventId: string | null;
    raceId: string | null;
    finalOdds: number | null;
    raceNumber: number | null;
    winningHorseId: string | null;
    winningHorseName: string | null;
    winningHorseNumber: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  Horses: {
    __typename: "ModelHorseConnection";
    nextToken: string | null;
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
  createdAt: string;
  updatedAt: string;
  Races: {
    __typename: "ModelRaceConnection";
    nextToken: string | null;
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
  createdAt: string;
  updatedAt: string;
  Races: {
    __typename: "ModelRaceConnection";
    nextToken: string | null;
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
  createdAt: string;
  updatedAt: string;
  Races: {
    __typename: "ModelRaceConnection";
    nextToken: string | null;
  } | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateBet(
    input: CreateBetInput,
    condition?: ModelBetConditionInput
  ): Promise<CreateBetMutation> {
    const statement = `mutation CreateBet($input: CreateBetInput!, $condition: ModelBetConditionInput) {
        createBet(input: $input, condition: $condition) {
          __typename
          id
          isProcessed
          finalOdds
          payout
          result
          stake
          raceId
          playerProfileId
          paymentStatus
          raceNumber
          playerName
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
    return <CreateBetMutation>response.data.createBet;
  }
  async UpdateBet(
    input: UpdateBetInput,
    condition?: ModelBetConditionInput
  ): Promise<UpdateBetMutation> {
    const statement = `mutation UpdateBet($input: UpdateBetInput!, $condition: ModelBetConditionInput) {
        updateBet(input: $input, condition: $condition) {
          __typename
          id
          isProcessed
          finalOdds
          payout
          result
          stake
          raceId
          playerProfileId
          paymentStatus
          raceNumber
          playerName
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
    return <UpdateBetMutation>response.data.updateBet;
  }
  async DeleteBet(
    input: DeleteBetInput,
    condition?: ModelBetConditionInput
  ): Promise<DeleteBetMutation> {
    const statement = `mutation DeleteBet($input: DeleteBetInput!, $condition: ModelBetConditionInput) {
        deleteBet(input: $input, condition: $condition) {
          __typename
          id
          isProcessed
          finalOdds
          payout
          result
          stake
          raceId
          playerProfileId
          paymentStatus
          raceNumber
          playerName
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
    return <DeleteBetMutation>response.data.deleteBet;
  }
  async CreatePlayerProfile(
    input: CreatePlayerProfileInput,
    condition?: ModelPlayerProfileConditionInput
  ): Promise<CreatePlayerProfileMutation> {
    const statement = `mutation CreatePlayerProfile($input: CreatePlayerProfileInput!, $condition: ModelPlayerProfileConditionInput) {
        createPlayerProfile(input: $input, condition: $condition) {
          __typename
          id
          avatorUrl
          name
          balance
          payments
          eventId
          userId
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
    return <CreatePlayerProfileMutation>response.data.createPlayerProfile;
  }
  async UpdatePlayerProfile(
    input: UpdatePlayerProfileInput,
    condition?: ModelPlayerProfileConditionInput
  ): Promise<UpdatePlayerProfileMutation> {
    const statement = `mutation UpdatePlayerProfile($input: UpdatePlayerProfileInput!, $condition: ModelPlayerProfileConditionInput) {
        updatePlayerProfile(input: $input, condition: $condition) {
          __typename
          id
          avatorUrl
          name
          balance
          payments
          eventId
          userId
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
    return <UpdatePlayerProfileMutation>response.data.updatePlayerProfile;
  }
  async DeletePlayerProfile(
    input: DeletePlayerProfileInput,
    condition?: ModelPlayerProfileConditionInput
  ): Promise<DeletePlayerProfileMutation> {
    const statement = `mutation DeletePlayerProfile($input: DeletePlayerProfileInput!, $condition: ModelPlayerProfileConditionInput) {
        deletePlayerProfile(input: $input, condition: $condition) {
          __typename
          id
          avatorUrl
          name
          balance
          payments
          eventId
          userId
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
    return <DeletePlayerProfileMutation>response.data.deletePlayerProfile;
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
          eventId
          raceId
          finalOdds
          raceNumber
          winningHorseId
          winningHorseName
          winningHorseNumber
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
          eventId
          raceId
          finalOdds
          raceNumber
          winningHorseId
          winningHorseName
          winningHorseNumber
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
          eventId
          raceId
          finalOdds
          raceNumber
          winningHorseId
          winningHorseName
          winningHorseNumber
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
          createdAt
          updatedAt
          Result {
            __typename
            id
            videoUrl
            totalPot
            eventId
            raceId
            finalOdds
            raceNumber
            winningHorseId
            winningHorseName
            winningHorseNumber
            createdAt
            updatedAt
          }
          Horses {
            __typename
            nextToken
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
          createdAt
          updatedAt
          Result {
            __typename
            id
            videoUrl
            totalPot
            eventId
            raceId
            finalOdds
            raceNumber
            winningHorseId
            winningHorseName
            winningHorseNumber
            createdAt
            updatedAt
          }
          Horses {
            __typename
            nextToken
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
          createdAt
          updatedAt
          Result {
            __typename
            id
            videoUrl
            totalPot
            eventId
            raceId
            finalOdds
            raceNumber
            winningHorseId
            winningHorseName
            winningHorseNumber
            createdAt
            updatedAt
          }
          Horses {
            __typename
            nextToken
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
          createdAt
          updatedAt
          Races {
            __typename
            nextToken
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
          createdAt
          updatedAt
          Races {
            __typename
            nextToken
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
          createdAt
          updatedAt
          Races {
            __typename
            nextToken
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
  async GetBet(id: string): Promise<GetBetQuery> {
    const statement = `query GetBet($id: ID!) {
        getBet(id: $id) {
          __typename
          id
          isProcessed
          finalOdds
          payout
          result
          stake
          raceId
          playerProfileId
          paymentStatus
          raceNumber
          playerName
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
    return <GetBetQuery>response.data.getBet;
  }
  async ListBets(
    filter?: ModelBetFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBetsQuery> {
    const statement = `query ListBets($filter: ModelBetFilterInput, $limit: Int, $nextToken: String) {
        listBets(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            isProcessed
            finalOdds
            payout
            result
            stake
            raceId
            playerProfileId
            paymentStatus
            raceNumber
            playerName
            createdAt
            updatedAt
          }
          nextToken
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
    return <ListBetsQuery>response.data.listBets;
  }
  async GetPlayerProfile(id: string): Promise<GetPlayerProfileQuery> {
    const statement = `query GetPlayerProfile($id: ID!) {
        getPlayerProfile(id: $id) {
          __typename
          id
          avatorUrl
          name
          balance
          payments
          eventId
          userId
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
    return <GetPlayerProfileQuery>response.data.getPlayerProfile;
  }
  async ListPlayerProfiles(
    filter?: ModelPlayerProfileFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPlayerProfilesQuery> {
    const statement = `query ListPlayerProfiles($filter: ModelPlayerProfileFilterInput, $limit: Int, $nextToken: String) {
        listPlayerProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            avatorUrl
            name
            balance
            payments
            eventId
            userId
            createdAt
            updatedAt
          }
          nextToken
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
    return <ListPlayerProfilesQuery>response.data.listPlayerProfiles;
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
            eventId
            raceId
            finalOdds
            raceNumber
            winningHorseId
            winningHorseName
            winningHorseNumber
            createdAt
            updatedAt
          }
          nextToken
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
          eventId
          raceId
          finalOdds
          raceNumber
          winningHorseId
          winningHorseName
          winningHorseNumber
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
    return <GetResultQuery>response.data.getResult;
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
            createdAt
            updatedAt
          }
          nextToken
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
          createdAt
          updatedAt
          Result {
            __typename
            id
            videoUrl
            totalPot
            eventId
            raceId
            finalOdds
            raceNumber
            winningHorseId
            winningHorseName
            winningHorseNumber
            createdAt
            updatedAt
          }
          Horses {
            __typename
            nextToken
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
            createdAt
            updatedAt
          }
          nextToken
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
          createdAt
          updatedAt
          Races {
            __typename
            nextToken
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
            createdAt
            updatedAt
          }
          nextToken
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
  OnCreateBetListener: Observable<
    SubscriptionResponse<OnCreateBetSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateBet {
        onCreateBet {
          __typename
          id
          isProcessed
          finalOdds
          payout
          result
          stake
          raceId
          playerProfileId
          paymentStatus
          raceNumber
          playerName
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
            createdAt
            updatedAt
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateBetSubscription>>;

  OnUpdateBetListener: Observable<
    SubscriptionResponse<OnUpdateBetSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateBet {
        onUpdateBet {
          __typename
          id
          isProcessed
          finalOdds
          payout
          result
          stake
          raceId
          playerProfileId
          paymentStatus
          raceNumber
          playerName
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
            createdAt
            updatedAt
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateBetSubscription>>;

  OnDeleteBetListener: Observable<
    SubscriptionResponse<OnDeleteBetSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteBet {
        onDeleteBet {
          __typename
          id
          isProcessed
          finalOdds
          payout
          result
          stake
          raceId
          playerProfileId
          paymentStatus
          raceNumber
          playerName
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
            createdAt
            updatedAt
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteBetSubscription>>;

  OnCreatePlayerProfileListener: Observable<
    SubscriptionResponse<OnCreatePlayerProfileSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePlayerProfile {
        onCreatePlayerProfile {
          __typename
          id
          avatorUrl
          name
          balance
          payments
          eventId
          userId
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreatePlayerProfileSubscription>>;

  OnUpdatePlayerProfileListener: Observable<
    SubscriptionResponse<OnUpdatePlayerProfileSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePlayerProfile {
        onUpdatePlayerProfile {
          __typename
          id
          avatorUrl
          name
          balance
          payments
          eventId
          userId
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdatePlayerProfileSubscription>>;

  OnDeletePlayerProfileListener: Observable<
    SubscriptionResponse<OnDeletePlayerProfileSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePlayerProfile {
        onDeletePlayerProfile {
          __typename
          id
          avatorUrl
          name
          balance
          payments
          eventId
          userId
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeletePlayerProfileSubscription>>;

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
          eventId
          raceId
          finalOdds
          raceNumber
          winningHorseId
          winningHorseName
          winningHorseNumber
          createdAt
          updatedAt
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
          eventId
          raceId
          finalOdds
          raceNumber
          winningHorseId
          winningHorseName
          winningHorseNumber
          createdAt
          updatedAt
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
          eventId
          raceId
          finalOdds
          raceNumber
          winningHorseId
          winningHorseName
          winningHorseNumber
          createdAt
          updatedAt
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
          createdAt
          updatedAt
          Result {
            __typename
            id
            videoUrl
            totalPot
            eventId
            raceId
            finalOdds
            raceNumber
            winningHorseId
            winningHorseName
            winningHorseNumber
            createdAt
            updatedAt
          }
          Horses {
            __typename
            nextToken
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
          createdAt
          updatedAt
          Result {
            __typename
            id
            videoUrl
            totalPot
            eventId
            raceId
            finalOdds
            raceNumber
            winningHorseId
            winningHorseName
            winningHorseNumber
            createdAt
            updatedAt
          }
          Horses {
            __typename
            nextToken
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
          createdAt
          updatedAt
          Result {
            __typename
            id
            videoUrl
            totalPot
            eventId
            raceId
            finalOdds
            raceNumber
            winningHorseId
            winningHorseName
            winningHorseNumber
            createdAt
            updatedAt
          }
          Horses {
            __typename
            nextToken
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
          createdAt
          updatedAt
          Races {
            __typename
            nextToken
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
          createdAt
          updatedAt
          Races {
            __typename
            nextToken
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
          createdAt
          updatedAt
          Races {
            __typename
            nextToken
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteEventSubscription>>;
}
