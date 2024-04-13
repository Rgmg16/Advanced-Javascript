class mammalia{
    constructor(name,phrase){
        this.name=name;
        this.phrase=phrase;
    }
    communicate = ()=> console.log(this.phrase);
}

class aves{
    constructor(name,phrase){
        this.name=name;
        this.phrase=phrase;
    }
    communicate = ()=> console.log(this.phrase);
}

class reptilia{
    constructor(name,phrase){
        this.name=name;
        this.phrase=phrase;
    }
    communicate = ()=> console.log(this.phrase);
}

class amphibia{
    constructor(name,phrase){
        this.name=name;
        this.phrase=phrase;
    }
    communicate = ()=> console.log(this.phrase);
}

class pisces{
    constructor(name,phrase){
        this.name=name;
        this.phrase=phrase;
    }
    communicate = ()=> console.log(this.phrase);
}

const human = new mammalia("Steve","Hello there");
const lion = new mammalia("Alex","Rrrrrooooaaaarrr!");
const chicken = new aves("Buck","Cock-a-doodle-do!");
const gull = new aves("Gary","cow-cow-cow!");
const crocodile = new reptilia("Craig","Better watch out, I DO bite!");
const alligator = new reptilia("Alastair","What craig said");
const frog = new amphibia("Fred","Despite popular *ribbit* belief, you will not get a *ribbit* prince when you kiss me *ribbit*");
const toad = new amphibia("Terry","I don't understand why people *ribbit* confuse me with Fred. I'm obviously *ribbit* cooler");
const tilapia = new pisces("Tom","Stay hydrated y'all");
const shark = new pisces("Bruce","I'm very friendly, just no blood please...");

console.log(human.phrase);
