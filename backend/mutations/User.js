const { gql } =require( 'apollo-server-express')

const { transport } =require( "../mail")
const { newAccount } =require( "../emailTemplate/newAccount.jsx")

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

  // If exist give error
  if( data.allUsers.length > 0 ) {
    throw new Error("User is already exists");
  }
// If not exist Create a user
  const {data: data2, errors: errors2} = await context.executeGraphQL({
    query: gql` 
      mutation ($name: String, $email: String, $password: String, $companyName: String){
        createUser(data:{name:$name, email:$email, password:$password, companyName: $companyName}){
          name
          email
          password_is_set
          createdAt
        }
      }
    `,
    variables:{name: name, email: email, password: password, companyName: companyName}
  })

  // Send and request email for userID
  const newAccountEmail = {
    from: `alapbora@gmail.com`,
    to: email,
    subject: "Message title",
    html: newAccount()
  };

  transport.sendMail(newAccountEmail, (error, info) => {
    console.log(info);
    
    if(error) {
      return console.log(error);
    }
  })

  // Return New user
  return data2.createUser
};


module.exports = {
  
   mutations: [
       {
         schema: 'createAUser(name: String, email: String, password: String, companyName: String): User',
       resolver: creatingAUser,
      },
   ],
  }
