document.addEventListener("DOMContentLoaded", () => {
    
    // --- Estrutura de Dados ---
    const gifts = {
        "1": { name: "Palavra da Sabedoria", questions: [1, 21, 41, 61, 81, 101], alternatives: [
            "Instrução proferida não pela capacidade humana, mas pela ação do Espírito.",
            "Capacitação para testemunhar em situações de crise e perseguição.",
            "Sabedoria de Deus revelada pelo Espírito Santo (I Co 2.4,5)."
        ]},
        "2": { name: "Palavra da Ciência (Conhecimento)", questions: [2, 22, 42, 62, 82, 102], alternatives: [
            "Conhecimento profundo da Palavra de Deus.",
            "Capacidade de transmitir esse conhecimento aos outros.",
            "Compreensão de fatos bíblicos para edificação."
        ]},
        "3": { name: "Fé", questions: [3, 23, 43, 63, 83, 103], alternatives: [
            "Fé que capacita o crente a fazer grandes coisas para Deus.",
            "Não é apenas a fé para salvação, mas uma confiança sobrenatural.",
            "Crer na intervenção de Deus mesmo em situações impossíveis."
        ]},
        "4": { name: "Dons de Curar", questions: [4, 24, 44, 64, 84, 104], alternatives: [
            "Intervenção sobrenatural de Deus para restaurar a saúde do corpo.",
            "Atuação por meio de um agente humano para a cura física.",
            "Oração pelos enfermos com fé na restauração divina."
        ]},
        "5": { name: "Operação de Milagres", questions: [5, 25, 45, 65, 85, 105], alternatives: [
            "Demonstração de poder que opera fora das leis naturais.",
            "Realização de feitos que autenticam a mensagem de Deus.",
            "Intervenção divina poderosa em situações terrenas."
        ]},
        "6": { name: "Profecia", questions: [6, 26, 46, 66, 86, 106], alternatives: [
            "Apresentar a mensagem de Deus para edificação, exortação e consolação.",
            "Função mais de pregador/proclamador do que de prever o futuro.",
            "Comunicar a vontade de Deus de forma clara à igreja."
        ]},
        "7": { name: "Discernimento de Espíritos", questions: [7, 27, 47, 67, 87, 107], alternatives: [
            "Capacidade dada por Deus para distinguir o falso do verdadeiro.",
            "Perceber a origem espiritual de uma manifestação ou ensino.",
            "Proteção da igreja contra falsos profetas ou doutrinas."
        ]},
        "8": { name: "Variedade de Línguas", questions: [8, 28, 48, 68, 88, 108], alternatives: [
            "Capacitação para proclamar verdades de Deus em idiomas não aprendidos.",
            "Oração no espírito para edificação pessoal.",
            "Sinal para os descrentes (quando há entendimento/tradução)."
        ]},
        "9": { name: "Interpretação de Línguas", questions: [9, 29, 49, 69, 89, 109], alternatives: [
            "Capacitação para interpretar a mensagem dada em línguas.",
            "Não depende de aprendizagem intelectual, é dado por Deus.",
            "Deve acompanhar o dom de línguas no culto público para que haja edificação."
        ]},
        "10": { name: "Apóstolos (Missionário)", questions: [10, 30, 50, 70, 90, 110], alternatives: [
            "Significa 'mensageiro' ou 'enviado'.",
            "Ministério que não se limita a uma igreja local, mas estende-se a várias.",
            "Fundação de novas igrejas e expansão do evangelho (como Barnabé, Silas, etc)."
        ]},
        "11": { name: "Mestres (Ensino)", questions: [11, 31, 51, 71, 91, 111], alternatives: [
            "Capacidade especial de ensinar a Palavra de Deus.",
            "Instruir especialmente os novos decididos na fé.",
            "Esclarecer a doutrina bíblica com precisão."
        ]},
        "12": { name: "Socorros", questions: [12, 32, 52, 72, 92, 112], alternatives: [
            "Capacitação para ajudar pastores e líderes, dividindo responsabilidades.",
            "Prestar auxílio direto aos oprimidos, órfãos e viúvas.",
            "Apoio prático para que a obra de Deus avance."
        ]},
        "13": { name: "Governos (Administração)", questions: [13, 33, 53, 73, 93, 113], alternatives: [
            "Capacidade de administrar a igreja de Cristo.",
            "Habilidade dada por Deus para organização e direção.",
            "Liderança focada na boa gestão do corpo de Cristo."
        ]},
        "14": { name: "Ministério (Serviço)", questions: [14, 34, 54, 74, 94, 114], alternatives: [
            "Caracteriza-se essencialmente pelo servir (Diakonia).",
            "Disposição para tarefas práticas e úteis.",
            "Mesma raiz da palavra 'diácono': servir à mesa ou às necessidades."
        ]},
        "15": { name: "Exortação", questions: [15, 35, 55, 75, 95, 115], alternatives: [
            "Envolve exortar, mas também confortar e encorajar.",
            "Colocar-se ao lado de alguém para compreender e simpatizar com seu problema.",
            "Ensinar o modelo de comportamento cristão."
        ]},
        "16": { name: "Beneficência (Repartir)", questions: [16, 36, 56, 76, 96, 116], alternatives: [
            "Desejo de usar bens materiais para atender às necessidades do próximo.",
            "Contribuir com generosidade e alegria.",
            "Repartir recursos para o avanço do Reino e ajuda aos santos."
        ]},
        "17": { name: "Presidência (Liderança)", questions: [17, 37, 57, 77, 97, 117], alternatives: [
            "Significa 'aquele que está de pé, à frente'.",
            "Liderança exercida na igreja com zelo.",
            "Capacidade dada por Deus para dirigir o povo."
        ]},
        "18": { name: "Misericórdia", questions: [18, 38, 58, 78, 98, 118], alternatives: [
            "Simpatizar com pessoas pobres, tristes e aflitas.",
            "Sentir a dor do outro e sofrer juntamente com ele.",
            "Dedicação especial a órfãos, viúvas e oprimidos."
        ]},
        "19": { name: "Evangelistas", questions: [19, 39, 59, 79, 99, 119], alternatives: [
            "Significa 'anunciador de boas-novas'.",
            "Capacidade especial de expor a mensagem da salvação.",
            "Levar descrentes à decisão por Cristo."
        ]},
        "20": { name: "Pastores", questions: [20, 40, 60, 80, 100, 120], alternatives: [
            "Significa 'protetor' e 'apascentador'.",
            "Cuidar, alimentar e proteger o rebanho local.",
            "Acompanhar a vida espiritual dos crentes."
        ]}
    };

    const allQuestions = [
        { text: "Geralmente dão certo as sugestões que dou às pessoas para ajudá-las", gift: "1" },
        { text: "Tenho facilidade em selecionar fatos das Escrituras e relacioná-los entre si", gift: "2" },
        { text: "Quando percebo a vontade de Deus, mesmo que haja oposição ou falta de apoio, sigo em frente com convicção", gift: "3" },
        { text: "Realizo-me ao orar regularmente pela cura dos doentes", gift: "4" },
        { text: "Sinto-me realizado em orar por coisas que contrariam as leis naturais", gift: "5" },
        { text: "Realizo-me ao comunicar a vontade de Deus às pessoas e faço com convicção, decisivamente e de forma clara", gift: "6" },
        { text: "Percebo com facilidade a diferença entre o certo e o errado", gift: "7" },
        { text: "Já tive experiência de falar uma língua que nunca aprendi antes e Deus me usou para proclamar sua palavra", gift: "8" },
        { text: "Sinto-me realizado ao receber a interpretação de uma mensagem falada em línguas", gift: "9" },
        { text: "Sinto-me realizado ao engajar-me nos problemas de outras igrejas procurando contribuir para a solução de problemas", gift: "10" },
        { text: "Sinto-me realizado com a oportunidade de ajudar as pessoas e conhecer os detalhes sobre um assunto muito complicado", gift: "11" },
        { text: "Sinto-me realizado em trabalhar nos bastidores, no apoio a pessoas que têm um ministério público", gift: "12" },
        { text: "Gosto de organizar idéias, pessoas, coisas e tempo, para um serviço mais efetivo e produtivo", gift: "13" },
        { text: "Sinto-me realizado em aceitar serviços pequenos e aparentemente insignificantes na igreja", gift: "14" },
        { text: "Tenho facilidade em encorajar e animar as pessoas em problemas e dúvidas", gift: "15" },
        { text: "Penso em ter mais recursos financeiros para ajudar os mais necessitados", gift: "16" },
        { text: "Sinto-me realizado em liderar pessoas e levá-las a se engajarem na obra", gift: "17" },
        { text: "Tenho alegria em trabalhar com pessoas esquecidas e marginalizadas", gift: "18" },
        { text: "Gosto de levar as pessoas a uma decisão por Cristo", gift: "19" },
        { text: "Gostaria de me envolver em atividades que promovam o crescimento das pessoas e seu amadurecimento", gift: "20" },
        { text: "Quando há diversas alternativas escolho a opção que normalmente funciona", gift: "1" },
        { text: "Não fico contente até analisar e entender todos os fatos", gift: "2" },
        { text: "Diariamente estou convicto da plena presença e atuação de Deus em minha vida", gift: "3" },
        { text: "Devo me envolver mais em servir a Deus como instrumento de cura para outras pessoas", gift: "4" },
        { text: "Sinto que devo me envolver mais em ter experiências de ser usado por Deus para a realização de milagres e maravilhas", gift: "5" },
        { text: "Fico contente quando sou solicitado a pregar (não escolho o lugar)", gift: "6" },
        { text: "Posso detectar a falsidade antes que ela se torne evidente em outras pessoas", gift: "7" },
        { text: "Creio que devo me envolver mais em anunciar por meio de línguas que nunca aprendi antes para alcançar os perdidos", gift: "8" },
        { text: "Creio que tenho de me envolver mais na interpretação de mensagens proclamadas em línguas", gift: "9" },
        { text: "Sinto que devo me envolver na fundação de novas igrejas contribuindo para a salvação de pessoas", gift: "10" },
        { text: "Procuro explicar as questões complicadas da Bíblia de modo que as pessoas entendam sem dificuldade", gift: "11" },
        { text: "Sinto que devo me envolver mais no apoio a outros crentes, colocando meus dons a serviço de seus ministérios", gift: "12" },
        { text: "Tenho a facilidade de fazer planos de ação para que, com outras pessoas, possamos atingir objetivos e metas definidos", gift: "13" },
        { text: "Tenho de me envolver quando sou chamado para tarefas bem práticas", gift: "14" },
        { text: "Tenho a facilidade em perceber problemas pessoais e ajudar nas soluções", gift: "15" },
        { text: "Quando ajudo uma pessoa não penso em levar vantagens", gift: "16" },
        { text: "Creio que devo me envolver mais em tarefas de liderança", gift: "17" },
        { text: "Gosto e sou abençoado ao visitar hospitais e lares de pessoas necessitadas", gift: "18" },
        { text: "Tenho facilidade em começar conversas com estranhos e levá-los ao conhecimento do evangelho", gift: "19" },
        { text: "Tenho alegria em ser útil na restauração espiritual de crentes que se afastaram do Senhor e da igreja", gift: "20" },
        { text: "Deus me tem dado versículos bíblicos para ajudar a solucionar problemas", gift: "1" },
        { text: "Antes de aceitar qualquer idéia, gosto de analisar e selecionar muito bem", gift: "2" },
        { text: "Tenho convicção na providência e ajuda contínua de Deus, mesmo que os tempos sejam difíceis", gift: "3" },
        { text: "Tive a experiência de ver como Deus curou por meio de minhas orações pessoas que estavam física ou emocionalmente doentes", gift: "4" },
        { text: "Tive a experiência de ser usado por Deus como instrumento para realizar sinais e milagres", gift: "5" },
        { text: "Creio que a melhor maneira de manter o povo com uma vida consagrada é através da pregação da Palavra", gift: "6" },
        { text: "Geralmente percebo quando alguém está mentindo", gift: "7" },
        { text: "Sinto-me à vontade onde se falam línguas como meio de anunciar as grandezas de Deus", gift: "8" },
        { text: "Tive a experiência de interpretar línguas e a interpretação foi coerente", gift: "9" },
        { text: "Tive a experiência de ver lideres de outras igrejas aceitando e colocando em prática minhas sugestões", gift: "10" },
        { text: "Gosto de me colocar no lugar das pessoas quando explico um assunto para sentir suas dificuldades em aprender", gift: "11" },
        { text: "Já tive a experiência de ver lideres tendo mais resultado porque realizei funções burocráticas", gift: "12" },
        { text: "Quando uma organização tem problemas a enfrentar, intimamente procuro pensar nas possíveis soluções", gift: "13" },
        { text: "Muitas vezes percebi a necessidade e realizei tarefas antes de outras pessoas", gift: "14" },
        { text: "Creio que conversar é o melhor remédio, em vez de acusar os erros dos outros", gift: "15" },
        { text: "Quando vejo que há necessidade financeira ou material, logo penso em colocar meus recursos à disposição para ajudar", gift: "16" },
        { text: "Já tive experiência em incentivar pessoas na realização de objetivos", gift: "17" },
        { text: "Me sinto realizado quando posso fazer algo por alguém em necessidade", gift: "18" },
        { text: "Gosto de cooperar com os trabalhos evangelísticos da igreja", gift: "19" },
        { text: "Tenho compaixão pelos crentes que vacilam na fé e gostaria de tomar providências na sua recuperação", gift: "20" },
        { text: "Quando leio um texto da Bíblia, normalmente me vem uma forma de aplicá-lo a situações concretas da vida", gift: "1" },
        { text: "Vou atrás de todas as informações possíveis sobre um texto bíblico; não fico contente enquanto não o entendo completamente", gift: "2" },
        { text: "Por causa da minha firme fé em Deus, já vi vários problemas “sem” solução serem resolvidos", gift: "3" },
        { text: "Fico incomodado por orar tão pouco pelos doentes", gift: "4" },
        { text: "Oro para que Deus faça sinais e milagres por meu intermédio como acontecia na época da igreja primitiva", gift: "5" },
        { text: "Creio que os problemas que a igreja enfrenta são resolvidos pela pregação da Palavra de Deus", gift: "6" },
        { text: "Tenho percepção de certas coisas que não darão certo", gift: "7" },
        { text: "Tive experiência em falar em línguas", gift: "8" },
        { text: "Quando alguém fala em línguas, oro ao Senhor para me dar a interpretação", gift: "9" },
        { text: "Sinto mais que os outros cristãos a necessidade de promover unidade entre as diferentes igrejas", gift: "10" },
        { text: "Sinto a necessidade de entender bem os assuntos para ensiná-los a outros", gift: "11" },
        { text: "Fico feliz quando realizo tarefas que outras pessoas acham chatas", gift: "12" },
        { text: "Tenho facilidade em descobrir as falhas de uma organização e elaborar um plano de ação para as devidas correções", gift: "13" },
        { text: "Percebo quando as pessoas precisam de mim e as ajudo em tarefas práticas", gift: "14" },
        { text: "Quando alguém está em pecado, minha maior preocupação é ajudá-la", gift: "15" },
        { text: "Sempre contribuo financeiramente com a obra com mais do que se pede", gift: "16" },
        { text: "Em um grupo sem líder eu tomo a iniciativa", gift: "17" },
        { text: "Sinto grande compaixão quando vejo pessoas doentes ou com problemas", gift: "18" },
        { text: "A ênfase de minhas conversas com as pessoas é a salvação em Cristo", gift: "19" },
        { text: "Tenho prazer em alimentar os crentes com a Palavra de Deus", gift: "20" },
        { text: "Penso em soluções de problemas que normalmente as pessoas não pensam", gift: "1" },
        { text: "Tenho muito interesse em saber como as coisas funcionam", gift: "2" },
        { text: "Já recebi resposta imediata ás minhas orações", gift: "3" },
        { text: "Para mim é fácil e prazeroso orar concretamente pela cura de doentes", gift: "4" },
        { text: "Para mim é fácil orar por sinais sobrenaturais e milagres", gift: "5" },
        { text: "Quando vejo alguém no erro, me sinto responsável por confrontá-la com a verdade", gift: "6" },
        { text: "Tenho facilidade em perceber que uma atitude não é certa e geralmente se confirma", gift: "7" },
        { text: "Para mim é fácil transmitir a vontade de Deus por meio de línguas", gift: "8" },
        { text: "É fácil para mim sentir o que Deus quer dizer quando alguém fala em línguas", gift: "9" },
        { text: "Para mim é fácil aconselhar grupos e igrejas sobre sua situação espiritual", gift: "10" },
        { text: "Gosto de ensinar formas mais produtivas de ensino a outras pessoas", gift: "11" },
        { text: "É fácil ajudar a crentes em tarefas que os liberem para fazer melhor o seu trabalho", gift: "12" },
        { text: "Consigo prever problemas que acontecerão com uma organização e projetar eventos ou atividades para buscar formas de evitá-los", gift: "13" },
        { text: "É fácil para mim aceitar as tarefas que outros acham desagradáveis", gift: "14" },
        { text: "O potencial de uma pessoa tem maior valor que seus atos", gift: "15" },
        { text: "Sou controlado nos meus gastos para poder contribuir mais com a obra", gift: "16" },
        { text: "Para mim é fácil delegar tarefas a outras pessoas", gift: "17" },
        { text: "Identifico-me e desejo ajudar na restauração das pessoas que estão sofrendo", gift: "18" },
        { text: "Busco conscientemente oportunidades de amizades com não-crentes para evangelizá-los", gift: "19" },
        { text: "Tenho prazer em orientar os crentes como um pastor orienta suas ovelhas", gift: "20" },
        { text: "Tenho facilidade em encontrar soluções em meio a discussões, conflitos ou confusão", gift: "1" },
        { text: "Gosto de compreender bem as questões complicadas da Bíblia", gift: "2" },
        { text: "Quando vejo que o esforço humano não garante o sucesso, em vez de ficar desesperado, confio na providência de Deus", gift: "3" },
        { text: "Estou muito disposto a participar de um ministério de orações pelos doentes", gift: "4" },
        { text: "Estou muito disposto a concentrar minhas orações em casos considerados perdidos", gift: "5" },
        { text: "Quando percebo uma situação de pecado, sinto o impulso para denunciá-lo e desafiar os envolvidos a que se arrependam", gift: "6" },
        { text: "Pelas primeiras impressões posso definir o caráter de alguém", gift: "7" },
        { text: "Estou disposto a ser usado por Deus para falar de sua vontade por meio de línguas", gift: "8" },
        { text: "Tenho disposição em interpretar publicamente uma mensagem em línguas", gift: "9" },
        { text: "Tenho disposição em interpretar situações de conflitos entre igrejas", gift: "10" },
        { text: "Estou disposto a ensinar a Bíblia para levar as pessoas a estudar mais", gift: "11" },
        { text: "Estou disposto a aliviar as cargas dos sobrecarregados, fazendo as tarefas que eles deveriam fazer", gift: "12" },
        { text: "Tenho interesse em entender como as organizações funcionam", gift: "13" },
        { text: "Tenho disposição em gastar meu tempo com tarefas que são mais urgentes", gift: "14" },
        { text: "Gosto de encorajar e fortalecer os que se encontram tristes e abatidos", gift: "15" },
        { text: "Creio que Deus me tem dado recursos financeiros além do necessário para poder contribuir mais para sua obra", gift: "16" },
        { text: "Estou disposto a liderar um grupo grande de crentes", gift: "17" },
        { text: "Tenho compaixão pelas pessoas sem esperança, em sofrimento ou que são consideradas inúteis", gift: "18" },
        { text: "Tenho grande preocupação com a salvação dos meus parentes, amigos, vizinhos ou aqueles que convivem ao meu redor", gift: "19" },
        { text: "Gostaria de investir meu tempo nutrindo e cuidando dos crentes que estão em processo de crescimento espiritual", gift: "20" }
    ];

    const curiosities = [
        "Você sabia? A palavra grega 'Charisma', usada para 'dom', significa 'um dom conferido sem mérito ou direito'.",
        "Curiosidade: Existem quatro listas principais de dons espirituais no Novo Testamento: em Romanos 12, duas em I Coríntios 12, e uma em Efésios 4.",
        "FATO: O propósito principal dos dons não é para glória pessoal, mas para a 'edificação do corpo de Cristo'.",
        "DICA: Um erro comum é o 'sentimento de superioridade' por ter um dom que parece mais importante que outros.",
        "Você sabia? Outro erro comum é achar que os dons são 'sinais de espiritualidade', ou seja, que só são recebidos após atingir certo crescimento espiritual.",
        "FATO: O dom da 'Fé' (I Co 12.9) não é a fé para salvação (que todos têm), mas uma fé especial para fazer 'grandes coisas para Deus'.",
        "Curiosidade: A palavra 'Evangelista' (anunciador de boas-novas) só é mencionada três vezes em todo o Novo Testamento.",
        "DICA: O dom de 'Exortação' (Rm 12.8) não é apenas 'chamar a atenção', mas também envolve confortar e encorajar.",
        "Você sabia? O dom de 'Ministério' (Rm 12.7) vem da palavra grega 'diakonia', que é a mesma raiz da palavra 'diácono'.",
        "FATO: O dom de 'Misericórdia' (Rm 12.8) é focado em ajudar pessoas pobres, tristes, aflitas, e especialmente órfãos e viúvas.",
        "Curiosidade: O dom de 'Governos' (I Co 12.28) está diretamente ligado à capacidade de 'administrar'.",
        "Você sabia? A função do 'Profeta' no Novo Testamento era menos 'prever o futuro' e mais 'pregar para edificação, exortação e consolação'.",
        "DICA: A Bíblia recomenda que o dom de 'Interpretação de línguas' deve sempre acompanhar o dom de 'Variedades de línguas'.",
        "FATO: Paulo disse a Timóteo para 'manter viva a chama do fogo' do dom, como 'assoprar sem parar o fogo' para que a chama não se apague.",
        "DICA: Os dons devem ser usados com 'moderação' (II Tm 1:7), uma palavra grega que significa 'auto-controle' e 'auto-disciplina', o oposto de auto-exibição."
    ];

    // --- Variáveis de Estado ---
    let currentQuestionIndex = 0;
    let scores = {};
    const TOTAL_QUESTIONS = allQuestions.length;
    const INTERSTITIAL_FREQUENCY = 15; // Ajustado para 120 perguntas

    // --- Elementos do DOM ---
    const screens = document.querySelectorAll(".screen");
    const welcomeScreen = document.getElementById("welcome-screen");
    const testScreen = document.getElementById("test-screen");
    const interstitialScreen = document.getElementById("interstitial-screen");
    const resultsScreen = document.getElementById("results-screen");

    const startBtn = document.getElementById("start-btn");
    const continueBtn = document.getElementById("continue-btn"); // Continuar intersticial
    const restartBtn = document.getElementById("restart-btn");
    const answerButtons = document.querySelectorAll(".answer-btn");

    // NOVOS ELEMENTOS E BOTÕES DE CONTROLE
    const libraryBtn = document.getElementById("library-btn");
    const backToWelcomeBtn = document.getElementById("back-to-welcome-btn");
    const resultsTitle = document.querySelector("#results-screen h1");
    
    // Botões específicos de save/load (existem no novo HTML)
    const continueTestBtn = document.getElementById("continue-test-btn");
    const viewSavedResultsBtn = document.getElementById("view-saved-results-btn");

    const progressBar = document.getElementById("progress-bar");
    const questionCounter = document.getElementById("question-counter");
    const questionText = document.getElementById("question-text");
    const curiosityText = document.getElementById("curiosity-text");

    const highlightedGiftsContainer = document.getElementById("highlighted-gifts");
    const allGiftsContainer = document.getElementById("all-gifts-details");

    // --- Funções de Save/Load (LocalStorage) ---

    function saveProgress() {
        const progress = {
            currentQuestionIndex: currentQuestionIndex,
            scores: scores,
            isFinished: currentQuestionIndex >= TOTAL_QUESTIONS,
            date: new Date().toISOString()
        };
        localStorage.setItem("giftTestProgress", JSON.stringify(progress));
    }

    function loadProgress() {
        const savedData = localStorage.getItem("giftTestProgress");
        if (savedData) {
            return JSON.parse(savedData);
        }
        return null;
    }

    function clearProgress() {
        localStorage.removeItem("giftTestProgress");
        initializeScores();
        currentQuestionIndex = 0;
        checkSavedState(); // Atualiza os botões
    }

    // Verifica o estado inicial ao carregar a página
    function checkSavedState() {
        const progress = loadProgress();
        
        // Esconde os botões por padrão
        if (continueTestBtn) continueTestBtn.style.display = "none";
        if (viewSavedResultsBtn) viewSavedResultsBtn.style.display = "none";
        if (startBtn) startBtn.textContent = "Começar um Novo Teste";

        if (progress) {
            if (progress.isFinished) {
                // Teste já foi concluído
                if (viewSavedResultsBtn) viewSavedResultsBtn.style.display = "inline-block";
            } else if (progress.currentQuestionIndex > 0) {
                // Teste em andamento
                if (continueTestBtn) {
                    continueTestBtn.style.display = "inline-block";
                    continueTestBtn.textContent = `Continuar de onde parou (Pergunta ${progress.currentQuestionIndex + 1})`;
                }
            }
        }
    }

    // --- Funções Principais ---

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

    // Iniciar NOVO JOGO (Apaga dados anteriores)
    function startNewGame() {
        if(confirm("Isso apagará qualquer progresso anterior. Tem certeza?")) {
            clearProgress();
            startGame();
        }
    }

    // Continuar Jogo Salvo
    function continueGame() {
        const progress = loadProgress();
        if (progress) {
            scores = progress.scores;
            currentQuestionIndex = progress.currentQuestionIndex;
            showScreen(testScreen);
            displayQuestion();
        }
    }

    // Ver Resultados Salvos
    function viewSavedResults() {
        const progress = loadProgress();
        if (progress) {
            scores = progress.scores;
            currentQuestionIndex = TOTAL_QUESTIONS; // Garante que mostre barra cheia
            displayResults();
        }
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
            // Garante que o modo biblioteca está desligado
            resultsScreen.classList.remove("library-mode");
            resultsTitle.textContent = "Resultados";
            displayResults();
        }
    }

    function handleAnswer(e) {
        const value = parseInt(e.target.dataset.value);
        const currentQuestion = allQuestions[currentQuestionIndex];
        const giftKey = currentQuestion.gift;

        scores[giftKey] += value;
        currentQuestionIndex++;

        // SALVA O PROGRESSO A CADA RESPOSTA
        saveProgress();

        if (currentQuestionIndex > 0 && currentQuestionIndex % INTERSTITIAL_FREQUENCY === 0 && currentQuestionIndex < TOTAL_QUESTIONS) {
            displayInterstitial();
        } else if (currentQuestionIndex >= TOTAL_QUESTIONS) {
            resultsScreen.classList.remove("library-mode");
            resultsTitle.textContent = "Resultados";
            displayResults();
        } else {
            displayQuestion();
        }
    }

    function displayInterstitial() {
        const curiosityIndex = Math.floor(currentQuestionIndex / INTERSTITIAL_FREQUENCY - 1) % curiosities.length;
        curiosityText.textContent = curiosities[curiosityIndex];
        showScreen(interstitialScreen);
    }

    function displayResults() {
        if (currentQuestionIndex >= TOTAL_QUESTIONS) {
             progressBar.style.width = `100%`;
             saveProgress(); // Salva o estado final de concluído
        }

        highlightedGiftsContainer.innerHTML = "";
        allGiftsContainer.innerHTML = "";

        const sortedGifts = Object.keys(gifts).sort((a, b) => scores[b] - scores[a]);
        let hasHighScores = false;

        sortedGifts.forEach(key => {
            const gift = gifts[key];
            const score = scores[key];
            const maxScore = gift.questions.length * 4; 
            
            const isHighlighted = score >= 17;
            if(isHighlighted) hasHighScores = true;

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
                    <p><strong>Definição / Foco:</strong></p>
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
        
        if(!hasHighScores && !resultsScreen.classList.contains("library-mode")) {
            highlightedGiftsContainer.innerHTML = "<p>Nenhum dom atingiu a pontuação de destaque (17+). Veja todos os seus resultados abaixo.</p>";
        }

        showScreen(resultsScreen);
    }

    function restartGame() {
        if(confirm("Tem certeza que deseja apagar seus resultados e começar do zero?")) {
            clearProgress(); // Limpa o storage
            resultsScreen.classList.remove("library-mode");
            resultsTitle.textContent = "Resultados";
            showScreen(welcomeScreen);
        }
    }

    // --- Biblioteca ---
    function showLibrary() {
        // Salva o estado atual (temporário) para não perder se o user estiver no meio do teste
        // Mas na biblioteca mostramos tudo zerado visualmente
        const tempScores = {...scores}; 
        
        initializeScores(); // Zera visualmente
        displayResults(); 
        
        // Restaura os scores reais na memória (mas não na tela ainda)
        scores = tempScores;

        resultsScreen.classList.add("library-mode");
        resultsTitle.textContent = "Biblioteca de Dons";
        showScreen(resultsScreen);
    }

    function goToWelcomeScreen() {
        resultsScreen.classList.remove("library-mode");
        resultsTitle.textContent = "Resultados";
        checkSavedState(); // Verifica se botões devem aparecer
        showScreen(welcomeScreen);
    }

    // --- Inicialização e Event Listeners ---
    // Start button agora chama startNewGame para confirmar limpeza
    startBtn.addEventListener("click", () => {
        // Se já tem progresso, pede confirmação. Se não, começa direto.
        const progress = loadProgress();
        if(progress) {
            startNewGame();
        } else {
            startGame();
        }
    });

    continueBtn.addEventListener("click", displayQuestion);
    restartBtn.addEventListener("click", restartGame);
    
    // Novos Listeners
    if(continueTestBtn) continueTestBtn.addEventListener("click", continueGame);
    if(viewSavedResultsBtn) viewSavedResultsBtn.addEventListener("click", viewSavedResults);
    
    libraryBtn.addEventListener("click", showLibrary);
    backToWelcomeBtn.addEventListener("click", goToWelcomeScreen);

    answerButtons.forEach(button => {
        button.addEventListener("click", handleAnswer);
    });

    // Inicia o app
    initializeScores();
    checkSavedState(); // Verifica se existe jogo salvo ao carregar
    showScreen(welcomeScreen);
});
