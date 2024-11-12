const index =(req,res)=> {
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

    res.render('prodi',{title:'Program Studi',prodi ,layout:'main'})
    
}
module.exports={index}