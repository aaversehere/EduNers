let sharedAudioContext: AudioContext | null = null;

function getAudioContext() {
    if (!sharedAudioContext) {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioContext) {
            sharedAudioContext = new AudioContext();
        }
    }
    
    // Resume context if suspended (crucial for mobile/iOS)
    if (sharedAudioContext && sharedAudioContext.state === 'suspended') {
        sharedAudioContext.resume();
    }
    
    return sharedAudioContext;
}

export const playClickSound = () => {
    try {
        const ctx = getAudioContext();
        if (!ctx) return;
        
        // Oscillator for the "pop" sound
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();
        
        osc.connect(gainNode);
        gainNode.connect(ctx.destination);
        
        // Sound design for a modern UI "click/pop"
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, ctx.currentTime); // Start at 600Hz
        osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.05); // Drop quickly to 100Hz
        
        // Volume envelope
        gainNode.gain.setValueAtTime(0, ctx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.01); // Quick attack
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05); // Quick release
        
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.05);
        
    } catch (e) {
        // Ignore errors if audio context is blocked
        console.error("Could not play click sound", e);
    }
};
