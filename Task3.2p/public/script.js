document.getElementById("userForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    
    const response = await fetch("/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name })
    });

    const data = await response.json();
    document.getElementById("message").innerText = `Hello, ${data.name}!`;
});
