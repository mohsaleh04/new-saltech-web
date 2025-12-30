export interface Service {
  id: string;
  title: string;
  description: string;
  icon: 'code' | 'cpu' | 'globe' | 'smartphone' | 'shield' | 'cloud';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
