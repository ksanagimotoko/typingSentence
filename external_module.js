let audioContext = null;
let lastBeepAt = 0;
let lastSuccessAt = 0;

export function playErrorBeep() {
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

export function playSuccessTone() {
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

export function renderSentenceHighlight(target, input, displayElement = null, options = {}) {
    const { 
        currentCategory = null, 
        currentSentenceIndex = 0,
        sentenceCategories = null,
        sentenceDisplay = null 
    } = options;
    
    const targetDisplay = displayElement || sentenceDisplay;
    if (!targetDisplay) return;
    
    const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const max = Math.min(target.length, input.length);
    let idx = 0;
    while (idx < max && target[idx] === input[idx]) idx++;
    let correct = escape(target.slice(0, idx));
    let rest = escape(target.slice(idx));
    // 공백 보존: 일반 공백을 &nbsp;로 치환해 경계 공백 소실 방지
    correct = correct.replace(/ /g, '&nbsp;');
    rest = rest.replace(/ /g, '&nbsp;');
    
    // 지정된 디스플레이 요소에 문장 표시
    targetDisplay.innerHTML = `<span class="typed-correct">${correct}</span>${rest}`;
    
    // 헌법 관련 카테고리일 때 한글 번역을 sentenceDisplay 아래에 별도로 표시 (기본 sentenceDisplay에만 적용)
    if (!displayElement && currentCategory && sentenceCategories && 
        (currentCategory === 'constitution' || currentCategory === 'constitutionPreamble') && 
        sentenceCategories[currentCategory] && sentenceCategories[currentCategory].koreanTranslations) {
        const koreanText = sentenceCategories[currentCategory].koreanTranslations[currentSentenceIndex];
        if (koreanText && sentenceDisplay) {
            // 기존 한글 번역 요소가 있으면 제거
            const existingTranslation = document.getElementById('koreanTranslation');
            if (existingTranslation) {
                existingTranslation.remove();
            }
            
            // 새로운 한글 번역 요소 생성 및 삽입
            const translationDiv = document.createElement('div');
            translationDiv.id = 'koreanTranslation';
            translationDiv.className = 'korean-translation';
            translationDiv.innerHTML = escape(koreanText);
            
            // sentenceDisplay 다음에 삽입
            sentenceDisplay.parentNode.insertBefore(translationDiv, sentenceDisplay.nextSibling);
        }
    } else if (!displayElement && sentenceDisplay) {
        // 헌법 관련 카테고리가 아닐 때는 한글 번역 요소 제거
        const existingTranslation = document.getElementById('koreanTranslation');
        if (existingTranslation) {
            existingTranslation.remove();
        }
    }
} 