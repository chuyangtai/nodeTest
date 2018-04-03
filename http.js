//创建服务器
var http=require('http');
var server=http.createServer();
server.listen(3000,function () {
    console.log("服务器已在3000端口启动")
});
//监听请求
server.on("request",function (request,response) {
    console.log(request.url);
    response.write('111');
    response.end();
});

