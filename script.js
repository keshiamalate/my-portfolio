function showPopup() {
    alert("Thank you for leaving a recommendation!");
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function loadRecommendations() {
    const recList = document.getElementById("rec-list");
    const recommendations = JSON.parse(localStorage.getItem("recommendations")) || [];

    recList.innerHTML = "";

    recommendations.forEach(rec => {
        const p = document.createElement("p");
        p.className = "rec";
        p.textContent = rec;
        recList.appendChild(p);
    });
}

function saveRecommendation(event) {
    event.preventDefault();

    const textarea = document.getElementById("recommendation");
    const text = textarea.value.trim();

    if (text === "") return;

    const recommendations = JSON.parse(localStorage.getItem("recommendations")) || [];
    recommendations.push(text);

    localStorage.setItem("recommendations", JSON.stringify(recommendations));

    textarea.value = "";
    loadRecommendations();
    showPopup();
}

document.addEventListener("DOMContentLoaded", loadRecommendations);
