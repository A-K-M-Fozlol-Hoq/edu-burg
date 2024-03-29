/*
 * Title: Routes when someone hits /api/student route of the server
 * Description: Declares the routes on /api/student and binds the controllers with them
 * Author: Lamisa Zamzam
 * Date: 14 July, 2021 - present
 *
 */

// Dependencies
import express from "express";
import studentControllers from "../controllers/studentControllers.js";

// Destructuring controllers
const { addAStudent, getStudents, updateStatus } = studentControllers;

// Router Object -- module scaffolding
let router = express.Router();

// Path => /api/student/add
router.route("/add").post(addAStudent);

// Path => /api/student/getAll
router.route("/getAll").get(getStudents);

// Path => /api/student/updateStatus/:id
router.route("/updateStatus/:id").patch(updateStatus);

export default router;
