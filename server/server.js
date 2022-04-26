const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
/*************************************************************/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({urlencoded:false}));
/*********************************************************** */
console.log("backend for react : active ");

/*********************************************************** */
const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`node server running on port : ${PORT}`);
});
