import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { EmployeeContext } from '../Context/EmployeeLocation'
import { Navbar } from './Navbar'

export default function EmployeePage() {
  const [status, setStatus] = useState(false)
  const { handleEmployeeLocation } = useContext(EmployeeContext)
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2345/product/")
      .then((res) => {
        setData([...res.data.data])
        console.log("res", res.data.data);
      })
  }, []);

  const handleNotify = (id) => {
    data.map((item) => item.id === id ? { ...item, onwayStatus: true } : item)
    setStatus(true)
  }
  const getCordinates = () => {
    navigator.geolocation.getCurrentPosition(success, error, options);
    const cordinates = {
      latitude: "",
      longitude: "",
    };
    function success(pos) {
      const crd = pos.coords;
      console.log(pos.coords)
      cordinates.latitude = crd.latitude;
      cordinates.longitude = crd.longitude;
      // console.log(`More or less ${crd.accuracy} meters.`);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
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
      console.log("latitude", latitude)
      console.log("longiitude", longitude)
      if (!latitude) return
      fetch(
        `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${latitude}%2C${longitude}&lang=en-US&apikey=F4NOucAeGs_1k8Lh0YGGfT_vYV_tNl7x6isUF3pePlQ`
      )
        .then(response => response.json())
        .then(data => {
          console.log(data.items[0].address)
          localStorage.setItem("location", JSON.stringify(data.items[0].address))
        });
    }, 1000);
  };

  //   Tfzn48GFLldThtLmzi5tv8B4xQG3NeQ_Bvhcc2_k1Qs
  //   F4NOucAeGs_1k8Lh0YGGfT_vYV_tNl7x6isUF3pePlQ
  useEffect(() => {
    //   setInterval(getAddress(),50000)      
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
            data.map((item) =>
              <tr>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.address.at + ", " + item.address.city + ", " + item.address.state + ", " + item.address.pincode}</td>
                <td>{item.phone}</td>
                <td>{item.warehouseStatus ? "At warehouse" : item.onwayStatus ? "On the way" : item.deliveredStatus ? "Delivered" : "Some issues"}</td>
                <td><button className="btn" onClick={() => handleNotify(item.productId)}>Notify</button></td>
              </tr>
            )}
        </table>
      </div>
    </>
  )
}
