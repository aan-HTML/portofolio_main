// Spotlight Effect
class SpotlightEffect {
  constructor(element, options = {}) {
    this.element = element;
    this.isEnabled = true;
    this.color = options.color || 'rgba(251, 191, 36, 0.2)';
    this.intensity = options.intensity || 0.5;
    
    if (!element) return;
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    
    // Create spotlight div
    this.spotlight = document.createElement('div');
    this.spotlight.className = 'spotlight-effect';
    this.spotlight.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s ease;
      background: radial-gradient(circle at 50% 50%, ${this.color}, transparent 70%);
    `;
    element.appendChild(this.spotlight);
    
    this.element.addEventListener('mouseenter', () => this.enable());
    this.element.addEventListener('mousemove', (e) => this.update(e));
    this.element.addEventListener('mouseleave', () => this.disable());
  }
  
  enable() {
    this.isEnabled = true;
    this.spotlight.style.opacity = this.intensity.toString();
  }
  
  disable() {
    this.isEnabled = false;
    this.spotlight.style.opacity = '0';
  }
  
  update(event) {
    if (!this.isEnabled) return;
    
    const rect = this.element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    this.spotlight.style.backgroundImage = 
      `radial-gradient(circle at ${x}px ${y}px, ${this.color}, transparent 70%)`;
  }
}

// Particle Burst Effect
class ParticleBurst {
  constructor(element, options = {}) {
    this.element = element;
    this.count = options.count || 8;
    this.color = options.color || '#fbbf24';
    this.duration = options.duration || 600;
    this.container = element.parentElement;
  }
  
  burst(x, y) {
    for (let i = 0; i < this.count; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle-burst-item';
      particle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 4px;
        height: 4px;
        background: ${this.color};
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
      `;
      
      document.body.appendChild(particle);
      
      const angle = (i / this.count) * Math.PI * 2;
      const velocity = 5 + Math.random() * 5;
      const vx = Math.cos(angle) * velocity;
      const vy = Math.sin(angle) * velocity;
      
      let currentX = x;
      let currentY = y;
      let currentVx = vx;
      let currentVy = vy;
      const gravity = 0.1;
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = elapsed / this.duration;
        
        if (progress >= 1) {
          particle.remove();
          return;
        }
        
        currentVy += gravity;
        currentX += currentVx;
        currentY += currentVy;
        
        particle.style.left = currentX + 'px';
        particle.style.top = currentY + 'px';
        particle.style.opacity = (1 - progress).toString();
        
        requestAnimationFrame(animate);
      };
      
      animate();
    }
  }
  
  init() {
    if (!this.element) return;
    
    this.element.addEventListener('mouseenter', (e) => {
      const rect = this.element.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      this.burst(x, y);
    });
  }
}

// 3D Tilt Effect
class TiltEffect {
  constructor(element, options = {}) {
    this.element = element;
    this.maxTilt = options.maxTilt || 15;
    this.scale = options.scale || 1.01;
    
    if (!element) return;
    
    element.style.transformStyle = 'preserve-3d';
    element.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    
    element.addEventListener('mouseenter', () => {
      element.style.transformStyle = 'preserve-3d';
    });
    
    element.addEventListener('mousemove', (e) => this.update(e));
    element.addEventListener('mouseleave', () => this.reset());
  }
  
  update(event) {
    const rect = this.element.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((event.clientY - rect.top) - centerY) / centerY * this.maxTilt;
    const rotateY = ((event.clientX - rect.left) - centerX) / centerX * this.maxTilt;
    
    this.element.style.transform = `
      perspective(1200px)
      rotateX(${-rotateX}deg)
      rotateY(${rotateY}deg)
      scale(${this.scale})
    `;
  }
  
  reset() {
    this.element.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) scale(1)';
  }
}

// Stagger Animation
const staggerAnimation = (elements, options = {}) => {
  const delay = options.delay || 50;
  const duration = options.duration || 600;
  const easing = options.easing || 'cubic-bezier(0.34, 1.56, 0.64, 1)';
  
  elements.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.animation = `stagger-in ${duration}ms ${easing} forwards`;
    el.style.animationDelay = `${i * delay}ms`;
  });
};

// Add stagger keyframes to page
const addStaggerKeyframes = () => {
  if (document.getElementById('stagger-keyframes')) return;
  
  const style = document.createElement('style');
  style.id = 'stagger-keyframes';
  style.textContent = `
    @keyframes stagger-in {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes slide-in-left {
      from {
        opacity: 0;
        transform: translateX(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes slide-in-right {
      from {
        opacity: 0;
        transform: translateX(20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `;
  document.head.appendChild(style);
};

addStaggerKeyframes();

// Smooth Scroll Animation
const smoothScroll = (target, duration = 1000) => {
  const start = window.scrollY;
  const end = target.offsetTop;
  const distance = end - start;
  let startTime = null;
  
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };
  
  const scroll = (currentTime) => {
    startTime = startTime || currentTime;
    const elapsed = currentTime - startTime;
    
    window.scrollTo(0, easeInOutQuad(elapsed, start, distance, duration));
    
    if (elapsed < duration) {
      requestAnimationFrame(scroll);
    } else {
      window.scrollTo(0, end);
    }
  };
  
  requestAnimationFrame(scroll);
};

// Intersection Observer For Scroll Animations
const observeElements = (selector, callback, options = {}) => {
  const observerOptions = {
    threshold: options.threshold || 0.1,
    rootMargin: options.rootMargin || '0px',
    ...options
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll(selector).forEach(el => observer.observe(el));
};

// Bounce Animation
const bounceElement = (element, distance = 10, duration = 600) => {
  const startTime = Date.now();
  const initialPosition = element.getBoundingClientRect().top;
  
  const animate = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Ease-out bounce
    const bounce = -Math.abs(Math.sin(progress * Math.PI * 3)) * (1 - progress);
    const offset = bounce * distance;
    
    element.style.transform = `translateY(${offset}px)`;
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };
  
  animate();
};

// Effects library loaded
