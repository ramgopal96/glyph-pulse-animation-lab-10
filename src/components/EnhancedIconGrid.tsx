import React, { useState } from 'react';
import { Copy, Download, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Star, 
  Bookmark, 
  Bell, 
  Check, 
  Upload,
  Send,
  Settings,
  Zap,
  ShieldCheck,
  Navigation,
  Play,
  Pause,
  Volume2,
  Sun,
  Moon,
  Lock,
  Unlock,
  Search,
  RefreshCw,
  Activity,
  Wifi,
  Battery,
  Timer
} from 'lucide-react';
import AdvancedAnimatedIcon from './AdvancedAnimatedIcon';

// Showcase icons with their specific animation types
const showcaseIcons = [
  // Morphing Path Examples
  { name: 'heart', Icon: Heart, animation: 'morphing', description: 'Morphs from outline to filled with wiggle' },
  { name: 'star', Icon: Star, animation: 'morphing', description: 'Favorite icon with state morphing' },
  { name: 'bookmark', Icon: Bookmark, animation: 'morphing', description: 'Bookmark toggle with path morphing' },
  
  // Stroke Draw Examples
  { name: 'check', Icon: Check, animation: 'strokeDraw', description: 'Checkmark draws like a pen stroke' },
  { name: 'shield-check', Icon: ShieldCheck, animation: 'strokeDraw', description: 'Success state with stroke animation' },
  { name: 'zap', Icon: Zap, animation: 'strokeDraw', description: 'Lightning bolt drawing effect' },
  
  // Orbiting Elements Examples
  { name: 'bell', Icon: Bell, animation: 'orbiting', description: 'Notification bell with orbiting dots' },
  { name: 'wifi', Icon: Wifi, animation: 'orbiting', description: 'Active connection with pulse indicators' },
  { name: 'activity', Icon: Activity, animation: 'orbiting', description: 'Live activity with orbital motion' },
  
  // Sequential Bounce Examples
  { name: 'upload', Icon: Upload, animation: 'sequential', description: 'Upload with multi-part bounce' },
  { name: 'send', Icon: Send, animation: 'sequential', description: 'Send with arrow + tray sequence' },
  { name: 'navigation', Icon: Navigation, animation: 'sequential', description: 'Navigation with directional bounce' },
  
  // Glow Burst Examples
  { name: 'play', Icon: Play, animation: 'glowBurst', description: 'Play button with energy burst' },
  { name: 'sun', Icon: Sun, animation: 'glowBurst', description: 'Sun with radiating light particles' },
  { name: 'settings', Icon: Settings, animation: 'glowBurst', description: 'Settings with activation sparkles' },
  
  // Multi-State Examples
  { name: 'lock', Icon: Lock, animation: 'multiState', description: 'Lock with hover → active → success' },
  { name: 'volume', Icon: Volume2, animation: 'multiState', description: 'Volume control with state feedback' },
  { name: 'refresh', Icon: RefreshCw, animation: 'multiState', description: 'Refresh with multi-stage animation' }
];

// Animation type descriptions
const animationDescriptions = {
  morphing: {
    title: "Morphing Paths",
    description: "Icons that change from outline to filled state with smooth path transitions",
    features: ["State-aware morphing", "Wiggle confirmation", "Smooth fill transitions"]
  },
  strokeDraw: {
    title: "Stroke Draw + Fill",
    description: "Icons that animate as if drawn by hand, then fill with color",
    features: ["Pen-like drawing effect", "Sequential fill animation", "Scale bounce on completion"]
  },
  orbiting: {
    title: "Orbiting Elements",
    description: "Icons with small elements that orbit around them to suggest activity",
    features: ["Radial orbit animation", "Activity indication", "Continuous motion loops"]
  },
  sequential: {
    title: "Sequential Bounce",
    description: "Multi-part icons where elements animate in sequence with elastic timing",
    features: ["Staggered element entry", "Elastic bounce physics", "Multi-stage reveals"]
  },
  glowBurst: {
    title: "Glow Trail + Burst",
    description: "Icons that emit particles and sparkles on interaction",
    features: ["Particle emission", "Radial burst patterns", "Glow trail effects"]
  },
  multiState: {
    title: "Multi-State Flow",
    description: "Icons with complex state transitions: hover → active → success",
    features: ["State-aware transitions", "Feedback animations", "Progressive enhancement"]
  }
};

