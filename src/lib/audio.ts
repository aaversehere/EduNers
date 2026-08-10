export const playClickSound = () => {
    try {
        // Create audio context only when needed to bypass autoplay restrictions
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioContext) return;
        
        const ctx = new AudioContext();
        
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
        
        // Clean up
        setTimeout(() => {
            if (ctx.state !== 'closed') {
                ctx.close();
            }
        }, 100);
    } catch (e) {
        // Ignore errors if audio context is blocked
        console.error("Could not play click sound", e);
    }
};
