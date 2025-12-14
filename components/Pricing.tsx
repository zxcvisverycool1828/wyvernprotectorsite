import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { PRICING_PLANS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-900/50 -skew-y-3 transform origin-top-left scale-110" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-slate-400">Choose the level of protection that fits your needs.</p>
        </div>

        {/* Changed grid to flex justify-center to center the single item */}
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="w-full max-w-md" // Added width constraints for flex item
            >
              <div className={`relative flex flex-col p-8 rounded-2xl border h-full transition-colors duration-300 ${
                plan.popular 
                  ? 'bg-slate-900 border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.15)]' 
                  : 'bg-slate-950 border-white/10'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-xs font-bold text-white uppercase tracking-wider">
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
                      <CheckCircle2 className="flex-shrink-0 text-blue-500 mr-3" size={18} />
                      <span className="text-sm text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20'
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

export default Pricing;