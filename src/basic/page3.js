

const Myproduct = () =>{
    let allproduct = ['Water', 'Rice', 'Milk', 'mouse', 'Mobile', 'Scanner'];
    return(
        <div className="container">
            <h1>Product List: {allproduct.length}</h1>
            {
                allproduct.map((productName, index)=>{
                    return(
                        <p key={index} className="four"> {productName} </p>

                    )
                })
            }
        </div>
    )
}
export default Myproduct;