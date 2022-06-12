const Company = require("../models/company.js");

module.exports.addCompany = async (req, res) => {
  console.log("asdsds", req.body);
  const {
    company,
    name,
    cnic,
    contact,
    designation,
    name1,
    cnic1,
    contact1,
    designation1,
    name2,
    cnic2,
    contact2,
    designation2,
  } = req.body;

  let expense = new Company({
    company,
    name,
    cnic,
    contact,
    designation,
    name1,
    cnic1,
    contact1,
    designation1,
    name2,
    cnic2,
    contact2,
    designation2,
  });

  try {
    await expense.save();
  } catch (error) {
    return res.status(500).json("Server Error!");
  }
  return res.json({ message: "New Company Added Sucessfully" });
};
