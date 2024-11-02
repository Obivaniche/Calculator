class Calculator {
    constructor() {
        // Инициализация
    }

    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            return "А голову ты дома не забыл!?";
        }
        return a / b;
    }
}

// Создаем экземпляр класса
const calc = new Calculator();

// Примеры
console.log(calc.add(5, 3));    // 8
console.log(calc.subtract(10, 4));  // 6
console.log(calc.multiply(7, 6));   // 42
console.log(calc.divide(20, 4));    // 5
console.log(calc.divide(10, 0));    // А голову ты дома не забыл!?