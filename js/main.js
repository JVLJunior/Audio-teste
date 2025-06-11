// Configuração global
const BlogConfig = {
    articlesPerPage: 6,
    currentPage: 1,
    totalArticles: 0,
    articles: []
};

// Dados de exemplo para demonstração (serão substituídos pelos artigos reais)
const sampleArticles = [
    {
        id: 1,
        title: "Guia Completo de Microfones para Igreja",
        excerpt: "Descubra os melhores tipos de microfones para diferentes situações na sua igreja, desde pregação até coral.",
        category: "Equipamentos",
        date: "2024-06-10",
        readTime: "8 min",
        image: "images/microphones-guide.jpg",
        slug: "guia-completo-microfones-igreja"
    },
    {
        id: 2,
        title: "Como Configurar um Sistema de Som Básico",
        excerpt: "Passo a passo para montar um sistema de áudio funcional e profissional para igrejas pequenas e médias.",
        category: "Tutorial",
        date: "2024-06-08",
        readTime: "12 min",
        image: "images/sound-system-setup.jpg",
        slug: "configurar-sistema-som-basico"
    },
    {
        id: 3,
        title: "Mixagem ao Vivo: Dicas Essenciais",
        excerpt: "Técnicas fundamentais para uma mixagem ao vivo eficiente durante cultos e eventos especiais.",
        category: "Técnicas",
        date: "2024-06-05",
        readTime: "10 min",
        image: "images/live-mixing-tips.jpg",
        slug: "mixagem-ao-vivo-dicas-essenciais"
    }
];

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Função principal de inicialização
function initializeApp() {
    setupNavigation();
    setupScrollEffects();
    loadArticles();
    setupLoadMoreButton();
    setupSmoothScrolling();
    setupAnimations();
}

// Configuração da navegação mobile
function setupNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Fechar menu ao clicar fora
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// Efeitos de scroll no header
function setupScrollEffects() {
    const header = document.querySelector('.header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = 'none';
            }
        });
    }
}

// Carregamento e exibição de artigos
function loadArticles() {
    // Por enquanto, usar artigos de exemplo
    // Em produção, isso seria substituído por uma chamada à API ou carregamento de arquivos JSON
    BlogConfig.articles = [...sampleArticles];
    BlogConfig.totalArticles = BlogConfig.articles.length;
    
    displayArticles();
    updateLoadMoreButton();
}

// Exibir artigos na página
function displayArticles() {
    const articlesGrid = document.getElementById('articlesGrid');
    const placeholder = document.querySelector('.article-placeholder');
    
    if (!articlesGrid) return;

    // Remover placeholder se houver artigos
    if (BlogConfig.articles.length > 0 && placeholder) {
        placeholder.style.display = 'none';
    }

    // Calcular artigos para exibir
    const startIndex = 0;
    const endIndex = BlogConfig.currentPage * BlogConfig.articlesPerPage;
    const articlesToShow = BlogConfig.articles.slice(startIndex, endIndex);

    // Limpar grid (exceto placeholder)
    const existingCards = articlesGrid.querySelectorAll('.article-card');
    existingCards.forEach(card => card.remove());

    // Adicionar artigos
    articlesToShow.forEach(article => {
        const articleCard = createArticleCard(article);
        articlesGrid.appendChild(articleCard);
    });

    // Adicionar animação aos novos cards
    setTimeout(() => {
        const newCards = articlesGrid.querySelectorAll('.article-card');
        newCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('fade-in-up');
            }, index * 100);
        });
    }, 100);
}

