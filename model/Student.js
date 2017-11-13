var Person = require('./Person');

module.exports = {
    Student:function (name,age) {
        Person.call(this,name,age);
        this.sayHello = function (response) {
            response.write(name + "说hello<br/>")
        }
    }
}