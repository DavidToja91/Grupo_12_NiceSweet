module.exports = (req, res, next) => {
    if (req.session.user.category === "ADMIN") {
        next()
    } else {
        res.redirect('/')
    }
}