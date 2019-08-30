import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Form = (props) => (
    <form onSubmit={props.getRecipe} style={{ marginBottom:"2rem"}}>
        <input className="form__input"type="text" name="recipeName" placeholder="What's Cooking?"/>
        
        <button className="form__button"><FontAwesomeIcon icon={faSearch} /> Search</button>
    </form>

);
export default Form;