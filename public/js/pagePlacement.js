
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#1a56db',
                secondary: '#4f46e5'
            },
            borderRadius: {
                'none': '0px',
                'sm': '4px',
                DEFAULT: '8px',
                'md': '12px',
                'lg': '16px',
                'xl': '20px',
                '2xl': '24px',
                '3xl': '32px',
                'full': '9999px',
                'button': '8px'
            }
        }
    }
  }
  
  
  
  document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 2000; // Animation duration in milliseconds
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / (speed / 16); // 60fps
        let currentCount = 0;
        const updateCount = () => {
            currentCount += increment;
            if (currentCount < target) {
                counter.innerText = Math.ceil(currentCount);
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target;
            }
        };
  
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCount();
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(counter);
    });
  });