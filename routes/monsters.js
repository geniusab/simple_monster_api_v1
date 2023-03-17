const { Router } = require("express");
const { pool } = require("../db");
const router = Router();

router.get("/", (request, response, next) => {
  pool.query("SELECT * FROM monsters", (err, res) => {
    if (err) return next(err);

    response.json({ status: 200, data: res.rows, length: res.rows.length });
  });
});

router.get("/:id", (request, response, next) => {
  const { id } = request.params;
  pool.query("SELECT * FROM monsters WHERE id = $1", [id], (err, res) => {
    if (err) return next(err);
    console.log(res);
    response.json({ status: 200, data: res.rows });
  });
});

router.post("/", (request, response, next) => {
  const { name, personality } = request.body;

  pool.query(
    "INSERT INTO monsters(name, personality) VALUES($1, $2)",
    [name, personality],
    (err, res) => {
      console.log(res);
      if (err) return next(err);
      response.json({ status: 200, data: request.body });
    }
  );
});

router.put("/:id", (request, response, next) => {
  const { id } = request.params;

  const keys = ["name", "personality"];
  const fields = [];

  keys.forEach((key) => {
    if (request.body[key]) fields.push(key);
  });

  fields.forEach((field, index) => {
    pool.query(
      `UPDATE monsters SET ${field}=($1) WHERE id=($2)`,
      [request.body[field], id],
      (err, res) => {
        console.log(res);
        if (err) return next(err);

        if (index === fields.length - 1) {
          response.redirect("/api/monsters");
        }
      }
    );
  });

  //   pool.query(
  //     "UPDATE monsters SET name=($1), personality=($2) WHERE id=($3)",
  //     [name, personality, id],
  //     (err, res) => {
  //       console.log(res);
  //       if (err) return next(err);

  //       response.redirect("/api/monsters");
  //     }
  //   );
});

router.delete("/:id", (request, response, next) => {
  const { id } = request.params;
  pool.query("DELETE FROM monsters WHERE id = $1", [id], (err, res) => {
    if (err) return next(err);
    response.redirect("/api/monsters");
  });
});

module.exports = router;
