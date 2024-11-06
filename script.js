document.getElementById('load-users').addEventListener('click', fetchUsers);

function fetchUsers() {
    document.getElementById('status-message').textContent = "Loading...";
    fetch('https://randomuser.me/api/?results=20')
        .then(response => response.json())
        .then(data => {
            document.getElementById('status-message').textContent = "Success!";
            displayUsers(data.results);
        })
        .catch(error => {
            document.getElementById('status-message').textContent = "Failed to load data.";
            console.error('Error fetching users:', error);
        });
}

function displayUsers(users) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');

        userCard.innerHTML = `
            <img src="${user.picture.large}" alt="User Picture">
            <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
            <p><strong>Cell:</strong> ${user.cell}</p>
            <p><strong>City:</strong> ${user.location.city}</p>
            <p><strong>Country:</strong> ${user.location.country}</p>
        `;
        userList.appendChild(userCard);
    });
}
