import {ApolloServer} from '@apollo/server'
import {startStandaloneServer} from '@apollo/server/standalone'

//resolvers
import {resolvers} from './utils/mergeResolvers.js'

//typeDefs
import {typeDefs} from './utils/mergeSchemas.js'

//server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const {url} = await startStandaloneServer(server, {
  listen: {port: 8080},
})

console.log(`🚀 Server ready at ${url}`)

/* Query format for Apollo express or front end

only reviews rating
query RatingQuery {
  reviews {
    rating
  }
}

for all fields, no syntax, nedd to explicitly add all fields
query RatingQuery {
  reviews {
    id,
    rating,
    content
  }

one game
query Query($gameId: ID!) {
  game(id: $gameId) {
  id,
  title}
}

nested query
query reviewsQuery($reviewId: ID!) {
  review(id: $reviewId) {
    content
    rating
    author {
      name
    }
    game {
      title
      platform
    }
  }
}

*/

/*client side query

function fetchGameData(gameId) {
  return fetch('graphql_server_url', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query GameQuery($gameId: ID!) {
          game(id: $gameId) {
            id
            title
          }
        }
      `,
      variables: { gameId :1},
    }),
  })
  .then(response => response.json())
  .then(data => data.data.game);
}
get  request possible by encoding query and variables into URL but much complex, with limitations

OR with apollo client (need provider and more configuration)

import { useQuery } from '@apollo/client';
import { GET_GAME } from './queries'; // import GraphQL request

function GameComponent({ gameId }) {
  const { loading, error, data } = useQuery(GET_GAME, {
    variables: { gameId }, // Définissez vos variables ici
  });

OR apollo client + apollo boost low config package
*/

/*MUTATION
mutation
*/
