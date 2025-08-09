let sentenceCategories = window.sentenceCategories || {
    middleRow: {
        name: "중간 행 키보드 연습",
        description: "중간 행 키보드 자판 연습을 위한 문장들",
        sentences: [
            //middle row keyboard
            "Dad had a gala in a hall.",
            "Sally adds salad for a lad.",
            "Hal has a flask for gala.",
            "A lad shall dash to a hall.",
            "Dad asks Sally for salad.",
            "Gala had a salad for all.",
            "Sally had half a flask.",
            "A lad had salad at gala.",
            "Hal had a hall all day.",
            "Dad shall add salad now.",
            "Sally has a gala in May.",
            "A lad had a gala at hall.",
            "Dad asks Hal for a gala.",
            "All salad had half salt.",
            "Sally had a half flask.",
            "Gala had salad for Dad.",
            "A lad shall add half salt.",
            "Sally had gala all day.",
            "Dad had a salad at gala.",
            "Hal had gala salad too.",
            "All lads had salad at gala.",
            "Sally had a hall for gala.",
            "Gala had half a salad.",
            "Dad adds salt for salad.",
            "A lad shall add salad.",
            "Hal had salad at gala.",
            "All gala had half salad.",
            "Sally shall dash to gala.",
            "Dad had salad for Sally.",
            "Hal had gala for a lad.",
            "Sally adds half salt fast.",
            "Gala has salad for all.",
            "Dad shall add a salad.",
            "All lads had gala food.",
            "Sally had gala at dawn.",
            "Gala had salad in hall.",
            "Dad had gala with Sally.",
            "A lad had gala in hall.",
            "Sally had half salad.",
            "Gala had all salad.",
            "Dad asks for gala salad.",
            "Sally adds gala to list.",
            "Hal had salad with Dad.",
            "All gala had lads dash.",
            "Sally shall dash for gala.",
            "Dad adds half salad.",
            "Gala had salad at dawn.",
            "Hal adds salt to salad.",
            "Sally had gala for Dad.",
            "Dad had gala with lads."
        ]
    },
    middleRowLetters: {
        name: "중간 행 알파벳 연습",
        description: "중간 행의 각 알파벳을 하나씩 타이핑합니다",
        sentences: [
            "a", "s", "d", "f", "g", "h", "j", "k", "l",
            "l", "k", "j", "h", "g", "f", "d", "s", "a",
            "a", "s", "d", "f", "j", "k", "l", "h", "g",
            "g", "h", "j", "k", "l", "k", "j", "h", "g",
            "a", "d", "f", "s", "j", "k", "l", "a", "s", "d", "f", "j", "k", "l"
        ]
    },
    topRow: {
        name: "상단 행 키보드 연습",
        description: "상단 행 키보드 자판 연습을 위한 문장들",
        sentences: [
            "Peter had a salad for lunch.",
            "Julia will type fast for class.",
            "Fred kept all quiet in hall.",
            "Kate read the gala list aloud.",
            "Paul asked Sally for help.",
            "Ruth had salad with Paul.",
            "Jerry will read fast at gala.",
            "Tim kept all quiet in hall.",
            "Julie had tea at a gala.",
            "Paul read that Sally sang.",
            "Peter will read all the maps.",
            "Fred had soup and salad.",
            "Kate will type fast and well.",
            "Jerry asked Ruth for tea.",
            "Paul kept that list in hall.",
            "Ruth will read gala news.",
            "Julie had quick tea break.",
            "Fred read tall tales aloud.",
            "Peter kept Sally’s tea hot.",
            "Kate asked Paul for help.",
            "Tim read all about the play.",
            "Julie will type fast for work.",
            "Paul kept Ruth’s seat safe.",
            "Ruth had tea and salad.",
            "Jerry read all the gala notes.",
            "Peter will ask for quick help.",
            "Fred read maps in the hall.",
            "Kate kept a gala list neat.",
            "Julie will read the news.",
            "Paul had tea with Kate.",
            "Jerry typed all the notes fast.",
            "Fred kept all data safe.",
            "Peter read the gala news.",
            "Kate had soup and salad.",
            "Tim asked Julie for help.",
            "Paul kept all quiet in hall.",
            "Julie typed the gala menu.",
            "Ruth read tales aloud today.",
            "Fred kept a map for Peter.",
            "Jerry will read at the gala.",
            "Kate read all the plays aloud.",
            "Peter kept all lists safe.",
            "Fred typed a gala report.",
            "Julie read the tea menu.",
            "Paul kept Ruth’s seat safe.",
            "Jerry had soup and salad.",
            "Tim read the gala notes.",
            "Kate kept all the maps safe.",
            "Fred read the gala speech.",
            "Julie typed all the data."
        ]
    },
    bottomRow: {
        name: "하단 행 키보드 연습",
        description: "하단 행 키보드 자판 연습을 위한 문장들",
        sentences: [
            "Max had a salad at noon.",
            "Sam will bake muffins today.",
            "Ben fixed a small lamp.",
            "Dan made a calm plan.",
            "Val had jam and milk.",
            "Zack was calm and kind.",
            "Mom baked muffins fast.",
            "Nina made a small map.",
            "Sam had jam with bread.",
            "Ben was calm all day.",
            "Val made a milk shake.",
            "Dan baked a small cake.",
            "Mom fixed the lamp base.",
            "Nina had jam for lunch.",
            "Zack made a calm plan.",
            "Ben had a muffin snack.",
            "Max baked a small loaf.",
            "Sam was calm and happy.",
            "Val made jam at home.",
            "Dan had milk with cake.",
            "Mom baked a calm loaf.",
            "Nina made a lamp stand.",
            "Zack was kind and calm.",
            "Max fixed the lamp base.",
            "Sam made jam with milk.",
            "Ben baked a small bun.",
            "Val had a calm smile.",
            "Dan was kind all day.",
            "Mom made muffins fast.",
            "Zack baked jam rolls.",
            "Nina had milk and jam.",
            "Max made a calm plan.",
            "Sam baked a small loaf.",
            "Ben had jam with milk.",
            "Val was calm and kind.",
            "Dan made jam rolls.",
            "Mom baked a muffin tray.",
            "Nina was kind to Sam.",
            "Zack had milk and cake.",
            "Max baked a calm cake.",
            "Sam made a lamp base.",
            "Ben was calm at home.",
            "Val baked muffins today.",
            "Dan had a calm plan.",
            "Mom fixed the small lamp.",
            "Nina baked a milk loaf.",
            "Zack made a muffin tray.",
            "Max was calm with Sam.",
            "Sam baked jam muffins.",
            "Ben had milk with cake."
        ]
    },
    realEnglish: {
        name: "실제 영어 문장 연습",
        description: "실제 상황에서 사용되는 영어 문장들",
        sentences: [
            "Camels use the fat for energy.",
            "One day, they jump out from mom's pouch.",
            "The chameleon goes quickly to the green glass and turns green.",
            "They sing to attract females.",
            "Nobody knows for sure why they died out.",
            "I look like a tiger.",
            "I use my forked tongue to smell.",
            "Even when we are sleeping, we are hanging upside down.",
            "Whale can't breathe through the water.",
            "They fly in a V-shape.",
            "Your legs are covered with fine hair.",
            "I am making the webs to catch bugs.",
            "I try to reach the leaves at the top of them, so I have a long neck.",
            "The bees started to put honey in their house.",
            "Winter is too cold for bear to catch prey, so they have a long winter sleep.",
            "It changes sunlight into energy.",
            "They store lots of water in their trunks.",
            "Spores are everywhere.",
            "Something scary seems to happen.",
            "It is easy for them to get dirty.",
            "Count the tree rings on the stumps.",
            "Each firefly sends a different signal.",
            "The ink can also make your eyes hurt.",
            "A wet nose helps them smell better.",
            "She was tickling the sole of dad's foot with a brush.",
            "It also protects your ears from loud noises.",
            "Minhee got a tape recorder for her birthday.",
            "Why do I burp when I drink soda?",
            "The air pressure inside and outside your ear is not the same.",
            "The skin (which covers your hands and feet) absorbs water well.",
            "When you see delicious food, your mouth starts to water.",
            "A bump appeared at once. It was very itchy.",
            "The sun can be harmful for your skin.",
            "You can gulp lots of fresh air when you yawn.",
            "If you want to stop hiccuping, try to hold your breath.",
            "Sneezing can remove germs and dust from the nose.",
            "It delivers oxygen and nutrients to our body.",
            "All people have different spots for sweat glands on their fingers.",
            "Our tongue can taste sweet, salty, bitter and sour.",
            "If our body loses its balance, the water in our ears is not calm.",
            "Our brains sort and store information while we're sleeping.",
            "Sometimes the gas goes up and out. It is called a burp.",
            "Goose bumps don't let us lose our body heat.",
            "My little teeth don't fit my mouth and jaw anymore.",
            "What do other people think about cloning?",
            "Your belly button is the spot where the umbilical cord used to be.",
            "If you are color-blind, you might think that green leaves are gray.",
            "Germs like playing in your sweaty shoes.",
            "By the way, why do people think rumbling is a sign of hunger?",
            "Soap bubbles like to stick together.",
            "A kernel of corn has a little bit of water in it.",
            "Salt lowers the freezing point of water.",
            "The heat first divides the proteins.",
            "Density means how close A and B are.",
            "Microwaves go through the bread, and heat only the water in the bread.",
            "Don't open attached files you don't know.",
            "If the temperature gets cooler, the water in the air turns into a liquid.",
            "The pictures pass quickly so they look like they are in motion.",
            "A glow stick is put in a plastic tube, and in a glow stick, two kinds of liquid are in separate areas.",
            "If you touch electrical devices with a wet hand, you may get an electric shock."
        ]
    }
};

