import { atom } from 'nanostores';

interface Preferences {
  "dark-web-theme": boolean;
}

export const userPreferences = atom<Preferences>({ "dark-web-theme": true });
