// dodałem warunek żeby zaczekał aż dom się załaduje
window.addEventListener('load', function () {
    // pobieranie elemetu formularza
    const loginForm = document.getElementById("login-form");
    // pobieranie przycisku logowania
    const loginButton = document.getElementById("login-form-submit");
    // prawdopodobie kontener na wyświetlanie błędu ale nie ma go w html
    const loginErrorMsg = document.getElementById("login-error-msg");

    // dodany eventListener na przycisku, żeby złapał clicka
    loginButton.addEventListener("click", (e) => {
        // blokowanie domyślnej akcji
        e.preventDefault();

        // zapisywanie do zmiennych wartości z pół
        const username = loginForm.username.value;
        const password = loginForm.password.value;

        // sprawdzenie czy wartości są puste
        if (username === "" && password === "") {
            // wyświetl okienko z wiadomością i przeładuj stronę
            alert("Pomyślnie się zalogowałeś.");
            location.reload();
        } else {
            // wyświetl pole na błąd
            loginErrorMsg.style.opacity = 1;
        }
    })
})
