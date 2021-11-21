import React, {  useContext, useEffect, useRef, useState } from 'react'
import { Navbar } from './Navbar'
import axios from 'axios';

/*
https://geocode.search.hereapi.com/v1/geocode?apiKey=Tfzn48GFLldThtLmzi5tv8B4xQG3NeQ_Bvhcc2_k1Qs&q=5%20Rue%20Daunou%2C%2075000%20Paris%2C%20France
*/
export default function TrackProduct() {
    const [trackingId, setTrackingId] = useState("")
    const [product, setProduct] = useState([])
    const prod = useRef("")
    const dCord = useRef({})
    const [buttonstatus, setButtonStatus] = useState(false);
    const [calendarstatus, setcalendarstatus] = useState(false);
    const [otp,setOTP] = useState("");
    const [date,setdate] = useState("");
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
            })
        }
        
    }

    const otpVerify = () => {
        setButtonStatus(true);
        axios.post("http://localhost:2345/product/testroute", {})
    }

    const handleOTP = () => {
        setOTP("");
        if (otp != "123456"){
            alert("Wrong OTP Provided")
        }else{
            setcalendarstatus(true);
        }
    }

    const handledate = (product) => {
        var newString = date.slice(8)+"-"+date.slice(5,7)+"-"+date.slice(0,4);
        axios.patch(`http://localhost:2345/product/${product["_id"]}`,{
            deliveryDate: newString
        })
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
                            {buttonstatus ? <>
                            <p>An OTP has been sent to the email.</p>
                            <input placeholder="Enter OTP" onChange={(e)=>setOTP(e.target.value)} value={otp} />
                            <button onClick={handleOTP}>Submit</button>
                                </>:
                                <></>}
                            <br />
                            <br />
                            {calendarstatus ? <>
                                <input type="date"  onChange={(e)=>setdate(e.target.value)} value={date} />
                                <button onClick={()=>handledate(product)}>Submit</button>
                            </> : <></>}
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