#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Wellcome to Bmi calculator");
const BmiCalculator = await inquirer.prompt([{
        name: "Weight_in_kg",
        type: "number",
        message: "Enter your Weight"
    },
    {
        name: "height_in_meter",
        type: "number",
        message: "Enter your haight"
    }]);
let bmi_calculator_height = BmiCalculator.height_in_meter * BmiCalculator.height_in_meter;
let bmi_calculator_meter = BmiCalculator.Weight_in_kg / bmi_calculator_height;
console.log(bmi_calculator_meter);
