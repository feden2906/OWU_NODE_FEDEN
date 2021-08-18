
const fs = require('fs');
const path = require('path');

const dir1800 = path.join(__dirname, '1800');
const dir2000 = path.join(__dirname, '2000');

function searchFile(pathToDir) {
  fs.readdir(pathToDir, (err, files) => {
    files.forEach(file => {
      fs.readFile(path.join(pathToDir, file), (err1, data) => {
        if (err) throw new Error(err);

        const person = JSON.parse(data);
        renameFunc(person.gender, pathToDir, file);
      })
    })
  })
}

function renameFunc(gender, pathDir, nameDoc) {
  let years = '1800';
  if (gender === 'male') years = '2000';

  fs.rename(path.join(pathDir, nameDoc), path.join(__dirname, years, nameDoc), err => {
        if (err) throw new Error(err);
      }
  )
}

searchFile(dir1800);
searchFile(dir2000);


