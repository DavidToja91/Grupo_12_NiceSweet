module.exports = function(req,res,next){
    if(req.cookies.userNiceSweet){
        req.session.user = req.cookies.userNiceSweet;
        res.locals.user = req.session.user
    }
    next()
}