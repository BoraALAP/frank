const { gql } =require( 'apollo-server-express')
const {sendEmail} = require('../mail')

// CUSTOM USER CREATION - This one creates user and sends email to both parties for requesting user ID
const creatingAUser = async (_, { name, email, password, companyName }, context, info, extra) => {
// Check is the user Exist 
  const { data, errors } = await context.executeGraphQL({
    query: gql` 
      query ($email: String){
      allUsers(where:{email: $email}){
        email
      }
      }
    `,
    variables:{email: email}
  });


  if( errors ) {
    console.log(errors);
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
    variables:{name: name, email: email, password: password, companyName: companyName}
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

  await sendEmail('contactUsClient.jsx', propsClient);
  await sendEmail('contactUsCustomer.jsx', propsCustomer);

  // Return New user
  return createUserData.createUser
};


module.exports = {
  
   mutations: [
       {
         schema: 'createAUser(name: String, email: String, password: String, companyName: String): User',
       resolver: creatingAUser,
      },
   ],
  }
