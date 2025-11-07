module.exports = {
    "src": {
        "index.html": `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Zee.JS</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
        <style>
            :root {
                --primary-color: #2a6e3f;
                --secondary-color: #c9db49;
                --accent-color: #1b4d2b;
                --glass-bg: rgba(255, 255, 255, 0.15);
                --text-color: #e8f5ec;
                --text-dark: #0a2b14;
            }

            * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                transition: all 0.3s ease;
            }

            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                color: var(--text-color);
                line-height: 1.6;
                min-height: 100vh;
                position: relative;
                overflow-x: hidden;
            }

            body::before {
                content: '';
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="2"/></svg>');
                opacity: 0.15;
                z-index: -1;
            }

            .background-shapes {
                position: fixed;
                width: 100%;
                height: 100%;
                z-index: -1;
                overflow: hidden;
            }

            .shape {
                position: absolute;
                border-radius: 60%; /* More organic shape */
                background: radial-gradient(circle at center, rgba(201, 219, 73, 0.2), rgba(42, 110, 63, 0.05)); /* Reduced opacity */
                filter: blur(60px); /* Increased blur */
                animation: float 20s infinite alternate ease-in-out; /* Adjusted animation */
            }

            .shape:nth-child(1) {
                width: 400px;
                height: 400px;
                top: -100px;
                left: -100px;
                animation-delay: 0s;
            }

            .shape:nth-child(2) {
                width: 300px;
                height: 300px;
                bottom: -50px;
                right: -50px;
                animation-delay: -5s;
            }

            .shape:nth-child(3) {
                width: 200px;
                height: 200px;
                top: 50%;
                left: 60%;
                animation-delay: -10s;
            }

            @keyframes float {
                0% { transform: translate(0, 0) rotate(0deg) scale(1); } /* Scale added */
                50% { transform: translate(10%, -5%) rotate(-5deg) scale(1.1); } /* Adjusted values */
                100% { transform: translate(-5%, 10%) rotate(3deg) scale(1); } /* Adjusted values */
            }

            #app {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                padding: 20px;
                position: relative;
                z-index: 1;
            }

            .zee-container {
                width: 100%;
                max-width: 850px;
                background: var(--glass-bg);
                backdrop-filter: blur(12px);
                border-radius: 16px;
                box-shadow:
                    0 10px 25px rgba(0, 0, 0, 0.15),
                    0 1px 1px rgba(255, 255, 255, 0.2) inset,
                    0 -1px 1px rgba(0, 0, 0, 0.1) inset;
                padding: 40px;
                border: 1px solid rgba(255, 255, 255, 0.1);
                overflow: hidden;
                position: relative;
            }

            .zee-container::before {
                content: '';
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: radial-gradient(circle at center, rgba(255, 255, 255, 0.05), transparent 70%);
                opacity: 0.2;
                animation: shine 8s infinite linear;
            }

            @keyframes shine {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }

            h1 {
                color: var(--secondary-color);
                font-size: 2.5rem;
                font-weight: 700;
                margin-bottom: 25px;
                text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                position: relative;
                display: inline-block;
            }

            h1::after {
                content: '';
                position: absolute;
                left: 0;
                bottom: -8px;
                width: 100%;
                height: 3px;
                background: linear-gradient(to right, var(--secondary-color), transparent);
                border-radius: 3px;
            }

            p {
                margin-bottom: 20px;
                font-size: 1.1rem;
                opacity: 0.9;
            }

            .logo {
                font-size: 3rem;
                margin-bottom: 20px;
                text-align: center;
                color: var(--secondary-color);
                text-shadow: 0 0 15px rgba(201, 219, 73, 0.4);
            }

            .feature-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 20px;
                margin: 30px 0;
            }

            .feature-card {
                background: rgba(255, 255, 255, 0.07);
                border-radius: 12px;
                padding: 20px;
                text-align: center;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.05);
                transform: translateY(0);
            }

            .feature-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
                background: rgba(255, 255, 255, 0.1);
            }

            .feature-icon {
                font-size: 2rem;
                margin-bottom: 15px;
                color: var(--secondary-color);
            }

            .counter-widget {
                margin-top: 30px;
                padding: 25px;
                background: rgba(0, 0, 0, 0.15);
                border-radius: 12px;
                text-align: center;
                position: relative;
                overflow: hidden;
                box-shadow:
                    0 5px 15px rgba(0, 0, 0, 0.1),
                    0 1px 0 rgba(255, 255, 255, 0.1) inset;
            }

            .counter-widget::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.05), transparent);
                animation: sweep 3s infinite linear;
            }

            @keyframes sweep {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
            }

            .counter-value {
                font-size: 2.5rem;
                font-weight: 700;
                color: var(--secondary-color);
                text-shadow: 0 0 10px rgba(201, 219, 73, 0.3);
                margin-bottom: 15px;
            }

            button {
                background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
                color: var(--text-dark);
                border: none;
                padding: 12px 24px;
                border-radius: 8px;
                cursor: pointer;
                font-weight: 600;
                font-size: 1rem;
                letter-spacing: 0.5px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                position: relative;
                overflow: hidden;
                z-index: 1;
                transition: all 0.2s ease-in-out; /* Shorter transition */
            }

            button::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent); /* Brighter highlight */
                transition: 0.4s; /* Shorter transition */
                z-index: -1;
            }

            button:hover {
                transform: translateY(-3px); /* More pronounced lift */
                box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3); /* Stronger shadow */
            }

            button:hover::before {
                left: 0; /* Highlight moves fully across */
            }

            button:active {
                transform: translateY(0); /* Push down effect */
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); /* Reduced shadow */
            }

            .loading-placeholder {
                text-align: center;
                padding: 50px;
            }

            .loading-spinner {
                width: 50px;
                height: 50px;
                border: 5px solid rgba(255, 255, 255, 0.1);
                border-radius: 50%;
                border-top: 5px solid var(--secondary-color);
                animation: spin 1s linear infinite;
                margin: 0 auto 20px;
            }

            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }

            .footer {
                margin-top: 40px;
                text-align: center;
                font-size: 0.9rem;
                opacity: 0.7;
            }

            @media (max-width: 768px) {
                .zee-container {
                    padding: 30px 20px;
                }

                h1 {
                    font-size: 2rem;
                }

                .feature-grid {
                    grid-template-columns: 1fr;
                }
            }

            button.button-clicked {
                animation: buttonClick 0.3s ease-out;
            }

            @keyframes buttonClick {
                0% { transform: scale(1); }
                50% { transform: scale(1.1); }
                100% { transform: scale(1); }
            }
        </style>
    </head>
    <body>
        <div class="background-shapes">
            <div class="shape"></div>
            <div class="shape"></div>
            <div class="shape"></div>
        </div>
        <div id="app">
            <div class="loading-placeholder">
                <div class="loading-spinner"></div>
                <h1>Welcome to Zee.JS</h1>
                <p>Initializing your experience...</p>
            </div>
        </div>

        <!-- Import app.js -->
        <script src="app.js"></script>
    </body>
    </html>`,

        "app.js": `// Zee.JS Application Entry Point
(function() {
    // Enhanced Zee app implementation
    function ZeeApp() {
        this.state = {
            counter: 0,
            features: [
                { icon: 'fas fa-bolt', title: 'Lightning Fast', description: 'Optimized performance with minimal overhead' },
                { icon: 'fas fa-paint-brush', title: 'Beautiful UI', description: 'Create stunning interfaces with ease' },
                { icon: 'fas fa-code', title: 'Simple Syntax', description: 'Intuitive API that feels natural' },
                { icon: 'fas fa-feather', title: 'Lightweight', description: 'Tiny footprint, powerful results' }
            ]
        };

        this.init = function() {
            // Add loading animation
            setTimeout(() => {
                this.render();
                this.bindEvents();
                this.addAnimationEffects();
            }, 800); // Simulate loading for effect
        };

        this.increment = function() {
            this.state.counter++;
            this.updateCounter();
            this.animateCounterButton();
        };

        this.updateCounter = function() {
            const counterValue = document.querySelector('.counter-value');
            if (counterValue) {
                // Add animation class
                counterValue.classList.add('counter-updated');
                counterValue.textContent = this.state.counter;

                // Remove animation class after animation completes
                setTimeout(() => {
                    counterValue.classList.remove('counter-updated');
                }, 300);
            }
        };

        this.animateCounterButton = function() {
            const btn = document.getElementById('increment-btn');
            if (btn) {
                btn.classList.add('button-clicked');
                setTimeout(() => {
                    btn.classList.remove('button-clicked');
                }, 300);
            }
        };

      this.renderFeatures = function() {
          return this.state.features.map(feature =>
              '<div class="feature-card">' +
                  '<div class="feature-icon">' +
                      '<i class="' + feature.icon + '"></i>' +
                  '</div>' +
                  '<h3>' + feature.title + '</h3>' +
                  '<p>' + feature.description + '</p>' +
              '</div>'
          ).join('');
      };

      this.render = function() {
          const appEl = document.getElementById('app');
          appEl.innerHTML = \`
              <div class="zee-container">
                  <div class="logo">
                      <i class="fas fa-leaf"></i>
                  </div>
                  <h1>Welcome to Zee.JS</h1>
                  <p>Experience the next generation of web development with our sleek, efficient framework. Zee.JS combines power and simplicity for an unmatched developer experience.</p>

                  <div class="feature-grid">
                      \${this.renderFeatures()}
                  </div>

                  <div class="counter-widget">
                      <div class="counter-value">\${this.state.counter}</div>
                      <p>Click the button below to see Zee.JS reactivity in action</p>
                      <button id="increment-btn">
                          <i class="fas fa-plus"></i> Increment Counter
                      </button>
                  </div>

                  <div class="footer">
                      <p>© \${new Date().getFullYear()} Zee.JS Framework • Made with <i class="fas fa-heart" style="color: #c9db49;"></i> for modern web</p>
                  </div>
              </div>
          \`;
          this.bindEvents();
      };

        this.addAnimationEffects = function() {
            // Select all feature cards for staggered animation
            const featureCards = document.querySelectorAll('.feature-card');
            featureCards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';

                setTimeout(() => {
                    card.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'; // Add transition
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 150);
            });

            // Cursor interaction for background shapes
            const shapes = document.querySelectorAll('.shape');
            document.addEventListener('mousemove', (e) => {
                shapes.forEach((shape, index) => {
                    const speed = (index + 1) * 20; // Adjust speed as needed
                    const x = (window.innerWidth - e.pageX * speed / 100);
                    const y = (window.innerHeight - e.pageY * speed / 100);
                    shape.style.transform = \`translate(\${x}px, \${y}px)\`;
                });
            });
            // Add parallax effect to container
            const container = document.querySelector('.zee-container');
            document.addEventListener('mousemove', (e) => {
                const x = e.clientX / window.innerWidth;
                const y = e.clientY / window.innerHeight;

                container.style.transform = \`perspective(600px) rotateX(\${y * 5 - 2.5}deg) rotateY(\${x * 5 - 2.5}deg)\`;
            });
        };

        this.bindEvents = function() {
            const incrementBtn = document.getElementById('increment-btn');
            if (incrementBtn) {
                incrementBtn.addEventListener('click', this.increment.bind(this));
            }
        };
    }

    const app = new ZeeApp();
    app.init();
})();`
    }
};
