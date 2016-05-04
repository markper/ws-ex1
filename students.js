var db = require("./data/studentlist.json");

exports.getAllStudents = function(){ // returns the 
    return db;
};

exports.getStudentsByYear = function(num) {
    var arr = new Array();
    for(var i in db.students) {
        var Student = db.students[i];
        if(Student.year == num) {
           arr.push(Student);
        }
    }
    return arr;
};

exports.getExcellentStudentsByYear = function(num1, num2) {
    var arr = new Array();
    for (var i in db.students) {
        var Student = db.students[i];
        if((Student.year == num1) && (Student.avg >= num2)){
            arr.push(Student);
        }
    }
    return arr;
};


