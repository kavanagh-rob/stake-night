/* tslint:disable */
/* eslint-disable */
//  Custom Querys  
//  This file needs to be updated if schema api is updated 
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { ListBetsQuery, ListRacesQuery, ModelBetFilterInput, ModelRaceFilterInput, ListResultsQuery, ModelResultFilterInput } from "./API.service";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}



@Injectable({
  providedIn: "root"
})
export class APICustomService {

  async ListRacesWithHorses(
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
            Horses {
              __typename
              nextToken
              items {
                id
                number
                name
                liveOdds
                totalBetsForHorse
                raceID
              }
            }
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

  async ListBetsWithHorseInfo(
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
          playerName
          raceNumber
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
  
}
