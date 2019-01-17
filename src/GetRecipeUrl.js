class GetRecipeUrl extends Component {

      state = {
        recipeUrl: undefined,

  }
      getUrl = async (e) => {
        e.preventDefault();
    const id = e.EventTarget.elements.id.value;

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
      <div>
        <a href="">link</a>
      </div>
    );
  }
}

export default GetRecipeUrl;