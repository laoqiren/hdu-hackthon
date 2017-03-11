var Menber = require('../../models/menber');

module.exports = function(req,res){
    const id = req.query.id;
    let query = {
        _id: id
    }
    /*
    if(id === 'all'){
        query = {}
    }*/
    /*
    MenberEntity.getMenber(query,(err,Menber)=>{
        if(err){
            return res.status(500).end()
        }
        console.log(`查询到Menber:${Menber}`)
        return res.status(200).end()
    })*/
    
    Menber.remove(query,err=>{
        if(err){
            return res.status(500).send('server error')
        }
        return res.status(200).send('deleter succeed!')
    })
}