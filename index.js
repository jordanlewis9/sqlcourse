const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'join_us'
});

connection.connect((err) => {
  if (err) {
    return console.error(`Error: ${err.message}`)
  };
  console.log('Connected to MySQL!')
});

app.get('/', function(req, res) {
  // Find count of users in DB
  const totalUsers = "SELECT COUNT(*) AS count FROM users";
  connection.query(totalUsers, function(err, results){
    if (err) throw err;
    const count = results[0].count;
    res.render('home', {data: count})
  })
});

app.post('/register', function(req, res){
  const email = req.body.email;
  const newUser = `INSERT INTO users (email) VALUES ('${email}')`;
  connection.query(newUser, function(err, results){
    if (err) throw err;
    res.redirect('/');
  })
})

app.get('/joke', function(req, res) {
  const joke = "What do you call a dog that does magic tricks? A labracadabrador."
  res.render('joke');
});

app.get('/random_num', (req, res) => {
  const num = Math.floor((Math.random() * 100) + 1);
  res.send(`Your lucky number is ${num}`)
})

app.listen(3000, function(){
  console.log('Server running on port 3000!')
})

// const firstquery = 'SELECT COUNT(*) AS total FROM users'

// connection.query(firstquery, function(error, results, fields) {
//   if (error) throw error;
//   console.log(results[0].total);
// });

// INSERTING DATA
// const q = `INSERT INTO users (email) VALUES ('rusty_the_dog@gmail.com')`;

// connection.query(q, function(error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// })

// INSERTING DATA TAKE 2 -- preferable method!
// const person = { email: faker.internet.email(), created_at: faker.date.past() };

// const insert = connection.query('INSERT INTO users SET ?', person, function(err, result) {
//   if(err) throw err;
//   console.log(result);
// });

// console.log(insert.sql);

// INSERTING LOTS OF DATA
// let data = [];
// for ( let i = 0; i < 500; i++) {
//   data.push([faker.internet.email(), faker.date.past()]);
// }
// const q = 'INSERT INTO users (email, created_at) VALUES ?';
// connection.query(q, [data], function(err, result) {
//   if (err) throw err;
//   console.log(result);
// });

// connection.end();