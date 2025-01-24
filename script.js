
function toggleMenu() {
    const leftMenu = document.getElementById('leftMenu');
    leftMenu.classList.toggle('collapsed');
}


function handlePageScaling() {
    const width = window.innerWidth;
    const html = document.documentElement;
    
    if (width >= 992 && width <= 1600) {
        html.style.zoom = "90%";
    } else if (width >= 700 && width <= 767) {
        html.style.zoom = "80%";
    } else if (width >= 600 && width < 700) {
        html.style.zoom = "75%";
    } else if (width <= 600) {
        html.style.zoom = "50%";
    } else {
        html.style.zoom = "100%";
    }
}

let currentTheme = 'light';
function toggleTheme() {
    const body = document.body;
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    body.classList.toggle('dark-theme');
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}


window.addEventListener('load', handlePageScaling);
window.addEventListener('resize', handlePageScaling);

document.getElementById('themeToggle').addEventListener('click', (e) => {
    e.preventDefault();
    toggleTheme();
});

document.getElementById('aboutBtn').addEventListener('click', (e) => {
    e.preventDefault();
    openModal('aboutModal');
});

document.getElementById('quotesBtn').addEventListener('click', (e) => {
    e.preventDefault();
    openModal('quotesModal');
});


document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        const modal = closeBtn.closest('.modal');
        closeModal(modal.id);
    });
});


window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target.id);
    }
});
