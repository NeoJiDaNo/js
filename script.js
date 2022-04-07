class First {
    hello() {
        console.log("Привет я метод родителя!");
    }
}

class Seconds extends First {
    hello() {
        super.hello()
        console.log("А я наследуемый метод!");
    }
}

const second = new Seconds

second.hello()