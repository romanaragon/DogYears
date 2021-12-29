//creating a variable and setting it's value to my current age
const myAge = 31;
/*new variable that represents tthe number of early years which represent the years the dog ages faster*/
let earlyYears = 2;
/*Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it.*/
earlyYears = 2 * 10.5;
let laterYears = myAge - 2;
/*multiplying the laterYears variable by 4 to calculate the number of dog years accounted for by my later years. Used the multiplication assignment operator to multiply and assign in one step.*/
laterYears *= 4;
/*Adding early years to later years in order to find out my age in dog years*/
myAgeInDogYears = laterYears + earlyYears;
/*creating a new variable with a value of my name,Roman, and using the toLowerCase method to convert it to lowercase for practice*/
myName = 'Roman'.toLowerCase();
/*Using template literals i am printing to the console my name, my age in human years, my age in dog years, and a string of text to make it all make sense*/
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);