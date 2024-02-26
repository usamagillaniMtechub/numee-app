import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const API_BASE_URL = 'https://restcountries.com/v3.1';

const countryApiSlice = createApi({
  reducerPath: 'countryApi',
  baseQuery: fetchBaseQuery({baseUrl: API_BASE_URL}),
  endpoints: builder => ({
    getAllCountries: builder.query({
      query: () => '/all',
    }),
  }),
});

export const {useGetAllCountriesQuery} = countryApiSlice;

export default countryApiSlice;
