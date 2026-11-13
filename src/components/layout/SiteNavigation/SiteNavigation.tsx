
'use client';

import type {NavigationItem, Profile} from '@/types/portfolio';
import type { Locale } from '@/types/locale';

import css from './SiteNavigation.module.css';

type NavigationPosition = 'hero' | 'section' | 'contact';

interface SiteNavigationProps {
    navigation: NavigationItem[];
    position: NavigationPosition;
    locale: Locale;
    onLocaleChange?: (locale: Locale) => void;
}

export default function SiteNavigation({
                                           navigation,
                                           position,
                                           locale,
                                           onLocaleChange,
                                       }: SiteNavigationProps) {
    const logo = (
        <a
            href="/"
            className={css.logo}
            aria-label="Valeriia Kravchuk — Home"
        >
            VK
        </a>
    );

    const languageSwitcher = (
        <div className={css.languageSwitcher}>
            <button
                type="button"
                className={locale === 'uk' ? css.activeLanguage : ''}
                onClick={() => onLocaleChange?.('uk')}
                aria-pressed={locale === 'uk'}
            >
                UA
            </button>

            <span>/</span>

            <button
                type="button"
                className={locale === 'en' ? css.activeLanguage : ''}
                onClick={() => onLocaleChange?.('en')}
                aria-pressed={locale === 'en'}
            >
                EN
            </button>
        </div>
    );

    const navigationLinks = (
        <nav
            className={css.navigation}
            aria-label="Main navigation"
        >
            {navigation.map((item) => (
                <a
                    key={item.target}
                    href={item.target}
                    className={css.navigationLink}
                >
                    {item.label[locale] || item.label.en || item.label.uk}
                </a>
            ))}
        </nav>
    );

    if (position === 'hero') {
        return (
            <div className={`${css.navigationLayout} ${css.hero}`}>
                <div className={css.topRow}>
                    {logo}
                    {languageSwitcher}
                </div>

                <div className={css.bottomRow}>
                    {navigationLinks}
                </div>
            </div>
        );
    }

    if (position === 'contact') {
        return (
            <div className={`${css.navigationLayout} ${css.contact}`}>
                <div className={css.topRow}>
                    {navigationLinks}
                </div>

                <div className={css.bottomRow}>
                    {logo}
                </div>
            </div>
        );
    }

    return (
        <div className={`${css.navigationLayout} ${css.section}`}>
            <div className={css.bottomRow}>
                {logo}
                {navigationLinks}
            </div>
        </div>
    );
}
