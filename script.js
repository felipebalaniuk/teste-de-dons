document.addEventListener("DOMContentLoaded", () => {
    
    // --- Estrutura de Dados ---
    const gifts = {
        "A": { name: "Administração/Liderança", questions: [1, 15, 29, 43, 57, 71], alternatives: [
            "Coordenar atividades",
            "Planejar diversas etapas de um plano de ação",
            "Ajudar a detectar os problemas numa organização e na busca de sua solução",
            "Liderança em diversas áreas da igreja (diáconos, evangelização, música, etc.)",
            "Obs.: É possível diferenciar entre administrar (cuidar do presente) e liderar (ter visão de futuro)"
        ]},
        "B": { name: "Misericórdia", questions: [2, 16, 30, 44, 58, 72], alternatives: [
            "Interessar-se pelo sofrimento e carências dos outros",
            "Ter compaixão e estimular os que estão em desgraça",
            "Auxiliar numa situação que normally provocaria repulsa",
            "Estar sempre pronto a visitar os enfermos, e os fracos na fé",
            "Estar disposto a ajudar aos outros a carregarem a sua carga",
            "São os assistentes sociais da igreja"
        ]},
        "C": { name: "Missionário", questions: [3, 17, 31, 45, 59, 73], alternatives: [
            "Fundar novos trabalhos",
            "Iniciar uma frente missionária",
            "Ter disposição para ir a outra cidade, Estado ou país para alcançar pessoas",
            "Evangelizar"
        ]},
        "D": { name: "Conhecimento", questions: [4, 18, 32, 46, 60, 74], alternatives: [
            "Procurar obter conhecimento e esclarecimentos a respeito da Palavra de Deus",
            "Ter espírito de investigação",
            "Ter facilidade em reconhecer fatos ou verdades chaves das Escrituras",
            "Ter capacidade em perceber e sistematizar os grandes fatos da Bíblia",
            "Em geral esse dom está associado ao dom da profecia, do ensino"
        ]},
        "E": { name: "Serviço/Diaconia", questions: [5, 19, 33, 47, 61, 75], alternatives: [
            "Descobrir as necessidades a serem supridas na igreja",
            "Estar à disposição para fazer coisas não relacionadas diretamente à Palavra e à oração",
            "Serviço de som/vídeo, portaria da igreja, introdução durante os cultos",
            "Auxiliar na retaguarda de eventos da igreja",
            "É o verdadeiro diaconato"
        ]},
        "F": { name: "Discernimento de Espírito", questions: [6, 20, 34, 48, 62, 76], alternatives: [
            "Ter facilidade em detectar a falsidade e a verdade",
            "Conseguir sentir entre sintomas e causas de uma ação",
            "Ser altamente intuitivo",
            "Estar disposto a alertar a igreja quando perceber que alguma decisão oferece risco",
            "Em geral esse dom é auxiliar de outros dons"
        ]},
        "G": { name: "Evangelista", questions: [7, 21, 35, 49, 63, 77], alternatives: [
            "Evangelizar (pessoal, frentes missionárias etc)",
            "Expor o Evangelho levando os não crentes à Salvação",
            "Se preocupar com o crescimento espiritual das pessoas"
        ]},
        "H": { name: "Aconselhamento", questions: [8, 22, 36, 50, 64, 78], alternatives: [
            "Aconselhamento das pessoas para que tenham seus problemas e decisões resolvidas",
            "Ajudar, confortar e encorajar alguém em pecado, para que tenha vitória na vida",
            "Inspirar outros à ação",
            "Despertar novo interesse espiritual nas pessoas"
        ]},
        "I": { name: "Fé", questions: [9, 23, 37, 51, 65, 79], alternatives: [
            "Ter a capacidade de ver algo que precisa ser feito e crer que Deus o fará, mesmo parecendo impossível",
            "Ter facilidade de crer em Deus, em situações que normalmente não se creria",
            "Ter uma fé que move montanhas",
            "Ser útil para motivar as pessoas e a igreja em ocasiões de decisões e grandes desafios"
        ]},
        "J": { name: "Ensino", questions: [10, 24, 38, 52, 66, 80], alternatives: [
            "Obter informações para ESCLARECER A VERDADE",
            "Explanar e transmitir os DETALHES ESPECÍFICOS de um assunto",
            "Esforçar-se para que OUTROS APRENDAM, ensinando a Palavra de Deus",
            "Professor na E.B.D., Escola de Treinamento, Frentes Missionárias"
        ]},
        "L": { name: "Pastor-Mestre", questions: [11, 25, 39, 53, 67, 81], alternatives: [
            "Orientar o povo de Deus quanto ao caminho a seguir no dia-a-dia",
            "Aconselhar e orientar pessoas que estão confusas ou precisando de decisão",
            "Promover alimentação ao povo de Deus ministrando o ensino da Palavra",
            "Socorrer o povo Deus em suas necessidades espirituais",
            "Lembrete: Aspecto básico do trabalho pastoral: alimentação e proteção"
        ]},
        "M": { name: "Profeta", questions: [12, 26, 40, 54, 68, 82], alternatives: [
            "Pregação",
            "Admoestação ao povo quanto ao caminho de Deus a ser seguido",
            "Em horas de decisões importantes, auxiliar o povo a descobrir o caminho de Deus",
            "Lembrete: Enquanto o profeta convence, o mestre explica"
        ]},
        "N": { name: "Repartir", questions: [13, 27, 41, 55, 69, 83], alternatives: [
            "Procurar conseguir recursos financeiros e materiais para dar e repartir com os outros",
            "Contribuição para capacitar outros que farão coisas que você mesmo não poderia fazer",
            "Sentir-se realizado em ver que com sua contribuição um objetivo é alcançado"
        ]},
        "O": { name: "Sabedoria", questions: [14, 28, 42, 56, 70, 84], alternatives: [
            "Ter facilidade em perceber e distingüir as verdadeiras causas dos sintomas de uma situação",
            "Ter sempre uma palavra sábia, sensata, moderada para as situações difíceis",
            "Ter a capacidade de pôr o conhecimento para funcionar",
            "Aplicar o conhecimento a uma situação específica",
            "Em reuniões onde haja necessidade de decisão, procurar respostas práticas e sábias"
        ]}
    };

    const allQuestions = [
        { text: "Gosto de organizar idéias, pessoas, coisas e o tempo, tendo em vista um serviço mais efetivo e produtivo para o Senhor.", gift: "A" },
        { text: "Tenho alegria em trabalhar com as pessoas ignoradas ou desconhecidas da maioria.", gift: "B" },
        { text: "Adapto-me facilmente a uma situação ou ambiente diferente.", gift: "C" },
        { text: "Tenho facilidade em selecionar e relacionar entre si fatos importantes das Escrituras.", gift: "D" },
        { text: "Tenho prazer em ajudar os líderes de maior responsabilidade, aliviando-os de tarefas menores de seu trabalho.", gift: "E" },
        { text: "Eu percebo sem dificuldade a diferença entre o que é certo e o que é errado.", gift: "F" },
        { text: "Gosto de levar outras pessoas a uma decisão relacionada com a salvação.", gift: "G" },
        { text: "Tenho facilidade em encorajar e animar as pessoas indecisas e cheias de problemas.", gift: "H" },
        { text: "Quando percebo a vontade de Deus, posso ir em frente, apesar da oposição ou falta de apoio.", gift: "I" },
        { text: "Me sinto realizado com a oportunidade de ajudar as pessoas a conhecer os detalhes sobre um assunto complicado.", gift: "J" },
        { text: "Gostaria de me envolver em atividades que promovam o crescimento de um grupo de crentes levando-os ao amadurecimento na vida cristã.", gift: "L" },
        { text: "Sinto alegria em comunicar a vontade de Deus e faço de maneira contagiante, persuasiva e clara, tendo certeza de que falo da parte de Deus.", gift: "M" },
        { text: "Sonho em ter mais dinheiro para poder repartir com as pessoas necessitadas.", gift: "N" },
        { text: "As minhas sugestões às pessoas para ajudá-las em suas decisões geralmente dão certo.", gift: "O" },
        { text: "Tenho facilidade em fazer planos de ação para que, com outras pessoas, possamos atingir um objetivo.", gift: "A" },
        { text: "Gosto de visitar hospitais ou lares de pessoas necessitadas e me sinto abençoado com isso.", gift: "B" },
        { text: "Eu fico empolgado com o sucesso do trabalho missionário em outros Estados e no estrangeiro.", gift: "C" },
        { text: "Gosto de analisar bem todos os fatos até entendê-los.", gift: "D" },
        { text: "Fico à vontade quando posso ser útil em fazer certas coisas auxiliares para ajudar quem é líder (arrumar cadeiras, transportar objetos, etc).", gift: "E" },
        { text: "Posso constatar a falsidade antes que ela se torne evidente às outras pessoas.", gift: "F" },
        { text: "Tenho facilidade em iniciar uma conversa com uma pessoa estranha e levá-la ao conhecimento do evangelho.", gift: "G" },
        { text: "Tenho facilidade em entender os problemas dos outros e apontar-lhes os rumos de possíveis soluções.", gift: "H" },
        { text: "Tenho convicção da presença e atuação divina em minha vida diariamente.", gift: "I" },
        { text: "Procuro explicar as questões complicadas da Bíblia de modo que outros me entendam sem dificuldade.", gift: "J" },
        { text: "Tenho prazer em ser útil na recuperação espiritual de crentes que se afastaram do Senhor e da igreja.", gift: "L" },
        { text: "Tenho alegria se sou solicitado a pregar (nos lares, no templo, ao ar livre etc).", gift: "M" },
        { text: "Quando ajudo uma pessoa necessitada, deixo de lado qualquer pensamento sobre vantagens materiais ou espirituais.", gift: "N" },
        { text: "De várias alternativas, escolho a opção que normalmente funciona.", gift: "O" },
        { text: "Quando alguma organização a que pertenço tem algum problema a enfrentar, intimamente procuro pensar nas possíveis soluções.", gift: "A" },
        { text: "Sinto-me realizado quando posso fazer algo por uma pessoa doente ou em necessidade.", gift: "B" },
        { text: "Tenho prazer em cooperar nos trabalhos pioneiros de minha igreja, como iniciar um novo ponto de pregação.", gift: "C" },
        { text: "Gosto de analisar e entender bem todas as coisas, antes de aceitá-las.", gift: "D" },
        { text: "Em ocasiões de emergência tenho prazer em ajudar os líderes de maior responsabilidade para que as coisas se normalizem.", gift: "E" },
        { text: "Quando alguém está conversando comigo, geralmente percebo se não está dizendo a verdade.", gift: "F" },
        { text: "Gosto de cooperar com os trabalhos de evangelização de minha igreja (séries de conferências, pregações ao ar livre, etc).", gift: "G" },
        { text: "Aceito sem dificuldades as impertinências e os erros das pessoas, crendo que uma conversa pessoal com elas é o melhor remédio.", gift: "H" },
        { text: "Mesmo em tempos difíceis, tenho convicção na provisão e ajuda contínua de Deus.", gift: "I" },
        { text: "Quando vou explicar uma coisa a uma pessoa, gosto de me colocar no lugar dela para sentir suas dificuldades em aprender.", gift: "J" },
        { text: "Tenho compaixão pelos crentes que vacilam na fé, e se pudesse, procuraria tomar providências para a sua recuperação.", gift: "L" },
        { text: "Acredito que a melhor maneira de levar o povo de Deus a uma vida mais dedicada é através da admoestação pela pregação pública da Palavra de Deus.", gift: "M" },
        { text: "Quando há alguma necessidade financeira ou material... logo penso em contribuir com minhas posses para ajudar.", gift: "N" },
        { text: "Sempre que uma pessoa está com problemas, a solução me vem de Deus através de um versículo da Bíblia.", gift: "O" },
        { text: "Tenho facilidade em descobrir as falhas de uma organização e de elaborar um plano de ação para a devida correção.", gift: "A" },
        { text: "Sinto compaixão quando vejo alguma pessoa doente ou com problemas.", gift: "B" },
        { text: "Se Deus me chamasse, gostaria de pregar o evangelho num local distante.", gift: "C" },
        { text: "Me sinto incomodado enquanto não entendo completamente um texto bíblico, indo atrás de informações.", gift: "D" },
        { text: "Tenho prazer em servir de introdutor, auxiliar a manter a ordem ou realizar qualquer trabalho auxiliar para que a obra de Deus se realize.", gift: "E" },
        { text: "Sinto quando as coisas não vão dar certo.", gift: "F" },
        { text: "A ênfase de minha mensagem ou conversas tem sido a salvação em Cristo.", gift: "G" },
        { text: "Quando alguma pessoa está em pecado, a ênfase de minha preocupação é ajudá-la, ainda que perceba que outros a critiquem.", gift: "H" },
        { text: "Vários problemas sem solução já foram resolvidos porque eu cri que Deus os resolveria.", gift: "I" },
        { text: "Sinto necessidade de entender bem as coisas para poder explicá-las aos outros.", gift: "J" },
        { text: "Tenho prazer em alimentar os crentes com a Palavra de Deus.", gift: "L" },
        { text: "Quando há algum problema na igreja, acredito que somente pela pregação sobre o assunto, ele pode ser resolvido.", gift: "M" },
        { text: "Tenho a tendência de contribuir para a obra de Deus com um percentual maior do que exigido.", gift: "N" },
        { text: "Quando leio um texto bíblico geralmente penso em suas lições práticas.", gift: "O" },
        { text: "Consigo imaginar um evento que precisa ser realizado, prevendo os problemas a serem enfrentados e buscando formas de resolvê-los.", gift: "A" },
        { text: "Identifico-me com as pessoas que estão sofrendo, e desejo ajudá-las no processo de restauração.", gift: "B" },
        { text: "Gosto de iniciar trabalhos novos na área de evangelização.", gift: "C" },
        { text: "Me interesso em saber como as coisas funcionam.", gift: "D" },
        { text: "Tenho prazer em providenciar certos detalhes (anotar nomes, controlar som/vídeo, arrumar cadeiras, etc).", gift: "E" },
        { text: "Tenho facilidade em perceber se uma atitude é certa ou errada e geralmente isso se confirma.", gift: "F" },
        { text: "Busco oportunidades no relacionamento com descrentes para evangelizá-los.", gift: "G" },
        { text: "Para mim o potencial das pessoas tem mais valor do que seus atos.", gift: "H" },
        { text: "Já fui surpreendido com respostas imediatas às minhas orações.", gift: "I" },
        { text: "Quando assisto uma aula dada por alguém que não sabe ensinar direito, fico pensando numa maneira diferente...", gift: "J" },
        { text: "Sinto prazer em orientar os crentes como um pastor às suas ovelhas.", gift: "L" },
        { text: "Sinto-me responsável por confrontar as pessoas com a verdade.", gift: "M" },
        { text: "Administro as minhas finanças e bens para que possa contribuir mais para a obra de Deus.", gift: "N" },
        { text: "Penso em soluções de problemas que normalmente as pessoas não pensariam.", gift: "O" },
        { text: "Tenho interesse em entender como as organizações funcionam.", gift: "A" },
        { text: "Tenho compaixão pelas pessoas consideradas inúteis, sem esperança ou que estão sofrendo.", gift: "B" },
        { text: "Havendo oportunidade, estou disposto a me oferecer para participar ativamente no começo de uma nova igreja.", gift: "C" },
        { text: "Gosto de entender bem as questões complicadas da Bíblia.", gift: "D" },
        { text: "Ainda que a pregação da Palavra seja importante, creio que meu papel é ajudar nos detalhes de bastidores ou na retaguarda.", gift: "E" },
        { text: "Posso discernir com certa precisão o caráter de uma pessoa baseado apenas nas primeiras impressões que tenho dela.", gift: "F" },
        { text: "Preocupo-me com a salvação de meus parentes, amigos, vizinhos e colegas.", gift: "G" },
        { text: "Gosto de encorajar e fortalecer as pessoas que estão abatidas e tristes.", gift: "H" },
        { text: "Em situações onde o sucesso não pode ser garantido somente pelo esforço humano, eu confio na providência divina.", gift: "I" },
        { text: "Se tiver oportunidade, gostaria de ensinar a Bíblia de modo que os ouvintes tenham o desejo de estudá-la mais.", gift: "J" },
        { text: "Se pudesse, gostaria de investir tempo nutrindo e cuidando dos crentes que estão em processo de crescimento espiritual.", gift: "L" },
        { text: "Quando percebo uma situação de pecado, sinto-me compelido a denunciá-lo e desafiar as pessoas envolvidas, ao arrependimento.", gift: "M" },
        { text: "Acredito que o Senhor tem me dado recursos em abundância para que eu possa contribuir mais para a sua obra.", gift: "N" },
        { text: "Tenho facilidade em encontrar soluções simples e práticas no meio de discussões ou de situações de conflito.", gift: "O" }
    ];

    const curiosities = [
        "Você sabia? O dom de 'Serviço' também é conhecido como 'Diaconia'!",
        "Curiosidade: O dom de 'Administração' foca em 'cuidar do presente', enquanto 'Liderança' foca em 'abrir janelas para o futuro'!",
        "Dica: O dom de 'Conhecimento' geralmente é um dom auxiliar, associado ao dom da 'Profecia' ou do 'Ensino'.",
        "Você sabia? O trabalho do 'Pastor-Mestre' tem dois aspectos básicos: alimentação e proteção."
    ];

    // --- Variáveis de Estado ---
    let currentQuestionIndex = 0;
    let scores = {};
    const TOTAL_QUESTIONS = allQuestions.length;
    const INTERSTITIAL_FREQUENCY = 12; // Mostra uma curiosidade a cada 12 perguntas

    // --- Elementos do DOM ---
    const screens = document.querySelectorAll(".screen");
    const welcomeScreen = document.getElementById("welcome-screen");
    const testScreen = document.getElementById("test-screen");
    const interstitialScreen = document.getElementById("interstitial-screen");
    const resultsScreen = document.getElementById("results-screen");

    const startBtn = document.getElementById("start-btn");
    const continueBtn = document.getElementById("continue-btn");
    const restartBtn = document.getElementById("restart-btn");
    const answerButtons = document.querySelectorAll(".answer-btn");

    const progressBar = document.getElementById("progress-bar");
    const questionCounter = document.getElementById("question-counter");
    const questionText = document.getElementById("question-text");
    const curiosityText = document.getElementById("curiosity-text");

    const highlightedGiftsContainer = document.getElementById("highlighted-gifts");
    const allGiftsContainer = document.getElementById("all-gifts-details");

    // --- Funções ---

    function initializeScores() {
        scores = {};
        for (const key in gifts) {
            scores[key] = 0;
        }
    }

    function showScreen(screenToShow) {
        screens.forEach(screen => screen.classList.remove("active"));
        screenToShow.classList.add("active");
    }

    function startGame() {
        currentQuestionIndex = 0;
        initializeScores();
        showScreen(testScreen);
        displayQuestion();
    }

    function displayQuestion() {
        if (currentQuestionIndex < TOTAL_QUESTIONS) {
            const question = allQuestions[currentQuestionIndex];
            questionText.textContent = question.text;
            questionCounter.textContent = `Pergunta ${currentQuestionIndex + 1} de ${TOTAL_QUESTIONS}`;
            
            const progressPercent = ((currentQuestionIndex) / TOTAL_QUESTIONS) * 100;
            progressBar.style.width = `${progressPercent}%`;
            
            showScreen(testScreen);
        } else {
            displayResults();
        }
    }

    function handleAnswer(e) {
        const value = parseInt(e.target.dataset.value);
        const currentQuestion = allQuestions[currentQuestionIndex];
        const giftKey = currentQuestion.gift;

        scores[giftKey] += value;
        currentQuestionIndex++;

        if (currentQuestionIndex % INTERSTITIAL_FREQUENCY === 0 && currentQuestionIndex < TOTAL_QUESTIONS) {
            displayInterstitial();
        } else if (currentQuestionIndex >= TOTAL_QUESTIONS) {
            displayResults();
        } else {
            displayQuestion();
        }
    }

    function displayInterstitial() {
        const curiosityIndex = (currentQuestionIndex / INTERSTITIAL_FREQUENCY - 1) % curiosities.length;
        curiosityText.textContent = curiosities[curiosityIndex];
        showScreen(interstitialScreen);
    }

    function displayResults() {
        // Atualiza a barra de progresso para 100%
        progressBar.style.width = `100%`;

        highlightedGiftsContainer.innerHTML = "";
        allGiftsContainer.innerHTML = "";

        // Ordena os dons pela pontuação, do maior para o menor
        const sortedGifts = Object.keys(gifts).sort((a, b) => scores[b] - scores[a]);

        sortedGifts.forEach(key => {
            const gift = gifts[key];
            const score = scores[key];
            const maxScore = gift.questions.length * 4; // 6 perguntas * 4 pontos
            const isHighlighted = score >= 17;

            const giftCard = document.createElement("div");
            giftCard.className = "gift-card";
            if (isHighlighted) {
                giftCard.classList.add("highlighted");
            }

            let alternativesHTML = "<ul>";
            gift.alternatives.forEach(alt => {
                alternativesHTML += `<li>${alt}</li>`;
            });
            alternativesHTML += "</ul>";

            giftCard.innerHTML = `
                <div class="gift-card-header">
                    <h3>${gift.name}</h3>
                    <span class="gift-score ${isHighlighted ? 'highlighted-score' : ''}">${score} / ${maxScore}</span>
                </div>
                <div class="gift-details">
                    <p><strong>Alternativas práticas para este dom:</strong></p>
                    ${alternativesHTML}
                </div>
            `;

            giftCard.addEventListener("click", () => {
                giftCard.classList.toggle("open");
            });

            if (isHighlighted) {
                highlightedGiftsContainer.appendChild(giftCard.cloneNode(true));
                
                highlightedGiftsContainer.lastChild.addEventListener("click", (e) => {
                     e.currentTarget.classList.toggle("open");
                });
            }
            allGiftsContainer.appendChild(giftCard);
        });
        
        if(highlightedGiftsContainer.innerHTML === "") {
            highlightedGiftsContainer.innerHTML = "<p>Nenhum dom atingiu a pontuação de 17. Veja todos os seus resultados abaixo e clique para mais detalhes.</p>"
        }

        showScreen(resultsScreen);
    }

    function restartGame() {
        showScreen(welcomeScreen);
    }

    // --- Inicialização e Event Listeners ---
    startBtn.addEventListener("click", startGame);
    continueBtn.addEventListener("click", displayQuestion);
    restartBtn.addEventListener("click", restartGame);
    answerButtons.forEach(button => {
        button.addEventListener("click", handleAnswer);
    });

    // Inicia o app
    initializeScores();
    showScreen(welcomeScreen);
});