// Criar card de artigo
function createArticleCard(article) {
    const card = document.createElement('article');
    card.className = 'article-card';
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    // Usar imagem placeholder se não existir
    const imageUrl = article.image || 'https://via.placeholder.com/400x200/2563eb/ffffff?text=Áudio+Igreja';
    
    card.innerHTML = `
        <img src="${imageUrl}" alt="${article.title}" class="article-image" onerror="this.src='https://via.placeholder.com/400x200/2563eb/ffffff?text=Áudio+Igreja'">
        <div class="article-content">
            <span class="article-category">${article.category}</span>
            <h3 class="article-title">${article.title}</h3>
            <p class="article-excerpt">${article.excerpt}</p>
            <div class="article-meta">
                <div class="article-date">
                    <i class="fas fa-calendar-alt"></i>
                    <span>${formatDate(article.date)}</span>
                </div>
                <div class="article-read-time">
                    <i class="fas fa-clock"></i>
                    <span>${article.readTime}</span>
                </div>
            </div>
        </div>
    `;

    // Adicionar evento de clique
    card.addEventListener('click', function() {
        // Em produção, isso redirecionaria para a página do artigo
        console.log(`Navegando para artigo: ${article.slug}`);
        showArticlePreview(article);
    });

    // Animação de entrada
    setTimeout(() => {
        card.style.transition = 'all 0.6s ease-out';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 50);

    return card;
}

// Mostrar preview do artigo (placeholder para funcionalidade futura)
function showArticlePreview(article) {
    const modal = document.createElement('div');
    modal.className = 'article-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>${article.title}</h2>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <p><strong>Categoria:</strong> ${article.category}</p>
                    <p><strong>Data:</strong> ${formatDate(article.date)}</p>
                    <p><strong>Tempo de leitura:</strong> ${article.readTime}</p>
                    <br>
                    <p>${article.excerpt}</p>
                    <br>
                    <p><em>Este é um preview. O artigo completo será adicionado em breve!</em></p>
                </div>
            </div>
        </div>
    `;

    // Adicionar estilos do modal
    const modalStyles = `
        <style>
        .article-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2000;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
        }
        .modal-content {
            background: white;
            border-radius: 1rem;
            max-width: 600px;
            width: 100%;
            max-height: 80vh;
            overflow-y: auto;
            animation: modalSlideIn 0.3s ease-out;
        }
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem;
            border-bottom: 1px solid #e5e7eb;
        }
        .modal-header h2 {
            margin: 0;
            color: #1f2937;
        }
        .modal-close {
            background: none;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            color: #6b7280;
            padding: 0;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .modal-close:hover {
            color: #1f2937;
        }
        .modal-body {
            padding: 1.5rem;
            line-height: 1.6;
            color: #374151;
        }
        @keyframes modalSlideIn {
            from {
                opacity: 0;
                transform: translateY(-20px) scale(0.95);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        </style>
    `;

    document.head.insertAdjacentHTML('beforeend', modalStyles);
    document.body.appendChild(modal);

    // Fechar modal
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');

    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            document.body.removeChild(modal);
        }
    });

    // Fechar com ESC
    const handleEsc = (e) => {
        if (e.key === 'Escape') {
            document.body.removeChild(modal);
            document.removeEventListener('keydown', handleEsc);
        }
    };
    document.addEventListener('keydown', handleEsc);
}

// Configurar botão "Carregar Mais"
function setupLoadMoreButton() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            BlogConfig.currentPage++;
            displayArticles();
            updateLoadMoreButton();
        });
    }
}

// Atualizar visibilidade do botão "Carregar Mais"
function updateLoadMoreButton() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    if (loadMoreBtn) {
        const totalPages = Math.ceil(BlogConfig.totalArticles / BlogConfig.articlesPerPage);
        
        if (BlogConfig.currentPage >= totalPages || BlogConfig.totalArticles === 0) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-flex';
        }
    }
}

// Configurar scroll suave
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Configurar animações de entrada
function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar elementos que devem animar
    const elementsToAnimate = document.querySelectorAll('.section-header, .feature, .contact-content');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
}

// Função utilitária para formatar data
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('pt-BR', options);
}

// Função para adicionar novos artigos (para uso futuro)
function addNewArticle(articleData) {
    BlogConfig.articles.unshift(articleData);
    BlogConfig.totalArticles = BlogConfig.articles.length;
    BlogConfig.currentPage = 1;
    displayArticles();
    updateLoadMoreButton();
}

// Função para buscar artigos (para uso futuro)
function searchArticles(query) {
    const filteredArticles = BlogConfig.articles.filter(article => 
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        article.category.toLowerCase().includes(query.toLowerCase())
    );
    
    // Temporariamente substituir artigos pelos resultados da busca
    const originalArticles = [...BlogConfig.articles];
    BlogConfig.articles = filteredArticles;
    BlogConfig.totalArticles = filteredArticles.length;
    BlogConfig.currentPage = 1;
    
    displayArticles();
    updateLoadMoreButton();
    
    // Retornar função para restaurar artigos originais
    return function restoreArticles() {
        BlogConfig.articles = originalArticles;
        BlogConfig.totalArticles = originalArticles.length;
        BlogConfig.currentPage = 1;
        displayArticles();
        updateLoadMoreButton();
    };
}

// Exportar funções para uso global (se necessário)
window.BlogApp = {
    addNewArticle,
    searchArticles,
    loadArticles
};

