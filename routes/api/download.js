const Excel = require('excel-class');
const path = require('path');

let date = new Date(),
    time = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + 
      date.getHours() + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())  

let excel = new Excel(path.join(__dirname,'../../assests/test.xlsx'));
var Menber = require('../../models/menber');

module.exports = function(req,res){
    console.log(`the time is ${time}`)
    const menberEntity = new Menber();
    menberEntity.getMenber(null,(err,menbers)=>{
        if(err){
            return res.status(500).end();
        }
        let menbersHasTeam = menbers.filter((menber)=>menber.team!=='未组队');
        let menberNoTeam = menbers.filter(menber=>menber.team === '未组队');
        let result = [...menbersHasTeam,...menberNoTeam];
        let toWrite = result.map(menber=>{
            return {
                姓名: menber.name,
                年级: menber.grade,
                性别: menber.sex,
                学校: menber.school,
                学院: menber.college,
                联系方式: menber.tel,
                所属团队: menber.team
            }
        })
        excel.writeSheet('Sheet1',['姓名','年级','性别','学校','学院','联系方式','所属团队'],toWrite).then(()=>{
            return res.download(path.join(__dirname,'../../assests/test.xlsx'),`参赛人员名单${time}.xlsx`)
        })
    })
}