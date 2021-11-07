function circleArea(radius) {
    return (radius * radius * Math.PI);
}
let res = circleArea(2);
var rounded_res = Math.round((res + Number.EPSILON) * 100) / 100;
console.log(res);
console.log(rounded_res);
