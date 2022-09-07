function Person(name, age) {
    this.name = name
    this.age = age
}

const tina = new Person("tina", 23);

for (const k in tina) {
    console.log(k + ": " + tina[k]);
}