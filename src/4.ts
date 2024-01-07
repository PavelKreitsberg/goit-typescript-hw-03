class Key {
    private signature: number
    constructor() { 
        this.signature = Math.round(Math.random()*1000000)
    }
    
    getSignature(): number {
        return this.signature;
    }
}

class Person {
    private key: Key;

    constructor(key: Key) {
        this.key = key;
    }

    getKey(): Key {
        return this.key
    }
}

abstract class House {
    protected door: boolean = false;
    protected key: Key;
    protected tenants: Person[] = [];

    comeIn(person: Person): void {
        if (this.door) {
    this.tenants.push(person)
        }
        else {
            console.log("Go away!");
            
        }
    }
    abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    constructor(key: Key) {
        super();
        this.key = key;
    }

    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
        } else {
            console.log("This key is wrong");
            
        }
}
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};