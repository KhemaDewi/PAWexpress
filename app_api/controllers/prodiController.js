//mengimpor model prodi untuk berinteraksi dnegan koleksi prodi di mongodb
const Prodi = require ("../models/prodi");

//mendapatkan semua data prodi
const getAllProdi= async(req,res)=>{
    try {
        // Mengambil semua prodi dari database
        const prodi = await Prodi.find().populate("fakultas_id","nama singkatan");
       
        // Mengirimkan respons dengan status 200 dan data fakultas
        res.status(200).json(prodi);
    } catch (err) {
        // Mengirimkan respons dengan status 500 jika terjadi kesalahan
        res.status(500).json({ message: err.message });
    }
};


//mendapatkan satu prodi berdasarkan ID
const getProdiById= async(req,res)=>{
    try {
        // Mencari fakultas berdasarkan ID yang diberikan di parameter
        const prodi = await Prodi.findById(req.params.id);
        // Jika fakultas tidak ditemukan, kirimkan respons 404
        if (!prodi) {
            return res.status(404).json({ message: "Prodi not found" });
        }
        // Mengirimkan respons dengan status 200 dan data fakultas
        res.status(200).json(prodi);
    } catch (err) {
        // Mengirimkan respons dengan status 500 jika terjadi kesalahan
        res.status(500).json({ message: err.message });
    }
}

//membuat prodi baru
const createProdi= async(req,res)=>{
    // Membuat instance fakultas baru dari data yang diterima
    const prodi = new Prodi({
        nama: req.body.nama,
        singkatan: req.body.singkatan,
        fakultas_id: req.body.fakultas_id,
    });

    try {
        // Menyimpan prodi baru ke database
        const newProdi = await prodi.save();
        // Mengirimkan respons dengan status 201 dan data prodi baru
        res.status(201).json(newProdi);
    } catch (err) {
        // Mengirimkan respons dengan status 400 jika ada kesalahan saat menyimpan
        res.status(400).json({ message: err.message });
    }
}

//memperbarui data prodi
const updateProdi= async(req,res)=>{
    try {
        const prodi = await Prodi.findById(req.params.id);
        if(!prodi)
            return res.status(404).json({ message: "Fakultas not found"});
        if (req.body.nama != null) {
            prodi.nama = req.body.nama;
        }
        if (req.body.singkatan != null) {
            prodi.singkatan = req.body.singkatan;
        }
        if (req.body.fakultas_id != null) {
            prodi.fakultas_id = req.body.fakultas_id;
        }

        const updateProdi = await prodi.save();
        res.status(200).json(updateProdi);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
}

//menghapus prodi berdasarkan ID
const deleteProdi= async(req,res)=>{
    try { 
        const prodi = await Prodi.findById(req.params.id);
        if (!prodi)
            return res.status(404).json({ message: "Prodi not found" });
        await prodi.deleteOne();
        res.status(200).json({ message: "Prodi deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
}

// mengekspor fungsi2 kontroller aga dapat digunkan di file lain
module.expert ={
    getAllProdi,
    createProdi,
    getProdiById,
    updateProdi,
    deleteProdi,
};