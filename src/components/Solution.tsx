
import React from 'react';
import AnimatedIcon from './AnimatedIcon';
import { useToast } from '@/hooks/use-toast';
import { 
  Heart, Star, Download, Share, Settings, Bell,
  Play, Pause, Volume2, RefreshCw, Check, Plus,
  Search, Home, User, Mail, Phone, Calendar,
  Camera, Edit, Trash2, Save, Upload, Lock,
  Unlock, Eye, EyeOff, Sun, Moon, Wifi,
  Battery, Signal, Bluetooth, Zap, Clock,
  MapPin, ShoppingCart, CreditCard, Gift,
  Bookmark, Flag, Tag, Award, Trophy,
  Shield, Key, AlertTriangle, Info, HelpCircle,
  ThumbsUp, MessageCircle, Send, Reply,
  Copy, Scissors, Clipboard, Undo, Redo
} from 'lucide-react';

const allIcons = [
  { Icon: Heart, name: 'Heart', animation: 'pulse' as const },
  { Icon: Star, name: 'Star', animation: 'bounce' as const },
  { Icon: Download, name: 'Download', animation: 'bounce' as const },
  { Icon: Share, name: 'Share', animation: 'swing' as const },
  { Icon: Settings, name: 'Settings', animation: 'rotate' as const },
  { Icon: Bell, name: 'Bell', animation: 'shake' as const },
  { Icon: Play, name: 'Play', animation: 'scale' as const },
  { Icon: Pause, name: 'Pause', animation: 'hover' as const },
  { Icon: Volume2, name: 'Volume', animation: 'pulse' as const },
  { Icon: RefreshCw, name: 'Refresh', animation: 'rotate' as const },
  { Icon: Check, name: 'Check', animation: 'bounce' as const },
  { Icon: Plus, name: 'Add', animation: 'scale' as const },
  { Icon: Search, name: 'Search', animation: 'pulse' as const },
  { Icon: Home, name: 'Home', animation: 'hover' as const },
  { Icon: User, name: 'User', animation: 'scale' as const },
  { Icon: Mail, name: 'Mail', animation: 'swing' as const },
  { Icon: Phone, name: 'Phone', animation: 'shake' as const },
  { Icon: Calendar, name: 'Calendar', animation: 'bounce' as const },
  { Icon: Camera, name: 'Camera', animation: 'scale' as const },
  { Icon: Edit, name: 'Edit', animation: 'swing' as const },
  { Icon: Trash2, name: 'Delete', animation: 'shake' as const },
  { Icon: Save, name: 'Save', animation: 'pulse' as const },
  { Icon: Upload, name: 'Upload', animation: 'bounce' as const },
  { Icon: Lock, name: 'Lock', animation: 'shake' as const },
  { Icon: Unlock, name: 'Unlock', animation: 'bounce' as const },
  { Icon: Eye, name: 'View', animation: 'pulse' as const },
  { Icon: EyeOff, name: 'Hide', animation: 'flip' as const },
  { Icon: Sun, name: 'Light', animation: 'rotate' as const },
  { Icon: Moon, name: 'Dark', animation: 'swing' as const },
  { Icon: Wifi, name: 'WiFi', animation: 'pulse' as const },
  { Icon: Battery, name: 'Battery', animation: 'scale' as const },
  { Icon: Signal, name: 'Signal', animation: 'bounce' as const },
  { Icon: Bluetooth, name: 'Bluetooth', animation: 'pulse' as const },
  { Icon: Zap, name: 'Power', animation: 'shake' as const },
  { Icon: Clock, name: 'Time', animation: 'rotate' as const },
  { Icon: MapPin, name: 'Location', animation: 'bounce' as const },
  { Icon: ShoppingCart, name: 'Cart', animation: 'swing' as const },
  { Icon: CreditCard, name: 'Payment', animation: 'hover' as const },
  { Icon: Gift, name: 'Gift', animation: 'bounce' as const },
  { Icon: Bookmark, name: 'Bookmark', animation: 'scale' as const },
  { Icon: Flag, name: 'Flag', animation: 'swing' as const },
  { Icon: Tag, name: 'Tag', animation: 'shake' as const },
  { Icon: Award, name: 'Award', animation: 'bounce' as const },
  { Icon: Trophy, name: 'Trophy', animation: 'scale' as const },
  { Icon: Shield, name: 'Security', animation: 'pulse' as const },
  { Icon: Key, name: 'Access', animation: 'rotate' as const },
  { Icon: AlertTriangle, name: 'Warning', animation: 'shake' as const },
  { Icon: Info, name: 'Info', animation: 'pulse' as const },
  { Icon: HelpCircle, name: 'Help', animation: 'bounce' as const },
  { Icon: ThumbsUp, name: 'Like', animation: 'bounce' as const },
  { Icon: MessageCircle, name: 'Message', animation: 'swing' as const },
  { Icon: Send, name: 'Send', animation: 'scale' as const },
  { Icon: Reply, name: 'Reply', animation: 'swing' as const },
  { Icon: Copy, name: 'Copy', animation: 'pulse' as const },
  { Icon: Scissors, name: 'Cut', animation: 'shake' as const },
  { Icon: Clipboard, name: 'Paste', animation: 'bounce' as const },
  { Icon: Undo, name: 'Undo', animation: 'rotate' as const },
  { Icon: Redo, name: 'Redo', animation: 'rotate' as const }
];

const features = [
  {
    title: '50+ Handcrafted Icons',
    description: 'Carefully designed icons with perfect micro-interactions for every use case.'
  },
  {
    title: 'Standardized Timing',
    description: 'Consistent animation timing (200ms, 300ms, 500ms) for cohesive user experience.'
  },
  {
    title: 'Performance Optimized',
    description: 'Lightweight SVG format ensures fast loading and smooth animations across devices.'
  }
];

const Solution = () => {
  const { toast } = useToast();

  const generateSVGCode = (iconName: string, animation: string) => {
    return `<!-- SFcon ${iconName} Icon with ${animation} animation -->
<svg class="sfcon-${iconName.toLowerCase()}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <!-- Icon paths would be here -->
  <style>
    .sfcon-${iconName.toLowerCase()}:hover {
      animation: sfcon-${animation} 0.3s ease-in-out;
    }
    
    @keyframes sfcon-${animation} {
      /* Animation keyframes based on ${animation} type */
    }
  </style>
</svg>`;
  };

  const handleIconClick = (iconName: string, animation: string) => {
    const svgCode = generateSVGCode(iconName, animation);
    navigator.clipboard.writeText(svgCode);
    
    toast({
      title: "SVG Code Copied!",
      description: `${iconName} icon with ${animation} animation copied to clipboard.`,
      duration: 2000,
    });
  };

  return (
    <section className="py-24 bg-[#fef7f0] dark:bg-card">
      <div className="max-w-[1440px] mx-auto px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6 font-inter">
              Interactive Icon Library
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-inter">
              Hover to see animations • Click to copy SVG code
            </p>
          </div>

          {/* Interactive Icons Showcase */}
          <div className="mb-20">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
              {allIcons.map((iconData, index) => (
                <div
                  key={index}
                  onClick={() => handleIconClick(iconData.name, iconData.animation)}
                  className="cursor-pointer"
                >
                  <AnimatedIcon
                    Icon={iconData.Icon}
                    name={iconData.name}
                    animation={iconData.animation}
                    size={24}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-background rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
              >
                <h4 className="text-lg font-semibold text-foreground mb-4 font-inter">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed font-inter">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
