/* This code is lifted from the Next.js Apollo example. See
https://github.com/zeit/next.js/blob/canary/examples/with-apollo */

import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/link-error";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { createUploadLink } from "apollo-upload-client";
import withApollo from "next-with-apollo";

function createClient({ headers, initialState }) {
  return new ApolloClient({
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          );
        if (networkError)
          console.log(
            `[Network error]: ${networkError}. Backend is unreachable. Is it running?`
          );
      }),
      // this uses apollo-link-http under the hood, so all the options here come from that package
      createUploadLink({
        uri:
          process.env.NODE_ENV === "development"
            ? process.env.NEXT_PUBLIC_API_URL_DEV
            : process.env.NEXT_PUBLIC_API_URL,
        fetchOptions: {
          credentials: "include",
        },
        // pass the headers along from this request. This enables SSR with logged in state
        headers,
      }),
    ]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            // TODO: We will add this together!
            // allProducts: paginationField(),
          },
        },
      },
    }).restore(initialState || {}),
  });
}

export default withApollo(createClient, { getDataFromTree });

// No Clue what does this do. this also looks like it creates a context for the store
// export default (App) => {
//   return class Apollo extends React.Component {
//     static displayName = "withApollo(App)";
//     static async getInitialProps(ctx) {
//       const {
//         Component,
//         router,
//         ctx: { res, req },
//       } = ctx;

//       // Run all GraphQL queries in the component tree
//       // and extract the resulting data
//       const apollo = initApollo(null, req);

//       ctx.ctx.apolloClient = apollo;

//       let appProps = {};
//       if (App.getInitialProps) {
//         appProps = await App.getInitialProps(ctx);
//       }

//       if (res && res.finished) {
//         // When redirecting, the response is finished.
//         // No point in continuing to render
//         return {};
//       }

//       if (!process.browser) {
//         try {
//           // Run all GraphQL queries
//           await getDataFromTree(
//             <App
//               {...appProps}
//               Component={Component}
//               router={router}
//               apolloClient={apollo}
//             />
//           );
//         } catch (error) {
//           // Prevent Apollo Client GraphQL errors from crashing SSR.
//           // Handle them in components via the data.error prop:
//           // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
//           console.error("Error while running `getDataFromTree`", error);
//         }

//         // getDataFromTree does not call componentWillUnmount
//         // head side effect therefore need to be cleared manually
//         Head.rewind();
//       }

//       // Extract query data from the Apollo store
//       const apolloState = apollo.cache.extract();

//       return {
//         ...appProps,
//         apolloState,
//       };
//     }

//     constructor(props) {
//       super(props);
//       this.apolloClient = initApollo(props.apolloState);
//     }

//     render() {
//       return <App {...this.props} apolloClient={this.apolloClient} />;
//     }
//   };
// };
