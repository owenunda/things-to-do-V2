import React from 'react';
import { useState, useEffect } from 'react'

const ProductsForm = () => {
    const [ name, setName] = useState("")
    const [ price, setPrice] = useState("")
    const [ category, setCategory] = useState("")
    const [ isAvalible, setIsAvalibre] = useState(false)

    const submit = e =>{
        
        e.preventDefault()

        const newProduct = {
            id: Date.now(),
            name: name,
            price: price,
            category: category,
            valible: isAvalible
        }
        console.log(newProduct)
    }
    return (
        <form onSubmit={submit}>
            <div className="input-container">
                <label htmlFor="name">Name</label>
                <input type="text" id='name' value={name}  onChange={e => setName(e.target.value)}  />
            </div>
            <div className="input-container">
                <label htmlFor="categoria"  >category</label>
                <input type="text" id='categoria' value={category} onChange={e => setCategory(e.target.value)} />
            </div>
            <div className="input-container">
                <label htmlFor="precio">Price</label>
                <input type="number" id='precio' value={price} onChange={e => setPrice(e.target.value)} />
            </div>
            <div className="input-container checkbox">
                <label htmlFor="isAvalible" >is valible</label>
                <input type="checkbox" checked={isAvalible} id='isAvalible' onChange={e => setIsAvalibre(e.target.checked)} />
            </div>
            <button> create products</button>
            <button type='button'>clear</button>
        </form>
    );
};

export default ProductsForm;