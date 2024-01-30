import { useState } from 'react';
import { AddCategory } from './components/AddCategory';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['']);


    return (
    <>

        <h1>GifExpertApp</h1>


        <AddCategory />



        <ol>
            { categories.map( category => <li key={ category }>{ category }</li> ) }
        </ol>

        {/* Gif Item */}

    </>
    
  )
}
