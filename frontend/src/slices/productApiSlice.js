import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";


export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: PRODUCTS_URL,
                mode: 'no-cors'
            }),
            keepUnusedDataFor: 5
        })
    })
})


export const { useGetProductsQuery} = productApiSlice;