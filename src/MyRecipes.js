import React, { Component } from 'react';

class MyRecipes extends Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
      values: "select filter..."
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
      </div>
    );
  }
}

export default MyRecipes;
