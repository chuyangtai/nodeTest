//服务器代码

var http=require('http');
var server=http.createServer();
var fs=require('fs');
server.listen(3000,function () {
    console.log("服务器已在3000端口启动")
});
//监听请求
server.on("request",function (req,res) {
    res.setHeader('Content-type','text/html;charset=utf-8');
    var url=req.url;
    console.log(url)
    if(url=='/'){
        fs.readFile('./public/views/index.html',function(err,data){
            if(err){
                return res.end('404 Not Found');
            }
            data=data.toString();
            //console.log(data)
            res.end(data)
        })
    }else{
        fs.readFile('./public/views/404.html',function(err,data){
            if(err){
                return res.end('404 Not Found');
            }
            data=data.toString();
            res.end(data)
        })
    }
});

