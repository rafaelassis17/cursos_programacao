let vel = 60;
console.log(`A velocidade do seu carro é ${vel} km/h`);
if (vel > 60) {
  console.log(`Infelimente você ultrapassou a velocidade permitida. MULTADO!`);
} else if (vel < 60) {
  console.log(`Parabéns, você está dentro do limite de velocidade!`);
} else if (vel == 60) {
  console.log(`Você está exatamente no limite de velocidade!`);
} else {
  console.log(`Velocidade inválida!`);
}
console.log(`Dirija sempre usando cinto de segurança!`);
