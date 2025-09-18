// document.getElementById('loginForm').addEventListener('submit', async function(event) {
//     event.preventDefault(); // Prevent form submission from reloading the page

//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     try {
//         const response = await fetch('http://localhost:8000/login', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email, password })
//         });

//         const resultContainer = document.getElementById('loginResult');
//         if (response.ok) {
//             const data = await response.json();
//             resultContainer.textContent = data.message; // Display the response message
//             resultContainer.classList.remove('text-danger');
//             resultContainer.classList.add('text-success');
//         } else {
//             resultContainer.textContent = 'Login failed. Please check your credentials.';
//             resultContainer.classList.add('text-danger');
//         }
//     } catch (error) {
//         const resultContainer = document.getElementById('loginResult');
//         resultContainer.textContent = 'Error connecting to server.';
//         console.error('Error:', error);
//     }
// });

document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent page refresh

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const data = await response.json();
            alert(data.message); // Show success message
            // Redirect or perform further actions
        } else {
            const error = await response.json();
            alert(`Error: ${error.message}`); // Show error message
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong!');
    }
});
