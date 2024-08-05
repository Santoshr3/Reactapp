import { useState } from "react";

const State4 = () =>{
    let[newitem, pickItem]= useState( [] );
    let[itemname, pickName]= useState("");
    let[itemprice, pickPrice]= useState("");
    let[itemqty, pickQty]= useState("");

    const save = () =>{
        let newitem = {name:itemname, price: itemprice, qty: itemqty};
        updateItem(itemlist =[...itemlist, newitem]); //add new element at the end of the array using spread operator
        pickName("");
        pickPrice("");
        pickQty("");
    }
    return(
        <div className="container">
            <h1>Array of Object add List, Delete</h1>
            <table align="left" cellPadding="15">
                <tbody>
                    <tr>
                        <td>Item Name</td>
                        <td><input type="text" onChange={obj=>pickName(obj.target.value)} value={itemname}/></td>
                    </tr>
                    <tr>
                        <td>Item Price</td>
                        <td><input type="text" onChange={obj=>pickPrice(obj.target.value)} value={itemprice}/></td>
                    </tr>
                    <tr>
                        <td>Item Quantity</td>
                        <td><input type="text" onChange={obj=>pickQty(obj.target.value)} value={itemqty}/></td>
                    </tr>
                    <tr>
                        <td colSpan="2" align="center">
                            <button onClick={save}>Save Item</button></td>
                    </tr>
                </tbody>
            </table>
            <table align="right" cellPadding="15">
                <thead>
                    <tr>
                        <th>Sl No</th>
                        <th>Item Name</th>
                        <th>Item Price</th>
                        <th>Item Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    itemlist.map((item, index)=>{
                        return(
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.qty}</td>
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
export default State4;