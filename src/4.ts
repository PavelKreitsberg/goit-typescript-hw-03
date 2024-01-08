class Key {
    private signature: number = Math.round(Math.random() * 1000000);
    
    getSignature(): number {
        return this.signature;
    }
}

class Person {

    constructor(private key: Key) {}

    getKey(): Key {
        return this.key
    }
}

abstract class House {
    protected door: boolean = false;
    protected tenants: Person[] = [];

    constructor(protected key: Key) {}

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