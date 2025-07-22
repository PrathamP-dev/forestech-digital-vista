import { Leaf, TreePine, Bird, Cloud, Zap, Cpu } from 'lucide-react';

const FloatingElements = () => {
  const elements = [
    { Icon: TreePine, className: 'text-primary top-20 left-[10%] float-gentle', size: 32 },
    { Icon: Leaf, className: 'text-primary-glow top-40 right-[15%] float-slow', size: 24 },
    { Icon: Bird, className: 'text-accent-foreground top-60 left-[80%] float-gentle', size: 28 },
    { Icon: Cloud, className: 'text-accent top-32 right-[70%] float-slow opacity-60', size: 36 },
    { Icon: Zap, className: 'text-primary-glow top-80 left-[20%] float-gentle', size: 20 },
    { Icon: Cpu, className: 'text-primary top-96 right-[25%] float-slow opacity-70', size: 24 },
    { Icon: TreePine, className: 'text-primary-glow top-[500px] left-[60%] float-gentle', size: 28 },
    { Icon: Leaf, className: 'text-primary top-[600px] right-[45%] float-slow', size: 22 },
    { Icon: Bird, className: 'text-accent-foreground top-[700px] left-[15%] float-gentle', size: 26 },
    { Icon: Cloud, className: 'text-accent top-[800px] right-[80%] float-slow opacity-50', size: 40 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element, index) => {
        const { Icon, className, size } = element;
        return (
          <Icon
            key={index}
            size={size}
            className={`absolute ${className} opacity-30`}
            style={{
              animationDelay: `${index * 0.5}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingElements;