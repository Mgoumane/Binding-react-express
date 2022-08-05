const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Serveur launched on port ${port}`);
});

const students = [];

// ROUTES :
app.get('/', (req, res)=>{
    res.send('hello world');
})

app.get('/students', (req, res)=>{
    res.send(students);
})
app.post('/students', (req, res)=>{
    students.push(req.body);
    console.log(students);
    res.send('Etudiant ajouté')
})
