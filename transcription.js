// 책 필사 관련 변수
let transcriptionData = {
    title: '',
    author: '',
    pages: {},
    currentPage: 1
    // 불필요한 메타데이터 제거로 파일 크기 최적화
};

let currentSentenceCount = 0;

// 메모리에서만 관리하는 저장 상태 (파일에 저장되지 않음)
let hasBeenSaved = false;
let savePath = null;

// 책 필사 기능 초기화
function initializeBookTranscription() {
    const bookTranscriptionMenu = document.getElementById('bookTranscriptionMenu');
    const startTranscriptionBtn = document.getElementById('startTranscriptionBtn');
    const loadTranscriptionBtn = document.getElementById('loadTranscriptionBtn');
    const loadTranscriptionFile = document.getElementById('loadTranscriptionFile');
    const backToSetupBtn = document.getElementById('backToSetupBtn');
    const addSentenceBtn = document.getElementById('addSentenceBtn');
    const saveTranscriptionBtn = document.getElementById('saveTranscriptionBtn');
    const nextPageBtn = document.getElementById('nextPageBtn');
    const prevPageBtn = document.getElementById('prevPageBtn');

    if (bookTranscriptionMenu) {
        bookTranscriptionMenu.addEventListener('click', (e) => {
            e.preventDefault();
            showBookTranscription();
        });
    }

    if (startTranscriptionBtn) {
        startTranscriptionBtn.addEventListener('click', startTranscription);
    }

    if (loadTranscriptionBtn) {
        loadTranscriptionBtn.addEventListener('click', () => {
            loadTranscriptionFile.click();
        });
    }

    if (loadTranscriptionFile) {
        loadTranscriptionFile.addEventListener('change', loadTranscriptionFromFile);
    }

    if (backToSetupBtn) {
        backToSetupBtn.addEventListener('click', () => {
            showTranscriptionSetup();
        });
    }

    if (addSentenceBtn) {
        addSentenceBtn.addEventListener('click', addNewSentence);
    }

    if (saveTranscriptionBtn) {
        saveTranscriptionBtn.addEventListener('click', saveTranscription);
    }

    const printTranscriptionBtn = document.getElementById('printTranscriptionBtn');
    if (printTranscriptionBtn) {
        printTranscriptionBtn.addEventListener('click', printTranscription);
    }

    const printLikedBtn = document.getElementById('printLikedBtn');
    if (printLikedBtn) {
        printLikedBtn.addEventListener('click', printLikedSentences);
    }

    if (nextPageBtn) {
        nextPageBtn.addEventListener('click', () => {
            saveCurrentPageSentences();
            transcriptionData.currentPage++;
            loadPageSentences();
            updatePageButtons();
        });
    }

    if (prevPageBtn) {
        prevPageBtn.addEventListener('click', () => {
            if (transcriptionData.currentPage > 1) {
                saveCurrentPageSentences();
                transcriptionData.currentPage--;
                loadPageSentences();
                updatePageButtons();
            }
        });
    }

    // 자동 저장 기능 비활성화 (10초마다)
    // setInterval(() => {
    //     if (document.getElementById('transcriptionTyping').style.display !== 'none') {
    //         saveCurrentPageSentences();
    //         // 자동 저장 시에도 파일에 저장 (이미 저장된 경로가 있는 경우)
    //         autoSaveToFile();
    //     }
    // }, 10000);
}

function showBookTranscription() {
    console.log('showBookTranscription called');
    
    const categoryMenu = document.getElementById('categoryMenu');
    const typingArea = document.getElementById('typingArea');
    const bookTypingArea = document.getElementById('bookTypingArea');
    const bookTranscriptionArea = document.getElementById('bookTranscriptionArea');
    const container = document.querySelector('.container');
    
    // 모든 다른 영역 숨기기
    if (categoryMenu) categoryMenu.style.display = 'none';
    if (typingArea) {
        typingArea.style.display = 'none';
        typingArea.classList.remove('active');
    }
    if (bookTypingArea) bookTypingArea.style.display = 'none';
    if (container) container.style.display = 'none';
    
    // 책 필사 영역 표시
    if (bookTranscriptionArea) {
        bookTranscriptionArea.style.display = 'block';
        showTranscriptionSetup();
    }
    
    // updateNavigationState 함수가 있는 경우에만 호출
    if (typeof updateNavigationState === 'function') {
        updateNavigationState('bookTranscription');
    }
}

