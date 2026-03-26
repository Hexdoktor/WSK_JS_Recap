const celsius = Number(prompt("Enter temperature in Celsius:"));

const fahrenheit = (celsius * 9) / 5 + 32;
const kelvin = celsius + 273.15;

document.getElementById("result").innerHTML = `
    <strong>Input:</strong> ${celsius} °C<br>
    <strong>Fahrenheit:</strong> ${fahrenheit.toFixed(2)} °F<br>
    <strong>Kelvin:</strong> ${kelvin.toFixed(2)} K
`;
