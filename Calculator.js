class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();

    }

    formatDisplayNumber(number) {
        const stringNumber = number.toString();

        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];

        let integerDisplay;

        if (isNaN(integerDigits)) {
            intergerDisplay = '';
        } else {
            intergerDisplay = integerDigits.toLocaleString("en", {
                maximumFractionDigits: 0,
            });
        }

        if (decimalDigits = /= null) {/)
            return `${integerDisplay}.${decimalDigits}`;
    }
}