const EnhancedIconGrid = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [showDescription, setShowDescription] = useState(false);

  const filteredIcons = selectedType 
    ? showcaseIcons.filter(icon => icon.animation === selectedType)
    : showcaseIcons;

  const handleAction = (action: string, iconName: string) => {
    console.log(`${action} action for ${iconName}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-24">
      {/* Animation Type Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => setSelectedType(null)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              !selectedType 
                ? 'bg-accent text-accent-foreground' 
                : 'bg-muted text-muted-foreground hover:bg-accent/50'
            }`}
          >
            All Animations
          </button>
          {Object.entries(animationDescriptions).map(([type, info]) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedType === type 
                  ? 'bg-accent text-accent-foreground' 
                  : 'bg-muted text-muted-foreground hover:bg-accent/50'
              }`}
            >
              {info.title}
            </button>
          ))}
        </div>

        {/* Animation Description */}
        <AnimatePresence>
          {selectedType && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-card border border-border rounded-lg p-6 overflow-hidden"
            >
              <h3 className="text-lg font-semibold mb-2">
                {animationDescriptions[selectedType as keyof typeof animationDescriptions].title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {animationDescriptions[selectedType as keyof typeof animationDescriptions].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {animationDescriptions[selectedType as keyof typeof animationDescriptions].features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Enhanced Icon Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence>
          {filteredIcons.map((iconData) => (
            <motion.div
              key={iconData.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Animation Type Badge */}
              <div className="absolute top-3 right-3 z-10">
                <span className="px-2 py-1 bg-accent/90 text-accent-foreground text-xs rounded-md font-medium">
                  {iconData.animation}
                </span>
              </div>

              {/* Main icon area */}
              <div className="p-8 flex flex-col items-center gap-4">
                <div className="relative">
                  <AdvancedAnimatedIcon
                    icon={iconData.Icon}
                    name={iconData.name}
                    animationType={iconData.animation as any}
                    size={40}
                    className="text-foreground"
                  />
                </div>
                
                <div className="text-center">
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    {iconData.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {iconData.description}
                  </p>
                </div>
              </div>
              
              {/* Action buttons row */}
              <div className="border-t border-border bg-muted/30 px-3 py-3 flex justify-center gap-2">
                <button
                  onClick={() => handleAction('copy', iconData.name)}
                  className="p-2 rounded-md hover:bg-accent/50 transition-colors duration-150 text-muted-foreground hover:text-foreground"
                  title="Copy React Code"
                >
                  <Copy size={16} strokeWidth={1.5} />
                </button>
                <button
                  onClick={() => handleAction('download', iconData.name)}
                  className="p-2 rounded-md hover:bg-accent/50 transition-colors duration-150 text-muted-foreground hover:text-foreground"
                  title="Download SVG"
                >
                  <Download size={16} strokeWidth={1.5} />
                </button>
                <button
                  onClick={() => handleAction('external', iconData.name)}
                  className="p-2 rounded-md hover:bg-accent/50 transition-colors duration-150 text-muted-foreground hover:text-foreground"
                  title="View Documentation"
                >
                  <ExternalLink size={16} strokeWidth={1.5} />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Motion Curves Reference */}
      <div className="mt-16 bg-card border border-border rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4">Advanced Motion Curves</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          <div>
            <h4 className="font-medium text-accent mb-2">Smooth & Fluid</h4>
            <code className="text-xs text-muted-foreground">cubic-bezier(0.4, 0, 0.2, 1)</code>
          </div>
          <div>
            <h4 className="font-medium text-accent mb-2">Snappy Entrance</h4>
            <code className="text-xs text-muted-foreground">cubic-bezier(0.175, 0.885, 0.32, 1.275)</code>
          </div>
          <div>
            <h4 className="font-medium text-accent mb-2">Bouncy Exit</h4>
            <code className="text-xs text-muted-foreground">cubic-bezier(0.68, -0.6, 0.32, 1.6)</code>
          </div>
          <div>
            <h4 className="font-medium text-accent mb-2">Mechanical Feel</h4>
            <code className="text-xs text-muted-foreground">cubic-bezier(0.5, 0, 0.5, 1)</code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedIconGrid;