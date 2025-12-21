import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Code, Zap, Lock, EyeOff, Shuffle, Server, CheckCircle2, Download, Menu, X, Github, Twitter, Disc } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
];

const FEATURES = [
  {
    icon: Shuffle,
    title: 'Control Flow',
    description: 'Transforms your code into a unreadable mess for protection.'
  },
  {
    icon: EyeOff,
    title: 'String Encryption',
    description: 'Advanced string encryption for your application.'
  },
  {
    icon: Code,
    title: 'Calli',
    description: 'Makes method calls harder to reverse.'
  },
  {
    icon: Lock,
    title: 'Anti-Tamper',
    description: 'Prevents people form modifying your assembly.'
  },
  {
    icon: Server,
    title: 'Method Hiding',
    description: 'Makes it harder for people to see the source of a method.'
  },
  {
    icon: Zap,
    title: 'Optimization',
    description: 'Removes redundant code.'
  }
];

const PRICING_PLANS = [
  {
    name: 'Professional',
    price: '$15',
    period: '/month',
    description: 'Advanced security for applications.',
    features: [
      'Calli',
      'String Encryption',
      'Control Flow Flattening',
      'Anti-Tamper',
      'Priority Support',
      'Optimization'
    ],
    cta: 'Purchase License',
    popular: true,
  }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); 

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-transparent">
                <img
                  src="https://protector.wyvern.sh/icon_white@3x.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Wyvern<span className="text-wyvern-500">Protector</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-slate-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#"
                  className="bg-wyvern-600 hover:bg-wyvern-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-[0_0_15px_rgba(220,38,38,0.3)]"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950 border-b border-white/5 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href="#" className="w-full text-center block mt-4 bg-wyvern-600 text-white px-3 py-3 rounded-lg font-medium">
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
         {/* Red background blobs */}
         <div className="absolute top-0 left-1/4 w-96 h-96 bg-wyvern-600/20 rounded-full blur-[100px]" />
         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-wyvern-900/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-wyvern-500"></span>
          <span className="text-sm text-slate-300 font-medium">Newly Available</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
        >
          Unmatched Security for <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-wyvern-400 to-wyvern-600">
            .NET Applications
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-lg sm:text-xl text-slate-400 mb-10"
        >
          Protect your applications with unmatched obfuscation. 
          Prevent decompilation, tampering, and reverse engineering with Wyvern Protector.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
        >
          <button className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-wyvern-600 hover:bg-wyvern-500 text-white font-semibold transition-transform duration-200 hover:-translate-y-1 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]">
            <Download className="mr-2" size={20} />
            Get Started
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            delay: 0.4 
          }}
          className="mt-20 w-full max-w-4xl relative"
        >
            <div className="absolute -inset-1 bg-gradient-to-r from-wyvern-600 to-wyvern-800 rounded-2xl blur opacity-20"></div>
            <div className="relative bg-slate-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-950/50 border-b border-white/5">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                    </div>
                    <span className="ml-2 text-xs text-slate-500 font-mono">ObfuscatedOutput.cs</span>
                  
                </div>
<div className="p-6 overflow-x-auto text-left">
 <pre className="font-mono text-sm leading-relaxed text-slate-300">
{`private static void Main(string[] args)
{
    Program.<csiai$)cy&og&>(args);
}`}
</pre>

</div>

            </div>
        </motion.div>
      </div>
    </div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            The Best Protection
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-lg text-slate-400"
          >
            Our obfuscator has advanced techniques to ensure your application is fully secured.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="h-full"
              >
                <div className="group p-8 rounded-2xl bg-slate-900 border border-white/5 hover:border-wyvern-500/30 transition-colors duration-300 hover:bg-slate-800/50 h-full">
                  <div className="w-12 h-12 rounded-lg bg-wyvern-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-wyvern-500" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-900/50 -skew-y-3 transform origin-top-left scale-110" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-slate-400">Choose the level of protection that fits your needs.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="w-full max-w-md"
            >
              <div className={`relative flex flex-col p-8 rounded-2xl border h-full transition-colors duration-300 ${
                plan.popular 
                  ? 'bg-slate-900 border-wyvern-500 shadow-[0_0_30px_rgba(220,38,38,0.15)]' 
                  : 'bg-slate-950 border-white/10'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-wyvern-500 to-wyvern-700 rounded-full text-xs font-bold text-white uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-lg font-medium text-slate-300 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    {plan.period && <span className="text-slate-500 ml-2">{plan.period}</span>}
                  </div>
                  <p className="text-sm text-slate-400">{plan.description}</p>
                </div>

                <ul className="flex-1 space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle2 className="flex-shrink-0 text-wyvern-500 mr-3" size={18} />
                      <span className="text-sm text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-wyvern-600 hover:bg-wyvern-500 text-white shadow-lg shadow-wyvern-900/20'
                      : 'bg-white/10 hover:bg-white/15 text-white'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-wyvern-600 flex items-center justify-center">
                <img
                  src="https://protector.wyvern.sh/icon_white@3x.png"
                  alt="Wyvern Logo"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="font-bold text-xl text-white">Wyvern</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Advanced .NET obfuscation technology to protect your applications from reverse engineering and tampering.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#features" className="hover:text-wyvern-400 transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-wyvern-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-wyvern-400 transition-colors">Changelog</a></li>
              <li><a href="#" className="hover:text-wyvern-400 transition-colors">Download</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Wyvern Protector. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-wyvern-500/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <App />
);
