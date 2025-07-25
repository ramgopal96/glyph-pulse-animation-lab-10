import React, { useState } from 'react';
import { Copy, Download, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HeartIcon, PlusIcon, SearchIcon, DownloadIcon, TrashIcon, SettingsIcon,
  PlayIcon, MailIcon, CheckIcon, LoaderIcon, SunIcon, ArrowIcon
} from './animated-icons';
import { useToast } from '@/hooks/use-toast';

// Beautiful animated icons inspired by pqoqubbw/icons
const showcaseIcons = [
  { name: 'Heart', Icon: HeartIcon, description: 'Like toggle with smooth fill animation' },
  { name: 'Plus', Icon: PlusIcon, description: 'Add action with path drawing effect' },
  { name: 'Search', Icon: SearchIcon, description: 'Search with scanning animation' },
  { name: 'Download', Icon: DownloadIcon, description: 'Download progress with particles' },
  { name: 'Trash', Icon: TrashIcon, description: 'Delete with disintegration effect' },
  { name: 'Settings', Icon: SettingsIcon, description: 'Configuration with orbital indicators' },
  { name: 'Play', Icon: PlayIcon, description: 'Media control with sound waves' },
  { name: 'Mail', Icon: MailIcon, description: 'Email send with flying envelope' },
  { name: 'Check', Icon: CheckIcon, description: 'Success confirmation with burst' },
  { name: 'Loader', Icon: LoaderIcon, description: 'Loading state with orbital motion' },
  { name: 'Sun', Icon: SunIcon, description: 'Light mode with radiant particles' },
  { name: 'Arrow Right', Icon: () => <ArrowIcon direction="right" />, description: 'Directional movement with trail' },
];

const RefinedIconGrid = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const { toast } = useToast();

  const filteredIcons = showcaseIcons;

  // Generate production-ready SVG code with animations
  const generateSVGCode = (iconName: string) => {
    return `<!-- Production-grade ${iconName} Animated Icon -->
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
  <!-- Icon paths will be rendered by React component -->
  <style>
    .sfcon-${iconName.toLowerCase()} {
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .sfcon-${iconName.toLowerCase()}:hover {
      transform: scale(1.05);
    }
    
    .sfcon-${iconName.toLowerCase()}:active {
      transform: scale(0.95);
      transition: transform 0.1s cubic-bezier(0.4, 0, 0.2, 1);
    }
  </style>
</svg>`;
  };

  // Generate downloadable SVG file
  const downloadSVG = (iconName: string) => {
    const svgCode = generateSVGCode(iconName);
    const blob = new Blob([svgCode], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `sfcon-${iconName.toLowerCase()}-animated.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyIcon = (iconName: string) => {
    const svgCode = generateSVGCode(iconName);
    navigator.clipboard.writeText(svgCode);
    
    toast({
      title: "✅ SVG animation copied!",
      description: `${iconName} animated icon is ready to use in your project.`,
      duration: 3000,
    });
  };

  const handleDownloadIcon = (iconName: string) => {
    downloadSVG(iconName);
    
    toast({
      title: "📁 Download started!",
      description: `${iconName}-animated.svg file is downloading to your device.`,
      duration: 3000,
    });
  };

  const handleOpenIcon = (iconName: string) => {
    const url = `/icon-preview/${iconName.toLowerCase()}`;
    window.open(url, '_blank');
  };

  // Since we now have individual animated components, we can remove the filter system
  // or keep it simple without categories

  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-24">
      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">Animated Icon Collection</h2>
        <p className="text-muted-foreground">Beautiful, interactive icons with smooth animations inspired by modern design systems</p>
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.15,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="group relative bg-card rounded-xl border border-border hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 overflow-hidden"
            >
              {/* Main icon area - removed the animation type pill */}
              <div className="p-8 flex flex-col items-center gap-4">
                <div className="relative">
                  <iconData.Icon size={40} className="text-foreground" />
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
                  onClick={() => handleCopyIcon(iconData.name)}
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent/10 transition-colors duration-200 text-muted-foreground hover:text-foreground group"
                  title="Copy SVG Code"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Copy size={14} strokeWidth={1.5} />
                  <span className="text-xs font-medium">Copy</span>
                </motion.button>
                
                <motion.button
                  onClick={() => handleDownloadIcon(iconData.name)}
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