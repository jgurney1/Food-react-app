import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RecipeSearchForm from './RecipeSearchForm.js';
import TestReturned from './TestReturned.js';

class App extends Component {

  state = {
    recipeData: undefined,
    image: undefined,
    recipeId: undefined,
    recipeUrl: undefined,
  }

  getData = async (e) => {
    e.preventDefault();
    const dish = e.target.elements.dish.value;

        const api_call = await fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?number=2&offset=1&query=" + dish, {
        method: 'GET',
        headers: {
            "X-RapidAPI-Key": "bqYhNobARpmshl2EUI7M8eFdIUayp1ykAxEjsnItlHGE4G34I1",
        },
  });
    const response = await api_call.json();

    this.setState({
      recipeData: JSON.stringify(response),
      image: (response.baseUri + response.results[0].image),
      recipeId: response.results[0].id,
    })
  }

  getUrl = async () => {
    const id = this.state.recipeId;

    const api_url = await fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/"+ id +"/information", {
      method: 'GET',
      headers: {
         "X-RapidAPI-Key": "bqYhNobARpmshl2EUI7M8eFdIUayp1ykAxEjsnItlHGE4G34I1",
      },
    });
    const retrieved = await api_url.json();

    this.setState({
      recipeUrl: retrieved.sourceUrl,
    })
  }

  render() {
    return (
      <div className="App">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <RecipeSearchForm loadData={this.getData}/>
          <TestReturned
            data={this.state.recipeData}
            image={this.state.image}
            url={this.state.recipeUrl}
          />
      </div>
    );
  }
}

export default App;
