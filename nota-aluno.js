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
       
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if (n1 == "casa") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    alert("são iguais");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                } else                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         alert("são diferentes"); */

         var aluno = prompt("digite seu nome")


         var nota1 = parseFloat(prompt("digite sua primeira nota "))
         var nota2 = parseFloat(prompt("digite sua segunda nota "))
         var nota3 = parseFloat(prompt("digite sua terceira nota "))
         var nota4 = parseFloat(prompt("digite sua quarta nota "))

         var notas = (nota1 + nota2 + nota3 + nota4) / 4

         if (notas >= 6) {
             alert("você foi aprovado:" + aluno + " com nota: " + notas)

         } else if (notas < 6 && notas >= 5) {

             alert("você vai para a recuperação" + aluno + " com nota: " + notas)
         } else {

             alert("você foi reprovado:" + aluno + " como nota: " + notas)
         }
         
         </script>
         </body>

</html>
