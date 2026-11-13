'use client';

import { useState } from 'react';
import { usePortfolio } from '@/hooks/usePortfolio';
import Hero from '@/components/sections/Hero/Hero';
import type { Locale } from '@/types/locale';
import SiteNavigation from '@/components/layout/SiteNavigation/SiteNavigation';
import AnimatedBackground from "@/components/layout/AnimatedBackground/AnimatedBackground";
import Projects from "@/components/sections/Projects/Projects";
import css from './page.module.css';

export default function Home() {
    const { data, isLoading, error } = usePortfolio();
    const [locale, setLocale] = useState<Locale>('uk');

    if (isLoading) return <main>Loading...</main>;
    if (error || !data?.profile || !data?.navigation) {
        return <main>Portfolio data not found.</main>;
    }

    return (
        <div className={css.page}>
            {/*<AnimatedBackground />*/}

            <header className={`container ${css.header}`}>
                <SiteNavigation
                    navigation={data.navigation.items}
                    position="hero"
                    locale={locale}
                    onLocaleChange={setLocale}
                />
            </header>

            <main className={`container ${css.main}`}>
                <Hero
                    profile={data.profile}
                    locale={locale}
                />

                <Projects
                    projects={data.projects}
                    locale={locale}
                />
            </main>

        </div>
    );
}