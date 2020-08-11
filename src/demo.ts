import mocker from "./mocker";
import gql from "graphql-tag";
import { LaunchQuery } from "./api";

const query = gql`
  query Launch($id: ID!) {
   launch(id: $id) {
    id
    site
    rocket {
      name
    }
   }
  }
`

const test = mocker.mockQuery<LaunchQuery>(query, {variables: {id: "some cool launch id"}})

console.log(test)