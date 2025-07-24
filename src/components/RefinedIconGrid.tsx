import React, { useState } from 'react';
import { Copy, Download, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  // Morphing Animation Icons
  Heart, Star, Bookmark, ThumbsUp, Bell, ShieldCheck, CircleCheck,
  SquareCheck, Badge, Award, Crown, Gem, Flame, Rocket, Target, Zap,
  Mic, MicOff, Volume1, VolumeX, Coffee, Gift, Smile, Frown,
  
  // Stroke Draw Animation Icons
  Check, Plus, X, Minus, Upload, Send, Mail, MessageCircle,
  Phone, Video, Calendar, Clock, Timer, Archive, Paperclip, FileUp,
  Edit3, PenTool, Scissors, Highlighter, Eraser, Paintbrush,
  
  // Orbiting Animation Icons
  Activity, Wifi, Signal, Radar, Compass, Globe, Orbit, Satellite,
  Settings, Cog, RefreshCw, RotateCcw, Loader, CircleDot, Radio,
  Bluetooth, Power, Battery, BatteryCharging, Cpu, HardDrive,
  
  // Sequential Animation Icons
  Navigation, MapPin, Route, ArrowUp, ArrowDown, ArrowLeft, ArrowRight,
  ChevronUp, ChevronDown, ChevronLeft, ChevronRight, TrendingUp, TrendingDown,
  Move, MoveHorizontal, MoveVertical, CornerUpLeft, CornerUpRight,
  
  // Glow Burst Animation Icons
  Play, Pause, Volume2, Camera, Image, Sun, Moon, Lightbulb,
  Sparkles, Eye, Search, Telescope, Crosshair, Flashlight, Zap as Lightning,
  Sunrise, Sunset, CloudRain, CloudSnow, Rainbow, Umbrella,
  
  // Multi-State Flow Animation Icons
  Lock, Unlock, Key, Shield, User, Users, Home, Building, Store,
  Database, Server, Cloud, Folder, File, FileText, Code, Terminal,
  Laptop, Smartphone, Tablet, Headphones, Speaker, Printer,
  
  // Additional Popular Icons
  Share2, Link, Trash, Save, Filter, Layout, Layers, Package, Box, 
  ShoppingCart, CreditCard, DollarSign, BarChart, PieChart, LineChart,
  Monitor, Gamepad2, Joystick, Dices, Puzzle, Briefcase
} from 'lucide-react';
import ProductionAnimatedIcon from './ProductionAnimatedIcon';
import { useToast } from '@/hooks/use-toast';

