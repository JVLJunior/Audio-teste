// Configuração global
const BlogConfig = {
    articlesPerPage: 6,
    currentPage: 1,
    totalArticles: 0,
    articles: []
};

// Dados de exemplo para demonstração (corrigidos)
const sampleArticles = [
    {
        id: 1,
        title: "Guia Completo de Microfones para Igreja",
        excerpt: "Descubra os melhores tipos de microfones para diferentes situações na sua igreja, desde pregação até coral.",
        category: "Equipamentos",
        date: "2024-06-10",
        readTime: "8 min",
        image: "", // Removido para usar placeholder
        slug: "guia-completo-microfones-igreja"
    },
    {
        id: 2,
        title: "Introdução ao Áudio Básico",
        excerpt: "Aprenda o essencial sobre áudio do zero: microfones, mesas de som, equalização, retorno e muito mais com linguagem simples e direta.",
        category: "Tutorial",
        date: "2025-06-11",
        readTime: "8 min",
        image: "images/introducao.jpg",
        slug: "introducao-audio-basico"
    },
    {
        id: 3,
        title: "Mixagem ao Vivo: Dicas Essenciais",
        excerpt: "Técnicas fundamentais para uma mixagem ao vivo eficiente durante cultos e eventos especiais.",
        category: "Técnicas",
        date: "2024-06-05",
        readTime: "10 min",
        image: "", // Removido para usar placeholder
        slug: "mixagem-ao-vivo-dicas-essenciais"
    }
];

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    try {
        initializeApp();
    } catch (error) {
        console.error('Erro na inicialização:', error);
    }
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
    try {
        BlogConfig.articles = [...sampleArticles];
        BlogConfig.totalArticles = BlogConfig.articles.length;
        
        displayArticles();
        updateLoadMoreButton();
    } catch (error) {
        console.error('Erro ao carregar artigos:', error);
    }
}

// Exibir artigos na página (versão simplificada)
function displayArticles() {
    const articlesGrid = document.getElementById('articlesGrid');
    const placeholder = document.querySelector('.article-placeholder');
    
    if (!articlesGrid) {
        console.error('Element articlesGrid not found');
        return;
    }

    try {
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
        articlesToShow.forEach((article, index) => {
            const articleCard = createArticleCard(article);
            if (articleCard) {
                articlesGrid.appendChild(articleCard);
            }
        });

    } catch (error) {
        console.error('Erro ao exibir artigos:', error);
    }
}

// Criar card de artigo (versão simplificada)
function createArticleCard(article) {
    try {
        const card = document.createElement('article');
        card.className = 'article-card';
        
        
        const imageUrl = article.image && article.image.trim() !== ""
            ? article.image
            : 'https://via.placeholder.com/400x200/2563eb/ffffff?text=Audio+Igreja';

        
        card.innerHTML = `
            <img src="${imageUrl}" alt="${article.title}" class="article-image">
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

        // Adicionar evento de clique simplificado
        card.addEventListener('click', function() {
            console.log(`Clique no artigo: ${article.title}`);
            alert(`Artigo: ${article.title}\n\nEste é um preview. O artigo completo será adicionado em breve!`);
        });

        return card;

    } catch (error) {
        console.error('Erro ao criar card:', error);
        return null;
    }
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
                const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Configurar animações de entrada (simplificado)
function setupAnimations() {
    // Versão simplificada sem Intersection Observer para evitar problemas
    const elementsToAnimate = document.querySelectorAll('.section-header, .feature, .contact-content');
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in-up');
    });
}

// Função utilitária para formatar data
function formatDate(dateString) {
    try {
        const date = new Date(dateString);
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        return date.toLocaleDateString('pt-BR', options);
    } catch (error) {
        console.error('Erro ao formatar data:', error);
        return dateString;
    }
}

// Função para adicionar novos artigos (para uso futuro)
function addNewArticle(articleData) {
    try {
        BlogConfig.articles.unshift(articleData);
        BlogConfig.totalArticles = BlogConfig.articles.length;
        BlogConfig.currentPage = 1;
        displayArticles();
        updateLoadMoreButton();
    } catch (error) {
        console.error('Erro ao adicionar artigo:', error);
    }
}

// Função para buscar artigos (para uso futuro)
function searchArticles(query) {
    try {
        const filteredArticles = BlogConfig.articles.filter(article => 
            article.title.toLowerCase().includes(query.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
            article.category.toLowerCase().includes(query.toLowerCase())
        );
        
        const originalArticles = [...BlogConfig.articles];
        BlogConfig.articles = filteredArticles;
        BlogConfig.totalArticles = filteredArticles.length;
        BlogConfig.currentPage = 1;
        
        displayArticles();
        updateLoadMoreButton();
        
        return function restoreArticles() {
            BlogConfig.articles = originalArticles;
            BlogConfig.totalArticles = originalArticles.length;
            BlogConfig.currentPage = 1;
            displayArticles();
            updateLoadMoreButton();
        };
    } catch (error) {
        console.error('Erro na busca:', error);
        return function() {};
    }
}

// Exportar funções para uso global (se necessário)
window.BlogApp = {
    addNewArticle,
    searchArticles,
    loadArticles
};

