class Polygon {
    constructor (array){
        this.array = array; 
    }
    get countSides(){
        return this.array.length
    }
    get perimeter(){
        let sum = 0
        for (let side of this.array){
            sum += side
        }
        return sum 
    }
}

class Triangle extends Polygon {
    get isValid(){
    //declare an array for the array of sides
        const sides = this.array; 
        if (this.countSides != 3){
            return false; 
    }
    //now that we know the sides variable must be 3 we can declare it in an array [a, b, c] and return only if any two given sides are longer than the third using the && operator
    const [a, b, c] = sides; 
    return (a + b > c) && (a + c > b) && (b + c > a); 
    }
}

class Square extends Polygon {
    get isValid(){ 
        if (this.countSides != 4){
            return false
        }
    const firstSide = this.array[0]; 
        for (let i = 1; i < this.array.length; i++){
        if (this.array[i] != firstSide){
            return false
            }
        }
            return true
    }
    get area(){
        const oneSide = this.array[0]; 
        return oneSide ** 2
    }
}

