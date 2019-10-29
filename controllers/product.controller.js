exports.find_all = async (req, res) => {
  let query = "SELECT * FROM product_info";

  db.query(query, (err, result) => {
      if (err) {
          res.status(400).send(err)
      }
      res.send(result)
  });
};

exports.find_by_id = async (req, res) => {
  let query = "SELECT * FROM product_info";

  db.query(query, (err, result) => {
      if (err) {
          res.status(400).send(err)
      }
      res.send(result)
  });
};
