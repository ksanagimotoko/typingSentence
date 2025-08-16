// 책 필사 관련 변수
let transcriptionData = {
    title: '',
    author: '',
    pages: {},
    currentPage: 1,
    createdAt: new Date().toISOString(),
    lastModified: new Date().toISOString()
};

let currentSentenceCount = 0;

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

    if (nextPageBtn) {
        nextPageBtn.addEventListener('click', () => {
            saveCurrentPageSentences();
            transcriptionData.currentPage++;
            loadPageSentences();
        });
    }

    if (prevPageBtn) {
        prevPageBtn.addEventListener('click', () => {
            if (transcriptionData.currentPage > 1) {
                saveCurrentPageSentences();
                transcriptionData.currentPage--;
                loadPageSentences();
            }
        });
    }

    // 자동 저장 기능 (10초마다)
    setInterval(() => {
        if (document.getElementById('transcriptionTyping').style.display !== 'none') {
            saveCurrentPageSentences();
        }
    }, 10000);
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
    
    updateNavigationState('bookTranscription');
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
    const currentPageNumber = document.getElementById('currentPageNumber');
    const sentenceList = document.getElementById('sentenceList');
    const addSentenceBtn = document.getElementById('addSentenceBtn');
    const prevPageBtn = document.getElementById('prevPageBtn');
    
    if (currentPageNumber) currentPageNumber.textContent = transcriptionData.currentPage;
    
    // 현재 페이지 데이터 가져오기
    const pageData = transcriptionData.pages[transcriptionData.currentPage] || {
        sentences: [],
        liked: []
    };
    
    // 문장 목록 초기화
    if (sentenceList) {
        sentenceList.innerHTML = '';
        currentSentenceCount = 0;
        
        if (pageData.sentences && pageData.sentences.length > 0) {
            pageData.sentences.forEach((sentence, index) => {
                const isLiked = pageData.liked && pageData.liked[index];
                addSentenceToDOM(sentence, index + 1, isLiked);
            });
            currentSentenceCount = pageData.sentences.length;
            
            // 버튼 텍스트 변경
            if (addSentenceBtn) addSentenceBtn.textContent = '다음 문장 입력하기';
        } else {
            // 첫 문장 입력 필드 바로 생성
            currentSentenceCount = 0;
            addNewSentence();
        }
    }
    
    // 이전 페이지 버튼 활성화/비활성화
    if (prevPageBtn) {
        prevPageBtn.disabled = transcriptionData.currentPage <= 1;
    }
}

function saveCurrentPageSentences() {
    const sentenceItems = document.querySelectorAll('.sentence-item');
    const sentences = [];
    const liked = [];
    
    sentenceItems.forEach(item => {
        const input = item.querySelector('.sentence-input');
        const likeBtn = item.querySelector('.like-btn');
        
        if (input && input.value.trim()) {
            sentences.push(input.value.trim());
            liked.push(likeBtn && likeBtn.classList.contains('liked'));
        }
    });
    
    transcriptionData.pages[transcriptionData.currentPage] = {
        sentences: sentences,
        liked: liked,
        lastModified: new Date().toISOString()
    };
    
    transcriptionData.lastModified = new Date().toISOString();
}

function addNewSentence() {
    const sentenceList = document.getElementById('sentenceList');
    
    if (!sentenceList) return;
    
    currentSentenceCount++;
    addSentenceToDOM('', currentSentenceCount, false);
    
    // 새로 추가된 입력 필드에 포커스
    const newInput = sentenceList.querySelector('.sentence-item:last-child .sentence-input');
    if (newInput) {
        newInput.focus();
        newInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function addSentenceToDOM(text, number, isLiked = false) {
    const sentenceList = document.getElementById('sentenceList');
    if (!sentenceList) return;
    
    const sentenceItem = document.createElement('div');
    sentenceItem.className = `sentence-item${isLiked ? ' liked' : ''}`;
    
    sentenceItem.innerHTML = `
        <div class="sentence-container">
            <div class="sentence-content">
                <div class="sentence-header">
                    <span class="sentence-number">${number}번째 문장</span>
                    <button class="delete-btn" title="문장 삭제">❌</button>
                </div>
                <textarea class="sentence-input" placeholder="문장을 입력하세요... 엔터를 입력하면 다음 문장을 입력할 수 있습니다." rows="2">${text}</textarea>
            </div>
            <button class="like-btn${isLiked ? ' liked' : ''}" title="좋아요">❤️</button>
        </div>
    `;
    
    sentenceList.appendChild(sentenceItem);
    
    const input = sentenceItem.querySelector('.sentence-input');
    const likeBtn = sentenceItem.querySelector('.like-btn');
    const deleteBtn = sentenceItem.querySelector('.delete-btn');
    
    // 입력 완료 시 스타일 변경
    input.addEventListener('input', function() {
        if (this.value.trim()) {
            this.classList.add('completed');
        } else {
            this.classList.remove('completed');
        }
        
        // 자동 높이 조절
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    });
    
    // 한글 IME 조합 상태 추적
    let isComposing = false;
    
    input.addEventListener('compositionstart', function() {
        isComposing = true;
    });
    
    input.addEventListener('compositionend', function() {
        isComposing = false;
    });
    
    // Enter 키로 새 문장 추가 (마지막 문장에서만)
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey && !isComposing) {
            e.preventDefault();
            if (this.value.trim()) {
                // 현재 문장이 마지막 문장인지 확인
                const currentSentenceItem = this.closest('.sentence-item');
                const sentenceItems = document.querySelectorAll('.sentence-item');
                const isLastSentence = currentSentenceItem === sentenceItems[sentenceItems.length - 1];
                
                if (isLastSentence) {
                    addNewSentence();
                }
            }
        }
    });
    
    // 좋아요 버튼 이벤트
    likeBtn.addEventListener('click', function() {
        this.classList.toggle('liked');
        sentenceItem.classList.toggle('liked');
        
        // 데이터 저장
        saveCurrentPageSentences();
    });
    
    // 삭제 버튼 이벤트
    deleteBtn.addEventListener('click', function() {
        deleteSentence(sentenceItem);
    });
    
    // 초기 높이 설정
    if (text) {
        input.style.height = 'auto';
        input.style.height = input.scrollHeight + 'px';
        input.classList.add('completed');
    }
}

function saveTranscription() {
    saveCurrentPageSentences();
    
    const dataStr = JSON.stringify(transcriptionData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `${transcriptionData.title}_필사_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert('필사 데이터가 저장되었습니다!');
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
                    ...loadedData,
                    lastModified: new Date().toISOString()
                };
                
                // 입력 필드 업데이트
                const bookTitleInput = document.getElementById('bookTitleInput');
                const bookAuthorInput = document.getElementById('bookAuthorInput');
                
                if (bookTitleInput) bookTitleInput.value = transcriptionData.title;
                if (bookAuthorInput) bookAuthorInput.value = transcriptionData.author;
                
                alert(`"${transcriptionData.title}" 필사 데이터를 불러왔습니다.`);
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
            numberSpan.textContent = `${index + 1}번째 문장`;
        }
    });
}

 