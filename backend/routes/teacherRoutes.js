import express from 'express'

const router = express.Router()

router.get("/",(req,res) => {
    res.send("This is my teacher get response")
})

router.post("/",(req,res) => {
    res.send("This is my teacher post response")
})

router.put("/",(req,res) => {
    res.send("This is my teacher put response")
})

router.delete("/",(req,res) => {
    res.send("This is my teacher delete response")
})

export default router