import React from 'react';
import { Copy, Download, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  AlarmClock, 
  AlignCenter, 
  Archive, 
  ArrowDown, 
  ArrowUp,
  ArrowLeft,
  ArrowRight,
  Bell,
  Check,
  Calendar,
  Camera,
  Share,
  Settings,
  Search,
  Home,
  User,
  Mail,
  Phone,
  Heart,
  Star,
  Download as DownloadIcon,
  Upload,
  Play,
  Pause,
  Square,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
  Battery,
  BatteryLow,
  Sun,
  Moon,
  Lock,
  Unlock,
  Edit,
  Trash2,
  Save,
  Copy as CopyIcon,
  Eye,
  EyeOff,
  Plus,
  Minus,
  X,
  Menu,
  Grid3X3,
  List,
  Filter,
  RefreshCw,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize,
  Map,
  MapPin,
  Navigation,
  Compass,
  Clock,
  Timer,
  Zap,
  Shield,
  ShieldCheck,
  Award,
  Trophy,
  Flag,
  Bookmark,
  Tag,
  Folder,
  File,
  FileText,
  Image,
  Video,
  Music,
  Headphones,
  Smartphone,
  Laptop,
  Monitor,
  Database,
  Server,
  Cloud,
  Wifi as WifiIcon,
  Bluetooth,
  Code,
  Terminal,
  Command,
  Cpu,
  HardDrive,
  MemoryStick,
  MousePointer,
  Keyboard,
  Printer,
  Webcam,
  Gamepad,
  Joystick,
  Tv,
  Radio,
  Speaker,
  Mic,
  Volume1,
  VolumeOff,
  Shuffle,
  Repeat,
  Repeat1,
  FastForward,
  Rewind,
  CirclePlay,
  CirclePause,
  CircleStop,
  Disc,
  Film,
  CameraOff,
  ImageOff,
  VideoOff
} from 'lucide-react';

