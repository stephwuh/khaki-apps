const express = require('express');
const app = express();
const cors = require('cors');
const ctrl = require('./controller.js')

app.use(cors());
app.use(express.json());

app.get('/api/getApps', ctrl.getApps);
app.put('/api/updateJobApp/:id', ctrl.updateJobApp);
app.post('/api/addJobApp/', ctrl.addJobApp);
app.delete('/api/deleteJobApp/:id', ctrl.deleteJobApp);


const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });