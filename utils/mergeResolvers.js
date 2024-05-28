import {mergeResolvers} from '@graphql-tools/merge'

import {gameResolvers} from '../resolvers/gameResolvers.js'
import {authorResolvers} from '../resolvers/authorResolvers.js'
import {reviewResolvers} from '../resolvers/reviewResolvers.js'

export const resolvers = mergeResolvers([
  gameResolvers,
  authorResolvers,
  reviewResolvers,
])
