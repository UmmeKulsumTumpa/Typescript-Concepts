console.log('Hello World');

// anotation
let age: number = 20;
// now as we defined age as int, we can't set it to any other type in ts
// a = 'a'; // error

if (age < 50){
    age += 10;
    console.log("You are still a baccha, chill!");
}