
'use client';

import { useRef } from 'react';
import type { Project } from '@/types/portfolio';
import type { Locale } from '@/types/locale';
import css from './Projects.module.css';

interface ProjectsProps {
    projects: Project[];
    locale: Locale;
}

export default function Projects({ projects, locale }: ProjectsProps) {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'prev' | 'next') => {
        if (!sliderRef.current) return;

        sliderRef.current.scrollBy({
            left:
                direction === 'next'
                    ? sliderRef.current.clientWidth
                    : -sliderRef.current.clientWidth,
            behavior: 'smooth',
        });
    };

    const visibleProjects = projects
        .filter((project) => project.published)
        .sort((a, b) => a.order - b.order);

    return (
        <section id="selected-work" className={css.selectedwork}>
            <div className={css.header}>
                <div>
                    <span className={css.eyebrow}>Portfolio</span>
                    <h2 className={css.title}>Selected Work</h2>
                </div>

                <div className={css.controls}>
                    <button
                        type="button"
                        onClick={() => scroll('prev')}
                        aria-label="Previous projects"
                    >
                        ←
                    </button>

                    <button
                        type="button"
                        onClick={() => scroll('next')}
                        aria-label="Next projects"
                    >
                        →
                    </button>
                </div>
            </div>

            <div className={css.slider} ref={sliderRef}>
                {visibleProjects.map((project) => (
                    <article className={css.card} key={project.slug}>
                        <div
                            className={css.preview}
                            style={{
                                backgroundColor: project.accentColor || '#171717',
                            }}
                        >
                            {project.previewVideo ? (
                                <video
                                    src={project.previewVideo}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                            ) : project.previewImage ? (
                                <img
                                    src={project.previewImage}
                                    alt={`${project.title[locale]} preview`}
                                />
                            ) : null}
                        </div>

                        <div className={css.content}>
                            <h3 className={css.projectTitle}>
                                {project.title[locale]}
                            </h3>

                            {project.description && (
                                <p className={css.description}>
                                    {project.description[locale]}
                                </p>
                            )}

                            <div className={css.technologies}>
                                {project.technologies.map((technology) => (
                                    <span key={technology}>
                                        {technology}
                                    </span>
                                ))}
                            </div>

                            <div className={css.links}>
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Live Demo ↗
                                    </a>
                                )}

                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub ↗
                                    </a>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
