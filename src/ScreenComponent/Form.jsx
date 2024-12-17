import React, { useState } from 'react'



export const Form = () => {

  const [ name, setName] =  useState("")
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [ result, setResult] = useState("")

  let url = import.meta.env.VITE_URL
  let token = import.meta.env.VITE_TOKEN

  const changeHandlerName = (event) => {
    setName(event.target.value)
  }

  const changeHandlerPrice = (event) => {
    setPrice(event.target.value)
  }

  const changeHandlerQuantity = (event) => {
    setQuantity(event.target.value)
  }


  const submitHandler = async () => {

    event.preventDefault()

    let tempProduct = {
      name,
      price,
      quantity
    }

    let newURL = `${url}/products`

    let response  = await fetch(newURL, {
      method : "POST", 
      headers : {
        'Authorization': token, 
        'apikey' : token, 
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(tempProduct)
    })

    if (response.ok){
      setResult("Object Created")
      setName("")
      setQuantity(0)
      setPrice(0)

      setTimeout(()=>{

        setResult("")
        
      }, 5000)

    }else{
      let err = await response.json()
      setResult(err.message)
    }

  }


  return (
    <>
      <h1 className='text-center'>Product Form</h1>
      <div className='container-fluid'>
        <form onSubmit={submitHandler}>

          <div className="mb-3">
            <label className="form-label">Name</label>
            <input onChange={changeHandlerName} type="text" className="form-control" value={name} />
          </div>

          <div className="mb-3">
            <label className="form-label">Price</label>
            <input onChange={changeHandlerPrice} type="text" className="form-control" value={price} />
          </div>

          <div className="mb-3">
            <label className="form-label">Quantity</label>
            <input onChange={changeHandlerQuantity} type="number" className="form-control" value={quantity} />
          </div>

          <button className='btn btn-success w-100' > Send Data </button>
        </form>

        <p> {result} </p>
      </div>
    </>
  )
}
