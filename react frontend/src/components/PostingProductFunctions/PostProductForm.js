import React, { useState } from 'react';
import ProductPosting from './ProductPosting'

const PostProductForm = (props) => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [discount, setDiscount] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [companyLogo, setCompanyLogo] = useState('')
    const [image, setImage] = useState('')

        const postProduct = () => {
        ProductPosting.PostProduct({title, discount, price, description, category, companyLogo, image})
            // will come back to the postedProduct thing later!
            .then((response) => props.postedProduct(response))
            .catch(error => console.log('error', error))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        postProduct()
        setTitle('')
        setPrice('')
        setDiscount('')
        setDescription('')
        setCategory('')
        setImage('')
        setCompanyLogo('')
    }

    return (
        <form style={{border:"1px solid #dce8f2", background:"white", boxShadow: "10px 10px 2px #dce8f2"}}
              className="mx-auto p-5 w-50 rounded"
              onSubmit = {handleSubmit}>

            {/*---------- Posting Direction Section -------------*/}
            <div className="title_font">
                <div>
                    <h2>Product Details</h2>
                    <p className="font" style={{fontSize:"1vw"}}>
                        Tell the world about how <strong> awesome </strong> your product is!
                    </p>
                </div>
            </div>

            {/*---------- Title Section -------------*/}
            <div className="col mb-4">
                    <label className="form-label" htmlFor="form6Example1">
                        <div className="font fw-bold">*Title</div>
                        <div style={{fontSize:"10px", color:"gray"}}>
                            Include keywords that buyers would use to search for your item.
                        </div>
                    </label>
                    <input type="text"
                           className="form-control font"
                           placeholder="Enter Product Title"
                           value={title}
                           onChange={ (e) => setTitle(e.target.value)}
                           required
                    />
            </div>


            {/*---------- Price Section -------------*/}
            <div className="col mb-4">
                <div className="font fw-bold"> *Original Product Price </div>
                    <div style={{fontSize:"10px" , color:"gray"}}>
                        The original price of your product
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <input type="number"
                                   className="form-control font"
                                   placeholder="Enter Product Price"
                                   value={price}
                                   step={0.01}
                                   min={1}
                                   onChange={ (e) => setPrice(e.target.value)}
                                   required
                            />
                            <label className="form-label" htmlFor="form6Example2"></label>
                        </div>
                    </div>
            </div>

            {/*---------- Discount Section -------------*/}
            <div className="col mb-4">
                <div className="font fw-bold"> Percent Discount Offer (Optional) </div>
                    <div style={{fontSize:"10px" , color:"gray"}}>
                        Percent discount that you are willing to offer for other Justworks customers
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <input type="number"
                                   className="form-control font"
                                   placeholder="Enter percent discount"
                                   value={discount}
                                   min={0}
                                   onChange={ (e) => setDiscount(e.target.value)}
                            />
                            <label className="form-label" htmlFor="form6Example2"></label>
                        </div>
                    </div>
            </div>


            {/*---------- Category Section -------------*/}
            <div className="col mb-4">
                <div className="font fw-bold">*Product Category </div>
                    <div style={{fontSize:"10px" , color:"gray"}}>
                        This will allow your product to be found easier
                    </div>
                <div className="form-outline mb-4">
                    <input type="text"
                           className="form-control font"
                           placeholder="Enter Product Category"
                           value={category}
                           onChange={ (e) => setCategory(e.target.value)}
                           required
                    />
                    <label className="form-label" htmlFor="form6Example5"></label>
                </div>
            </div>


            {/*---------- Description Section -------------*/}
            <div className="col mb-4">
                <div className="font fw-bold">*Product Description and Additional Information </div>
                    <div style={{fontSize:"10px" , color:"gray"}}>
                        Start with a brief overview that describes your item’s finest features. Shoppers will only see the first few lines of your description at first, so make it count!
                    </div>
                    <div style={{fontSize:"10px" , color:"gray"}}>
                        Not sure what else to say? Shoppers also like hearing about your process, and the story behind this item.
                    </div>
                    <div className="form-outline mb-4">
                        <textarea className="form-control font"
                                  rows="4"
                                  placeholder={"Enter product description"}
                                  value={description}
                                  onChange={ (e) => setDescription(e.target.value)}
                                  required
                        />


                        <label className="form-label" htmlFor="form6Example7"></label>
                    </div>
            </div>


                {/*---------- Company logo Section -------------*/}
            <div className="col mb-4">
                <div className="font fw-bold">*Company Logo</div>
                    <div style={{fontSize:"10px" , color:"gray"}}>
                        This allows our customers to find out more about your company
                    </div>
                <div className="form-outline mb-4">
                    <input type="text"
                           className="form-control font"
                           placeholder="Enter Company Logo's link"
                           value={companyLogo}
                           onChange={ (e) => setCompanyLogo(e.target.value)}
                           required
                    />
                    <label className="form-label" htmlFor="form6Example5"></label>
                </div>
            </div>

            {/*---------- Image Section -------------*/}
                <div style={{paddingTop: "20px"}}>
                    Upload your image.
                </div>
                <div style={{fontSize:"10px" , color:"gray"}}>
                    Tips to make your product stand out:
                    <ul>
                        <li>Use natural lighting and no flash.</li>
                        <li> Show the item being held, worn, or used. </li>
                        <li> Shoot against a clean, simple background. </li>
                    </ul>

                    <input type="text"
                           className="form-control font"
                           placeholder="Enter Product Image Link"
                           value={image}
                           onChange={ (e) => setImage(e.target.value)}
                           required
                    />
                </div>


            {/*---------- Submit Button Section -------------*/}
                {/* SUBMIT BUTTON */}
                <div className="text-center mt-5">
                    <button type="submit"
                            className= "button-6 w-50 justify-content-center"
                            style={{background: "#0f374f"}}
                    >
                        Upload Product
                    </button>
                </div>

            </form>

    )

}

export default PostProductForm;
