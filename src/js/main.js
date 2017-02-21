import $ from 'jquery';
import token from "./token.js"



function getData(data, callback) {
    $.ajax({
        url: `https://api.github.com/users/rjowers`,
        dataType: "json",
        headers: {
            "Authorization": `token ${token}`
        },
        data: {
            q: data
        },
        success: appendData
    })
}


getData();


function appendData(data) {
    console.log(data)
    $(".info").append(
        `
            <div class="columns">
            <div class="column">
            <ul>
            <li class="Name"><span>Name: </span>${data.name}</li>
            <li class="phone"><span>Phone Number: </span>803-719-6681</li>
            <li class="email"><span>Email: </span>${data.email}</li>
            <li class="url"><span>Github URL: </span><a href="${data.html_url}">${data.html_url}</a></li>
            <li class="location"><span>Location: </span>${data.location}</li>
            </ul>
            </div>
            <div class="column">
            <h1> ABOUT ME </h1>
            <p>${data.bio}</p>
            </div>
            <div class="column">
            <img src="${data.avatar_url}"/>
            </div>
            </div>

            `)
}
