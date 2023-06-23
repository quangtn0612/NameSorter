const fs = require('fs');
const names = []

const FileNames = fs.readFileSync('unsorted-names-list.txt', 'utf-8');
FileNames.split(/\r?\n/).forEach(FileName =>  { 
  names.push(FileName); //push each line into names array
});

const nameSorter = ((name1,name2) => {
  const name1SeparatedArr = name1.split(" ") //split names
  const name2SeparatedArr  = name2.split(" ") //split names
  const name1LastName = name1SeparatedArr.at(-1) //last item of an array
  const name2LastName = name2SeparatedArr.at(-1) //last item of an array

  if (name1LastName !== name2LastName){
    // return 0 means equal, negative means name1LastName before name2LastName, 
    // positive means name1LastName after name2LastName
    return name1LastName.localeCompare(name2LastName) 
  }
  else{
    const name1AllOtherNames = name1SeparatedArr.slice(0, name1SeparatedArr.length - 1).join('')
    const name2AllOtherNames = name2SeparatedArr.slice(0, name2SeparatedArr.length - 1).join('')
    return name1AllOtherNames.localeCompare(name2AllOtherNames) //sorting all other names
  } 
})

const sortedNames = names.sort(nameSorter)

var file = fs.createWriteStream('sorted-names-list.txt');
file.on('error', function(err) { //catch any errors
  console.log("err: ", err);
});
sortedNames.forEach(function(v) { file.write(v + '\n'); });
file.end();

module.exports = nameSorter;