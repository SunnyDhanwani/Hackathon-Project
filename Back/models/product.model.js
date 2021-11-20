const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: Number, required: true },
        address: {
            at: { type: String, required: true },
            pincode: { type: Number, required: true },
            city: { type: String, required: true },
            state: { type: String, required: true },
        },
        warehouseStatus: {type: Boolean, default: false},
        onwayStatus: {type: Boolean, default: false},
        deliveredStatus: {type: Boolean, default: false},
        deliveryDate: {type: String, default: "25-11-2021"}
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("product", productSchema);