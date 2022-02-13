import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp=() =>{
    
    const [categorys, setcategorys] = useState(["One Punch"]);

    //    const handle = ()=>{
    //         setcategorys([...categorys,"naruto"]);
    //     }
    return <>
    
    <h2>GifExpertApp</h2>
      <AddCategory setcategorys={setcategorys} categorys={categorys} />
    <hr />



    <ol>
        { categorys.map(category=>(
            <GifGrid 
                key={category}
                category={category} 
            />
        ))}
    </ol>
    </>

}
export default GifExpertApp;

