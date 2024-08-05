import { useState } from "react";
function User(){
    let[fullname, pickName] = useState();
    let[myname, updateName] = useState();
    const save = () =>{
        updateName(fullname);
    }
    return(
        <div className="container" align="center">
            <h1>React input and output</h1>
            Enter your Name: <input type="text" onChange={obj=>pickName(obj.target.value)} />
            <button onClick={save}>Save</button>
            <h1>{myname}</h1>
        </div>
    )
}

export default User;