import express from 'express'

const allStudents = (req,res) => {
    res.send("All Students")
}

const sendStudent = (req,res) => {
    res.send("Send Students")
}

const deleteStudent = (req,res) => {
    res.send("delete Students")
}

const updateStudent = (req,res) => {
    res.send("Update Students")
}

// Exporting all the functions
export {allStudents,sendStudent,deleteStudent,updateStudent}