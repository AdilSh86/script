const person = {
  name: 'bill',
  lastname: 'oxford',
  age: '26',
  language: ['ru', 'aze', 'tr'],
  
}
// const name=person.name;
// const age = person.age;
// const language=person.language;

const {name, age, language} = person;
console.log(name,age,language);

for (let key in person){
  if(person.hasOwnProperty(key)){
    console.log('key:', key)
    console.log('value:', person[key])
  }
}
Object.keys(person).forEach((key)=>{
  console.log('key:', key)
  console.log('value:', person[key])
});