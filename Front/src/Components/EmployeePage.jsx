import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar'

export default function EmployeePage() {
    const [status, setStatus] = useState(false)
    const data = [
        {
        productId: "fjlafaaffafljj",
        reciever: "rajwada nagar block 1 surat",
        status:false,
        notify:false
    },
        {
        productId: "gggrsdaaffafljj",
        reciever: "rajwada nagar block 1 surat",
        status:false,
        notify:false
    },
        {
        productId: "fafafaaffafljj",
        reciever: "rajwada nagar block 1 surat",
        status:false,
        notify:false
    },
        {
        productId: "dfjlafaaffafljj",
        reciever: "rajwada nagar block 1 surat",
        status:false,
        notify:false
    },
        {
        productId: "fjlafgggggffafljj",
        reciever: "rajwada nagar block 1 surat",
        status:false,
        notify:false
    },
        {
        productId: "fjlafaaafaaafdfljj",
        reciever: "rajwada nagar block 1 surat",
        status:false,
        notify:false
    }
]
const handleNotify = (id) =>{
    data.map((item) => item.id === id ? {...item, notify:true}: item)
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
      console.log("latitude" , latitude)
      console.log("longiitude" , longitude)
      if(!latitude) return
      fetch(
          `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${latitude}%2C${longitude}&lang=en-US&apikey=F4NOucAeGs_1k8Lh0YGGfT_vYV_tNl7x6isUF3pePlQ`
        )
        .then(response => response.json())
        .then(data =>{
           console.log(data.items[0].address)
          });
    }, 1000);
  };
  useEffect(()=>{
      setInterval(getAddress(),5000)      
  },[])
    return (
        <>
        <Navbar/>
        <div style={{display:"flex",justifyContent:"center", marginTop:"200px"}}>
            <table>
                <tr>
                    <td>Product Id</td>
                    <td>Reciever Address</td>
                    <td>Status</td>
                    <td>Action</td>
                </tr>
                {
                    data.map((item) =>
                    <tr>
                        <td>{item.productId}</td>
                        <td>{item.reciever}</td>
                        <td>{item.status ? "Delivered" : "Not Delivered"}</td>
                        <td><button onClick={() => handleNotify(item.productId)}>Notify</button></td>
                    </tr>
                    )}
            </table>
        </div>        
        </>
    )
}
