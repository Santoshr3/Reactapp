const Mycompany = () =>{
    let allproduct = ['water', 'rice', 'milk', 'mouse', 'mobile', 'scanner'];
    return(
<div className="container">
    <h1>Company List: {allproduct.length} </h1>
   <select>
    <option>Choose product</option>
        {
            allproduct.map((pname, index)=>{
                return(
                    <option key={index}>{pname}</option>
                )
            })
        }
   </select>
   <br />
   <h2>Dynamic Checkbox</h2>
   {
    allproduct.map((pname, index)=>{
        return(
            <lable key={index}>
                <input type="checkbox" />{pname}
            </lable>
        )
    })
   }
   <br/>
   <h2>Dynamic Radio Button</h2>
    <div className="main-radio">
        {
            allproduct.map((pname, index)=>{
                return(
                <p key={index} className="six"> <input type="radio" name="item"/>{pname}</p>
                )
            })
        }
    </div>

    <br/>
   <h2>Dynamic text Box</h2>
    <div className="main-radio">
        {
            allproduct.map((pname, index)=>{
                return(
                <p key={index} className="six"> <input type="text" value={pname}/></p>
                )
            })
        }
    </div>
</div>
    )
}
export default Mycompany;