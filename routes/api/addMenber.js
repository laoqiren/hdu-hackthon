var Menber = require('../../models/menber');
module.exports = function(info){
    
    return new Promise((resolve,reject)=>{
        const menberEntity = new Menber();
        menberEntity.saveMenber({
            name: info.name || '未填写',
            grade: info.grade || 2015,
            school: info.school || 'HDU',
            college: info.college || '计算机',
            tel : info.tel || 15968190349,
            sex: info.sex,
            team: info.team
        },err=>{
            if(err){
                reject(err);
            }
            console.log('成功保存到数据库')
            resolve();
        })
    })
    
}