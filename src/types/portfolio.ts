
/**
 * Спільний тип для текстів українською та англійською.
 */
export interface LocalizedText {
    uk?: string;
    en?: string;
}

/**
 * Hero та About.
 */
export interface Profile {
    _id?: string;
    key?: string;
    name: string;
    role: LocalizedText;
    availability: LocalizedText;
    heroDescription: LocalizedText;

    about: {
        title: LocalizedText;
        description: LocalizedText;
        focus: LocalizedText;
        photo?: string | null;
    };

    heroActions: {
        label: LocalizedText;
        target: string;
    }[];
}

export interface NavigationItem {
    label: LocalizedText;
    target: string;
}

export interface Navigation {
    _id?: string;
    key?: string;
    items: NavigationItem[];
}
/**
 * Selected Work.
 */
export interface Project {
    _id?: string;
    slug: string;
    title: LocalizedText;
    subtitle?: LocalizedText | null;
    description?: LocalizedText | null;
    technologies: string[];
    githubUrl?: string | null;
    liveUrl?: string | null;
    previewImage?: string | null;
    previewVideo?: string | null;
    accentColor?: string | null;
    order: number;
    published: boolean;
}

/**
 * Experience.
 */
export interface Experience {
    _id?: string;
    company: string;
    position: LocalizedText;
    startDate: string;
    endDate?: string | null;
    technologies: string[];
    responsibilities: LocalizedText[];
    order: number;
    published: boolean;
}

/**
 * Tech Skills.
 */
export interface SkillGroup {
    _id?: string;
    title: LocalizedText;
    skills: string[];
    order: number;
    published: boolean;
}

/**
 * Developer Highlights в секції About.
 */
export interface DeveloperHighlight {
    _id?: string;
    title: LocalizedText;
    items: string[];
    order: number;
    published: boolean;
}

/**
 * Certificates.
 */
export interface Certificate {
    _id?: string;
    title: LocalizedText;
    description?: LocalizedText | null;
    issuer: string;
    durationHours?: number | null;
    date?: string | null;
    url?: string | null;
    file?: string | null;
    order: number;
    published: boolean;
}

/**
 * Contacts та Footer.
 */
export interface ContactLink {
    label: string;
    url?: string | null;
}

export interface Contacts {
    _id?: string;
    key?: string;
    email?: string | null;

    telegram?: ContactLink | null;
    linkedin?: ContactLink | null;
    github?: ContactLink | null;

    cv: {
        label: LocalizedText;
        url?: string | null;
    };

    availabilityText: LocalizedText;

    footer: {
        copyright: string;
        credit: LocalizedText;
    };
}

/**
 * Повна відповідь GET /portfolio.
 */
export interface Portfolio {
    profile: Profile | null;
    navigation: Navigation | null;
    projects: Project[];
    experiences: Experience[];
    skillGroups: SkillGroup[];
    developerHighlights: DeveloperHighlight[];
    certificates: Certificate[];
    contacts: Contacts | null;
}
