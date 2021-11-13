const express = require('express');
const app = express();
const cors = require('cors');
const ctrl = require('./controller.js');
const path = require('path');

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/getApps', ctrl.getApps);
app.put('/api/updateJobApp/:id', ctrl.updateJobApp);
app.post('/api/addJobApp/', ctrl.addJobApp);
app.delete('/api/deleteJobApp/:id', ctrl.deleteJobApp);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+ '/client/build/index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });