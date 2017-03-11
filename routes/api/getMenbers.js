var Menber = require('../../models/menber');

module.exports = function(req,res){
    console.log(req.session.admin)
    const menberEntity = new Menber();
    menberEntity.getMenber(null,(err,menbers)=>{
        if(err){
            return res.status(500).end();
        }
        let menbersHasTeam = menbers.filter((menber)=>menber.team!=='未组队');
        let menberNoTeam = menbers.filter(menber=>menber.team === '未组队');
        return res.status(200).json([...menbersHasTeam,...menberNoTeam]);
    })
}