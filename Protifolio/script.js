const nav = document.querySelector('nav');
const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('.menu-btn');
const cancelBtn = document.querySelector('.cancel-btn');

window.addEventListener('scroll', () => {
  nav.classList.toggle('sticky', window.scrollY > 20);
});

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    navbar.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
}
if (cancelBtn) {
  cancelBtn.addEventListener('click', () => {
    navbar.classList.remove('active');
    document.body.style.overflow = '';
  });
}
document.querySelectorAll('.menu a').forEach(a => {
  a.addEventListener('click', () => {
    navbar.classList.remove('active');
    document.body.style.overflow = '';
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('active');
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const searchInput = document.querySelector('#search');
const filterButtons = document.querySelectorAll('[data-filter]');
let currentFilter = 'all';

// Ensure MTech filter button exists even if HTML is cached/old
const filtersContainer = document.querySelector('.filters');
let mtechBtn = filtersContainer?.querySelector('[data-filter="mtech"]');
if (filtersContainer && !mtechBtn) {
  mtechBtn = document.createElement('button');
  mtechBtn.className = 'btn btn-outline';
  mtechBtn.setAttribute('data-filter', 'mtech');
  mtechBtn.textContent = 'MTech';
  filtersContainer.appendChild(mtechBtn);
}

function applyFilter(tag) {
  currentFilter = tag;
  const q = (searchInput?.value || '').toLowerCase();
  const cards = document.querySelectorAll('[data-tag]');
  cards.forEach(card => {
    const matchTag = tag === 'all' || card.dataset.tag === tag;
    const matchText = card.textContent.toLowerCase().includes(q);
    card.style.display = matchTag && matchText ? '' : 'none';
  });
}

filterButtons.forEach(btn => btn.addEventListener('click', () => {
  filterButtons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  applyFilter(btn.dataset.filter);
}));
const allBtn = document.querySelector('[data-filter="all"]');
if (allBtn) allBtn.classList.add('active');
if (searchInput) searchInput.addEventListener('input', () => applyFilter(currentFilter));

// Attach listener for dynamically ensured MTech button
if (mtechBtn) {
  mtechBtn.addEventListener('click', () => {
    [...filterButtons, mtechBtn].forEach(b => b.classList.remove('active'));
    mtechBtn.classList.add('active');
    applyFilter('mtech');
  });
}

const waBtn = document.querySelector('#wa-send');
if (waBtn) {
  waBtn.addEventListener('click', () => {
    const message = encodeURIComponent(document.querySelector('#wa-message')?.value || 'Hello Bhargav, I would like to connect.');
    const phone = '7993245860';
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank');
  });
}

async function loadRepoGrid(gridSelector, owner, repo, tag, icon, path) {
  const grid = document.querySelector(gridSelector);
  if (!grid) return;
  try {
    const base = `https://api.github.com/repos/${owner}/${repo}/contents`;
    const url = path ? `${base}/${path}` : base;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to load repository contents');
    const items = await res.json();
    const dirs = items.filter(i => i.type === 'dir');
    
    grid.innerHTML = dirs.map(d => {
      let buttons = `<a href="${d.html_url}" target="_blank" rel="noopener noreferrer" class="btn btn-sm">View Source Code</a>`;
      
      // Add "Run Project" button for HTML projects
      if (tag === 'html') {
        const projectUrl = `https://rawcdn.githack.com/${owner}/${repo}/main/${d.name}/index.html`;
        buttons += `<a href="${projectUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-secondary">Run Project</a>`;
      }
      
      return `
        <div class="card" data-tag="${tag}">
          <div class="icon"><i class="${icon}"></i></div>
          <h3>${d.name}</h3>
          <p>Open project on GitHub</p>
          <div class="card-buttons">
            ${buttons}
          </div>
        </div>
      `;
    }).join('');
  } catch (e) {
    grid.innerHTML = '<p style="color:#c62828">Unable to load projects from GitHub right now.</p>';
  }
}

loadRepoGrid('#testing-repo-grid', 'Bhargavr216', 'TESTING', 'testing', 'fas fa-vial');
loadRepoGrid('#java-repo-grid', 'Bhargavr216', 'JavaProjects', 'java', 'fas fa-coffee');
loadRepoGrid('#html-repo-grid', 'Bhargavr216', 'HTML', 'html', 'fas fa-folder-open');
loadRepoGrid('#mtech-repo-grid', 'Bhargavr216', 'Mtech', 'mtech', 'fas fa-graduation-cap', 'Sem1/full_stack');

// Re-apply filter after dynamic loads complete
Promise.allSettled([]).then(() => applyFilter(currentFilter));
