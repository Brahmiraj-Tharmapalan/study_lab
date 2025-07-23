import {
  BookOpen,
  Book,
  FileText,
  Briefcase,
  Palette,
  Calendar,
  ArrowLeftRight,
  Laptop,
  Car,
  Lightbulb
} from 'lucide-react';

export const serviceItems: SidebarItem[] = [
  { name: 'Tutoring', route: '/services/tutoring', icon: BookOpen },
  { name: 'Study Material', route: '/services/materials', icon: Book },
  { name: 'Assignment Help', route: '/services/assignment-help', icon: FileText },
  { name: 'Web Development', route: '/services/web-development', icon: Laptop },
  { name: 'Internship', route: '/services/internship', icon: Briefcase },
  { name: 'Transport Service', route: '/services/transport-service', icon: Car },
  { name: 'Others', route: '/services/others', icon: Lightbulb },
];