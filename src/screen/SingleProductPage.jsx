import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/footer'
import BannerPage from '../components/Banner2/Banner2/BannerPage'
import SingleProduct from '../components/SingleProduct/SingleProduct'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'



function SingleProductPage() {

    const { data, loading, error } = useFetch("http://localhost:8000/api/product");
        console.log(data)

    const {id} = useParams()

    const Data = data.find((d)=> d._id == id)

    const title = "Single Product"
    const img = "https://www.thefoodmarketingexperts.co.uk/wp-content/uploads/2021/05/TFME_Food-Photography_12189.jpg"

  return (
    <div>
      <Navbar />
      <BannerPage title={title} img={img}/>
      <SingleProduct Data={Data}/>
      <Footer />
    </div>
  )
}

export default SingleProductPage
