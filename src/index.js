import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards'
import Sdata from './Sdata';

//import Heading from "./Heading.jsx";  this is a component for heading tag
//import Para from "./Para.jsx";    this is a component for paragraph tag
//import List from "./Heading.jsx"
//import App from './App.js';
import './index.css';


// ***** challange No : 03 Greeting message.
// let currDate = new Date();
// currDate = currDate.getHours();

// let greetings = '';
// if(currDate >=1 && currDate <12){
//   greetings = 'Good morning';
// } else if(greetings >12 && greetings < 16){
//   greetings = 'Good afternoon';
// }
// else{
//   greetings = 'good night';
// }

// ReactDOM.render(
//   <>
//     <h1>Challange No: 03</h1>
//     <p>To print the greeting message as per the time</p>

//     <h1>Hello Sir , {greetings} </h1>
    
//   </>,
//   document.getElementById("root")
// );



// ***** COMPONENTS *****
// In react everything is components. Components is nothing but the small small piece of code
// Creating file for component it should contain first letter capital with .jsx extension
// syntax for components:   function (component_name) {return } and then at end we have to export  it (export default component_name) and at last we have to import in main index.js file
// now the component which we had created is called custom element // we can create our own element

// ReactDOM.render( <App /> , document.getElementById("root"));  for printing list of top 5 netflix series

// *****Props in react*****
// Props mean creating your own attributes
// ** array map it will take three paramater 
// 1parameter values , 2par: index number , 3par:array name
// define map function
// function ncard(val) {
//     return(
//         <Cards imgsrc={val.imgsrc}
//             title={val.title}
//             sname={val.sname}
//             link={val.link}
//         />
//     ) ;

// }

// ReactDOM.render(
//     <>
//     <h1 className='heading_style'>List of top series of 2024</h1>
      
        {/* <Cards imgsrc={Sdata[0].imgsrc}
            title={Sdata[0].title}
            sname={Sdata[0].sname}
            link={Sdata[0].link}
        /> */}
        {/* <Cards imgsrc={Sdata[1].imgsrc}
            title={Sdata[1].title}
            sname={Sdata[1].sname}
            link={Sdata[1].link}
        />
         <Cards imgsrc={Sdata[0].imgsrc}
            title={Sdata[0].title}
            sname={Sdata[0].sname}
            link={Sdata[0].link}
        />
        <Cards imgsrc={Sdata[1].imgsrc}
            title={Sdata[1].title}
            sname={Sdata[1].sname}
            link={Sdata[1].link}
        /> */}
        {/* // call map function */}
       {/* {Sdata.map(ncard)}   */}
        {/* we use or make array to store the values of different attributes */}
    {/* </>,
    document.getElementById("root")
); */}

// ****** Array mapping and fat array function *****
// it allow to run a function  on each item in the array returing a new array as a result
// This array function is used in the place of for loop

function ncard(val) {
    return(
        <Cards 
        
        imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.link}
        />
    ) ;

}

ReactDOM.render(
    <>
    <h1 className='heading_style'>List of top series of 2024</h1>

       {Sdata.map(ncard)}  
        {/* we use or make array to store the values of different attributes */}
    </>,
    document.getElementById("root")
);