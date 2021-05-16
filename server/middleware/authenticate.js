module.exports = {
    ensureAuth: function (req, res, next) {
      if (req.isAuthenticated()) {
        return next()
      } else {
        console.log("not Authenticated")
        res.status(400).redirect('http://localhost:3000/login')
      }
    }
}    