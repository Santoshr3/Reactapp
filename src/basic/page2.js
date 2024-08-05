

const Mybook = () =>{
  let allbook = [
    {name: 'Html',       price: 1000, qty: 100},
    {name: 'Css',        price: 2000, qty: 200},
    {name: 'Bootstrap',  price: 3000, qty: 300},
    {name: 'Javascript', price: 4000, qty: 400},
    {name: 'Jaquery',    price: 5000, qty: 500},
    {name: 'React',      price: 6000, qty: 600}
  ]
    return(
        <div className="container">
            <h1>Book List: {allbook.length}</h1>
            <p>
              <table cellpadding="15">
              <thead>
                <tr>
                    <th>Book Id</th>
                    <th>Book Name</th>
                    <th>Book Price</th>
                    <th>Book Quantity</th>
                </tr>
              </thead>
              <tbody>{
                allbook.map((book, index) =>{
                  return(
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{book.name}</td>
                      <td>{book.price}</td>
                      <td>{book.qty}</td>
                    </tr>
                  )
                })
              }
              </tbody>
              </table>
            </p>
        </div>
    )
}

export default Mybook;