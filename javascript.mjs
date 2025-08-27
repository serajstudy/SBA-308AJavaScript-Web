// select Dom Elements

const searchInput = document.getElementById(`searchBtn`);
const searchBtn = document.getElementById(`searchBtn`);
const userGallery = document.getElementById(`userGallery`);

let allUser = [];

// Fetch users from JSONPlaceholder API

async function fetchUser() {
    try {

        let response = await fetch (`https://jsonplaceholder.typicode.com/users`);
        if (!response.ok) throw new Error(`Network error`);
        let data = await response.json();
        allUser = data;
        renderUsers(allUsers);
 
    } catch (error) {console.error(`API Fetch Error:`, err);
        
    }
    
}

//  Render users in DOM

function renderUsers(users){
    userGallery.innerHTML = ``;
    users.forEach(user=>{
        let card = document.createElement(`div`);
        card.classList.add(`userCard`);
        card.innerHTML = `
        
        
        `
    })


}