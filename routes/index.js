var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/result', function (req, res) {


    //var PythonShell = require('python-shell');
//python-shell
    var PythonShell = require('python-shell');
//var pyshell = new PythonShell('my_script.py');
    PythonShell.run('my_script.py', function (err,results) {
        if (err)
            console.log(err);
        // results is an array consisting of messages collected during execution
        console.log(typeof results[0]);
        //var str = JSON.parse(results[0]);
        res.render('result', {str:""});



    });



});

module.exports = router;
