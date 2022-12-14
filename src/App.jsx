import React,{ useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App= () =>{
  const [addItem,setAddItem]=useState([]);
  const addNote=(note)=>{
    // alert('I am added');
    setAddItem((prevData)=>{
      return [...prevData,note];
     })
  }

  const onDelete=(id)=>{
    setAddItem((prevData)=>
      prevData.filter((currentValue,index)=>{
        return index!==id; // it is return all data which index is not equal to id
      })
  );
  };

  return (
  <>
  <Header/>
   
  <CreateNote  passNote={addNote}/>
  
  {addItem.map((val,index)=>{  
    return <Note key={index}
                 id={index}
                 title={val.title}
                 content={val.content}
                 deleteItem={onDelete}
                 />
    //this val is the current value in map function that is tile and content obj. 
    // to more understand {https://www.javascripttutorial.net/javascript-array-map/}
  })}
  <Footer/>
   </>
  );
};

export default App;