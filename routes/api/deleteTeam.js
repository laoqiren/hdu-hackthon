var Team = require('../../models/team');

module.exports = function(req,res){
    const id = req.query.id;
    let query = {
        _id: id
    }
    if(id === 'all'){
        query = {}
    }
    /*
    TeamEntity.getTeam(query,(err,Team)=>{
        if(err){
            return res.status(500).end()
        }
        console.log(`查询到Team:${Team}`)
        return res.status(200).end()
    })*/
    
    Team.remove(query,err=>{
        if(err){
            return res.status(500).send('server error')
        }
        return res.status(200).send('deleter succeed!')
    })
}