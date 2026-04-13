let agora =new Date()

var hora = agora.getHours();

if (hora <12){
    console.log('Bom dia')
}else if (hora>12 && hora <17){
    console.log("Boa tarde")
}else if(hora >17 && hora <12){
    console.log('Boa noite')
}