function Person(name,age) {
    this.name = name;
    this.age = age;
    this.doSomething = function (response) {
        response.write(name + "正在踢球！<br/>");
    }
}

module.exports = Person;