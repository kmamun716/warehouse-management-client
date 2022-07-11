import { useEffect, useState } from "react";

const useVegitables = ()=>{
    const [vegetables, setVegetables]= useState([]);
    useEffect(()=>{
        fetch('https://warm-meadow-82274.herokuapp.com/vegetables')
        .then(res=>res.json())
        .then(result=>setVegetables(result));
    },[])
    return [vegetables];
}
export default useVegitables;