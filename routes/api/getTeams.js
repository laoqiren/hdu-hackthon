var Team = require('../../models/team');

module.exports = function(req,res){
    const teamEntity = new Team();
    console.log(req.session.admin)
    teamEntity.getTeam(null,(err,teams)=>{
        if(err){
            return res.status(500).end();
        }
        return res.status(200).json(teams);
    })
}