// const { response } = require("express");

$(function() {

    // Purpose: Grab data for all projects
    function getProjectData() {
        let response; 

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
                     
                // Append project titles to to project list 
                $('#projectList').append(`
                    <button href="#" class="list-group-item list-group-item-action btnSubmit" data-title="${title}">${title}</button>
                `);
            
                // Render initial project card
                if (i === 0) {
                $('#projectCard').append(`
                    <div class="card">
                        <img src="https://picsum.photos/200" class="card-img-top" alt="lorem ipsum" style="width:100%">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">${description}</p>
                            <a href="${website}" class="btn btn-primary">Site</a>
                            <a href="${github}" class="btn btn-primary">Source</a>
                            <p class="pt-4">${tech}</p>
                        </div>
                    </div>
                `);              
                }
            }; 
            
            $(".list-group .btnSubmit").on("click", function(event) {
                event.preventDefault();
                const selectedProject = $(event.target).text();
                
                for (let i = 0; i < response.length; i++ ) {
                    if (selectedProject === response[i].title) {
                        // Render selected project card
                        $('#projectCard').empty();
                        $('#projectCard').append(`
                            <div class="card">
                                <img src="https://picsum.photos/200" class="card-img-top" alt="lorem ipsum" style="width:100%">
                                <div class="card-body">
                                    <h5 class="card-title">${response[i].title}</h5>
                                    <p class="card-text">${response[i].description}</p>
                                    <a href="${response[i].website}" class="btn btn-primary">Site</a>
                                    <a href="${response[i].github}" class="btn btn-primary">Source</a>
                                    <p class="pt-4">${response[i].technology}</p>
                                </div>
                            </div>
                        `);              
                    }
                }
            });
        });
    }

    getProjectData();

    
    // Purpose: Render card depending on selected project
    // function renderSelectedProjectCard() {

        // Get selected project

        // Iterate over portfolio object to get JSON data
        // getProjectData();

        // Append to project card
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
