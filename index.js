const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Menggunakan middleware body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/biodata', (req, res) => {
    const { nama, tempatLahir, tanggalLahir, alamat } = req.query;
    const biodata = {
        nama: nama || 'User',
        tempatLahir: tempatLahir || 'Tidak ada',
        tanggalLahir: tanggalLahir || 'Tidak ada',
        alamat: alamat || 'Tidak ada',
    };
    res.send(biodata);
});

app.post('/biodata', (req, res) => {
    const { nama, tempatLahir, tanggalLahir, alamat } = req.body;
    const biodata = {
        nama: nama || 'User',
        tempatLahir: tempatLahir || 'Tidak ada',
        tanggalLahir: tanggalLahir || 'Tidak ada',
        alamat: alamat || 'Tidak ada',
    };
    res.send(biodata);
});


app.listen(3000, () => {
    console.log('Server started on port 3000');
});