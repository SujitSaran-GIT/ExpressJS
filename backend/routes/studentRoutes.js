import express from 'express'
import { allStudents, deleteStudent, sendStudent, updateStudent } from '../controllers/studentController.js'

const router = express.Router()

router.get("/",allStudents)

router.post("/",sendStudent)

router.delete("/",deleteStudent)

router.put("/",updateStudent)

export default router