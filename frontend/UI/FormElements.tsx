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
  busy?: Boolean;
}
export const FieldContainer = ({ children, busy }: FieldContainerProps) => {
  return <FieldSet aria-busy={busy}>{children}</FieldSet>;
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
  checkbox?: boolean;
}
export const Label = ({ children, htmlFor, checkbox }: LabelProps) => {
  return (
    <LabelS htmlFor={htmlFor} checkbox={checkbox}>
      {children}
    </LabelS>
  );
};

export const InRow = (props) => {
  return <InRowS pass={props.pass}>{props.children}</InRowS>;
};

const FormS = styled(Form)`
  display: grid;
  gap: var(--gap);
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

  grid-auto-flow: ${(props) => props.checkbox && `column`};
  justify-content: ${(props) => props.checkbox && `start`};
  align-items: ${(props) => props.checkbox && `center`};
  gap: ${(props) => props.checkbox && `1rem`};
`;

const InRowS = styled.div`
  display: grid;
  @media screen and (min-width: 768px) {
    grid-template-columns: ${(props) =>
      props.pass ? `auto min-content` : `1fr 1fr`};
    gap: ${(props) => (props.pass ? `calc( var(--gap) / 2)` : `var(--gap)`)};
  }
`;
