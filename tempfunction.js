 function convertTemperature() {
        const temperature = document.getElementById("temperature").value;
        const unit = document.getElementById("unit").value;
        let result;
        if (unit === "celsius") {
          result = (temperature * 9 / 5) + 32;
          result = result.toFixed(2) + "°F";
        } else {
          result = (temperature - 32) * 5 / 9;
          result = result.toFixed(2) + "°C";
        }
        document.getElementById("result").innerHTML = result;
      }