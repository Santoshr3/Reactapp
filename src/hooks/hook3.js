import { useState } from "react";

const State3 = () =>{
    let[itemlist, updateItem] = useState(["Apple", "Mango", "Laptop", "Desktop"])
    let [newitem, pickItem]= useState("");
    const save = () =>{
        updateItem(itemlist = [...itemlist,newitem]);
        pickItem("");
    }

    const ClearAll = () =>{
        pickItem("");
    }
    return (
        <div align="center" className="conainer">
            <h1 align="center">ADD, List, Delete - Usestate()</h1>
            <p align="center">Enter item name: <input type="text" onChange={obj=>pickItem(obj.target.value)} value={newitem}/></p>
            <button>Save Item</button>
            <button>Reset</button>

            <table cellPadding="15" align="center">
                <thead>
                    <tr>
                        <th>Sl no</th>
                        <th>Item</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {
                     itemlist.map((itemName, index)=>{
                        return(
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{itemName}</td>
                                <td><button>Delete</button></td>

                            </tr>
                        )
                    })
                   }
                </tbody>
            </table>
        </div>
    )
}
export default State3;