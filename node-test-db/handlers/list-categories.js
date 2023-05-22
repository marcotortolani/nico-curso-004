//const db = require("../helpers/db");
import db from "../helpers/db.js";

const listCategories = (req, res) => {
  const sql = "SELECT * FROM categories";

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
      return;
    }

    res.json(rows);
  });
};

//module.exports = listPeople;
export default listCategories;
