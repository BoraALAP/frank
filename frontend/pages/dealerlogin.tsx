import styled from "styled-components";
import { Container } from "../components/layout/Container";

import { Field, ErrorMessage, Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "../UI/Links";

import { gql, useMutation } from "@apollo/client";

const dealerlogin = () => {
  const [signIn, { data, error, loading }] = useMutation(SIGNIN_MUTATION, {
    refetchQueries: [
      {
        query: UPDATE_LASTONLINE,
        variables: { lastLogin: "2021-01-18T07:01:30.205Z" },
      },
    ],
  });
  console.log(data, error, loading);

  return (
    <Container space padding>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string().min(8, "Must be 8 characters or less"),
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          console.log(values);

          await signIn({ variables: { ...values } });
          resetForm({ values: { email: "", password: "" } });
          setSubmitting(false);
        }}
      >
        <FormS>
          <InRow>
            <FieldSet>
              <label htmlFor="email">Email Address</label>
              <Field name="email" type="email" />
              <ErrorMessageS>
                <ErrorMessage name="email" />
              </ErrorMessageS>
            </FieldSet>
            <FieldSet>
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" />
              <ErrorMessageS>
                <ErrorMessage name="password" />
              </ErrorMessageS>
            </FieldSet>
          </InRow>

          <Button type="submit">Submit</Button>
        </FormS>
      </Formik>
    </Container>
  );
};

const ErrorMessageS = styled.small`
  color: ${({ theme }) => theme.color.error};
`;

const FormS = styled(Form)`
  display: grid;
  gap: 2rem;
  max-width: 40rem;
`;

const FieldSet = styled.fieldset`
  display: grid;
  border: none;
  gap: 0.5rem;
  align-content: start;

  margin: 0;
  padding: 0;
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

const InRow = styled.div`
  gap: 2rem;
  display: grid;
  grid-auto-flow: row;
  @media screen and (min-width: ${({ theme }) => theme.mq.tablet}) {
    grid-template-columns: ${(props) =>
      props.two ? ` repeat(2, 1fr)` : `repeat(auto-fill, minmax(170px, 1fr))`};
  }
`;

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String, $password: String) {
    signin: authenticateUserWithPassword(email: $email, password: $password) {
      token
      item {
        name
        email
        lastLogin
      }
    }
  }
`;
const UPDATE_LASTONLINE = gql`
  mutation UPDATE_LASTONLINE($time: String) {
    updated: updateAuthenticatedUser(data: { lastLogin: $time }) {
      name
      email
      lastLogin
    }
  }
`;

export default dealerlogin;
