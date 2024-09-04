const express = require('express');
const app = express();


const cors = require('cors');
app.use(cors());
app.use(express.json ());


const db = require("./models");

const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);


const faviewsRouter = require('./routes/Faview');
app.use('/fatable', faviewsRouter);


const fatablesRouter = require("./routes/Fatable");
const { validateToken } = require('./middlewares/AuthMiddleware');
app.use('/faentry' , validateToken, fatablesRouter);

db.sequelize.sync().then(()=>{
    app.listen(3001, ()=> {
        console.log('Hello from the other side !!! ');
    });
});
