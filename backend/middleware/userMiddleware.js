const userMiddleware = (req,res,next) => {
    console.log("Name: SUMIT SARAN")
    console.log("Email: sumitsaran16@gmail.com")
    console.log("Password: Saran@2006")
    console.log("Age: 18")
    console.log("Course: BSC")
    next()
}

export default userMiddleware