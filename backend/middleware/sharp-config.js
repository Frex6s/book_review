const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

module.exports = (req, res, next) => {
    if (!req.file) return next();

    const fileName = req.file.filename.split('.').slice(0, -1).join('.') + '.webp';

    sharp(req.file.path)
        .resize({ width: 800, height: 800, fit: 'inside' }) 
        .webp({ quality: 80 }) 
        .toFile(path.join('images', fileName))
        .then(() => {
            fs.unlink(req.file.path, () => {
                req.file.path = 'images/' + fileName;
                req.file.filename = fileName;
                next();
            });
        })
        .catch(err => next(err));
};