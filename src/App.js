import React, { Component } from 'react';
import './App.css';

import Form from "./components/Form";
import Recipes from './components/Recipes'

const API_KEY = "b330eeac530ff5b92362c7f5eeb041f0";

class App extends Component {
  state = {
    recipes: []
  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=9`, {mode: 'no-cors'});
    const data = await api_call.json();
    this.setState({recipes: data.recipes});
    window.scrollTo({
      top: 600,
      behavior: 'smooth',
    })
  }

  componentDidMount = () => {
    if(localStorage.getItem("recipes")){
      const json = localStorage.getItem("recipes");
      const recipes = JSON.parse(json);
      this.setState({ recipes })
    }
  }

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem('recipes', recipes);
  }

  render() {
    return (
      <div className="App">
        <div className="backdrop">
          <Form getRecipe={this.getRecipe}/>
        </div>
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;