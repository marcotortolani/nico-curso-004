const product = (req, res) => {
    if (req.session.loggedIn) {
      res.redirect("/dashboard");
      return;
    }
  
    const form = `<h1>Create a new Product</h1>
  
    <form action="/product" method="post"> 
    <label for='productName'>Product Name</label>
    <input type='text' name='productName' id='productName' maxlength="35">
    <br>
    <label for='productPrice'>Product Price</label>
    <input type='number' name='productPrice' id='productPrice' maxlength="15">
    <br>
    <input type="submit">
  </form>
  
  `;
  
  const formGet = `
  <form action="/listProducts" method="get>
  <label for="listProducts">List of Products</label>
  <input type="submit" id="listProducts" value="Ver lista">
  </form>
  `;
  
    const script = ``;
  
    res.send(form + formGet + script);
  };
  
  export default product;
  