function showTranscriptionSetup() {
    const transcriptionSetup = document.getElementById('transcriptionSetup');
    const transcriptionTyping = document.getElementById('transcriptionTyping');
    
    if (transcriptionSetup) transcriptionSetup.style.display = 'block';
    if (transcriptionTyping) transcriptionTyping.style.display = 'none';
    
    // 입력 필드 초기화
    const bookTitleInput = document.getElementById('bookTitleInput');
    const bookAuthorInput = document.getElementById('bookAuthorInput');
    
    if (bookTitleInput) bookTitleInput.value = transcriptionData.title || '';
    if (bookAuthorInput) bookAuthorInput.value = transcriptionData.author || '';
}

function startTranscription() {
    const bookTitleInput = document.getElementById('bookTitleInput');
    const bookAuthorInput = document.getElementById('bookAuthorInput');
    
    if (!bookTitleInput.value.trim() || !bookAuthorInput.value.trim()) {
        alert('책 제목과 저자를 모두 입력해주세요.');
        return;
    }
    
    transcriptionData.title = bookTitleInput.value.trim();
    transcriptionData.author = bookAuthorInput.value.trim();
    transcriptionData.currentPage = 1;
    
    showTranscriptionTyping();
}

function showTranscriptionTyping() {
    const transcriptionSetup = document.getElementById('transcriptionSetup');
    const transcriptionTyping = document.getElementById('transcriptionTyping');
    
    if (transcriptionSetup) transcriptionSetup.style.display = 'none';
    if (transcriptionTyping) transcriptionTyping.style.display = 'block';
    
    // 책 정보 표시
    const transcriptionBookTitle = document.getElementById('transcriptionBookTitle');
    const transcriptionBookAuthor = document.getElementById('transcriptionBookAuthor');
    
    if (transcriptionBookTitle) transcriptionBookTitle.textContent = transcriptionData.title;
    if (transcriptionBookAuthor) transcriptionBookAuthor.textContent = `저자: ${transcriptionData.author}`;
    
    loadPageSentences();
}

function loadPageSentences() {
    const sentenceList = document.getElementById('sentenceList');
    if (!sentenceList) {
        console.error('sentenceList 요소를 찾을 수 없습니다.');
        return;
    }
    
    console.log('loadPageSentences 시작 - sentenceList:', sentenceList);
    
    // 페이지 정보 업데이트
    const currentPageNumber = document.getElementById('currentPageNumber');
    if (currentPageNumber) {
        currentPageNumber.textContent = transcriptionData.currentPage;
    }
    
    // 기존 문장들 제거
    sentenceList.innerHTML = '';
    currentSentenceCount = 0;
    
    const currentPage = transcriptionData.currentPage;
    const pageData = transcriptionData.pages[currentPage];
    
    console.log('현재 페이지:', currentPage, '페이지 데이터:', pageData);
    
    if (pageData && pageData.sentences && pageData.sentences.length > 0) {
        // 기존 문장들 로드
        console.log('기존 문장들 로드 시작:', pageData.sentences.length, '개');
        pageData.sentences.forEach((sentence, index) => {
            const isLiked = pageData.liked && pageData.liked[index] === 1;
            const difficulty = pageData.difficulties && pageData.difficulties[index] ? pageData.difficulties[index] : 0;
            const sentenceNumber = index + 1;
            console.log(`문장 ${sentenceNumber} 로드:`, sentence, '좋아요:', isLiked, '난이도:', difficulty);
            addSentenceToDOM(sentence, pageData.liked && pageData.liked[index] === 1 ? 1 : 0, sentenceNumber, difficulty);
        });
        currentSentenceCount = pageData.sentences.length;
        console.log('기존 문장들 로드 완료, currentSentenceCount:', currentSentenceCount);
    } else {
        // 빈 문장 입력 필드 추가 (1번 문장)
        console.log('빈 문장 입력 필드 추가');
        addSentenceToDOM('', 0, 1);
        currentSentenceCount = 1;
        console.log('빈 문장 입력 필드 추가 완료, currentSentenceCount:', currentSentenceCount);
    }
    
    console.log('최종 sentenceList 자식 요소 수:', sentenceList.children.length);
    
    // 페이지 버튼 상태 업데이트
    updatePageButtons();
}

