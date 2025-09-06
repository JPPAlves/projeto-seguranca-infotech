document.addEventListener('DOMContentLoaded', () => {
    // --- SELETORES GLOBAIS ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const contactForm = document.getElementById('contact-form');
    const modal = document.getElementById('feedback-modal');
    const closeModalButton = document.querySelector('.close-button');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // --- SELETOR DE TEMA (CLARO/ESCURO) ---
    if (themeToggle) {
        const applyTheme = (theme) => {
            if (theme === 'dark') {
                body.classList.add('dark-mode');
                themeToggle.checked = true;
            } else {
                body.classList.remove('dark-mode');
                themeToggle.checked = false;
            }
            localStorage.setItem('theme', theme);
        };

        themeToggle.addEventListener('change', () => {
            const newTheme = themeToggle.checked ? 'dark' : 'light';
            applyTheme(newTheme);
        });

        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme) {
            applyTheme(savedTheme);
        } else if (prefersDark) {
            applyTheme('dark');
        } else {
            applyTheme('light');
        }
    }

    // --- MARCAR LINK ATIVO NA NAVEGAÇÃO ---
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    // --- MENU HAMBURGER (MOBILE) ---
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // --- MODAL DE FEEDBACK E SIMULAÇÃO DE CRIPTOGRAFIA ---
    if (contactForm) {
        const modalTitle = document.getElementById('modal-title');
        const modalMessage = document.getElementById('modal-message');
        const modalIcon = modal.querySelector('.modal-icon i');

        const showModal = (title, message, iconClass = 'fa-solid fa-circle-check') => {
            if (!modal) return;
            modalTitle.textContent = title;
            modalMessage.textContent = message;
            modalIcon.className = iconClass;
            modal.classList.add('show');
        };

        const hideModal = () => {
            if (!modal) return;
            modal.classList.remove('show');
        };

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // 1. Obter dados do formulário
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const formData = { name, email, message };

            // 2. Mostrar mensagem de "Criptografando..."
            showModal('Processando...', 'Criptografando seus dados para um envio seguro...', 'fa-solid fa-lock');

            // 3. SIMULAR CRIPTOGRAFIA (convertendo para Base64)
            const jsonData = JSON.stringify(formData);
            const encryptedData = btoa(jsonData); // btoa() cria uma string codificada em Base64

            // Logar os dados "criptografados" no console para demonstração
            console.log("--- SIMULAÇÃO DE CONFIDENCIALIDADE ---");
            console.log("Dados originais:", formData);
            console.log("Dados 'criptografados' (Base64):", encryptedData);
            console.log("---------------------------------------");

            // 4. Após um atraso, mostrar a mensagem de sucesso
            setTimeout(() => {
                const successMessage = `Obrigado por sua mensagem, ${name}! Responderemos em breve.`;
                showModal('Mensagem Enviada!', successMessage, 'fa-solid fa-circle-check');
                contactForm.reset();
            }, 1500); // Atraso de 1.5 segundos para simular o processo
        });

        if (closeModalButton) closeModalButton.addEventListener('click', hideModal);
        if (modal) modal.addEventListener('click', (e) => e.target === modal && hideModal());
    }
});