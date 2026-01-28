document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.glass-card').forEach(card => {
        observer.observe(card);
    });

    // Subtle parallax for glow
    window.addEventListener('scroll', () => {
        const glow = document.querySelector('.bg-glow');
        const scroll = window.pageYOffset;
        glow.style.transform = `translateY(${scroll * 0.2}px)`;
    });
});
