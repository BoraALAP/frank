import { gql, useQuery, useMutation } from "@apollo/client";

const CURRENT_USER_QUERY = gql`
  query {
    authenticatedItem {
      ... on User {
        firstName
        lastName
        email
        companyName
        dealerId
        role {
          name
          canManageRoles
          canManageUsers
          canManageProducts
          canManageOptions
          canManageContactForm
          canManageLists
        }
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
  const { data } = useQuery(CURRENT_USER_QUERY);
  return data?.authenticatedItem;
};

export { CURRENT_USER_QUERY, SIGNOUT, useUser };
