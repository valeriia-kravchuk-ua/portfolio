import css from './Hero.module.css';
import SiteNavigation from '@/components/layout/SiteNavigation/SiteNavigation';
import type {Navigation, Profile} from '@/types/portfolio';
import type {Locale} from '@/types/locale';

interface HeroProps {
    profile: Profile;
    locale: Locale;
}

export default function Hero({
                                 profile,
                                 locale,
                             }: HeroProps) {
    return (
        <section id="hero" className={css.hero}>
            <div className={css.content}>
                <p className={css.pretitle}> {profile.availability[locale]}</p>

                <h1 className={css.title}>
                    {profile.name}
                </h1>

                <h2 className={css.role}>
                    {profile.role[locale]}
                </h2>

                <p className={css.role}>
                    {profile.heroDescription[locale]}
                </p>
            </div>
            <div className={css.actions}>
                {profile.heroActions.map((item, index) => (
                    <a
                        key={item.target}
                        href={item.target}
                        className={css.btnLink}
                    >
                        <span>{item.label[locale]}</span>

                        <img
                            src={
                                index === 0
                                    ? '/icons/arrow-right.svg'
                                    : '/icons/arrow-up-right.svg'
                            }
                            alt=""
                            aria-hidden="true"
                        />
                    </a>
                ))}
            </div>
        </section>
    );
}