// 중간 행 알파벳 연습에 랜덤 30개 추가
(function () {
    const middleRowKey = 'middleRowLetters';
    const letters = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    const extraCount = 30;
    if (sentenceCategories[middleRowKey]) {
        for (let i = 0; i < extraCount; i++) {
            const letter = letters[Math.floor(Math.random() * letters.length)];
            sentenceCategories[middleRowKey].sentences.push(letter);
        }
    }
})();

// 가운데+윗줄, 가운데+아랫줄 합성 카테고리 생성 및 진행 순서 정의
(function () {
    const interleave = (arrA, arrB, limitPerSource) => {
        const takeA = arrA.slice(0, limitPerSource);
        const takeB = arrB.slice(0, limitPerSource);
        const result = [];
        const maxLen = Math.max(takeA.length, takeB.length);
        for (let i = 0; i < maxLen; i++) {
            if (i < takeA.length) result.push(takeA[i]);
            if (i < takeB.length) result.push(takeB[i]);
        }
        return result;
    };
    const cap = 80; // 각 소스에서 최대 cap개만 사용
    sentenceCategories.middleTopCombo = {
        name: '가운데와 윗줄 연습',
        description: '가운데 행과 윗줄 키 조합을 연습합니다',
        sentences: interleave(
            sentenceCategories.middleRow.sentences,
            sentenceCategories.topRow.sentences,
            cap
        )
    };
    sentenceCategories.middleBottomCombo = {
        name: '가운데와 아랫줄 연습',
        description: '가운데 행과 아랫줄 키 조합을 연습합니다',
        sentences: interleave(
            sentenceCategories.middleRow.sentences,
            sentenceCategories.bottomRow.sentences,
            cap
        )
    };
})();

