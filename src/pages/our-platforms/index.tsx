import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const nodes = [
  {
    id: 'onboarding',
    title: 'Customer Onboarding',
    x: '0%',
    y: '10%',
    img: '/images/our-platforms/customer-onbaording.webp',
  },
  {
    id: 'banking',
    title: 'Banking',
    x: '0%',
    y: '30%',
    img: '/images/our-platforms/banking.webp',
  },
  {
    id: 'loan',
    title: 'Loan Origination',
    x: '0%',
    y: '60%',
    img: '/images/our-platforms/loan-origination.webp',
  },
  {
    id: 'capital',
    title: 'Capital',
    x: '20%',
    y: '30%',
    img: '/images/our-platforms/capital.webp',
  },
  {
    id: 'embedded',
    title: 'Embedded Finance',
    subtitle: 'Cashflow loan | Insurance',
    x: '45%',
    y: '40%',
  },
  {
    id: 'hub',
    title: 'Foundry Hub',
    x: '35%',
    y: '10%',
    img: '/images/our-platforms/foundry-hub.webp',
  },
  {
    id: 'corner',
    title: 'Cornershop',
    x: '55%',
    y: '10%',
    img: '/images/our-platforms/cornershop.webp',
  },
  {
    id: 'freight',
    title: 'Foundry Freight',
    x: '45%',
    y: '60%',
    img: '/images/our-platforms/logistics.webp',
  },
  {
    id: 'go',
    title: 'Foundry GO',
    x: '45%',
    y: '75%',
    img: '/images/our-platforms/foundry-go.webp',
  },
  {
    id: 'business',
    title: 'Business',
    x: '65%',
    y: '40%',
    img: '/images/our-platforms/business.webp',
  },
  {
    id: 'restaurants',
    title: 'Restaurants',
    x: '90%',
    y: '10%',
    img: '/images/our-platforms/restaurant.webp',
  },
  {
    id: 'wholesale',
    title: 'Wholesale',
    x: '90%',
    y: '35%',
    img: '/images/our-platforms/wholesale.webp',
  },
  {
    id: 'retail',
    title: 'Retail',
    x: '90%',
    y: '60%',
    img: '/images/our-platforms/reatil.webp',
  },
  {
    id: 'charging',
    title: 'Charging',
    x: '65%',
    y: '70%',
    img: '/images/our-platforms/ev.webp',
  },
];

// Define connections as pairs of node IDs
const connections = [
  ['onboarding', 'capital'],
  ['banking', 'capital'],
  ['loan', 'capital'],
  ['capital', 'embedded'],
  ['hub', 'embedded'],
  ['corner', 'embedded'],
  ['embedded', 'freight'],
  ['freight', 'go'],
  ['embedded', 'business'],
  ['business', 'restaurants'],
  ['business', 'wholesale'],
  ['business', 'retail'],
  ['business', 'charging'],
];

const OurPlatforms = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<
    Record<string, { x: number; y: number }>
  >({});

  // Update node positions relative to the container
  useEffect(() => {
    const updatePositions = () => {
      const container = containerRef.current;
      if (!container) return;

      const newPositions: Record<string, { x: number; y: number }> = {};
      nodes.forEach((node) => {
        const el = document.getElementById(`node-${node.id}`);
        if (el && container) {
          const box = el.getBoundingClientRect();
          const parentBox = container.getBoundingClientRect();
          newPositions[node.id] = {
            x: box.left + box.width / 2 - parentBox.left,
            y: box.top + box.height / 2 - parentBox.top,
          };
        }
      });
      setPositions(newPositions);
    };

    updatePositions();
    window.addEventListener('resize', updatePositions);
    return () => window.removeEventListener('resize', updatePositions);
  }, []);

  return (
    <div
      className="relative w-full h-[90vh] bg-white overflow-hidden container"
      ref={containerRef}
    >
      <h2 className="text-3xl font-bold text-center mb-8">Foundry Ecosystem</h2>

      {/* SVG lines behind nodes */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {connections.map(([fromId, toId], idx) => {
          const from = positions[fromId];
          const to = positions[toId];
          if (!from || !to) return null;
          return (
            <motion.line
              key={idx}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="#4C7F64"
              strokeWidth={2}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
            />
          );
        })}
      </svg>

      {/* Nodes */}
      <div className="relative w-full h-full">
        {nodes.map((node, i) => (
          <motion.div
            key={node.id}
            id={`node-${node.id}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
            className="absolute w-40 text-center"
            style={{
              left: node.x,
              top: node.y,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {node.title === 'Embedded Finance' ? (
              <div className="flex flex-col items-center justify-center rounded  hover:drop-shadow-[0_8px_6px_#a0a0a088] transition-all">
                <p className="text-sm font-semibold">{node.title}</p>
                {node.subtitle && (
                  <p className="text-xs text-gray-500">{node.subtitle}</p>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center   rounded  hover:drop-shadow-[0_8px_6px_#a0a0a088] transition-all">
                <img
                  src={node.img || 'https://placehold.co/100x80'}
                  alt={node.title}
                  className="mb-2 rounded max-h-[5rem] "
                />

                <p className="text-sm font-semibold">{node.title}</p>
                {node.subtitle && (
                  <p className="text-xs text-gray-500">{node.subtitle}</p>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurPlatforms;
