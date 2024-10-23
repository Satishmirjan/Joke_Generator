
document.getElementById('jokeButton').addEventListener('click', fetchJoke);

async function fetchJoke() {
    document.getElementById('loading').style.display = 'block'; 
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single&blacklistFlags=racist,sexist,explicit');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayJoke(data.joke);
    } catch (error) {
        console.error('Error fetching the joke:', error);
        displayJoke('Failed to fetch a joke. Please try again later.');
    } finally {
        document.getElementById('loading').style.display = 'none'; 
    }
}

function displayJoke(joke) {
    document.getElementById('jokeText').innerText = joke || "No joke found.";
}
