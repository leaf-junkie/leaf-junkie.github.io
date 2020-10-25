$(function() {

    $(".btnSubmit").on("click", function(event) {
        event.preventDefault();
        console.log("hello")
    });

    // Purpose: Grab data for all projects
    function getProjectData(data) {
        $.ajax({
            url: '/api/projects',
            method: 'GET'
        }).then(function(response) {
            for (let i = 0; i < response.length; i++) {
                const image = response[i].image;
                const title = response[i].title;
                const description = response[i].description;
                const website = response[i].website;
                const github = response[i].github;
                const tech = response[i].technology;
                                    
                // Append to project card
                $('#projectCard').append(`
                    <div class="card">
                        <img src="${image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">${description}</p>
                            <a href="${website}" class="btn btn-primary">Site</a>
                            <a href="${github}" class="btn btn-primary">Source</a>
                            <p class="pt-4">${tech}</p>
                        </div>
                    </div>
                `);                                
            };
        });
    }

    // Purpose: Render list of projects
    function renderProjectList(data) {
        // Iterate over portfolio object to get JSON data
        getProjectData(data);
        console.log(data);

        // Append to project list 
        $('#projectList').append(`
            <a href="" class="list-group-item list-group-item-action">${data.title}</a>
        `);

    }

    renderProjectList();
    
    // // Purpose: Render card depending on selected project
    // function createProjectCard() {

    //     // Get selected project

    //     // Iterate over portfolio object to get JSON data
    //     // getProjectData();

    //     // Append to project card
    //     let img = '';
    //     let title = '';
    //     let description = '';
    //     let website = '';
    //     let github = '';
    //     let tech = '';

    //     $('container').append(`
    //         <aside class="w-75">
    //             <div class="card">
    //                 <img src="./images/greenhouse-window.jpeg" class="card-img-top" alt="...">
    //                 <div class="card-body">
    //                     <h5 class="card-title">Google Book Search</h5>
    //                     <p class="card-text">This is a full stack React application that queries the Google Books API when the user searches for books. Users can additionally save books to a database (MongoDB) as well as delete them from the database.</p>
    //                     <a href="https://stark-lowlands-50053.herokuapp.com/" class="btn btn-primary">Site</a>
    //                     <a href="https://github.com/leaf-junkie/google-books-search" class="btn btn-primary">Source</a>
    //                     <p class="pt-4">#react #javascript #html #css #mongodb #api</p>
    //                 </div>
    //             </div>
    //         </aside>
    //     `);

    // }

});
