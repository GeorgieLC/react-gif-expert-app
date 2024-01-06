import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs (category);
    
  return (
    <>

    <h1> {category} </h1>
    
    {
      isLoading && (<h2>Cargando...</h2>)
    }

    <div className= 'card-grid'>

      {images.map( (images) => (
            <GifItem 

            key= { images.id }
            {...images}

            />
          ) )}

    </div>
   
    
    </> 
  )
}
