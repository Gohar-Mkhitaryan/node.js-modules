module.exports = class Circle {
    constructor(radius){
        this.radius = radius;
    }

    area(){
        return this.radius ** 2 * Math.PI;
    }
};
