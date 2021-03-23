// destructuring
//......................task#01....................


//  let places = ["first", "second", "third", "fourth"];
//  let [a, b, , d] = [f, ...rest] = places;

// console.log(a); 
// console.log(d); 
// console.log(f); 
// console.log(rest);



//........................................

const firstObj = {
    name: 'saif',
    profession: 'engineer',
    nestedObject: {
        prop: 'value',
    }
}

// const {name, profession, nestedObject: {students} } = firstObj;

// console.log(name, profession, students);


//......................task#01b.............

const myArray = ['saif', 'ullah', 'Engineer'];
const [firstName, lastname, profession] = myArray;
console.log(firstName, lastname, profession);



//.............................................

//..............task#02..................

myObject = {
	"key": "value"
}

Object.keys(myObject); // get array of keys

console.log(myObject)



//......................b...............

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
  
  
  const map = {"first" : "1", "second" : "2"};
  console.log(getKeyByValue(map,"2"));
  