function getSortedKeysByLevel() {
    const entries = Object.entries(sentenceCategories);
    const withLevels = [];
    for (let i = 0; i < entries.length; i++) {
        const [key, category] = entries[i];
        if (typeof category.level === 'number') {
            withLevels.push({ key, level: category.level });
        }
    }
    withLevels.sort((a, b) => a.level - b.level);
    const keys = [];
    for (let i = 0; i < withLevels.length; i++) {
        keys.push(withLevels[i].key);
    }
    return keys;
}

function getNextCategoryKey(currentKey) {
    const orderedKeys = getSortedKeysByLevel();
    const idx = orderedKeys.indexOf(currentKey);
    if (idx >= 0 && idx < orderedKeys.length - 1) return orderedKeys[idx + 1];
    return null;
}

let currentCategory = null;
let currentSentenceIndex = 0;
let startTime = null;
let timer = null;
let isTyping = false;
let totalWords = 0;
let totalTime = 0;
let correctWords = 0;
let errorWords = [];
let sessionErrors = [];

// 기본 배경 저장
let defaultBodyBackground = '';

// 테스트 모드: true면 각 단계의 10% 완료 시 다음 단계로 이동
let isTestMode = true; // 필요 시 URL 파라미터나 로컬스토리지로 제어 가능
const TEST_MODE_THRESHOLD_RATIO = 0.1;

