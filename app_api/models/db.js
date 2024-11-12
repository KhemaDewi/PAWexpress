//models/db.js
//mengimpor model mongoose untuk mengelola koneksidengan MongoDB
const mongoose = require("mongoose");
//fungsi asinkron untuk menghubungkan database ke mongoDB
const connectDB = async () => {
    try {
        //menghubungkan mongoDB menggunakan url koneksi
        await mongoose.connect(
            "mongodb+srv://khemadewi2226240083:khemadewi2226240083@cluster0.symwr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
            //"mongodb://localhost:27017/mdpdb"
        );
        //jika koneksi berhasil, log pesan ke konsol 
        console.log("MongoDB Connected...");
    } catch (error) {
        //jika terjadi keslaahan saat menghubungkan,log pesan kesalahan ke konsol
        console.error("MongoDB connection error: ", error);
        //keluar dai prosesdengan kode status 1 untuk menandakan ada kesalahan
        process.exit(1);
    }
};
//mengkspor fungsi ConnectDB agar dapat digunakan di file lain
module.exports = connectDB