import React from "react";
import { Navbar } from './Navbar'



const Packaging = () => {
    var packagingArray = [
        {name:"XYZ Packaging Ltd",address:"1234 street",contactNumber:1234567890,email:"xyz@gmail.com"},
        {name:"ABC Packaging Ltd",address:"5678 street",contactNumber:987654321,email:"abc@gmail.com"},
        {name:"DEF Packaging Ltd",address:"9876 street",contactNumber:1234569087,email:"def@gmail.com"}
    ]
    return (
        <>
            <Navbar />
            <h1 style={{textAlign: "center"}}>Best Packaging Prices in your Area</h1>
            <div style={{display: "flex",justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                {packagingArray.map((item)=>
                    <div style={{border: "1px solid white", padding: "20px", margin: "10px"}}>
                        <span style={{color: "azure"}}>Name: &nbsp;</span><span>{item.name}</span><br />
                        <span style={{color: "azure"}}>Address: &nbsp; </span><span>{item.address}</span><br />
                        <span style={{color: "azure"}}>Contact Number: &nbsp; </span><span>{item.contactNumber}</span> <br />
                        <span style={{color: "azure"}}>Email: &nbsp; </span><span> {item.email}</span> <br />
                        <span style={{color: "azure"}}>Website &nbsp; </span><a href="https://www.google.com">{item.name.slice(0,3).toLowerCase()}.com</a>
                    </div>
                )}
            </div>
        </>
    );
}

export { Packaging };