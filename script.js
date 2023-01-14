// const axios = require('axios');

const main = async () => {
    try {
        const response = await axios.get('https://randomuser.me/api/?results=24');
        const userData = response.data.results;

        let userListHTML = '';
        userData.forEach(user => {
            userListHTML += `<li class="user-thumbnail">
                    <img class="user-img" src="${user.picture.large}">
                    <div class="user-detail">
                        <div>${user.name.title} ${user.name.first} ${user.name.last}</div>
                        <div class="user-email">${user.email}</div>
                    </div>
                </li>`;
        })

        document.querySelector('.user-list').innerHTML = userListHTML;

        const userThumbnails = document.getElementsByClassName("user-thumbnail");

        for (let i = 0; i < userThumbnails.length; i++) {
            userThumbnails[i].addEventListener("click", () => {
                document.querySelector(".right-section img").src = userData[i].picture.large;
                document.querySelector(".user-name").innerHTML = userData[i].name.title + " " + userData[i].name.first + " " + userData[i].name.last;
                document.querySelector(".user-info").innerHTML = `<div>Gender: ${userData[i].gender}, Age: ${userData[i].dob.age}</div>
                <div>Email: ${userData[i].email}</div>
                <div>${userData[i].cell}</div>
                <div>${userData[i].location.state}, ${userData[i].location.country}</div>`;
            })
        }
    } catch (error) {
        console.log(error.message);
    }
}

main();