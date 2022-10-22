const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join('client', 'dist')));

app.get('/hello',(req, res)=>{
  
  return res.json({
    message : "Hello World",
    skills : 
    {
      languages :[C, Cpp, Java, Javascript, Python],
      databases :[MySql, MongoDB]
    }
  })

})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
