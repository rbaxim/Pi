function calculatePi() {
      const decimalPlaces = document.getElementById('decimalPlaces').value;
      const pi = approximatePi(decimalPlaces);
      document.getElementById('pi').textContent = `Pi: ${pi}`;
    }

    // Leibniz formula for Pi approximation
    function approximatePi(terms) {
      let pi = 0;
      let sign = 1;
      for (let i = 0; i < terms; i++) {
        pi += sign / (2 * i + 1);
        sign = -sign;
      }
      pi *= 4; // Multiplying by 4 to get Pi
      return pi.toFixed(terms); // Limit to the specified decimal places
    }
calculatePi()
document.getElementById("mdpilen").innerHTML = document.getElementById("pi").innerHTML.toString.length;
