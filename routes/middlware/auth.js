module.exports = function(req,res,next){
    console.log(req.session.admin)
    if(req.session.admin === true){
        return next()
    } else {
        return res.status(401).end()
    }
}