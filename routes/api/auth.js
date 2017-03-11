
module.exports = function(req,res){
    const passwd = req.body.passwd;
    if(passwd === 'luoxia.me'){
        req.session.admin = true;
        console.log('登录后台管理系统成功')
        return res.status(200).end();
    } else {
        return res.status(401).end();
    }
}