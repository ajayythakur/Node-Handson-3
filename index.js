const server=require("express");

const app=server();


const middleWare=(req,res,next)=>{
    console.log("Middleware 1")
    next();
}

const middleWare2=(req,res,next)=>{
    console.log("Middleware 2")
    next();
}

app.use(middleWare)//Point to remember--This middleWare is applicable to all the routes.

app.get("/",(req,res)=>{
    res.send("HomePage");
    res.end();
});

app.get("/second-page",middleWare2,(req,res)=>{//This middleWare2 is applicable to only second-page route and the previous middleWare is also applicable here.
    res.send("Second Page");
    res.end();
});

app.get("/third-page",middleWare2,(req,res)=>{//This middleWare2 is applicable to only third-page route and the previous middleWare is also applicable here.
    res.send("Third Page");
    res.end();

});

app.listen(8080);