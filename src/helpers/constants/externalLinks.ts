import { To } from 'react-router';

export interface ExternalLink {
  id: number;
  name: string;
  link: To;
}

export const externalLinks: ExternalLink[] = [
  { id: 1, name: 'GitHub', link: 'https://github.com/html-hooliganz/' },
  { id: 2, name: 'Contacts', link: 'https://github.com/html-hooliganz/' },
  { id: 3, name: 'Rights', link: 'https://github.com/html-hooligan' },
];
