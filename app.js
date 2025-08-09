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
    // 입력 칸 즉시 포커스 (지연 재시도)
    setTimeout(() => focusTypingInput(), 0);
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
        const icon = getCategoryIcon(key, category.level);
        const hl = getHighlightForCategory(key);
        const kb = hl === 'none' ? '' : `<div class="keyboard-icon">${getKeyboardSVG(hl)}</div>`;
        card.innerHTML = `
            <h3><span class="category-icon">${icon}</span>${i + 1}. ${category.name}</h3>
            <p>${category.description}</p>
            <div class="category-stats">
                <span>${category.sentences.length} 문장</span>
                <span>레벨: ${category.level ?? '-'} / 난이도: ${getDifficulty(category.sentences)}</span>
            </div>
            ${kb}
        `;

        card.addEventListener('click', () => {
            currentCategory = key;
            currentSentenceIndex = 0;
            resetTyping();
            categoryMenu.style.display = 'none';
            typingArea.classList.add('active');
            updateDisplay();
            updateLevelBadge();
            // 입력 칸 포커스 보장
            setTimeout(() => focusTypingInput(), 0);
        });

        // 카테고리 선택 시 입력 칸에 즉시 포커스 (지연 재시도)
        setTimeout(() => focusTypingInput(), 0);

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
    // 컨테이너 폭 초기화
    const container = document.querySelector('.container');
    if (container) container.style.maxWidth = '';
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
let asciiFramesLibrary = {};
let asciiRunnerFrames = [];
let asciiRunnerIndex = 0;
let asciiRunnerFramesOverride = [];
let asciiCurrentAnimal = null;
let asciiLastCorrectCharCount = 0;
let asciiKeyCounter = 0;
let asciiAdvanceEveryN = 1; // 키 입력 n회마다 1프레임 전환 (요청에 따라 기본 1)
let asciiAdvanceOnlyOnCorrect = false; // 요청에 따라 키 입력 시 항상 진행
let asciiLarge = true; // 2배 크기

