const express = require("express");
const app = express();



const tasks = [
    {name: "Помыть посуду", done: false, },
    {name: "Убраться в комнате", done: true },
    {name: "Выгулять собаку", done: true },
    {name: "Подстричь кота", done: false }
]

app.get("/tasks", function(request, response){


    response.send(tasks);
});


app.get("/", function(request, response){


    response.send("<h2>Привет!</h2>");
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, err => {
    if(err) throw err;
    console.log("%c Server running", "color: green");
});
