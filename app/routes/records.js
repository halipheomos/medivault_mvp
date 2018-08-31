export default function (app, db) {
  app.post('/records', (req, res) => {
    const record = { text: req.body.body, title: req.body.title }
    db.collection('records').insert(record, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' }) 
      } else {
        res.send(result.ops[0])
      }
    })
  })
};