// 페이지 버튼 상태 업데이트 함수
function updatePageButtons() {
    const prevPageBtn = document.getElementById('prevPageBtn');
    const nextPageBtn = document.getElementById('nextPageBtn');
    
    if (prevPageBtn) {
        prevPageBtn.disabled = transcriptionData.currentPage <= 1;
    }
    
    if (nextPageBtn) {
        // 다음 페이지 버튼은 항상 활성화 (새 페이지 생성 가능)
        nextPageBtn.disabled = false;
    }
    
    console.log('페이지 버튼 상태 업데이트 완료 - 현재 페이지:', transcriptionData.currentPage);
}

function saveCurrentPageSentences() {
    const currentPage = transcriptionData.currentPage;
    const sentenceInputs = document.querySelectorAll('.sentence-input');
    const likeBtns = document.querySelectorAll('.like-btn');
    
    const sentences = [];
    const liked = [];
    const difficulties = [];
    
    sentenceInputs.forEach((input, index) => {
        if (input && input.value.trim()) {
            sentences.push(input.value.trim());
            // 좋아요 상태를 1/0으로 저장
            const isLiked = likeBtns[index] && likeBtns[index].innerHTML === '❤️';
            liked.push(isLiked ? 1 : 0);
            
            // 난이도 저장 (선택되지 않은 경우 0)
            const sentenceItem = input.closest('.sentence-item');
            const activeDifficultyBtn = sentenceItem.querySelector('.difficulty-btn.active');
            const difficulty = activeDifficultyBtn ? parseInt(activeDifficultyBtn.dataset.level) : 0;
            difficulties.push(difficulty);
        }
    });
    
    // 현재 페이지 데이터 저장
    transcriptionData.pages[currentPage] = {
        sentences: sentences,
        liked: liked,
        difficulties: difficulties
    };
    
    console.log(`페이지 ${currentPage} 저장 완료:`, transcriptionData.pages[currentPage]);
}

