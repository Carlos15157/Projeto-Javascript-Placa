function detran() {
    var placa = prompt("Digite a placa completa do seu carro.", "Exemplo (NNN-0000)");
    console.log(detran);
  
    placa = placa.toUpperCase();
  
    if (placa.length < 8 || placa.length > 8) {
      alert(
        "Digite os números\n Exemplo : NNN-7516"
      );
    } else {
      var rodizio = placa.substring(7, 8);
  
      switch (rodizio) {
        case "1":
        case "2":
          rodizio = "segundas";
          break;
  
        case "3":
        case "4":
          rodizio = "terças";
          break;
  
        case "5":
        case "6":
          rodizio = "quartas";
          break;
  
        case "7":
        case "8":
          rodizio = "quintas";
          break;
  
        case "9":
        case "0":
          rodizio =  "sextas";
          break;
  
        default:
          rodizio = "inexistente";
          break;
      }
      alert("Este é o dia em que não pode andar: " + rodizio);
    }
  }