function convertTemperature() {

    let temp = parseFloat(document.getElementById("temperature").value);

    let unit = document.getElementById("unit").value;

    let result = "";

    if (isNaN(temp)) {

        document.getElementById("result").innerHTML =
            "Please enter a valid temperature.";

        return;

    }

    if (unit === "celsius") {

        let fahrenheit = (temp * 9 / 5) + 32;

        let kelvin = temp + 273.15;

        result = `
        Fahrenheit : ${fahrenheit.toFixed(2)} °F <br>
        Kelvin : ${kelvin.toFixed(2)} K
        `;

    }

    else if (unit === "fahrenheit") {

        let celsius = (temp - 32) * 5 / 9;

        let kelvin = celsius + 273.15;

        result = `
        Celsius : ${celsius.toFixed(2)} °C <br>
        Kelvin : ${kelvin.toFixed(2)} K
        `;

    }

    else {

        let celsius = temp - 273.15;

        let fahrenheit = (celsius * 9 / 5) + 32;

        result = `
        Celsius : ${celsius.toFixed(2)} °C <br>
        Fahrenheit : ${fahrenheit.toFixed(2)} °F
        `;

    }

    document.getElementById("result").innerHTML = result;

}