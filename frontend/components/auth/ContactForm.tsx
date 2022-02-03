import { Formik } from "formik";
import { gql, useMutation } from "@apollo/client";
import styled from "styled-components";
import * as Yup from "yup";
import {
  ErrorMessages,
  FieldContainer,
  FormContainer,
  InputContainer,
  Label,
} from "../../UI/FormElements";
import { Button } from "../../UI/Links";
import { useState } from "react";

export const ContactForm = () => {
  const [createContactUsForm, { data, error, loading }] =
    useMutation(CONTACT_QUERY);

  const [errors, setErrors] = useState("");

  if (data?.createContactUsForm) {
    return (
      <FormSent>
        <h6>Hello {data?.createContactUsForm.firstName}</h6>
        <p>
          We got your message. We will get in touch with you as soon as we can.
        </p>
      </FormSent>
    );
  }
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
      onSubmit={(values) => {
        try {
          createContactUsForm({
            variables: {
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              phone: values.phone.toString(),
              company: values.company,
              address: values.address,
              city: values.city,
              province: values.province,
              postal: values.postal,
              country: values.country,
              comments: values.comments,
              iam: values.iam.toString(),
              ineed: values.ineed.toString(),
            },
          });
        } catch (error) {
          setErrors(error.message);
        }
      }}
    >
      {(props) => (
        <FormContainer>
          <InRow two>
            <FieldContainer>
              <Label htmlFor="firstName">First Name</Label>
              <InputContainer name="firstName" type="text" />

              <ErrorMessages name="firstName" />
            </FieldContainer>
            <FieldContainer>
              <Label htmlFor="lastName">Last Name</Label>
              <InputContainer name="lastName" type="text" />

              <ErrorMessages name="lastName" />
            </FieldContainer>
          </InRow>
          <List role="group" name="iam" aria-labelledby="checkbox-group">
            <h6>I am a...*</h6>

            <ErrorMessages name="iam" />

            <Label checkbox>
              <InputContainer type="checkbox" name="iam" value="Homeowner" />
              Homeowner
            </Label>
            <Label checkbox>
              <InputContainer
                type="checkbox"
                name="iam"
                value="Architect/Designer"
              />
              Architect/Designer
            </Label>
            <Label checkbox>
              <InputContainer
                type="checkbox"
                name="iam"
                value="Residential Contractor"
              />
              Residential Contractor
            </Label>
            <Label checkbox>
              <InputContainer
                type="checkbox"
                name="iam"
                value="Commercial/Non-Residential Builder"
              />
              Commercial/Non-Residential Builder
            </Label>
            <Label checkbox>
              <InputContainer
                type="checkbox"
                name="iam"
                value="Distributor/Dealer"
              />
              Distributor/Dealer
            </Label>
            <Label checkbox>
              <InputContainer type="checkbox" name="iam" value="Other" />
              Other
            </Label>
          </List>
          <List role="group" name="ineed" aria-labelledby="checkbox-group">
            <h6>I need help with...*</h6>

            <ErrorMessages name="ineed" />

            <Label checkbox>
              <InputContainer
                type="checkbox"
                name="ineed"
                value="Pre-purchase product questions"
              />
              Pre-purchase product questions
            </Label>
            <Label checkbox>
              <InputContainer
                type="checkbox"
                name="ineed"
                value="An existing window/door order"
              />
              An existing window/door order
            </Label>
            <Label checkbox>
              <InputContainer
                type="checkbox"
                name="ineed"
                value="Architectural/technical support for professionals"
              />
              Architectural/technical support for professionals
            </Label>
            <Label checkbox>
              <InputContainer
                type="checkbox"
                name="ineed"
                value="Service/warranty"
              />
              Service/warranty
            </Label>
            <Label checkbox>
              <InputContainer type="checkbox" name="ineed" value="Other" />
              Other
            </Label>
          </List>
          <InRow two>
            <FieldContainer>
              <Label htmlFor="email">Email Address</Label>
              <InputContainer name="email" type="email" />

              <ErrorMessages name="email" />
            </FieldContainer>
            <FieldContainer>
              <Label htmlFor="phone">Phone Number</Label>
              <InputContainer name="phone" type="number" minLength={8} />

              <ErrorMessages name="phone" />
            </FieldContainer>
          </InRow>
          <FieldContainer>
            <Label htmlFor="company">Company</Label>
            <InputContainer name="company" type="text" />

            <ErrorMessages name="company" />
          </FieldContainer>
          <FieldContainer>
            <Label htmlFor="address">Address</Label>
            <InputContainer name="address" type="text" />

            <ErrorMessages name="address" />
          </FieldContainer>
          <InRow>
            <FieldContainer>
              <Label htmlFor="city">City</Label>
              <InputContainer name="city" type="text" />

              <ErrorMessages name="city" />
            </FieldContainer>
            <FieldContainer>
              <Label htmlFor="province">Province</Label>
              <InputContainer name="province" type="text" maxLength="2" />

              <ErrorMessages name="province" />
            </FieldContainer>

            <FieldContainer>
              <Label htmlFor="country">Country</Label>
              <InputContainer name="country" type="text" />

              <ErrorMessages name="country" />
            </FieldContainer>
            <FieldContainer>
              <Label htmlFor="postal">Postal Code</Label>
              <InputContainer name="postal" type="text" />

              <ErrorMessages name="postal" />
            </FieldContainer>
          </InRow>
          <FieldContainer>
            <Label htmlFor="comments">Comments</Label>
            <InputContainer
              name="comments"
              type="text"
              component="textarea"
              rows="4"
            />

            <ErrorMessages name="comments" />
          </FieldContainer>

          <Button type="submit">Submit</Button>
        </FormContainer>
      )}
    </Formik>
  );
};

const FormSent = styled.div`
  display: grid;
`;

const InRow = styled.div`
  display: grid;
  grid-auto-flow: row;
  gap: var(--gap);
  @media screen and (min-width: 768px) {
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

export const CONTACT_QUERY = gql`
  mutation CONTACT_QUERY(
    $firstName: String
    $lastName: String
    $email: String
    $phone: String
    $company: String
    $address: String
    $city: String
    $province: String
    $postal: String
    $country: String
    $comments: String
    $iam: String
    $ineed: String
  ) {
    createContactUsForm(
      data: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        phone: $phone
        company: $company
        address: $address
        city: $city
        province: $province
        postal: $postal
        country: $country
        comments: $comments
        iam: $iam
        ineed: $ineed
      }
    ) {
      id
      firstName
    }
  }
`;
