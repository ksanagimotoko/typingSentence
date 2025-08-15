let audioContext = null;
let lastBeepAt = 0;

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