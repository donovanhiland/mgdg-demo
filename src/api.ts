export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Rocket = {
  __typename: "Rocket";
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

export type Launch = {
  __typename: "Launch";
  id: Scalars["ID"];
  site?: Maybe<Scalars["String"]>;
  mission?: Maybe<Mission>;
  rocket?: Maybe<Rocket>;
  isBooked: Scalars["Boolean"];
};

export type User = {
  __typename: "User";
  id: Scalars["ID"];
  email: Scalars["String"];
  trips: Array<Maybe<Launch>>;
};

export type Mission = {
  __typename: "Mission";
  name?: Maybe<Scalars["String"]>;
  missionPatch?: Maybe<Scalars["String"]>;
};

export type MissionMissionPatchArgs = {
  size?: Maybe<PatchSize>;
};

export enum PatchSize {
  Small = "SMALL",
  Large = "LARGE",
}

export type TripUpdateResponse = {
  __typename: "TripUpdateResponse";
  success: Scalars["Boolean"];
  message?: Maybe<Scalars["String"]>;
  launches?: Maybe<Array<Maybe<Launch>>>;
};

export type Query = {
  __typename: "Query";
  launches: Array<Maybe<Launch>>;
  launch?: Maybe<Launch>;
  me?: Maybe<User>;
};

export type QueryLaunchArgs = {
  id: Scalars["ID"];
};

export type Mutation = {
  __typename: "Mutation";
  bookTrips: TripUpdateResponse;
  cancelTrip: TripUpdateResponse;
  login?: Maybe<Scalars["String"]>;
};

export type MutationBookTripsArgs = {
  launchIds: Array<Maybe<Scalars["ID"]>>;
};

export type MutationCancelTripArgs = {
  launchId: Scalars["ID"];
};

export type MutationLoginArgs = {
  email?: Maybe<Scalars["String"]>;
};

export type LaunchQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type LaunchQuery = { __typename: "Query" } & {
  launch?: Maybe<
    { __typename: "Launch" } & Pick<Launch, "site"> & {
        rocket?: Maybe<{ __typename: "Rocket" } & Pick<Rocket, "name">>;
      }
  >;
};
