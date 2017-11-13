// function fun2(reponse) {
//     reponse.write('this is fun2<br/>');
//     console.log('fun2');
// }
//
// module.exports = fun2;

module.exports = {
    fun2:function (response) {
        response.write("this is fun2<br/>");
        console.log('this is fun2');
    },
    fun3:function (response) {
        response.write('this is fun3<br/>');
        console.log('this is fun3');
    }
}