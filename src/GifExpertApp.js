import React, { useState } from "react";
import { AddCategory } from "./component/AddCategory";
import { GifGrid } from "./component/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Kimetsu No Yaiba' ]);

    // const handleAdd = ( e ) => {

    //     setCategories( [ 'Kimetsu No Yaiba', ...categories ] );

    // }
    
    return (
        <>
            <h2> Gif Expert App </h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            {/* <button onClick = { handleAdd }> Agregar </button> */}

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key = { category }
                            category = { category } 
                        />
                    ) )
                }
            </ol>
        </>
    );
}