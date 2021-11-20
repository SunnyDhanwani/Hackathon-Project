import React, {  useState } from 'react'
import { Navbar } from './Navbar'
import axios from 'axios';


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
                    console.log(product);
                    setTrackingId("");
                })
        }
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