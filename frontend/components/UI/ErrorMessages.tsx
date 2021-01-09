import styled from "styled-components";

import { Capitilize } from "../../lib/Text";

export const DisplayError = ({ formikError, error }) => {
  const entries = Object.entries(formikError);

  if (
    !error &&
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    console.log("reading backend");
    return error.networkError.result.errors.map((error, i) => (
      <ErrorStyles key={i}>
        <p data-test="graphql-error">
          <strong>Shoot!</strong>
          {error.message.replace("GraphQL error: ", "")}
        </p>
      </ErrorStyles>
    ));
  }
  if (entries.length > 0) {
    return (
      <ErrorStyles>
        <p data-test="graphql-error">
          <strong>Shoot!</strong>
        </p>
        <ul>
          {entries.map((item, index) => {
            console.log(item);

            return (
              <li key={index}>
                <p>
                  <span>{Capitilize(item[0])}</span> : {Capitilize(item[1])}
                </p>
              </li>
            );
          })}
        </ul>
      </ErrorStyles>
    );
  }

  if (error.message) {
    return (
      <ErrorStyles>
        <p data-test="graphql-error">
          <strong>Shoot!</strong>
          {error.message.replace("GraphQL error: ", "")}
        </p>
      </ErrorStyles>
    );
  }

  return null;
};

interface Props {
  error?: string;
  children?: any;
}

export const ErrorMessage = ({ error, children }: Props) => {
  return <ErrorStyles>{error ? <p>{error}</p> : { children }}</ErrorStyles>;
};

const ErrorStyles = styled.div`
  padding: 1em 2em;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid red;
  p {
    margin: 0;
    font-weight: 100;
  }
  strong {
    margin-right: 1rem;
  }
`;
