/*Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).

Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.

Try to change one of the changed variables now, and observe what happens.*/


let language = "Hindi"
language = "Telugu" //here by removing let we can change assigned variable
const country = "India" //here const means value cant be changed
const state = "Andhra Pradesh"
state = "Tamil Nadu" //it will show error
console.log(language)
console.log(country)
console.log(state)