// Expanded ReactFlow-style icons with their appropriate animations and morph capabilities
const reactFlowIcons = [
  { name: 'activity', Icon: Activity, animation: 'pulse', morphSupported: true },
  { name: 'alarm-clock', Icon: AlarmClock, animation: 'shake', morphSupported: false },
  { name: 'align-center', Icon: AlignCenter, animation: 'scale', morphSupported: true },
  { name: 'archive', Icon: Archive, animation: 'bounce', morphSupported: false },
  { name: 'arrow-down', Icon: ArrowDown, animation: 'bounce', morphSupported: true },
  { name: 'arrow-up', Icon: ArrowUp, animation: 'bounce', morphSupported: true },
  { name: 'arrow-left', Icon: ArrowLeft, animation: 'bounce', morphSupported: true },
  { name: 'arrow-right', Icon: ArrowRight, animation: 'bounce', morphSupported: true },
  { name: 'bell', Icon: Bell, animation: 'swing', morphSupported: false },
  { name: 'check', Icon: Check, animation: 'bounce', morphSupported: true },
  { name: 'calendar', Icon: Calendar, animation: 'flip', morphSupported: false },
  { name: 'camera', Icon: Camera, animation: 'scale', morphSupported: false },
  { name: 'copy', Icon: CopyIcon, animation: 'pulse', morphSupported: true },
  { name: 'share', Icon: Share, animation: 'swing', morphSupported: true },
  { name: 'settings', Icon: Settings, animation: 'rotate', morphSupported: false },
  { name: 'search', Icon: Search, animation: 'pulse', morphSupported: true },
  { name: 'home', Icon: Home, animation: 'hover', morphSupported: false },
  { name: 'user', Icon: User, animation: 'scale', morphSupported: true },
  { name: 'mail', Icon: Mail, animation: 'swing', morphSupported: false },
  { name: 'phone', Icon: Phone, animation: 'shake', morphSupported: false },
  { name: 'heart', Icon: Heart, animation: 'pulse', morphSupported: true },
  { name: 'star', Icon: Star, animation: 'bounce', morphSupported: true },
  { name: 'download', Icon: DownloadIcon, animation: 'bounce', morphSupported: true },
  { name: 'upload', Icon: Upload, animation: 'bounce', morphSupported: true },
  { name: 'play', Icon: Play, animation: 'scale', morphSupported: true },
  { name: 'pause', Icon: Pause, animation: 'hover', morphSupported: true },
  { name: 'stop', Icon: Square, animation: 'scale', morphSupported: true },
  { name: 'skip-forward', Icon: SkipForward, animation: 'bounce', morphSupported: true },
  { name: 'skip-back', Icon: SkipBack, animation: 'bounce', morphSupported: true },
  { name: 'volume', Icon: Volume2, animation: 'pulse', morphSupported: true },
  { name: 'volume-x', Icon: VolumeX, animation: 'shake', morphSupported: true },
  { name: 'wifi', Icon: Wifi, animation: 'pulse', morphSupported: true },
  { name: 'wifi-off', Icon: WifiOff, animation: 'shake', morphSupported: true },
  { name: 'battery', Icon: Battery, animation: 'scale', morphSupported: true },
  { name: 'battery-low', Icon: BatteryLow, animation: 'shake', morphSupported: true },
  { name: 'sun', Icon: Sun, animation: 'rotate', morphSupported: true },
  { name: 'moon', Icon: Moon, animation: 'swing', morphSupported: true },
  { name: 'lock', Icon: Lock, animation: 'shake', morphSupported: true },
  { name: 'unlock', Icon: Unlock, animation: 'bounce', morphSupported: true },
  { name: 'edit', Icon: Edit, animation: 'swing', morphSupported: false },
  { name: 'trash', Icon: Trash2, animation: 'shake', morphSupported: false },
  { name: 'save', Icon: Save, animation: 'pulse', morphSupported: false },
  { name: 'eye', Icon: Eye, animation: 'pulse', morphSupported: true },
  { name: 'eye-off', Icon: EyeOff, animation: 'flip', morphSupported: true },
  { name: 'plus', Icon: Plus, animation: 'scale', morphSupported: true },
  { name: 'minus', Icon: Minus, animation: 'scale', morphSupported: true },
  { name: 'close', Icon: X, animation: 'rotate', morphSupported: true },
  { name: 'menu', Icon: Menu, animation: 'hover', morphSupported: false },
  { name: 'grid', Icon: Grid3X3, animation: 'scale', morphSupported: false },
  { name: 'list', Icon: List, animation: 'hover', morphSupported: false },
  { name: 'filter', Icon: Filter, animation: 'swing', morphSupported: false },
  { name: 'refresh', Icon: RefreshCw, animation: 'rotate', morphSupported: true },
  { name: 'rotate-ccw', Icon: RotateCcw, animation: 'rotate', morphSupported: true },
  { name: 'rotate-cw', Icon: RotateCw, animation: 'rotate', morphSupported: true },
  { name: 'zoom-in', Icon: ZoomIn, animation: 'scale', morphSupported: true },
  { name: 'zoom-out', Icon: ZoomOut, animation: 'scale', morphSupported: true },
  { name: 'maximize', Icon: Maximize, animation: 'scale', morphSupported: true },
  { name: 'minimize', Icon: Minimize, animation: 'scale', morphSupported: true },
  { name: 'map', Icon: Map, animation: 'hover', morphSupported: false },
  { name: 'map-pin', Icon: MapPin, animation: 'bounce', morphSupported: false },
  { name: 'navigation', Icon: Navigation, animation: 'rotate', morphSupported: true },
  { name: 'compass', Icon: Compass, animation: 'rotate', morphSupported: false },
  { name: 'clock', Icon: Clock, animation: 'rotate', morphSupported: false },
  { name: 'timer', Icon: Timer, animation: 'pulse', morphSupported: false },
  { name: 'zap', Icon: Zap, animation: 'shake', morphSupported: true },
  { name: 'shield', Icon: Shield, animation: 'pulse', morphSupported: true },
  { name: 'shield-check', Icon: ShieldCheck, animation: 'bounce', morphSupported: true },
  { name: 'award', Icon: Award, animation: 'bounce', morphSupported: false },
  { name: 'trophy', Icon: Trophy, animation: 'scale', morphSupported: false },
  { name: 'flag', Icon: Flag, animation: 'swing', morphSupported: false },
  { name: 'bookmark', Icon: Bookmark, animation: 'scale', morphSupported: false },
  { name: 'tag', Icon: Tag, animation: 'shake', morphSupported: false },
  { name: 'folder', Icon: Folder, animation: 'hover', morphSupported: false },
  { name: 'file', Icon: File, animation: 'hover', morphSupported: false },
  { name: 'file-text', Icon: FileText, animation: 'hover', morphSupported: false },
  { name: 'image', Icon: Image, animation: 'scale', morphSupported: false },
  { name: 'video', Icon: Video, animation: 'scale', morphSupported: false },
  { name: 'music', Icon: Music, animation: 'swing', morphSupported: false },
  { name: 'headphones', Icon: Headphones, animation: 'swing', morphSupported: false },
  { name: 'smartphone', Icon: Smartphone, animation: 'scale', morphSupported: false },
  { name: 'laptop', Icon: Laptop, animation: 'hover', morphSupported: false },
  { name: 'monitor', Icon: Monitor, animation: 'pulse', morphSupported: false },
  { name: 'database', Icon: Database, animation: 'scale', morphSupported: false },
  { name: 'server', Icon: Server, animation: 'pulse', morphSupported: false },
  { name: 'cloud', Icon: Cloud, animation: 'hover', morphSupported: true },
  { name: 'bluetooth', Icon: Bluetooth, animation: 'pulse', morphSupported: true },
  { name: 'code', Icon: Code, animation: 'hover', morphSupported: false },
  { name: 'terminal', Icon: Terminal, animation: 'pulse', morphSupported: false },
  { name: 'command', Icon: Command, animation: 'scale', morphSupported: false },
  { name: 'cpu', Icon: Cpu, animation: 'rotate', morphSupported: false },
  { name: 'hard-drive', Icon: HardDrive, animation: 'pulse', morphSupported: false },
  { name: 'memory-stick', Icon: MemoryStick, animation: 'scale', morphSupported: false },
  { name: 'mouse-pointer', Icon: MousePointer, animation: 'bounce', morphSupported: true },
  { name: 'keyboard', Icon: Keyboard, animation: 'hover', morphSupported: false },
  { name: 'printer', Icon: Printer, animation: 'shake', morphSupported: false },
  { name: 'webcam', Icon: Webcam, animation: 'scale', morphSupported: false },
  { name: 'gamepad', Icon: Gamepad, animation: 'swing', morphSupported: false },
  { name: 'tv', Icon: Tv, animation: 'scale', morphSupported: false },
  { name: 'radio', Icon: Radio, animation: 'pulse', morphSupported: false },
  { name: 'speaker', Icon: Speaker, animation: 'pulse', morphSupported: true },
  { name: 'microphone', Icon: Mic, animation: 'pulse', morphSupported: true },
  { name: 'volume-1', Icon: Volume1, animation: 'pulse', morphSupported: true },
  { name: 'volume-off', Icon: VolumeOff, animation: 'shake', morphSupported: true },
  { name: 'shuffle', Icon: Shuffle, animation: 'shake', morphSupported: true },
  { name: 'repeat', Icon: Repeat, animation: 'rotate', morphSupported: true },
  { name: 'repeat-1', Icon: Repeat1, animation: 'rotate', morphSupported: true },
  { name: 'fast-forward', Icon: FastForward, animation: 'bounce', morphSupported: true },
  { name: 'rewind', Icon: Rewind, animation: 'bounce', morphSupported: true },
  { name: 'circle-play', Icon: CirclePlay, animation: 'scale', morphSupported: true },
  { name: 'circle-pause', Icon: CirclePause, animation: 'hover', morphSupported: true },
  { name: 'circle-stop', Icon: CircleStop, animation: 'scale', morphSupported: true },
  { name: 'disc', Icon: Disc, animation: 'rotate', morphSupported: true },
  { name: 'film', Icon: Film, animation: 'scale', morphSupported: false },
  { name: 'camera-off', Icon: CameraOff, animation: 'shake', morphSupported: false },
  { name: 'image-off', Icon: ImageOff, animation: 'shake', morphSupported: false },
  { name: 'video-off', Icon: VideoOff, animation: 'shake', morphSupported: false }
];

