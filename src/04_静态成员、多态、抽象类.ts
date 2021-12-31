(() => {
    // 1.静态成员，经过static修饰的属性、方法，只能通过类本身访问
    class Person {
        name: string
        age: number
        static skill: string
        constructor(name: string, age: number) {
            this.name = name
            this.age = age
            // 报错，静态属性只能通过类本身访问
            // this.skill = skill
        }
        eat() {
            console.log('我是实例方法');
        }
        static run() {
            console.log('我是静态方法');
        }
    }
    const person = new Person('巴黎', 15)
    Person.skill = '静态skill'
    Person.run()
    console.log(Person.skill);
    console.log(person);
    // 报错，静态属性只能通过类本身访问
    // person.run()
    person.eat()


    // 2.多态：父类型的引用指向子类型实例对象，不同子类型实例对象针对相同的方法，实现不同的功能
    class Animal {
        name: string
        color: string
        constructor(name: string, color: string) {
            this.name = name
            this.color = color
        }
        eat() {
            console.log('相同父类方法，子类有不同的实现');
        }
    }
    class Pig extends Animal {
        constructor(name: string, color: string) {
            super(name, color)
        }
        eat() {
            console.log('我喜欢吃白菜');
        }
    }
    class Cat extends Animal {
        constructor(name: string, color: string) {
            super(name, color)
        }
        eat() {
            console.log('我喜欢吃秋刀鱼');
        }
    }
    const animal: Animal = new Animal('动物', '七彩斑斓')
    // 父类型引用指向子类的实例，子类对象针对相同方法，实现不同功能
    const pig: Animal = new Pig('小猪', '粉色')
    const cat: Animal = new Cat('小猫', '橘黄')
    animal.eat()
    pig.eat()
    cat.eat()


    // 3.抽象类，它是提供其他类继承的基类，不能直接被实例化；
    // 抽象类的方法不包含具体实现，且必须通过派生类（子类）实现
    // 通过abstract定义
    abstract class Car {
        brand: string
        constructor(brand: string) {
            this.brand = brand
        }
        // 抽象方法在抽象类中，不能有具体实现，通过派生类实现
        abstract ablitity():void
        // 静态方法
        static run() {
            console.log('我跑了1000米');
        }
    }
    class Benz extends Car {
        constructor(brand: string) {
            super(brand)
        }
        ablitity() {
            console.log('自动上车');
        }
    }
    class MazDa extends Car {
        ablitity() {
            console.log('总是迟到');
        }
    }
    // 报错，抽象类不能被直接实例化
    // const car = new Car()
    Car.run()
    const benz = new Benz('奔驰')
    const mazda = new MazDa('马自达')
    // 派生类，实现抽象类的抽象方法
    benz.ablitity()
    mazda.ablitity()
    console.log(mazda.brand);
})()
