import React, { Component } from 'react';
import BrowseRecipes from './BrowseRecipes.js';
import axios from 'axios';
import DisplayMyRecipesTable from './DisplayMyRecipesTable.js';

class MyRecipes extends Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
      values: "select filter...",
      recipeData: [],
      message: undefined
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({values: e.target.value});
  }

  handleSubmit(e) {
    alert('option is: ' + this.state.values);
    e.preventDefault();
  }  
  getMyRecipes = async () => {
    
    axios.get("http://localhost:8081/Project-api/api/recipe/getallrecipes")
    .then(response => {
      const tempList=[];
      for(let i=0;i<response.data.length;i++) {
        let tempItem = {
          id: i,
          recipeId: response.data[i].recipeId,
          title: response.data[i].title,
          readyTime: response.data[i].readyTime,
          servings: response.data[i].servings,
          method: response.data[i].method,
          ingredients: response.data[i].ingredients,
        }
        tempList.push(tempItem);
      }
      
      this.setState({
        recipeData: tempList
      })
    })
    .catch(error => console.log(error));
  }

  removeRecipeById = async (e) => {
    e.preventDefault();
    const dishId = e.target.elements.recipeId.value;
    axios.delete("http://localhost:8081/Project-api/api/recipe/removerecipebyid/"+ dishId)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="MyRecipes">
        <form onSubmit={this.handleSubmit}>
          <h3>Search through saved recipes here</h3>
          <select value={this.state.values} onChange={this.handleChange}>
              <option value={this.state.values}>{this.state.values}</option>
              <option value="first">First</option>
              <option value="second">Second</option>
              <option value="...">...</option>
          </select>
          <input type="submit" value="Submit"/>
        </form>
        <BrowseRecipes
          loadRecipes={this.getMyRecipes}
          removeRecipe={this.removeRecipeById}
          />
          <div className="resultDiv">
          {this.state.recipeData.map((item, key) =>
              <DisplayMyRecipesTable item={item} key={item.id}/>) }
              </div>
      </div>
    );
  }
}

export default MyRecipes;
