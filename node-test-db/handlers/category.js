const category = (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }

  const form = `<h1>Create a category</h1>

  <form action="/category" method="post"> 
  <label for='categoryName'>Category Name</label>
  <input type='text' name='categoryName' id='categoryName' maxlength="35">
  <br>
  <input type="submit">
</form>

`;

const formGet = `
<form action="/listCategories" method="get>
<label for="listCategories">List of Categories</label>
<input type="submit" id="listCategories" value="Ver Lista">
</form>
`;

  const script = ``;

  res.send(form + formGet + script);
};

export default category;
