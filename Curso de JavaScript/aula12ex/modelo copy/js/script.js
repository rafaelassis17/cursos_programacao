function carregar() {
  let msg = document.querySelector("#msg");
  let img = document.querySelector("#img");
  let data = new Date();
  let hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora <=12) {
    document.body.style.backgroundColor = '#5EC3F7';
    img.src = "img/manha.jpg";
  } else if (hora >= 12 && hora <18) {
    document.body.style.backgroundColor = '#F26D23';
    img.src = "img/tarde.jpg";
  } else {
    img.src = "img/noite.jpg";
    document.body.style.backgroundColor = '#012359';
  }
}


