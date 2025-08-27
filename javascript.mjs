// select Dom Elements

const searchInput = document.getElementById(`searchInput`);
const searchBtn = document.getElementById(`searchBtn`);
const userGallery = document.getElementById(`userGallery`);

let allUsers = [];

// Fetch users from JSONPlaceholder API

async function fetchUser() {
    try {

        let response = await fetch (`https://jsonplaceholder.typicode.com/users`);
        if (!response.ok) throw new Error(`Network error`);
        let data = await response.json();
        allUsers = data;
        renderUsers(allUsers);
 
    } catch (err) {console.error(`API Fetch Error:`, err);
        
    }
    
}

//  Render users in DOM

    function renderUsers(users){
        userGallery.innerHTML = ``;
        users.forEach(user=>{
            let card = document.createElement(`div`);
            card.classList.add(`userCard`);
            card.innerHTML = `

            <h3> ${user.name}</h3>
            <p><strong>Email:</strong>${user.email} </p>
            <p><strong>City:</strong>${user.address.city} </p>
            <p><strong>Company:</strong>${user.company.name} </p> `;

            userGallery.appendChild(card);

            
            
            
        })


    }

    // Search users by name

    searchBtn.addEventListener(`click`,()=>{
        let query = searchInput.value.toLowerCase();
        let filtered = allUsers.filter(u =>u.name.toLowerCase().includes(query));
        renderUsers(filtered);


    });

    // Initial Load

    fetchUser();
    






