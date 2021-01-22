const { gql } =require( 'apollo-server-express')



const findUser = async (_, { email, password }, context, info, extra) => {

// Check is the user Exist 
  const { data, errors } = await context.executeGraphQL({
    query: gql` 
      query ($email: String){
      allUsers(where:{email: $email, password:$password}){
        email
      }
      }
    `,
    variables:{email: email, password:password}
  });
  console.log(data.allUsers, errors);
  // If exist give error
  if( data.allUsers.length < 0 ) {
    throw new Error("No user is exist");
  }

  // Return New user
  return data.allUsers
};


module.exports = {
   queries: [
       {
        schema: 'findUser(email: String, password: String): User',
        resolver: findUser,
      },
   ],
  }