function addNewSentence() {
    const sentenceList = document.getElementById('sentenceList');
    
    if (!sentenceList) return;
    
    currentSentenceCount++;
    addSentenceToDOM('', 0, currentSentenceCount, 0);
    
    // 새로 추가된 입력 필드에 포커스
    const newInput = sentenceList.querySelector('.sentence-item:last-child .sentence-input');
    if (newInput) {
        newInput.focus();
        newInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function addSentenceToDOM(sentenceText = '', isLiked = 0, sentenceNumber = null, difficulty = 0) {
    const sentenceList = document.getElementById('sentenceList');
    if (!sentenceList) {
        console.error('addSentenceToDOM: sentenceList 요소를 찾을 수 없습니다.');
        return;
    }
    
    console.log('addSentenceToDOM 시작:', { sentenceText, isLiked, sentenceNumber });
    
    const sentenceItem = document.createElement('div');
    sentenceItem.className = 'sentence-item';
    if (isLiked === 1) sentenceItem.classList.add('liked');
    
    const sentenceHeader = document.createElement('div');
    sentenceHeader.className = 'sentence-header';
    
    const sentenceNumberDiv = document.createElement('div');
    sentenceNumberDiv.className = 'sentence-number';
    sentenceNumberDiv.textContent = sentenceNumber || (currentSentenceCount + 1);
    
    const addBtn = document.createElement('button');
    addBtn.className = 'add-sentence-btn';
    addBtn.innerHTML = '+';
    addBtn.title = '새 문장 추가';
    
    const likeBtn = document.createElement('button');
    likeBtn.className = 'like-btn';
    likeBtn.innerHTML = isLiked === 1 ? '❤️' : '🤍';
    
    // 난이도 선택 버튼들 생성
    const difficultyContainer = document.createElement('div');
    difficultyContainer.className = 'difficulty-container';
    
    for (let i = 1; i <= 5; i++) {
        const difficultyBtn = document.createElement('button');
        difficultyBtn.className = 'difficulty-btn';
        difficultyBtn.textContent = i;
        difficultyBtn.title = `난이도 ${i}`;
        difficultyBtn.dataset.level = i;
        
        // 난이도 버튼 클릭 이벤트
        difficultyBtn.addEventListener('click', function() {
            // 같은 문장의 다른 난이도 버튼들 비활성화
            const allDifficultyBtns = sentenceItem.querySelectorAll('.difficulty-btn');
            allDifficultyBtns.forEach(btn => btn.classList.remove('active'));
            
            // 클릭된 버튼 활성화
            this.classList.add('active');
            
            // 현재 페이지 문장 저장
            saveCurrentPageSentences();
        });
        
        difficultyContainer.appendChild(difficultyBtn);
    }
    
    // 기존 난이도가 있다면 해당 버튼 활성화
    if (difficulty > 0 && difficulty <= 5) {
        const targetBtn = difficultyContainer.querySelector(`[data-level="${difficulty}"]`);
        if (targetBtn) {
            targetBtn.classList.add('active');
        }
    }
    
    // 1번 문장이 아닐 때만 삭제 버튼 생성
    if (sentenceNumber !== 1) {
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = '삭제';
        
        sentenceHeader.appendChild(sentenceNumberDiv);
        sentenceHeader.appendChild(addBtn);
        sentenceHeader.appendChild(likeBtn);
        sentenceHeader.appendChild(difficultyContainer);
        sentenceHeader.appendChild(deleteBtn);
        
        // 삭제 버튼 이벤트
        deleteBtn.addEventListener('click', function() {
            deleteSentence(sentenceItem);
        });
    } else {
        // 1번 문장일 때는 삭제 버튼 없이
        sentenceHeader.appendChild(sentenceNumberDiv);
        sentenceHeader.appendChild(addBtn);
        sentenceHeader.appendChild(likeBtn);
        sentenceHeader.appendChild(difficultyContainer);
    }
    
    const sentenceContainer = document.createElement('div');
    sentenceContainer.className = 'sentence-container';
    
    const sentenceContent = document.createElement('div');
    sentenceContent.className = 'sentence-content';
    
    const input = document.createElement('textarea');
    input.className = 'sentence-input';
    input.placeholder = '문장을 입력하세요...';
    input.value = sentenceText;
    
    console.log('input 요소 생성 완료:', input);
    
    // 한국어 IME 입력 처리
    let isComposing = false;
    
    input.addEventListener('compositionstart', () => {
        isComposing = true;
    });
    
    input.addEventListener('compositionend', () => {
        isComposing = false;
    });
    
    // 입력 이벤트 처리
    input.addEventListener('input', function() {
        // 자동 높이 조절
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
        
        // 완료 상태 표시
        if (this.value.trim()) {
            this.classList.add('completed');
        } else {
            this.classList.remove('completed');
        }
        
        // 현재 페이지 문장 저장
        saveCurrentPageSentences();
    });
    
    // Enter 키로 새 문장 추가 (마지막 문장에서만)
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !isComposing) {
            const sentenceItems = document.querySelectorAll('.sentence-item');
            const isLastSentence = this.closest('.sentence-item') === sentenceItems[sentenceItems.length - 1];
            
            if (isLastSentence) {
                e.preventDefault();
                addNewSentence();
            }
        }
    });
    
    // + 버튼 이벤트 (새 문장 추가)
    addBtn.addEventListener('click', function() {
        const currentSentenceItem = this.closest('.sentence-item');
        const sentenceList = document.getElementById('sentenceList');
        
        if (currentSentenceItem && sentenceList) {
            // 현재 문장 다음에 새 문장 추가
            const newSentenceItem = createNewSentenceItem();
            
            // 현재 문장 다음에 삽입
            currentSentenceItem.after(newSentenceItem);
            
            // 문장 번호 재정렬
            reorderSentenceNumbers();
            
            // 새로 추가된 입력 필드에 포커스
            const newInput = newSentenceItem.querySelector('.sentence-input');
            if (newInput) {
                newInput.focus();
                newInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            
            // 현재 문장 수 업데이트
            currentSentenceCount = sentenceList.querySelectorAll('.sentence-item').length;
            
            // 데이터 저장
            saveCurrentPageSentences();
        }
    });
    
    // 좋아요 버튼 이벤트
    likeBtn.addEventListener('click', function() {
        const isLiked = this.innerHTML === '❤️';
        this.innerHTML = isLiked ? '🤍' : '❤️';
        
        // 부모 요소의 liked 클래스 토글
        const sentenceItem = this.closest('.sentence-item');
        sentenceItem.classList.toggle('liked');
        
        // 데이터 저장
        saveCurrentPageSentences();
    });
    
    sentenceContent.appendChild(input);
    
    sentenceContainer.appendChild(sentenceContent);
    
    sentenceItem.appendChild(sentenceHeader);
    sentenceItem.appendChild(sentenceContainer);
    
    // 삭제 버튼 이벤트
    // deleteBtn.addEventListener('click', function() {
    //     deleteSentence(sentenceItem);
    // });
    
    // 초기 높이 설정
    if (sentenceText) {
        input.style.height = 'auto';
        input.style.height = input.scrollHeight + 'px';
        input.classList.add('completed');
    }
    
    // sentenceList에 추가
    console.log('sentenceList에 추가 전 자식 요소 수:', sentenceList.children.length);
    sentenceList.appendChild(sentenceItem);
    console.log('sentenceList에 추가 완료, 자식 요소 수:', sentenceList.children.length);
    console.log('생성된 sentenceItem:', sentenceItem);
}

