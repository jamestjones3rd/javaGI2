//Hard

//Data
let tomHeight = 9;
let tomMass = 8;
let jerryHeight = 10;
let jerryMass = 45;



function bmi(m , h) {
    return m / (h * h)
}

let tomHigherBMI = bmi(tomMass , tomHeight) > bmi(jerryMass , jerryHeight)

console.log(`Is Tom's BMI higher than Jerry's? ${tomHigherBMI}`)