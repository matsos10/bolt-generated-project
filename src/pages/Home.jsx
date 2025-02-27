import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
              Transform Your Workflow
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Automate your tasks and boost productivity with our AI-powered platform
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition-opacity"
            >
              Get Started Free <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-800"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-400">Choose the plan that works best for you</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="p-8 rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-800"
              >
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6">${plan.price}</div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-400">
                      <FiCheck className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition-opacity">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    icon: <FiCheck className="w-6 h-6 text-blue-500" />,
    title: "Smart Automation",
    description: "Automate repetitive tasks with AI-powered workflows"
  },
  {
    icon: <FiCheck className="w-6 h-6 text-blue-500" />,
    title: "Real-time Analytics",
    description: "Get detailed insights into your workflow performance"
  },
  {
    icon: <FiCheck className="w-6 h-6 text-blue-500" />,
    title: "Team Collaboration",
    description: "Work together seamlessly with your team members"
  }
];

const pricingPlans = [
  {
    name: "Starter",
    price: "0",
    features: [
      "5 Automated Workflows",
      "Basic Analytics",
      "24/7 Support"
    ]
  },
  {
    name: "Pro",
    price: "49",
    features: [
      "Unlimited Workflows",
      "Advanced Analytics",
      "Priority Support",
      "Custom Integrations"
    ]
  },
  {
    name: "Enterprise",
    price: "99",
    features: [
      "Everything in Pro",
      "Custom Solutions",
      "Dedicated Account Manager",
      "SLA Guarantee"
    ]
  }
];
