// 1 - Crie uma classe com abstração.
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} está comendo.`);
  }

  sleep() {
    console.log(`${this.name} está dormindo.`);
  }
}

// 2 - Crie pelo menos duas classes que sejam herdeiras da classe criada anteriormente.
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} está latindo.`);
  }
}

class Cat extends Animal {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }

  meow() {
    console.log(`${this.name} está miando.`);
  }
}

// 3 - Crie pelo menos três instâncias de objetos.
const dog1 = new Dog("Rex", 3, "Labrador");
const cat1 = new Cat("Whiskers", 5, "Gray");
const dog2 = new Dog("Buddy", 2, "Golden Retriever");

// Testando os métodos das instâncias
dog1.eat(); // Saída: "Rex está comendo."
cat1.sleep(); // Saída: "Whiskers está dormindo."
dog2.bark(); // Saída: "Buddy está latindo."
