//Hard #1
var tomh = 9
var tomw = 8
var jerryh = 10
var jerryw = 45

// Hard #2
const tomBmi = bmi(tomw,tomh)
const jerryBmi = bmi(jerryw,jerryh)
function bmi(weight,height) {
    return (weight / height / height) * 703
}

// Hard #3
console.log(tomBmi)
console.log(jerryBmi)
const tomBmiHigherThanjerryBmi = tomBmi > jerryBmi
console.log(tomBmiHigherThanjerryBmi)

// Hard #4
console.log(`is Tom's BMI higher than Jerrys? `   +
tomBmiHigherThanjerryBmi )