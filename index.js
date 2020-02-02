// Your code here

class Polygon {
  constructor(arr) {
    this.array = arr
  }
  
  get countSides() {
    return this.array.length
  }
  
  get perimeter() {
    return this.array.reduce((acc, value) => acc + value, 0)
  }
}

class Triangle extends Polygon {
  
}