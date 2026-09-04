import { MonitorSmartphone, LayoutTemplate, Briefcase, Zap, Code2, GitBranch } from 'lucide-react';

export const services = [
  {
    id: 'smart-pos',
    title: 'Smart POS Solutions',
    description: 'Practical point-of-sale systems that run on mobile hardware to simplify retail sales and inventory management.',
    icon: MonitorSmartphone,
  },
  {
    id: 'android-apps',
    title: 'Android App Development',
    description: 'Native Android applications built for businesses, organizations, and specific operational needs.',
    icon: Zap,
  },
  {
    id: 'web-apps',
    title: 'Web Application Development',
    description: 'Business-focused web applications designed around real workflows and day-to-day operations.',
    icon: LayoutTemplate,
  },
  {
    id: 'business-automation',
    title: 'Business Automation',
    description: 'Custom internal systems that reduce manual data entry and scale business capacity.',
    icon: Briefcase,
  },
  {
    id: 'custom-software',
    title: 'Custom Software',
    description: 'Software engineered specifically to address unique organizational constraints and requirements.',
    icon: Code2,
  },
  {
    id: 'system-integration',
    title: 'System Integration',
    description: 'Connecting separate business applications, databases, and services into a unified, reliable workflow.',
    icon: GitBranch,
  }
];
