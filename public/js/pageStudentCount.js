const counters = document.querySelectorAll('.student-counter-counter-box');
        const numbers = document.querySelectorAll('.student-counter-counter-number');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    animateNumber(entry.target.querySelector('.student-counter-counter-number'));
                }
            });
        }, {
            threshold: 0.5
        });

        counters.forEach(counter => observer.observe(counter));

        function animateNumber(element) {
            const target = parseInt(element.getAttribute('data-target'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            function updateNumber() {
                current += step;
                if (current < target) {
                    element.textContent = Math.floor(current);
                    requestAnimationFrame(updateNumber);
                } else {
                    element.textContent = target;
                }
            }

            requestAnimationFrame(updateNumber);
        }