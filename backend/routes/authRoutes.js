const authController = require("../controller/authController")

module.exports = (app)=>{
    app.post("/api/auth/signUp",authController.signUp)
    app.post("/api/auth/signIn",authController.signIn)
}