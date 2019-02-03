import React, { Component } from 'react';
import './Stylesheets/App.css';
import './Stylesheets/DisplayResultsTable.css';
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

  render() {
    return (
      <div className="App">
          <h1>Welcome to Tea-Rex! </h1>
          <div className="AppBody">
          <h3>
            Search database for recipe ideas.
            Or sign-up for an account and save your own recipes and ones that you find
          </h3>
          <RecipeSearchForm 
            loadData={this.getData}
           />
          <div className="resultDiv">
          {this.state.recipeData.map((item, key) =>
              <DisplayResultsTable item={item} key={item.id} />) }
              </div>
              </div>
      </div>
    );
  }
}

export default App;
