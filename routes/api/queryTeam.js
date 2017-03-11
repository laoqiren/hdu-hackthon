var Team = require('../../models/team');

module.exports = function(req,res){
    var teamName = req.body.teamName;
    var TeamEntity = new Team();
    TeamEntity.getItem({teamName},(err,team)=>{
        if(err){
            return res.status(500).end();
        } else if(team){
            return res.status(200).json({
                valid:false
            })
        } else {
            return res.status(404).json({
                valid: true});
        }
    })
}