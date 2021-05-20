// //TASK 1- Создать объект пользователя интернет магазина

let shopUser = {
    name: 'Egor',
    age: 23,
    email: 'ematylickiy@mts.by',
    number: '375297323472',
};

for (let key in shopUser) {
    let str = `Key: ${key}, Value: ${shopUser[key]}`;
    console.log(str);
}


// //TASK 2 Добавьте метод к объекту который будет выводить в консоль ваше имя

let human = {
    name: 'Egor',
    printName(){
        console.log(this.name)
    }
}
human.printName()



// //TASK 3 Метод getName должен принимать имя, записывать его в this.name и
// // выводить в консоль новое имя Напишите метод, который будет позволять изменять номер телефона
// // объекта Также сделайте и для email

let user = {
    name: 'Egor',
    number: '375297323472',
    email: 'ematylickiy@mts.by',
    
    getName(newName) {
        this.name = newName;
        console.log(this.name);
    },

    setNumber(newNumber) {
        this.number = newNumber;
        console.log(this.number);
    },

    setEmail(newEmail) {
        this.email = newEmail;
        console.log(this.email);
    }
}
// //Создайте объект дерево у которого есть следующие свойства:
// // название,
// // высота,
// // количество листьев,
// // семейство.
// // Необходимо вывести в консоль объект, а затем "укоротить" дерево, и
// // вывести в консоль.

let tree = {
    name: 'oak',
    hight: 1800,
    numberLeave: 2,
    family: 'oak Family',


    shortHight(minus) {
        if (minus < this.hight) {
            this.hight -= minus;
            console.log(this.hight);
        } else {
            console.log('incorrect minus');
        }
    }
}

console.log(tree);
tree.shortHight(1200);
