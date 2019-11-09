import axios from "axios";


export default {
  
  getGoogleBooks: function(search) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search);
  },
  
};

// GET https://www.googleapis.com/books/v1/volumes?q={search terms}

