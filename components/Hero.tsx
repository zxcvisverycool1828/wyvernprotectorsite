import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
         <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
          <span className="text-sm text-slate-300 font-medium">v2.4.0 Stable Release Available</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
        >
          Ironclad Security for <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            .NET Applications
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-lg sm:text-xl text-slate-400 mb-10"
        >
          Protect your intellectual property with industry-leading obfuscation techniques. 
          Prevent decompilation, tampering, and reverse engineering with Wyvern Protector.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
        >
          <button className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-transform duration-200 hover:-translate-y-1 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]">
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
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20"></div>
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
                    <pre className="font-mono text-sm leading-relaxed">
                        <code className="text-slate-300">
                            <span className="text-purple-400">public</span> <span className="text-purple-400">static</span> <span className="text-blue-400">void</span> <span className="text-yellow-300">Main</span>() {"{"}
                            <br />
                            {"  "}<span className="text-purple-400">var</span> <span className="text-blue-300">_0x4f1a</span> = <span className="text-green-400">"\u0057\u0079\u0076\u0065\u0072\u006E"</span>;
                            <br />
                            {"  "}<span className="text-purple-400">switch</span> (<span className="text-blue-300">_0x9b2</span> % 4) {"{"}
                            <br />
                            {"    "}<span className="text-purple-400">case</span> 0: <span className="text-blue-300">_0x2c1</span>.<span className="text-yellow-300">Invoke</span>(); <span className="text-purple-400">break</span>;
                            <br />
                            {"    "}<span className="text-purple-400">case</span> 1: <span className="text-purple-400">return</span>;
                            <br />
                            {"  "}{"}"}
                            <br />
                            {"}"}
                        </code>
                    </pre>
                </div>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;