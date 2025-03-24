// First Express App
import express from 'express'
import userRoutes from './routes/userRoutes.js'
import teacherRoutes from './routes/teacherRoutes.js'
import studentRoutes from './routes/studentRoutes.js'
import products from './products.js'
import userMiddleware from './middleware/userMiddleware.js'
import ejsRoutes from './routes/ejsRoutes.js'
import path, { join } from 'path'

// Creating an instance of express
const app = express()

// const homeRoutes = express.Router()
// homeRoutes.get("/home",(req,res)=>{
//     res.send("This is my home section")
// })

// homeRoutes.get("/about",(req,res) => {
//     res.send("This is my about section")
// })

// app.use("/",homeRoutes)

// app.get("/",(req,res) => {
//     res.send("Welcome to express js")
// })

// // basic rounting
// app.get("/home",(req,res)=>{
//     res.send("Hello This is my home page.")
// })

// app.get("/about",(req,res) => {
//     res.send("Hello This is my about page.")
// })

// HTTP methods
// GET 👉 Retrive Data
// POST 👉 Create/Insert Data
// PUT 👉 Completely Update Data
// PATCH 👉 Partially Update Data
// DELETE 👉 Delete Data
// ALL 👉 Any HTTP Request Method

// String pattern path
// app.get("/ab?cd",(req,res) => {
//     res.send("If the user hit acd or abcd or then this will run")
// })

// Regex
app.get(/x/, (req, res) => {
    res.send("If the path contains x then it will run")
})
// Means a word that contains x then it will run

// Advance Regex
// users/1234
app.get(/^\/users\/[0-9]{4}$/, (req, res) => {
    res.send("Welcome to the advance Regex page")
})

app.get(`/products`, (req, res) => {
    res.send("This is my all product page")
})

app.get(`/products/iphone`, (req, res) => {
    res.send("This is my all iphone page")
})

app.get(`/products/iphone/${1 + 1}`, (req, res) => {
    res.send("This is my iphone having id 2")
})

app.get("/double-cb",
    (req, res, next) => {
        res.send("First Callback function")
        next()
    },
    (req, res) => {
        console.log("This is my nested callback function")
    }
)

// Array Of Callbacks

const cbone = (req,res,next) => {
    console.log("First Callback")
    next()
}
const cbtwo = (req,res,next) => {
    console.log("second Callback")
    next()
}
const cbthree = (req,res) => {
    res.send("Array Callback")
    console.log("Third Callback")
}

app.get("/cbroutes",[cbone,cbtwo,cbthree])



app.get("/students",(req,res) => {
    res.send("Get Method")
})

app.post("/students",(req,res) => {
    res.send("Post Method")
})

app.put("/students",(req,res) => {
    res.send("Put Method")
})

app.delete("/students",(req,res) => {
    res.send("Delete Method")
})

// The above code is too long to write
// We can refactor it

app.route("/student")
.get((req,res) => res.send("Get Method"))
.post((req,res) => res.send("Post Method"))
.put((req,res) => res.send("Put Method"))
.delete((req,res) => res.send("Delete Method"))

// Advance Router

app.use("/api/users",userRoutes)
app.use("/api/teacher",teacherRoutes)

// Route Parameters
app.delete("/student/delete/:id",(req,res) => {
    // res.send("User Deleted")
    res.send(`${req.params.id} deleted successfully`)
})

app.get("/phone/Iphone/:model",(req,res) => {
    const {model} = req.params
    res.send(`Iphone ${model} pro max`)
})

app.get("/products/:category/:id",(req,res) => {
    const { category, id } = req.params
    res.send(`${category} ${id} Pro Max`)
})

app.get("/product/order/:day/:month/:year",(req,res) => {
    const { day, month, year} = req.params
    res.send(`Product is ordered on: ${day} / ${month} / ${year}`)
})


app.param("id",(req,res,next,id) => {
    console.log(`id : ${id}`)
    next()
})

app.post('/user/:id',(req,res) => {
    console.log('This is uset id path')
    res.send("Response Ok")
})

app.use("/studentdata",studentRoutes)

// Query String in ExpressJS

app.get("/prod",(req,res) => {
    res.send(`Response Ok ${req.query.category}`)
})

app.post("/prod",(req,res) => {
    const {category,id} = req.query
    res.send(`Response Ok ${category}, ProductID : ${id}`)
})

// Sending JSON data
app.get("/productlist",(req,res) => {
    res.json({
        products
    })
})

// MIDDLEWARE IN EXPRESS
// -----------------------
function userCredentials(req,res,next){
    console.log("Name: SUJIT SARAN")
    console.log("Email: sujitsaran16@gmail.com")
    console.log("Password: Saran@2002")
    console.log("Age: 18")
    console.log("Course: MCA")
    next()
}

app.get("/usercredential",userCredentials,(req,res)=>{
    res.send("<h1>Admin Login</h1>")
})

app.get("/usermiddleware",userMiddleware,(req,res)=>{
    res.send("<h1>Admin Login</h1>")
})

// Serving Static Files In Express JS
// -------------------------------------
app.use(express.static('public'))
// Built in middleware that serves our static files

app.get('/path',(req,res) => {
    res.sendFile(path.join(process.cwd(),'/public/index.html'))
})

// EJS 
app.set("view Engine","ejs")
// app.set('views', '/views');
// set() Method tells us that we are using EJS 
// app.use(express.static(join(process.cwd(),"public")))

app.use("/ejs",ejsRoutes)

app.listen(8000, () => console.log("Server is running on port 8000"))