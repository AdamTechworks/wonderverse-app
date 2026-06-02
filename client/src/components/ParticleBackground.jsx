import "./ParticleBackground.css";

const colors = [
  "#ff2d55",
  "#c026ff",
  "#7c3aed",
  "#3b82f6",
  "#06b6d4",
  "#2dd4bf",
];

function ParticleBackground() {
  const particles = Array.from({ length: 80 }, (_, index) => {
    const moveX = Math.random() * 320 - 160;
    const moveY = Math.random() * 320 - 160;

    return {
      id: index,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 4 + 3}px`,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: `${Math.random() * 8}s`,
      duration: `${Math.random() * 12 + 10}s`,
      moveX: `${moveX}px`,
      moveY: `${moveY}px`,
    };
  });

  return (
    <div className="particle-background">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="particle"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 14px ${particle.color}`,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            "--move-x": particle.moveX,
            "--move-y": particle.moveY,
          }}
        />
      ))}
    </div>
  );
}

export default ParticleBackground;