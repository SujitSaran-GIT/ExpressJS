const homeController = (req,res) => {
    const data = {
        name : "SUJIT",
        id : 30
    }
    res.render("index.ejs",data)
}
export {homeController}