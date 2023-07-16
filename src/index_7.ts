function mayor(numer1: number, number2: number, number3: number){
    if (numer1 > number2 && numer1 > number3) {
        return numer1;
    }if (number2 > numer1 && number2 > number3) {
        return number2;
    }if (number3 > numer1 && number3 > number2) {
        return number3;
    }
}

console.log(mayor(5,10,3));