function goToCategory(newKey, keepSession = true) {
    if (!sentenceCategories[newKey]) return;
    currentCategory = newKey;
    currentSentenceIndex = 0;
    if (typeof typingInput !== 'undefined') {
        typingInput.value = '';
        typingInput.className = 'typing-input';
    }
    if (typeof accuracyIndicator !== 'undefined') {
        accuracyIndicator.textContent = '';
    }
    updateDisplay();
    updateLevelBadge();
    applyCategoryTheme();
    if (keepSession && isTyping && !timer) {
        startTimer();
    }
}

// 카테고리 메뉴 초기화
function initializeCategoryMenu() {
    const categoryMenu = document.getElementById('categoryMenu');
    const typingArea = document.getElementById('typingArea');

    const orderedKeys = getSortedKeysByLevel();

    for (let i = 0; i < orderedKeys.length; i++) {
        const key = orderedKeys[i];
        const category = sentenceCategories[key];
        const card = document.createElement('div');
        card.className = 'category-card';
        card.innerHTML = `
            <h3>${i + 1}. ${category.name}</h3>
            <p>${category.description}</p>
            <div class="category-stats">
                <span>${category.sentences.length} 문장</span>
                <span>레벨: ${category.level ?? '-'} / 난이도: ${getDifficulty(category.sentences)}</span>
            </div>
        `;

        card.addEventListener('click', () => {
            currentCategory = key;
            currentSentenceIndex = 0;
            resetTyping();
            categoryMenu.style.display = 'none';
            typingArea.classList.add('active');
            updateDisplay();
            updateLevelBadge();
        });

        categoryMenu.appendChild(card);
    }
}

// 카테고리의 난이도 계산
function getDifficulty(sentences) {
    const avgLength = sentences.reduce((sum, sent) => sum + sent.length, 0) / sentences.length;
    if (avgLength < 30) return '쉬움';
    if (avgLength < 50) return '보통';
    return '어려움';
}

// 타이핑 영역으로 돌아가기
function backToMenu() {
    const categoryMenu = document.getElementById('categoryMenu');
    const typingArea = document.getElementById('typingArea');

    categoryMenu.style.display = 'grid';
    typingArea.classList.remove('active');
    resetTyping();
    resetDefaultTheme();
}

function showToast(message, durationMs = 1500) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add('show');
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => {
        toastEl.classList.remove('show');
    }, durationMs);
}

function updateLevelBadge() {
    if (!levelBadge) return;
    if (!currentCategory) {
        levelBadge.style.display = 'none';
        return;
    }
    const cat = sentenceCategories[currentCategory];
    const levelText = typeof cat.level === 'number' ? `레벨 ${cat.level}` : '레벨 -';
    levelBadge.textContent = `${levelText} • ${cat.name}`;
    levelBadge.style.display = 'inline-block';
}

