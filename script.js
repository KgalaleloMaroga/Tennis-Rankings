const atpPlayers = [
    { rank: 1, name: "Jannik Sinner", points: 11920, age: 23, country: "Italy", lastTournament: "Shanghai Open" },
    { rank: 2, name: "Carlos Alcaraz", points: 7120, age: 21, country: "Spain", lastTournament: "Shanghai Open" },
    { rank: 3, name: "Alex Zverev", points: 6795, age: 27, country: "Germany", lastTournament: "Vienna Open" },
    { rank: 4, name: "Novak Djokovic", points: 6210, age: 37, country: "Serbia", lastTournament: "Shanghai Open" },
    { rank: 5, name: "Daniil Medvedev", points: 5530, age: 28, country: "Russia", lastTournament: "Shanghai Open" },
    { rank: 6, name: "Taylor Fritz", points: 4380, age: 26, country: "USA", lastTournament: "Shanghai Open" },
    { rank: 7, name: "Andrey Rublev", points: 4150, age: 26, country: "Russia", lastTournament: "Basel" },
    { rank: 8, name: "Casper Ruud", points: 3890, age: 25, country: "Sweden", lastTournament: "Stockholm" },
    { rank: 9, name: "Grigor Dimitrov", points: 3735, age: 33, country: "Bulgaria", lastTournament: "Stockholm" },
    { rank: 10, name: "Alex de Minuar", points: 3570, age: 25, country: "Australia", lastTournament: "Swiss Open" }
];

const wtaPlayers = [
    { rank: 1, name: "Aryna Sabalenka", points: 9706, age: 26, country: "Belarus", lastTournament: "Wuhan" },
    { rank: 2, name: "Iga Swiatek", points: 9665, age: 23, country: "Poland", lastTournament: "US Open" },
    { rank: 3, name: "Cori Gauff", points: 5963, age: 20, country: "USA", lastTournament: "Wuhan" },
    { rank: 4, name: "Jessica Pegula", points: 5785, age: 20, country: "USA", lastTournament: "Wuhan" },
    { rank: 5, name: "Elena Rybakina", points: 5471, age: 25, country: "Kazakhstan", lastTournament: "US Open" },
    { rank: 6, name: "Jasmine Paolini", points: 5323, age: 28, country: "Italy", lastTournament: "Wuhan Open" },
    { rank: 7, name: "Qinwen Zheng", points: 4480, age: 22, country: "China", lastTournament: "Toyko Open" },
    { rank: 8, name: "Emma Navarro", points: 3698, age: 23, country: "USA", lastTournament: "Wuhan" },
    { rank: 9, name: "Daria Kasatkina", points: 3500, age: 27, country: "Russia", lastTournament: "Ningbo Open" },
    { rank: 10, name: "Beatriz Haddad Maia", points: 3146, age: 28, country: "Brazil", lastTournament: "Cinci" }
];


function populateTables() {
    const atpTableBody = document.querySelector("#atpTable tbody");
    const wtaTableBody = document.querySelector("#wtaTable tbody");

    atpPlayers.forEach(player => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${player.rank}</td>
            <td>${player.name}</td>
            <td>${player.age}</td>
            <td>${player.country}</td>
            <td>${player.points}</td>
            <td>${player.lastTournament}</td>
        `;
        atpTableBody.appendChild(row);
    });

    wtaPlayers.forEach(player => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${player.rank}</td>
            <td>${player.name}</td>
            <td>${player.age}</td>
            <td>${player.country}</td>
            <td>${player.points}</td>
            <td>${player.lastTournament}</td>
        `;
        wtaTableBody.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    populateTables();
    const toggleButton = document.getElementById("toggleButton");
    const atpSection = document.getElementById("atpSection");
    const wtaSection = document.getElementById("wtaSection");
    const toggleLabel = document.getElementById("toggleLabel");

    toggleButton.addEventListener("change", () => {
        if (toggleButton.checked) {
            atpSection.style.display = "none";
            wtaSection.style.display = "block";
            toggleLabel.innerText = "Show ATP";
        } else {
            atpSection.style.display = "block";
            wtaSection.style.display = "none";
            toggleLabel.innerText = "Show WTA";
        }
    });
});
