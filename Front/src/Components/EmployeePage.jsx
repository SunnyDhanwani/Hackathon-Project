import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { EmployeeContext } from '../Context/EmployeeLocation'
import { Navbar } from './Navbar'

export default function EmployeePage() {
  const [status, setStatus] = useState(false)
  const { handleEmployeeLocation } = useContext(EmployeeContext)
  const [array, setArray] = useState([]);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2345/product/")
      .then((res) => {
        setData([...res.data.data])
      })
  }, []);
  function handleaddressassign(){
    var allproducts = [];
    axios.get("http://localhost:2345/product/") 
    .then((res)=>{
        // setProducts(res.data)
        allproducts = res.data.data;
        // for (let i = 0; i < allproducts.length; i++){
        //     console.log(allproducts[i]);
        // }
        setArray(allproducts.filter((e)=>{return e.address.city === "Alwar"}))
        // console.log(newarray);
        // setProduct(res.data.data)
    })
}

  const handleNotify = (item) => {
    if (item.warehouseStatus === true){
      // in the notify
      axios.post("http://localhost:2345/product/nextroute", {email: item.email})

      axios.patch(`http://localhost:2345/product/${item["_id"]}`,{
        warehouseStatus:false,onwayStatus:true
      })
    }else if(item.onwayStatus === true){
      axios.patch(`http://localhost:2345/product/${item["_id"]}`,{
        onwayStatus:false,deliveredStatus:true
      })
    }
    // var xyz = [];
    axios.get("http://localhost:2345/product/")
    .then((res) => {
      return [...res.data.data.filter((e)=>{return e.address.city === "Alwar"})]
    }).then((res)=>{
      setArray(res);
    })
    // console.log(abx);
    // console.log("abrqa ka dabra");
    // setArray(xyz);
  }
  const getCordinates = () => {
    navigator.geolocation.getCurrentPosition(success, error, options);
    const cordinates = {
      latitude: "",
      longitude: "",
    };
    function success(pos) {
      const crd = pos.coords;
      cordinates.latitude = crd.latitude;
      cordinates.longitude = crd.longitude;
      // console.log(`More or less ${crd.accuracy} meters.`);
    }

    function error(err) {
      // console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    return cordinates;
  };
  const getAddress = () => {
    const cordinates = getCordinates()
    setTimeout(() => {
      var latitude = cordinates["latitude"];
      var longitude = cordinates["longitude"]
      if (!latitude) return
      fetch(
        `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${latitude}%2C${longitude}&lang=en-US&apikey=F4NOucAeGs_1k8Lh0YGGfT_vYV_tNl7x6isUF3pePlQ`
      )
        .then(response => response.json())
        .then(data => {
          localStorage.setItem("location", JSON.stringify(data.items[0]))
        });
    }, 1000);
  };

  //   Tfzn48GFLldThtLmzi5tv8B4xQG3NeQ_Bvhcc2_k1Qs
  //   F4NOucAeGs_1k8Lh0YGGfT_vYV_tNl7x6isUF3pePlQ
  useEffect(() => {
    //   setInterval(getAddress(),50000)  
    handleaddressassign();
    getAddress()
  }, [])
  return (
    
    <>
      <Navbar />
      <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
        <table className="allProdDisp">
          <tr>
            <th>Product Id</th>
            <th>Name</th>
            <th>Receiver Address</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {
            array.map((item) =>
              <tr id={item._id}>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.address.at + ", " + item.address.city + ", " + item.address.state + ", " + item.address.pincode}</td>
                <td>{item.phone}</td>
                <td>{item.warehouseStatus ? "At warehouse" : item.onwayStatus ? "On the way" : item.deliveredStatus ? "Delivered" : "Some issues"}</td>
                <td><button className="btn" onClick={() => handleNotify(item)}>
                  {item.warehouseStatus ? "Notify" : item.onwayStatus ? "Done" : "Delivered" }
                  </button></td>
              </tr>
            )}
        </table>
      </div>
    </>
  )
}
