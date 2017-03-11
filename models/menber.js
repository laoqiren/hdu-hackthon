var mongoose = require('mongoose');
var db = require('./db');
mongoose.Promise = global.Promise
const MenberSchema = new mongoose.Schema({
    name: String,
    grade: Number,
    school: String,
    college: String,
    tel : Number,
    sex: String,
    team: String
});
MenberSchema.methods.saveMenber = function(menber,cb){
    this.name = menber.name;
    this.grade = menber.grade;
    this.school = menber.school;
    this.college = menber.college;
    this.tel = menber.tel;
    this.sex = menber.sex;
    this.team = menber.team;
    this.save(cb);
};
MenberSchema.methods.getMenber = function(query,cb){
    if(query === null){
        return this.model('menber').find(cb);
    }
    this.model('menber').findOne(query,cb);
};

module.exports =  db.model('menber',MenberSchema);