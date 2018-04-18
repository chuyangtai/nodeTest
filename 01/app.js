//服务器代码

var http=require('http');
var server=http.createServer();
server.listen(3000,function () {
    console.log("服务器已在3000端口启动")
});


