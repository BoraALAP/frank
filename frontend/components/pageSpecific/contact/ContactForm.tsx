import { Field, ErrorMessage, Formik, Form } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import { Button } from "../../../UI/Links";

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        address: "",
        city: "",
        province: "",
        postal: "",
        country: "",
        comments: "",
        iam: [],
        ineed: [],
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        phone: Yup.number()
          .typeError("That doesn't look like a phone number")
          .positive("A phone number can't start with a minus")
          .integer("A phone number can't include a decimal point")
          .min(8, "Must be 8 characters or more")
          .required("A phone number is required"),
        company: Yup.string().max(30, "Must be 30 characters or less"),
        address: Yup.string().max(140, "Must be 140 characters or less"),
        city: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        province: Yup.string()
          .max(2, "Must be 2 characters or less")
          .required("Required"),
        postal: Yup.string()
          .max(6, "Must be 6 characters or less")
          .required("Required"),
        country: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        comments: Yup.string()
          .min(10, "Must be 10 characters or more")
          .required("Required"),
        iam: Yup.array()
          .required("At least one checkbox is required")
          .min(1, "At least one checkbox is required"),
        ineed: Yup.array()
          .required("At least one checkbox is required")
          .min(1, "At least one checkbox is required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/mail`, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "post",
            body: JSON.stringify(values),
          });
          setSubmitting(false);
        }, 400);
      }}
    >
      <FormS>
        <InRow two>
          <FieldSet>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessageS>
              <ErrorMessage name="firstName" />
            </ErrorMessageS>
          </FieldSet>
          <FieldSet>
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessageS>
              <ErrorMessage name="lastName" />
            </ErrorMessageS>
          </FieldSet>
        </InRow>
        <List role="group" name="iam" aria-labelledby="checkbox-group">
          <h6>I am a...*</h6>
          <ErrorMessageS>
            <ErrorMessage name="iam" />
          </ErrorMessageS>
          <label>
            <Field type="checkbox" name="iam" value="Homeowner" />
            Homeowner
          </label>
          <label>
            <Field type="checkbox" name="iam" value="Architect/Designer" />
            Architect/Designer
          </label>
          <label>
            <Field type="checkbox" name="iam" value="Residential Contractor" />
            Residential Contractor
          </label>
          <label>
            <Field
              type="checkbox"
              name="iam"
              value="Commercial/Non-Residential Builder"
            />
            Commercial/Non-Residential Builder
          </label>
          <label>
            <Field type="checkbox" name="iam" value="Distributor/Dealer" />
            Distributor/Dealer
          </label>
          <label>
            <Field type="checkbox" name="iam" value="Other" />
            Other
          </label>
        </List>
        <List role="group" name="ineed" aria-labelledby="checkbox-group">
          <h6>I need help with...*</h6>
          <ErrorMessageS>
            <ErrorMessage name="ineed" />
          </ErrorMessageS>
          <label>
            <Field
              type="checkbox"
              name="ineed"
              value="Pre-purchase product questions"
            />
            Pre-purchase product questions
          </label>
          <label>
            <Field
              type="checkbox"
              name="ineed"
              value="An existing window/door order"
            />
            An existing window/door order
          </label>
          <label>
            <Field
              type="checkbox"
              name="ineed"
              value="Architectural/technical support for professionals"
            />
            Architectural/technical support for professionals
          </label>
          <label>
            <Field type="checkbox" name="ineed" value="Service/warranty" />
            Service/warranty
          </label>
          <label>
            <Field type="checkbox" name="ineed" value="Other" />
            Other
          </label>
        </List>
        <FieldSet>
          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" />
          <ErrorMessageS>
            <ErrorMessage name="email" />
          </ErrorMessageS>
        </FieldSet>
        <FieldSet>
          <label htmlFor="phone">Phone Number</label>
          <Field name="phone" type="number" />
          <ErrorMessageS>
            <ErrorMessage name="phone" />
          </ErrorMessageS>
        </FieldSet>
        <FieldSet>
          <label htmlFor="company">Company</label>
          <Field name="company" type="text" />
          <ErrorMessageS>
            <ErrorMessage name="company" />
          </ErrorMessageS>
        </FieldSet>
        <FieldSet>
          <label htmlFor="address">Address</label>
          <Field name="address" type="text" />
          <ErrorMessageS>
            <ErrorMessage name="address" />
          </ErrorMessageS>
        </FieldSet>
        <InRow>
          <FieldSet>
            <label htmlFor="city">City</label>
            <Field name="city" type="text" />
            <ErrorMessageS>
              <ErrorMessage name="city" />
            </ErrorMessageS>
          </FieldSet>
          <FieldSet>
            <label htmlFor="province">Province</label>
            <Field name="province" type="text" maxLength="2" />
            <ErrorMessageS>
              <ErrorMessage name="province" />
            </ErrorMessageS>
          </FieldSet>
          <FieldSet>
            <label htmlFor="postal">Postal Code</label>
            <Field name="postal" type="text" />
            <ErrorMessageS>
              <ErrorMessage name="postal" />
            </ErrorMessageS>
          </FieldSet>
          <FieldSet>
            <label htmlFor="country">Country</label>
            <Field name="country" type="text" />
            <ErrorMessageS>
              <ErrorMessage name="country" />
            </ErrorMessageS>
          </FieldSet>
        </InRow>
        <FieldSet>
          <label htmlFor="comments">Comments</label>
          <Field name="comments" type="textarea" />
          <ErrorMessageS>
            <ErrorMessage name="comments" />
          </ErrorMessageS>
        </FieldSet>

        <Button type="submit">Submit</Button>
      </FormS>
    </Formik>
  );
};

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

const ErrorMessageS = styled.small`
  color: ${({ theme }) => theme.color.error};
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

const List = styled.div`
  display: grid;
  grid-auto-flow: row;
  label {
    display: grid;
    align-items: center;
    grid-auto-flow: column;
    justify-content: start;
    gap: 1rem;
  }
`;

export default ContactForm;
