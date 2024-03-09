// Função para simular o estado inicial das lâmpadas
function estadoInicial() {
    return [false, false, false]; // Todas as lâmpadas estão inicialmente apagadas
}

// Função para simular a ação de ligar ou desligar um interruptor
function toggleInterruptor(interruptores, index) {
    interruptores[index] = !interruptores[index]; // Inverte o estado do interruptor (ligado/desligado)
}


function descobrirLampadas() {
    let interruptores = estadoInicial();

    toggleInterruptor(interruptores, 0);

    toggleInterruptor(interruptores, 0); // Desliga o primeiro interruptor
    toggleInterruptor(interruptores, 1); // Liga o segundo interruptor

   
    let resultado = [];
    for (let i = 0; i < interruptores.length; i++) {
        if (interruptores[i]) {
            resultado.push(`O interruptor ${i + 1} controla a lâmpada.`);
        }
    }
    return resultado.join('\n');
}

console.log(descobrirLampadas());
