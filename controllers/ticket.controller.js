exports.find_all = async (req, res) => {
  let query = "SELECT * FROM ticket";

  db.query(query, (err, result) => {
      if (err) {
          res.status(400).send(err)
      }
      res.send(result)
  });
};

exports.count = async (req, res) => {
  let query = "SELECT count(*) as total FROM ticket";

  db.query(query, (err, result) => {
      if (err) {
          res.status(400).send(err)
      }
      res.send(result)
  });
};

exports.is_used = async (req, res) => {
  let query = "SELECT count(*) as total FROM ticket where is_used='T'";

  db.query(query, (err, result) => {
      if (err) {
          res.status(400).send(err)
      }
      res.send(result)
  });
};
