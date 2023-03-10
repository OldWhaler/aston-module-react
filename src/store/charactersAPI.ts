import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export interface CharacterInfo {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string,
    url: string
  }
  location: {
    name: string,
    url: string
  }
  image: string
  episode: string[],
  url: string,
  created: string
}
export interface AllCharactersInfo {
  info: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }
  results: CharacterInfo[]
}

export const charactersAPI = createApi({
  reducerPath: 'charactersAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query<CharacterInfo[], number>({
      query: (page) => `character/?page=${page}`,
      transformResponse: (response: { results: CharacterInfo[] }) => response.results
    }),
    getCharacterById: builder.query<CharacterInfo, string>({
      query: (id) => `character/${id}`,
    }),
    getMultipleCharacters: builder.query<CharacterInfo[], string>({
      query: (ids) => `character/${ids}`,
      transformResponse: (response: CharacterInfo[]) => Array.isArray(response) ? response : [response]
    }),
  }),
})

export const { useGetAllCharactersQuery, useGetCharacterByIdQuery, useGetMultipleCharactersQuery } = charactersAPI;