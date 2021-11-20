// import React from "react";
// import styled from "styled-components";
// import { ButtonLink } from "./ButtonLink";
// import { InputBox } from "./InputBox";

// const StyledPincodeInput = styled.div`
//     display: flex;
//     background-color: white;
//     align-items: center;
//     justify-content: center;
//     padding: 15px 20px;
//     width: fit-content;
//     margin: auto;
//     border-radius: 5px;

//     form {
//         display: flex;
//         gap: 20px;
//     }

//     @media only screen and (max-width: 600px) {
//         form {
//             flex-direction: column;
//         }
//     }
// `;

// const StyledPincodeForm = styled.form`
//     display: flex;
//     gap: 20px;

//     @media only screen and (max-width: 600px) {
//         flex-direction: column;
//     }
// `;

// const PincodeInput = ({handleInput, handleSubmit, pincodeData}) => {

//     return (
//         <>
//             <StyledPincodeInput>
//                 <StyledPincodeForm onSubmit={handleSubmit}>
//                     <InputBox
//                         name="pickup"
//                         placeholder="Pickup pincode"
//                         type="number"
//                         value={pincodeData.pickup}
//                         maxLength="6"
//                         handleInput={handleInput}
//                     />

//                     <InputBox
//                         name="drop"
//                         placeholder="Drop pincode"
//                         type="number"
//                         maxLength="6"
//                         value={pincodeData.drop}
//                         handleInput={handleInput}
//                     />

//                     <ButtonLink
//                         title="SHIP NOW"
//                         link="/bookpickup/package-details"
//                         type="submit"
//                     />
//                 </StyledPincodeForm>
//             </StyledPincodeInput>
//         </>
//     );
// }

// export { PincodeInput };