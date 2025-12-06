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
    title: 'E-commerce Dashboard',
    description: 'Hệ thống quản lý bán hàng với giao diện trực quan, tích hợp công cụ phân tích xu hướng mua sắm.',
    tags: ['React', 'Tailwind', 'Node.js'],
    imageUrl: 'https://picsum.photos/600/400?random=1',
    link: 'https://github.com',
  },
  {
    id: '2',
    title: 'Smart Home App',
    description: 'Ứng dụng điều khiển thiết bị IoT trong nhà thông qua giọng nói và cảm biến tự động.',
    tags: ['Flutter', 'Firebase', 'IoT'],
    imageUrl: 'https://picsum.photos/600/400?random=2',
    link: 'https://github.com',
  },
  {
    id: '3',
    title: 'Travel Blog Platform',
    description: 'Mạng xã hội chia sẻ trải nghiệm du lịch với tính năng gợi ý địa điểm thông minh.',
    tags: ['Next.js', 'GraphQL', 'MongoDB'],
    imageUrl: 'https://picsum.photos/600/400?random=3',
    link: 'https://github.com',
  },
  {
    id: '4',
    title: 'Health Tracker',
    description: 'Ứng dụng theo dõi sức khỏe cá nhân, tính toán calories và nhắc nhở uống nước.',
    tags: ['React Native', 'TypeScript'],
    imageUrl: 'https://picsum.photos/600/400?random=4',
    link: 'https://github.com',
  },
];