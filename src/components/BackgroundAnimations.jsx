import React, { useEffect, useRef, useState } from 'react';

const BackgroundAnimations = () => {
    const canvasRef = useRef(null);
    const [mouse, setMouse] = useState({ x: null, y: null, radius: 150 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let animationFrameId;
        let particlesArray = [];

        // Handle Resize
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        window.addEventListener('resize', setCanvasSize);

        // Handle Mouse Movement
        const handleMouseMove = (event) => {
            setMouse({
                x: event.x,
                y: event.y,
                radius: 120 // Radius of interaction
            });
        };

        const handleMouseLeave = () => {
            setMouse({ x: null, y: null, radius: 120 });
        }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseLeave);
        window.addEventListener('mouseleave', handleMouseLeave);

        // Particle Class
        class Particle {
            constructor(x, y, dx, dy, size, color) {
                this.x = x;
                this.y = y;
                this.dx = dx;
                this.dy = dy;
                this.size = size;
                this.color = color;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 30) + 1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                // Background slow drift
                this.x += this.dx;
                this.y += this.dy;

                // Bounce off edges
                if (this.x > canvas.width || this.x < 0) this.dx = -this.dx;
                if (this.y > canvas.height || this.y < 0) this.dy = -this.dy;

                // Mouse interaction / Gravity well
                if (mouse.x != null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    let forceDirectionX = dx / distance;
                    let forceDirectionY = dy / distance;
                    let maxDistance = mouse.radius;
                    let force = (maxDistance - distance) / maxDistance;
                    let directionX = forceDirectionX * force * this.density;
                    let directionY = forceDirectionY * force * this.density;

                    if (distance < mouse.radius) {
                        this.x -= directionX;
                        this.y -= directionY;
                    }
                }

                this.draw();
            }
        }

        // Initialize particles
        const init = () => {
            particlesArray = [];
            const numberOfParticles = (canvas.width * canvas.height) / 7000; // Density

            // Check if dark mode is active to pick colors
            const isDark = document.documentElement.classList.contains('dark');
            const particleColors = isDark
                ? ['rgba(167, 139, 250, 0.8)', 'rgba(56, 189, 248, 0.8)', 'rgba(244, 114, 182, 0.8)', 'rgba(255, 255, 255, 0.6)']
                : ['rgba(99, 102, 241, 0.6)', 'rgba(14, 165, 233, 0.6)', 'rgba(217, 70, 239, 0.6)', 'rgba(71, 85, 105, 0.4)'];

            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 2.5) + 0.5;
                let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
                let dx = (Math.random() - 0.5) * 1.5;
                let dy = (Math.random() - 0.5) * 1.5;
                let color = particleColors[Math.floor(Math.random() * particleColors.length)];

                particlesArray.push(new Particle(x, y, dx, dy, size, color));
            }
        };

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, innerWidth, innerHeight);

            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
            }

            connect();
        };

        // Draw lines between nearby particles
        const connect = () => {
            const isDark = document.documentElement.classList.contains('dark');
            let opacityValue = 1;

            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
                        + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));

                    if (distance < (canvas.width / 10) * (canvas.height / 10)) {
                        opacityValue = 1 - (distance / 15000);
                        if (opacityValue > 0) {
                            ctx.strokeStyle = isDark
                                ? `rgba(167, 139, 250, ${opacityValue * 0.25})`
                                : `rgba(99, 102, 241, ${opacityValue * 0.2})`;
                            ctx.lineWidth = 1.2;
                            ctx.beginPath();
                            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                            ctx.stroke();
                        }
                    }
                }
            }
        };

        setCanvasSize();
        animate();

        // Observer for dark mode changes to re-init colors
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    init();
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });

        // Cleanup
        return () => {
            window.removeEventListener('resize', setCanvasSize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseLeave);
            window.removeEventListener('mouseleave', handleMouseLeave);
            observer.disconnect();
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#f8fafc] dark:bg-[#09090b] transition-colors duration-1000">
            {/* ── Background Subtle Glow ── */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-violet-300/30 dark:bg-violet-900/20 blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-normal" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-sky-200/40 dark:bg-sky-900/20 blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-normal" />
            </div>

            {/* ── Interactive Particle Network Canvas ── */}
            {/* The canvas needs pointer-events auto ONLY if you want it to catch mouse events specifically, 
                but since we added the event listeners to `window`, pointer-events-none is fine and lets clicks pass through to underneath! */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-10 w-full h-full pointer-events-none opacity-80"
            />

            {/* ── Scanning Grid Overlay ── */}
            <div
                className="absolute inset-0 z-[5] opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(currentColor 1px, transparent 1px),
                        linear-gradient(90deg, currentColor 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 90%)',
                    WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 90%)'
                }}
            />
        </div>
    );
};

export default BackgroundAnimations;