// Comprehensive showcase icons inspired by movingicons.dev collection
const showcaseIcons = [
  // Morphing Path Examples (Toggle states)
  { name: 'Heart', Icon: Heart, animation: 'morphing', description: 'Like toggle with fill morphing' },
  { name: 'Star', Icon: Star, animation: 'morphing', description: 'Favorite with smooth state transition' },
  { name: 'Bookmark', Icon: Bookmark, animation: 'morphing', description: 'Save toggle with confirmation wiggle' },
  { name: 'ThumbsUp', Icon: ThumbsUp, animation: 'morphing', description: 'Approval with tactile feedback' },
  { name: 'Bell', Icon: Bell, animation: 'morphing', description: 'Notification with state change' },
  { name: 'Award', Icon: Award, animation: 'morphing', description: 'Achievement unlock animation' },
  { name: 'Crown', Icon: Crown, animation: 'morphing', description: 'Premium status transformation' },
  { name: 'Shield', Icon: ShieldCheck, animation: 'morphing', description: 'Security verification toggle' },
  { name: 'CircleCheck', Icon: CircleCheck, animation: 'morphing', description: 'Completion confirmation' },
  { name: 'Mic', Icon: Mic, animation: 'morphing', description: 'Voice recording toggle' },
  { name: 'Volume', Icon: Volume1, animation: 'morphing', description: 'Audio level indicator' },
  { name: 'Coffee', Icon: Coffee, animation: 'morphing', description: 'Break time toggle' },
  
  // Stroke Draw Examples (Progressive reveal)
  { name: 'Check', Icon: Check, animation: 'strokeDraw', description: 'Success confirmation with pen-like draw' },
  { name: 'Plus', Icon: Plus, animation: 'strokeDraw', description: 'Add action with stroke completion' },
  { name: 'X', Icon: X, animation: 'strokeDraw', description: 'Cancel action with smooth stroke' },
  { name: 'Minus', Icon: Minus, animation: 'strokeDraw', description: 'Remove with stroke animation' },
  { name: 'Upload', Icon: Upload, animation: 'strokeDraw', description: 'File upload progress draw' },
  { name: 'Mail', Icon: Mail, animation: 'strokeDraw', description: 'Email compose stroke effect' },
  { name: 'Phone', Icon: Phone, animation: 'strokeDraw', description: 'Call initiation draw' },
  { name: 'Calendar', Icon: Calendar, animation: 'strokeDraw', description: 'Date selection stroke' },
  { name: 'Clock', Icon: Clock, animation: 'strokeDraw', description: 'Time setting progressive draw' },
  { name: 'Edit3', Icon: Edit3, animation: 'strokeDraw', description: 'Edit mode activation stroke' },
  { name: 'Scissors', Icon: Scissors, animation: 'strokeDraw', description: 'Cut operation stroke reveal' },
  { name: 'Paintbrush', Icon: Paintbrush, animation: 'strokeDraw', description: 'Creative tool activation' },
  
  // Orbiting Elements (Activity indication)
  { name: 'Activity', Icon: Activity, animation: 'orbiting', description: 'Live monitoring with orbital motion' },
  { name: 'Wifi', Icon: Wifi, animation: 'orbiting', description: 'Connection status with signal dots' },
  { name: 'Signal', Icon: Signal, animation: 'orbiting', description: 'Network strength with orbiting indicators' },
  { name: 'Radar', Icon: Radar, animation: 'orbiting', description: 'Scanning with rotating elements' },
  { name: 'Compass', Icon: Compass, animation: 'orbiting', description: 'Navigation with directional orbits' },
  { name: 'Globe', Icon: Globe, animation: 'orbiting', description: 'Global connectivity indicators' },
  { name: 'Satellite', Icon: Satellite, animation: 'orbiting', description: 'Satellite communication orbit' },
  { name: 'Settings', Icon: Settings, animation: 'orbiting', description: 'Configuration with gear orbits' },
  { name: 'Loader', Icon: Loader, animation: 'orbiting', description: 'Loading state with spinning elements' },
  { name: 'Battery', Icon: Battery, animation: 'orbiting', description: 'Power status with charge indicators' },
  { name: 'Cpu', Icon: Cpu, animation: 'orbiting', description: 'Processing activity visualization' },
  { name: 'Radio', Icon: Radio, animation: 'orbiting', description: 'Broadcast signal orbits' },
  
  // Sequential Animation (Multi-part icons)
  { name: 'Send', Icon: Send, animation: 'sequential', description: 'Message send with directional bounce' },
  { name: 'Navigation', Icon: Navigation, animation: 'sequential', description: 'Location pointer with layered motion' },
  { name: 'Share2', Icon: Share2, animation: 'sequential', description: 'Share action with element cascade' },
  { name: 'ArrowUp', Icon: ArrowUp, animation: 'sequential', description: 'Upward motion with staggered elements' },
  { name: 'ArrowDown', Icon: ArrowDown, animation: 'sequential', description: 'Downward flow animation' },
  { name: 'ChevronRight', Icon: ChevronRight, animation: 'sequential', description: 'Forward navigation sequence' },
  { name: 'TrendingUp', Icon: TrendingUp, animation: 'sequential', description: 'Growth visualization sequence' },
  { name: 'Move', Icon: Move, animation: 'sequential', description: 'Drag and drop sequence' },
  { name: 'CornerUpRight', Icon: CornerUpRight, animation: 'sequential', description: 'Direction change sequence' },
  { name: 'Route', Icon: Route, animation: 'sequential', description: 'Path visualization with sequence' },
  { name: 'MapPin', Icon: MapPin, animation: 'sequential', description: 'Location marking sequence' },
  { name: 'Archive', Icon: Archive, animation: 'sequential', description: 'Storage action with layered motion' },
  
  // Glow Burst (Energy effects)
  { name: 'Play', Icon: Play, animation: 'glowBurst', description: 'Media play with energy explosion' },
  { name: 'Sun', Icon: Sun, animation: 'glowBurst', description: 'Light mode with radiant particles' },
  { name: 'Camera', Icon: Camera, animation: 'glowBurst', description: 'Capture moment with flash burst' },
  { name: 'Lightbulb', Icon: Lightbulb, animation: 'glowBurst', description: 'Idea activation with energy burst' },
  { name: 'Sparkles', Icon: Sparkles, animation: 'glowBurst', description: 'Magic effect with particle explosion' },
  { name: 'Eye', Icon: Eye, animation: 'glowBurst', description: 'Vision activation with glow' },
  { name: 'Telescope', Icon: Telescope, animation: 'glowBurst', description: 'Discovery with radiant burst' },
  { name: 'Flashlight', Icon: Flashlight, animation: 'glowBurst', description: 'Illumination with beam burst' },
  { name: 'Lightning', Icon: Lightning, animation: 'glowBurst', description: 'Power surge with energy explosion' },
  { name: 'Sunrise', Icon: Sunrise, animation: 'glowBurst', description: 'Dawn breaking with light burst' },
  { name: 'Rainbow', Icon: Rainbow, animation: 'glowBurst', description: 'Colorful burst after storm' },
  { name: 'Rocket', Icon: Rocket, animation: 'glowBurst', description: 'Launch with propulsion burst' },
  
  // Multi-State Flow (Complex interactions)
  { name: 'Lock', Icon: Lock, animation: 'multiState', description: 'Security state with progressive feedback' },
  { name: 'Search', Icon: Search, animation: 'multiState', description: 'Search input with discovery flow' },
  { name: 'RefreshCw', Icon: RefreshCw, animation: 'multiState', description: 'Reload action with state progression' },
  { name: 'User', Icon: User, animation: 'multiState', description: 'Profile interaction with state changes' },
  { name: 'Home', Icon: Home, animation: 'multiState', description: 'Navigation with progressive states' },
  { name: 'Database', Icon: Database, animation: 'multiState', description: 'Data interaction with state flow' },
  { name: 'Server', Icon: Server, animation: 'multiState', description: 'System status with state progression' },
  { name: 'Cloud', Icon: Cloud, animation: 'multiState', description: 'Cloud sync with state visualization' },
  { name: 'Folder', Icon: Folder, animation: 'multiState', description: 'File management with state flow' },
  { name: 'Terminal', Icon: Terminal, animation: 'multiState', description: 'Code execution with state feedback' },
  { name: 'Monitor', Icon: Monitor, animation: 'multiState', description: 'Device interaction with state flow' },
  { name: 'ShoppingCart', Icon: ShoppingCart, animation: 'multiState', description: 'E-commerce with purchase flow' }
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
      title: "✅ SVG animation copied!",
      description: `${iconName} icon with ${animation} animation is ready to use in your project.`,
      duration: 3000,
    });
  };

  const handleDownloadIcon = (iconName: string, animation: string) => {
    downloadSVG(iconName, animation);
    
    toast({
      title: "📁 Download started!",
      description: `${iconName}-${animation}.svg file is downloading to your device.`,
      duration: 3000,
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
                duration: 0.2,
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