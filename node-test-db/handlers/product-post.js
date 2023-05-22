import db from "../helpers/db.js";

// req = request  | pedido
// res = response | respuesta
const productPost = (req, res) => {
  const productName = req.body.productName;
  const productPrice = req.body.productPrice;

  //console.log(productName)

  if (productName.length > 0 && productPrice > 0) {
    const sql = "INSERT INTO products(name, price, created_at) VALUES(?, ?, ?);";

    const timestamp = new Date().getTime();

    db.all(sql, [productName, productPrice, timestamp], (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
        return;
      }

      console.log('rows: ', rows);

      if (rows.length === 0) {
        res.status(201).send('producto creado');
      } else {
        res.status(400).send('hubo un error al crear el producto');
      }
      res.end();
    });

  } else {
    res.status(400).send('No se pudo crear el producto, falto el nombre o el precio');
    res.end();
  }
}

export default productPost;