const defaultThemeByLevel = {
    1: { gradient: 'linear-gradient(135deg, #e0f7ff 0%, #b3e5fc 100%)', gradientDark: 'linear-gradient(135deg, #0d47a1 0%, #1565c0 100%)' },
    2: { gradient: 'linear-gradient(135deg, #ede7f6 0%, #d1c4e9 100%)', gradientDark: 'linear-gradient(135deg, #4527a0 0%, #5e35b1 100%)' },
    3: { gradient: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)', gradientDark: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)' },
    4: { gradient: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)', gradientDark: 'linear-gradient(135deg, #e65100 0%, #ef6c00 100%)' },
    5: { gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', gradientDark: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)' }
};

function applyCategoryTheme() {
    const cat = currentCategory ? sentenceCategories[currentCategory] : null;
    if (!defaultBodyBackground) {
        defaultBodyBackground = document.body.style.background || '';
    }
    // 부드러운 전환 적용
    document.body.style.transition = 'background 300ms ease';

    // gradient 우선, 없으면 color
    const gradient = cat && (cat.gradient || (cat.level && defaultThemeByLevel[cat.level]?.gradient));
    const color = cat && cat.color;

    if (gradient) {
        document.body.style.background = gradient;
    } else if (color) {
        document.body.style.background = color;
    } else {
        document.body.style.background = defaultBodyBackground;
    }

    // 다크 모드 보정: 시스템 다크 모드면 colorDark/gradientDark 우선 적용
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        const gradientDark = cat && (cat.gradientDark || (cat.level && defaultThemeByLevel[cat.level]?.gradientDark));
        const colorDark = cat && cat.colorDark;
        if (gradientDark) {
            document.body.style.background = gradientDark;
        } else if (colorDark) {
            document.body.style.background = colorDark;
        }
    }
}

function resetDefaultTheme() {
    if (defaultBodyBackground) {
        document.body.style.background = defaultBodyBackground;
    } else {
        document.body.style.background = '';
    }
}

const sentenceDisplay = document.getElementById('sentenceDisplay');
const typingInput = document.getElementById('typingInput');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const nextBtn = document.getElementById('nextBtn');
const wpmDisplay = document.getElementById('wpm');
const accuracyDisplay = document.getElementById('accuracy');
const timerDisplay = document.getElementById('timer');
const progressBar = document.getElementById('progress');
const accuracyIndicator = document.getElementById('accuracyIndicator');
const remainingInfo = document.getElementById('remainingInfo');
const levelBadge = document.getElementById('levelBadge');
const toastEl = document.getElementById('toast');
const asciiRunnerEl = document.getElementById('asciiRunner');
const asciiRunnerFrames = [
`  >>\_
 (o )\____
  \_/     )~
   /|____/
`,
`  >>\_
 (o )\___
  \_/    )~
  //|___/
`,
`  >>\_
 (o )\__
  \_/     )~
   /|____/
`,
`  >>\_
 (o )\_
  \_/     )~
  //|____/
`,
`  >>\_
 (o )\___
  \_/    )~
   /|____/
`,
`  >>\_
 (o )\__
  \_/     )~
  //|___/
`
];
let asciiRunnerIndex = 0;

function updateAsciiRunner() {
    if (!asciiRunnerEl) return;
    asciiRunnerEl.textContent = asciiRunnerFrames[asciiRunnerIndex % asciiRunnerFrames.length];
    asciiRunnerIndex++;
}

function updateDisplay() {
    if (!currentCategory) return;
    const currentSentences = sentenceCategories[currentCategory].sentences;
    sentenceDisplay.innerHTML = `<span class="current-sentence">${currentSentences[currentSentenceIndex]}</span>`;
    progressBar.style.width = `${((currentSentenceIndex + 1) / currentSentences.length) * 100}%`;

    // 남은 문장 수 표시 (테스트 모드에서는 임계치까지 남은 개수)
    if (remainingInfo) {
        let remaining;
        if (isTestMode) {
            const threshold = Math.max(1, Math.ceil(currentSentences.length * TEST_MODE_THRESHOLD_RATIO));
            const done = Math.min(currentSentenceIndex + 1, threshold);
            remaining = Math.max(0, threshold - done);
            remainingInfo.textContent = `다음 단계까지 남은 문장: ${remaining} (테스트)`;
        } else {
            remaining = currentSentences.length - (currentSentenceIndex + 1);
            remainingInfo.textContent = `다음 단계까지 남은 문장: ${remaining}`;
        }
    }

    // 카테고리 바뀔 때 러너 초기화 프레임 표시
    if (asciiRunnerEl) {
        asciiRunnerIndex = 0;
        asciiRunnerEl.textContent = asciiRunnerFrames[0];
    }
}

