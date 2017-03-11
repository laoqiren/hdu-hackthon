module.exports = function(req,res){
    let a = Math.floor(Math.random()*100),
        b = Math.floor(Math.random()*100);
    req.session.answer = a + b;
    return res.status(200).json({
        a,
        b
    })
}