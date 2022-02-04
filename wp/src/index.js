import './index.css';
import ReactDOM from "react-dom";
import React from 'react';
import img_1 from "./logo.png";

ReactDOM.render(
    <div>
    <h1 className='head'>hello webpack</h1>
        
        <i>Italic text</i>
        <img src={img_1}></img>
        <form action="/action_page.php">
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname" value="John"/>
            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname" value="Doe"/>
            <input type="submit" value="Submit"/>
            </form>
            </div>, 
    document.getElementById("root")
)

// const i = react.createElement("i", {}, "Italic text");
// const img=react.createElement(
//     "img",
//     {src: img_1}
// );
  
// const f=react.createElement("form",)
// const h1 = react.createElement("h1", {
//     id: "abv",
//     className:"head"
// },[ "hello webpack",i,img]);




// const h1 = document.createElement("h1");
// h1.innerText = "hello webpack";
// h1.setAttribute("class", "head");

// document.getElementById("root").append(h1)