function placa_carro(){
    var placa = prompt("Digite a placa completa do seu carro.", "Exemplo(NNN-0000)");
    console.log(placa_carro);
  
    if (placa.length < 8 || placa.length > 8) {
      alert(
        "Digite os números \n Exemplo : NNN-7516"
      );
    } else {
      var circular = placa.substring(7, 8);
  
      if (circular == 1 || circular == 2)
        alert("Você não pode circular as Segundas-Feiras");
  
      if (circular == 3 || circular == 4) alert("Você não pode circular as Terças-Feiras");
      if (circular == 5 || circular == 6)
        alert("Você não pode circular as Quartas-Feiras");
      if (circular == 7 || circular == 8)
        alert("Você não pode circular as Quintas-Feiras");
      if (circular == 9 || circular == 0) 
      alert("Você não pode circular as Sexta-Feiras");
    }
  }
