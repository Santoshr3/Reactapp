import { useState } from "react";

const State2 = () =>{
    let [booklist, updateBook] = useState ( ['HTML', 'CSS', 'REACT', 'NODJS'] );

    const delbook = (index) =>{
        booklist.splice(index, 1); //a-b
        updateBook(booklist = [...booklist]) //a=a
       
    }
    let [newbook, pickbook] = useState("");
    const save = () =>{
        updateBook(booklist = [...booklist, newbook]);
        pickbook(""); //it send empty value to newbook variable
    }

    return (
        <div className="container">
            <h1 align="center">Array, Add, List, Delete, useState(), [...] spread operator</h1>
            <p align="center">{newbook}</p>
            <p align="center"> Enter new book Name: <input type="text" onChange={obj=>pickbook(obj.target.value)} value={newbook} />
            <button onClick={save}>Save</button>
            </p>
            {
                booklist.map((bookname, index)=>{
                    return(
                        <div className="four" key={index}>
                            <p>{bookname}</p>
                            <button onClick={delbook.bind(this, index)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default State2;