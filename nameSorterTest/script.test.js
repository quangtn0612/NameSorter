const fs = require('fs');
const nameSorter = require('../script'); //import the function we want to test

const mockNames = [];
const FileNames = fs.readFileSync('./nameSorterTest/mock-unsorted-names.txt', 'utf-8');
FileNames.split(/\r?\n/).forEach(FileName =>  { 
  mockNames.push(FileName);
});

// Test the name sorting functionality
test('Name Sorter - Sorting names', () => {
  const sortedNames = mockNames.sort(nameSorter);

  const expectedSortedNames = [
    'Marin Alvarez',
    'Adonis Julius Archer',
    'Beau Tristan Bentley',
    'Hunter Uriah Mathew Clarke',
    'Leo Gardner',
    'Vaughn Lewis',
    'London Lindsey',
    'Mikayla Lopez',
    'Janet Parsons',
    'Frankie Conner Ritter',
    'Shelby Nathan Yoder',
  ];

  expect(sortedNames).toEqual(expectedSortedNames);
});
