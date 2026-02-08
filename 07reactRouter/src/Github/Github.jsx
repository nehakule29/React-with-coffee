import {react, useState, useEffect, use} from 'react';
import { useLoaderData } from 'react-router';
export default function Github(){
    let data = useLoaderData();
    //  const [data,setData] = useState()
    //  useEffect(()=>{
    //      fetch('https://api.github.com/users/nehakule29').then(response => response.json())
    //     .then(data=>setData(data))
    //      .catch(error => console.error('Error:', error))},[]);
         return(
            <div className='text-center m-4'> 
                Github followers : {data.followers}
            </div>
        )

    }

export const loader = async() =>{
   const response = await fetch('https://api.github.com/users/nehakule29');
   return response.json();
}


