function myLineUp(event) {
    event.preventDefault();

    const status = document.querySelector('input[name="status"]:checked').value;
    const gameDate = document.getElementById("gameDate").value;
    const players = Array.from(
        document.querySelectorAll('input[name="players"]:checked')
    ).map(checkbox => checkbox.value);

    console.log("Status:", status);
    console.log("Game Date:", gameDate);
    console.log("Players:", players);

    const summary = "Status: " + status + " | Date: " + gameDate + " | Players: " + players.join(", ");
    console.log(summary);

    document.getElementById("lineup-output").textContent = summary;
}

document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.querySelector('#lineup-form input[type="submit"]');
    if (!submitButton) {
        console.error("Submit button not found.");
        return;
    }
    submitButton.addEventListener("click", myLineUp);
});
