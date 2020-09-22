import {MovingAverage} from './moving-average';

class MovingAverageCalc implements MovingAverage {
    elements: number[];
    window: number;

    constructor(window: number) {
        this.elements = [];
        this.window = window;
    }

    /**
     * addElement add new element to the list of elements and get a new moving average back
     * 
     * @param ele the next number adding to the moving average
     */
    addElement(ele: number): number {
        this.elements.push(ele);
        // if number of elements in list is less than the window
        if (this.elements.length <= this.window) {
            return getSum(this.elements) / this.elements.length;
        }

        // if number of elements in list is greater or equal to window
        let subElements = this.elements.slice(-this.window);
        return getSum(subElements) / this.window ;
    }

    /**
     * getElements reutn you the current list of all elements
     * 
     * @return list of all elements added
     */
    getElements(): number[] {
        return this.elements;
    }
}

let calc = new MovingAverageCalc(2);

// 2 / 1 should return 2
console.log([2], "with a window of 2 should provide a moving average of 2:", calc.addElement(2));
// (2 + 4) / 2 should return 3
console.log([2, 4], "with a window of 2 should provide a moving average of 3:", calc.addElement(4));
// (4 + 4) / 2 should return 4
console.log([2, 4, 4], "with a window of 2 should provide a moving average of 4:", calc.addElement(4));
// (4 + 8) / 2 should return 6
console.log([2, 4, 4, 8], "with a window of 2 should provide a moving average of 6:", calc.addElement(8));

/**
 * getSum takes a list of numbers and return you the sum of that list
 * 
 * @param elements list of numbers 
 * 
 * @return sum of all elements 
 */
function getSum(elements: number[]): number {
    return elements.reduce(function(a, b){
        return a + b;
    }, 0);
}