async function loadAsciiFrames() {
    try {
        const res = await fetch('asciiRunnerFrames.json', { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to load asciiRunnerFrames.json');
        const data = await res.json();
        asciiFramesLibrary = data || {};
        // 기본은 말 프레임
        asciiRunnerFrames = asciiFramesLibrary.horse || [];
        if (!Array.isArray(asciiRunnerFrames)) asciiRunnerFrames = [];
    } catch (err) {
        console.error('[loadAsciiFrames] ', err);
        asciiFramesLibrary = {};
        asciiRunnerFrames = [];
    }
}

function setAsciiScale() {
    if (!asciiRunnerEl) return;
    if (asciiLarge) asciiRunnerEl.classList.add('ascii-large');
    else asciiRunnerEl.classList.remove('ascii-large');
}

function focusTypingInput(retries = 6, delayMs = 80) {
    if (!typingInput) return;
    const tryFocus = () => {
        // 보이는 상태인지 확인
        const isHidden = typingInput.offsetParent === null;
        if (!isHidden) {
            typingInput.focus({ preventScroll: false });
            try {
                // 커서를 항상 끝으로 이동
                const len = typingInput.value.length;
                typingInput.setSelectionRange(len, len);
            } catch (_) {}
            return true;
        }
        return false;
    };
    if (tryFocus()) return;
    if (retries > 0) setTimeout(() => focusTypingInput(retries - 1, delayMs), delayMs);
}

function getActiveAsciiFrames() {
    return (asciiRunnerFramesOverride && asciiRunnerFramesOverride.length > 0)
        ? asciiRunnerFramesOverride
        : asciiRunnerFrames;
}

function chooseAnimalForSentence(level, sentenceIndex) {
    if (level === 1) return 'rabbit';
    const cycle = ['horse', 'dog', 'cheetah', 'rabbit'];
    return cycle[sentenceIndex % cycle.length];
}

function applyAsciiAnimalForCurrent() {
    if (!asciiRunnerEl || !currentCategory) return;
    const cat = sentenceCategories[currentCategory];
    const level = typeof cat?.level === 'number' ? cat.level : 0;
    const nextAnimal = chooseAnimalForSentence(level, currentSentenceIndex);
    asciiCurrentAnimal = nextAnimal;
    const frames = asciiFramesLibrary[nextAnimal] || [];
    asciiRunnerFramesOverride = frames;
    asciiRunnerIndex = 0;
    asciiKeyCounter = 0;
    asciiLastCorrectCharCount = 0;
    asciiRunnerEl.textContent = frames && frames.length > 0 ? frames[0] : '';
}

function updateAsciiRunner(progressByCorrect = false) {
    if (!asciiRunnerEl) return;
    if (asciiAdvanceOnlyOnCorrect && !progressByCorrect) {
        return;
    }
    const frames = getActiveAsciiFrames();
    if (!frames || frames.length === 0) return;
    asciiKeyCounter++;
    if (asciiKeyCounter % asciiAdvanceEveryN !== 0) return;
    asciiRunnerEl.textContent = frames[asciiRunnerIndex % frames.length];
    asciiRunnerIndex++;
}

function shakeAsciiRunner() {
    if (!asciiRunnerEl) return;
    asciiRunnerEl.classList.remove('shake');
    void asciiRunnerEl.offsetWidth;
    asciiRunnerEl.classList.add('shake');
}

const encourageEl = document.getElementById('encourageMessage');
const encourageMessages = [
    '지금처럼만! 끝까지 가보자!',
    '좋아! 리듬 탔다!',
    '집중! 너라면 할 수 있어!',
    '손가락이 춤춘다! 계속 고!',
    '오타는 잠깐, 실력은 영원!',
    '한 글자씩, 확실하게!',
    '속도보다 중요한 건 정확도!',
    '좋은 흐름이야! 유지하자!',
    '아주 좋아! 바로 그거야!',
    '딱 한 문장 더!',
    '페이스 좋아! 그대로!',
    '정확! 멋져!',
    '꾸준함이 실력을 만든다!',
    '집중 유지! 충분히 가능해!',
    '키보드가 익숙해지는 중!',
    '호흡 좋아! 매끄럽다!',
    '한 글자 한 글자 확실하게!',
    '오타? 괜찮아, 바로 회복!',
    '나이스! 속도 올라간다!',
    '좋아! 견고해지고 있어!'
];
const encourageByLevel = {
    1: [ '기본기 탄탄! 아주 좋아!', '정확도가 곧 속도다!', '중요한 건 손가락 기억!' ],
    2: [ '홈포지션 유지!', '리듬을 가져가자!', '손가락이 따뜻해졌어!' ],
    3: [ '상단 행 정복 중!', '시선은 화면, 손은 자연스럽게!', '키 간격에 익숙해지고 있어!' ],
    4: [ '하단 행 흔들림 없다!', '부드럽게, 천천히, 정확히!', '꾸준함이 이긴다!' ],
    5: [ '실전 감각 올라온다!', '문장 호흡 잡혔다!', '멋진 페이스야!' ]
};

function pickFrom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function pickEncourage(kind = 'general') {
    const cat = currentCategory ? sentenceCategories[currentCategory] : null;
    const level = typeof cat?.level === 'number' ? cat.level : 0;
    const levelArr = encourageByLevel[level] || [];
    if (kind === 'error') {
        return pickFrom([ '괜찮아! 다시 한 번!', '천천히, 정확히!', '오타는 잠깐, 다시 고!' ]);
    }
    if (kind === 'partial') {
        return pickFrom([ '좋아! 한 글자 더!', '리듬 좋다! 계속!', '아주 좋아, 유지!' ]);
    }
    if (kind === 'success') {
        return pickFrom([ '완벽! 멋지다!', '깔끔했다!', '좋았어! 다음으로!' ]);
    }
    // general
    if (levelArr.length && Math.random() < 0.6) return pickFrom(levelArr);
    return pickFrom(encourageMessages);
}
function showEncourage(kind = 'general') {
    if (!encourageEl) return;
    encourageEl.classList.remove('fade-in');
    encourageEl.textContent = pickEncourage(kind);
    // reflow to restart animation
    void encourageEl.offsetWidth;
    encourageEl.classList.add('fade-in');
}

function renderSentenceHighlight(target, input) {
    if (!sentenceDisplay) return;
    const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const max = Math.min(target.length, input.length);
    let idx = 0;
    while (idx < max && target[idx] === input[idx]) idx++;
    let correct = escape(target.slice(0, idx));
    let rest = escape(target.slice(idx));
    // 공백 보존: 일반 공백을 &nbsp;로 치환해 경계 공백 소실 방지
    correct = correct.replace(/ /g, '&nbsp;');
    rest = rest.replace(/ /g, '&nbsp;');
    sentenceDisplay.innerHTML = `<span class="typed-correct">${correct}</span>${rest}`;
}

function clearMovieTitleReveal() {
    const existing = document.getElementById('movieTitleReveal');
    if (existing) existing.remove();
}
function revealMovieTitleAtIndex(index) {
    if (currentCategory !== 'movieQuiz') return;
    const cat = sentenceCategories[currentCategory];
    const titles = cat && cat.titles;
    if (!Array.isArray(titles) || !titles[index]) return;
    const title = titles[index];
    // 타이틀 엘리먼트 생성 및 삽입
    clearMovieTitleReveal();
    const el = document.createElement('div');
    el.id = 'movieTitleReveal';
    el.textContent = `정답: "${title}"`;
    el.style.marginTop = '8px';
    el.style.fontWeight = '700';
    el.style.color = '#2b6cb0';
    el.style.fontSize = '0.95rem';
    el.style.opacity = '0';
    el.style.transition = 'opacity 200ms ease';
    sentenceDisplay.appendChild(el);
    requestAnimationFrame(() => { el.style.opacity = '1'; });
}

function updateDisplay() {
    if (!currentCategory) return;
    const currentSentences = sentenceCategories[currentCategory].sentences;
    const targetText = currentSentences[currentSentenceIndex];
    renderSentenceHighlight(targetText, typingInput ? typingInput.value : '');
    // 문장 길이에 따른 컨테이너 폭 조정
    setContainerWidthForSentence(targetText);
    // 영화 제목 노출 초기화
    clearMovieTitleReveal();
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

    // 카테고리/문장 변경마다 현재 레벨 규칙에 맞는 동물 적용 및 응원 문구 표시
    applyAsciiAnimalForCurrent();
    setAsciiScale();
    showEncourage('general');
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
    if (typingInput) typingInput.focus();
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

let audioContext = null;
let lastBeepAt = 0;
function playErrorBeep() {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        if (!audioContext) audioContext = new AudioCtx();
        // 간단한 스로틀: 50ms 이내 중복 방지
        const nowMs = Date.now();
        if (nowMs - lastBeepAt < 50) return;
        lastBeepAt = nowMs;

        const duration = 0.08; // 80ms
        const now = audioContext.currentTime;
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(700, now);
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.22, now + 0.005);
        gain.gain.linearRampToValueAtTime(0.0, now + duration);
        osc.connect(gain).connect(audioContext.destination);
        osc.start(now);
        osc.stop(now + duration + 0.02);
    } catch (e) {
        // ignore audio errors
    }
}

let lastSuccessAt = 0;
function playSuccessTone() {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        if (!audioContext) audioContext = new AudioCtx();
        // 스로틀: 30ms
        const nowMs = Date.now();
        if (nowMs - lastSuccessAt < 30) return;
        lastSuccessAt = nowMs;

        const duration = 0.09; // 90ms
        const now = audioContext.currentTime;
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(220, now); // 저음 A3 근처
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.15, now + 0.005);
        gain.gain.linearRampToValueAtTime(0.0, now + duration);
        osc.connect(gain).connect(audioContext.destination);
        osc.start(now);
        osc.stop(now + duration + 0.02);
    } catch (_) {
        // ignore
    }
}

