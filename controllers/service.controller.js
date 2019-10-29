exports.product = async (req, res) => {
  let query = "SELECT * FROM product_info";

  db.query(query, (err, result) => {
      if (err) {
          res.status(400).send(err)
      }
      res.send(result)
  });
};

exports.order = async (req, res) => {
  let query = "SELECT * FROM order_info";

  db.query(query, (err, result) => {
      if (err) {
          res.status(400).send(err)
      }
      res.send(result)
  });
};
exports.ticket = async (req, res) => {
  let query = "SELECT * FROM ticket";

  db.query(query, (err, result) => {
      if (err) {
          res.status(400).send(err)
      }
      res.send(result)
  });
};
