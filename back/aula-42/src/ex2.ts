//a) As entradas e saídas são, respectivamente,
//(numeros , num) e (numerosOrdenados, estatisticas)

//b)
function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: {maior: number, menor: number, media: number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

//c)
type amostra = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => number
}