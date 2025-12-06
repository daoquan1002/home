import { NavItem, Project } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Trang chủ', icon: 'home' },
  { id: 'about', label: 'Giới thiệu', icon: 'person' },
  { id: 'projects', label: 'Dự án', icon: 'grid_view' },
  { id: 'contact', label: 'Liên hệ', icon: 'mail' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: '???',
    description: '???',
    tags: ['???', '???', '???'],
    imageUrl: 'https://picsum.photos/600/400?random=1',
    link: 'https://daoquan1002.github.io/home',
  },
  {
    id: '2',
    title: '???',
    description: '???',
    tags: ['???', '???', '???'],
    imageUrl: 'https://picsum.photos/600/400?random=2',
    link: 'https://daoquan1002.github.io/home',
  },
];