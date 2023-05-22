const search = (req, res) => {
  // QUERY STRING
  const query = JSON.stringify(req.query.q);
  console.log(`[INFO] Searching for ${query || null}`);

  if (query == "") {
    console.log("[ERROR] No valid search parameter");
    return res.send({ error: "no valid search parameter" }).status(404);
  }else{
    // busqueda en base de datos
  }

  return res.json({
    results: [
      { name: "algo", id: 4 },
      { name: "otro", id: 5 },
    ],
  });
}

module.exports = search
