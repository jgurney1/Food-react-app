import React, { Component } from 'react';
class GetRecipeUrl extends Component {

  state = {
        recipeUrl: undefined,
        isWaiting: true,
  }
      getUrl = async (props) => {
    const id = props.id;

    const api_url = await fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/"+ id +"/information", {
      method: 'GET',
      headers: {
         "X-RapidAPI-Key": "bqYhNobARpmshl2EUI7M8eFdIUayp1ykAxEjsnItlHGE4G34I1",
      },
    });
    const retrieved = await api_url.json();

    this.setState({
      recipeUrl: retrieved.sourceUrl,
      isWaiting: false,
    })

  }
  
  componentDidMount() {
    this.getUrl();
  }

  render() {
    return (
      <div>
        <a href={this.state.recipeUrl} alt="Website Link not loaded or found">link</a>
      </div>
    );
  }
}

export default GetRecipeUrl;