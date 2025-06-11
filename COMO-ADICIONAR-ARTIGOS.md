# 📝 Guia Prático: Como Adicionar Novos Artigos

Este guia mostra como adicionar novos artigos ao seu blog "Áudio para Igrejas" de forma simples e eficiente.

## 🎯 Método Recomendado (Editando JavaScript)

### Passo 1: Abrir o arquivo JavaScript

1. Navegue até a pasta do projeto: `blog-audio-igrejas/js/`
2. Abra o arquivo `main.js` em qualquer editor de texto

### Passo 2: Localizar a seção de artigos

Procure por esta linha no código:
```javascript
const sampleArticles = [
```

### Passo 3: Adicionar um novo artigo

Adicione um novo objeto ao array seguindo este formato:

```javascript
const sampleArticles = [
    // Artigos existentes...
    
    // SEU NOVO ARTIGO AQUI:
    {
        id: 4, // Próximo número disponível
        title: "Título do Seu Artigo",
        excerpt: "Breve descrição que aparecerá no card do artigo. Mantenha entre 100-150 caracteres para melhor visualização.",
        category: "Categoria", // Opções: Equipamentos, Tutorial, Técnicas, Dicas
        date: "2024-06-15", // Formato: YYYY-MM-DD
        readTime: "7 min", // Tempo estimado de leitura
        image: "images/nome-da-imagem.jpg", // Opcional - se não tiver, será usado placeholder
        slug: "titulo-do-artigo-sem-espacos" // Para URL futura (sem acentos, espaços ou caracteres especiais)
    }
];
```

### Passo 4: Exemplo prático

```javascript
{
    id: 4,
    title: "Escolhendo o Microfone Ideal para Pregação",
    excerpt: "Descubra as características essenciais que um microfone deve ter para garantir clareza e qualidade durante as pregações.",
    category: "Equipamentos",
    date: "2024-06-15",
    readTime: "6 min",
    image: "images/microfone-pregacao.jpg",
    slug: "escolhendo-microfone-ideal-pregacao"
}
```

### Passo 5: Salvar e testar

1. Salve o arquivo `main.js`
2. Abra o `index.html` no navegador
3. Verifique se o novo artigo aparece na seção "Artigos Recentes"

## 🖼️ Adicionando Imagens aos Artigos

### Opção 1: Com imagem personalizada

1. **Adicione a imagem**: Coloque sua imagem na pasta `images/`
2. **Nomeação**: Use nomes descritivos sem espaços (ex: `microfone-pregacao.jpg`)
3. **Tamanho recomendado**: 400x200 pixels para melhor qualidade
4. **Formatos aceitos**: JPG, PNG, WebP

### Opção 2: Sem imagem (placeholder automático)

Se você não especificar uma imagem ou a imagem não for encontrada, o sistema automaticamente usará um placeholder azul com o texto "Áudio Igreja".

## 📋 Categorias Disponíveis

Use uma dessas categorias para manter a organização:

- **Equipamentos**: Reviews, comparações, recomendações de gear
- **Tutorial**: Guias passo a passo, configurações
- **Técnicas**: Dicas de mixagem, equalização, processamento
- **Dicas**: Conselhos rápidos, truques, boas práticas

## 🎨 Personalizando Cores das Categorias

As cores das categorias são definidas automaticamente no CSS. Se quiser personalizar:

1. Abra `css/styles.css`
2. Procure por `.article-category`
3. Adicione regras específicas:

```css
.article-category {
    /* Cor padrão */
    background-color: var(--primary-color);
}

/* Cores específicas por categoria */
.article-category:contains("Equipamentos") {
    background-color: #10b981; /* Verde */
}

.article-category:contains("Tutorial") {
    background-color: #f59e0b; /* Amarelo */
}

.article-category:contains("Técnicas") {
    background-color: #8b5cf6; /* Roxo */
}
```

## 🔄 Atualizando o Blog no GitHub Pages

Após adicionar novos artigos:

1. **Commit as mudanças**:
   ```bash
   git add .
   git commit -m "Adicionar novo artigo: [Título do Artigo]"
   git push origin main
   ```

2. **Aguardar deploy**: O GitHub Pages atualizará automaticamente em alguns minutos

## 📱 Testando em Diferentes Dispositivos

Sempre teste seus novos artigos em:

- **Desktop**: Tela grande (1200px+)
- **Tablet**: Tela média (768px-1199px)  
- **Mobile**: Tela pequena (até 767px)

### Dica de teste rápido:
1. Abra o site no navegador
2. Pressione F12 para abrir as ferramentas de desenvolvedor
3. Clique no ícone de dispositivo móvel
4. Teste diferentes tamanhos de tela

## 🚀 Funcionalidades Avançadas (Futuro)

### Sistema de Busca
Para implementar busca de artigos, você pode usar a função já preparada:

```javascript
// Buscar artigos por termo
const restoreFunction = BlogApp.searchArticles("microfone");

// Restaurar todos os artigos
restoreFunction();
```

### Carregamento Dinâmico
O sistema já suporta paginação. Para ativar o botão "Carregar Mais":

1. Adicione mais de 6 artigos
2. O botão aparecerá automaticamente
3. Carrega 6 artigos por vez

## ❓ Solução de Problemas

### Artigo não aparece
- ✅ Verifique se o ID é único
- ✅ Confirme que a sintaxe JSON está correta
- ✅ Verifique se há vírgulas em todos os lugares necessários

### Imagem não carrega
- ✅ Confirme que o arquivo existe na pasta `images/`
- ✅ Verifique se o nome do arquivo está correto (case-sensitive)
- ✅ Use apenas letras, números e hífens no nome

### Layout quebrado
- ✅ Valide o HTML em um validador online
- ✅ Verifique o console do navegador (F12) para erros
- ✅ Confirme que todos os arquivos CSS e JS estão carregando

## 📞 Suporte

Se precisar de ajuda:
- 📧 Email: contato@audioparaigrejas.com
- 💬 WhatsApp: (11) 99999-9999

---

**💡 Dica**: Mantenha um backup do arquivo `main.js` antes de fazer grandes mudanças!

