function fibonacciContainsNumber(number) {
    let fiboanacciSequence = {0, 1};
    let i = 2;

    while (fiboanacciSequence[ i -1]) <= number){
        fiboanacciSequence[i] = fiboanacciSequence[i - 1] + fiboanacciSequence[i - 2];
        i++; 
    }

    if (fiboanacciSequence.includes(number)) {
        return `${number} pertence a sequência de fibonacci. `;
    } else {
        return `${number} não pertence a sequência de fibonacci. `;
    }
}

    const number = 21;
    console.log(fibonacciContainsNumber(number));