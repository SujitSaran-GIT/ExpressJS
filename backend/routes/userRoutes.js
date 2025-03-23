import express from 'express'

const router = express.Router()

router.get("/",(req,res) => {
    res.send("This is my user get request")
})

router.post("/",(req,res) => {
    res.send("This is my user post request")
})

router.put("/",(req,res) => {
    res.send("This is my user put request")
})

router.delete("/",(req,res) => {
    res.send("This is my user delete request")
})

export default router