var path=require('path');

//打印文件的扩展名
console.log('ext name : ' + path.extname('http.js')); //ext name : .js



// 规范化错误的路径
console.log('normalization : ' + path.normalize('../test/test1//2slashes/1slash/tab/..'));

// 连接路径
console.log('joint path : ' + path.join('/test', 'test1', 'tab', '..'));

// 转换为绝对路径
console.log('resolve : ' + path.resolve('main.js')); //E:\self\nodeTest\main.js
