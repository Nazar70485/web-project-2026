// Czekamy na załadowanie całego dokumentu
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Obsługa zdarzeń (Events) ---
    const ctaBtn = document.getElementById('cta-btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', () => {
            alert('Witaj w świecie technologii! Zaraz zobaczysz nasze projekty.');
            window.location.href = 'projects.html';
        });
    }

    // --- 2. Dynamiczne generowanie elementów DOM i API ---
    const container = document.getElementById('api-data-container');

    if (container) {
        // Funkcja pobierająca dane z zewnętrznego API
        async function fetchProjects() {
            try {
                // Pobieramy dane o postach jako symulację projektów
                const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
                const data = await response.json();

                // Czyścimy kontener (usuwamy napis "Ładowanie danych...")
                container.innerHTML = '';

                // Tworzymy elementy DOM dla każdego projektu
                data.forEach(item => {
                    const card = document.createElement('div');
                    card.className = 'card';
                    card.innerHTML = `
                        <h3>${item.title.substring(0, 20)}</h3>
                        <p>${item.body.substring(0, 100)}...</p>
                        <button class="card-btn">Czytaj więcej</button>
                    `;
                    container.appendChild(card);
                });
            } catch (error) {
                container.innerHTML = '<p>Błąd podczas ładowania danych.</p>';
                console.error('Błąd:', error);
            }
        }

        fetchProjects();
    }

    // --- 3. Walidacja formularza ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Zatrzymujemy wysyłanie strony

            const feedback = document.getElementById('form-feedback');
            const name = document.getElementById('name').value;

            // Prosta symulacja walidacji i odpowiedzi
            feedback.innerHTML = `<p style="color: green; margin-top: 10px;">Dziękujemy, ${name}! Twoja wiadomość została wysłana pomyślnie.</p>`;
            contactForm.reset();
        });
    }
});