async function fetchQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        document.getElementById('quote').textContent = `"${data.content}"`;
        document.getElementById('author').textContent = `- ${data.author}`;
    } catch (error) {
        document.getElementById('quote').textContent = "Failed to fetch a new quote.";
        document.getElementById('author').textContent = "";
        console.error('Error fetching quote:', error);
    }
}

// Fetch a quote when the page loads
fetchQuote();