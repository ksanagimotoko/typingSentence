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