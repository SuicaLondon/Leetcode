class Calculator {
    result: number
    constructor(value: number) {
        this.result = value
    }

    add(value: number): Calculator {
        this.result += value
        return this
    }

    subtract(value: number): Calculator {
        this.result -= value
        return this
    }

    multiply(value: number): Calculator {
        this.result *= value
        return this
    }

    divide(value: number): Calculator {
        if (value == 0) throw "Division by zero is not allowed"
        this.result /= value
        return this
    }

    power(value: number): Calculator {
        if (value == 0) {
            this.result = 1
        } else if (value > 0) {
            let originalResult = this.result
            for (let i = 1; i < value; i++) {
                this.result *= originalResult
            }
        } else {
            let originalResult = this.result
            for (let i = 0; i >= value; i--) {
                this.result /= originalResult
            }
        }
        return this
    }

    getResult(): number {
        return this.result
    }
}

const calculator = new Calculator(10)
console.log(calculator.add(5).subtract(7).getResult())

const calculator1 = new Calculator(2)
console.log(calculator1.multiply(5).power(2).getResult())

const calculator2 = new Calculator(-1)
console.log(calculator2.power(3).getResult())

const calculator3 = new Calculator(2)
console.log(calculator3.power(1).power(-3).getResult())