/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/heros');
// const destination = path.resolve(__dirname, 'dist/images/heros');
// Agar sesuai dengan path hero yang digunakan coba ubah alamat path untuk destination menjadi sbb.
const destination = path.resolve(__dirname, 'dist/images');

// if (!fs.existsSync(destination)) {
//   fs.mkdirSync(destination);
// }
// JIka folder parant belum dibuat maka akan menghasilkan error.
// Solusinya coba terapkan opsi recursive seperti contoh di bawah ini.
if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination, { recursive: true });
}

fs.readdirSync(target)
  .forEach((image) => {
    // mengubah ukuran gambar dengan lebar 800px, dengan prefix -large.jpg
    sharp(`${target}/${image}`)
      .resize(1000)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-large.jpg`));

    // mengubah ukuran gambar dengan lebar 800px, dengan prefix -medium.jpg
    sharp(`${target}/${image}`)
      .resize(800)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-medium.jpg`));

    // mengubah ukuran gambar dengan lebar 480px, dengan prefix -small.jpg
    sharp(`${target}/${image}`)
      .resize(600)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-small.jpg`));
  });
