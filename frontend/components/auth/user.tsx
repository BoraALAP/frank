import { gql, useQuery } from "@apollo/client";

const CURRENT_USER_QUERY = gql`
  query {
    authenticatedItem {
      ... on User {
        firstName
        lastName
        email
        companyName
        dealer
        dealerId
      }
    }
  }
`;

const SIGNOUT = gql`
  mutation {
    endSession
  }
`;

const useUser = () => {
  const { data, error } = useQuery(CURRENT_USER_QUERY);

  return data?.authenticatedItem;
};

export { CURRENT_USER_QUERY, SIGNOUT, useUser };
