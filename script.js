document.addEventListener('DOMContentLoaded', (event) => {
async function fetchQuote() 
{
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
document.getElementById('add-task-button').addEventListener('click', addTask);
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');function addTask()
{
    if(inputBox.value === '')
    {
        alert("Please enter a task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
}
});