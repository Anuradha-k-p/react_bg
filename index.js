const express=require('express');

const app = express();

const {routes} = require('./route');

const cors = require('cors');

app.use(cors({
    origin:"*"
}))

app.use('/api',routes)

app.listen(5050,()=>{
    console.log("server started....")
})