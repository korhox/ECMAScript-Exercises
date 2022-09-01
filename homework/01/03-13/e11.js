const cars = [
    "tesla",
    "audi",
    "honda",
    "mercedes"
];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

for (const car of cars) {
    console.log(car);
}