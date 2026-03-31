import React, { useState, useEffect } from 'react';
import { 
  Moon, 
  Sun, 
  Share2, 
  Instagram, 
  Linkedin, 
  Mail, 
  Copy, 
  FileText, 
  UserCheck, 
  IndianRupee, 
  Hotel, 
  MapPin, 
  ArrowRight,
  Check,
  Globe,
  Phone
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LinkItem {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  icon: React.ReactNode;
  accentColor: string;
  gradient: string;
}

const OFFICIAL_LINKS: LinkItem[] = [
  {
    id: 'official-website',
    title: 'Official Website',
    subtitle: 'Visit our official event portal',
    url: 'https://www.innovatexfest.in/',
    icon: <Globe className="w-6 h-6 text-white" />,
    accentColor: '#06b6d4',
    gradient: 'linear-gradient(135deg, #06b6d4, #0284c7)'
  }
];

const SOCIAL_LINKS: LinkItem[] = [
  {
    id: 'instagram',
    title: 'Instagram',
    subtitle: 'Follow our daily updates & stories',
    url: 'https://www.instagram.com/innovatex4.0?igsh=NjJ3Z3BwOGt4NWZz',
    icon: <Instagram className="w-6 h-6 text-white" />,
    accentColor: '#e1306c',
    gradient: 'linear-gradient(135deg, #f9ce34, #ee2a7b, #6228d7)'
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    subtitle: "Connect with us professionally",
    url: 'https://www.linkedin.com/in/innovatex-techfest-16742b3b5/',
    icon: <Linkedin className="w-6 h-6 text-white" />,
    accentColor: '#0a66c2',
    gradient: 'linear-gradient(135deg, #0a66c2, #0097e6)'
  }
];

const FORM_LINKS: LinkItem[] = [
  {
    id: 'ext-reg',
    title: 'External Registration',
    subtitle: 'Register from outside the institution',
    url: 'https://forms.gle/TefZ2YSY1iJjdzSm6',
    icon: <FileText className="w-6 h-6 text-white" />,
    accentColor: '#34a853',
    gradient: 'linear-gradient(135deg, #34a853, #0f9d58)'
  },
  {
    id: 'int-reg',
    title: 'Internal Registration',
    subtitle: 'Register for college students',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSdfPj1gh3ZYw7v749RdqdN7D_B2O6HeM3s_KHpaJHofLNwiuw/viewform',
    icon: <UserCheck className="w-6 h-6 text-white" />,
    accentColor: '#7c3aed',
    gradient: 'linear-gradient(135deg, #7c3aed, #a855f7)'
  },
  {
    id: 'payment',
    title: 'Payment Link',
    subtitle: 'Complete your registration payment',
    url: 'https://p.ppsl.io/PYTMPS/MgYHfk',
    icon: <IndianRupee className="w-6 h-6 text-white" />,
    accentColor: '#22c55e',
    gradient: 'linear-gradient(135deg, #22c55e, #16a34a)'
  },
  {
    id: 'accommodation',
    title: 'Accommodation Form',
    subtitle: 'Book your stay for the event',
    url: 'https://forms.gle/8KnmPo1GVHog8bzEA',
    icon: <Hotel className="w-6 h-6 text-white" />,
    accentColor: '#06b6d4',
    gradient: 'linear-gradient(135deg, #06b6d4, #0284c7)'
  },
  {
    id: 'location',
    title: 'University Location',
    subtitle: 'Get directions to the venue',
    url: 'https://maps.app.goo.gl/7Wnnmz9NvGtEZuwY9',
    icon: <MapPin className="w-6 h-6 text-white" />,
    accentColor: '#ef4444',
    gradient: 'linear-gradient(135deg, #ef4444, #dc2626)'
  }
];

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  useEffect(() => {
    const savedTheme = localStorage.getItem('linksHubTheme') as 'dark' | 'light';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('linksHubTheme', newTheme);
  };

  const triggerToast = (msg: string) => {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  const copyEmail = () => {
    const email = 'contact@innovatexfest.in';
    navigator.clipboard.writeText(email).then(() => {
      triggerToast('✅ Email copied to clipboard!');
    });
  };

  const sharePage = async () => {
    const shareData = {
      title: 'INNOVATEX 4.0',
      text: 'Check out the INNOVATEX 4.0 links hub!',
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // Cancelled
      }
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => {
        triggerToast('🔗 Page URL copied!');
      });
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background Mesh */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-150px] left-[-100px] w-[600px] h-[600px] rounded-full bg-accent-1/35 blur-[80px] animate-float" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-accent-2/35 blur-[80px] animate-float [animation-delay:-6s]" />
        <div className="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[350px] h-[350px] rounded-full bg-accent-3/20 blur-[90px] animate-float-delayed" />
      </div>

      {/* Controls */}
      <div className="fixed top-5 left-5 z-50">
        <button 
          onClick={sharePage}
          className="glass px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium hover:bg-white/10 transition-all active:scale-95 shadow-lg"
        >
          <Share2 className="w-4 h-4" />
          <span>Share</span>
        </button>
      </div>

      <div className="fixed top-5 right-5 z-50">
        <button 
          onClick={toggleTheme}
          className="glass px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium hover:bg-white/10 transition-all active:scale-95 shadow-lg"
        >
          {theme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
        </button>
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center px-4 py-16 max-w-lg mx-auto">
        
        {/* Profile Card */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass w-full rounded-[28px] p-8 text-center shadow-2xl mb-8"
        >
          <div className="relative inline-block mb-5">
            <div className="w-28 h-28 rounded-full p-1 bg-gradient-to-br from-accent-1 to-accent-2 shadow-[0_0_30px_rgba(124,58,237,0.5)]">
              <img 
                src="https://ui-avatars.com/api/?name=INNOVATEX+4.0&background=7c3aed&color=fff&size=200&bold=true" 
                alt="Profile" 
                className="w-full h-full rounded-full object-cover border-4 border-bg-primary"
              />
            </div>
            <div className="absolute bottom-1.5 right-1.5 w-4.5 h-4.5 bg-green-500 border-3 border-bg-primary rounded-full animate-pulse" />
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-gradient mb-1">INNOVATEX 4.0</h1>
          <p className="text-sm font-medium text-text-secondary mb-3">📍 Presidency University, Bengaluru, Karnataka</p>
          <p className="text-[0.95rem] leading-relaxed text-text-secondary mb-6 max-w-[340px] mx-auto">
            INNOVATEX Fest welcomes you
          </p>

          <div className="flex justify-center gap-12 mb-6 p-4 bg-white/5 rounded-2xl border border-white/10">
            <div className="text-center">
              <div className="text-xl font-bold">100+</div>
              <div className="text-[0.7rem] uppercase tracking-widest text-text-secondary">Events</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold">30LAKH+</div>
              <div className="text-[0.7rem] uppercase tracking-widest text-text-secondary">Prize Pool</div>
            </div>
          </div>

          <div className="flex items-center gap-3 glass rounded-full px-4 py-2 text-sm text-text-secondary">
            <Mail className="w-4 h-4" />
            <span className="flex-1 truncate">contact@innovatexfest.in</span>
            <button 
              onClick={copyEmail}
              className="bg-gradient-to-r from-accent-1 to-accent-2 text-white px-3 py-1 rounded-full text-xs font-bold hover:opacity-90 transition-all active:scale-95 flex items-center gap-1"
            >
              <Copy className="w-3 h-3" />
              Copy
            </button>
          </div>
        </motion.section>

        {/* Links Sections */}
        <div className="w-full space-y-8">
          <Section label="Official Website">
            {OFFICIAL_LINKS.map((link, i) => (
              <LinkCard key={link.id} link={link} index={i} />
            ))}
          </Section>

          <Section label="Social Profiles">
            {SOCIAL_LINKS.map((link, i) => (
              <LinkCard key={link.id} link={link} index={i + OFFICIAL_LINKS.length} />
            ))}
          </Section>

          <Section label="Forms & Events">
            {FORM_LINKS.map((link, i) => (
              <LinkCard key={link.id} link={link} index={i + OFFICIAL_LINKS.length + SOCIAL_LINKS.length} />
            ))}
          </Section>
        </div>

        {/* Quick Social Icons */}
        <motion.nav 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex gap-4 mt-12"
        >
          <SocialIcon icon={<Instagram className="w-5 h-5" />} url="https://www.instagram.com/innovatex4.0?igsh=NjJ3Z3BwOGt4NWZz" />
          <SocialIcon icon={<Linkedin className="w-5 h-5" />} url="https://www.linkedin.com/in/innovatex-techfest-16742b3b5/" />
          <SocialIcon icon={<Mail className="w-5 h-5" />} url="mailto:contact@innovatexfest.in" />
          <SocialIcon icon={<Phone className="w-5 h-5" />} url="tel:8837471682" />
        </motion.nav>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-center text-xs text-text-secondary space-y-1"
        >
          <p>Made with <span className="text-accent-3">♥</span> · &copy; {new Date().getFullYear()} INNOVATEX 4.0</p>
        </motion.footer>
      </main>

      {/* Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className="fixed bottom-8 left-1/2 glass px-6 py-3 rounded-full text-sm font-bold shadow-xl z-[100] flex items-center gap-2 border-accent-1/30"
          >
            <Check className="w-4 h-4 text-accent-1" />
            {toastMsg}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface SectionProps {
  label: string;
  children: React.ReactNode;
  key?: string | number;
}

function Section({ label, children }: SectionProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3 px-2">
        <div className="h-px flex-1 bg-white/10" />
        <span className="text-[0.7rem] font-bold uppercase tracking-widest text-text-secondary">{label}</span>
        <div className="h-px flex-1 bg-white/10" />
      </div>
      <div className="flex flex-col gap-3">
        {children}
      </div>
    </div>
  );
}

interface LinkCardProps {
  link: LinkItem;
  index: number;
  key?: string | number;
}

function LinkCard({ link, index }: LinkCardProps) {
  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 + 0.2, duration: 0.5 }}
      whileHover={{ y: -4, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      className="glass group relative flex items-center gap-4 p-4 rounded-2xl transition-all hover:bg-white/10 hover:border-white/20 shadow-lg overflow-hidden"
    >
      {/* Accent Bar */}
      <div 
        className="absolute left-0 top-1/4 bottom-1/4 w-1 rounded-r-full opacity-0 group-hover:opacity-100 group-hover:top-2 group-hover:bottom-2 transition-all duration-300"
        style={{ backgroundColor: link.accentColor }}
      />

      {/* Shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />

      <div 
        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 group-hover:-rotate-6"
        style={{ background: link.gradient }}
      >
        {link.icon}
      </div>

      <div className="flex-1 min-w-0">
        <div className="font-bold text-sm sm:text-base truncate">{link.title}</div>
        <div className="text-xs text-text-secondary truncate">{link.subtitle}</div>
      </div>

      <ArrowRight className="w-4 h-4 text-text-secondary group-hover:text-text-primary group-hover:translate-x-1 transition-all" />
    </motion.a>
  );
}

interface SocialIconProps {
  icon: React.ReactNode;
  url: string;
}

function SocialIcon({ icon, url }: SocialIconProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4, scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="glass w-12 h-12 rounded-xl flex items-center justify-center transition-all hover:bg-white/10 hover:shadow-xl"
    >
      {icon}
    </motion.a>
  );
}
