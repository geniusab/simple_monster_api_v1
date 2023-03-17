const { Router } = require("express");
const { pool } = require("../db");

const router = Router();

router.get("/", (request, response, next) => {
  pool.query("SELECT * FROM hobbitats ORDER BY id ASC", (err, res) => {
    if (err) return next(err);
    response.json({ data: res.rows, length: res.rows.length });
  });
});

router.post("/", (request, response, next) => {
  const { name, climate, temperature } = request.body;
  pool.query(
    "INSERT INTO hobbitats(name, climate,temperature) VALUES($1,$2,$3)",
    [name, climate, temperature],
    (err, res) => {
      if (err) return next(err);
      response.redirect("/api/habitats");
    }
  );
});

module.exports = router;
