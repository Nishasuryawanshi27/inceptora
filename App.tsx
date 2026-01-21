import { useState } from 'react';
import { Toaster } from 'sonner';
import { motion, AnimatePresence } from 'motion/react';
import WalkthroughScreen from './components/WalkthroughScreen';
import LoginScreen from './components/LoginScreen';
import OnboardingFlow from './components/OnboardingFlow';
import HomeScreen from './components/HomeScreen';
import MatchScreen from './components/MatchScreen';
import ProfileScreen from './components/ProfileScreen';
import EditProfileScreen from './components/EditProfileScreen';
import ChatScreen from './components/ChatScreen';
import FeedScreen from './components/FeedScreen';
import SettingsScreen from './components/SettingsScreen';
import CreatePostScreen from './components/CreatePostScreen';
import CommunityChatScreen from './components/CommunityChatScreen';
import EventsScreen from './components/EventsScreen';
import NotificationsScreen from './components/NotificationsScreen';
import BottomNav from './components/BottomNav';

export type Screen = 
  | 'walkthrough'
  | 'login'
  | 'onboarding'
  | 'home'
  | 'match'
  | 'profile'
  | 'editProfile'
  | 'chat'
  | 'feed'
  | 'settings'
  | 'create'
  | 'communityChat'
  | 'events'
  | 'notifications';

export interface UserProfile {
  name: string;
  email: string;
  bio: string;
  location: string;
  role: string;
  skills: string[];
  interests: string[];
  experience: string;
  profilePicture: string | null;
  initials: string;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('walkthrough');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState<string>('');
  const [loginMethod, setLoginMethod] = useState<'google' | 'email' | null>(null);
  
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: 'John Doe',
    email: '',
    bio: 'Product designer passionate about creating beautiful user experiences',
    location: 'San Francisco, CA',
    role: 'Product Designer',
    skills: ['UI/UX', 'Figma', 'Design Systems'],
    interests: ['Startups', 'Tech', 'Design'],
    experience: '5+ years',
    profilePicture: null,
    initials: 'JD'
  });

  const handleWalkthroughComplete = () => {
    setCurrentScreen('login');
  };

  const handleLogin = (email: string, method: 'google' | 'email') => {
    setIsAuthenticated(true);
    setUserEmail(email);
    setLoginMethod(method);
    setUserProfile(prev => ({ ...prev, email }));
    setCurrentScreen('onboarding');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserEmail('');
    setLoginMethod(null);
    setCurrentScreen('login');
  };

  const handleOnboardingComplete = () => {
    setCurrentScreen('feed');
  };

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const updateProfile = (updates: Partial<UserProfile>) => {
    setUserProfile(prev => {
      const updated = { ...prev, ...updates };
      // Update initials if name changed
      if (updates.name) {
        const nameParts = updates.name.trim().split(' ');
        updated.initials = nameParts.length >= 2
          ? `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`.toUpperCase()
          : updates.name.slice(0, 2).toUpperCase();
      }
      return updated;
    });
  };

  const pageTransition = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
  };

  const showBottomNav = isAuthenticated && 
    currentScreen !== 'walkthrough' &&
    currentScreen !== 'login' && 
    currentScreen !== 'onboarding' &&
    currentScreen !== 'profile' &&
    currentScreen !== 'chat';

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-0 sm:p-4">
      <Toaster position="top-center" richColors closeButton />
      <div className="w-full h-screen sm:h-[812px] sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl bg-gradient-to-b from-[#0a0e27] to-[#050811] sm:rounded-[2.5rem] shadow-2xl overflow-hidden relative">
        {/* Ambient glow effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#2dd4bf] opacity-10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#a855f7] opacity-10 blur-[120px] rounded-full" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            {...pageTransition}
            className="relative z-10 h-full"
          >
            {currentScreen === 'walkthrough' && <WalkthroughScreen onComplete={handleWalkthroughComplete} />}
            {currentScreen === 'login' && <LoginScreen onLogin={handleLogin} />}
            {currentScreen === 'onboarding' && <OnboardingFlow onComplete={handleOnboardingComplete} />}
            {currentScreen === 'home' && <HomeScreen navigateTo={navigateTo} />}
            {currentScreen === 'match' && <MatchScreen navigateTo={navigateTo} />}
            {currentScreen === 'profile' && <ProfileScreen navigateTo={navigateTo} profile={userProfile} />}
            {currentScreen === 'editProfile' && <EditProfileScreen navigateTo={navigateTo} profile={userProfile} updateProfile={updateProfile} />}
            {currentScreen === 'chat' && <ChatScreen navigateTo={navigateTo} />}
            {currentScreen === 'feed' && <FeedScreen navigateTo={navigateTo} />}
            {currentScreen === 'settings' && <SettingsScreen navigateTo={navigateTo} onLogout={handleLogout} userEmail={userEmail} loginMethod={loginMethod} />}
            {currentScreen === 'create' && <CreatePostScreen navigateTo={navigateTo} />}
            {currentScreen === 'notifications' && <NotificationsScreen navigateTo={navigateTo} />}
            {currentScreen === 'events' && <EventsScreen navigateTo={navigateTo} />}
            {currentScreen === 'communityChat' && <CommunityChatScreen navigateTo={navigateTo} />}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Navigation */}
        {showBottomNav && (
          <BottomNav currentScreen={currentScreen} navigateTo={navigateTo} />
        )}
      </div>
    </div>
  );
}
