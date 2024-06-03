import React from "react";
import { useState } from "react";
import { get_api } from "../../api/api";
import { get_product } from "../../constant";
import { useEffect } from "react";  
import { Link } from "react-router-dom";
const Home = () => {
  const [product, setproduct] = useState([]);

  
  let GET_products = async () => {
    try {
      let res = await get_api(get_product);
      console.log(res);

      setproduct(res.data);
    } catch (err) {
      console.log(err, "err");
    }
  };

  // ADDcart
  let ADDcart = (val) => {
 console.log(val);
  }
 useEffect(() => {
  GET_products()
 }, [])
 
  return(
    <div className="container-fluid">
    <div className="row col-md-12">
      <div className="col-md-12">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
              <th scope="col">ADDcart</th>
            </tr>
          </thead>
          <tbody>
            {product?.map((val, index) => {
              return (
                <tr>
                  <th scope="row">{val.id}</th>
                  <td>{val.name}</td>
                  <td>{val.price}</td>
                  <td>{val.desc}</td>
                  <td><Link to={`/Cart`}><button className="btn btn-primary" onClick={()=>{ADDcart(val)}}>ADDcart</button></Link></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    
    </div>
  </div>
  )
};

export default Home;
