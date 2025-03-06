
let resultadoPartida = saldoVitorias(87, 31)
function saldoVitorias(vitoria, derrota) {
    let saldoVitorias = vitoria - derrota
    return saldoVitorias
}

let rankFinal = rank(resultadoPartida)
function rank(resultadoPartida) {
    if (resultadoPartida <= 10) {
        return 'Ferro'
    } else if (resultadoPartida <= 20) {
        return 'Bronze'
    } else if (resultadoPartida <= 50) {
        return 'Prata'
    } else if (resultadoPartida <= 80) {
        return 'Ouro'
    } else if (resultadoPartida <= 90) {
        return 'Diamante'
    } else if (resultadoPartida <= 100) {
        return 'Lendário'
    } else {
        return 'imortal'
    }
}

console.log(`O Herói de saldo de ${resultadoPartida} vitórias está no nível de ${rankFinal}`)