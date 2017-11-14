module.exports = {
    login : function (response) {
        response.write('登录成功！');
    },
    loginOut:function (response) {
        response.write('退出成功！');
    }
}