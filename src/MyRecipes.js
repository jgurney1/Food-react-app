import React, { Component } from 'react';
import BrowseRecipes from './BrowseRecipes.js';
import axios from 'axios';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import DisplayMyRecipesTable from './DisplayMyRecipesTable.js';

class MyRecipes extends Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
      recipeData: [],
    };
  }
 
  componentDidMount = async () => {
    axios.get("http://localhost:1337/localhost:8080/Project-api/api/recipe/getallrecipes")
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
          user: response.data[i].user
        }
        tempList.push(tempItem);
      }
      this.setState({
        recipeData: tempList
      })
    })
    .catch(error => console.log(error));
  }

  getMyRecipes = async () => { 
    axios.get("http://localhost:1337/localhost:8080/Project-api/api/recipe/getallrecipes")
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
          user: response.data[i].user
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
    if(dishId % 1 === 0 ) {
    axios.delete("http://localhost:1337/localhost:8080/Project-api/api/recipe/removerecipebyid/"+ dishId)
    .then(response => {
      toast("" + response.data.message);
    })
    .catch(error => console.log(error));
  }
  else {
    toast(""+ dishId + " is not an id only use positive whole numbers");
  }
}

  showMyRecipes = async (e) => {
    e.preventDefault();
    axios.get("http://localhost:1337/localhost:8080/Project-api/api/recipe/getMyRecipes/" + localStorage.getItem("loggedIn"))
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

  render() {
    return (
      <div className="MyRecipes">
      <br/><br/>
        <div className="MyRecipesBody">
        <h2>Search through and delete entries in food database</h2>
        <BrowseRecipes
          myRecipes={this.showMyRecipes}
          loadRecipes={this.getMyRecipes}
          removeRecipe={this.removeRecipeById}
          />
        <div className="resultDiv">
          {this.state.recipeData.map((item, key) =>
              <DisplayMyRecipesTable item={item} key={item.id}/>) }
        </div>
        <ToastContainer autoClose={1000}/>
        </div>
      </div>
    );
  }
}

export default MyRecipes;
