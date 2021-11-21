import { React, useState } from "react";
import { Navbar } from "./Navbar";
import styled from "styled-components";
import { InputBox } from "./InputBox";
import { Button } from "./Button";
import { StyledPageTitle } from "./PageTitle";
import { StyledPackageDetails } from "./StyledPackageDetails";
import { StyledSelectBox } from "./StyledSelectBox";
import axios from "axios";

const StyledPincodeInput = styled.div`
    display: flex;
    background-color: white;
    align-items: center;
    justify-content: center;
    padding: 15px 20px;
    width: fit-content;
    margin: auto;
    border-radius: 5px;

    form {
        display: flex;
        gap: 20px;
    }

    @media only screen and (max-width: 600px) {
        form {
            flex-direction: column;
        }
    }
`;

const StyledPincodeForm = styled.form`
    display: flex;
    gap: 20px;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

const initAllData = {
    pickupCode: "",
    dropCode: "",
    packageSize: "",
    packageCategory: "books",
    packageValue: "",
    fullName: "",
    mobile: "",
    email: "",
    house: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
    pay: false
}
const Home = () => {
    const [step, setStep] = useState(1);
    const [allData, setAllData] = useState(initAllData);

    const handleInput = ({ target }) => {
        setAllData({ ...allData, [target.name]: target.value });
    }

    const handleSubmitPay = () => {
        axios.post("http://localhost:2345/product", {
            name: allData.fullName,
            email: allData.email,
            phone: allData.mobile,
            address: {
                at: allData.area,
                pincode: allData.pincode,
                city: allData.city,
                state: allData.state,
            },
        })
        console.log(1234)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setStep(step + 1);
        console.log("All Data", allData);
    }

    const handlePrev = (e) => {
        setStep(step - 1);
    }

    return (
        <>
            <Navbar />

            {step === 1
                ? <>
                    <StyledPincodeInput>
                        <StyledPincodeForm onSubmit={handleSubmit}>
                            <InputBox
                                name="pickupCode"
                                placeholder="Pickup pincode"
                                type="number"
                                value={allData.pickupCode}
                                maxLength="6"
                                handleInput={handleInput}
                            />

                            <InputBox
                                name="dropCode"
                                placeholder="Drop pincode"
                                type="number"
                                maxLength="6"
                                value={allData.dropCode}
                                handleInput={handleInput}
                            />

                            <Button
                                title="SHIP NOW"
                                type="submit"
                            />
                        </StyledPincodeForm>
                    </StyledPincodeInput>
                </>
                : step === 2
                    ? <>
                        <StyledPageTitle>
                            Book your pickup
                        </StyledPageTitle>
                        <StyledPincodeForm onSubmit={handleSubmit}>
                            <StyledPackageDetails>
                                <div className="title">Package Details</div>
                                <div className="subTitle">Select Package Size</div>
                                <div className="packageSize">
                                    <div className="singlePackageSize">
                                        <input
                                            type="radio"
                                            name="packageSize"
                                            value="extra-small"
                                            onChange={handleInput}
                                        />
                                        <svg _ngcontent-jmo-c170="" xmlns="http://www.w3.org/2000/svg" width="31" height="40" viewBox="0 0 31 40"><g _ngcontent-jmo-c170="" fill="none" fill-rule="evenodd"><path _ngcontent-jmo-c170="" fill="#262727" fill-rule="nonzero" d="M21.96 0v6.904c0 .725.587 1.312 1.312 1.312h6.904v29.832c0 .725-.587 1.312-1.312 1.312H1.312C.587 39.36 0 38.773 0 38.048V1.312C0 .587.587 0 1.312 0H21.96zm4.28 30.176H3.936v1.312H26.24v-1.312zM5.248 26.24H3.936v1.312h1.312V26.24zm20.992 0H6.56v1.312h19.68V26.24zM13.693 10.496H4.675c-.374 0-.683.278-.732.639l-.007.1v11.642c0 .374.278.683.639.732l.1.007h9.018c.374 0 .683-.278.732-.639l.007-.1V11.235c0-.408-.331-.739-.74-.739zM26.24 22.304H15.744v1.312H26.24v-1.312zm0-3.936H15.744v1.312H26.24v-1.312zm0-3.936H15.744v1.312H26.24v-1.312zm-9.184-3.936h-1.312v1.312h1.312v-1.312zm9.184 0h-7.872v1.312h7.872v-1.312z" transform="translate(-241 -355) translate(162 199) translate(19 40) translate(0 56) translate(1) translate(0 36) translate(59 24)"></path><path _ngcontent-jmo-c170="" fill="#262727" fill-rule="nonzero" d="M22.96 0v5.904c0 .725.587 1.312 1.312 1.312h5.904L22.96 0z" transform="translate(-241 -355) translate(162 199) translate(19 40) translate(0 56) translate(1) translate(0 36) translate(59 24)"></path></g></svg>
                                        <div className="packageSizeName">
                                            Extra Small Parcel
                                        </div>
                                        <div className="packageSizeWeight">
                                            Max. 500gm
                                        </div>
                                    </div>
                                    <div className="singlePackageSize">
                                        <input
                                            type="radio"
                                            name="packageSize"
                                            value="small"
                                            onChange={handleInput}
                                        />
                                        <svg _ngcontent-jmo-c170="" xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 40 30"><g _ngcontent-jmo-c170="" fill="none" fill-rule="evenodd"><g _ngcontent-jmo-c170=""><g _ngcontent-jmo-c170=""><g _ngcontent-jmo-c170=""><g _ngcontent-jmo-c170=""><g _ngcontent-jmo-c170=""><path _ngcontent-jmo-c170="" fill="#262727" fill-rule="nonzero" d="M13.272.053v12.8l6.468-3.987 6.468 3.987V.053h10.885c1.315 0 2.39 1.075 2.39 2.387v24.696c0 1.572-.796 2.369-2.39 2.39H2.387C1.075 29.526 0 28.45 0 27.136V2.44C0 1.128 1.075.053 2.387.053h10.885zm-6.984 22.91H5.44c-.585 0-1.06.474-1.06 1.059s.475 1.06 1.06 1.06h.847c.585 0 1.06-.475 1.06-1.06 0-.585-.475-1.06-1.06-1.06zm10.666 0h-6.426c-.585 0-1.06.474-1.06 1.059s.475 1.06 1.06 1.06h6.426c.585 0 1.059-.475 1.059-1.06 0-.585-.474-1.06-1.06-1.06z" transform="translate(-360 -385) translate(162 199) translate(20 96) translate(138 56) translate(40 34)"></path></g></g></g></g></g></g></svg>
                                        <div className="packageSizeName">
                                            Small Parcel
                                        </div>
                                        <div className="packageSizeWeight">
                                            500gm-2kg
                                        </div>
                                    </div>
                                    <div className="singlePackageSize">
                                        <input
                                            type="radio"
                                            name="packageSize"
                                            value="medium"
                                            onChange={handleInput}
                                        />
                                        <svg _ngcontent-jmo-c170="" xmlns="http://www.w3.org/2000/svg" width="51" height="40" viewBox="0 0 41 40"><g _ngcontent-jmo-c170="" fill="none" fill-rule="evenodd"><path _ngcontent-jmo-c170="" fill="#262727" fill-rule="nonzero" d="M13.272.053v14.8l6.468-3.987 6.468 3.987V.053h10.885c1.315 0 2.39 1.075 2.39 2.387v34.696c0 1.572-.796 2.369-2.39 2.39H2.387C1.075 39.526 0 38.45 0 37.136V2.44C0 1.128 1.075.053 2.387.053h10.885zm3.682 32.938H5.44l-.115.006c-.531.058-.944.507-.944 1.053 0 .585.474 1.06 1.06 1.06h11.512l.115-.007c.53-.057.944-.507.944-1.053 0-.585-.474-1.06-1.06-1.06zM6.288 27.962H5.44l-.115.007c-.531.057-.944.507-.944 1.053 0 .585.474 1.06 1.06 1.06h.846l.115-.007c.531-.058.944-.507.944-1.053 0-.585-.474-1.06-1.06-1.06zm10.666 0h-6.426l-.116.007c-.53.057-.944.507-.944 1.053 0 .585.475 1.06 1.06 1.06h6.426l.115-.007c.53-.058.944-.507.944-1.053 0-.585-.474-1.06-1.06-1.06z" transform="translate(-406 -355) translate(162 199) translate(19 40) translate(0 56) translate(1) translate(122 36) translate(102 24)"></path></g></svg>
                                        <div className="packageSizeName">
                                            Medium Parcel
                                        </div>
                                        <div className="packageSizeWeight">
                                            2-5kg
                                        </div>
                                    </div>
                                    <div className="singlePackageSize">
                                        <input
                                            type="radio"
                                            name="packageSize"
                                            value="large"
                                            onChange={handleInput}
                                        />
                                        <svg _ngcontent-jmo-c170="" xmlns="http://www.w3.org/2000/svg" width="60" height="40" viewBox="0 0 60 40"><g _ngcontent-jmo-c170="" fill="none" fill-rule="evenodd"><g _ngcontent-jmo-c170=""><g _ngcontent-jmo-c170=""><g _ngcontent-jmo-c170=""><g _ngcontent-jmo-c170=""><g _ngcontent-jmo-c170=""><path _ngcontent-jmo-c170="" fill="#262727" fill-rule="nonzero" d="M23.272 0v14.853l6.468-3.987 6.468 3.987V0h20.885c1.315 0 2.39 1.075 2.39 2.387v34.696c0 1.572-.796 2.369-2.39 2.39H2.387C1.075 39.473 0 38.398 0 37.083V2.387C0 1.075 1.075 0 2.387 0h20.885zm-5.318 32.99H6.44c-.585 0-1.06.475-1.06 1.06 0 .585.475 1.06 1.06 1.06h11.513c.585 0 1.059-.475 1.059-1.06 0-.585-.474-1.06-1.06-1.06zM7.288 27.963H6.44c-.585 0-1.06.475-1.06 1.06 0 .585.475 1.06 1.06 1.06h.847c.585 0 1.06-.475 1.06-1.06 0-.585-.475-1.06-1.06-1.06zm10.666 0h-6.426c-.585 0-1.06.475-1.06 1.06 0 .585.475 1.06 1.06 1.06h6.426c.585 0 1.059-.475 1.059-1.06 0-.585-.474-1.06-1.06-1.06z" transform="translate(-629 -381) translate(162 199) translate(20 96) translate(416 56) translate(31 30)"></path></g></g></g></g></g></g></svg>
                                        <div className="packageSizeName">
                                            Large Parcel
                                        </div>
                                        <div className="packageSizeWeight">
                                            Max. 10kg
                                        </div>
                                    </div>
                                </div>

                                <div className="subTitle">Package Category</div>
                                <StyledSelectBox name="packageCategory" onChange={handleInput}>
                                    <option value="books">Books</option>
                                    <option value="sports">Sports</option>
                                    <option value="babycare">Babycare</option>
                                    <option value="electronics">Electronics</option>
                                    <option value="household">Household Items</option>
                                    <option value="others">Others</option>
                                </StyledSelectBox>

                                <div className="subTitle">Package Value</div>
                                <StyledSelectBox name="packageValue" onChange={handleInput}>
                                    <option value="lt100">Less than ₹100</option>
                                    <option value="100to500">₹100 - ₹500</option>
                                    <option value="500to2000">₹500 - ₹2000</option>
                                    <option value="2000to5000">₹2000 - ₹5000</option>
                                    <option value="5000to15000">₹5000 - ₹15000</option>
                                    <option value="15000to25000">₹15000 - ₹25000</option>
                                </StyledSelectBox>
                                <br />
                                <br />
                                <div className="rowFlex">
                                    <div onClick={handlePrev}>
                                        <Button
                                            title="PREV"
                                        />
                                    </div>
                                    <Button
                                        title="NEXT"
                                        type="submit"
                                    />
                                </div>
                            </StyledPackageDetails>
                        </StyledPincodeForm>
                    </>
                    : step === 3
                        ? <>
                            <StyledPageTitle>
                                Order in Progress
                            </StyledPageTitle>
                            <StyledPincodeForm onSubmit={handleSubmit}>
                                <StyledPackageDetails>
                                    <div className="title">Address Details</div>
                                    <div className="subTitle">Delivery Details</div>
                                    <div className="fullName">
                                        <div className="inputField">Full name</div>
                                        <InputBox
                                            name="fullName"
                                            placeholder="John Doe"
                                            type="text"
                                            value={allData.fullName}
                                            handleInput={handleInput}
                                        />
                                        <div className="inputField">Mobile Number</div>
                                        <InputBox
                                            name="mobile"
                                            placeholder="Mobile Number"
                                            type="number"
                                            maxLength="10"
                                            value={allData.mobile}
                                            handleInput={handleInput}
                                        />
                                        <div className="inputField">Email Address</div>
                                        <InputBox
                                            name="email"
                                            placeholder="john@doe.com"
                                            type="email"
                                            value={allData.email}
                                            handleInput={handleInput}
                                        />
                                        <div className="inputField">House No., Area, Street</div>
                                        <InputBox
                                            name="area"
                                            type="text"
                                            value={allData.area}
                                            handleInput={handleInput}
                                        />
                                        <div className="inputField">City</div>
                                        <InputBox
                                            name="city"
                                            type="text"
                                            value={allData.city}
                                            handleInput={handleInput}
                                        />
                                        <div className="inputField">State</div>
                                        <InputBox
                                            name="state"
                                            type="text"
                                            value={allData.state}
                                            handleInput={handleInput}
                                        />
                                        <div className="inputField">Pincode</div>
                                        <InputBox
                                            name="pincode"
                                            type="text"
                                            value={allData.pincode}
                                            handleInput={handleInput}
                                        />

                                    </div>
                                    <br />
                                    <br />
                                    <div className="rowFlex">
                                        <div onClick={handlePrev}>
                                            <Button
                                                title="PREV"
                                            />
                                        </div>
                                        <Button
                                            title="NEXT"
                                            type="submit"
                                        />
                                    </div>
                                </StyledPackageDetails>
                            </StyledPincodeForm>
                        </>
                        : step === 4
                            ? <>
                                <StyledPageTitle>
                                    Order in Progress
                                </StyledPageTitle>
                                <StyledPincodeForm onSubmit={handleSubmit}>
                                    <StyledPackageDetails>
                                        <div className="title">Payment Details</div>
                                        <div className="subtitle">Amount: ₹130</div>
                                        <br />
                                        <div className="rowFlex">
                                            <div onClick={handlePrev}>
                                                <Button
                                                    title="PREV"
                                                />
                                            </div>
                                            <button className="btn" onClick={handleSubmitPay}>Pay now</button>
                                        </div>
                                    </StyledPackageDetails>
                                </StyledPincodeForm>
                            </>
                            : <StyledPageTitle>
                                Pickup placed
                            </StyledPageTitle>
            }
        </>
    );
}

export { Home };