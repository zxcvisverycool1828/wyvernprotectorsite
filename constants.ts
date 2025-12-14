import { Shield, Code, Zap, Lock, EyeOff, Shuffle, Server, CheckCircle2 } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
];

export const FEATURES = [
  {
    icon: Shuffle,
    title: 'Control Flow Flattening',
    description: 'Transforms your code logic into a spaghetti-like structure, making manual analysis nearly impossible.'
  },
  {
    icon: EyeOff,
    title: 'String Encryption',
    description: 'Advanced AES-256 encryption for all string literals, hidden behind dynamic decryption routines.'
  },
  {
    icon: Code,
    title: 'Symbol Renaming',
    description: 'Renames classes, methods, and fields to unreadable characters or overloading patterns.'
  },
  {
    icon: Lock,
    title: 'Anti-Tamper',
    description: 'Detects if your assembly has been modified at runtime and shuts down the application instantly.'
  },
  {
    icon: Server,
    title: 'Resource Encryption',
    description: 'Protects embedded resources and assets from being easily extracted by decompilers.'
  },
  {
    icon: Zap,
    title: 'JIT Optimization',
    description: 'Ensures that obfuscation layers do not significantly impact the runtime performance of your app.'
  }
];

export const PRICING_PLANS = [
  {
    name: 'Professional',
    price: '$15',
    period: '/month',
    description: 'Advanced security for commercial software.',
    features: [
      'Advanced Renaming (Overloading)',
      'String Encryption (AES-256)',
      'Control Flow Flattening (Level 3)',
      'Anti-Tamper & Anti-Debug',
      'Priority Support',
      'Resource Encryption'
    ],
    cta: 'Purchase License',
    popular: true,
  }
];