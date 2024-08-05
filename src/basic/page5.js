const Mycustomer = () =>{
    let allcustomer = [
    {city: 'Bangalore', user: ['Sunil', 'Rajpal', 'Krish']},
    {city: 'Pune',      user: ['Santosh', 'Ali', 'Mukesh', 'Raj']},
    {city: 'Chennai',   user: ['Satish', 'Shanmukh', 'Alex']},
    {city: 'Delhi',     user: ['Sachin', 'Sandip', 'Malik', 'Rajkumar']},
    {city: 'Mumbai',     user: ['Sanjay', 'Malik', 'Amir']}
    ]
    return(
<div className="container">
    <h1 align="center">Nested Map() Example</h1>
    {
        allcustomer.map((customer, index)=>{
            return(
                <fieldset key={index}>
                    <legend>{customer.city} - {customer.user.length}</legend>
                    {
                        customer.user.map((fullname, index2)=>{
                            return(
                                <p key={index2}>{fullname}</p>
                            )
                        })
                    }
                </fieldset>
            )
        })
    }
</div>
    )
}

export default Mycustomer;