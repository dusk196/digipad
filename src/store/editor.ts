interface Animal {
    name: string
    makeSound: () => void
}

class Dog implements Animal {
    name: string

    constructor (name: string) {
        this.name = name
    }

    makeSound (): void {
        console.log('Woof!')
    }
}

const myDog: Animal = new Dog('Buddy')
myDog.makeSound() // Outputs: Woof!
