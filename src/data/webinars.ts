export interface Webinar {
  slug: string;
  name: string;
  shortDescription: string;
  image: string;
  content: string[];
  whatYouGet: string[];
  mentor: {
    name: string;
    title: string;
    bio: string;
    image: string;
    linkedin?: string;
  };
  price: string;
  paymentLink: string;
}

export const webinars: Webinar[] = [
  {
    slug: 'ai-upskill-workshop',
    name: 'AI Upskill Workshop',
    shortDescription: 'Master the fundamentals of AI and build real-world applications that will transform your career.',
    image: '/images/1.jpeg',
    content: [
      'AI Fundamentals & Machine Learning overview',
      'Hands-on projects with real datasets',
      'Introduction to LLMs and prompt engineering',
      'Building AI-powered workflows with n8n',
      'Deploying and scaling AI solutions',
      'Career strategies in the AI-first world',
    ],
    whatYouGet: [
      '7-day intensive workshop access',
      'Hands-on project templates',
      'Certificate of completion',
      'Lifetime access to workshop materials',
      'Community support & peer network',
      'Job placement assistance',
    ],
    mentor: {
      name: 'Chaitanya',
      title: 'Senior AI Engineer',
      bio: 'IIT alumnus with experience building AI products at scale. Passionate about making AI accessible to everyone.',
      image: 'https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      linkedin: 'https://www.linkedin.com/company/nhancio',
    },
    price: '₹499',
    paymentLink: '/courses',
  },
  {
    slug: 'prompt-engineering-masterclass',
    name: 'Prompt Engineering Masterclass',
    shortDescription: 'Learn to get the best out of ChatGPT, Claude, and other LLMs with professional prompt design.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop',
    content: [
      'Principles of effective prompt design',
      'Chain-of-thought and few-shot prompting',
      'Using LLMs for writing, code, and analysis',
      'Prompt templates for common business tasks',
      'Evaluating and improving prompt quality',
    ],
    whatYouGet: [
      '3-hour live masterclass',
      'Prompt library & templates',
      'Recording & slides',
      'Q&A with the mentor',
    ],
    mentor: {
      name: 'Nhancio Experts',
      title: 'AI & LLM Practitioners',
      bio: 'Our team has trained hundreds of professionals on prompt engineering and AI tools.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
    },
    price: '₹299',
    paymentLink: '/courses',
  },
];
