import React, { useEffect } from 'react'
import {useQuery } from '@apollo/client';
import { FETCH_MOVIES } from '../queries/movies'

export function fetchMovies(props){
    let {loading, data} = useQuery(FETCH_MOVIES)
    useEffect(() => {
        console.log(data)
    }, [])

    return {loading, data}
}