
import amigosImg from "../images/amigos-img.jpg"
import gptLanguagesImg from "../images/gptlanguages-img.jpg"
import restaurantBotImg from "../images/restaurant-img.jpg"
import textSummaryImg from "../images/text-summary.jpg"

const projectData = [
    {
        name: "Large text summary and analyze",
        url: "https://summary.archipelagosolutions.eu",
        git: "https://github.com/DominikTenerife/text-summarize-front",
        image: textSummaryImg,
        description: "Large text summary app. Backend: ExpressJS, Langchain, Postgres vector database for embeddings. Frontend: React. Deployed to Azure.",
        id: 8
    },

    {
        name: "Restaurant AI Assistant",
        url: "https://restaurant.archipelagosolutions.eu",
        git: "https://github.com/DominikTenerife/restaurant-bot.git",
        image: restaurantBotImg,
        description: "Smart restaurant AI Assistant fuelled by own dataset. Backend: ExpressJS, Langchain, vector database for embeddings. Frontend: React. Deployed to Azure cloud.",
        id: 5
    },
    {
        name: "Amigos",
        url: "https://amigos.archipelagosolutions.eu",
        git: "https://github.com/DominikTenerife/amigos-front.git",
        image: amigosImg,
        description: "Converse in foreign language with interesting AI characters in different situations and context. Backend: ExpressJS + OPENAI. Frontend: React.  PWA deployed to Azure.",
        id: 6

    },
    {
        name: "GPT Languages",
        url: "https://gptlanguages.archipelagosolutions.eu",
        git: "https://github.com/DominikTenerife/gpt-languages.git",
        image: gptLanguagesImg,
        description: "Learn foreign language with AI support. Backend: Python (Flask) + Mistral AI API. Frontend: React.  PWA deployed to Azure.",
        id: 7

    },
   

    
]

export default projectData



