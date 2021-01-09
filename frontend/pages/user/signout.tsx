// import styled from "styled-components";
// import { gql, useMutation } from "@apollo/client";
// import { Primary } from "../../components/UI/Button";

// import { CURRENT_USER_QUERY } from "../../queries/User";

// const SIGN_OUT_MUTATION = gql`
//   mutation SIGN_OUT_MUTATION {
//     signOut {
//       message
//     }
//   }
// `;

// const signout = (props) => {
//   const [signOut, { error, loading }] = useMutation(SIGN_OUT_MUTATION, {
//     refetchQueries: [{ query: CURRENT_USER_QUERY }],
//   });
//   return <Primary onClick={() => signOut()}>Sign Out</Primary>;
// };

// export default signout;

import styled from "styled-components";

const signout = () => {
  return <Container>signout</Container>;
};

const Container = styled.div`
  display: grid;
`;

export default signout;
