<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>saudação</title>
</head>

<body>
    <script>
        var datahora, xhora, xdia, dia, mes, ano, saudacao;
        datahora = new Date();
        xhora = datahora.getHours();

        if (xhora >= 0 && xhora < 12) {
            saudacao = "bom dia!!"
        }
        if (xhora >= 12 && xhora < 18) {
            saudacao = "boa tarde!!"
        }
        if (xhora >= 18 && xhora < 23) {
            saudacao = "boa noite!!"
        }
        xdia = datahora.getDay();
        diasem = new Array(7);
        diasem[0] = "Domingo!"
        diasem[1] = "segunda-feira!"
        diasem[2] = "terça-feira!"
        diasem[3] = "quarta-feira!"
        diasem[4] = "quinta-feira!"
        diasem[5] = "sexta-feira!"
        diasem[6] = "sabado!"

        dia = datahora.getDate();
        mes = datahora.getMonth();

        mesAno = new Array(12);

        mesAno[0] = "Janeiro!"
        mesAno[1] = "Fevereiro!"
        mesAno[2] = "Março!"
        mesAno[3] = "Abril!"
        mesAno[4] = "Maio!"
        mesAno[5] = "Junho!"
        mesAno[6] = "Julho!"
        mesAno[7] = "Agosto!"
        mesAno[8] = "Setembro!"
        mesAno[9] = "Outubro!"
        mesAno[10] = "Novembro!"
        mesAno[11] = "Dezembro!"

        ano = datahora.getFullYear();



        document.write(saudacao + " " + diasem[xdia] + ", " + dia + " de " + mesAno[mes] + " de " + ano);
    </script>

</body>

</html>