// 새로운 문장 아이템을 생성하는 함수
function createNewSentenceItem() {
    const sentenceItem = document.createElement('div');
    sentenceItem.className = 'sentence-item';
    
    const sentenceHeader = document.createElement('div');
    sentenceHeader.className = 'sentence-header';
    
    const sentenceNumberDiv = document.createElement('div');
    sentenceNumberDiv.className = 'sentence-number';
    sentenceNumberDiv.textContent = '새';
    
    const addBtn = document.createElement('button');
    addBtn.className = 'add-sentence-btn';
    addBtn.innerHTML = '+';
    addBtn.title = '새 문장 추가';
    
    const likeBtn = document.createElement('button');
    likeBtn.className = 'like-btn';
    likeBtn.innerHTML = '🤍';
    
    // 새로 생성되는 문장은 항상 1번이 아니므로 삭제 버튼 생성
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '삭제';
    
    sentenceHeader.appendChild(sentenceNumberDiv);
    sentenceHeader.appendChild(addBtn);
    sentenceHeader.appendChild(likeBtn);
    sentenceHeader.appendChild(deleteBtn);
    
    const sentenceContainer = document.createElement('div');
    sentenceContainer.className = 'sentence-container';
    
    const sentenceContent = document.createElement('div');
    sentenceContent.className = 'sentence-content';
    
    const input = document.createElement('textarea');
    input.className = 'sentence-input';
    input.placeholder = '문장을 입력하세요...';
    
    // 한국어 IME 입력 처리
    let isComposing = false;
    
    input.addEventListener('compositionstart', () => {
        isComposing = true;
    });
    
    input.addEventListener('compositionend', () => {
        isComposing = false;
    });
    
    // 입력 이벤트 처리
    input.addEventListener('input', function() {
        // 자동 높이 조절
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
        
        // 완료 상태 표시
        if (this.value.trim()) {
            this.classList.add('completed');
        } else {
            this.classList.remove('completed');
        }
        
        // 현재 페이지 문장 저장
        saveCurrentPageSentences();
    });
    
    // Enter 키로 새 문장 추가 (마지막 문장에서만)
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !isComposing) {
            const sentenceItems = document.querySelectorAll('.sentence-item');
            const isLastSentence = this.closest('.sentence-item') === sentenceItems[sentenceItems.length - 1];
            
            if (isLastSentence) {
                e.preventDefault();
                addNewSentence();
            }
        }
    });
    
    // + 버튼 이벤트 (새 문장 추가)
    addBtn.addEventListener('click', function() {
        const currentSentenceItem = this.closest('.sentence-item');
        const sentenceList = document.getElementById('sentenceList');
        
        if (currentSentenceItem && sentenceList) {
            // 현재 문장 다음에 새 문장 추가
            const newSentenceItem = createNewSentenceItem();
            
            // 현재 문장 다음에 삽입
            currentSentenceItem.after(newSentenceItem);
            
            // 문장 번호 재정렬
            reorderSentenceNumbers();
            
            // 새로 추가된 입력 필드에 포커스
            const newInput = newSentenceItem.querySelector('.sentence-input');
            if (newInput) {
                newInput.focus();
                newInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            
            // 현재 문장 수 업데이트
            currentSentenceCount = sentenceList.querySelectorAll('.sentence-item').length;
            
            // 데이터 저장
            saveCurrentPageSentences();
        }
    });
    
    // 좋아요 버튼 이벤트
    likeBtn.addEventListener('click', function() {
        const isLiked = this.innerHTML === '❤️';
        this.innerHTML = isLiked ? '🤍' : '❤️';
        
        // 부모 요소의 liked 클래스 토글
        const sentenceItem = this.closest('.sentence-item');
        sentenceItem.classList.toggle('liked');
        
        // 데이터 저장
        saveCurrentPageSentences();
    });
    
    sentenceContent.appendChild(input);
    
    sentenceContainer.appendChild(sentenceContent);
    
    sentenceItem.appendChild(sentenceHeader);
    sentenceItem.appendChild(sentenceContainer);
    
    // 삭제 버튼 이벤트
    deleteBtn.addEventListener('click', function() {
        deleteSentence(sentenceItem);
    });
    
    return sentenceItem;
}

