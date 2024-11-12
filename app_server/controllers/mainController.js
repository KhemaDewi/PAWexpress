const index =(req,res) =>{
    const berita =[
        {
            judul: "Berita 1",
            isi: "isi berita 1"
        },
        {
            judul: "Berita 1",
            isi: "isi berita 2"
        },
    ];
   res.render('home',{title:'Halaman Home',berita,layout:'main'});
    
}
const about =(req,res) => {
    res.sender("about", {title:'About Us', layout:'main'});
}
const contact =(req,res) => {
    res.sender("contact", {title:'Contact Us', layout:'main'});
}

module.exports = {index,about,contact}