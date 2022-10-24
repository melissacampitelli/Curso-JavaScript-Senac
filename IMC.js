<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
    var nome = prompt("digite seu nome ")
          var peso = parseFloat(prompt("digite seu peso"))
          var altura = parseFloat(prompt("digite sua altura"))

          var IMC = peso / (altura * 2);
          if (IMC < 18.5) {
              alert(nome + "seu estado é de magreza", +"seu IMC é de:", +IMC);
          } else if (IMC > 19 && IMC <= 24.9) {
              alert(nome + " você está saudável", +"seu IMC é de:", +IMC);
          } else if (IMC >= 25.0 && IMC <= 29.9) {
              alert(nome + "você está sobrepeso", +"seu IMC é de:", +IMC);
          } else if (IMC >= 30.0 && IMC <= 34.9) {
              alert(nome + " você está com obesidade grau I", +"seu IMC é de:", +IMC);
          } else if (IMC >= 35.0 && IMC <= 39.9) {
              alert(nome + " você está com obesidade grau II severa", +" seu IMC é de:", +IMC);
          } else if (IMC >= 40.0) {
              alert(nome + " você está com obesidade Grau III morbida", +"seu IMC é de:", +IMC);
          } 
          
          </script>
          </body>

</html>
          
          
          
          
          
          
          
          
