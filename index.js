const express = require("express") // impor jadul express
const app = express()// inisialisasi express
const expressLayout =require ("express-ejs-layouts"); //impor modul express-ejs-layouts
const port = 3000 // port

app.set("views",__dirname + "/views");
app.set('view engine','ejs');

app.use(expressLayout);
app.use(express.static('public'));

//route (get sebagai method)
app.get("/",(req,res)=>{
    //res.sendFile(__dirname + "/home.html");
    res.render('home',{title:'Halaman Home'});

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
    
}) ;
//route about
app.get("/about",(req,res)=>{
    //res.sendFile(__dirname + "/about.html");
    res.render('about',{title: "Halaman About Us",layout:'main'});
});

// route contact
app.get("/contact",(req,res)=>{
    //res.sendFile(__dirname + "/contact.html");
    res.render('contact',{title: 'Halaman Contact',layout:'main'});
});

//route prodi
app.get("/prodi",(req,res)=>{
    res.render('prodi',{title:'Halaman Prodi',layout:'main'});

    const prodi =[
        {
            NamaProdi: "Sistem Informasi",
            Fakultas: "FIKR",
            Singkatan: "SI"
        },
        {
            NamaProdi: "Informatika",
            Fakultas: "FIKR",
            Singkatan: "IF"
        },
        {
            NamaProdi: "Teknik Elektro",
            Fakultas: "FIKR",
            Singkatan: "TE"
        },
        {
            NamaProdi: "Manajemen Informatika",
            Fakultas: "FIKR",
            Singkatan: "MI"
        },
        {
            NamaProdi: "Manajemen",
            Fakultas: "FEB",
            Singkatan: "MJ"
        },
        {
            NamaProdi: "Akutansi",
            Fakultas: "FEB",
            Singkatan: "AK"
        }
    ];

    res.render('prodi',{title:'Program Studi',layout:'main'})
    
})


//route mahasiswa
app.get('/mahasiswa', (req,res)=>{
    res.json({
        "status" : "Success",
        "message" : "data mahasiswa",
        "data" :[ {npm : 2226240083 , nama: "Khema"},
        {npm : 2226240123 , nama: "Jeno"},
        {npm : 2226240122 , nama: "Jaemin"},
        ]
    })
});

//route dosen
app.get('/dosen', (req,res)=>{
    res.json({
        "status" : "Success",
        "message" : "data dosen",
        "data" : [{
            prodi : "Sistem Informasi",
            dosen : ["Iis","Faris","Dafid"]
        },
        {
            prodi:"Informatika",
            dosen:["Derry","Siska","Yohannes"]
        },
    ]
})
       


    })

//handle route yang tidak ada
app.use("/",(req,res) => {
    res.send("<h1> 404 Not Found</h1>");
});

//jalankan server
app.listen(port,()=>{
    console.log(`Server dapat diakses di http://localhost:${port}`);
});