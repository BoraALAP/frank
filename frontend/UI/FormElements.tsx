import styled from "styled-components";
import { Field, ErrorMessage, Form } from "formik";

interface FormContainerProps {
  children: any;
}
export const FormContainer = ({ children }: FormContainerProps) => {
  return <FormS>{children}</FormS>;
};

interface FieldContainerProps {
  children: any;
}
export const FieldContainer = ({ children }: FieldContainerProps) => {
  return <FieldSet>{children}</FieldSet>;
};

interface ErrorProps {
  children?: any;
  name?: string;
}
export const ErrorMessages = ({ name, children }: ErrorProps) => {
  return (
    <ErrorMessageS>
      {name && <ErrorMessage name={name} />}
      {children}
    </ErrorMessageS>
  );
};

export const InputContainer = (props) => {
  return <FieldS {...props} />;
};

interface LabelProps {
  children?: any;
  htmlFor?: string;
}
export const Label = ({ children, htmlFor }: LabelProps) => {
  return <LabelS htmlFor={htmlFor}>{children}</LabelS>;
};

const FormS = styled(Form)`
  display: grid;
  gap: 1.5rem;
  max-width: 40rem;
`;

const FieldS = styled(Field)`
  border: ${(props) =>
    props.disabled ? "none" : `1px solid var(--color-primary)`};
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

  textarea {
    padding: 0.5em 1em;
  }
`;

const ErrorMessageS = styled.small`
  color: var(--color-error);
`;

const LabelS = styled.label`
  display: grid;
`;
