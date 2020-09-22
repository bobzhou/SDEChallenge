export interface MovingAverage {
    elements: number[];

    /**
     * addElement add new element to the list of elements and get a new moving average back
     * 
     * @param ele the new number adding to the moving average
     * 
     * @return the new moving average
     */
    addElement(ele: number): number;

    /**
     * getElements return the current list of all the elements
     * 
     * @return list of elements
     */
    getElements(): number[];
}