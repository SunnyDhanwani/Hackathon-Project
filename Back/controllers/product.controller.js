const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");
// const authenticate = require("../middlewares/authenticate");
// const { authorize } = require("../middlewares/authorize");
// const sendEmail = require("./sendmail");
const sendEmail = require("../utils/sendmail")

router.get(
    "",
    //   authenticate,
    //   authorize(["admin", "conveyer"]),
    async (req, res) => {
        try {
            const product = await Product.find().lean().exec();
            return res.status(200).json({ data: product });
        } catch (err) {
            return res.status(401).send("you are not allowed to visit this page");
        }
    }
);

router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).lean().exec();
        return res.status(200).json({ data: product });
    } catch (err) {
        return res.status(401).send("error occured");
    }
});

router.post("/testroute", async (req, res) => {
    try {
        async function xyz() {
            await sendEmail({
                to: "sunnydhanwani678@gmail.com",
                subject: "Verification Email",
                text: "your otp is 123456",
                html: "<h1>Verification Email</h1>"
            })
        };
        xyz();
    } catch (err) {
        return res.status(401).send("you are not allowed to do this action");
    }
});

router.post("",
    // authenticate, authorize(["admin"]), 
    async (req, res) => {
        try {
            const product = await Product.create(req.body);
            return res.status(200).json({ data: product });
        } catch (err) {
            return res.status(401).send("you are not allowed to do this action");
        }
    });







module.exports = router;