import { Field, ErrorMessage, Formik, Form } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import { Button } from "../../UI/Links";

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
          .min(10, "Must be minimum 10 numbers")
          .max(12, "Must be maximum 12 numbers"),
        company: Yup.string().max(30, "Must be 30 characters or less"),
        address: Yup.string().max(80, "Must be 80 characters or less"),
        city: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <FormS>
        <InRow two>
          <FieldSet>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" />
          </FieldSet>
          <FieldSet>
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" />
          </FieldSet>
        </InRow>
        <List role="group" aria-labelledby="checkbox-group">
          <h6>I am a...*</h6>
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
        <List role="group" aria-labelledby="checkbox-group">
          <h6>I need help with...*</h6>
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
          <ErrorMessage name="email" />
        </FieldSet>
        <FieldSet>
          <label htmlFor="phone">Phone Number</label>
          <Field name="phone" type="number" />
          <ErrorMessage name="phone" />
        </FieldSet>
        <FieldSet>
          <label htmlFor="company">Company</label>
          <Field name="company" type="text" />
          <ErrorMessage name="company" />
        </FieldSet>
        <FieldSet>
          <label htmlFor="address">Address</label>
          <Field name="address" type="text" />
          <ErrorMessage name="address" />
        </FieldSet>
        <InRow>
          <FieldSet>
            <label htmlFor="city">City</label>
            <Field name="city" type="text" />
            <ErrorMessage name="city" />
          </FieldSet>
          <FieldSet>
            <label htmlFor="Province">Province</label>
            <Field name="Province" type="text" />
            <ErrorMessage name="Province" />
          </FieldSet>
          <FieldSet>
            <label htmlFor="postal">Postal Code</label>
            <Field name="postal" type="text" />
            <ErrorMessage name="postal" />
          </FieldSet>
          <FieldSet>
            <label htmlFor="country">Country</label>
            <Field name="country" type="text" />
            <ErrorMessage name="country" />
          </FieldSet>
        </InRow>
        <FieldSet>
          <label htmlFor="comments">Comments</label>
          <Field name="comments" type="textarea" />
          <ErrorMessage name="comments" />
        </FieldSet>

        <Button type="submit">Submit</Button>
      </FormS>
    </Formik>
  );
};

// const Form = styled.form`
//   display: grid;
//   align-content:start;
//   align-items:start;
// `;

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
