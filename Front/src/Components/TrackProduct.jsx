import React, {  useContext, useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import axios from 'axios';
import { EmployeeContext } from '../Context/EmployeeLocation';

/*
https://geocode.search.hereapi.com/v1/geocode?apiKey=Tfzn48GFLldThtLmzi5tv8B4xQG3NeQ_Bvhcc2_k1Qs&q=5%20Rue%20Daunou%2C%2075000%20Paris%2C%20France
*/
export default function TrackProduct() {
    const [trackingId, setTrackingId] = useState("")
    const [product, setProduct] = useState([])
    
    const handleInput = (text) => {
        setTrackingId(text)
    }
    
    const handleSearch = () => {
        if (trackingId.length !== 0) {
            axios.get("http://localhost:2345/product/" + trackingId)
            .then((res) => {
                setProduct(res.data.data);
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
            let tempAt = product.address.at;
            let temp2 = product.address.city;
            let temp3 = product.address.state;
            let newAddressAt = tempAt.split(" ").join("%20").split(",").join("%2C");
            let newAddress = newAddressAt + "%20" + temp2 + "%20" + temp3;
        console.log(newAddress);
            // axios.get(`https://geocode.search.hereapi.com/v1/geocode?apiKey=Tfzn48GFLldThtLmzi5tv8B4xQG3NeQ_Bvhcc2_k1Qs&q=${newAddress}`)
            // .then((res)=>{
            //     console.log("res",res.data)
            // })
        
        // axios.get("https://geocode.search.hereapi.com/v1/geocode?apiKey=Tfzn48GFLldThtLmzi5tv8B4xQG3NeQ_Bvhcc2_k1Qs&q=5%20Rue%20Daunou%2C%2075000%20Paris%2C%20France")
        //     .then(res => console.log("hmm", res));
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
            </div>
        </>
    )
}