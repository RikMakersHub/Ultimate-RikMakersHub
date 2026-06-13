document.addEventListener("DOMContentLoaded", () => {
    // Array configuration dataset containing all 11 production routing destinations
    const routes = {
        "hub-main": "https://github.io",
        "hub-pro": "https://github.io",
        "dev-log": "https://github.io",
        "eco-shield": "https://github.io",
        "eco-code": "https://github.io",
        "ag-core": "https://github.io",
        "ag-sahayak": "https://github.io",
        "ag-hydro": "https://github.io",
        "fin-core": "https://github.io",
        "health-core": "https://github.io",
        "ed-cracker": "https://github.io"
    };

    // Bind event capture to launch-btn classes
    const buttons = document.querySelectorAll(".launch-btn");
    
    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            const routeKey = e.target.getAttribute("data-route");
            if (routes[routeKey]) {
                // Initialize secure isolated browser tab handshakes
                document.addEventListener("DOMContentLoaded", () => {
    // Array configuration dataset containing all 11 production routing destinations
    const routes = {
        "hub-main": "https://github.io",
        "hub-pro": "https://github.io",
        "dev-log": "https://github.io",
        "eco-shield": "https://github.io",
        "eco-code": "https://github.io",
        "ag-core": "https://github.io",
        "ag-sahayak": "https://github.io",
        "ag-hydro": "https://github.io",
        "fin-core": "https://github.io",
        "health-core": "https://github.io",
        "ed-cracker": "https://github.io"
    };

    // Bind event capture to launch-btn classes
    const buttons = document.querySelectorAll(".launch-btn");
    
    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            const routeKey = e.target.getAttribute("data-route");
            if (routes[routeKey]) {
                // Initialize secure isolated browser tab handshakes
                window.open(routes[routeKey], "_blank", "noopener,noreferrer");
            } else {
                console.warn(`Routing vector key mapping mismatch: ${routeKey}`);
            }
        });
    });
});
