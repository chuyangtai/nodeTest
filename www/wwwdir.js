var fs=require('fs');
var http=require('http');
var server=http.createServer();

var wwwDir='D:/BaiduNetdiskDownload';

//1.在服务端也可以使用模板引擎
//2.服务端可以读取模板引擎进行替换
//3.服务端可以读取目录
server.on("request",function (req,res) {
    res.setHeader('Content-type','text/html;charset=utf-8')
    fs.readFile('./template.html',function(err,data){
        if(err){
            res.end('模板记载失败')
        }
        data=data.toString();

        fs.readdir(wwwDir,function(err,files){
            var content='目录';
            if(err){
                return res.end('目录加载失败');
            }
            files.forEach(function(item){
                content +=`
                <tr>
                    <td><a href="">${item}</a></td>
                </tr>
                `
            });
            console.log(content)
            data=data.replace('{resData}',content);//字符串替换template的特殊标记
            //console.log(data);
            res.end(data)
        })
    })
});

server.listen(300,function(){
    console.log('running...')
})