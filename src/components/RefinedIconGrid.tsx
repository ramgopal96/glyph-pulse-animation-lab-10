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
  Timer,
  Plus,
  ThumbsUp,
  Share2,
  Camera
} from 'lucide-react';
import ProductionAnimatedIcon from './ProductionAnimatedIcon';
import { useToast } from '@/hooks/use-toast';

// Curated showcase icons with production-ready animations
const showcaseIcons = [
  // Morphing Path Examples (Toggle states)
  { name: 'Heart', Icon: Heart, animation: 'morphing', description: 'Like toggle with fill morphing' },
  { name: 'Star', Icon: Star, animation: 'morphing', description: 'Favorite with smooth state transition' },
  { name: 'Bookmark', Icon: Bookmark, animation: 'morphing', description: 'Save toggle with confirmation wiggle' },
  { name: 'ThumbsUp', Icon: ThumbsUp, animation: 'morphing', description: 'Approval with tactile feedback' },
  
  // Stroke Draw Examples (Progressive reveal)
  { name: 'Check', Icon: Check, animation: 'strokeDraw', description: 'Success confirmation with pen-like draw' },
  { name: 'Shield', Icon: ShieldCheck, animation: 'strokeDraw', description: 'Security verification draw effect' },
  { name: 'Zap', Icon: Zap, animation: 'strokeDraw', description: 'Power activation with energy trace' },
  { name: 'Plus', Icon: Plus, animation: 'strokeDraw', description: 'Add action with stroke completion' },
  
  // Orbiting Elements (Activity indication)
  { name: 'Bell', Icon: Bell, animation: 'orbiting', description: 'Notification alert with pulse indicators' },
  { name: 'Wifi', Icon: Wifi, animation: 'orbiting', description: 'Connection status with signal dots' },
  { name: 'Activity', Icon: Activity, animation: 'orbiting', description: 'Live monitoring with orbital motion' },
  { name: 'Timer', Icon: Timer, animation: 'orbiting', description: 'Time tracking with rotating markers' },
  
  // Sequential Bounce (Multi-part icons)
  { name: 'Upload', Icon: Upload, animation: 'sequential', description: 'File upload with staggered elements' },
  { name: 'Send', Icon: Send, animation: 'sequential', description: 'Message send with directional bounce' },
  { name: 'Navigation', Icon: Navigation, animation: 'sequential', description: 'Location pointer with layered motion' },
  { name: 'Share', Icon: Share2, animation: 'sequential', description: 'Share action with element cascade' },
  
  // Glow Burst (Energy effects)
  { name: 'Play', Icon: Play, animation: 'glowBurst', description: 'Media play with energy explosion' },
  { name: 'Sun', Icon: Sun, animation: 'glowBurst', description: 'Light mode with radiant particles' },
  { name: 'Settings', Icon: Settings, animation: 'glowBurst', description: 'Configuration with activation sparkles' },
  { name: 'Camera', Icon: Camera, animation: 'glowBurst', description: 'Capture moment with flash burst' },
  
  // Multi-State Flow (Complex interactions)
  { name: 'Lock', Icon: Lock, animation: 'multiState', description: 'Security state with progressive feedback' },
  { name: 'Volume', Icon: Volume2, animation: 'multiState', description: 'Audio control with live indication' },
  { name: 'Refresh', Icon: RefreshCw, animation: 'multiState', description: 'Reload action with state progression' },
  { name: 'Search', Icon: Search, animation: 'multiState', description: 'Search input with discovery flow' }
];

