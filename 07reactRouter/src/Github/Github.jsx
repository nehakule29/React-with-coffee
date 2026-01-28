import {react, useState} from 'react';

export default function Github(){
    const [data,setData] = useState()
    useEffect(()=>{
        fetch('https://api.github.com/users/nehakule29').then((response)=> response.json())
        .then(data=>setData(data))
        .catch(error => console.error('Error:', error))},[]);
        return(
            <div className='h'>
                Github followers : {data.followers}
            </div>
        )

    }
