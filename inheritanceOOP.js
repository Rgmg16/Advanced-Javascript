class Enemy {
    constructor(power) {
        this.power = power
    }

    attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
}


// class Alien extends Enemy {
//     constructor (name, phrase, power) {
//         super(power)
//         this.name = name
//         this.phrase = phrase
//         this.species = "alien"
//     }
//     fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
//     sayPhrase = () => console.log(this.phrase)
// }

// const alien1 = new Alien("Ali", "I'm Ali the alien!", 10)
// const alien2 = new Alien("Lien", "Run for your lives!", 15)

// alien1.attack() // output: I'm attacking with a power of 10!
// console.log(alien2.power) // output: 15

// Overriding in OOPs

class Alien extends Enemy {
    constructor (name, phrase, power, speed) {
        super(name, phrase, power, speed)
        this.species = "alien"
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    attack = () => console.log("Now I'm doing a different thing, HA!") // Override the parent method.
}

const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50)
alien1.attack() // output: "Now I'm doing a different thing, HA!"
