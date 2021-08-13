// let userNumber1 = Number(process.argv[2])
// let userNumber2 = Number(process.argv[3])

const operacoes = (num1: number, num2: number):void => {
    console.log( num1 + num2)
    console.log( num1 - num2)
    console.log( num1 * num2)
    if (num1 > num2) {
        console.log(num1)
    } else if (num1 === num2) {
        console.log(`São iguais`)
    } else
        console.log(num2)
}

operacoes(1, 2)