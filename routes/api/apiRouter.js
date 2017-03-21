var express = require('express');
var router = express.Router();
var mw = require('../middlware/auth');
var addTeam = require('./addTeam');
var getTeams = require('./getTeams');
var deleteTeam = require('./deleteTeam');

var addMenber = require('./addMenber');
var getMenbers = require('./getMenbers');
var deleteMenber = require('./deleteMenber');

var auth = require('./auth');
var download = require('./download');

var authImage = require('./authImage');
var queryTeam = require('./queryTeam');


router.post('/addTeam',addTeam);

//router.get('/deleteTeam',deleteTeam)

router.post('/addMenber',(req,res,next)=>{
    if(req.body.answer !== req.session.answer){
        req.session.answer = undefined;
        return res.status(401).end();
    }
    const info = {
                    name: req.body.name || '未填',
                    grade: req.body.grade || 2015 ,
                    school: req.body.school || '未填',
                    college: req.body.college || '未填' ,
                    tel: req.body.tel || 15968190349,
                    sex: req.body.sex || '未填',
                    team: '未组队'
                }
    addMenber(info).then(()=>{
        return res.status(200).end()
    })
})
router.post('/auth',auth)
router.get('/authImage',authImage);

router.get('/getTeams',mw);
router.get('/getTeams',getTeams);

router.get('/getMenbers',mw);
router.get('/getMenbers',getMenbers);

router.get('/deleteMenber',mw);
router.get('/deleteMenber',deleteMenber);

router.get('/download',mw);
router.get('/download',download);


module.exports = router;