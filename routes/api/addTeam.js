var Team = require('../../models/team');
var addMenber = require('./addMenber');
module.exports = function(req,res,next){
    let info = req.body.info,
        menbers = req.body.menbers;
    const TeamEntity = new Team();
    if(req.body.answer !== req.session.answer){
        return res.status(401).end();
    }
    menbers = menbers.filter((menber,i)=>menber.name !== '')
    TeamEntity.saveTeam({
            teamName: info.teamName || '未填写',
            grade: info.grade || 2015,
            school: info.school || 'HDU',
            college: info.college || '计算机',
            tel : info.tel || 15968190349,
            menbers: menbers || []
        },err=>{
            if(err){
                return res.status(500).end()
            }
            Promise.all(menbers.map((menber,i)=>{
                return addMenber({
                    name: menber.name || '未填',
                    grade: info.grade || 2015 ,
                    school: info.school || '未填',
                    college: info.college || '未填' ,
                    tel: info.tel || 15968190349,
                    sex: menber.sex || '未填',
                    team: info.teamName || '填写有误'
                })
            })).then(()=>{
                return res.status(200).end()
            }).catch(err=>{
                return res.status(500).end()
            })
        })
}