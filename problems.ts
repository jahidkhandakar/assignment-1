function formatString(input: string, toUpper?: boolean): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}

console.log(formatString("hello"));
console.log(formatString("hello", true));
console.log(formatString("hello", false));
console.log(formatString("WORLD"));
console.log(formatString("WORLD", true));
console.log(formatString("WORLD", false));



function filterByRating(items: { title: string; rating: number }[]): 
                        { title: string; rating: number }[] {

    const result: { title: string; rating: number }[] = [];

    for (const item of items) {
        if (item.rating > 4) {
            result.push(item);
        }
    }

    return result;
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];

console.log(filterByRating(books));



function concatenateArrays<T>(...arrays: T[][]): T[] {

    return arrays.flat();
}

console.log(concatenateArrays([1, 2], [3, 4], [5]));


class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }
    getInfo() : string {
        return `Make: ${this.make}, Year: ${this.year}`;
    }

}
class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }
    getModel() : string {
        return `Model: ${this.model}`;
    }
}

const myCar = new Car("Toyota", 2020, "Corolla");

console.log(myCar.getInfo());
console.log(myCar.getModel());


function processValue(value: string | number): number {
    if( typeof value === "string"){
        return value.length;
    }else{
        return value * 2;
    }
}

console.log(processValue("hello"));
console.log(processValue(10));



interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;

    let mostExpensive = products[0]!;

    for (const product of products) {
        if (product.price > mostExpensive.price) {
            mostExpensive = product;
        }
    }
    return mostExpensive;
}

const productsArray = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 }
];

console.log(getMostExpensiveProduct(productsArray));



enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(dayname: Day): string {
    switch (dayname) {
        case Day.Monday:
        case Day.Tuesday:
        case Day.Wednesday:
        case Day.Thursday:
        case Day.Friday:
            return "Weekday";
        case Day.Saturday:
        case Day.Sunday:
            return "Weekend";
    }
}

console.log(getDayType(Day.Monday));   
console.log(getDayType(Day.Sunday));   



async function squareAsync(n: number): Promise<number> {
    let result =  new Promise((resolve, reject) => {
        if (n < 0) {
            reject("Error: Negative numbers are not allowed");
        } else {
            setTimeout(() => resolve(n * n), 1000);
        }
    });

    return result as Promise<number>;
}

console.log(squareAsync(4).then(console.log));      
console.log(squareAsync(-3).catch(console.error)); 