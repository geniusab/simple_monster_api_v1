const { Router } = require("express");
const { knex, pool } = require("../db");
const router = Router();

// router.get("/", async (request, response, next) => {
//   const selectedRows = await knex("monsters").select();
//   response.json({ status: 201, data: selectedRows });
// });

router.get("/", async (request, response, next) => {
  try {
    const selectedRows = await knex("monsters").select();
    response.json({
      status: 200,
      data: selectedRows,
      length: selectedRows.length,
    });
  } catch (err) {
    return next(err);
  }
});

router.get("/conditions", async (request, response, next) => {
  try {
    // "SELECT * FROM lives JOIN hobbitats ON hobbitats.name = lives.habitat"
    const selectedRows = await knex("lives")
      .select()
      .leftOuterJoin("hobbitats", function () {
        this.on("hobbitats.name", "lives.habitat");
      });

    response.json({
      status: 200,
      data: selectedRows,
      length: selectedRows.length,
    });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