function shouldAutoAdvanceInTestMode() {
    if (!isTestMode) return false;
    const totalSentences = sentenceCategories[currentCategory].sentences.length;
    const threshold = Math.max(1, Math.ceil(totalSentences * TEST_MODE_THRESHOLD_RATIO));
    return currentSentenceIndex + 1 >= threshold; // +1은 현재 인덱스가 0부터 시작하므로 진행 개수 보정
}

function startTimer() {
    startTime = Date.now();
    timer = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        totalTime = elapsed;
    }, 1000);
}

function stopTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

function calculateWPM() {
    if (totalTime === 0) return 0;
    const minutes = totalTime / 60;
    return Math.round(totalWords / minutes);
}

function calculateAccuracy() {
    if (totalWords === 0) return 100;
    return Math.round((correctWords / totalWords) * 100);
}

function updateStats() {
    wpmDisplay.textContent = calculateWPM();
    accuracyDisplay.textContent = `${calculateAccuracy()}%`;
}

function checkAccuracy(input, target) {
    const inputWords = input.trim().split(/\s+/);
    const targetWords = target.trim().split(/\s+/);

    let correct = 0;
    for (let i = 0; i < Math.min(inputWords.length, targetWords.length); i++) {
        if (inputWords[i] === targetWords[i]) {
            correct++;
        }
    }

    return {
        correct,
        total: targetWords.length,
        percentage: Math.round((correct / targetWords.length) * 100)
    };
}

function startTyping() {
    isTyping = true;
    startTimer();
    typingInput.focus();
    startBtn.textContent = '일시정지';
    startBtn.classList.remove('btn-primary');
    startBtn.classList.add('btn-secondary');
}

function pauseTyping() {
    isTyping = false;
    stopTimer();
    startBtn.textContent = '계속';
    startBtn.classList.remove('btn-secondary');
    startBtn.classList.add('btn-primary');
}

function resetTyping() {
    currentSentenceIndex = 0;
    totalWords = 0;
    totalTime = 0;
    correctWords = 0;
    errorWords = [];
    sessionErrors = [];
    isTyping = false;
    stopTimer();
    typingInput.value = '';
    typingInput.className = 'typing-input';
    accuracyIndicator.textContent = '';
    timerDisplay.textContent = '00:00';
    wpmDisplay.textContent = '0';
    accuracyDisplay.textContent = '100%';
    startBtn.textContent = '시작';
    startBtn.classList.remove('btn-secondary');
    startBtn.classList.add('btn-primary');
    updateDisplay();
}

function nextSentence() {
    if (!currentCategory) return;
    const isLastSentence = currentSentenceIndex >= sentenceCategories[currentCategory].sentences.length - 1;

    if (!isLastSentence) {
        currentSentenceIndex++;
        typingInput.value = '';
        typingInput.className = 'typing-input';
        accuracyIndicator.textContent = '';
        updateDisplay();
    }

    if (isLastSentence || shouldAutoAdvanceInTestMode()) {
        const nextKey = getNextCategoryKey(currentCategory);
        if (nextKey) {
            // 현재 단계 통계 저장 후 다음 단계로 이동
            saveSessionStats();
            goToCategory(nextKey, true);
            if (!isTyping) {
                // 시작 버튼을 누르지 않았어도 다음 레벨 자동 시작
                startTyping();
            }
            showToast(`${sentenceCategories[nextKey].name} 단계로 이동합니다.`)
        } else {
            saveSessionStats();
            pauseTyping();
        }
    }
}

