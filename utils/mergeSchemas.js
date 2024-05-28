import {mergeTypeDefs} from '@graphql-tools/merge'

import {baseSchema} from '../schemas/_baseSchema.js'
import {reviewSchema} from '../schemas/reviewSchema.js'
import {gameSchema} from '../schemas/gameSchema.js'
import {authorSchema} from '../schemas/authorSchema.js'

export const typeDefs = mergeTypeDefs([
  baseSchema,
  authorSchema,
  reviewSchema,
  gameSchema,
])
