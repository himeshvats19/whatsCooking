import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const API_KEY = "b330eeac530ff5b92362c7f5eeb041f0";

class Recipe extends React.Component {
    state = {
        activeRecipe: []
    }

    componentDidMount = async () => {
        const title = this.props.location.state.recipe;
        const req = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);
        const res = await req.json();
       this.setState({activeRecipe : res.recipes[0]});
    }
    render() {
        const recipe = this.state.activeRecipe;
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        return (
            <div className="active-container">
           <div className="container">
                { this.state.activeRecipe.length !== 0 &&
                
               <div className="row">
                   
                <div className="col-12 col-lmd-6 col-lg-6">
                <Link to="/">
                    
                <FontAwesomeIcon icon={faBackward} />

                            </Link>
                
                   
                <div className="active-recipe">
                   
                    <h3 className="active-recipe__title">{ recipe.title }</h3>
                    <h4 className="active-recipe__publisher">
                        Publisher : <span>
                            { recipe.publisher }
                        </span>
                    </h4>
                    <p className="active-recipe__website">
                        Website : 
                        <span> <a href={ recipe.publisher_url } target="_blank">{ recipe.publisher_url }</a> </span> 
                    </p>
                    <button className="active-recipe__button">
                        <a href={ recipe.source_url } target="_blank">Read Full Recipe Here</a> 
                    </button>
                </div>
               
                </div>
                <div className="col-12 col-lmd-6 col-lg-6">
                <img className="active-recipe__img" src={ recipe.image_url } alt={ recipe.title }/>
                </div>
               </div>
                }
           </div>
           </div>
        )
    }
}

export default Recipe;