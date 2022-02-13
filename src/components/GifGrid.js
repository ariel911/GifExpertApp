import React from 'react'
import {useFetchGifs} from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';

export const GifGrid = ({category}) => {
    
    //const [images, setImages] = useState([]);
    const {data,loading} = useFetchGifs(category);
    // useEffect(()=>{
    //     getGifs(category).then(imgs=>setImages(imgs));
    // },[category])
    useFetchGifs();

    
    return (
        <>
        <h3>{category}</h3>
        <div className='card-grid'>
            
            {data.map((element)=>
                <GifGridItem
                key={element.id}
                {...element}
                />    
               
            )}
                
           
          
        </div>
        </>
      )
   
}

export default GifGrid
