$(function() {

    // Purpose: Grab data for all projects
    function getProjectData() {
        let response; 

        $.ajax({
            url: '/api/projects',
            method: 'GET'
        }).then(function(response) {
            for (let i = 0; i < response.length; i++) {
                     
                $('#projects').empty();
                response.forEach(project => {
                    $('#projects').append(`
                        <div class="card">
                            <img src="${project.image}" class="card-img-top" alt="A screenshot of the ${project.title} app" width="100%" style="width:100%; height:30vh;">
                            <div class="card-body">
                                <h5 class="card-title">${project.title}</h5>
                                <p class="small">${project.technology.join(", ")}</p>
                                <p class="card-text">${project.description}</p>
                                <a href="${project.website}" target="_blank" class="btn btn-secondary">Visit Site</a>
                                <a href="${project.github}" target="_blank" class="btn btn-secondary">View Source</a>
                            </div>
                        </div>
                    `); 
                });
            }; 
        });
    }

    getProjectData();

});
