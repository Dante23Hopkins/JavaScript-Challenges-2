let userInput = prompt ('Enter a month between 1-12');

let months = [
    `January`,
    `Feburary`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `August`,
    `September`,
    `October`,
    `November`,
    `December`,

]

if (userInput <= 12 || userInput <= 0) {
    console.log(months(userInput));
}Else(
    alert( `You have entered an invaild response, please enter a number between 1-12`));

