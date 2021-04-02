import { useEffect, useState } from "react"
import { getGifts } from '../helpers/getGifs'

export const useFetchGif = ( category ) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifts( category )
            .then( img => {
                setTimeout(() => {
                    setstate({
                        data: img,
                        loading: false
                    })
                }, 3000);
            } )
    }, [ category ]);


    return state;
}