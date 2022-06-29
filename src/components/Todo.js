import React, { useState } from 'react'
import "../App.css"
import  {GrAdd} from "react-icons/gr"
const Todo = () => {

    const [inputData , setInputData] = useState("");
    const [items , setItems] = useState([]);

    const addItem = () => {
            if(!inputData){

            }else{
                setItems([...items,  inputData]);
                setInputData("")
 
            }
                   } 

        const deleteItem = (id) =>{

            const updatedItems = items.filter(( ele , ind)=>{
                    return ind != id ;
            });
            setItems(updatedItems)
        }

        const removeAll = () =>{
            setItems([]);
        }

  return (
    <>
            <div className="main-div">
                <div className="child-div">
                        <figure>
                            <img src="https://cdn-icons-png.flaticon.com/512/3767/3767084.png" alt="" />
                             <figcaption>Add  your List here </figcaption>   

                        </figure>

                        <div className="addItems">
                            <input type="text" name="Write " placeholder='Add Itemss ....'
                                value={inputData}
                                onChange={(e)=> setInputData(e.target.value) }
                            />
                            <i className='fa fa-plus add-btn' title='add item' onClick={addItem}> </i> 
                        </div>

                        <div className="showItems">

                            {
                                items.map((elem, indx)=>{
                                   return (
                                    <div className="eachItem" key={indx} >
                                <h3> {elem} </h3>
                                <i className='fa fa-plus add-btn' title='delte Item' onClick={()=> deleteItem(indx) }> </i>
                            </div>
                                   )     
                                })
                            }
                            
                        </div>

                        <div className="showItems">
                            <button  className="btn effect04" data-sm-link-text="remove All" onClick={removeAll}> <span> CHECK LIST</span> </button>
                        </div>
                </div>
            </div>
    </>
  )
}

export default Todo