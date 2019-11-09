(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{15:function(e,a){},23:function(e,a,t){e.exports=t(49)},49:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(14),l=t.n(r),c=t(53),s=t(52),i=t(15),m=t.n(i),u=t(16),v=t(17),h=t(20),p=t(18),f=t(21);function b(e){var a=e.children;return o.a.createElement("div",null,o.a.createElement("ul",{"class-name":"list-group"},a))}function d(e){var a=e.children;return o.a.createElement("li",{className:"list-group-item"},a)}var k=function(e){return o.a.createElement("button",Object.assign({className:"save-btn"},e),"Save")},g=t(5),E=t.n(g),N={getGoogleBooks:function(e){return E.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)}},I={getBooks:function(){return E.a.get("/api/books")},getBook:function(e){return E.a.get("/api/books/"+e)},deleteBook:function(e){return E.a.delete("/api/books/"+e)},saveBook:function(e){return E.a.post("/api/books",e)}},w=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(h.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(o)))).state={books:[],search:""},t.handleInputChange=function(e){t.setState({search:e.target.value})},t.handleFormSubmit=function(e){e.preventDefault();var a=t.state.search.replace(" ","+");N.getGoogleBooks(a).then((function(e){t.setState({books:e.data.items,search:""})})).catch((function(e){return console.log(e)}))},t.saveBook=function(e){console.log(e);var a=t.state.books[e];I.saveBook({title:a.volumeInfo.title,authors:a.volumeInfo.authors,description:a.volumeInfo.description,image:a.volumeInfo.imageLinks.thumbnail,link:a.volumeInfo.canonicalVolumeLink}).then((function(a){return t.setState({books:t.state.books.filter((function(a,t){return t!==e}))})})).catch((function(e){return console.log(e)}))},t}return Object(f.a)(a,e),Object(v.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container mt-8"},o.a.createElement("div",{className:"input-group mb-8"},o.a.createElement("label",{htmlFor:"search",className:"mr-2"},"Book search:"),o.a.createElement("input",{type:"text",id:"search",className:"form-control",value:this.state.search,onChange:this.handleInputChange,"aria-label":"Search","aria-describedby":"basic-addon2"}),o.a.createElement("div",{className:"input-group-append"},o.a.createElement("button",{onClick:this.handleFormSubmit,className:"btn btn-danger text-dark btn-outline-secondary",type:"button"},"Search"))),o.a.createElement("div",{className:"jumbotron"},this.state.books.length?o.a.createElement(b,null,this.state.books.map((function(a,t){return o.a.createElement(d,{key:t},o.a.createElement("div",{className:"d-inline-flex"},o.a.createElement("img",{src:a.volumeInfo.imageLinks.thumbnail,alt:a.volumeInfo.title}),o.a.createElement("div",{className:"ml-3"},a.volumeInfo.title," by ",a.volumeInfo.authors.map((function(e,t){return 1===a.volumeInfo.authors.length?e:t===a.volumeInfo.authors.length-1?"& "+e:e+", "})))),o.a.createElement("p",null,a.volumeInfo.description),o.a.createElement("a",{className:"mr-3",rel:"noopener noreferrer",href:a.volumeInfo.canonicalVolumeLink,target:"_blank"},"Click for more Information"),o.a.createElement(k,{onClick:function(){return e.saveBook(t)}}))}))):o.a.createElement("h3",null,"No Results to Display")))}}]),a}(n.Component),B=t(51);var y=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},o.a.createElement(B.a,{className:"navbar-brand",to:"/"},"Google Books"),o.a.createElement("div",null,o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(B.a,{to:"/",className:"/"===window.location.pathname||"/search"===window.location.pathname?"nav-link active":"nav-link"},"Search")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(B.a,{to:"/saved",className:"/saved"===window.location.pathname?"nav-link active":"nav-link"},"Saved")))))},S=function(e){return o.a.createElement("div",{className:"wrapper"},e.children)};var j=function(){return o.a.createElement(c.a,null,o.a.createElement("div",{className:"container"},o.a.createElement(y,null),o.a.createElement(S,null,o.a.createElement(s.a,{path:"/",exact:!0,component:w}),o.a.createElement(s.a,{path:"/search",component:w}),o.a.createElement(s.a,{path:"/saved",component:m.a}))))};l.a.render(o.a.createElement(j,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.65dd82fc.chunk.js.map