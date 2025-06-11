# Blog Áudio para Igrejas

Um blog moderno e responsivo especializado em áudio para igrejas, otimizado para GitHub Pages.

## 🎯 Características

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Performance Otimizada**: Carregamento rápido e otimizado para SEO
- **Sistema de Cards**: Interface moderna para exibição de artigos
- **Navegação Suave**: Scroll suave e transições elegantes
- **Compatível com GitHub Pages**: Deploy automático e gratuito

## 📁 Estrutura do Projeto

```
blog-audio-igrejas/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos CSS
├── js/
│   └── main.js         # JavaScript principal
├── images/             # Imagens do site
│   ├── hero-audio-church.jpg
│   └── ...
├── articles/           # Diretório para artigos futuros
└── README.md          # Este arquivo
```

## 🚀 Como Publicar no GitHub Pages

1. **Criar Repositório no GitHub**
   - Faça login no GitHub
   - Crie um novo repositório público
   - Nome sugerido: `blog-audio-igrejas`

2. **Upload dos Arquivos**
   - Faça upload de todos os arquivos do projeto
   - Mantenha a estrutura de pastas

3. **Ativar GitHub Pages**
   - Vá em Settings > Pages
   - Source: Deploy from a branch
   - Branch: main (ou master)
   - Folder: / (root)
   - Clique em Save

4. **Acessar o Site**
   - O site estará disponível em: `https://seuusuario.github.io/blog-audio-igrejas`

## ✍️ Como Adicionar Novos Artigos

### Método 1: Editando o JavaScript (Recomendado para início)

1. Abra o arquivo `js/main.js`
2. Localize o array `sampleArticles`
3. Adicione um novo objeto seguindo este formato:

```javascript
{
    id: 4, // Próximo ID disponível
    title: "Título do Seu Artigo",
    excerpt: "Breve descrição do artigo que aparecerá no card",
    category: "Categoria", // Ex: Equipamentos, Tutorial, Técnicas
    date: "2024-06-15", // Formato: YYYY-MM-DD
    readTime: "5 min", // Tempo estimado de leitura
    image: "images/nome-da-imagem.jpg", // Opcional
    slug: "titulo-do-artigo-sem-espacos" // Para URL futura
}
```

### Método 2: Criando Sistema de Artigos em Markdown (Futuro)

Para um sistema mais avançado, você pode:

1. Criar arquivos `.md` na pasta `articles/`
2. Implementar um parser de Markdown
3. Usar um gerador de site estático como Jekyll

## 🎨 Personalização

### Cores
As cores principais podem ser alteradas no arquivo `css/styles.css` na seção `:root`:

```css
:root {
    --primary-color: #2563eb;    /* Azul principal */
    --secondary-color: #f59e0b;  /* Amarelo secundário */
    --accent-color: #10b981;     /* Verde de destaque */
    /* ... outras cores */
}
```

### Fontes
As fontes estão definidas no Google Fonts:
- **Inter**: Fonte principal (textos)
- **Playfair Display**: Fonte de display (títulos)

### Imagens
- **Hero Image**: `images/hero-audio-church.jpg` (1920x1080 recomendado)
- **Artigos**: Adicione imagens na pasta `images/` (400x200 recomendado)

## 📱 Responsividade

O site é totalmente responsivo e funciona em:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: até 767px

## 🔧 Funcionalidades Implementadas

- [x] Design responsivo moderno
- [x] Sistema de navegação com menu mobile
- [x] Hero section com imagem de fundo
- [x] Cards de artigos com hover effects
- [x] Seções sobre e contato
- [x] Footer com links sociais
- [x] Animações suaves
- [x] Scroll suave entre seções
- [x] Modal de preview de artigos

## 📈 Próximos Passos

- [ ] Sistema de busca de artigos
- [ ] Categorias e tags
- [ ] Sistema de comentários
- [ ] Newsletter
- [ ] Modo escuro
- [ ] PWA (Progressive Web App)

## 🆘 Suporte

Para dúvidas ou sugestões:
- Email: contato@audioparaigrejas.com
- WhatsApp: (11) 99999-9999

## 📄 Licença

Este projeto é open source e está disponível sob a licença MIT.

---

**Desenvolvido com ❤️ para a comunidade cristã**

