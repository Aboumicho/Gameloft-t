import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'

const FETCH_MOVIES = gql`{
  allFilms{
    totalCount
    films{
      title
      episodeID
      
    }
  }
}`

const getMovies = () => {
  const {loading, error, data}= useQuery(FETCH_MOVIES)
  return {loading, error, data}
}

export default getMovies