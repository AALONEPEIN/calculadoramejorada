
        // Funciones de JavaScript para la calculadora
        function addToDisplay(value) {
            document.getElementById("display").value += value; 
            // esta funcion toma el valor del elemento text referenciado por display y el parametro .value+=value toma el valor en value en display y le agrega el nuevo

       }
      function addToDisplay(value) {
        var display = document.getElementById("display");
        if (value == "C") {
          display.value = "";
        } else if (value == "D") {
          display.value = display.value.slice(0, -1);
        } else {
          display.value = display.value + value;
        }
      }
        function clearDisplay() {
            document.getElementById("display").value = "";
        }// toma el valor en pantalla de referencia display y le sustitulle elvalor con nada

        function calculate() {
            let displayValue = document.getElementById("display").value;
            let result = eval(displayValue);
            document.getElementById("display").value = result;
// se declara la variable displayvalue y sele asigna el valor en el display actual 
// result se declara  y se usa la funcion eval que sirve para evaluar texto y obtener operaciones matematicas y resultado
//retorna elvalor sustitullendo en pantalla el valorde la variable result
        }
        function changeColor() {
            var calculator = document.querySelector('.calculator');
            if (calculator.style.backgroundColor === 'black') {
              calculator.style.backgroundColor = 'white';
            } else {
              calculator.style.backgroundColor = 'black';
            }
          }
    //CAMBIAR TEMA DE COLOR DE LA CALCULADORA//

    function clearLastCharacter() {
        let displayValue = document.getElementById("display").value;
        let newValue = displayValue.substring(0, displayValue.length - 1);
        document.getElementById("display").value = newValue;
      }

      // BORRAR ULTIMO ELEMENTO DEL DISPLAY CALCULADORA
     
          