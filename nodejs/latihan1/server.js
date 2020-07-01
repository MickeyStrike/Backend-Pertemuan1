const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/:umur', (req, res) => {
  // res.send('Nama Saya ' + req.params.name);
  const {umur} = req.params;
  res.send(`Nama Saya ${umur}`);
});

app.post('/', (req, res) => {
  // req.body.
  const {password} = req.body;
  // console.log(username);
  // res.send(username);
  // const data = {
  //   nama: 'irfan',
  //   umur: 20
  // }
  //jika passwordnya = inipasswordsaya, maka return password benar
  if (password === 'inipasswordsaya') {
    res.send('password benar') //jika true
  } else {
    res.send('password salah') //jika false
  }
  //jika passwordnya kurang dari 6 karakter respon password kurang





  res.status(200).json(data);
});


app.listen(PORT, () => console.log(`Server bejalan di port ${PORT}`));