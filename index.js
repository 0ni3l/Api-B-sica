const express = require ('express');
const app = express ();
const port = 3000;

app.use (express.json());

app.listen(port, () => {
    console.log(`API listening at <http://localhost: ${port}`);
})


app.get('/', (req, res) => {
    res.send('Bienvenido a mi API!');
  });

  
  let users = [
    { id: 1, name: 'Oniel Rosario', motor: 'CG200 Standard'},
    { id: 2, name: 'Oliver Garcia', motor: 'Loncin runer 125',},
    { id: 3, name: 'Kervin Cruz', motor: 'CG 125',}
  ];
  


  app.get('/users', (req, res) => {
    res.json(users);
  });

  
  app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  });
  