var mongoose = require('mongoose');
var db = require('./db');
mongoose.Promise = global.Promise
const TeamSchema = new mongoose.Schema({
    teamName: String,
    grade: Number,
    school: String,
    college: String,
    tel : Number,
    menbers: Array
});
TeamSchema.methods.saveTeam = function(team,cb){
    this.teamName = team.teamName;
    this.grade = team.grade;
    this.school = team.school;
    this.college = team.college;
    this.tel = team.tel;
    this.menbers = team.menbers;
    this.save(cb);
};
TeamSchema.methods.getTeam = function(query,cb){
    if(query === null){
        return this.model('team').find(cb);
    }
    this.model('team').findOne(query,cb);
};

module.exports =  db.model('team',TeamSchema);