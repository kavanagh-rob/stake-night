import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Bet {
  readonly id: string;
  readonly isProcessed?: boolean;
  readonly finalOdds?: number;
  readonly payout?: number;
  readonly result?: string;
  readonly stake: number;
  readonly Horse?: Horse;
  readonly raceId: string;
  readonly playerProfileId?: string;
  readonly paymentStatus?: string;
  readonly raceNumber?: string;
  readonly playerName?: string;
  constructor(init: ModelInit<Bet>);
  static copyOf(source: Bet, mutator: (draft: MutableModel<Bet>) => MutableModel<Bet> | void): Bet;
}

export declare class Horse {
  readonly id: string;
  readonly number: number;
  readonly name: string;
  readonly liveOdds?: number;
  readonly totalBetsForHorse?: number;
  readonly raceID: string;
  constructor(init: ModelInit<Horse>);
  static copyOf(source: Horse, mutator: (draft: MutableModel<Horse>) => MutableModel<Horse> | void): Horse;
}

export declare class PlayerProfile {
  readonly id: string;
  readonly avatorUrl?: string;
  readonly name: string;
  readonly balance?: number;
  readonly payments?: string;
  readonly eventId?: string;
  readonly userId?: string;
  constructor(init: ModelInit<PlayerProfile>);
  static copyOf(source: PlayerProfile, mutator: (draft: MutableModel<PlayerProfile>) => MutableModel<PlayerProfile> | void): PlayerProfile;
}

export declare class Result {
  readonly id: string;
  readonly videoUrl?: string;
  readonly totalPot?: number;
  readonly eventId?: string;
  readonly raceId?: string;
  readonly finalOdds?: number;
  readonly raceNumber?: number;
  readonly winningHorseId?: string;
  readonly winningHorseName?: string;
  readonly winningHorseNumber?: number;
  constructor(init: ModelInit<Result>);
  static copyOf(source: Result, mutator: (draft: MutableModel<Result>) => MutableModel<Result> | void): Result;
}

export declare class Race {
  readonly id: string;
  readonly isActive?: boolean;
  readonly name?: string;
  readonly payoutFactor?: number;
  readonly raceCardImageUrl?: string;
  readonly number?: number;
  readonly time?: string;
  readonly showPayoutFactor?: boolean;
  readonly eventID: string;
  readonly Horses?: (Horse | null)[];
  readonly Result?: Result;
  readonly isCurrentRace?: boolean;
  constructor(init: ModelInit<Race>);
  static copyOf(source: Race, mutator: (draft: MutableModel<Race>) => MutableModel<Race> | void): Race;
}

export declare class Event {
  readonly id: string;
  readonly date?: string;
  readonly eventImage?: string;
  readonly name?: string;
  readonly organiser?: string;
  readonly Races?: (Race | null)[];
  readonly type?: string;
  constructor(init: ModelInit<Event>);
  static copyOf(source: Event, mutator: (draft: MutableModel<Event>) => MutableModel<Event> | void): Event;
}