let jobApps = require("./db.json");

globalId = 2;

module.exports = {
  getApps: (_req, res) => {
    res.send(jobApps);
  },

  updateJobApp: (req, res) => {
    const jobAppId = parseInt(req.params.id);

    for (let i = 0; i < jobApps.length; i++) {
      if (jobApps[i].id === jobAppId) {
        jobApps.splice(i, 1, req.body);
      }
    }

    res.send("update successfull");
  },

  addJobApp: (req, res) => {
    let newJobApp = req.body;

    newJobApp.id = globalId;

    jobApps.push(newJobApp);

    globalId++;

    res.send("Job App added successfully");
  },

  deleteJobApp: (req, res) => {
    const jobAppId = parseInt(req.params.id);

    for (let i = 0; i < jobApps.length; i++) {
      if (jobApps[i].id === jobAppId) {
        jobApps.splice(i, 1);
      }
    }

    res.send("Job App deleted successfully");
  },
};
