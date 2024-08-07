document.getElementById('pokeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const pokeType = document.getElementById('pokeType').value;
    fetch(`/api/api?name=${pokeType}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Update the page with the received information
            const infoDiv = document.getElementById('pokeInfo');
            infoDiv.innerHTML = `
                <h2>Type: ${pokeType}</h2>
                <p><strong>${pokeType} is strong Against:</strong> ${data.effectiveAgainst}</p>
                <p><strong>${pokeType} is weak Against:</strong> ${data.weakAgainst}</p>
                <p><strong>Types not effective against this ${pokeType}:</strong> ${data.defenseWeak}</p>
                <p><strong>These types are super-effective against ${pokeType}:</strong> ${data.defenseStrong}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

