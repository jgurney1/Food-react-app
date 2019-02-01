import React, { Component } from 'react';
import axios from 'axios';
import './Stylesheets/App.css';
import RecipeSearchForm from './RecipeSearchForm.js';
import DisplayResultsTable from './DisplayResultsTable';

class App extends Component {

  state = {
    recipeData: [],
  }

  getData = async (e) => {
    e.preventDefault();
    const dish = e.target.elements.dish.value;

        const api_call = await fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?number=4&offset=1&query=" + dish, {
        method: 'GET',
        headers: {
            "X-RapidAPI-Key": "bqYhNobARpmshl2EUI7M8eFdIUayp1ykAxEjsnItlHGE4G34I1",
        },
  });
    const response = await api_call.json();
    const tempList = []
    for(let i=0;i<response.results.length; i++) {
      let tempItem = {
      id: i,
      recipeTitle: response.results[i].title,
      readyTime: response.results[i].readyInMinutes,
      servings: response.results[i].servings,
      image: (response.baseUri + response.results[i].image),
      recipeId: response.results[i].id,

      }
      tempList.push(tempItem);
    }
    this.setState({
      recipeData: tempList
    })
  }

  saveRecipe = async (data) => {
    axios({
      url: 'http://localhost:8081/Project-api/api/recipe/addrecipe/1',
      method: 'post',
    }).then(response => {
      console.log(response.data);
    }).catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
          <h3>todo </h3>
          <p>
            Search database for recipe ideas.
            Or sign-up for an account and save your own recipes and ones that you find
          </p>
          <RecipeSearchForm 
            loadData={this.getData}
            loadUrl={this.getUrl} />
          <div className="resultDiv">
          {this.state.recipeData.map((item, key) =>
              <DisplayResultsTable item={item} key={item.id} saveRecipe={this.saveRecipe}/>) }
              </div>
      </div>
    );
  }
}

export default App;
