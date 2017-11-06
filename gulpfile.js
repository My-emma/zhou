var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    webserver = require('gulp-webserver'),
    url = require('url'),
    fs = require('fs');
gulp.task('webserver', function(){
    gulp.src('.').pipe(webserver({
        port:8080,
        host:'localhost',
        middleware:function(req, res, next){
            var obj = url.parse(req.url);
            if(obj.pathname === '/'){
                res.end(fs.readFileSync('./index.html'));
            } else if(obj.pathname === '/getData'){
                res.end(JSON.stringify(json));
            } else{
                next();
            }
        }
    }))
})

var json = [
    {
        "code":1,
        "data":[
            {"img":"http://localhost:8080/img/nav.png","span":"换轮胎","spanl":"换轮胎"},
            {"img":"http://localhost:8080/img/nav.png","span":"做保养","spanl":"精确匹配"},
            {"img":"http://localhost:8080/img/nav.png","span":"洗车","spanl":"优化服务"},
            {"img":"http://localhost:8080/img/nav.png","span":"领红包","spanl":"免费天天送"}
        ]
    },
    {
        "code":2,
        "data":[
            {"img":"http://localhost:8080/img/nav.png","span":"自助小保养"},
            {"img":"http://localhost:8080/img/nav.png","span":"自助小保养"},
            {"img":"http://localhost:8080/img/nav.png","span":"自助小保养"},
            {"img":"http://localhost:8080/img/nav.png","span":"自助小保养"},
            {"img":"http://localhost:8080/img/nav.png","span":"自助小保养"},
            {"img":"http://localhost:8080/img/log.png"},
            {"img":"http://localhost:8080/img/nav.png","span":"自助小保养"},
            {"img":"http://localhost:8080/img/nav.png","span":"自助小保养"},
            {"img":"http://localhost:8080/img/nav.png","span":"自助小保养"},
            {"img":"http://localhost:8080/img/nav.png","span":"自助小保养"},
            {"img":"http://localhost:8080/img/nav.png","span":"自助小保养"},
        ]
    }
]