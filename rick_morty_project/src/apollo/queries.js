import { gql, useQuery } from "@apollo/client";

export { useQuery };

export let charactersSchema = {
  GET: gql`
  query GetAllCharacters ($page: Int) {
    characters(page: $page) {
      info {
        pages
      },
      results {
        id
        name
        image
      }
    }
  }
`
}

export let characterSchema = {
  GET: gql`
  query GetFullCharData ($id: ID!) {
  character(id: $id) {
    id
    name
    status
    species
    type
    gender
    origin: location {
      name
    }
    location: location {
      name
    }
    image
    episode: episode {
      id
      air_date
    }
  }
}
  `
}