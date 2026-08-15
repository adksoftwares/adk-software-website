import { MonitorSmartphone, LayoutTemplate, Briefcase, Zap, Code2, GitBranch } from 'lucide-react';

export const services = [
  {
    id: 'smart-pos',
    title: 'Smart POS Solutions',
    description: 'Modern point-of-sale systems designed to simplify retail operations.',
    icon: MonitorSmartphone,
  },
  {
    id: 'android-apps',
    title: 'Native Android Applications',
    description: 'Fast and reliable Android applications designed for real-world business requirements.',
    icon: Zap,
  },
  {
    id: 'web-apps',
    title: 'Web Applications',
    description: 'Modern responsive web applications and business platforms.',
    icon: LayoutTemplate,
  },
  {
    id: 'business-automation',
    title: 'Business Automation',
    description: 'Automate repetitive workflows and reduce unnecessary manual work.',
    icon: Briefcase,
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    description: "Software designed specifically around each client's requirements.",
    icon: Code2,
  },
  {
    id: 'system-integration',
    title: 'System Integration',
    description: 'Connect business applications, databases, devices, and services into a unified workflow.',
    icon: GitBranch,
  }
];
