'use client';

import { useEffect, useState } from 'react';
import css from './AnimatedBackground.module.css';

export default function AnimatedBackground() {
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const sections = document.querySelectorAll('#hero, #selected-work');

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visibleSections.length > 0) {
                    setActiveSection(visibleSections[0].target.id);
                }
            },
            {
                threshold: [0.2, 0.4, 0.6],
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <div
            className={css.background}
            data-section={activeSection}
            aria-hidden="true"
        >
            <div className={`${css.ellipse} ${css.ellipseOne}`} />
            <div className={`${css.ellipse} ${css.ellipseTwo}`} />
            <div className={`${css.ellipse} ${css.ellipseThree}`} />
        </div>
    );
}