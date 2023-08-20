import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../constants.js';

const baseQuery = fetchBaseQuery({baseUrl: BASE_URL}); // hook to fetch data

console.log(`fetch-base-query: ${baseQuery}`)

// Parent slice which will be for all other slice such as Product, Order, User
export const apiSlice = createApi({
    baseQuery: baseQuery,
    tagTypes: ['Product', 'Order', 'User'], // allows to specify the caching behavior of each endpoints 
    endpoints: (builder) => ({ })
});
