document.addEventListener('DOMContentLoaded', function() {
    // Данные карточек (математика)
    const cardsData = [
        {
            question: "Что такое теорема Пифагора?",
            answer: "В прямоугольном треугольнике квадрат гипотенузы равен сумме квадратов катетов: \\(c^2 = a^2 + b^2\\)"
        },
        {
            question: "Как найти площадь круга?",
            answer: "Площадь круга вычисляется по формуле: \\(S = \\pi r^2\\), где \\(r\\) - радиус круга"
        },
        {
            question: "Что такое производная функции?",
            answer: "Производная функции показывает скорость изменения функции в данной точке. Геометрически - это угловой коэффициент касательной к графику функции."
        },
        {
            question: "Как решить квадратное уравнение?",
            answer: "Квадратное уравнение вида \\(ax^2 + bx + c = 0\\) решается по формуле:<br>\\(x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\)<br>Дискриминант \\(D = b^2 - 4ac\\) определяет количество корней."
        },
        {
            question: "Что такое логарифм?",
            answer: "Логарифм числа \\(b\\) по основанию \\(a\\) (\\(\\log_a b\\)) - это показатель степени, в которую нужно возвести \\(a\\), чтобы получить \\(b\\): \\(a^{\\log_a b} = b\\)"
        },
        {
            question: "Как найти объем шара?",
            answer: "Объем шара вычисляется по формуле: \\(V = \\frac{4}{3}\\pi r^3\\), где \\(r\\) - радиус шара"
        },
        {
            question: "Что такое интеграл?",
            answer: "Интеграл функции - это площадь под кривой графика функции. Неопределенный интеграл - множество первообразных. Определенный интеграл - число, равное площади на заданном интервале."
        },
        {
            question: "Как работает бином Ньютона?",
            answer: "Бином Ньютона: \\((a + b)^n = \\sum_{k=0}^n C(n,k) \\cdot a^{n-k}b^k\\), где \\(C(n,k)\\) - биномиальные коэффициенты"
        },
        {
            question: "Что такое мнимая единица?",
            answer: "Мнимая единица \\(i\\) - это число, квадрат которого равен \\(-1\\) (\\(i^2 = -1\\)). Основа комплексных чисел вида \\(z = a + bi\\)"
        },
        {
            question: "Как найти определитель матрицы 2×2?",
            answer: "Для матрицы:<br>\\(\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix}\\)<br>Определитель вычисляется как: \\(\\det = ad - bc\\)"
        }
    ];

    const flashcard = document.getElementById('flashcard');
    const cardFront = document.querySelector('.card-front');
    const cardBack = document.querySelector('.card-back');
    const cardTitle = document.querySelector('.card-title');
    const cardCounter = document.getElementById('card-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const shuffleBtn = document.getElementById('shuffle-btn');
    const progressBar = document.getElementById('progress-bar');
    
    let currentCardIndex = 0;
    let shuffledCards = [...cardsData];
    
    // Инициализация
    updateCard();
    updateProgress();
    
    // Переворот карточки
    flashcard.addEventListener('click', flipCard);
    document.querySelectorAll('.flip-btn').forEach(btn => {
        btn.addEventListener('click', flipCard);
    });
    
    // Навигация
    prevBtn.addEventListener('click', showPrevCard);
    nextBtn.addEventListener('click', showNextCard);
    shuffleBtn.addEventListener('click', shuffleCards);
    
    // Клавиатурная навигация
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            showPrevCard();
        } else if (e.key === 'ArrowRight') {
            showNextCard();
        } else if (e.key === ' ') {
            flipCard();
            e.preventDefault();
        }
    });
    
    function flipCard() {
        flashcard.classList.toggle('flipped');
    }
    
    function showPrevCard() {
        if (currentCardIndex > 0) {
            currentCardIndex--;
            updateCard();
        }
    }
    
    function showNextCard() {
        if (currentCardIndex < shuffledCards.length - 1) {
            currentCardIndex++;
            updateCard();
        }
    }
    
    function updateCard() {
        const card = shuffledCards[currentCardIndex];
        cardTitle.textContent = card.question;
        cardBack.innerHTML = `<p>${card.answer}</p><button class="flip-btn">Показать вопрос</button>`;
        
        // Сбрасываем переворот карточки
        if (flashcard.classList.contains('flipped')) {
            flashcard.classList.remove('flipped');
        }
        
        // Обновляем счетчик
        cardCounter.textContent = `${currentCardIndex + 1}/${shuffledCards.length}`;
        
        // Обновляем прогресс
        updateProgress();
        
        // Обновляем обработчики для новой кнопки
        document.querySelector('.card-back .flip-btn').addEventListener('click', flipCard);
        
        // Перерендериваем MathJax для новых формул
        if (window.MathJax) {
            MathJax.typesetPromise();
        }
    }
    
    function shuffleCards() {
        // Алгоритм Фишера-Йетса для перемешивания
        for (let i = shuffledCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
        }
        
        currentCardIndex = 0;
        updateCard();
    }
    
    function updateProgress() {
        const progress = ((currentCardIndex + 1) / shuffledCards.length) * 100;
        progressBar.style.width = `${progress}%`;
    }
});