const animationVariants = {
  hover: {
    rest: { scale: 1, rotate: 0 },
    hover: { scale: 1.05 },
    transition: { type: "spring", stiffness: 400, damping: 25 }
  },
  pulse: {
    rest: { scale: 1 },
    hover: { 
      scale: [1, 1.08, 1],
      transition: { duration: 0.4, ease: "easeInOut", times: [0, 0.5, 1] }
    }
  },
  rotate: {
    rest: { rotate: 0 },
    hover: { 
      rotate: 180,
      transition: { duration: 0.4, ease: "easeInOut" }
    }
  },
  bounce: {
    rest: { y: 0 },
    hover: { 
      y: [-4, 0],
      transition: { duration: 0.3, ease: "easeOut", times: [0, 1] }
    }
  },
  scale: {
    rest: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: { duration: 0.2, ease: "easeInOut" }
    }
  },
  shake: {
    rest: { x: 0 },
    hover: { 
      x: [-2, 2, -2, 0],
      transition: { duration: 0.3, ease: "easeInOut", times: [0, 0.33, 0.66, 1] }
    }
  },
  flip: {
    rest: { rotateY: 0 },
    hover: { 
      rotateY: 180,
      transition: { duration: 0.4, ease: "easeInOut" }
    }
  },
  swing: {
    rest: { rotate: 0 },
    hover: { 
      rotate: [0, 10, -8, 0],
      transition: { duration: 0.4, ease: "easeOut", times: [0, 0.33, 0.66, 1] }
    }
  }
};