async function saveTranscription() {
    saveCurrentPageSentences();
    
    // 한 번도 저장된 적이 없으면 기본 파일명으로 저장
    if (!hasBeenSaved) {
        // 기본 파일명 생성
        const defaultFileName = `${transcriptionData.title}_필사_${new Date().toISOString().split('T')[0]}.json`;
        
        // 파일 다운로드
        const dataStr = JSON.stringify(transcriptionData, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = defaultFileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        // 저장 상태 업데이트 (메모리에서만 관리)
        hasBeenSaved = true;
        savePath = defaultFileName;
    } else {
        // 이미 저장된 적이 있으면 같은 파일명으로 다운로드
        // 브라우저 보안 정책상 덮어쓰기는 불가능하지만, 같은 이름으로 다운로드
        const dataStr = JSON.stringify(transcriptionData, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = savePath; // 첫 저장 시 선택한 파일명 사용
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        // 사용자에게 안내
        console.log(`파일이 ${savePath}로 다운로드되었습니다. 기존 파일을 덮어쓰려면 수동으로 교체해주세요.`);
    }
}

function loadTranscriptionFromFile(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const loadedData = JSON.parse(e.target.result);
            
            // 데이터 검증
            if (loadedData.title && loadedData.author && loadedData.pages) {
                transcriptionData = {
                    title: loadedData.title,
                    author: loadedData.author,
                    pages: loadedData.pages,
                    currentPage: loadedData.currentPage || 1
                };
                
                // 입력 필드 업데이트
                const bookTitleInput = document.getElementById('bookTitleInput');
                const bookAuthorInput = document.getElementById('bookAuthorInput');
                
                if (bookTitleInput) bookTitleInput.value = transcriptionData.title;
                if (bookAuthorInput) bookAuthorInput.value = transcriptionData.author;
                
                // 마지막 페이지 찾기
                const pageKeys = Object.keys(transcriptionData.pages);
                if (pageKeys.length > 0) {
                    // 페이지 번호를 숫자로 변환하여 정렬
                    const sortedPages = pageKeys
                        .map(key => parseInt(key))
                        .filter(num => !isNaN(num))
                        .sort((a, b) => a - b);
                    
                    if (sortedPages.length > 0) {
                        const lastPage = sortedPages[sortedPages.length - 1];
                        transcriptionData.currentPage = lastPage;
                        
                        // 마지막 페이지의 문장들 로드
                        loadPageSentences();
                        
                        // 타이핑 화면으로 전환
                        showTranscriptionTyping();
                        
                        console.log(`"${transcriptionData.title}" 필사 데이터를 불러왔습니다. 마지막 페이지(${lastPage})로 이동했습니다.`);
                    }
                }
            } else {
                alert('올바르지 않은 필사 파일 형식입니다.');
            }
        } catch (error) {
            alert('파일을 읽는 중 오류가 발생했습니다.');
            console.error('Error loading transcription file:', error);
        }
    };
    
    reader.readAsText(file);
    event.target.value = ''; // 파일 선택 초기화
}

// 문장 삭제 함수
function deleteSentence(sentenceItem) {
    const sentenceList = document.getElementById('sentenceList');
    const sentenceItems = sentenceList.querySelectorAll('.sentence-item');
    
    // 삭제할 문장의 인덱스 찾기
    let deleteIndex = -1;
    sentenceItems.forEach((item, index) => {
        if (item === sentenceItem) {
            deleteIndex = index;
        }
    });
    
    if (deleteIndex !== -1) {
        // DOM에서 문장 제거
        sentenceItem.remove();
        
        // 문장 번호 재정렬
        reorderSentenceNumbers();
        
        // 데이터 저장
        saveCurrentPageSentences();
        
        // 현재 문장 수 업데이트
        currentSentenceCount = sentenceList.querySelectorAll('.sentence-item').length;
    }
}

