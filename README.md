## 📱 Exercício Prático: "Catálogo de Filmes"

Criar um aplicativo em React Native que consome uma API REST pública para listar, pesquisar e exibir detalhes de filmes.

### Resultado Esperado

Antes de começar, vamos ver um exemplo prático de como fazer uma requisição a uma API e exibir os dados em uma FlatList. Acesse o seguinte projeto no Expo Snack: [https://snack.expo.dev/@fabricioifc/filmeslistaomdb-exemplo](https://snack.expo.dev/@fabricioifc/filmeslistaomdb-exemplo).

<img src="video/filmes_api_app.gif" alt="Resultado esperado" style="width: 200px;">

### Requisitos Técnicos

- Utilizar **React Native** (com Expo)
- Usar **Hooks** (`useEffect`, `useState`, etc)
- Usar **Expo Router** para navegação entre telas
- Consumir dados via **fetch** ou **Axios**
- Mostrar uma **lista de filmes** em cards ou listas. Pode usar `FlatList` ou `ScrollView`
- Ter uma **tela de detalhes** do filme selecionado, ou seja, ao clicar em um filme, abrir uma nova tela com mais informações
- (Opcional) Permitir **pesquisar** filmes para filtrar a lista
- (Opcional) Favoritar filmes e armazenar localmente (pode usar `AsyncStorage`)

### API Recomendada

Você pode usar a [OMDb API](https://www.omdbapi.com/) (Open Movie Database) — requer chave gratuita. Crie uma conta e obtenha sua chave de API.

**Exemplo de Requisição:**
```
https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=batman
```

**Resposta:**
```json
{
  "Search": [
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Poster": "https://..."
    },
    ...
  ]
}
```

### 📋 Tarefas

#### 1. **Tela Inicial – Lista de Filmes**
- Buscar filmes com uma palavra-chave fixa (ex: “marvel”)
- Mostrar uma lista com pelo menos:
  - Pôster
  - Título
  - Ano de lançamento

#### 2. **Tela de Detalhes**
- Ao clicar em um filme, abrir uma nova tela com:
  - Pôster
  - Título
  - Gênero
  - Diretor
  - Atores
  - Sinopse

(Use a `imdbID` para buscar os detalhes do filme: `https://www.omdbapi.com/?apikey=YOUR_API_KEY&i=tt0372784`)

#### 3. **Barra de Pesquisa** (Opcional)
- Campo de texto para buscar outros filmes dinamicamente

### 💡 Dicas
- Use `FlatList` para exibir os filmes
- Use `useEffect` para carregar dados da API
- Use `React Navigation` para navegação entre telas
- Crie componentes reutilizáveis (ex: `<MovieCard />`)

---

### 📦 Extras (Desafios)
- Adicione carregamento (`ActivityIndicator`), já que a requisição pode demorar
- Trate erros de requisição (exibir mensagem se falhar). Use `try/catch` e a biblioteca `axios` para facilitar o tratamento de erros
- Armazene os filmes favoritos com `AsyncStorage`. No detalhe do filme, adicione um ícone de coração ou estrela para favoritar/desfavoritar

---

### ✅ Critérios de Avaliação
| Critério | Peso |
|---------|------|
| Consumo correto da API | 2 |
| Navegação entre telas | 2 |
| Uso correto de Hooks | 2 |
| Interface funcional e organizada | 2 |
| Código limpo e componentizado | 2 |

### Entrega

- O projeto deve ser enviado via GitHub.
- Crie um repositório público e envie o link.
- Certifique-se de incluir um README com instruções de instalação e execução do projeto.
- O prazo para entrega será definido pelo professor na sala de aula.