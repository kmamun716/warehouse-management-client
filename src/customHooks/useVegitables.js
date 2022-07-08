import { useEffect, useState } from "react";

const useVegitables = ()=>{
    const [vegetables, setVegetables]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/vegetables')
        .then(res=>res.json())
        .then(result=>setVegetables(result));
    },[])
    return [vegetables];
}
export default useVegitables;