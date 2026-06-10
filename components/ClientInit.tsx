'use client';
import { useEffect } from 'react';

export function ClientInit() {
  useEffect(() => {
    /* ── Scroll progress bar ── */
    const bar = document.createElement('div');
    bar.className = 'scroll-progress';
    document.body.appendChild(bar);
    const updateBar = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    window.addEventListener('scroll', updateBar, { passive: true });

    /* ── Auto-stagger children of .stagger-parent ── */
    document.querySelectorAll('.stagger-parent').forEach((parent) => {
      (parent.querySelectorAll(':scope > .reveal, :scope > .reveal-left, :scope > .reveal-scale') as NodeListOf<HTMLElement>)
        .forEach((child, i) => { child.style.transitionDelay = `${i * 100}ms`; });
    });

    /* ── Reveal observer (.reveal / .reveal-left / .reveal-scale) ── */
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-scale')
        .forEach((el) => el.classList.add('visible'));
    } else {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            (e.target as HTMLElement).classList.add('visible');
            obs.unobserve(e.target);
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
      );
      document.querySelectorAll('.reveal, .reveal-left, .reveal-scale')
        .forEach((el) => obs.observe(el));

      /* ── Number counters [data-count] ── */
      const cobs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            const el = e.target as HTMLElement;
            const target = parseInt(el.dataset.count ?? '0', 10);
            const suffix = el.dataset.countSuffix ?? '';
            const dur = 1500;
            const t0 = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - t0) / dur, 1);
              const ease = 1 - Math.pow(1 - p, 4);
              el.textContent = Math.round(ease * target) + suffix;
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            cobs.unobserve(el);
          });
        },
        { threshold: 0.6 }
      );
      document.querySelectorAll('[data-count]').forEach((el) => cobs.observe(el));

      return () => {
        obs.disconnect();
        cobs.disconnect();
        window.removeEventListener('scroll', updateBar);
        bar.remove();
      };
    }

    return () => {
      window.removeEventListener('scroll', updateBar);
      bar.remove();
    };
  }, []);

  return null;
}
