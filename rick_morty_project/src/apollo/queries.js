import { gql, useQuery } from "@apollo/client";

export { useQuery };

export let char = {
  GET_CHARACTER: gql`
  query {
    characters(page: 1) {
      results {
        id
        name
        image
      }
    }
  }
`,
  GET_ONE: gql`
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