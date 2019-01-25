import React, { Component } from 'react';
import './App.css';
import RecipeSearchForm from './RecipeSearchForm.js';
import TestReturned from './TestReturned.js';
import GetRecipeUrl from './GetRecipeUrl';
import DisplayResults from './DisplayResults';
import DisplayResultsTable from './DisplayResultsTable';

class App extends Component {

  state = {
    recipeData: [],
    recipeTitle: undefined,
    readyTime: undefined,
    servings: undefined,
    image: undefined,
    recipeId: undefined,
    recipeUrl: undefined,

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
      recipeTitle: response.results[0].title,
      readyTime: response.results[0].readyInMinutes,
      servings: response.results[0].servings,
      image: (response.baseUri + response.results[0].image),
      recipeId: response.results[0].id,
      recipeData: tempList,
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
              <DisplayResultsTable item={item} key={item.id}/>) }
              </div>
      </div>
    );
  }
}

export default App;
