exports.find_all = async (req, res) => {
  let query = "SELECT * FROM order_info";

  db.query(query, (err, result) => {
      if (err) {
          res.status(400).send(err)
      }
      res.send(result)
  });
};

exports.find_by_id = async (req, res) => {
  let query = "SELECT * FROM order_info";

  db.query(query, (err, result) => {
      if (err) {
          res.status(400).send(err)
      }
      res.send(result)
  });
};

exports.count_pid = async (req, res) => {
  let query = "SELECT count(*) as total FROM order_info where pid="+req.params.pid;

  db.query(query, (err, result) => {
      if (err) {
          res.status(400).send(err)
      }
      res.send(result)
  });
};
