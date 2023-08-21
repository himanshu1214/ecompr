import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../constants.js';
import cartSliceReducer from './cartSlice.js';

const baseQuery = fetchBaseQuery({baseUrl: BASE_URL}); // hook to fetch data


// Parent slice which will be for all other slice such as Product, Order, User
export const apiSlice = createApi({
    baseQuery: baseQuery,
    tagTypes: ['Product', 'Order', 'User'], // allows to specify the caching behavior of each endpoints 
    reducer: { [apiSlice.reducerPath] : apiSlice.reducer,
                cartSlice: cartSliceReducer},
    endpoints: (builder) => ({ })
});
