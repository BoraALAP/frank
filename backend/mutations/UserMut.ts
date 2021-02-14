import { gql } from 'apollo-server-express'
// import {sendEmail} from '../mail'

// CUSTOM USER CREATION - This one creates user and sends email to both parties for requesting user ID
const creatingAUser = async (_, { name, email, password, companyName }, context, info, extra) => {
// Check is the user Exist 
const emailLow = email.toLowerCase()
  const { data, errors } = await context.executeGraphQL({
    query: gql` 
      query ($email: String){
      allUsers(where:{email: $email}){
        email
      }
      }
    `,
    variables:{email: emailLow}
  });


  if( errors ) {
    throw new Error(errors);
  }

  // If exist give error
  if( data.allUsers.length > 0 ) {
    throw new Error("User is already exists");
  }
// If not exist Create a user
  const {data: createUserData, errors: createUserErrors} = await context.executeGraphQL({
    query: gql` 
      mutation ($name: String, $email: String, $password: String, $companyName: String){
        createUser(data:{name:$name, email:$email, password:$password, companyName: $companyName}){
          id
          name
          email
          password_is_set
          createdAt
        }
      }
    `,
    variables:{name: name, email: emailLow, password: password, companyName: companyName}
  })

  if( createUserErrors ) {
    console.log(createUserErrors);
    throw new Error(createUserErrors);
  }
  // Send and request email for userID
  const propsClient = {
    recipientEmail: process.env.RECEIVER,
    name: createUserData.createUser.name
  };

  const propsCustomer = {
    recipientEmail: createUserData.createUser.email,
    name: createUserData.createUser.name
  };

  // await sendEmail('contactUsClient.jsx', propsClient);
  // await sendEmail('contactUsCustomer.jsx', propsCustomer);

  // Return New user
  return createUserData.createUser
};

const signAUser = async (_, { email, password}, context, info, extra) => {
  // Check is the user Exist 
  const emailLow = email.toLowerCase()
    const { data:queryData, errors:queryErrors } = await context.executeGraphQL({
      query: gql` 
        query ($email: String){
          allUsers(where:{email: $email}){
            email
          }
        }
      `,
      variables:{email: emailLow}
    });
    console.log(queryData, queryErrors);
  
    if( queryErrors ) {
      throw new Error(queryErrors);
    }
  
    // If exist give error
    if( queryData.allUsers.length < 1 ) {
      throw new Error("There is no user with that email");
    }

  // If user is exist Sign in
  const { data: authData, errors: authErrors } = await context.executeGraphQL({
    query: gql` 
      mutation ($email: String, $password: String){
        authenticateUserWithPassword(email:$email, password:$password){
          item{
            id
          }
          token
        }
      }
    `,
    variables:{email: emailLow, password}
  });
  console.log(authData, authErrors);
  
    if( authErrors ) {
      console.log(authErrors);
      throw new Error(authErrors);
    }
  
    console.log(authData);
    // Return New user
    return authData.authenticateUserWithPassword.item.id
  };


module.exports = {
  
  mutations: [
    {
      schema: 'createAUser(name: String, email: String, password: String, companyName: String): User',
      resolver: creatingAUser,
    },
    // {
    //   schema: 'signAUser(email: String, password: String): User',
    //   resolver: signAUser,
    // },
  ],
}
