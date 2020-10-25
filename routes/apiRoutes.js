const projects = require("../data/projects");

module.exports = function(app) {

    // api get requests
    app.get("/api/projects", (req, res) => {
        res.json(projects);
    });

    // api post requests
    app.post("/api/projects", (req, res) => {
        
        const projectData = req.body;
        
        console.log(res.json);
        console.log(projectData);
    });

}