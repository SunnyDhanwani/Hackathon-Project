import styled from "styled-components";

const StyledPackageDetails = styled.div`
    width: 710px;
    margin: 20px auto;
    padding: 20px;
    background-color: white;
    min-height: 100px;
    border-radius: 5px;

    .title {
        display: flex;
        background-color: white;
        font-size: 20px;
        font-weight: bold;
    }

    .rowFlex {
        display: flex;
        gap: 20px;
        justify-content: center;
    }

    .subTitle {
        font-weight: 600;
        text-transform: uppercase;
        font-size: 16px;
        color: gray;
        margin-bottom: 10px;
        margin-top: 20px;
    }

    .packageSize {
        display: flex;
        margin-top: 10px;
        gap: 20px;
    }

    .singlePackageSize {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 10px;
        border: 1px solid gray;
        border-radius: 5px;
        width: 200px;
        min-height: 100px;
        /* background-color: green; */
    }

    .packageSizeName, .packageSizeWeight {
        color: #0097d3;
        font-weight: bold;
        font-size: 14px !important;
    }

    .inputField {
        text-transform: uppercase;
        font-weight: 600;
        margin-top: 20px;
        margin-bottom: 5px;
    }
`;

export { StyledPackageDetails };