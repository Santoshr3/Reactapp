import { useState } from "react";
const State1 = () =>{

 //console.log( useState() ); //[undefined, ƒ]
//let [x, y] = [100, 'f'];
let [x, y] = useState(1000);


const one = () =>{
   y(x+10);
}

const two = () =>{
    y(x-10);
}

let[booklist, updateBook] = useState(['html', 'css', 'react', 'node', 'php']);

const save = () =>{
    updateBook(booklist = [...booklist, "My text Book"]);
}

    return(
        <div className="container">
            <h1 align="center">What is useState()? How it Work ?</h1>
            <p>{x}</p>
            <button onClick={one}>click me +by 10</button>
            <button onClick={two}>click me -by 10</button>
            <h2>total books: {booklist.length}</h2>
            <button onClick={save}>Add new Book</button>
            {
            booklist.map((bookname, index)=>{
                return (
                    <p>{bookname }</p>
                )
            })
        }

        </div>
    )
}
export default State1;