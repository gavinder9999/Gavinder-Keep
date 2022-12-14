import React, { useState } from "react";
import Button from '@mui/material/Button';

import AddIcon from '@mui/icons-material/Add';
const CreateNote=(props)=>{
    const [expand,setExpand]=useState(false);

    const [note,setNote]=useState({
        title:'',
        content:'',
    })

    const InputEvent=(event)=>{
      const {name,value}=event.target;
      setNote((prevData)=>{
        return {
            ...prevData,
            [name]:value
      }
   
      });
    //   console.log(note);
    }
   
    const addEvent=()=>{
      props.passNote(note);
      setNote({
        title:'',
        content:'',
      })
    }

    const expandIt=()=>{
        setExpand(!expand); // if we have to use backtonormal func then we will use setExpand(true)
    }
    // const backToNormal=()=>{
    //     setExpand(false);
    // }

    return (
    <>
    <div className="main_note" > 
    {/* we can here define a funtion onDoubleClick ={backtoNormal} in upper div.main_note */}
        <form >
            {expand?
            <input type="text" value={note.title}
                               name='title'
                               onChange={InputEvent}
                               placeholder="Title"
                               autoComplete="off" />:null}

            <textarea  cols="" rows="" 
                       value={note.content} 
                       name='content' 
                       onChange={InputEvent} 
                       placeholder="Write a note"
                       onClick={expandIt}></textarea>
            
            {expand?           
            <Button onClick={addEvent}>
                <AddIcon className='plus_sign'/>
            </Button> :null}
        </form>
    </div>
    </>
    );
}
export default CreateNote;