let movieChoicesActive = false;
let movieShuffledCorrectIndex = {};
function clearMovieChoices() {
    const el = document.getElementById('movieChoices');
    if (el) el.remove();
    movieChoicesActive = false;
}
function showMovieChoicesAtIndex(index) {
    if (currentCategory !== 'movieQuiz') return;
    const cat = sentenceCategories[currentCategory];
    const originalChoices = Array.isArray(cat.choices) ? cat.choices[index] : null;
    if (!originalChoices || originalChoices.length === 0) return;

    // 정답 인덱스(원본에서의 위치). 없으면 0으로 가정
    const originalCorrect = Array.isArray(cat.answers) ? cat.answers[index] : 0;

    // 섞기: [텍스트, 원래 인덱스] 쌍으로 셔플
    const entries = originalChoices.map((text, i) => ({ text, originalIndex: i }));
    for (let i = entries.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = entries[i];
        entries[i] = entries[j];
        entries[j] = tmp;
    }

    // 섞인 배열에서 정답의 새 위치를 기록
    const shuffledCorrectIdx = entries.findIndex(e => e.originalIndex === originalCorrect);
    movieShuffledCorrectIndex[index] = shuffledCorrectIdx;

    clearMovieChoices();
    const wrap = document.createElement('div');
    wrap.id = 'movieChoices';
    wrap.dataset.questionIndex = String(index);
    wrap.dataset.correctIndex = String(shuffledCorrectIdx);
    wrap.style.marginTop = '6px';
    wrap.style.display = 'grid';
    wrap.style.gridTemplateColumns = '1fr 1fr';
    wrap.style.gap = '6px';

    entries.forEach((entry, i) => {
        const btn = document.createElement('button');
        btn.textContent = `${i + 1}. ${entry.text}`;
        btn.style.padding = '6px 8px';
        btn.style.border = '1px solid #cbd5e1';
        btn.style.borderRadius = '8px';
        btn.style.background = '#fff';
        btn.style.cursor = 'pointer';
        btn.addEventListener('click', () => verifyMovieAnswer(index, i));
        wrap.appendChild(btn);
    });

    sentenceDisplay.appendChild(wrap);
    movieChoicesActive = true;
    focusTypingInput();
}
function verifyMovieAnswer(index, selectedIdx) {
    const cat = sentenceCategories[currentCategory];
    const wrap = document.getElementById('movieChoices');
    // 데이터셋 우선 (셔플 이후 정확)
    let correctIdx = -1;
    if (wrap && typeof wrap.dataset.correctIndex === 'string') {
        correctIdx = parseInt(wrap.dataset.correctIndex, 10);
    } else {
        const correctIdxOriginal = Array.isArray(cat.answers) ? cat.answers[index] : -1;
        correctIdx = (typeof movieShuffledCorrectIndex[index] === 'number') ? movieShuffledCorrectIndex[index] : correctIdxOriginal;
    }
    const isCorrect = selectedIdx === correctIdx;

    if (wrap) {
        const btns = wrap.querySelectorAll('button');
        btns.forEach((b, i) => {
            b.disabled = true;
            b.style.cursor = 'default';
            if (i === correctIdx) {
                b.style.background = '#e6ffed';
                b.style.borderColor = '#34d399';
            }
            if (i === selectedIdx && !isCorrect) {
                b.style.background = '#ffe6e6';
                b.style.borderColor = '#f87171';
            }
        });
    }

    // 정답/오답 텍스트 표시
    clearMovieTitleReveal();
    const feed = document.createElement('div');
    feed.id = 'movieTitleReveal';
    const correctTitle = (cat.titles && cat.titles[index]) ? cat.titles[index] : '';
    feed.textContent = isCorrect ? `정답입니다! → "${correctTitle}"` : `오답입니다! 정답은 "${correctTitle}"`;
    feed.style.marginTop = '8px';
    feed.style.fontWeight = '700';
    feed.style.color = isCorrect ? '#065f46' : '#991b1b';
    feed.style.fontSize = '0.95rem';
    feed.style.opacity = '0';
    feed.style.transition = 'opacity 200ms ease';
    const anchor = document.getElementById('encourageMessage');
    if (anchor) {
        anchor.insertAdjacentElement('afterend', feed);
    } else {
        sentenceDisplay.appendChild(feed);
    }
    requestAnimationFrame(() => { feed.style.opacity = '1'; });

    // 다음 진행 안내
    const hint = document.createElement('div');
    hint.style.marginTop = '4px';
    hint.style.fontSize = '0.85rem';
    hint.style.color = '#475569';
    hint.textContent = '계속할지 종료할지 아래 버튼을 선택하세요.';
    sentenceDisplay.appendChild(hint);

    setTimeout(() => {
        askContinueOrExit();
    }, 400);
}
function onMovieNumberKey(e) {
    if (!movieChoicesActive) return;
    const key = e.key;
    if (!/^[1-9]$/.test(key)) return;
    e.preventDefault();
    e.stopPropagation();
    const wrap = document.getElementById('movieChoices');
    if (!wrap) return;
    const idx = parseInt(key, 10) - 1;
    const btns = wrap.querySelectorAll('button');
    if (idx >= 0 && idx < btns.length) {
        btns[idx].click();
    }
}
function askContinueOrExit() {
    // 기존 confirm 대신 버튼 UI 표시
    // 이전 이어서/종료 UI 제거
    const old = document.getElementById('movieContinueExit');
    if (old) old.remove();

    const wrap = document.createElement('div');
    wrap.id = 'movieContinueExit';
    wrap.style.marginTop = '8px';
    wrap.style.display = 'flex';
    wrap.style.gap = '8px';

    const continueBtn = document.createElement('button');
    continueBtn.textContent = '계속하기';
    continueBtn.style.padding = '6px 10px';
    continueBtn.style.border = '1px solid #cbd5e1';
    continueBtn.style.borderRadius = '8px';
    continueBtn.style.background = '#10b981';
    continueBtn.style.color = '#fff';
    continueBtn.style.cursor = 'pointer';

    const exitBtn = document.createElement('button');
    exitBtn.textContent = '메뉴로 돌아가기';
    exitBtn.style.padding = '6px 10px';
    exitBtn.style.border = '1px solid #cbd5e1';
    exitBtn.style.borderRadius = '8px';
    exitBtn.style.background = '#64748b';
    exitBtn.style.color = '#fff';
    exitBtn.style.cursor = 'pointer';

    continueBtn.addEventListener('click', () => {
        clearMovieTitleReveal();
        clearMovieChoices();
        wrap.remove();
        nextSentence();
        focusTypingInput();
    });

    exitBtn.addEventListener('click', () => {
        clearMovieTitleReveal();
        clearMovieChoices();
        wrap.remove();
        backToMenu();
        focusTypingInput();
    });

    wrap.appendChild(continueBtn);
    wrap.appendChild(exitBtn);
    const anchorForBtns = document.getElementById('encourageMessage');
    if (anchorForBtns) {
        anchorForBtns.insertAdjacentElement('afterend', wrap);
    } else {
        sentenceDisplay.appendChild(wrap);
    }
}
// 번호키로 보기 선택 핸들러 등록
window.addEventListener('keydown', onMovieNumberKey);