// 문장 번호 재정렬 함수
function reorderSentenceNumbers() {
    const sentenceItems = document.querySelectorAll('.sentence-item');
    sentenceItems.forEach((item, index) => {
        const numberSpan = item.querySelector('.sentence-number');
        if (numberSpan) {
            numberSpan.textContent = index + 1;
        }
    });
}

// 자동 저장 알림 표시 함수
function showAutoSaveNotification() {
    const notification = document.getElementById('autoSaveNotification');
    if (notification) {
        // 알림 표시
        notification.style.display = 'block';
        notification.classList.add('show');
        
        // 1초 후 자동으로 숨기기
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.style.display = 'none';
            }, 300);
        }, 1000);
    }
}

// 자동 저장 시 파일에 저장하는 함수
function autoSaveToFile() {
    // 이미 저장된 경로가 있는 경우에만 파일에 저장
    if (hasBeenSaved && savePath) {
        const dataStr = JSON.stringify(transcriptionData, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = savePath;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}

// 전체 프린트 기능
function printTranscription() {
    // 현재 저장된 문장들을 가져오기
    saveCurrentPageSentences();
    
    // 프린트용 HTML 생성
    const printContent = document.createElement('div');
    printContent.className = 'print-content';
    
    // 제목과 저자 정보
    const title = document.createElement('h1');
    title.textContent = `${transcriptionData.title} - ${transcriptionData.author}`;
    printContent.appendChild(title);
    
    // 페이지별 문장들 추가
    const pageNumbers = Object.keys(transcriptionData.pages).sort((a, b) => parseInt(a) - parseInt(b));
    
    pageNumbers.forEach(pageNum => {
        const page = transcriptionData.pages[pageNum];
        if (page && page.sentences && page.sentences.length > 0) {
            const pageContent = document.createElement('div');
            pageContent.className = 'page-content';
            
            const pageTitle = document.createElement('h2');
            pageTitle.textContent = `${pageNum}페이지`;
            pageContent.appendChild(pageTitle);
            
            page.sentences.forEach((sentence, index) => {
                if (sentence.trim()) {
                    const sentenceItem = document.createElement('div');
                    sentenceItem.className = 'sentence-item';
                    
                    const sentenceNumber = document.createElement('span');
                    sentenceNumber.className = 'sentence-number';
                    sentenceNumber.textContent = `${index + 1}. `;
                    
                    const sentenceText = document.createElement('span');
                    sentenceText.className = 'sentence-text';
                    sentenceText.textContent = sentence;
                    
                    // 난이도 정보 추가
                    if (page.difficulties && page.difficulties[index] > 0) {
                        const difficultyInfo = document.createElement('span');
                        difficultyInfo.className = 'difficulty-info';
                        difficultyInfo.textContent = ` [난이도: ${page.difficulties[index]}]`;
                        difficultyInfo.style.color = '#007bff';
                        difficultyInfo.style.fontSize = '0.9em';
                        sentenceText.appendChild(difficultyInfo);
                    }
                    
                    sentenceItem.appendChild(sentenceNumber);
                    sentenceItem.appendChild(sentenceText);
                    pageContent.appendChild(sentenceItem);
                }
            });
            
            printContent.appendChild(pageContent);
        }
    });
    
    // 기존 프린트 컨텐츠가 있다면 제거
    const existingPrintContent = document.querySelector('.print-content');
    if (existingPrintContent) {
        existingPrintContent.remove();
    }
    
    // 새로운 프린트 컨텐츠를 body에 추가
    document.body.appendChild(printContent);
    
    // 프린트 실행
    window.print();
    
    // 프린트 후 프린트 컨텐츠 제거
    setTimeout(() => {
        if (printContent.parentNode) {
            printContent.parentNode.removeChild(printContent);
        }
    }, 1000);
}

// 좋아요 문장만 프린트하는 기능
function printLikedSentences() {
    // 현재 저장된 문장들을 가져오기
    saveCurrentPageSentences();
    
    // 프린트용 HTML 생성
    const printContent = document.createElement('div');
    printContent.className = 'print-content';
    
    // 제목과 저자 정보
    const title = document.createElement('h1');
    title.textContent = `${transcriptionData.title} - ${transcriptionData.author} (좋아요 문장 모음)`;
    printContent.appendChild(title);
    
    // 좋아요 문장들만 수집
    const likedSentences = [];
    const pageNumbers = Object.keys(transcriptionData.pages).sort((a, b) => parseInt(a) - parseInt(b));
    
    pageNumbers.forEach(pageNum => {
        const page = transcriptionData.pages[pageNum];
        if (page && page.sentences && page.liked) {
            page.sentences.forEach((sentence, index) => {
                if (sentence.trim() && page.liked[index] === 1) {
                    likedSentences.push({
                        page: pageNum,
                        sentence: sentence,
                        originalIndex: index
                    });
                }
            });
        }
    });
    
    if (likedSentences.length === 0) {
        // 좋아요 문장이 없는 경우
        const noLikedMessage = document.createElement('div');
        noLikedMessage.style.textAlign = 'center';
        noLikedMessage.style.marginTop = '50px';
        noLikedMessage.style.fontSize = '16pt';
        noLikedMessage.style.color = '#666';
        noLikedMessage.textContent = '좋아요를 누른 문장이 없습니다.';
        printContent.appendChild(noLikedMessage);
    } else {
        // 좋아요 문장들을 페이지별로 그룹화
        const pageGroups = {};
        likedSentences.forEach(item => {
            if (!pageGroups[item.page]) {
                pageGroups[item.page] = [];
            }
            pageGroups[item.page].push(item);
        });
        
        // 페이지별로 출력
        Object.keys(pageGroups).sort((a, b) => parseInt(a) - parseInt(b)).forEach(pageNum => {
            const pageContent = document.createElement('div');
            pageContent.className = 'page-content';
            
            const pageTitle = document.createElement('h2');
            pageTitle.textContent = `${pageNum}페이지`;
            pageContent.appendChild(pageTitle);
            
            pageGroups[pageNum].forEach((item, index) => {
                const sentenceItem = document.createElement('div');
                sentenceItem.className = 'sentence-item';
                
                const sentenceNumber = document.createElement('span');
                sentenceNumber.className = 'sentence-number';
                sentenceNumber.textContent = `${index + 1}. `;
                
                const sentenceText = document.createElement('span');
                sentenceText.className = 'sentence-text';
                sentenceText.textContent = item.sentence;
                
                // 난이도 정보 추가
                const page = transcriptionData.pages[item.page];
                if (page && page.difficulties && page.difficulties[item.originalIndex] > 0) {
                    const difficultyInfo = document.createElement('span');
                    difficultyInfo.className = 'difficulty-info';
                    difficultyInfo.textContent = ` [난이도: ${page.difficulties[item.originalIndex]}]`;
                    difficultyInfo.style.color = '#007bff';
                    difficultyInfo.style.fontSize = '0.9em';
                    sentenceText.appendChild(difficultyInfo);
                }
                
                sentenceItem.appendChild(sentenceNumber);
                sentenceItem.appendChild(sentenceText);
                pageContent.appendChild(sentenceItem);
            });
            
            printContent.appendChild(pageContent);
        });
    }
    
    // 기존 프린트 컨텐츠가 있다면 제거
    const existingPrintContent = document.querySelector('.print-content');
    if (existingPrintContent) {
        existingPrintContent.remove();
    }
    
    // 새로운 프린트 컨텐츠를 body에 추가
    document.body.appendChild(printContent);
    
    // 프린트 실행
    window.print();
    
    // 프린트 후 프린트 컨텐츠 제거
    setTimeout(() => {
        if (printContent.parentNode) {
            printContent.parentNode.removeChild(printContent);
        }
    }, 1000);
}

// 초기 파일 자동 저장 함수 (사용하지 않음 - 제거됨)
// function autoSaveInitialFile() {
//     // 기본 파일명 생성
//     const defaultFileName = `${transcriptionData.title}_필사_${new Date().toISOString().split('T')[0]}.json`;
//     
//     // 파일 다운로드
//     const dataStr = JSON.stringify(transcriptionData, null, 2);
//     const blob = new Blob([dataStr], { type: 'application/json' });
//     const url = URL.createObjectURL(blob);
//     
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = defaultFileName;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
//     
//     // 저장 상태 업데이트 (메모리에서만 관리)
//     hasBeenSaved = true;
//     savePath = defaultFileName;
// }

 