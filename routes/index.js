var express = require('express');
var router = express.Router();
var mongoose_ = require('mongoose');
const {Schema} = require("mongoose");

const uri = "mongodb+srv://zewdatabase:ijoXgdmQ0NCyg9DO@zewgame.urb3i.mongodb.net/Lab6?retryWrites=true&w=majority";
mongoose_.connect(uri).catch(err => console.log('Co Loi Xay Ra'))
const WallPapers = mongoose_.model('wallpapers',new Schema({
  description: String,
  link: String,
  categoryid: String,

}))
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/getData', function(req, res, next) {

  WallPapers.find({},function (error,result){
    if(error) throw error;
    res.send(result);
  });
});
router.get('/insert/',function (req,res){
   var descriptionG = req.query.descriptionz;
   var linkG = req.query.linkz;
   var categoryidG = req.query.categoryidz;
     WallPapers.insertMany([{description:descriptionG,link:linkG,categoryid:categoryidG}],function (error,result){
       // res.send("Thanh Cong")
       res.send("Thanh Cong");
     })
})

module.exports = router;