// 세션 통계 저장
function saveSessionStats() {
    const sessionData = {
        date: new Date().toISOString(),
        category: currentCategory,
        wpm: calculateWPM(),
        accuracy: calculateAccuracy(),
        totalWords: totalWords,
        totalErrors: sessionErrors.length,
        errorWords: sessionErrors,
        duration: totalTime
    };

    const existingStats = localStorage.getItem('typingStats');
    const stats = existingStats ? JSON.parse(existingStats) : [];
    stats.push(sessionData);
    localStorage.setItem('typingStats', JSON.stringify(stats));
}

typingInput.addEventListener('input', (e) => {
    if (!currentCategory) return;

    const input = e.target.value;
    const target = sentenceCategories[currentCategory].sentences[currentSentenceIndex];

    // 키 입력마다 프레임 업데이트
    updateAsciiRunner();

    if (input.length > 0) {
        const accuracy = checkAccuracy(input, target);
       // accuracyIndicator.textContent = `정확도: ${accuracy.percentage}%`;

        // 오타 추적
        if (input.length > 0 && !target.startsWith(input)) {
            const currentWord = input.split(' ').pop();
            const targetWord = target.split(' ')[input.split(' ').length - 1];
            if (currentWord && targetWord && currentWord !== targetWord) {
                const error = {
                    word: targetWord,
                    typed: currentWord,
                    timestamp: Date.now()
                };
                if (!sessionErrors.find(e => e.word === targetWord && e.typed === currentWord)) {
                    sessionErrors.push(error);
                }
            }
        }

        if (input === target) {
            e.target.classList.add('correct');
            e.target.classList.remove('incorrect');

            // 통계는 타이핑 세션이 시작된 상태일 때만 집계
            if (isTyping) {
                correctWords += target.split(/\s+/).length;
                totalWords += target.split(/\s+/).length;
                updateStats();
            }

            setTimeout(() => {
                const isLastSentence = currentSentenceIndex >= sentenceCategories[currentCategory].sentences.length - 1;
                if (!isLastSentence && !shouldAutoAdvanceInTestMode()) {
                    nextSentence();
                } else {
                    const nextKey = getNextCategoryKey(currentCategory);
                    if (nextKey) {
                        // 현재 단계 통계 저장 후 다음 단계로 이동
                        saveSessionStats();
                        goToCategory(nextKey, true);
                        if (!isTyping) {
                            // 시작 버튼을 누르지 않았어도 다음 레벨 자동 시작
                            startTyping();
                        }
                        showToast(`${sentenceCategories[nextKey].name} 단계로 이동합니다.`)
                    } else {
                        saveSessionStats();
                        pauseTyping();
                    }
                }
            }, 300);
        } else if (target.startsWith(input)) {
            e.target.classList.remove('incorrect');
            e.target.classList.remove('correct');
        } else {
            e.target.classList.add('incorrect');
            e.target.classList.remove('correct');
        }
    } else {
        e.target.classList.remove('correct', 'incorrect');
        accuracyIndicator.textContent = '';
    }
});

startBtn.addEventListener('click', () => {
    if (isTyping) {
        pauseTyping();
    } else {
        startTyping();
    }
});

resetBtn.addEventListener('click', resetTyping);
nextBtn.addEventListener('click', nextSentence);

// 메뉴에 돌아가기 버튼 추가
const backButton = document.createElement('button');
backButton.className = 'btn btn-secondary';
backButton.textContent = '메뉴로 돌아가기';
backButton.style.marginRight = '10px';
backButton.addEventListener('click', backToMenu);

document.querySelector('.controls').insertBefore(backButton, startBtn);

async function loadSentences() {
    try {
        const res = await fetch('sentences.json', { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to load sentences.json');
        const data = await res.json();
        sentenceCategories = data;
    } catch (err) {
        console.error('[loadSentences] ', err);
    }
}

async function bootstrap() {
    await loadSentences();
    initializeCategoryMenu();
}

// 초기화
document.addEventListener('DOMContentLoaded', bootstrap); 