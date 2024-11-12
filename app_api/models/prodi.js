const mongoose = require("mongoose");// mengimpor modul mongoose untuk mengelola skema dan model

const prodiSChema = new mongoose.Schema({
    nama:{//fiels untuk nama prodi
        type: String,//tipe data string
        required:true,//field ini wajib diisi
        trim:true,//menghapus spas di awal dan akhir string
    },
    singkatan:{//fiels untuk singkatan prodi
        type: String,//tipe data string
        required:true,//field ini wajib diisi
        trim:true,//menghapus spas di awal dan akhir string
    },
    fakultas_id:{//field untuk fakultas_id yang menjadi refrensi ke koleksi fakultas
        type: mongoose.Schema.Types.ObjectId,//tipe data objectid untuk refrenai ke fakultas
        ref:"Fakultas",//refrensi model ke fakultas
        required:true,//field ini wajib diiisi
    },
    //field untuk menyimpan tanggal pembuatan data prodi
    createAt:{
        type:DataTransfer,//tipe data tanggal
        default:Date.now,//default adalah tanggal dna waktu saat ini
    },
});
//buat mode; prodi dari skema yang telah didefinisikan
const Prodi = mongoose.model("Prodi",prodiSchema);

//mengeksport model prodi agar dapat digunakan di file lain
module.export = Prodi;