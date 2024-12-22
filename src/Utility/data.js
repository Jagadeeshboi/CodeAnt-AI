import { BsCodeSlash } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';
import { IoIosCloudOutline } from 'react-icons/io';
import { LuBookText } from 'react-icons/lu';
import { IoSettingsOutline, IoCallOutline } from 'react-icons/io5';
import { MdOutlineLogout } from 'react-icons/md';

export const repositories = [
  {
    name: 'design-system',
    visibility: 'Public',
    technology: 'React',
    size: '7320 KB',
    updated: '1 day ago',
  },
  {
    name: 'codeant-ci-app',
    visibility: 'Private',
    technology: 'JavaScript',
    size: '5871 KB',
    updated: '2 days ago',
    collaborator: 'Yoginani Pasupuleti',
  },
  {
    name: 'analytics-dashboard',
    visibility: 'Private',
    technology: 'Python',
    size: '4521 KB',
    updated: '5 days ago',
  },
  {
    name: 'mobile-app',
    visibility: 'Public',
    technology: 'Swift',
    size: '3096 KB',
    updated: '3 days ago',
    collaborator: 'Subhashis',
  },
  {
    name: 'e-commerce-platform',
    visibility: 'Private',
    technology: 'Java',
    size: '6210 KB',
    updated: '6 days ago',
  },
  {
    name: 'blog-website',
    visibility: 'Public',
    technology: 'HTML/CSS',
    size: '1876 KB',
    updated: '4 days ago',
  },
  {
    name: 'codeant-ci-app',
    visibility: 'Private',
    technology: 'JavaScript',
    size: '5871 KB',
    updated: '2 days ago',
    collaborator: 'Yoginani Pasupuleti',
  },
  {
    name: 'analytics-dashboard',
    visibility: 'Private',
    technology: 'Python',
    size: '4521 KB',
    updated: '5 days ago',
  },
  {
    name: 'mobile-app',
    visibility: 'Public',
    technology: 'Swift',
    size: '3096 KB',
    updated: '3 days ago',
    collaborator: 'Subhashis',
  },
  {
    name: 'e-commerce-platform',
    visibility: 'Private',
    technology: 'Java',
    size: '6210 KB',
    updated: '6 days ago',
  },
  {
    name: 'blog-website',
    visibility: 'Public',
    technology: 'HTML/CSS',
    size: '1876 KB',
    updated: '4 days ago',
  },
];

export const SidebarContent = [
  {
    name: 'Repositories',
    icon: AiOutlineHome,
    path: '/',
  },
  {
    name: 'Ai code Review',
    icon: BsCodeSlash,
    path: '/ai_code_review',
  },
  {
    name: 'cloud security',
    icon: IoIosCloudOutline,
    path: '/cloud_security',
  },
  {
    name: 'How to use',
    icon: LuBookText,
    path: '/how_to_use',
  },
  {
    name: 'Settings',
    icon: IoSettingsOutline,
    path: '/settings',
  },
  {
    name: 'Support',
    icon: IoCallOutline,
    path: '/support',
  },
  {
    name: 'Logout',
    icon: MdOutlineLogout,
    path: '/logout',
  },
];