typingInput.addEventListener('input', (e) => {
    if (!currentCategory) return;

    const input = e.target.value;
    const target = sentenceCategories[currentCategory].sentences[currentSentenceIndex];

    // 문장 하이라이트 갱신
    renderSentenceHighlight(target, input);

    // 키 입력마다 프레임 업데이트 (요청 사항)
    updateAsciiRunner(false);

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
            // 오타 시 흔들림 + 경고음
            shakeAsciiRunner();
            playErrorBeep();
            showEncourage('error');
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

            // 문장 완성 성공음
            playSuccessTone();
            showEncourage('success');
            // 영화 퀴즈일 경우 제목 노출
            revealMovieTitleAtIndex(currentSentenceIndex);
            // 그리고 객관식 보기 표시
            showMovieChoicesAtIndex(currentSentenceIndex);

            setTimeout(() => {
                if (currentCategory === 'movieQuiz') {
                    return; // 영화 퀴즈는 버튼으로 계속/종료를 결정
                }
                nextSentence();
            }, 0);
        } else if (target.startsWith(input)) {
            e.target.classList.remove('incorrect');
            e.target.classList.remove('correct');
            // 부분 정답 진행 카운트만 업데이트
            if (input.length > asciiLastCorrectCharCount) {
                asciiLastCorrectCharCount = input.length;
                // 올바르게 한 글자 진행될 때 부드러운 성공음
                playSuccessTone();
                showEncourage('partial');
            }
        } else {
            e.target.classList.add('incorrect');
            e.target.classList.remove('correct');
            // 오답 추가 입력 시도에도 흔들림만
            shakeAsciiRunner();
            showEncourage('error');
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
    await loadAsciiFrames();
    initializeCategoryMenu();
}

// 초기화
document.addEventListener('DOMContentLoaded', () => { bootstrap().then(() => setTimeout(() => focusTypingInput(), 0)); }); 

function getCategoryIcon(key, level) {
    const map = {
        middleRowLetters: '⌨️',
        middleRow: '🟪',
        topRow: '🟥',
        bottomRow: '🟩',
        leftHand: '🤚',
        rightHand: '✋',
        realEnglish: '📖'
    };
    if (map[key]) return map[key];
    // 레벨 색상 대체 아이콘
    const levelIcon = { 1:'1️⃣',2:'2️⃣',3:'3️⃣',4:'4️⃣',5:'5️⃣',6:'6️⃣',7:'7️⃣' }[level || 0];
    return levelIcon || '⌨️';
} 

function getKeyboardSVG(highlight = 'middle') {
    // rows: top, middle, bottom (10 keys each)
    const baseKey = (x, y, w, h, fill) => `<rect x="${x}" y="${y}" rx="3" ry="3" width="${w}" height="${h}" fill="${fill}" stroke="#bbb"/>`;
    const w = 16, h = 12, gap = 4;
    const colNormal = '#eee';
    const colHL = '#cde4ff';

    const renderRow = (rowIndex, y) => {
        const keys = [];
        for (let i = 0; i < 10; i++) {
            const x = 4 + i * (w + gap);
            let fill = colNormal;
            if (highlight === 'top' && rowIndex === 0) fill = colHL;
            if (highlight === 'middle' && rowIndex === 1) fill = colHL;
            if (highlight === 'middleAlt' && rowIndex === 1 && (i % 2 === 0)) fill = colHL; // 띄엄띄엄 하이라이트
            if (highlight === 'bottom' && rowIndex === 2) fill = colHL;
            if (highlight === 'left' && i < 5) fill = colHL;
            if (highlight === 'right' && i >= 5) fill = colHL;
            keys.push(baseKey(x, y, w, h, fill));
        }
        return keys.join('');
    };

    return `
<svg viewBox="0 0 190 60" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <rect x="1" y="1" width="188" height="58" rx="6" ry="6" fill="#f7f7f7" stroke="#ddd"/>
  ${renderRow(0, 10)}
  ${renderRow(1, 26)}
  ${renderRow(2, 42)}
</svg>`;
}

function getHighlightForCategory(key) {
    if (key === 'topRow') return 'top';
    if (key === 'middleRow') return 'middle';
    if (key === 'middleRowLetters') return 'middleAlt';
    if (key === 'bottomRow') return 'bottom';
    if (key === 'leftHand') return 'left';
    if (key === 'rightHand') return 'right';
    // 실전은 하이라이트 없음
    return 'none';
} 

function setContainerWidthForSentence(text) {
    const container = document.querySelector('.container');
    if (!container) return;
    const viewport = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    // 작은 화면에서는 확장하지 않음
    if (viewport < 900) {
        container.style.maxWidth = '';
        return;
    }
    // 실제 픽셀 폭 측정
    const measure = document.createElement('span');
    // sentenceDisplay가 존재한다면 해당 스타일을 참조
    if (sentenceDisplay) {
        const cs = window.getComputedStyle(sentenceDisplay);
        measure.style.fontFamily = cs.fontFamily;
        measure.style.fontSize = cs.fontSize;
        measure.style.fontWeight = cs.fontWeight;
        measure.style.letterSpacing = cs.letterSpacing;
    }
    measure.style.whiteSpace = 'pre';
    measure.style.visibility = 'hidden';
    measure.style.position = 'absolute';
    measure.style.left = '-9999px';
    measure.style.top = '-9999px';
    measure.textContent = text || '';
    document.body.appendChild(measure);
    const textWidth = measure.offsetWidth;
    document.body.removeChild(measure);

    // 컨테이너/문장 패딩 등을 고려한 여유 폭(약 200px)
    let desired = textWidth + 200;
    // 최소/최대 한계
    if (desired < 800) desired = 800;
    if (desired > 1600) desired = 1600;
    container.style.maxWidth = `${Math.round(desired)}px`;
} 

// 현재 타깃 문장 반환 헬퍼
function getCurrentTargetText() {
    if (!currentCategory) return '';
    const sentences = sentenceCategories[currentCategory]?.sentences;
    if (!Array.isArray(sentences)) return '';
    return sentences[currentSentenceIndex] || '';
}

// 리사이즈 시 폭 재계산
window.addEventListener('resize', () => {
    const t = getCurrentTargetText();
    if (t) setContainerWidthForSentence(t);
}); 