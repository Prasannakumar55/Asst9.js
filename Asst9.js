 
const names = ['john','baba','yaga','wick'];
const capitals =  names.map(name => name.toUpperCase());
console.log(capitals);
 
 
let studentRecords = [
    {name: 'John', id: 123, marks : 98 },
    {name: 'Baba', id: 101, marks : 23 },
    {name: 'yaga', id: 200, marks : 45 },
    {name: 'Wick', id: 115, marks : 75 } ];

let fifty = studentRecords.filter((mark) => mark.marks > 50);
        console.log(fifty);
   
let markID = studentRecords.filter((markIDs) => markIDs.marks > 50); 
         markID = studentRecords.filter((markIDs) => markIDs.id > 120);
    console.log(markID);

let total = studentRecords.reduce((sum, add) => sum + add.marks,0);
        console.log(total);    
 
let fiftyplus = studentRecords.filter((fiftyp) =>fiftyp.marks > 50);
        console.log(fiftyplus);

let idplus = studentRecords.filter((fiftyid) =>fiftyid.id > 120);
        console.log(idplus);

for(let adding of studentRecords){
        if(adding.marks<50){     
        adding.marks = adding.marks + 15;}}
            
let result = studentRecords.filter(added => added.marks > 50);
let result1 = result.reduce((accu, curr) => accu + curr.marks,0);
        console.log(result1);
      
 let School = [
        {Name : 'Prasanna kumar', class : '05th', RollNo : 05},
        {Name : 'Ravi kumar', class : '06th', RollNo : 06},
        {Name : 'Arun kumar', class : '07th', RollNo : 07},
        {Name : 'Anil kumar', class : '08th', RollNo : 08},
        {Name : 'Akash kumar', class : '09th', RollNo : 09},
        {Name : 'Naveen kumar', class : '10th', RollNo : 10},
];
 