import "./App.css" 
import React from "react";
const Product = ({ category, item, categoryButtonClick, filterdata }) => {
    return (
        <div align="center">
            <div className="category">
                {
                    category.map((cat) => {
                        const { id, name } = cat;
                        return (
                            <button onClick={() => categoryButtonClick(cat.name)} className="mx-2 btn btn-secondary mt-3 p-3 btn-sm px-4">{name}</button>
                        )
                    })
                }
            </div>


            <div className="item mt-5">
                <div className="row justify-content-center">
                    {
                        filterdata.length != 0 ? (
                            <>
                                {
                                    filterdata.map((pr)=>{
                                        return(
                                            <div className="main-card col-md-3 card p-2 mx-2 mb-3">
                                                <img src={pr.image} style={{objectFit:"contain",height:"200px"}} className="card-img-top" />
                                                 <div className="card-body">
                                                    <h5 className="card-title">{pr.name}</h5>
                                                    <p className="card-title">{pr.price}</p>
                                                 </div>
                                            </div>
                                        )
                                    })
                                }
                            </>
                        ):(
                            <>
                                {
                                    item.map((pr)=>{
                                        return(
                                            <div className="main-card col-md-3 card p-2 mx-2 mb-3">
                                            <img src={pr.image} style={{objectFit:"contain",height:"200px"}} className="card-img-top" />
                                             <div className="card-body">
                                                <h5 className="card-title">{pr.name}</h5>
                                                <p className="card-title">{pr.price}</p>
                                             </div>
                                        </div>
                                        )
                                    })
                                }
                            </>
                        )
                    }
                </div>
            </div>



        </div>
    )
}
export default Product;