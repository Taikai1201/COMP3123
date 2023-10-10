const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs'); 

const dataPath = 'user.json';

app.use(express.json());

// path to home.html

router.get('/home', (req, res) => {
  fs.readFile('home.html', 'utf8', (error, data) => {
    res.send(data)
  })
});

// path to profile

router.get('/profile', (req, res) => {

  fs.readFile(dataPath, 'utf8', (error, data) => {
 
    const userData = JSON.parse(data);
    res.json(userData);
  });
});

// path to login, with username and password authentication

router.get('/login', (req, res) => {
  const { username, password } = req.query;

  fs.readFile(dataPath, 'utf8', (error, data) => {
 
    const loginData = JSON.parse(data);

    if (loginData.username === username && loginData.password === password) {
      res.json({ 
        status: true, 
        message: 'User is valid' 
      });
    } else if (loginData.username !== username) {
      res.json({ 
        status: false, 
        message: 'Username is invalid' 
      });
    } else {
      res.json({ 
        status: false, 
        message: 'Password is invalid' 
      });
    }
  });
});

// logout info

router.get('/logout/:username', (req, res) => {
  const { username } = req.params;
  res.send(`<b>${username} successfully logged out.</b>`);
});

app.use('/', router);

app.listen(process.env.PORT || 8081, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 8081));
});
