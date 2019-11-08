import React, { Component } from "react";
import { List, ListItem } from "../../components/List";
import SaveBtn from "../../components/SaveBtn";
import SavedAPI from "../../utils/SavedAPI";
import SearchAPI from "../../utils/SearchAPI";

// Setting the component's initial state

class Search extends Component {

  
  state = {
    
    books: [], 
    search: ""
    
  }; 
  

  // Handle event changes
  
  handleInputChange = e => {

    // Updating the input's state
    this.setState({ 
      // Getting the value name of the input triggered the change
      search: e.target.value })
  };

  // Preventing the default behavior of the form submit (which is to refresh the page)
  handleFormSubmit = e => {
    e.preventDefault(); 
    let searchTerm = this.state.search.replace(" ", "+"); 
    SearchAPI.getGoogleBooks(searchTerm)
      .then(response => {
        this.setState({ books: res.data.items, search: "" })
      })
      .catch(err => console.log(err));
  };





}


