// 1.类的定义
class Person {
    // 默认 public 修饰
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    // 实例方法
    sayHi() {
        console.log(`${this.name},世家`);
    }
}
const person = new Person('巴黎', 18)
person.sayHi()

// 2.类的继承
class Animal {
    name: string
    skill: string
    constructor(name: string, skill: string) {
        this.name = name
        this.skill = skill
    }
    eat() {
        console.log(`我喜欢${this.skill}`)
    }
    run() {
        console.log(`${this.name},跑步`);
    }
}
class Pig extends Animal {
    // 子类自身属性
    color: string
    constructor(name: string, skill: string, color: string) {
        // 继承父类属性
        super(name, skill)
        this.color = color
    }
    // 子类自身方法
    jump() {
        console.log(`${this.name},跳起来了`);
    }
    eat() {
        console.log(`我喜欢${this.skill}--子类自身方法`);
    }
}
const pig = new Pig('小猪', '吃东西', '粉色')
pig.run() //继承父类方法
pig.jump()
pig.eat()


// 3.类修饰符
/**
 *   public 公共的 ，类成员默认的修饰符，类及其子类、实例对象都可以访问该成员
 *   protected 保护的 ，类成员经过修饰后，类及其子类可以访问该成员，实例对象不可以访问
 *   private 私人的 ， 类成员经过修饰后，只有当前类可以访问，其子类、实例对象都不可以访问
 */

class Car {
    public brand: string
    private price: number
    protected msg: string
    constructor(brand: string, price: number, msg: string) {
        this.brand = brand
        this.price = price
    }
    ability() {
        console.log(`${this.brand},可以劈弯`);
    }
    showPrice() {
        console.log('4s店才有定价权', this.price);
    }
    think() {
        console.log('4s店认为你是', this.msg);
    }
}
class Benz extends Car {
    constructor(brand: string, price: number, msg: string) {
        super(brand, price, msg)
    }
    power() {
        console.log(`${this.brand},拥有自动上车功能`);
    }
    // 父类的成员price , 进过private修饰，子类，实例对象都不可以访问
    customPrice() {
        console.log('车主没资格定价', this.price);
    }
    // 父类的成员msg， 经过protected修饰，子类可以访问，实例对象不可以
    thinkSelf() {
        console.log('过了一段时间，你是认为自己是', this.msg);

    }
}
class Mazda extends Car {
    constructor(brand: string, price: number, msg: string) {
        super(brand, price, msg)
    }
    power() {
        console.log(`${this.brand},总是迟到`);
    }
}
class Bmw extends Car {
    constructor(brand: string, price: number, msg: string) {
        super(brand, price, msg)
    }
    power() {
        console.log(`${this.brand},赛道王`);
    }
}
const benz = new Benz('奔驰', 40, '水鱼')
// 类的成员price，经过private修饰后，不能被子类、实例对象访问
console.log(benz.price);
// 类的成员msg， 经过protected修饰，子类可以访问，实例对象不可以
console.log(benz.msg);
benz.ability()
benz.customPrice()
benz.thinkSelf()
const mazda = new Mazda('马自达', 3, '水鱼')
const bmw = new Bmw('宝马', 38, '水鱼')