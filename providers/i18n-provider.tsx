'use client';

import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';
import { useEffect, useState } from 'react';

export default function I18nProvider({ children }: { children: React.ReactNode }) {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (i18n.isInitialized) setReady(true);
        else i18n.on('initialized', () => setReady(true));
    }, []);

    if (!ready) return null;

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
