// import React, { Component } from "react";
// import RemoveBtn from "../../components/RemoveBtn";
// import { List, ListItem } from "../../components/List";
// import SavedAPI from "../../utils/SavedAPI";


// //FOr removebtn  onClick={() => this.deleteBook(book._id)

// class Saved extends Component {

//     state = {
//         books: [],
//     };

//     componentDidMount() {
//         this.loadBooks();
//     };

//     loadBooks = () => {
//         SavedAPI.getBooks()
//             .then(res => {console.log(res.data); this.setState({ books: res.data })})
//             .catch(err => console.log(err));
//     };
//   }