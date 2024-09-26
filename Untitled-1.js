function confirmarAcao() {

    if (confirm("Tem certeza?")) {

      alert("Ação confirmada!");

    } else {

      alert("Ação cancelada!");

    }

  }

  function turnOnLight() {
    document.getElementById('myImage').src = "slaclaro.jpg";
    document.getElementById('status').textContent = 'Light is on';
}

function turnOffLight() {
    document.getElementById('myImage').src = "slaescuro.jpg";
    document.getElementById('status').textContent = "Light is off";
}
