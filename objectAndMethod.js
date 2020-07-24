var john = {
    firstName : "John",
    birthYear: 1990,
    lastName: "Smith",
    family: ['s','v','f'],
    job: 'teacher',
    isMarried: true,
    calcAge: function(){
        return 2020 - this.birthYear;
    }
}

console.log(john.calcAge());
john.age = john.calcAge()
console.log(john)