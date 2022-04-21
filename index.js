const express = require('express');
var cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello from my my my sdgsdgsdgag Smarty dress');
})

const users = [
    { id: 1, name: 'Karim', email: 'muna@gmail.com', age: 27 },
    { id: 2, name: 'Rahim', email: 'tuna@gmail.com', age: 31 },
    { id: 3, name: 'Raja', email: 'munna@gmail.com', age: 33 },
    { id: 4, name: 'Rakib', email: 'luna@gmail.com', age: 34 },
]
// filter by search query parameter
app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else {
        res.send(users);
    }
});

app.get('/user/id', (req, res) => {
    console.log(req.params)
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(req.params);
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})



app.listen(port, () => {
    console.log('Listening to port', port);
})

