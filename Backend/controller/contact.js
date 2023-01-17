const contact = require("../models/ContactModal");
const contactus = async (req, res) => {
  try {
    // const Data = await blog.findOne({ phone: req.body.phone });
    // if (Data != null) {
    //   return res.json({ msg: " this phone number is alrady exist.." });
    // } else {
    const newContact = new contact(req.body);
    const savedContact = await newContact.save();
    res.status(200).json({
      data: savedContact,
    });
    // }
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = { contactus };