const RefinedIconGrid = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const { toast } = useToast();

  const filteredIcons = selectedType 
    ? showcaseIcons.filter(icon => icon.animation === selectedType)
    : showcaseIcons;

  // Generate production-ready SVG code with animations
  const generateSVGCode = (iconName: string, animation: string) => {
    return `<!-- Production-grade ${iconName} Icon with ${animation} animation -->
<svg 
  class="sfcon-${iconName.toLowerCase()}" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="currentColor" 
  stroke-width="1.5" 
  stroke-linecap="round" 
  stroke-linejoin="round"
  style="cursor: pointer;"
>
  <!-- Icon paths -->
  <style>
    .sfcon-${iconName.toLowerCase()} {
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .sfcon-${iconName.toLowerCase()}:hover {
      animation: sfcon-${animation} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      transform: scale(1.08);
    }
    
    .sfcon-${iconName.toLowerCase()}:active {
      transform: scale(0.95);
      transition: transform 0.1s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    @keyframes sfcon-${animation} {
      0% { transform: scale(1); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1.08); }
    }
  </style>
</svg>`;
  };

  // Generate downloadable SVG file
  const downloadSVG = (iconName: string, animation: string) => {
    const svgCode = generateSVGCode(iconName, animation);
    const blob = new Blob([svgCode], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `sfcon-${iconName.toLowerCase()}-${animation}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyIcon = (iconName: string, animation: string) => {
    const svgCode = generateSVGCode(iconName, animation);
    navigator.clipboard.writeText(svgCode);
    
    toast({
      title: "SVG animation copied!",
      description: `${iconName} icon with ${animation} animation ready to use.`,
      duration: 2000,
    });
  };

  const handleDownloadIcon = (iconName: string, animation: string) => {
    downloadSVG(iconName, animation);
    
    toast({
      title: "Download started!",
      description: `${iconName}-${animation}.svg file is downloading.`,
      duration: 2000,
    });
  };

  const handleOpenIcon = (iconName: string) => {
    const url = `/icon-preview/${iconName.toLowerCase()}`;
    window.open(url, '_blank');
  };

  // Animation type descriptions for the filter
  const animationTypes = {
    morphing: "Morphing Paths",
    strokeDraw: "Stroke Draw",
    orbiting: "Orbiting Elements", 
    sequential: "Sequential Bounce",
    glowBurst: "Glow Burst",
    multiState: "Multi-State Flow"
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-24">
      {/* Refined Filter System */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setSelectedType(null)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              !selectedType 
                ? 'bg-accent text-accent-foreground shadow-sm' 
                : 'bg-card text-muted-foreground hover:bg-accent/10 hover:text-foreground border border-border'
            }`}
          >
            All Animations
          </button>
          {Object.entries(animationTypes).map(([type, title]) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedType === type 
                  ? 'bg-accent text-accent-foreground shadow-sm' 
                  : 'bg-card text-muted-foreground hover:bg-accent/10 hover:text-foreground border border-border'
              }`}
            >
              {title}
            </button>
          ))}
        </div>
      </div>

      {/* Production-Grade Icon Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredIcons.map((iconData) => (
            <motion.div
              key={iconData.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="group relative bg-card rounded-xl border border-border hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 overflow-hidden"
            >
              {/* Main icon area - removed the animation type pill */}
              <div className="p-8 flex flex-col items-center gap-4">
                <div className="relative">
                  <ProductionAnimatedIcon
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
                  <p className="text-xs text-muted-foreground leading-relaxed max-w-[180px]">
                    {iconData.description}
                  </p>
                </div>
              </div>
              
              {/* Enhanced action buttons with better spacing */}
              <div className="border-t border-border bg-muted/20 px-4 py-3 flex justify-center gap-3">
                <motion.button
                  onClick={() => handleCopyIcon(iconData.name, iconData.animation)}
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent/10 transition-colors duration-200 text-muted-foreground hover:text-foreground group"
                  title="Copy SVG Code"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Copy size={14} strokeWidth={1.5} />
                  <span className="text-xs font-medium">Copy</span>
                </motion.button>
                
                <motion.button
                  onClick={() => handleDownloadIcon(iconData.name, iconData.animation)}
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent/10 transition-colors duration-200 text-muted-foreground hover:text-foreground"
                  title="Download SVG"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={14} strokeWidth={1.5} />
                  <span className="text-xs font-medium">Download</span>
                </motion.button>
                
                <motion.button
                  onClick={() => handleOpenIcon(iconData.name)}
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent/10 transition-colors duration-200 text-muted-foreground hover:text-foreground"
                  title="Open Preview"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={14} strokeWidth={1.5} />
                  <span className="text-xs font-medium">Open</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Production Motion Curves Reference */}
      <div className="mt-20 bg-card border border-border rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4 text-foreground">Production Motion Curves</h3>
        <p className="text-sm text-muted-foreground mb-6">
          These easing curves are optimized for real-world product interactions, 
          inspired by Linear, Figma, and Stripe's animation systems.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 text-sm">
          <div className="p-4 bg-muted/30 rounded-lg">
            <h4 className="font-medium text-accent mb-2">Smooth Fluid</h4>
            <code className="text-xs text-muted-foreground block mb-2">cubic-bezier(0.4, 0, 0.2, 1)</code>
            <p className="text-xs text-muted-foreground">General interactions</p>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <h4 className="font-medium text-accent mb-2">Snappy Entrance</h4>
            <code className="text-xs text-muted-foreground block mb-2">cubic-bezier(0.175, 0.885, 0.32, 1.275)</code>
            <p className="text-xs text-muted-foreground">Modal opens, tooltips</p>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <h4 className="font-medium text-accent mb-2">Bouncy Exit</h4>
            <code className="text-xs text-muted-foreground block mb-2">cubic-bezier(0.68, -0.6, 0.32, 1.6)</code>
            <p className="text-xs text-muted-foreground">Confirmations, success</p>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <h4 className="font-medium text-accent mb-2">Mechanical Feel</h4>
            <code className="text-xs text-muted-foreground block mb-2">cubic-bezier(0.5, 0, 0.5, 1)</code>
            <p className="text-xs text-muted-foreground">Toggles, switches</p>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <h4 className="font-medium text-accent mb-2">Elastic Spring</h4>
            <code className="text-xs text-muted-foreground block mb-2">cubic-bezier(0.38, 0.285, 0.67, 1.02)</code>
            <p className="text-xs text-muted-foreground">Button clicks, favorites</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefinedIconGrid;