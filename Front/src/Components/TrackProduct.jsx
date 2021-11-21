import React, {  useContext, useEffect, useRef, useState } from 'react'
import { Navbar } from './Navbar'
import axios from 'axios';
import { EmployeeContext } from '../Context/EmployeeLocation';

/*
https://geocode.search.hereapi.com/v1/geocode?apiKey=Tfzn48GFLldThtLmzi5tv8B4xQG3NeQ_Bvhcc2_k1Qs&q=5%20Rue%20Daunou%2C%2075000%20Paris%2C%20France
*/
export default function TrackProduct() {
    const [trackingId, setTrackingId] = useState("")
    const [product, setProduct] = useState([])
    const prod = useRef("")
    const dCord = useRef({})
    // const [distanceAndTime,setDistanceAndTime] =  useState({})
    const data = useRef()
    const handleInput = (text) => {
        setTrackingId(text)
    }
    
    const handleSearch = () => {
        if (trackingId.length !== 0) {
            axios.get("http://localhost:2345/product/" + trackingId)
            .then((res) => {
                setProduct(res.data.data);
                prod.current = res.data.data
                setTrackingId("");
                getDistanceAndTime()
            })
        }
        
    }
    const getDistanceAndTime = () => {
        if (trackingId.length === 0) {
            console.log("oh no");
            return
        }
            var locationData = JSON.parse(localStorage.getItem("location"))
            var lat1 = locationData.position.lat
            var lng1 = locationData.position.lng
            console.log(lat1,lng1)
            console.log(locationData)
            let tempAt = prod.current.address.at;
            let temp2 = prod.current.address.city;
            let temp3 = prod.current.address.state;
            let newAddressAt = tempAt.split(" ").join("%20").split(",").join("%2C");
            let newAddress = newAddressAt + "%20" + temp2 + "%20" + temp3;

            axios.get(`https://geocode.search.hereapi.com/v1/geocode?apiKey=F4NOucAeGs_1k8Lh0YGGfT_vYV_tNl7x6isUF3pePlQ&q=${newAddress}`)
            .then((res)=>{
                // console.log("res",res.data.items[0].position)
                dCord.current  = res.data.items[0].position
            })
            axios.get(`https://dev.virtualearth.net/REST/v1/Routes/DistanceMatrix?origins=${lat1},${lng1}&destinations=${dCord.current.lat},${dCord.current.lng}&travelMode=driving&key=AvF-1faQ6_nTv8XivjsNUvgzXe2647hrXqFpAcjQsW1tMcQ9utneYhARLVFRLU9F`)
            .then((res)=>{
                // setDistance(res.data.resourceSets[0])
                // const data = res.data.resourceSets[0].resource[0].results[0].travelDistance
                data.current = res.data.resourceSets[0].resources[0].results[0]
                console.log("data",data)
            })
            return
    }

    const otpVerify = () => {
        axios.post("http://localhost:2345/product/testroute", {})
    }
    
    
    return (
        <>
            <Navbar />
            <div style={{ marginTop: "100px", width: "500px", marginLeft: "auto", marginRight: "auto", display: "flex", flexDirection: "column", gap: "20px" }}>
                <input className="inpBox" type="text" value={trackingId} placeholder="Enter tracking Id" onChange={(e) => handleInput(e.target.value)} />
                <button className="btn" onClick={handleSearch}>Search</button>
            </div>

            <div style={{ textAlign: "center" }}>
                {product.deliveredStatus
                    ? <div className="dispMsg">Your product was delivered, thanks for choosing us.</div>
                    : product.warehouseStatus
                        ? <> <div className="dispMsg">Your product is at warehouse and will be delivered by {product.deliveryDate}</div>
                            <button className="btn" style={{ margin: "10px auto" }} onClick={otpVerify}>Change Delivery Schedule</button>
                        </>
                        : product.onwayStatus
                            ? <> {console.log("hereeee")}
                                <div className="dispMsg">Your product is on the way! Click below to track live location</div>
                                <button className="btn" style={{ margin: "10px auto" }}>Track Live Location</button>
                            </>
                            : null
                }

                <br />
                {

                    data.current ?
                    <div className="dispMsg">
                   Travel Distance = {data.current.travelDistance} Km
                   <br />
                   Travel Time = {data.current.travelDuration} Miutes 
                </div>
                : null
                }
            </div>
        </>
    )
}