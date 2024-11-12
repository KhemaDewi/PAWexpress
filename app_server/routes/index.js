var express = require('express');
var router = express.Router();

//import controller
const mainController = require('../controllers/mainController')
//route
router.get('/',mainController.index)
router.get('/about',mainController.about)
router.get('/contact',mainController.contact)
/* GET home page. */
// router.get('/', function(req, res, next) {
//   const berita =[
//     {
//         judul: "Berita 1",
//         isi: "isi berita 1"
//     },
//     {
//         judul: "Berita 1",
//         isi: "isi berita 2"
//     },
// ];
// res.render('home',{title:'Halaman Home',berita,layout:'main'});
// });

module.exports = router;
