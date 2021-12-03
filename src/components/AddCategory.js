import React, { useState } from 'react';

import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    
    const primerMensaje = 'Introduzca una categoría'

    const [inputValue, setInputValue] = useState(primerMensaje);

    const handleInputChange = ( e ) => {
        

        setInputValue(e.target.value);
    }

    const handelSubmit = ( e ) => {

        e.preventDefault();

        if( inputValue.trim().length > 2 ){
            
            setCategories(categories => [ inputValue, ...categories]);
            setInputValue('');

        }

    }

    return (
        
           <form onSubmit={ handelSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
                onFocus={ () => setInputValue('')}
                
            />
        </form> 
    )
}


AddCategory.propTypes = {

    setCategories: PropTypes.func.isRequired

}
