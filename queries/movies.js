import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'

const FETCH_MOVIES = gql`{
  allFilms{
    totalCount
    films{
      title
      episodeID
      releaseDate
      openingCrawl
      speciesConnection{
        totalCount
      }
      planetConnection{
        totalCount
      }
      vehicleConnection{
        totalCount
      }
      characterConnection{
        characters{
          name
          height
          gender
          hairColor
          homeworld{
            name
          }
          mass
          species{
            name
            classification
          }
        }
      }
    }
  }
}`

const getMovies = () => {
  const {loading, error, data}= useQuery(FETCH_MOVIES)
  return {loading, error, data}
}

export default getMovies