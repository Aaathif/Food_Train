import React, { useEffect, useState } from 'react'
import css from './SingleProduct.module.css'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';

function SingleProduct() {

    const [size, setSize] = useState("M")

    const {id} = useParams()
    // const [product, setProduct] = useState({});

    const { data, loading, error } = useFetch(`http://localhost:8000/api/product/find/${id}`);
        console.log(data)

    // const mPrice = data.prices.filter((item) => item.size === "M")[0].price;

        // useEffect(() => {
        //     fetch(`http://localhost:8000/api/product/${id}`)
        //       .then((res) => res.json())
        //       .then((data) => setProduct(data))
        //       .catch((err) => console.log(err));
        //   }, [id]);

    

    // const Data = data.find((d)=> d._id === id)
    // console.log(Data.title)

  return (
    <div className={css.container}>
        <div className={css.row}>
            <div className={css.col2}>
                <img src={data.photos} style={{width: "400px"}}/>
            </div>
            <div className={css.col2}>
                <h6>{data.type}</h6>
                <h3>{data.title}</h3>
                <h2>Rs.200</h2>
                {/* {data.prices.map(p=>{
                    if(p.size === "M")
                        return <h2>{p.price*3}</h2>
                })} */}
                {/* <select name="" id="" value={size} onChange={(e)=>{setSize(e.target.value)}}>
                    {data.size.map(size => {
                        return <option value={size}>{size}</option>
                    })}
                </select> */}
                <input type="number" name="" id="" />
                
                <button>Add to cart</button>
                <h4>{data.description}</h4>
                <span>{data.description}!. Get the best Results for Resume Writers Denver. Find what you are looking for! 99% Match on Resume Writers Denver. Find Here - Free, Private and Secure. The Best Resources. Always Facts. Unlimited Access. Results & Answers. Privacy Friendly. Grammarly Helps You Eliminate Errors And Find The Perfect Words To Express Yourself. Find and Add Sources Fast. Fix Punctuation Errors. AI Writing Assistant. Eliminate Grammar Errors. Improve Word Choice. Easily Improve Any Text. </span>
            </div>
        </div>
      
    </div>
  )
}

export default SingleProduct