const IconGrid = () => {
  const handleAction = (action: string, iconName: string) => {
    console.log(`${action} action for ${iconName}`);
    // Add your action logic here
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-24">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {reactFlowIcons.map((iconData) => {
          const variant = animationVariants[iconData.animation];
          
          return (
            <motion.div 
              key={iconData.name} 
              className="group relative bg-card rounded-lg border border-border hover:shadow-sm transition-all duration-200 overflow-hidden"
              initial="rest"
              whileHover="hover"
            >
              {/* Main icon area */}
              <div className="p-6 flex flex-col items-center gap-3">
                <motion.div
                  variants={{
                    rest: variant.rest,
                    hover: variant.hover
                  }}
                  transition={variant.transition}
                  className="text-foreground"
                  style={{ transformOrigin: "center" }}
                >
                  <iconData.Icon 
                    size={32} 
                    strokeWidth={1.5}
                    style={{
                      ...(iconData.morphSupported && {
                        transition: 'all 0.3s ease-in-out',
                      })
                    }}
                  />
                </motion.div>
                <span className="text-xs text-muted-foreground font-medium text-center leading-tight font-inter">
                  {iconData.name}
                </span>
              </div>
              
              {/* Action buttons row */}
              <div className="border-t border-border bg-muted/30 px-2 py-2 flex justify-center gap-1">
                <button
                  onClick={() => handleAction('copy', iconData.name)}
                  className="p-1.5 rounded hover:bg-accent/50 transition-colors duration-150 text-muted-foreground hover:text-foreground"
                  title="Copy"
                >
                  <Copy size={14} strokeWidth={1.5} />
                </button>
                <button
                  onClick={() => handleAction('download', iconData.name)}
                  className="p-1.5 rounded hover:bg-accent/50 transition-colors duration-150 text-muted-foreground hover:text-foreground"
                  title="Download"
                >
                  <Download size={14} strokeWidth={1.5} />
                </button>
                <button
                  onClick={() => handleAction('external', iconData.name)}
                  className="p-1.5 rounded hover:bg-accent/50 transition-colors duration-150 text-muted-foreground hover:text-foreground"
                  title="View"
                >
                  <ExternalLink size={14} strokeWidth={1.5} />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default IconGrid;
