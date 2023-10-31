import express from "express";
import {
  deleteStudentData,
  getAllStudentData,
  getOneStudentData,
  studentDataCreate,
  updateStudentData,
} from "../controller/studentController.js";
import { studentMulter } from "../utils/multer.js";

// init router
const router = express.Router();

// set api routers
router.get("/student", getAllStudentData);
router.get("/student/:id", getOneStudentData);
router.post("/student", studentMulter, studentDataCreate);
router.delete("/student/:id", deleteStudentData);
router.patch("/student/:id", studentMulter, updateStudentData);

// export router
export default router;
