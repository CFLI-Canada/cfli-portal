import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Mail,
  Phone,
  User,
  Users,
  Calendar,
  Award,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Plus,
  Clock,
  MapPin,
  AlertCircle,
  LogOut,
  CheckCircle2,
  Send,
  Smartphone,
  ChevronLeft,
  ArrowLeft,
  GraduationCap,
  Heart,
  MessageSquare,
  FileText,
  BadgeCheck,
  HelpCircle,
  Pencil,
  X,
  Lock,
  Star,
  ExternalLink,
  BookOpen,
  UserCheck,
  UserX,
  AlertTriangle,
  PhoneCall,
  History,
  ClipboardList,
  Check,
  BookmarkCheck,
  Crown,
  Volume2,
  Mic,
  Edit3,
  LayoutDashboard,
  Home,
  Trophy,
  Trash2,
  Camera,
  Paperclip,
  Upload,
  Download,
  Eye,
  File,
  Layers,
  RefreshCw,
  CreditCard,
  Copy,
  Landmark,
  Scale,
  KeyRound,
  CheckCircle,
  LogIn,
  Search,
  Filter,
  SlidersHorizontal,
  Building2,
  CalendarDays,
  Database
} from 'lucide-react';

// =============================================================================
// SAFE ENVIRONMENT RESOLUTION & INLINE SUPABASE CLIENT
// Supports Vite static build injection, Node/SSR, and browser localStorage
// =============================================================================
const getStoredKey = () => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      return window.localStorage.getItem('cfli_supabase_anon_key') || '';
    }
  } catch (e) {}
  return '';
};

// Direct references ensure Vite's compiler substitutes them during `npm run build`
const getViteEnv = (key, fallback = '') => {
  try {
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      if (key === 'VITE_SUPABASE_URL' && import.meta.env.VITE_SUPABASE_URL) {
        return import.meta.env.VITE_SUPABASE_URL;
      }
      if (key === 'VITE_SUPABASE_ANON_KEY' && import.meta.env.VITE_SUPABASE_ANON_KEY) {
        return import.meta.env.VITE_SUPABASE_ANON_KEY;
      }
    }
  } catch (e) {}
  try {
    if (typeof process !== 'undefined' && process.env && process.env[key]) {
      return process.env[key];
    }
  } catch (e) {}
  if (key === 'VITE_SUPABASE_ANON_KEY') {
    const stored = getStoredKey();
    if (stored) return stored;
  }
  return fallback;
};

const DEFAULT_SUPABASE_URL = 'https://ifitoxccgoeofrbtzutm.supabase.co';

export const createInlineSupabaseClient = (url, key) => {
  const activeUrl = url || DEFAULT_SUPABASE_URL;
  return {
    from: (table) => {
      let selectFields = '*';
      return {
        select: async (fields = '*') => {
          selectFields = fields;
          try {
            if (!key) return { data: null, error: new Error('Missing Supabase anon key') };
            const res = await fetch(`${activeUrl}/rest/v1/${table}?select=${encodeURIComponent(selectFields)}`, {
              headers: {
                apikey: key,
                Authorization: `Bearer ${key}`,
                'Content-Type': 'application/json',
              },
            });
            if (!res.ok) {
              const errText = await res.text();
              return { data: null, error: new Error(errText) };
            }
            const data = await res.json();
            return { data, error: null };
          } catch (err) {
            return { data: null, error: err };
          }
        },
        insert: (payload) => {
          const runInsert = async () => {
            try {
              if (!key) return { data: null, error: new Error('Missing Supabase anon key') };
              const res = await fetch(`${activeUrl}/rest/v1/${table}`, {
                method: 'POST',
                headers: {
                  apikey: key,
                  Authorization: `Bearer ${key}`,
                  'Content-Type': 'application/json',
                  Prefer: 'return=representation',
                },
                body: JSON.stringify(payload),
              });
              if (!res.ok) {
                const errText = await res.text();
                return { data: null, error: new Error(errText) };
              }
              const data = await res.json();
              return { data, error: null };
            } catch (err) {
              return { data: null, error: err };
            }
          };

          return {
            select: () => ({
              single: async () => {
                const res = await runInsert();
                return {
                  data: Array.isArray(res.data) ? res.data[0] : res.data,
                  error: res.error,
                };
              },
            }),
            then: (resolve, reject) => runInsert().then(resolve, reject),
          };
        },
        upsert: async (payload) => {
          try {
            if (!key) return { data: null, error: new Error('Missing Supabase anon key') };
            const res = await fetch(`${activeUrl}/rest/v1/${table}`, {
              method: 'POST',
              headers: {
                apikey: key,
                Authorization: `Bearer ${key}`,
                'Content-Type': 'application/json',
                Prefer: 'resolution=merge-duplicates,return=representation',
              },
              body: JSON.stringify(payload),
            });
            if (!res.ok) {
              const errText = await res.text();
              return { data: null, error: new Error(errText) };
            }
            const data = await res.json();
            return { data, error: null };
          } catch (err) {
            return { data: null, error: err };
          }
        },
      };
    },
  };
};

export const supabase = createInlineSupabaseClient(
  getViteEnv('VITE_SUPABASE_URL', DEFAULT_SUPABASE_URL),
  getViteEnv('VITE_SUPABASE_ANON_KEY', '')
);

// =============================================================================
// CFLI OFFICIAL BRAND LOGO (Centre for Leadership and Innovation)
// =============================================================================
export const CFLI_LOGO_URL = 'https://ifitoxccgoeofrbtzutm.supabase.co/storage/v1/object/public/CFLI/cfli-logo.png';

export const CfliLogo = ({ variant = 'full', className = 'h-10' }) => {
  const [loadError, setLoadError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(CFLI_LOGO_URL);

  const fallbackUrls = [
    'https://ifitoxccgoeofrbtzutm.supabase.co/storage/v1/object/public/CFLI/cfli-logo.png',
    'https://ifitoxccgoeofrbtzutm.supabase.co/storage/v1/object/public/cfli/cfli-logo.png',
    'https://ifitoxccgoeofrbtzutm.supabase.co/storage/v1/object/public/CFLI/CFLI%20Logo%20No%20shadow.png',
  ];

  const handleError = () => {
    const currentIndex = fallbackUrls.indexOf(currentSrc);
    if (currentIndex >= 0 && currentIndex < fallbackUrls.length - 1) {
      setCurrentSrc(fallbackUrls[currentIndex + 1]);
    } else {
      setLoadError(true);
    }
  };

  if (loadError) {
    if (variant === 'mark') {
      return (
        <svg viewBox="0 0 100 100" className={`object-contain inline-block select-none ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 6 L54 18 L66 19 L56 26 L60 38 L50 31 L40 38 L44 26 L34 19 L46 18 Z" fill="#FFC513"/>
          <circle cx="38" cy="42" r="9" fill="#339CA3"/>
          <path d="M58 14 C54 36 34 52 30 68 C27 80 32 90 38 92 C32 86 31 76 34 68 C38 56 54 44 58 26 C59 21 60 17 60 14 Z" fill="#339CA3"/>
          <path d="M18 78 C25 66 38 60 48 57 C38 63 32 72 26 84 C22 92 16 93 18 78 Z" fill="#339CA3"/>
        </svg>
      );
    }
    return (
      <div className={`inline-flex items-center space-x-2 select-none ${className}`}>
        <svg viewBox="0 0 100 100" className="h-full w-auto aspect-square shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 6 L54 18 L66 19 L56 26 L60 38 L50 31 L40 38 L44 26 L34 19 L46 18 Z" fill="#FFC513"/>
          <circle cx="38" cy="42" r="9" fill="#339CA3"/>
          <path d="M58 14 C54 36 34 52 30 68 C27 80 32 90 38 92 C32 86 31 76 34 68 C38 56 54 44 58 26 C59 21 60 17 60 14 Z" fill="#339CA3"/>
          <path d="M18 78 C25 66 38 60 48 57 C38 63 32 72 26 84 C22 92 16 93 18 78 Z" fill="#339CA3"/>
        </svg>
        <div className="flex flex-col text-left leading-tight py-0.5">
          <div className="flex items-baseline space-x-1">
            <span className="font-serif font-black tracking-wider text-[#339CA3] text-sm sm:text-base leading-none">CENTRE</span>
            <span className="font-serif italic font-medium text-rose-500 text-xs sm:text-sm leading-none">for</span>
          </div>
          <span className="font-serif font-black tracking-wide text-[#5859A7] text-sm sm:text-base leading-none my-0.5">LEADERSHIP</span>
          <div className="flex items-baseline space-x-1">
            <span className="font-serif italic font-medium text-rose-500 text-xs sm:text-sm leading-none">and</span>
            <span className="font-serif font-black tracking-wider text-[#E98E30] text-sm sm:text-base leading-none">INNOVATION</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt="Centre for Leadership and Innovation (CFLI)"
      className={`object-contain inline-block select-none ${className}`}
      onError={handleError}
    />
  );
};

export const CfliLogoCard = ({ className = 'max-w-xs', size = 'normal' }) => (
  <div className={`bg-white rounded-2xl p-2.5 sm:p-3 shadow-md border border-slate-200 inline-flex items-center justify-center ${className}`}>
    <CfliLogo variant="full" className={size === 'large' ? 'w-full h-16 sm:h-20' : 'w-full h-10 sm:h-12'} />
  </div>
);

// Master 10-Session Curriculum Calendar Baseline
const MASTER_SESSIONS = [
  { num: 1, date: 'Jan 10, 2026', topic: 'Orientation, Voice Mastery & Icebreakers', status: 'completed' },
  { num: 2, date: 'Jan 17, 2026', topic: 'Active Listening & Conflict Resolution', status: 'completed' },
  { num: 3, date: 'Jan 24, 2026', topic: 'Persuasive Storytelling & Audience Engagement', status: 'completed' },
  { num: 4, date: 'Jan 31, 2026', topic: 'Mid-Term Team Milestone Simulation', status: 'completed' },
  { num: 5, date: 'Feb 07, 2026', topic: 'Non-Verbal Body Language & Executive Presence', status: 'active' },
  { num: 6, date: 'Feb 14, 2026', topic: 'Impromptu Speaking & Rapid Reasoning (Table Topics)', status: 'upcoming' },
  { num: 7, date: 'Feb 21, 2026', topic: 'Star Speaker Semi-Final Rehearsal', status: 'upcoming' },
  { num: 8, date: 'Feb 28, 2026', topic: 'Judged Star Speaker Round', status: 'upcoming' },
  { num: 9, date: 'Mar 07, 2026', topic: 'Peer Evaluations & Final Speeches', status: 'upcoming' },
  { num: 10, date: 'Mar 28, 2026', topic: 'Centre Stage Showcase & Graduation Gala', status: 'upcoming' },
];

const ASSIGNMENT_CATEGORIES = [
  'Prepared Speech',
  'Impromptu Speech',
  'Show & Tell',
  'Other'
];

const MEETING_ROLES = [
  'None',
  'Chairperson',
  'Time Manager',
  'Linguistic Manager',
  'Assessors'
];

const calculateVscStatus = (issueDateStr) => {
  if (!issueDateStr) {
    return {
      issueFormatted: 'Not Recorded',
      expiryFormatted: 'Pending',
      daysRemaining: 0,
      isExpired: true,
      statusLabel: 'Action Required',
      badgeClass: 'bg-rose-100 text-rose-700 border-rose-300',
    };
  }

  const [year, month, day] = issueDateStr.split('-').map(Number);
  const issueDate = new Date(year, month - 1, day);
  const expiryDate = new Date(issueDate.getTime() + 365 * 24 * 60 * 60 * 1000);
  const today = new Date();
  const diffTime = expiryDate.getTime() - today.getTime();
  const daysRemaining = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const formatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  const issueFormatted = issueDate.toLocaleDateString('en-US', formatOptions);
  const expiryFormatted = expiryDate.toLocaleDateString('en-US', formatOptions);

  const isExpired = daysRemaining <= 0;
  const isExpiringSoon = daysRemaining > 0 && daysRemaining <= 45;

  let statusLabel = 'Valid & Cleared';
  let badgeClass = 'bg-[#339CA3]/10 text-[#339CA3] border-[#339CA3]/30';

  if (isExpired) {
    statusLabel = 'Expired';
    badgeClass = 'bg-rose-100 text-rose-700 border-rose-300';
  } else if (isExpiringSoon) {
    statusLabel = `Expires in ${daysRemaining}d`;
    badgeClass = 'bg-[#E98E30]/15 text-[#E98E30] border-[#E98E30]/40';
  }

  return { issueFormatted, expiryFormatted, daysRemaining, isExpired, isExpiringSoon, statusLabel, badgeClass };
};

export default function App() {
  const [deviceFrame, setDeviceFrame] = useState(true);
  const [supabaseConnected, setSupabaseConnected] = useState(false);

  // Database Connection Modal & Key Setup States
  const [showDbConnectModal, setShowDbConnectModal] = useState(false);
  const [dbKeyInput, setDbKeyInput] = useState(() => getViteEnv('VITE_SUPABASE_ANON_KEY', ''));
  const [dbUrlInput, setDbUrlInput] = useState(() => getViteEnv('VITE_SUPABASE_URL', DEFAULT_SUPABASE_URL));
  const [dbConnectError, setDbConnectError] = useState('');
  const [isTestingDb, setIsTestingDb] = useState(false);

  // AUTHENTICATION & LOGIN STATES
  const [currentUser, setCurrentUser] = useState({
    isLoggedIn: false,
    role: 'gateway',
    name: 'Guest User',
    email: '',
    phone: '',
  });

  const [activeRolePerspective, setActiveRolePerspective] = useState('gateway');
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [loginMode, setLoginMode] = useState('parent_student'); // 'parent_student' | 'staff'
  const [loginStep, setLoginStep] = useState(1);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPhone, setLoginPhone] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginOtp, setLoginOtp] = useState('');
  const [loginUserType, setLoginUserType] = useState('parent');
  const [loginErrorMessage, setLoginErrorMessage] = useState('');
  const [simulatedOtpSent, setSimulatedOtpSent] = useState('');

  // Parent Navigation States
  const [parentActiveTab, setParentActiveTab] = useState('dashboard');
  const [parentActiveChildId, setParentActiveChildId] = useState('s-alex-chen');
  const [isRegisteringProgram, setIsRegisteringProgram] = useState(false);
  const [enrolmentStep, setEnrolmentStep] = useState('child');
  const [copiedEmailToast, setCopiedEmailToast] = useState(false);
  const [settlingPaymentChild, setSettlingPaymentChild] = useState(null);

  // New Parent Sign-Up Wizard State
  const [isNewParentSignUp, setIsNewParentSignUp] = useState(false);
  const [signUpStep, setSignUpStep] = useState(1);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [newParentForm, setNewParentForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: 'Markham',
    postalCode: 'L3R 5M9',
    emergencyContactName: '',
    emergencyContactPhone: '',
    childFirstName: '',
    childLastName: '',
    childDob: '',
    childGrade: 8,
    childAllergies: 'None',
    programId: 'p1',
    batchId: 'b2',
    paymentMethod: 'credit_card',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  });

  // Sibling Enrolment State
  const [siblingForm, setSiblingForm] = useState({
    childFirstName: '',
    childLastName: '',
    childDob: '',
    childGrade: 8,
    childAllergies: 'None',
    programId: 'p1',
    batchId: 'b2',
    paymentMethod: 'credit_card',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  });

  // Facilitator Navigation & Cohort States
  const [facilitatorActiveTab, setFacilitatorActiveTab] = useState('dashboard');
  const [facilitatorMilestoneSubTab, setFacilitatorMilestoneSubTab] = useState('teams');
  const [showCoFacilitatorsModal, setShowCoFacilitatorsModal] = useState(false);
  const [selectedSessionNum, setSelectedSessionNum] = useState(5);
  const [selectedBatchId, setSelectedBatchId] = useState('b2');

  // Facilitator Interactive Modals
  const [editingRoleAssignmentStudent, setEditingRoleAssignmentStudent] = useState(null);
  const [editingAttendanceStudent, setEditingAttendanceStudent] = useState(null);
  const [editingTeamModal, setEditingTeamModal] = useState(null);
  const [isCreatingNewTeam, setIsCreatingNewTeam] = useState(false);
  const [editingStarSpeakerModal, setEditingStarSpeakerModal] = useState(null);

  // Student Sub-Tabs
  const [studentActiveTab, setStudentActiveTab] = useState('dashboard');

  // Admin Console States
  const [adminActiveTab, setAdminActiveTab] = useState('overview');
  const [adminMasterSubTab, setAdminMasterSubTab] = useState('programs');
  const [adminRegistrySubTab, setAdminRegistrySubTab] = useState('students');
  const [adminSearchTerm, setAdminSearchTerm] = useState('');
  const [adminPaymentFilter, setAdminPaymentFilter] = useState('ALL');
  const [promoSourceCohortId, setPromoSourceCohortId] = useState('b2');
  const [selectedStudentIdsForPromo, setSelectedStudentIdsForPromo] = useState(['s-alex-chen', 's-sophia-patel']);
  const [promoTargetLevel, setPromoTargetLevel] = useState(2);
  const [promoTargetTerm, setPromoTargetTerm] = useState('Spring 2026');
  const [promoTargetBatchCode, setPromoTargetBatchCode] = useState('YLP - 2A Spring 2026: 2 Markham');
  const [showPromotionConfirmationModal, setShowPromotionConfirmationModal] = useState(false);
  const [notificationToast, setNotificationToast] = useState(false);

  // Profile & Master Edit Modals
  const [isEditingParentProfile, setIsEditingParentProfile] = useState(false);
  const [editingChild, setEditingChild] = useState(null);
  const [isEditingFacilitatorProfile, setIsEditingFacilitatorProfile] = useState(false);
  const [viewingVscModal, setViewingVscModal] = useState(false);

  // Admin Master CRUD Modals
  const [editingProgramModal, setEditingProgramModal] = useState(null);
  const [editingBatchNameModal, setEditingBatchNameModal] = useState(null);
  const [editingTermModal, setEditingTermModal] = useState(null);
  const [editingLocationModal, setEditingLocationModal] = useState(null);
  const [midTermChangeModal, setMidTermChangeModal] = useState(null);

  // Admin Dedicated Entity Modals
  const [editingAdminStudentModal, setEditingAdminStudentModal] = useState(null);
  const [editingAdminParentModal, setEditingAdminParentModal] = useState(null);
  const [editingAdminRegistrationModal, setEditingAdminRegistrationModal] = useState(null);
  const [editingAdminPaymentModal, setEditingAdminPaymentModal] = useState(null);
  const [editingAdminFacilitatorModal, setEditingAdminFacilitatorModal] = useState(null);

  // Base Data Lists
  const [parentsList, setParentsList] = useState([
    {
      id: 'p-david-chen',
      firstName: 'David',
      lastName: 'Chen',
      email: 'david.chen@test.com',
      phone: '(647) 555-0192',
      city: 'Markham',
      postalCode: 'L3R 5M9',
      emergencyContactName: 'Rachel Chen',
      emergencyContactPhone: '(647) 555-0199',
    },
    {
      id: 'p-grace-wong',
      firstName: 'Grace',
      lastName: 'Wong',
      email: 'grace.wong@test.com',
      phone: '(416) 555-8832',
      city: 'Markham',
      postalCode: 'L3R 3P1',
      emergencyContactName: 'Alan Wong',
      emergencyContactPhone: '(416) 555-8839',
    },
    {
      id: 'p-priya-patel',
      firstName: 'Priya',
      lastName: 'Patel',
      email: 'priya.patel@test.com',
      phone: '(905) 555-4310',
      city: 'Markham',
      postalCode: 'L3R 8Y2',
      emergencyContactName: 'Vikram Patel',
      emergencyContactPhone: '(905) 555-4318',
    },
    {
      id: 'p-karen-taylor',
      firstName: 'Karen',
      lastName: 'Taylor',
      email: 'karen.taylor@test.com',
      phone: '(647) 555-9011',
      city: 'Richmond Hill',
      postalCode: 'L4C 2A9',
      emergencyContactName: 'Mark Taylor',
      emergencyContactPhone: '(647) 555-9019',
    },
  ]);

  const [parentProfile, setParentProfile] = useState({
    firstName: 'David',
    lastName: 'Chen',
    email: 'david.chen@test.com',
    phone: '(647) 555-0192',
    city: 'Markham',
    postalCode: 'L3R 5M9',
    emergencyContactName: 'Rachel Chen',
    emergencyContactPhone: '(647) 555-0199',
  });

  const [facilitatorProfile, setFacilitatorProfile] = useState({
    firstName: 'Marcus',
    lastName: 'Vance',
    role: 'Lead Facilitator',
    phone: '(416) 555-7821',
    email: 'marcus.vance@cflicanada.com',
    personalEmail: 'marcus.vance.personal@gmail.com',
    bio: 'Youth leadership coach & speech tournament judge specializing in impromptu speaking, vocal projection, and confidence building.',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    vscCleared: true,
    vscIssueDate: '2025-10-15',
    vscAttachmentName: 'VSC_Marcus_Vance_YorkPolice_2025.pdf',
    vscAttachmentSize: '1.4 MB',
    vscAttachmentDate: '2025-10-16',
    startDateOfService: '2023-09-09',
    tenureTerms: 7,
    previousTermBatch: 'YLP - 1A Fall 2025: 1 Markham',
  });

  const [batchRoster, setBatchRoster] = useState([
    {
      studentId: 's-alex-chen',
      firstName: 'Alexander',
      lastName: 'Chen',
      grade: 9,
      dob: '2011-04-18',
      allergies: 'None',
      city: 'Markham',
      postalCode: 'L3R 5M9',
      program: 'Youth Leadership Program',
      term: 'Winter 2026',
      batchCode: 'YLP - 1A Winter 2026: 2 Markham',
      fee: 395,
      paymentStatus: 'Paid',
      paymentMethod: 'Credit Card',
      paymentDate: 'Jan 08, 2026',
      primaryGuardianName: 'David Chen (Father)',
      primaryGuardianPhone: '(647) 555-0192',
      emergencyContactName: 'Rachel Chen (Mother)',
      emergencyContactPhone: '(647) 555-0199',
      level: 1,
      is_alumni: false,
    },
    {
      studentId: 's-maya-chen',
      firstName: 'Maya',
      lastName: 'Chen',
      grade: 7,
      dob: '2013-09-12',
      allergies: 'Peanuts (Carry EpiPen)',
      city: 'Markham',
      postalCode: 'L3R 5M9',
      program: 'Youth Leadership Program',
      term: 'Winter 2026',
      batchCode: 'YLP - 1A Winter 2026: 2 Markham',
      fee: 395,
      paymentStatus: 'Paid',
      paymentMethod: 'Interac E-Transfer',
      paymentDate: 'Jan 09, 2026',
      primaryGuardianName: 'David Chen (Father)',
      primaryGuardianPhone: '(647) 555-0192',
      emergencyContactName: 'Rachel Chen (Mother)',
      emergencyContactPhone: '(647) 555-0199',
      level: 1,
      is_alumni: false,
    },
    {
      studentId: 's-lucas-wong',
      firstName: 'Lucas',
      lastName: 'Wong',
      grade: 8,
      dob: '2012-08-22',
      allergies: 'Asthma (Inhaler in backpack)',
      city: 'Markham',
      postalCode: 'L3R 3P1',
      program: 'Youth Leadership Program',
      term: 'Winter 2026',
      batchCode: 'YLP - 1A Winter 2026: 2 Markham',
      fee: 395,
      paymentStatus: 'Paid',
      paymentMethod: 'Credit Card',
      paymentDate: 'Jan 07, 2026',
      primaryGuardianName: 'Grace Wong (Mother)',
      primaryGuardianPhone: '(416) 555-8832',
      emergencyContactName: 'Alan Wong (Uncle)',
      emergencyContactPhone: '(416) 555-8839',
      level: 1,
      is_alumni: false,
    },
    {
      studentId: 's-sophia-patel',
      firstName: 'Sophia',
      lastName: 'Patel',
      grade: 9,
      dob: '2011-11-05',
      allergies: 'None',
      city: 'Markham',
      postalCode: 'L3R 8Y2',
      program: 'Youth Leadership Program',
      term: 'Winter 2026',
      batchCode: 'YLP - 1A Winter 2026: 2 Markham',
      fee: 395,
      paymentStatus: 'Pending E-Transfer',
      paymentMethod: 'Interac E-Transfer',
      paymentDate: 'Pending Verification',
      primaryGuardianName: 'Priya Patel (Mother)',
      primaryGuardianPhone: '(905) 555-4310',
      emergencyContactName: 'Vikram Patel (Father)',
      emergencyContactPhone: '(905) 555-4318',
      level: 1,
      is_alumni: false,
    },
    {
      studentId: 's-liam-taylor',
      firstName: 'Liam',
      lastName: 'Taylor',
      grade: 8,
      dob: '2012-02-14',
      allergies: 'Dairy (Lactose Intolerant)',
      city: 'Richmond Hill',
      postalCode: 'L4C 2A9',
      program: 'Youth Leadership Program',
      term: 'Winter 2026',
      batchCode: 'YLP - 1A Winter 2026: 2 Markham',
      fee: 395,
      paymentStatus: 'Pay Later',
      paymentMethod: 'Pay Later',
      paymentDate: 'Invoice Pending',
      primaryGuardianName: 'Karen Taylor (Mother)',
      primaryGuardianPhone: '(647) 555-9011',
      emergencyContactName: 'Mark Taylor (Father)',
      emergencyContactPhone: '(647) 555-9019',
      level: 1,
      is_alumni: false,
    },
  ]);

  const [masterProgramsList, setMasterProgramsList] = useState([
    { id: 'p1', code: 'YLP', name: 'Youth Leadership Program', description: 'Flagship public speaking and leadership training for ages 12-18', fee: 395, active: true },
    { id: 'p2', code: 'YHACKS', name: 'YHacks Series', description: 'Youth hackathons, team innovation and technological pitching', fee: 250, active: true },
    { id: 'p3', code: 'CENTRE_STAGE', name: 'Centre Stage Showcase', description: 'Annual speech tournament and gala theatrical showcase', fee: 320, active: true },
    { id: 'p4', code: 'YJOBS', name: 'YJobs Career Hub', description: 'Coaching, resumes, interview simulations, and job placement', fee: 180, active: true },
    { id: 'p5', code: 'YAI', name: 'YAi Artificial Intelligence', description: 'Applied AI ethics, prompt mastery, and modern technical literacy', fee: 295, active: true },
  ]);

  const [masterBatchNamesList, setMasterBatchNamesList] = useState([
    { id: 'bn1', code: '1A', name: 'Level 1 Cohort A', level: 1, description: 'Foundational speaking & problem solving' },
    { id: 'bn2', code: '1B', name: 'Level 1 Cohort B', level: 1, description: 'Foundational active listening & vocal clarity' },
    { id: 'bn3', code: '2A', name: 'Level 2 Cohort A', level: 2, description: 'Intermediate debate & structured discourse' },
    { id: 'bn4', code: '2B', name: 'Level 2 Cohort B', level: 2, description: 'Intermediate persuasive argumentation' },
    { id: 'bn5', code: '3A', name: 'Level 3 Cohort A', level: 3, description: 'Advanced executive presence & tournament prep' },
    { id: 'bn6', code: 'ZZ', name: 'ZZ Withdrawn', level: 0, description: 'Placeholder for inactive and withdrawn students' },
  ]);

  const [masterTermsList, setMasterTermsList] = useState([
    { id: 't1', name: 'Winter 2026', season: 'Winter', year: 2026, isCurrent: true, startDate: '2026-01-10', endDate: '2026-03-28' },
    { id: 't2', name: 'Spring 2026', season: 'Spring', year: 2026, isCurrent: false, startDate: '2026-04-11', endDate: '2026-06-20' },
    { id: 't3', name: 'Fall 2026', season: 'Fall', year: 2026, isCurrent: false, startDate: '2026-09-19', endDate: '2026-11-28' },
  ]);

  const [masterLocationsList, setMasterLocationsList] = useState([
    { id: 'loc1', code: 'MARKHAM_1', name: 'Markham 1', address: '101 Town Centre Blvd (Hub Room 101)', city: 'Markham' },
    { id: 'loc2', code: 'MARKHAM_2', name: 'Markham 2', address: '101 Town Centre Blvd (Hub Room 202)', city: 'Markham' },
    { id: 'loc3', code: 'MARKHAM_3', name: 'Markham 3', address: '101 Town Centre Blvd (Hub Room 203)', city: 'Markham' },
    { id: 'loc4', code: 'MARKHAM_4', name: 'Markham 4', address: '101 Town Centre Blvd (Hub Room 204)', city: 'Markham' },
    { id: 'loc5', code: 'MARKHAM_5', name: 'Markham 5', address: '101 Town Centre Blvd (Hub Room 205)', city: 'Markham' },
    { id: 'loc6', code: 'VIRTUAL', name: 'Virtual Classroom', address: 'Online Interactive / Zoom', city: 'Virtual' },
    { id: 'loc7', code: 'RICHMOND_HILL', name: 'Richmond Hill Centre', address: '10268 Yonge St', city: 'Richmond Hill' },
  ]);

  const [batches] = useState([
    {
      id: 'b1',
      code: 'YLP - 1A Winter 2026: 1 Markham',
      program: 'Youth Leadership Program',
      level: 1,
      cohort: '1A',
      location: 'Markham Community Hub (Room 204)',
      dayTime: 'Saturdays, 10:00 AM - 12:00 PM',
      facilitators: [
        { id: 'f-marcus', name: 'Marcus Vance', role: 'Lead Facilitator', phone: '(416) 555-7821', email: 'marcus.vance@cflicanada.com', vscStatus: 'Valid & Cleared' },
        { id: 'f-devon', name: 'Devon Patel', role: 'Co-Facilitator', phone: '(905) 555-3419', email: 'devon.patel@cflicanada.com', vscStatus: 'Valid & Cleared' },
      ],
    },
    {
      id: 'b2',
      code: 'YLP - 1A Winter 2026: 2 Markham',
      program: 'Youth Leadership Program',
      level: 1,
      cohort: '1A',
      location: 'Markham Community Hub (Room 205)',
      dayTime: 'Saturdays, 1:00 PM - 3:00 PM',
      facilitators: [
        { id: 'f-marcus', name: 'Marcus Vance', role: 'Lead Facilitator', phone: '(416) 555-7821', email: 'marcus.vance@cflicanada.com', vscStatus: 'Valid & Cleared' },
        { id: 'f-sarah', name: 'Sarah Jenkins', role: 'Co-Facilitator', phone: '(416) 555-9082', email: 'sarah.jenkins@cflicanada.com', vscStatus: 'Valid & Cleared' },
      ],
    },
  ]);

  const [facilitatorStaffList, setFacilitatorStaffList] = useState([
    {
      id: 'f-marcus',
      name: 'Marcus Vance',
      email: 'marcus.vance@cflicanada.com',
      phone: '(416) 555-7821',
      role: 'Lead Facilitator',
      vscStatus: 'Valid & Cleared',
      vscIssueDate: '2025-10-15',
      bio: 'Youth leadership coach & speech tournament judge specializing in impromptu speaking, vocal projection, and confidence building.',
      currentAssignment: { term: 'Winter 2026', batchCode: 'YLP - 1A Winter 2026: 2 Markham', location: 'Markham 2', role: 'Lead Facilitator', status: 'Active On-Duty' },
      upcomingAssignment: { term: 'Spring 2026', batchCode: 'YLP - 2A Spring 2026: 2 Markham', location: 'Markham 2', role: 'Lead Facilitator', status: 'Assigned' },
    },
    {
      id: 'f-devon',
      name: 'Devon Patel',
      email: 'devon.patel@cflicanada.com',
      phone: '(905) 555-3419',
      role: 'Co-Facilitator',
      vscStatus: 'Valid & Cleared',
      vscIssueDate: '2025-09-20',
      bio: 'Debate specialist and active listening mentor with focus on structured rebuttals.',
      currentAssignment: { term: 'Winter 2026', batchCode: 'YLP - 1A Winter 2026: 1 Markham', location: 'Markham 1', role: 'Co-Facilitator', status: 'Active On-Duty' },
      upcomingAssignment: { term: 'Spring 2026', batchCode: 'Pending / Unassigned', location: 'Unassigned', role: 'Co-Facilitator', status: 'Unassigned' },
    },
    {
      id: 'f-sarah',
      name: 'Sarah Jenkins',
      email: 'sarah.jenkins@cflicanada.com',
      phone: '(416) 555-9082',
      role: 'Co-Facilitator',
      vscStatus: 'Valid & Cleared',
      vscIssueDate: '2025-11-04',
      bio: 'Public speaking adjudicator, vocal coach, and youth storytelling instructor.',
      currentAssignment: { term: 'Winter 2026', batchCode: 'YLP - 1A Winter 2026: 2 Markham', location: 'Markham 2', role: 'Co-Facilitator', status: 'Active On-Duty' },
      upcomingAssignment: { term: 'Spring 2026', batchCode: 'YLP - 1B Spring 2026: 4 Markham', location: 'Markham 4', role: 'Lead Facilitator', status: 'Assigned' },
    },
  ]);

  const [sessionRecords, setSessionRecords] = useState({
    '1_s-alex-chen': { attendance: 'present', feedback: 'Alexander demonstrated remarkable vocal clarity and enthusiasm during introductions. Spoke with confidence.' },
    '1_s-maya-chen': { attendance: 'present', feedback: 'Great listening posture and polite interaction with peers.' },
    '2_s-alex-chen': { attendance: 'present', feedback: 'Active participation in conflict resolution debate; structured his rebuttal points clearly.' },
    '2_s-maya-chen': { attendance: 'present', feedback: 'Showed thoughtful notes during partner peer critiques; projected clearly.' },
    '3_s-alex-chen': { attendance: 'present', feedback: 'Engaging narrative hook and storytelling arc. Excellent stage movement.' },
    '3_s-maya-chen': { attendance: 'present', feedback: 'Brought great descriptive language in her Show & Tell presentation.' },
    '4_s-alex-chen': { attendance: 'present', feedback: 'Organized team debate points effectively and supported quieter peers.' },
    '4_s-maya-chen': { attendance: 'present', feedback: 'Kept tight track of time and showed great composure during team discussions.' },
    '5_s-alex-chen': { attendance: 'present', feedback: 'Superb stance and purposeful hand gestures today. Significantly reduced filler words (um/ah).' },
    '5_s-maya-chen': { attendance: 'present', feedback: 'Good posture; projected voice cleanly across the entire room.' },
    '5_s-lucas-wong': { attendance: 'late', feedback: 'Arrived at 1:12 PM; completed table topics with solid quick thinking.' },
    '5_s-sophia-patel': { attendance: 'present', feedback: 'Masterful eye contact across all corners of the room.' },
    '5_s-liam-taylor': { attendance: 'absent', feedback: 'Family travel out of province.' },
  });

  const [studentSessionAssignments, setStudentSessionAssignments] = useState({
    '1_s-alex-chen': { role: 'Time Manager', category: 'Show & Tell', topic: 'My Robotics Hardware' },
    '1_s-maya-chen': { role: 'Chairperson', category: 'Prepared Speech', topic: 'The Wonder of Nature' },
    '1_s-lucas-wong': { role: 'Linguistic Manager', category: 'Impromptu Speech', topic: 'Winter Sports' },
    '1_s-sophia-patel': { role: 'Assessors', category: 'Prepared Speech', topic: 'Youth Voice in Markham' },
    '1_s-liam-taylor': { role: 'None', category: 'Show & Tell', topic: 'My Favorite Book' },

    '2_s-alex-chen': { role: 'Assessors', category: 'Prepared Speech', topic: 'Overcoming Stage Fright' },
    '2_s-maya-chen': { role: 'Time Manager', category: 'Impromptu Speech', topic: 'Why We Need Libraries' },
    '2_s-lucas-wong': { role: 'Chairperson', category: 'Prepared Speech', topic: 'The Science of Space Flight' },
    '2_s-sophia-patel': { role: 'Linguistic Manager', category: 'Show & Tell', topic: 'Provincial Track Medal' },
    '2_s-liam-taylor': { role: 'Assessors', category: 'Prepared Speech', topic: 'Protecting Urban Trees' },

    '3_s-alex-chen': { role: 'Linguistic Manager', category: 'Prepared Speech', topic: 'Persuasive Storytelling Archetypes' },
    '3_s-maya-chen': { role: 'Assessors', category: 'Show & Tell', topic: 'Family Recipe Heritage' },
    '3_s-lucas-wong': { role: 'Time Manager', category: 'Impromptu Speech', topic: 'Artificial Intelligence in Gaming' },
    '3_s-sophia-patel': { role: 'Chairperson', category: 'Prepared Speech', topic: 'Youth Leadership in York Region' },
    '3_s-liam-taylor': { role: 'Linguistic Manager', category: 'Show & Tell', topic: 'Musical Instruments' },

    '4_s-alex-chen': { role: 'None', category: 'Impromptu Speech', topic: 'Milestone Debate: Rapid Arguments' },
    '4_s-maya-chen': { role: 'Linguistic Manager', category: 'Prepared Speech', topic: 'Teamwork in Competitive Dance' },
    '4_s-lucas-wong': { role: 'Assessors', category: 'Show & Tell', topic: 'Coding My First Web App' },
    '4_s-sophia-patel': { role: 'Time Manager', category: 'Impromptu Speech', topic: 'Civic Duty for Teenagers' },
    '4_s-liam-taylor': { role: 'Chairperson', category: 'Prepared Speech', topic: 'Volunteering in Animal Shelters' },

    '5_s-alex-chen': { role: 'Chairperson', category: 'Prepared Speech', topic: 'The Power of Resilience: Overcoming High School Obstacles' },
    '5_s-maya-chen': { role: 'Time Manager', category: 'Show & Tell', topic: 'My Provincial Robotics Award & What It Taught Me' },
    '5_s-lucas-wong': { role: 'Linguistic Manager', category: 'Impromptu Speech', topic: 'Table Topics Fast-Fire Delivery' },
    '5_s-sophia-patel': { role: 'Assessors', category: 'Prepared Speech', topic: 'Community Leadership in Youth Sports' },
    '5_s-liam-taylor': { role: 'None', category: 'Other', topic: 'Vocal Projection & Breathing Drill Demonstration' },
  });

  const [milestoneTeams, setMilestoneTeams] = useState([
    {
      id: 'team-1',
      name: 'Velocity Orators',
      topic: 'The Ethics of AI in Secondary Schools: Catalyst or Shortcut?',
      members: ['s-alex-chen', 's-sophia-patel'],
    },
    {
      id: 'team-2',
      name: 'Markham Impact Leaders',
      topic: 'Community Sustainability: Youth-Led Climate Initiatives in York Region',
      members: ['s-maya-chen', 's-lucas-wong', 's-liam-taylor'],
    },
  ]);

  const [starSpeakerCandidates, setStarSpeakerCandidates] = useState([
    {
      slot: 1,
      studentId: 's-alex-chen',
      speechTitle: 'The Architecture of Resilience: Turning Setbacks into Fuel',
    },
    {
      slot: 2,
      studentId: 's-sophia-patel',
      speechTitle: 'Unlocking Young Civic Voices in Local Governance',
    },
  ]);

  const [sessionNotesLinks] = useState({
    1: 'https://docs.google.com/document/d/ylp-w26-session1-orientation',
    2: 'https://docs.google.com/document/d/ylp-w26-session2-conflict-resolution',
    3: 'https://docs.google.com/document/d/ylp-w26-session3-persuasive-speaking',
    4: 'https://docs.google.com/document/d/ylp-w26-session4-midterm-milestones',
    5: 'https://docs.google.com/document/d/ylp-w26-session5-nonverbal-mastery',
    6: 'https://docs.google.com/document/d/ylp-w26-session6-impromptu-table-topics',
    7: 'https://docs.google.com/document/d/ylp-w26-session7-starspeaker-rehearsal',
    8: 'https://docs.google.com/document/d/ylp-w26-session8-starspeaker-judged',
    9: 'https://docs.google.com/document/d/ylp-w26-session9-final-speeches',
    10: 'https://docs.google.com/document/d/ylp-w26-session10-centre-stage-gala',
  });

  // Reusable function to verify Supabase connectivity and load live rows
  const testAndLoadSupabase = async (overrideKey = null, overrideUrl = null) => {
    const activeUrl = overrideUrl || dbUrlInput || DEFAULT_SUPABASE_URL;
    const activeKey = overrideKey !== null ? overrideKey : (dbKeyInput || getViteEnv('VITE_SUPABASE_ANON_KEY', ''));

    if (!activeKey) {
      setSupabaseConnected(false);
      return false;
    }

    try {
      const client = createInlineSupabaseClient(activeUrl, activeKey);
      const { data: progData, error: progErr } = await client.from('master_programs').select('*');

      if (progErr) {
        console.warn('Supabase query error:', progErr.message);
        setSupabaseConnected(false);
        return false;
      }

      // Valid response received from Supabase
      setSupabaseConnected(true);

      if (progData && progData.length > 0) {
        setMasterProgramsList(progData.map(p => ({
          id: p.id,
          code: p.code,
          name: p.name,
          description: p.description,
          fee: p.fee || 395,
          active: p.is_active ?? true,
        })));
      }

      const { data: termData } = await client.from('master_terms').select('*');
      if (termData && termData.length > 0) {
        setMasterTermsList(termData.map(t => ({
          id: t.id,
          name: t.term_name,
          season: t.season,
          year: t.year,
          isCurrent: t.is_current,
          startDate: t.start_date,
          endDate: t.end_date,
        })));
      }

      const { data: locData } = await client.from('master_locations').select('*');
      if (locData && locData.length > 0) {
        setMasterLocationsList(locData.map(l => ({
          id: l.id,
          code: l.code,
          name: l.name,
          address: l.address,
          city: l.city,
        })));
      }

      const { data: bnData } = await client.from('master_batch_names').select('*');
      if (bnData && bnData.length > 0) {
        setMasterBatchNamesList(bnData.map(b => ({
          id: b.id,
          code: b.code,
          name: b.name,
          level: b.level,
          description: b.description,
        })));
      }

      const { data: parentsDb } = await client.from('parents').select('*');
      if (parentsDb && parentsDb.length > 0) {
        setParentsList(parentsDb.map(p => ({
          id: p.id,
          firstName: p.first_name,
          lastName: p.last_name,
          email: p.email,
          phone: p.phone,
          city: p.city || 'Markham',
          postalCode: p.postal_code || 'L3R 5M9',
          emergencyContactName: p.emergency_contact_name || '',
          emergencyContactPhone: p.emergency_contact_phone || '',
        })));
      }

      const { data: studentsDb } = await client.from('students').select('*');
      if (studentsDb && studentsDb.length > 0) {
        setBatchRoster(studentsDb.map(s => ({
          studentId: s.id,
          firstName: s.first_name,
          lastName: s.last_name,
          grade: s.grade_level || 8,
          dob: s.date_of_birth || '2012-01-01',
          allergies: s.medical_allergies || 'None',
          city: s.city || 'Markham',
          postalCode: s.postal_code || 'L3R 5M9',
          program: 'Youth Leadership Program',
          term: 'Winter 2026',
          batchCode: 'YLP - 1A Winter 2026: 2 Markham',
          fee: 395,
          paymentStatus: 'Paid',
          paymentMethod: 'Credit Card',
          paymentDate: 'Jan 08, 2026',
          primaryGuardianName: 'Guardian on file',
          primaryGuardianPhone: s.phone || '(647) 555-0192',
          emergencyContactName: 'Rachel Chen',
          emergencyContactPhone: '(647) 555-0199',
          level: 1,
          is_alumni: s.is_alumni || false,
        })));
      }

      return true;
    } catch (err) {
      console.warn('Supabase initialization using local fallbacks:', err.message);
      setSupabaseConnected(false);
      return false;
    }
  };

  // Run initial test on component mount
  useEffect(() => {
    testAndLoadSupabase();
  }, []);

  const triggerSavedToast = (msg = 'Changes saved successfully!') => {
    setNotificationToast(msg);
    setTimeout(() => setNotificationToast(false), 2500);
  };

  const handleCopyEmail = (email = 'payments@cflicanada.ca') => {
    navigator.clipboard?.writeText(email);
    setCopiedEmailToast(true);
    setTimeout(() => setCopiedEmailToast(false), 2000);
  };

  const getRecord = (studentId, sessNum = selectedSessionNum) => {
    const key = `${sessNum}_${studentId}`;
    return sessionRecords[key] || { attendance: 'present', feedback: '' };
  };

  const getStudentAssignment = (studentId, sessNum = selectedSessionNum) => {
    const key = `${sessNum}_${studentId}`;
    return studentSessionAssignments[key] || {
      role: 'None',
      category: 'Prepared Speech',
      topic: 'Topic to be determined',
    };
  };

  const getStudentFullHistory = (studentId) => {
    return MASTER_SESSIONS.map((sess) => {
      const rec = getRecord(studentId, sess.num);
      const asg = getStudentAssignment(studentId, sess.num);
      return {
        sessionNum: sess.num,
        date: sess.date,
        curriculumTopic: sess.topic,
        sessionStatus: sess.status,
        attendance: rec.attendance,
        feedback: rec.feedback,
        role: asg.role,
        category: asg.category,
        speechTopic: asg.topic,
      };
    });
  };

  const getStudentRoleStats = (studentId) => {
    const counts = {
      chairperson: 0,
      timeManager: 0,
      linguisticManager: 0,
      assessors: 0,
      preparedSpeech: 0,
      impromptuSpeech: 0,
      showAndTell: 0,
      totalAssignedRoles: 0,
    };

    [1, 2, 3, 4, 5].forEach((sess) => {
      const asg = getStudentAssignment(studentId, sess);
      if (asg.role === 'Chairperson') counts.chairperson++;
      if (asg.role === 'Time Manager') counts.timeManager++;
      if (asg.role === 'Linguistic Manager') counts.linguisticManager++;
      if (asg.role === 'Assessors') counts.assessors++;
      if (asg.role !== 'None') counts.totalAssignedRoles++;

      if (asg.category === 'Prepared Speech') counts.preparedSpeech++;
      if (asg.category === 'Impromptu Speech') counts.impromptuSpeech++;
      if (asg.category === 'Show & Tell') counts.showAndTell++;
    });

    return counts;
  };

  const handleToggleAttendance = async (studentId) => {
    const key = `${selectedSessionNum}_${studentId}`;
    const sequence = ['present', 'late', 'absent', 'excused'];
    const currentStatus = getRecord(studentId).attendance;
    const nextStatus = sequence[(sequence.indexOf(currentStatus) + 1) % sequence.length];

    setSessionRecords((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        attendance: nextStatus,
        feedback: prev[key]?.feedback || '',
      },
    }));

    triggerSavedToast(`Marked ${nextStatus.toUpperCase()}`);

    try {
      if (studentId.includes('-') && studentId.length > 20) {
        await supabase.from('attendance_and_feedbacks').upsert({
          student_id: studentId,
          session_number: selectedSessionNum,
          session_date: MASTER_SESSIONS[selectedSessionNum - 1]?.date || '2026-02-07',
          status: nextStatus,
        });
      }
    } catch (e) {
      console.warn('Could not sync attendance to Supabase:', e);
    }
  };

  const handleInitiateOtp = (e) => {
    e.preventDefault();
    setLoginErrorMessage('');

    if (!loginEmail || !loginPhone) {
      setLoginErrorMessage('Please enter both your email address and Canadian mobile phone number.');
      return;
    }

    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setSimulatedOtpSent(generatedOtp);
    setLoginStep(2);
    triggerSavedToast(`Demo OTP code: ${generatedOtp} (Sent to ${loginEmail})`);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setLoginErrorMessage('');

    if (!loginOtp || loginOtp.length < 6) {
      setLoginErrorMessage('Please enter a valid 6-digit OTP verification code.');
      return;
    }

    const roleToAssign = loginUserType === 'student' ? 'student' : 'parent';
    const userName = loginUserType === 'student' ? 'Alexander Chen' : `${parentProfile.firstName} ${parentProfile.lastName}`;

    setCurrentUser({
      isLoggedIn: true,
      role: roleToAssign,
      name: userName,
      email: loginEmail,
      phone: loginPhone,
    });

    setActiveRolePerspective(roleToAssign);
    setLoginModalOpen(false);
    setLoginStep(1);
    setLoginOtp('');
    triggerSavedToast(`Authenticated successfully as ${userName}!`);
  };

  const handleStaffLogin = (e) => {
    e.preventDefault();
    setLoginErrorMessage('');

    if (!loginEmail || !loginPassword) {
      setLoginErrorMessage('Please enter your CFLI Google ID / email and password.');
      return;
    }

    const lowerEmail = loginEmail.toLowerCase();
    if (lowerEmail.includes('admin') || loginUserType === 'admin') {
      setCurrentUser({
        isLoggedIn: true,
        role: 'admin',
        name: 'CFLI Administrator',
        email: loginEmail,
        phone: '(905) 555-CFLI',
      });
      setActiveRolePerspective('admin');
      setLoginModalOpen(false);
      triggerSavedToast('Welcome, Super Admin!');
    } else {
      setCurrentUser({
        isLoggedIn: true,
        role: 'facilitator',
        name: `${facilitatorProfile.firstName} ${facilitatorProfile.lastName}`,
        email: loginEmail,
        phone: facilitatorProfile.phone,
      });
      setActiveRolePerspective('facilitator');
      setLoginModalOpen(false);
      triggerSavedToast(`Welcome back, Coach ${facilitatorProfile.firstName}!`);
    }
  };

  const handleLogOut = () => {
    setCurrentUser({
      isLoggedIn: false,
      role: 'gateway',
      name: 'Guest User',
      email: '',
      phone: '',
    });
    setActiveRolePerspective('gateway');
    triggerSavedToast('Logged out securely.');
  };

  const handleCompleteNewParentSignUp = async (e) => {
    e.preventDefault();
    setIsProcessingPayment(true);

    const selectedProgram = masterProgramsList.find(p => p.id === newParentForm.programId) || masterProgramsList[0];
    const selectedCohort = batches.find(b => b.id === newParentForm.batchId) || batches[1];
    const newStudentId = `s-${Date.now()}`;

    setParentProfile({
      firstName: newParentForm.firstName,
      lastName: newParentForm.lastName,
      email: newParentForm.email,
      phone: newParentForm.phone,
      city: newParentForm.city || 'Markham',
      postalCode: newParentForm.postalCode || 'L3R 5M9',
      emergencyContactName: newParentForm.emergencyContactName,
      emergencyContactPhone: newParentForm.emergencyContactPhone,
    });

    const paymentStatusValue =
      newParentForm.paymentMethod === 'credit_card'
        ? 'Paid'
        : newParentForm.paymentMethod === 'etransfer'
        ? 'Pending E-Transfer'
        : 'Pay Later';

    const paymentMethodValue =
      newParentForm.paymentMethod === 'credit_card'
        ? 'Credit Card'
        : newParentForm.paymentMethod === 'etransfer'
        ? 'Interac E-Transfer'
        : 'Pay Later';

    const newStudent = {
      studentId: newStudentId,
      firstName: newParentForm.childFirstName,
      lastName: newParentForm.childLastName,
      grade: parseInt(newParentForm.childGrade) || 8,
      dob: newParentForm.childDob,
      allergies: newParentForm.childAllergies || 'None',
      city: newParentForm.city || 'Markham',
      postalCode: newParentForm.postalCode || 'L3R 5M9',
      program: selectedProgram.name,
      term: 'Winter 2026',
      batchCode: selectedCohort.code,
      fee: selectedProgram.fee,
      paymentStatus: paymentStatusValue,
      paymentMethod: paymentMethodValue,
      paymentDate: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      primaryGuardianName: `${newParentForm.firstName} ${newParentForm.lastName} (Guardian)`,
      primaryGuardianPhone: newParentForm.phone,
      emergencyContactName: newParentForm.emergencyContactName,
      emergencyContactPhone: newParentForm.emergencyContactPhone,
      level: 1,
      is_alumni: false,
    };

    setBatchRoster((prev) => [newStudent, ...prev]);

    try {
      const { data: parentRecord } = await supabase.from('parents').insert({
        first_name: newParentForm.firstName,
        last_name: newParentForm.lastName,
        email: newParentForm.email,
        phone: newParentForm.phone,
        city: newParentForm.city,
        postal_code: newParentForm.postalCode,
        emergency_contact_name: newParentForm.emergencyContactName,
        emergency_contact_phone: newParentForm.emergencyContactPhone,
      }).select().single();

      if (parentRecord?.id) {
        await supabase.from('students').insert({
          parent_id: parentRecord.id,
          first_name: newParentForm.childFirstName,
          last_name: newParentForm.childLastName,
          date_of_birth: newParentForm.childDob,
          grade_level: parseInt(newParentForm.childGrade) || 8,
          medical_allergies: newParentForm.childAllergies || 'None',
          city: newParentForm.city,
          postal_code: newParentForm.postalCode,
        });
      }
    } catch (err) {
      console.warn('Could not persist to Supabase:', err.message);
    }

    setStudentSessionAssignments((prev) => ({
      ...prev,
      [`5_${newStudentId}`]: {
        role: 'Time Manager',
        category: 'Show & Tell',
        topic: 'Orientation Show & Tell: My Passions',
      },
    }));

    setCurrentUser({
      isLoggedIn: true,
      role: 'parent',
      name: `${newParentForm.firstName} ${newParentForm.lastName}`,
      email: newParentForm.email,
      phone: newParentForm.phone,
    });
    setParentActiveChildId(newStudentId);
    setActiveRolePerspective('parent');
    setParentActiveTab('dashboard');
    setIsProcessingPayment(false);
    setIsNewParentSignUp(false);

    triggerSavedToast(`Welcome ${newParentForm.firstName}! Enrolment confirmed for ${newParentForm.childFirstName}.`);
  };

  const handleCompleteSiblingEnrolment = (e) => {
    e.preventDefault();
    const selectedProgram = masterProgramsList.find(p => p.id === siblingForm.programId) || masterProgramsList[0];
    const selectedCohort = batches.find(b => b.id === siblingForm.batchId) || batches[1];
    const newSiblingId = `s-${Date.now()}`;

    const paymentStatusValue =
      siblingForm.paymentMethod === 'credit_card'
        ? 'Paid'
        : siblingForm.paymentMethod === 'etransfer'
        ? 'Pending E-Transfer'
        : 'Pay Later';

    const paymentMethodValue =
      siblingForm.paymentMethod === 'credit_card'
        ? 'Credit Card'
        : siblingForm.paymentMethod === 'etransfer'
        ? 'Interac E-Transfer'
        : 'Pay Later';

    const newSibling = {
      studentId: newSiblingId,
      firstName: siblingForm.childFirstName,
      lastName: siblingForm.childLastName,
      grade: parseInt(siblingForm.childGrade) || 8,
      dob: siblingForm.childDob,
      allergies: siblingForm.childAllergies || 'None',
      city: parentProfile.city || 'Markham',
      postalCode: parentProfile.postalCode || 'L3R 5M9',
      program: selectedProgram.name,
      term: 'Winter 2026',
      batchCode: selectedCohort.code,
      fee: selectedProgram.fee,
      paymentStatus: paymentStatusValue,
      paymentMethod: paymentMethodValue,
      paymentDate: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      primaryGuardianName: `${parentProfile.firstName} ${parentProfile.lastName} (Guardian)`,
      primaryGuardianPhone: parentProfile.phone,
      emergencyContactName: parentProfile.emergencyContactName,
      emergencyContactPhone: parentProfile.emergencyContactPhone,
      level: 1,
      is_alumni: false,
    };

    setBatchRoster((prev) => [...prev, newSibling]);
    setStudentSessionAssignments((prev) => ({
      ...prev,
      [`5_${newSiblingId}`]: {
        role: 'Linguistic Manager',
        category: 'Prepared Speech',
        topic: 'Getting Started in Public Speaking',
      },
    }));

    setParentActiveChildId(newSiblingId);
    setIsRegisteringProgram(false);
    triggerSavedToast(`Enrolled sibling ${siblingForm.childFirstName} into ${selectedProgram.name}!`);
  };

  const handleExecutePromotion = () => {
    if (selectedStudentIdsForPromo.length === 0) {
      triggerSavedToast('Select at least one student to promote.');
      return;
    }

    setBatchRoster((prev) =>
      prev.map((student) => {
        if (selectedStudentIdsForPromo.includes(student.studentId)) {
          const nextLevel = promoTargetLevel;
          const isGrad = nextLevel > 3;
          return {
            ...student,
            level: nextLevel,
            term: promoTargetTerm,
            batchCode: isGrad ? 'Alumni Graduate' : promoTargetBatchCode,
            grade: student.grade + 1,
            is_alumni: isGrad,
          };
        }
        return student;
      })
    );

    setShowPromotionConfirmationModal(false);
    triggerSavedToast(`Successfully promoted ${selectedStudentIdsForPromo.length} students to ${promoTargetTerm}!`);
  };

  const myChildren = batchRoster.filter(
    (c) =>
      c.primaryGuardianPhone === parentProfile.phone ||
      c.studentId === 's-alex-chen' ||
      c.studentId === 's-maya-chen' ||
      c.primaryGuardianName.includes(parentProfile.lastName)
  );
  const activeChild = myChildren.find((c) => c.studentId === parentActiveChildId) || myChildren[0] || batchRoster[0];
  const activeBatch = batches.find((b) => b.id === selectedBatchId) || batches[1];
  const vscInfo = calculateVscStatus(facilitatorProfile.vscIssueDate);
  const currentGoogleNotesUrl = sessionNotesLinks[selectedSessionNum] || sessionNotesLinks[5];

  const activeChildHistory = getStudentFullHistory(activeChild.studentId);
  const activeChildPresentCount = activeChildHistory.filter(h => h.sessionNum <= 5 && (h.attendance === 'present' || h.attendance === 'late')).length;
  const activeChildAttendancePct = Math.round((activeChildPresentCount / 5) * 100);
  const activeChildTeam = milestoneTeams.find(t => t.members.includes(activeChild.studentId));
  const activeChildStarSpeaker = starSpeakerCandidates.find(c => c.studentId === activeChild.studentId);
  const activeChildNextAssignment = getStudentAssignment(activeChild.studentId, 5);

  const studentSelfId = 's-alex-chen';
  const studentSelf = batchRoster.find(s => s.studentId === studentSelfId) || batchRoster[0];
  const studentHistory = getStudentFullHistory(studentSelfId);
  const studentPresentCount = studentHistory.filter(h => h.sessionNum <= 5 && (h.attendance === 'present' || h.attendance === 'late')).length;
  const studentAttendancePct = Math.round((studentPresentCount / 5) * 100);
  const studentTeam = milestoneTeams.find(t => t.members.includes(studentSelfId));
  const studentStarSpeaker = starSpeakerCandidates.find(c => c.studentId === studentSelfId);
  const studentNextAssignment = getStudentAssignment(studentSelfId, 5);

  const filteredAdminStudents = batchRoster.filter((s) => {
    const matchesSearch =
      s.firstName.toLowerCase().includes(adminSearchTerm.toLowerCase()) ||
      s.lastName.toLowerCase().includes(adminSearchTerm.toLowerCase()) ||
      s.primaryGuardianName.toLowerCase().includes(adminSearchTerm.toLowerCase()) ||
      s.batchCode.toLowerCase().includes(adminSearchTerm.toLowerCase());

    const matchesPayment =
      adminPaymentFilter === 'ALL' ||
      (adminPaymentFilter === 'PAID' && s.paymentStatus === 'Paid') ||
      (adminPaymentFilter === 'PENDING' && s.paymentStatus === 'Pending E-Transfer') ||
      (adminPaymentFilter === 'PAY_LATER' && s.paymentStatus === 'Pay Later');

    return matchesSearch && matchesPayment;
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col items-center justify-start p-2 sm:p-6 font-sans antialiased selection:bg-[#5859A7] selection:text-white">
      {/* CFLI Official 4-Color Brand Ribbon */}
      <div className={`w-full transition-all duration-300 ${deviceFrame ? 'max-w-md' : 'max-w-4xl'} h-1.5 rounded-full overflow-hidden flex mb-2.5 shadow-xs`}>
        <div className="w-1/4 h-full bg-[#5859A7]" title="Royal Indigo #5859A7" />
        <div className="w-1/4 h-full bg-[#339CA3]" title="Teal #339CA3" />
        <div className="w-1/4 h-full bg-[#E98E30]" title="Warm Tangerine #E98E30" />
        <div className="w-1/4 h-full bg-[#FFC513]" title="Golden Yellow #FFC513" />
      </div>

      {/* Top Header Bar */}
      <header className={`w-full transition-all duration-300 ${deviceFrame ? 'max-w-md' : 'max-w-4xl'} mb-2.5 flex items-center justify-between px-1`}>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setActiveRolePerspective('gateway')}
            className={`py-1.5 px-3 rounded-xl transition-all font-bold text-xs flex items-center space-x-1.5 border shadow-xs ${
              activeRolePerspective === 'gateway'
                ? 'bg-[#5859A7] text-white border-[#5859A7]'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900'
            }`}
            title="Return to Gateway"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Gateway</span>
          </button>

          <button
            onClick={() => {
              setDbConnectError('');
              setShowDbConnectModal(true);
            }}
            className={`flex items-center space-x-1 px-2.5 py-1 rounded-xl text-[10px] font-bold border transition-all cursor-pointer shadow-2xs hover:opacity-90 ${
              supabaseConnected
                ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                : 'bg-amber-50 text-amber-800 border-amber-300 animate-pulse'
            }`}
            title="Click to view or connect Supabase database"
          >
            <Database className="w-3 h-3" />
            <span>{supabaseConnected ? 'DB Live' : 'Offline / Mock (Connect)'}</span>
          </button>
        </div>

        <div className="flex items-center space-x-2 text-xs">
          {currentUser.isLoggedIn ? (
            <div className="flex items-center space-x-2 bg-white border border-slate-200 py-1 px-2.5 rounded-xl shadow-xs">
              <div className="flex flex-col text-right">
                <span className="text-xs font-bold text-slate-900 leading-tight">{currentUser.name}</span>
                <span className="text-[10px] uppercase font-bold text-[#5859A7]">{currentUser.role}</span>
              </div>
              <button
                onClick={handleLogOut}
                className="p-1.5 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg transition-colors"
                title="Log Out"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                setLoginModalOpen(true);
                setLoginStep(1);
                setLoginErrorMessage('');
              }}
              className="py-1.5 px-3.5 bg-[#5859A7] hover:bg-[#4a4b91] text-white font-bold rounded-xl flex items-center space-x-1.5 shadow-xs transition-all text-xs"
              title="Log In"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Log In</span>
            </button>
          )}

          <button
            onClick={() => setDeviceFrame(!deviceFrame)}
            className="p-1.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-xs"
            title={deviceFrame ? "Expand to Full Screen View" : "Switch to Mobile Phone View"}
          >
            <Smartphone className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Viewport Container */}
      <main
        className={`w-full transition-all duration-300 ${
          deviceFrame
            ? 'max-w-md bg-white border border-slate-200 rounded-[38px] shadow-xl overflow-hidden relative min-h-[860px] flex flex-col justify-between ring-8 ring-slate-100'
            : 'max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-lg overflow-hidden flex flex-col justify-between'
        }`}
      >
        {deviceFrame && (
          <div className="w-full bg-slate-50 pt-2.5 pb-2 px-6 flex items-center justify-between text-[11px] font-semibold text-slate-500 border-b border-slate-200 select-none">
            <span>9:41</span>
            <div className="w-20 h-4 bg-slate-200 rounded-full mx-auto" />
            <div className="flex items-center space-x-1.5">
              <span className="text-[10px] text-[#339CA3] font-bold">5G</span>
              <div className="w-5 h-2.5 border border-slate-400 rounded-sm p-0.5 flex items-center">
                <div className="w-full h-full bg-[#339CA3] rounded-sm" />
              </div>
            </div>
          </div>
        )}

        {notificationToast && (
          <div className="mx-4 mt-2 p-2 bg-[#339CA3]/15 border border-[#339CA3]/40 rounded-xl text-center text-xs font-bold text-[#339CA3] flex items-center justify-center space-x-2 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-[#339CA3]" />
            <span>{notificationToast}</span>
          </div>
        )}

        {/* ================================================================= */}
        {/* GATEWAY / WELCOME PERSPECTIVE                                    */}
        {/* ================================================================= */}
        {activeRolePerspective === 'gateway' && (
          <div className="flex-1 flex flex-col justify-between p-5 space-y-4 overflow-y-auto bg-[#fafafa]">
            <div className="text-center space-y-2 pt-1">
              <div className="flex justify-center">
                <CfliLogoCard className="max-w-[280px] shadow-sm" size="large" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#339CA3] block mt-1">
                Youth Leadership Programs
              </span>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                CFLI Canada <span className="text-[#5859A7]">Hub</span>
              </h1>
              <p className="text-xs text-slate-600 max-w-xs mx-auto">
                Welcome to the CFLI Portal. Choose your portal below or log in to access your session records.
              </p>
            </div>

            <div className="space-y-3 flex-1 py-1">
              {/* Parents */}
              <div className="rounded-2xl bg-white border border-[#E98E30]/40 p-4 shadow-xs hover:border-[#E98E30] transition-all">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#E98E30]/15 text-[#E98E30] flex items-center justify-center font-bold">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-sm font-black text-slate-900">Parents & Guardians</h2>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Track each child's learning journey, next roles, feedback history & attendance.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-100">
                  <button
                    onClick={() => {
                      setParentActiveTab('dashboard');
                      setActiveRolePerspective('parent');
                    }}
                    className="flex-1 py-2 px-3 bg-[#E98E30] hover:bg-amber-600 text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-1.5 transition-all shadow-xs"
                  >
                    <span>Enter Family Hub</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      setSignUpStep(1);
                      setIsNewParentSignUp(true);
                    }}
                    className="py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-all"
                  >
                    <span>New Parent Sign-Up</span>
                  </button>
                </div>
              </div>

              {/* Students */}
              <div className="rounded-2xl bg-white border border-[#339CA3]/40 p-4 shadow-xs hover:border-[#339CA3] transition-all">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#339CA3]/15 text-[#339CA3] flex items-center justify-center font-bold">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-sm font-black text-slate-900">Students</h2>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Review your leadership journey, roles, facilitator feedback & attendance record.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-100">
                  <button
                    onClick={() => {
                      setStudentActiveTab('dashboard');
                      setActiveRolePerspective('student');
                    }}
                    className="w-full py-2 px-3 bg-[#339CA3] hover:bg-teal-700 text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-1.5 transition-all shadow-xs"
                  >
                    <span>Open My Student Journey</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Facilitators */}
              <div className="rounded-2xl bg-white border border-[#5859A7]/40 p-4 shadow-xs hover:border-[#5859A7] transition-all">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#5859A7]/15 text-[#5859A7] flex items-center justify-center font-bold">
                      <Crown className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-sm font-black text-slate-900">Facilitators & Coaches</h2>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Role assignments, attendance logging, co-facilitator sync & milestones.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-100">
                  <button
                    onClick={() => {
                      setFacilitatorActiveTab('dashboard');
                      setActiveRolePerspective('facilitator');
                    }}
                    className="w-full py-2 px-3 bg-[#5859A7] hover:bg-[#494a8f] text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-1.5 transition-all shadow-xs"
                  >
                    <span>Access Facilitator Hub</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Admin */}
              <div className="rounded-2xl bg-white border border-slate-200 p-3.5 shadow-xs flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <ShieldCheck className="w-5 h-5 text-[#FFC513]" />
                  <div>
                    <h3 className="text-xs font-bold text-slate-900">Administrator Console</h3>
                    <span className="text-[10px] text-slate-500">Master records, staffing, promotion</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setAdminActiveTab('overview');
                    setActiveRolePerspective('admin');
                  }}
                  className="py-1 px-3 bg-[#FFC513] text-slate-950 font-black text-xs rounded-xl hover:bg-amber-400"
                >
                  Admin View
                </button>
              </div>
            </div>

            <div className="pt-2 text-center border-t border-slate-200 text-[10px] text-slate-500">
              CFLI Canada • Connected to Supabase Cloud
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* FACILITATOR PORTAL                                               */}
        {/* ================================================================= */}
        {activeRolePerspective === 'facilitator' && (
          <div className="flex-1 flex flex-col justify-between bg-white">
            <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#5859A7] block">
                  Instructional Hub
                </span>
                <h2 className="text-sm font-bold text-slate-900 flex items-center space-x-1.5">
                  <span>{facilitatorProfile.firstName} {facilitatorProfile.lastName}</span>
                  <BadgeCheck className="w-4 h-4 text-[#339CA3]" />
                </h2>
              </div>

              <div className="flex items-center space-x-1.5">
                <select
                  value={selectedBatchId}
                  onChange={(e) => {
                    setSelectedBatchId(e.target.value);
                    triggerSavedToast(`Switched cohort view`);
                  }}
                  className="bg-white border border-slate-300 text-[11px] font-bold text-slate-800 rounded-xl px-2 py-1 shadow-xs max-w-[130px] truncate"
                >
                  {batches.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.code.includes('1 Markham') ? 'Markham 1 (10 AM)' : 'Markham 2 (1 PM)'}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedSessionNum}
                  onChange={(e) => setSelectedSessionNum(parseInt(e.target.value))}
                  className="bg-white border border-slate-300 text-[11px] font-bold text-slate-800 rounded-xl px-2 py-1 shadow-xs"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>Sess {num}</option>
                  ))}
                </select>

                <button
                  onClick={() => setShowCoFacilitatorsModal(true)}
                  className="p-1.5 bg-white border border-indigo-200 hover:border-[#5859A7] rounded-xl text-[#5859A7] hover:bg-indigo-50/50 shadow-xs transition-colors"
                  title="View Co-Facilitators"
                >
                  <Users className="w-4 h-4 text-[#5859A7]" />
                </button>
              </div>
            </div>

            {facilitatorActiveTab === 'dashboard' && (
              <div className="p-4 space-y-3.5 flex-1 overflow-y-auto bg-[#fafafa]">
                <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-2">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    <span>Active Cohort</span>
                    <span className="text-[#339CA3] font-extrabold">{activeBatch.dayTime}</span>
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-900">{activeBatch.code}</h3>
                  <p className="text-xs text-slate-500 flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{activeBatch.location}</span>
                  </p>
                </div>

                <div className="bg-white border border-indigo-100 rounded-2xl p-3.5 shadow-xs space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-1.5">
                      <Users className="w-4 h-4 text-[#5859A7]" />
                      <span className="text-xs font-black uppercase tracking-wider text-[#5859A7]">
                        Assigned Cohort Facilitators
                      </span>
                    </div>
                    <button
                      onClick={() => setShowCoFacilitatorsModal(true)}
                      className="text-[10px] text-[#5859A7] font-bold hover:underline"
                    >
                      Team Directory
                    </button>
                  </div>

                  <div className="space-y-2">
                    {activeBatch.facilitators.map((fac) => {
                      const isCurrentUser = fac.email === facilitatorProfile.email || fac.name.includes(facilitatorProfile.firstName);
                      return (
                        <div
                          key={fac.id}
                          className={`p-3 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition-all ${
                            isCurrentUser
                              ? 'bg-slate-50/70 border-slate-200'
                              : 'bg-indigo-50/40 border-[#5859A7]/30'
                          }`}
                        >
                          <div className="flex items-center space-x-2.5">
                            <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-xs shrink-0 ${
                              isCurrentUser ? 'bg-[#5859A7] text-white shadow-xs' : 'bg-[#339CA3] text-white shadow-xs'
                            }`}>
                              {fac.name.split(' ').map((n) => n[0]).join('')}
                            </div>
                            <div>
                              <div className="flex items-center space-x-1.5">
                                <h4 className="text-xs font-bold text-slate-900">{fac.name}</h4>
                                {isCurrentUser ? (
                                  <span className="text-[9px] font-bold bg-slate-200 text-slate-700 px-1.5 py-0.2 rounded-md">
                                    You (Lead)
                                  </span>
                                ) : (
                                  <span className="text-[9px] font-black bg-[#339CA3]/15 text-[#339CA3] px-1.5 py-0.2 rounded-md border border-[#339CA3]/30">
                                    Co-Facilitator Partner
                                  </span>
                                )}
                              </div>
                              <span className="text-[10px] text-slate-500 font-medium block">
                                {fac.role} • {fac.vscStatus || 'VSC Cleared'}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center space-x-1.5 pt-1 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                            <a
                              href={`tel:${fac.phone.replace(/[^0-9]/g, '')}`}
                              className="flex-1 sm:flex-none py-1.5 px-2.5 bg-white border border-slate-200 hover:border-[#339CA3] hover:text-[#339CA3] text-slate-700 rounded-xl text-[11px] font-bold flex items-center justify-center space-x-1 transition-all shadow-2xs"
                            >
                              <Phone className="w-3 h-3 text-[#339CA3]" />
                              <span>{fac.phone}</span>
                            </a>
                            <a
                              href={`mailto:${fac.email}`}
                              className="p-1.5 bg-white border border-slate-200 hover:border-[#5859A7] text-slate-700 hover:text-[#5859A7] rounded-xl transition-all shadow-2xs flex items-center justify-center"
                            >
                              <Mail className="w-3.5 h-3.5 text-[#5859A7]" />
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    onClick={() => setFacilitatorActiveTab('roles')}
                    className="p-3.5 bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl text-left space-y-2 shadow-xs transition-all"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#FFC513]/20 text-amber-700 flex items-center justify-center">
                      <Crown className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Roles & Tasks</div>
                      <span className="text-[10px] text-slate-500">Add & edit session roles</span>
                    </div>
                  </button>

                  <button
                    onClick={() => setFacilitatorActiveTab('attendance')}
                    className="p-3.5 bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl text-left space-y-2 shadow-xs transition-all"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#339CA3]/15 text-[#339CA3] flex items-center justify-center">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Attendance</div>
                      <span className="text-[10px] text-slate-500">1-tap toggle & feedback</span>
                    </div>
                  </button>

                  <button
                    onClick={() => setFacilitatorActiveTab('equity')}
                    className="p-3.5 bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl text-left space-y-2 shadow-xs transition-all"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#5859A7]/15 text-[#5859A7] flex items-center justify-center">
                      <Scale className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Equitable History</div>
                      <span className="text-[10px] text-slate-500">Audit past opportunities</span>
                    </div>
                  </button>

                  <button
                    onClick={() => setFacilitatorActiveTab('milestones')}
                    className="p-3.5 bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl text-left space-y-2 shadow-xs transition-all"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#E98E30]/15 text-[#E98E30] flex items-center justify-center">
                      <Trophy className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Milestones Hub</div>
                      <span className="text-[10px] text-slate-500">Teams & 2 Star Speakers</span>
                    </div>
                  </button>
                </div>
              </div>
            )}

            {facilitatorActiveTab === 'roles' && (
              <div className="p-4 space-y-3.5 flex-1 overflow-y-auto bg-[#fafafa]">
                <div className="flex justify-between items-center px-1">
                  <div>
                    <span className="text-[10px] font-black uppercase text-slate-500">Session {selectedSessionNum}</span>
                    <h3 className="text-sm font-extrabold text-slate-900">Meeting Roles & Speech Topics</h3>
                  </div>
                  <span className="text-[10px] text-[#339CA3] font-bold bg-[#339CA3]/10 px-2 py-0.5 rounded-full">
                    Live Synced
                  </span>
                </div>

                <div className="space-y-2.5">
                  {batchRoster.map((student) => {
                    const asg = getStudentAssignment(student.studentId);
                    return (
                      <div key={student.studentId} className="p-3 bg-white border border-slate-200 rounded-2xl space-y-2 shadow-xs">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-xs font-bold text-slate-900">{student.firstName} {student.lastName}</h4>
                            <span className="text-[10px] text-slate-500">Grade {student.grade}</span>
                          </div>

                          <button
                            onClick={() => setEditingRoleAssignmentStudent({ student, asg })}
                            className="py-1 px-2.5 bg-slate-100 hover:bg-[#5859A7] hover:text-white text-slate-700 text-xs font-bold rounded-xl flex items-center space-x-1 transition-all"
                          >
                            <Pencil className="w-3 h-3" />
                            <span>Edit Role</span>
                          </button>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="p-2 bg-slate-50 rounded-xl">
                            <span className="text-[9px] uppercase font-bold text-slate-500 block">Leadership Role</span>
                            <span className={`font-bold ${asg.role !== 'None' ? 'text-[#5859A7]' : 'text-slate-400'}`}>
                              {asg.role}
                            </span>
                          </div>
                          <div className="p-2 bg-slate-50 rounded-xl">
                            <span className="text-[9px] uppercase font-bold text-slate-500 block">Speech Category</span>
                            <span className="font-bold text-slate-800">{asg.category}</span>
                          </div>
                        </div>

                        <div className="p-2 bg-slate-50 rounded-xl text-xs">
                          <span className="text-[9px] uppercase font-bold text-slate-500 block mb-0.5">Assigned Topic</span>
                          <p className="text-slate-700 font-medium italic">"{asg.topic}"</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {facilitatorActiveTab === 'attendance' && (
              <div className="p-4 space-y-3.5 flex-1 overflow-y-auto bg-[#fafafa]">
                <div className="flex justify-between items-center px-1">
                  <div>
                    <span className="text-[10px] font-black uppercase text-slate-500">Session {selectedSessionNum}</span>
                    <h3 className="text-sm font-extrabold text-slate-900">Attendance & Written Feedback</h3>
                  </div>
                  <button
                    onClick={() => {
                      const updates = {};
                      batchRoster.forEach((s) => {
                        const key = `${selectedSessionNum}_${s.studentId}`;
                        updates[key] = { attendance: 'present', feedback: sessionRecords[key]?.feedback || '' };
                      });
                      setSessionRecords((prev) => ({ ...prev, ...updates }));
                      triggerSavedToast('All students marked present!');
                    }}
                    className="text-xs bg-[#339CA3]/15 text-[#339CA3] font-bold px-2.5 py-1 rounded-xl hover:bg-[#339CA3]/25 transition-colors"
                  >
                    Mark All Present
                  </button>
                </div>

                <div className="space-y-2.5">
                  {batchRoster.map((student) => {
                    const rec = getRecord(student.studentId);
                    return (
                      <div key={student.studentId} className="p-3 bg-white border border-slate-200 rounded-2xl space-y-2 shadow-xs">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="text-xs font-bold text-slate-900">{student.firstName} {student.lastName}</h4>
                            <span className="text-[10px] text-slate-500">{student.city}</span>
                          </div>

                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleToggleAttendance(student.studentId)}
                              className={`px-2.5 py-1 rounded-xl text-xs font-bold capitalize border transition-all ${
                                rec.attendance === 'present'
                                  ? 'bg-[#339CA3]/10 text-[#339CA3] border-[#339CA3]/40'
                                  : rec.attendance === 'late'
                                  ? 'bg-[#E98E30]/15 text-[#E98E30] border-[#E98E30]/40'
                                  : 'bg-rose-100 text-rose-700 border-rose-300'
                              }`}
                            >
                              {rec.attendance}
                            </button>

                            <button
                              onClick={() => setEditingAttendanceStudent({ student, rec })}
                              className="p-1 hover:bg-slate-100 rounded-lg text-slate-500 hover:text-slate-900"
                              title="Edit Feedback Note"
                            >
                              <Edit3 className="w-3.5 h-3.5 text-[#5859A7]" />
                            </button>
                          </div>
                        </div>

                        {rec.feedback ? (
                          <div className="p-2 bg-slate-50 rounded-xl text-xs text-slate-700 italic border border-slate-100">
                            "{rec.feedback}"
                          </div>
                        ) : (
                          <button
                            onClick={() => setEditingAttendanceStudent({ student, rec })}
                            className="text-[11px] text-[#5859A7] font-semibold hover:underline flex items-center space-x-1"
                          >
                            <Plus className="w-3 h-3" />
                            <span>Add Facilitator Feedback Note...</span>
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {facilitatorActiveTab === 'equity' && (
              <div className="p-4 space-y-3.5 flex-1 overflow-y-auto bg-[#fafafa]">
                <div className="flex justify-between items-center px-1">
                  <div>
                    <span className="text-[10px] font-black uppercase text-[#5859A7]">Sessions 1 to 5 Audit</span>
                    <h3 className="text-sm font-extrabold text-slate-900 flex items-center space-x-1.5">
                      <Scale className="w-4 h-4 text-[#5859A7]" />
                      <span>Equitable Assignment Tracker</span>
                    </h3>
                  </div>
                  <span className="text-[10px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full font-bold">
                    Cohort Balance
                  </span>
                </div>

                <div className="space-y-3">
                  {batchRoster.map((student) => {
                    const stats = getStudentRoleStats(student.studentId);
                    return (
                      <div key={student.studentId} className="p-3.5 bg-white border border-slate-200 rounded-2xl space-y-2.5 shadow-xs">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="text-xs font-bold text-slate-900">{student.firstName} {student.lastName}</h4>
                            <span className="text-[10px] text-slate-500">Grade {student.grade}</span>
                          </div>

                          {stats.chairperson === 0 ? (
                            <span className="px-2 py-0.5 rounded-full text-[9px] font-black bg-[#E98E30]/15 text-[#E98E30] border border-[#E98E30]/30 flex items-center space-x-1">
                              <AlertCircle className="w-2.5 h-2.5" />
                              <span>Due for Chairperson</span>
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#339CA3]/10 text-[#339CA3] border border-[#339CA3]/30 flex items-center space-x-1">
                              <Check className="w-2.5 h-2.5" />
                              <span>Balanced</span>
                            </span>
                          )}
                        </div>

                        <div className="grid grid-cols-4 gap-1.5 text-center text-xs">
                          <div className="p-1.5 bg-slate-50 rounded-xl border border-slate-100">
                            <span className="text-[9px] font-bold text-slate-500 block">Chair</span>
                            <span className="font-extrabold text-[#5859A7] text-xs">{stats.chairperson}x</span>
                          </div>
                          <div className="p-1.5 bg-slate-50 rounded-xl border border-slate-100">
                            <span className="text-[9px] font-bold text-slate-500 block">Timer</span>
                            <span className="font-extrabold text-slate-800 text-xs">{stats.timeManager}x</span>
                          </div>
                          <div className="p-1.5 bg-slate-50 rounded-xl border border-slate-100">
                            <span className="text-[9px] font-bold text-slate-500 block">Linguist</span>
                            <span className="font-extrabold text-slate-800 text-xs">{stats.linguisticManager}x</span>
                          </div>
                          <div className="p-1.5 bg-slate-50 rounded-xl border border-slate-100">
                            <span className="text-[9px] font-bold text-slate-500 block">Assessor</span>
                            <span className="font-extrabold text-slate-800 text-xs">{stats.assessors}x</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {facilitatorActiveTab === 'milestones' && (
              <div className="p-4 space-y-4 flex-1 overflow-y-auto bg-[#fafafa]">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-[10px] font-black uppercase text-[#FFC513] tracking-wider">
                      Term Competitions Setup
                    </span>
                    <h3 className="text-sm font-extrabold text-slate-900">Cohort Milestones Hub</h3>
                  </div>
                  <span className="text-[10px] text-slate-500 bg-white px-2 py-0.5 rounded-lg border border-slate-200">
                    No Feedback Required
                  </span>
                </div>

                <div className="bg-slate-100 p-1 rounded-2xl flex space-x-1">
                  <button
                    onClick={() => setFacilitatorMilestoneSubTab('teams')}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-xl transition-all flex items-center justify-center space-x-1.5 ${
                      facilitatorMilestoneSubTab === 'teams' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    <Users className="w-3.5 h-3.5 text-[#339CA3]" />
                    <span>Teams ({milestoneTeams.length})</span>
                  </button>
                  <button
                    onClick={() => setFacilitatorMilestoneSubTab('starspeaker')}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-xl transition-all flex items-center justify-center space-x-1.5 ${
                      facilitatorMilestoneSubTab === 'starspeaker' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    <Trophy className="w-3.5 h-3.5 text-[#FFC513]" />
                    <span>2 Star Speakers</span>
                  </button>
                </div>

                {facilitatorMilestoneSubTab === 'teams' && (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center px-1">
                      <span className="text-xs text-slate-600">Cohort Debate & Speech Teams</span>
                      <button
                        onClick={() => {
                          setIsCreatingNewTeam(true);
                          setEditingTeamModal({
                            id: `team-${Date.now()}`,
                            name: '',
                            topic: '',
                            members: [],
                          });
                        }}
                        className="py-1 px-2.5 bg-[#339CA3] text-white text-xs font-bold rounded-xl flex items-center space-x-1 hover:bg-teal-700 shadow-xs"
                      >
                        <Plus className="w-3 h-3 stroke-[3]" />
                        <span>Add Team</span>
                      </button>
                    </div>

                    <div className="space-y-2.5">
                      {milestoneTeams.map((team) => (
                        <div key={team.id} className="p-3.5 bg-white border border-slate-200 rounded-2xl space-y-2 shadow-xs">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="text-xs font-extrabold text-slate-900">{team.name}</h4>
                              <span className="text-[10px] text-slate-500">{team.members.length} Assigned Students</span>
                            </div>

                            <button
                              onClick={() => {
                                setIsCreatingNewTeam(false);
                                setEditingTeamModal({ ...team });
                              }}
                              className="py-1 px-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl flex items-center space-x-1"
                            >
                              <Pencil className="w-3 h-3" />
                              <span>Edit</span>
                            </button>
                          </div>

                          <div className="p-2 bg-slate-50 rounded-xl text-xs text-[#5859A7] font-semibold italic">
                            "{team.topic}"
                          </div>

                          <div className="flex flex-wrap gap-1 pt-1">
                            {team.members.map((memId) => {
                              const s = batchRoster.find((r) => r.studentId === memId);
                              return (
                                <span key={memId} className="px-2 py-0.5 rounded-full text-[10px] bg-slate-100 text-slate-700 font-medium">
                                  {s ? `${s.firstName} ${s.lastName}` : memId}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {facilitatorMilestoneSubTab === 'starspeaker' && (
                  <div className="space-y-3">
                    <span className="text-xs text-slate-600 block px-1">
                      Assign exactly 2 Star Speaker tournament candidates per cohort:
                    </span>

                    <div className="space-y-2.5">
                      {starSpeakerCandidates.map((cand) => {
                        const candStudent = batchRoster.find((s) => s.studentId === cand.studentId);
                        return (
                          <div key={cand.slot} className="p-3.5 bg-white border border-[#FFC513]/50 rounded-2xl space-y-2 shadow-xs">
                            <div className="flex justify-between items-center">
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-[#FFC513]/20 text-amber-800 border border-[#FFC513]/40">
                                Star Speaker Slot #{cand.slot}
                              </span>
                              <button
                                onClick={() => setEditingStarSpeakerModal({ ...cand })}
                                className="py-1 px-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl flex items-center space-x-1"
                              >
                                <Pencil className="w-3 h-3" />
                                <span>Change Candidate</span>
                              </button>
                            </div>

                            <div className="text-xs font-bold text-slate-900">
                              Candidate: {candStudent ? `${candStudent.firstName} ${candStudent.lastName}` : 'Unassigned'}
                            </div>

                            <div className="p-2 bg-slate-50 rounded-xl text-xs">
                              <span className="text-[9px] uppercase font-bold text-slate-500 block">Speech Title</span>
                              <span className="font-semibold text-slate-800 italic">"{cand.speechTitle}"</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

            {facilitatorActiveTab === 'profile' && (
              <div className="p-4 space-y-4 flex-1 overflow-y-auto bg-[#fafafa]">
                <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-3 shadow-xs">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={facilitatorProfile.photoUrl}
                        alt="Coach Marcus"
                        className="w-12 h-12 rounded-2xl object-cover ring-2 ring-[#5859A7]/30"
                      />
                      <div>
                        <h4 className="font-extrabold text-slate-900 text-sm">
                          {facilitatorProfile.firstName} {facilitatorProfile.lastName}
                        </h4>
                        <span className="text-xs text-[#5859A7] font-bold">{facilitatorProfile.role}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsEditingFacilitatorProfile(true)}
                      className="px-3 py-1.5 bg-[#5859A7] text-white text-xs font-bold rounded-xl hover:bg-[#494a8f]"
                    >
                      Edit Profile
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                    <div className="p-2 bg-slate-50 rounded-xl">
                      <span className="text-[9px] font-bold text-slate-500 uppercase block">Phone</span>
                      <span className="font-bold text-slate-800">{facilitatorProfile.phone}</span>
                    </div>
                    <div className="p-2 bg-slate-50 rounded-xl">
                      <span className="text-[9px] font-bold text-slate-500 uppercase block">CFLI Email</span>
                      <span className="font-bold text-slate-800 truncate block">{facilitatorProfile.email}</span>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl space-y-1.5 border border-slate-100">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-slate-700 flex items-center space-x-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#339CA3]" />
                        <span>Vulnerable Sector Certificate</span>
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold border ${vscInfo.badgeClass}`}>
                        {vscInfo.statusLabel}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 flex justify-between">
                      <span>Expires: {vscInfo.expiryFormatted}</span>
                      <button onClick={() => setViewingVscModal(true)} className="text-[#339CA3] font-bold hover:underline">
                        View Certificate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <nav className="bg-white border-t border-slate-200 px-3 py-2 flex items-center justify-around text-xs font-semibold select-none shadow-xs">
              <button
                onClick={() => setFacilitatorActiveTab('dashboard')}
                className={`flex flex-col items-center space-y-1 ${
                  facilitatorActiveTab === 'dashboard' ? 'text-[#5859A7] font-bold' : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span className="text-[9px]">Dashboard</span>
              </button>
              <button
                onClick={() => setFacilitatorActiveTab('roles')}
                className={`flex flex-col items-center space-y-1 ${
                  facilitatorActiveTab === 'roles' ? 'text-[#5859A7] font-bold' : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                <Crown className="w-4 h-4" />
                <span className="text-[9px]">Roles</span>
              </button>
              <button
                onClick={() => setFacilitatorActiveTab('attendance')}
                className={`flex flex-col items-center space-y-1 ${
                  facilitatorActiveTab === 'attendance' ? 'text-[#339CA3] font-bold' : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                <UserCheck className="w-4 h-4" />
                <span className="text-[9px]">Attendance</span>
              </button>
              <button
                onClick={() => setFacilitatorActiveTab('equity')}
                className={`flex flex-col items-center space-y-1 ${
                  facilitatorActiveTab === 'equity' ? 'text-[#5859A7] font-bold' : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                <Scale className="w-4 h-4" />
                <span className="text-[9px]">Equity</span>
              </button>
              <button
                onClick={() => setFacilitatorActiveTab('milestones')}
                className={`flex flex-col items-center space-y-1 ${
                  facilitatorActiveTab === 'milestones' ? 'text-[#FFC513] font-black' : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                <Trophy className="w-4 h-4" />
                <span className="text-[9px]">Milestones</span>
              </button>
              <button
                onClick={() => setFacilitatorActiveTab('profile')}
                className={`flex flex-col items-center space-y-1 ${
                  facilitatorActiveTab === 'profile' ? 'text-[#5859A7] font-bold' : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                <User className="w-4 h-4" />
                <span className="text-[9px]">Profile</span>
              </button>
            </nav>
          </div>
        )}

        {/* ================================================================= */}
        {/* PARENT PERSPECTIVE                                                */}
        {/* ================================================================= */}
        {activeRolePerspective === 'parent' && (
          <div className="flex-1 flex flex-col justify-between bg-white">
            <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#E98E30] block">
                  Parent Family Hub
                </span>
                <h2 className="text-sm font-bold text-slate-900">{parentProfile.firstName} {parentProfile.lastName}</h2>
              </div>
              <button
                onClick={() => setIsEditingParentProfile(true)}
                className="px-2.5 py-1 bg-white border border-slate-200 text-slate-700 text-xs font-bold rounded-xl hover:bg-slate-100 shadow-xs"
              >
                Edit Profile
              </button>
            </div>

            {parentActiveTab === 'dashboard' && (
              <div className="p-4 space-y-4 flex-1 overflow-y-auto bg-[#fafafa]">
                <div className="bg-gradient-to-r from-white to-amber-50 border border-[#E98E30]/40 rounded-2xl p-3 flex justify-between items-center shadow-xs">
                  <div>
                    <h3 className="text-xs font-extrabold text-slate-900">Enrol New Sibling Child</h3>
                    <p className="text-[10px] text-slate-500">Automated Level promotions are executed by CFLI Admin.</p>
                  </div>
                  <button
                    onClick={() => {
                      setEnrolmentStep('child');
                      setIsRegisteringProgram(true);
                    }}
                    className="py-1 px-2.5 bg-[#E98E30] text-white font-bold text-xs rounded-xl hover:bg-amber-600 shadow-xs flex items-center space-x-1"
                  >
                    <Plus className="w-3 h-3 stroke-[3]" />
                    <span>Enrol</span>
                  </button>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2 px-1">
                    <span className="text-xs font-extrabold text-slate-800">Select Child to View Journey</span>
                    <span className="text-[10px] text-slate-500">{myChildren.length} Enrolled</span>
                  </div>
                  <div className="flex space-x-2 overflow-x-auto pb-1">
                    {myChildren.map((c) => {
                      const isSelected = c.studentId === activeChild.studentId;
                      return (
                        <button
                          key={c.studentId}
                          onClick={() => setParentActiveChildId(c.studentId)}
                          className={`flex-1 py-2 px-3 rounded-2xl border transition-all text-left flex items-center justify-between shrink-0 min-w-[140px] ${
                            isSelected
                              ? 'bg-white border-[#E98E30] ring-2 ring-[#E98E30]/20 shadow-xs'
                              : 'bg-white/70 border-slate-200 hover:bg-white text-slate-600'
                          }`}
                        >
                          <div>
                            <span className="text-xs font-bold text-slate-900 block leading-tight">
                              {c.firstName} {c.lastName}
                            </span>
                            <span className="text-[10px] text-slate-500">Grade {c.grade} • L{c.level}</span>
                          </div>
                          {isSelected && <div className="w-2 h-2 rounded-full bg-[#E98E30]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-white border border-[#5859A7]/30 rounded-2xl p-4 shadow-xs space-y-3 relative overflow-hidden">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center space-x-1.5 mb-0.5">
                        <span className="text-[10px] font-black uppercase text-[#5859A7] tracking-wider">
                          Next Upcoming Role
                        </span>
                        <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-[#5859A7]/10 text-[#5859A7]">
                          Session 5 • Feb 07, 2026
                        </span>
                      </div>
                      <h3 className="text-base font-extrabold text-slate-900 flex items-center space-x-1.5">
                        <span>{activeChildNextAssignment.role !== 'None' ? activeChildNextAssignment.role : 'Active Participant'}</span>
                        <Crown className="w-4 h-4 text-[#FFC513]" />
                      </h3>
                    </div>

                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                      {activeChildNextAssignment.category}
                    </span>
                  </div>

                  <div className="p-2.5 bg-slate-50 rounded-xl space-y-1 text-xs border border-slate-100">
                    <span className="text-[9px] uppercase font-bold text-slate-400 block">Assigned Topic</span>
                    <p className="text-slate-800 font-semibold italic">"{activeChildNextAssignment.topic}"</p>
                  </div>
                </div>

                {(activeChildTeam || activeChildStarSpeaker) && (
                  <div className="bg-white border border-[#FFC513]/50 rounded-2xl p-3.5 shadow-xs space-y-2.5">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-1.5">
                        <Trophy className="w-4 h-4 text-[#FFC513]" />
                        <span className="text-xs font-extrabold text-slate-900">Term-End Milestones</span>
                      </div>
                      {activeChildStarSpeaker && (
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-black bg-[#FFC513]/20 text-amber-900 border border-[#FFC513]/40">
                          Star Speaker Candidate #{activeChildStarSpeaker.slot}
                        </span>
                      )}
                    </div>

                    {activeChildTeam && (
                      <div className="p-2.5 bg-slate-50 rounded-xl space-y-1 text-xs border border-slate-100">
                        <span className="font-extrabold text-[#5859A7]">{activeChildTeam.name}</span>
                        <p className="text-[11px] text-slate-700 italic">"{activeChildTeam.topic}"</p>
                      </div>
                    )}
                  </div>
                )}

                <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-[10px] font-black uppercase text-[#339CA3] tracking-wider block">
                        Commitment & Attendance
                      </span>
                      <h4 className="text-xs font-extrabold text-slate-900">
                        Sessions 1 to 10 Attendance Record
                      </h4>
                    </div>
                    <span className="text-xs font-black text-[#339CA3] bg-[#339CA3]/10 px-2 py-0.5 rounded-full border border-[#339CA3]/30">
                      {activeChildAttendancePct}% Rate
                    </span>
                  </div>

                  <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5 pt-1">
                    {activeChildHistory.map((sess) => {
                      const isPast = sess.sessionNum <= 5;
                      let badgeBg = 'bg-slate-100 text-slate-400 border-slate-200';
                      if (isPast) {
                        if (sess.attendance === 'present') badgeBg = 'bg-emerald-50 text-emerald-700 border-emerald-300 font-bold';
                        else if (sess.attendance === 'late') badgeBg = 'bg-[#E98E30]/15 text-[#E98E30] border-[#E98E30]/40 font-bold';
                        else badgeBg = 'bg-rose-100 text-rose-700 border-rose-300 font-bold';
                      }

                      return (
                        <div
                          key={sess.sessionNum}
                          className={`p-1.5 rounded-xl border text-center transition-all ${badgeBg}`}
                        >
                          <span className="text-[9px] block">S{sess.sessionNum}</span>
                          <span className="text-[10px] uppercase font-extrabold block">
                            {isPast ? sess.attendance.slice(0, 3) : '—'}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-3">
                  <span className="text-[10px] font-black uppercase text-[#5859A7] tracking-wider block">
                    Facilitator Written Feedback
                  </span>
                  <div className="space-y-2.5">
                    {activeChildHistory.filter(h => h.sessionNum <= 5).map((entry) => (
                      <div
                        key={entry.sessionNum}
                        className="p-3 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-1.5"
                      >
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-extrabold text-slate-900">Session {entry.sessionNum} • {entry.date}</span>
                          <span className="px-2 py-0.2 rounded-full text-[9px] font-bold bg-[#5859A7]/10 text-[#5859A7]">
                            {entry.role !== 'None' ? entry.role : entry.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-700 italic leading-relaxed">
                          "{entry.feedback || 'Good participation and listening.'}"
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <nav className="bg-white border-t border-slate-200 px-3 py-2 flex items-center justify-around text-xs font-semibold select-none shadow-xs">
              <button
                onClick={() => setParentActiveTab('dashboard')}
                className={`flex flex-col items-center space-y-1 ${
                  parentActiveTab === 'dashboard' ? 'text-[#E98E30] font-bold' : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                <Home className="w-4 h-4" />
                <span className="text-[9px]">Learning Journey</span>
              </button>
              <button
                onClick={() => setParentActiveTab('profile')}
                className={`flex flex-col items-center space-y-1 ${
                  parentActiveTab === 'profile' ? 'text-[#5859A7] font-bold' : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                <User className="w-4 h-4" />
                <span className="text-[9px]">Profile</span>
              </button>
            </nav>
          </div>
        )}

        {/* ================================================================= */}
        {/* STUDENT PERSPECTIVE                                              */}
        {/* ================================================================= */}
        {activeRolePerspective === 'student' && (
          <div className="flex-1 flex flex-col justify-between bg-white">
            <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#339CA3] block">
                  Student Journey
                </span>
                <h2 className="text-sm font-bold text-slate-900">{studentSelf.firstName} {studentSelf.lastName}</h2>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#339CA3]/10 text-[#339CA3] border border-[#339CA3]/30">
                Grade {studentSelf.grade} • Level {studentSelf.level}
              </span>
            </div>

            <div className="bg-slate-100 p-1 border-b border-slate-200 flex space-x-1 text-xs font-bold select-none">
              <button
                onClick={() => setStudentActiveTab('dashboard')}
                className={`flex-1 py-1.5 rounded-xl transition-all ${
                  studentActiveTab === 'dashboard' ? 'bg-white text-slate-900 shadow-xs font-extrabold' : 'text-slate-600'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setStudentActiveTab('feedback')}
                className={`flex-1 py-1.5 rounded-xl transition-all ${
                  studentActiveTab === 'feedback' ? 'bg-white text-slate-900 shadow-xs font-extrabold' : 'text-slate-600'
                }`}
              >
                Coach Feedback
              </button>
              <button
                onClick={() => setStudentActiveTab('attendance')}
                className={`flex-1 py-1.5 rounded-xl transition-all ${
                  studentActiveTab === 'attendance' ? 'bg-white text-slate-900 shadow-xs font-extrabold' : 'text-slate-600'
                }`}
              >
                Attendance ({studentAttendancePct}%)
              </button>
              <button
                onClick={() => setStudentActiveTab('milestones')}
                className={`flex-1 py-1.5 rounded-xl transition-all ${
                  studentActiveTab === 'milestones' ? 'bg-white text-slate-900 shadow-xs font-extrabold' : 'text-slate-600'
                }`}
              >
                Milestones
              </button>
            </div>

            {studentActiveTab === 'dashboard' && (
              <div className="p-4 space-y-4 flex-1 overflow-y-auto bg-[#fafafa]">
                <div className="bg-white border border-[#339CA3]/40 rounded-2xl p-4 space-y-3 shadow-xs relative overflow-hidden">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center space-x-1.5 mb-0.5">
                        <span className="text-[10px] font-black uppercase text-[#339CA3] tracking-wider">
                          Next Saturday Role
                        </span>
                        <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-[#339CA3]/10 text-[#339CA3]">
                          Session 5 • Feb 07
                        </span>
                      </div>
                      <h3 className="text-base font-extrabold text-slate-900 flex items-center space-x-1.5">
                        <span>{studentNextAssignment.role}</span>
                        <Crown className="w-4 h-4 text-[#FFC513]" />
                      </h3>
                    </div>

                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#339CA3]/15 text-[#339CA3]">
                      {studentNextAssignment.category}
                    </span>
                  </div>

                  <div className="p-2.5 bg-slate-50 rounded-xl space-y-1 text-xs border border-slate-100">
                    <span className="text-[9px] uppercase font-bold text-slate-400 block">My Speech Topic</span>
                    <p className="text-slate-800 font-semibold italic">"{studentNextAssignment.topic}"</p>
                  </div>

                  <a
                    href={currentGoogleNotesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 bg-[#5859A7] text-white text-xs font-bold rounded-xl flex items-center justify-center space-x-1.5 hover:bg-[#494a8f] shadow-xs"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Open Coach Session 5 Notes (Google Doc)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}

            {studentActiveTab === 'feedback' && (
              <div className="p-4 space-y-3 flex-1 overflow-y-auto bg-[#fafafa]">
                <div className="flex justify-between items-center px-1">
                  <div>
                    <span className="text-[10px] font-black uppercase text-[#5859A7]">Coaching Log</span>
                    <h3 className="text-sm font-extrabold text-slate-900">Facilitator Written Feedback</h3>
                  </div>
                  <span className="text-[10px] text-slate-500 bg-white px-2 py-0.5 rounded-lg border border-slate-200">
                    Coach Marcus Vance
                  </span>
                </div>

                <div className="space-y-2.5">
                  {studentHistory.filter(h => h.sessionNum <= 5).map((entry) => (
                    <div key={entry.sessionNum} className="p-3 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-extrabold text-slate-900">Session {entry.sessionNum} • {entry.date}</span>
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#5859A7]/10 text-[#5859A7]">
                          {entry.role !== 'None' ? entry.role : entry.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-700 italic bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        "{entry.feedback}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {studentActiveTab === 'attendance' && (
              <div className="p-4 space-y-3.5 flex-1 overflow-y-auto bg-[#fafafa]">
                <div className="p-3.5 bg-white border border-[#339CA3]/30 rounded-2xl shadow-xs space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-800">Total Attendance Rate</span>
                    <span className="text-sm font-black text-[#339CA3]">{studentAttendancePct}%</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Sessions 1 to 5 completed. 5 upcoming sessions including Centre Stage Gala.
                  </p>
                </div>

                <div className="space-y-2">
                  {studentHistory.map((sess) => {
                    const isPast = sess.sessionNum <= 5;
                    return (
                      <div
                        key={sess.sessionNum}
                        className={`p-3 rounded-2xl border flex items-center justify-between transition-all ${
                          isPast ? 'bg-white border-slate-200 shadow-xs' : 'bg-slate-50/60 border-dashed border-slate-200 text-slate-400'
                        }`}
                      >
                        <div>
                          <span className="text-xs font-extrabold text-slate-900">Session {sess.sessionNum} • {sess.date}</span>
                          <span className="text-[10px] text-slate-500 block truncate max-w-[200px]">{sess.curriculumTopic}</span>
                        </div>
                        <span className={`px-2.5 py-1 rounded-xl text-[10px] font-black uppercase ${
                          isPast ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-slate-100 text-slate-400'
                        }`}>
                          {isPast ? sess.attendance : 'Upcoming'}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {studentActiveTab === 'milestones' && (
              <div className="p-4 space-y-3.5 flex-1 overflow-y-auto bg-[#fafafa]">
                {studentTeam && (
                  <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-2.5">
                    <span className="text-[10px] font-bold uppercase text-[#5859A7] block">My Debate Team</span>
                    <h4 className="text-sm font-extrabold text-slate-900">{studentTeam.name}</h4>
                    <p className="p-2.5 bg-slate-50 rounded-xl text-xs text-[#5859A7] font-semibold italic border border-slate-100">
                      "{studentTeam.topic}"
                    </p>
                  </div>
                )}
                {studentStarSpeaker && (
                  <div className="p-4 bg-gradient-to-r from-amber-50 to-white border border-[#FFC513]/60 rounded-2xl shadow-xs space-y-2">
                    <span className="text-xs font-black text-amber-950 flex items-center space-x-1.5">
                      <Trophy className="w-4 h-4 text-[#FFC513]" />
                      <span>Star Speaker Candidate Slot #{studentStarSpeaker.slot}</span>
                    </span>
                    <p className="text-xs text-amber-900 italic font-semibold">"{studentStarSpeaker.speechTitle}"</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ================================================================= */}
        {/* ADMIN PERSPECTIVE                                                */}
        {/* ================================================================= */}
        {activeRolePerspective === 'admin' && (
          <div className="flex-1 flex flex-col justify-between bg-white">
            <div className="px-5 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#FFC513] block">
                  CFLI Super Admin Console
                </span>
                <h2 className="text-sm font-extrabold text-slate-900">Operations & Masters Sovereignty</h2>
              </div>
              <span className="text-[10px] text-slate-600 font-bold bg-white px-2 py-0.5 rounded-lg border border-slate-200">
                Ontario • Full Access
              </span>
            </div>

            <div className="bg-slate-100 p-1 border-b border-slate-200 flex space-x-1 overflow-x-auto text-xs font-bold select-none">
              <button
                onClick={() => setAdminActiveTab('overview')}
                className={`px-3 py-1.5 rounded-xl transition-all shrink-0 ${
                  adminActiveTab === 'overview' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setAdminActiveTab('masters')}
                className={`px-3 py-1.5 rounded-xl transition-all shrink-0 ${
                  adminActiveTab === 'masters' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Master Records
              </button>
              <button
                onClick={() => setAdminActiveTab('staffing')}
                className={`px-3 py-1.5 rounded-xl transition-all shrink-0 ${
                  adminActiveTab === 'staffing' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Staffing
              </button>
              <button
                onClick={() => setAdminActiveTab('registry')}
                className={`px-3 py-1.5 rounded-xl transition-all shrink-0 ${
                  adminActiveTab === 'registry' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Universal Registry
              </button>
              <button
                onClick={() => setAdminActiveTab('promotion')}
                className={`px-3 py-1.5 rounded-xl transition-all shrink-0 flex items-center space-x-1 ${
                  adminActiveTab === 'promotion' ? 'bg-[#FFC513] text-slate-950 font-black shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Sparkles className="w-3 h-3 text-amber-900" />
                <span>Batch Promotion</span>
              </button>
            </div>

            {adminActiveTab === 'overview' && (
              <div className="p-4 space-y-4 flex-1 overflow-y-auto bg-[#fafafa]">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-3 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-1">
                    <span className="text-[10px] font-bold text-slate-500 uppercase block">Active Students</span>
                    <div className="text-lg font-black text-slate-900">{batchRoster.length} Youth</div>
                    <span className="text-[10px] text-[#339CA3] font-semibold">Across Markham Cohorts</span>
                  </div>

                  <div className="p-3 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-1">
                    <span className="text-[10px] font-bold text-slate-500 uppercase block">Active Cohorts</span>
                    <div className="text-lg font-black text-slate-900">{batches.length} Batches</div>
                    <span className="text-[10px] text-slate-500 font-semibold">Saturday 10am & 1pm</span>
                  </div>

                  <div className="p-3 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-1">
                    <span className="text-[10px] font-bold text-slate-500 uppercase block">Instructors</span>
                    <div className="text-lg font-black text-slate-900">{facilitatorStaffList.length} Active</div>
                    <span className="text-[10px] text-emerald-600 font-semibold">100% VSC Cleared</span>
                  </div>

                  <div className="p-3 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-1">
                    <span className="text-[10px] font-bold text-slate-500 uppercase block">Pending Receivables</span>
                    <div className="text-lg font-black text-[#E98E30]">$790 CAD</div>
                    <span className="text-[10px] text-slate-500 font-semibold">2 Students Unsettled</span>
                  </div>
                </div>
              </div>
            )}

            {adminActiveTab === 'masters' && (
              <div className="p-4 space-y-3.5 flex-1 overflow-y-auto bg-[#fafafa]">
                <div className="flex space-x-1 overflow-x-auto pb-1 text-xs font-bold">
                  <button
                    onClick={() => setAdminMasterSubTab('programs')}
                    className={`px-2.5 py-1 rounded-xl transition-all shrink-0 ${adminMasterSubTab === 'programs' ? 'bg-[#5859A7] text-white' : 'bg-white border text-slate-700'}`}
                  >
                    Programs ({masterProgramsList.length})
                  </button>
                  <button
                    onClick={() => setAdminMasterSubTab('terms')}
                    className={`px-2.5 py-1 rounded-xl transition-all shrink-0 ${adminMasterSubTab === 'terms' ? 'bg-[#5859A7] text-white' : 'bg-white border text-slate-700'}`}
                  >
                    Terms ({masterTermsList.length})
                  </button>
                  <button
                    onClick={() => setAdminMasterSubTab('locations')}
                    className={`px-2.5 py-1 rounded-xl transition-all shrink-0 ${adminMasterSubTab === 'locations' ? 'bg-[#5859A7] text-white' : 'bg-white border text-slate-700'}`}
                  >
                    Locations ({masterLocationsList.length})
                  </button>
                  <button
                    onClick={() => setAdminMasterSubTab('batchnames')}
                    className={`px-2.5 py-1 rounded-xl transition-all shrink-0 ${adminMasterSubTab === 'batchnames' ? 'bg-[#5859A7] text-white' : 'bg-white border text-slate-700'}`}
                  >
                    Cohort Codes ({masterBatchNamesList.length})
                  </button>
                </div>

                {adminMasterSubTab === 'programs' && (
                  <div className="space-y-2.5">
                    <div className="flex justify-between items-center">
                      <h4 className="text-xs font-bold text-slate-800">Programs Master</h4>
                      <button
                        onClick={() => setEditingProgramModal({ id: `p-${Date.now()}`, code: '', name: '', description: '', fee: 395, active: true, isNew: true })}
                        className="py-1 px-2.5 bg-[#5859A7] text-white font-bold text-xs rounded-xl flex items-center space-x-1 shadow-xs"
                      >
                        <Plus className="w-3 h-3" />
                        <span>Add Program</span>
                      </button>
                    </div>
                    {masterProgramsList.map((prog) => (
                      <div key={prog.id} className="p-3 bg-white border border-slate-200 rounded-2xl flex justify-between items-center shadow-xs">
                        <div>
                          <div className="flex items-center space-x-1.5">
                            <span className="text-[10px] font-black bg-[#5859A7]/10 text-[#5859A7] px-2 py-0.5 rounded">{prog.code}</span>
                            <span className="text-xs font-bold text-slate-900">{prog.name}</span>
                          </div>
                          <span className="text-xs font-black text-slate-700 block mt-1">${prog.fee} CAD</span>
                        </div>
                        <button
                          onClick={() => setEditingProgramModal({ ...prog, isNew: false })}
                          className="py-1 px-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl flex items-center space-x-1"
                        >
                          <Pencil className="w-3 h-3" />
                          <span>Edit</span>
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {adminMasterSubTab === 'terms' && (
                  <div className="space-y-2.5">
                    <div className="flex justify-between items-center">
                      <h4 className="text-xs font-bold text-slate-800">Terms Master</h4>
                      <button
                        onClick={() => setEditingTermModal({ id: `t-${Date.now()}`, name: '', season: 'Winter', year: 2026, isCurrent: false, startDate: '2026-01-10', endDate: '2026-03-28', isNew: true })}
                        className="py-1 px-2.5 bg-[#339CA3] text-white font-bold text-xs rounded-xl flex items-center space-x-1 shadow-xs"
                      >
                        <Plus className="w-3 h-3" />
                        <span>Add Term</span>
                      </button>
                    </div>
                    {masterTermsList.map((term) => (
                      <div key={term.id} className="p-3 bg-white border border-slate-200 rounded-2xl flex justify-between items-center shadow-xs">
                        <div>
                          <span className="text-xs font-bold text-slate-900">{term.name}</span>
                          <span className="text-[10px] text-slate-500 block">{term.season} {term.year} • {term.isCurrent ? 'Current' : 'Scheduled'}</span>
                        </div>
                        <button
                          onClick={() => setEditingTermModal({ ...term, isNew: false })}
                          className="py-1 px-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl flex items-center space-x-1"
                        >
                          <Pencil className="w-3 h-3" />
                          <span>Edit</span>
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {adminMasterSubTab === 'locations' && (
                  <div className="space-y-2.5">
                    <div className="flex justify-between items-center">
                      <h4 className="text-xs font-bold text-slate-800">Locations Master</h4>
                      <button
                        onClick={() => setEditingLocationModal({ id: `loc-${Date.now()}`, code: '', name: '', city: 'Markham', address: '', isNew: true })}
                        className="py-1 px-2.5 bg-[#E98E30] text-white font-bold text-xs rounded-xl flex items-center space-x-1 shadow-xs"
                      >
                        <Plus className="w-3 h-3" />
                        <span>Add Location</span>
                      </button>
                    </div>
                    {masterLocationsList.map((loc) => (
                      <div key={loc.id} className="p-3 bg-white border border-slate-200 rounded-2xl flex justify-between items-center shadow-xs">
                        <div>
                          <span className="text-xs font-bold text-slate-900">{loc.name}</span>
                          <span className="text-[10px] text-slate-500 block">{loc.address}</span>
                        </div>
                        <button
                          onClick={() => setEditingLocationModal({ ...loc, isNew: false })}
                          className="py-1 px-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl flex items-center space-x-1"
                        >
                          <Pencil className="w-3 h-3" />
                          <span>Edit</span>
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {adminMasterSubTab === 'batchnames' && (
                  <div className="space-y-2.5">
                    <div className="flex justify-between items-center">
                      <h4 className="text-xs font-bold text-slate-800">Cohort Codes</h4>
                      <button
                        onClick={() => setEditingBatchNameModal({ id: `bn-${Date.now()}`, code: '', name: '', level: 1, description: '', isNew: true })}
                        className="py-1 px-2.5 bg-[#5859A7] text-white font-bold text-xs rounded-xl flex items-center space-x-1 shadow-xs"
                      >
                        <Plus className="w-3 h-3" />
                        <span>Add Code</span>
                      </button>
                    </div>
                    {masterBatchNamesList.map((bn) => (
                      <div key={bn.id} className="p-3 bg-white border border-slate-200 rounded-2xl flex justify-between items-center shadow-xs">
                        <div>
                          <span className="text-xs font-black text-slate-900">{bn.code} - {bn.name}</span>
                          <span className="text-[10px] text-slate-500 block">Level {bn.level}</span>
                        </div>
                        <button
                          onClick={() => setEditingBatchNameModal({ ...bn, isNew: false })}
                          className="py-1 px-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl flex items-center space-x-1"
                        >
                          <Pencil className="w-3 h-3" />
                          <span>Edit</span>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {adminActiveTab === 'staffing' && (
              <div className="p-4 space-y-3.5 flex-1 overflow-y-auto bg-[#fafafa]">
                <div className="flex justify-between items-center">
                  <h4 className="text-xs font-bold text-slate-800">Instructor Staffing Matrix</h4>
                  <button
                    onClick={() => setEditingAdminFacilitatorModal({ id: `f-${Date.now()}`, name: '', email: '', phone: '', role: 'Lead Facilitator', vscStatus: 'Valid & Cleared', vscIssueDate: new Date().toISOString().split('T')[0], isNew: true })}
                    className="py-1 px-2.5 bg-[#5859A7] text-white font-bold text-xs rounded-xl flex items-center space-x-1 shadow-xs"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Add Facilitator</span>
                  </button>
                </div>
                {facilitatorStaffList.map((coach) => (
                  <div key={coach.id} className="p-3.5 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="text-xs font-extrabold text-slate-900">{coach.name}</h5>
                        <span className="text-[10px] text-slate-500">{coach.role} • {coach.phone}</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#339CA3]/10 text-[#339CA3]">{coach.vscStatus}</span>
                    </div>
                    <div className="p-2 bg-slate-50 rounded-xl text-xs flex justify-between items-center">
                      <span className="font-semibold text-slate-800">{coach.currentAssignment.batchCode}</span>
                      <button
                        onClick={() => setMidTermChangeModal(coach)}
                        className="text-[10px] text-[#E98E30] font-bold hover:underline"
                      >
                        Swap
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {adminActiveTab === 'registry' && (
              <div className="p-4 space-y-3.5 flex-1 overflow-y-auto bg-[#fafafa]">
                <div className="flex space-x-1 bg-slate-100 p-1 rounded-2xl text-xs font-bold">
                  <button
                    onClick={() => setAdminRegistrySubTab('students')}
                    className={`flex-1 py-1.5 rounded-xl ${adminRegistrySubTab === 'students' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'}`}
                  >
                    Students ({batchRoster.length})
                  </button>
                  <button
                    onClick={() => setAdminRegistrySubTab('parents')}
                    className={`flex-1 py-1.5 rounded-xl ${adminRegistrySubTab === 'parents' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'}`}
                  >
                    Parents ({parentsList.length})
                  </button>
                  <button
                    onClick={() => setAdminRegistrySubTab('payments')}
                    className={`flex-1 py-1.5 rounded-xl ${adminRegistrySubTab === 'payments' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'}`}
                  >
                    Payments
                  </button>
                </div>

                {adminRegistrySubTab === 'students' && (
                  <div className="space-y-2.5">
                    {filteredAdminStudents.map((s) => (
                      <div key={s.studentId} className="p-3 bg-white border border-slate-200 rounded-2xl shadow-xs flex justify-between items-center">
                        <div>
                          <h5 className="text-xs font-bold text-slate-900">{s.firstName} {s.lastName}</h5>
                          <span className="text-[10px] text-slate-500">Grade {s.grade} • DOB: {s.dob} • Level {s.level}</span>
                        </div>
                        <button
                          onClick={() => setEditingAdminStudentModal({ ...s, isNew: false })}
                          className="py-1 px-2.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl"
                        >
                          Edit
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {adminRegistrySubTab === 'parents' && (
                  <div className="space-y-2.5">
                    {parentsList.map((p) => (
                      <div key={p.id} className="p-3 bg-white border border-slate-200 rounded-2xl shadow-xs flex justify-between items-center">
                        <div>
                          <h5 className="text-xs font-bold text-slate-900">{p.firstName} {p.lastName}</h5>
                          <span className="text-[10px] text-slate-500">{p.email} • {p.phone}</span>
                        </div>
                        <button
                          onClick={() => setEditingAdminParentModal({ ...p, isNew: false })}
                          className="py-1 px-2.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl"
                        >
                          Edit
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {adminRegistrySubTab === 'payments' && (
                  <div className="space-y-2.5">
                    {filteredAdminStudents.map((pay) => (
                      <div key={pay.studentId} className="p-3 bg-white border border-slate-200 rounded-2xl shadow-xs flex justify-between items-center">
                        <div>
                          <h5 className="text-xs font-bold text-slate-900">{pay.firstName} {pay.lastName}</h5>
                          <span className="text-[10px] text-slate-500">${pay.fee} CAD • {pay.paymentStatus}</span>
                        </div>
                        <button
                          onClick={() => setEditingAdminPaymentModal(pay)}
                          className="py-1 px-2.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl"
                        >
                          Edit
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {adminActiveTab === 'promotion' && (
              <div className="p-4 space-y-4 flex-1 overflow-y-auto bg-[#fafafa]">
                <div className="bg-gradient-to-r from-amber-50 to-white border border-amber-200 rounded-2xl p-3.5 space-y-1 shadow-xs">
                  <div className="flex items-center space-x-1.5 text-amber-900 font-extrabold text-xs">
                    <Sparkles className="w-4 h-4 text-[#FFC513]" />
                    <span>Automated Batch Progression Engine</span>
                  </div>
                  <p className="text-[11px] text-slate-600">
                    Advance qualified students from current cohort into Spring 2026.
                  </p>
                </div>

                <button
                  onClick={() => setShowPromotionConfirmationModal(true)}
                  className="w-full py-2.5 bg-[#FFC513] hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl shadow-xs"
                >
                  Preview & Execute Promotion ({selectedStudentIdsForPromo.length})
                </button>
              </div>
            )}

            <nav className="bg-white border-t border-slate-200 px-3 py-2 flex items-center justify-around text-xs font-semibold select-none shadow-xs">
              <button
                onClick={() => setAdminActiveTab('overview')}
                className={`flex flex-col items-center space-y-1 ${
                  adminActiveTab === 'overview' ? 'text-[#FFC513] font-black' : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span className="text-[9px]">Overview</span>
              </button>
              <button
                onClick={() => setAdminActiveTab('masters')}
                className={`flex flex-col items-center space-y-1 ${
                  adminActiveTab === 'masters' ? 'text-[#5859A7] font-bold' : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span className="text-[9px]">Masters</span>
              </button>
              <button
                onClick={() => setAdminActiveTab('staffing')}
                className={`flex flex-col items-center space-y-1 ${
                  adminActiveTab === 'staffing' ? 'text-[#5859A7] font-bold' : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                <Users className="w-4 h-4" />
                <span className="text-[9px]">Staffing</span>
              </button>
              <button
                onClick={() => setAdminActiveTab('registry')}
                className={`flex flex-col items-center space-y-1 ${
                  adminActiveTab === 'registry' ? 'text-[#339CA3] font-bold' : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                <ClipboardList className="w-4 h-4" />
                <span className="text-[9px]">Registry</span>
              </button>
              <button
                onClick={() => setAdminActiveTab('promotion')}
                className={`flex flex-col items-center space-y-1 ${
                  adminActiveTab === 'promotion' ? 'text-[#FFC513] font-black' : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-[9px]">Promotion</span>
              </button>
            </nav>
          </div>
        )}

        {/* ================================================================= */}
        {/* LOGIN MODAL (PARENTS, STUDENTS, FACILITATORS, ADMINS)             */}
        {/* ================================================================= */}
        {loginModalOpen && (
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <div className="bg-white border border-slate-200 w-full max-w-sm rounded-3xl p-5 shadow-2xl space-y-4 animate-in fade-in">
              <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                <div className="flex items-center space-x-2">
                  <KeyRound className="w-5 h-5 text-[#5859A7]" />
                  <h3 className="font-extrabold text-slate-900 text-sm">CFLI Portal Sign In</h3>
                </div>
                <button onClick={() => setLoginModalOpen(false)} className="p-1 rounded-lg text-slate-400 hover:text-slate-700">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-1 bg-slate-100 p-1 rounded-2xl text-xs font-bold">
                <button
                  type="button"
                  onClick={() => {
                    setLoginMode('parent_student');
                    setLoginStep(1);
                    setLoginErrorMessage('');
                  }}
                  className={`py-2 rounded-xl transition-all ${
                    loginMode === 'parent_student' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
                  }`}
                >
                  Parents & Students
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setLoginMode('staff');
                    setLoginStep(1);
                    setLoginErrorMessage('');
                  }}
                  className={`py-2 rounded-xl transition-all ${
                    loginMode === 'staff' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
                  }`}
                >
                  Facilitator & Admin
                </button>
              </div>

              {loginErrorMessage && (
                <div className="p-2 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-center space-x-1.5 font-medium">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{loginErrorMessage}</span>
                </div>
              )}

              {loginMode === 'parent_student' && (
                <>
                  {loginStep === 1 ? (
                    <form onSubmit={handleInitiateOtp} className="space-y-3">
                      <div>
                        <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Select Role</label>
                        <select
                          value={loginUserType}
                          onChange={(e) => setLoginUserType(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-bold text-slate-900"
                        >
                          <option value="parent">Parent / Guardian</option>
                          <option value="student">Student</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Registered Email *</label>
                        <input
                          type="email"
                          required
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          placeholder="e.g. david.chen@test.com"
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Canadian Mobile *</label>
                        <input
                          type="tel"
                          required
                          value={loginPhone}
                          onChange={(e) => setLoginPhone(e.target.value)}
                          placeholder="(647) 555-0192"
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-2.5 bg-[#5859A7] hover:bg-[#494a8f] text-white font-black text-xs rounded-xl shadow-xs transition-all flex items-center justify-center space-x-1.5"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Send 6-Digit OTP to Email</span>
                      </button>
                    </form>
                  ) : (
                    <form onSubmit={handleVerifyOtp} className="space-y-3">
                      <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 space-y-1">
                        <span className="font-bold block">One-Time Password Sent!</span>
                        <p className="text-[11px]">Enter code sent to <strong>{loginEmail}</strong> (Demo: <strong>{simulatedOtpSent}</strong>)</p>
                      </div>

                      <input
                        type="text"
                        required
                        maxLength={6}
                        placeholder="••••••"
                        value={loginOtp}
                        onChange={(e) => setLoginOtp(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-center text-lg font-mono tracking-widest text-slate-900"
                      />

                      <div className="flex space-x-2 pt-1">
                        <button type="button" onClick={() => setLoginStep(1)} className="py-2 px-3 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl">
                          Back
                        </button>
                        <button type="submit" className="flex-1 py-2 bg-[#339CA3] text-white font-black text-xs rounded-xl shadow-xs">
                          Verify & Sign In
                        </button>
                      </div>
                    </form>
                  )}
                </>
              )}

              {loginMode === 'staff' && (
                <form onSubmit={handleStaffLogin} className="space-y-3">
                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Staff Role</label>
                    <select
                      value={loginUserType}
                      onChange={(e) => setLoginUserType(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-bold text-slate-900"
                    >
                      <option value="facilitator">Facilitator / Coach</option>
                      <option value="admin">Super Administrator</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">CFLI Email / Google ID *</label>
                    <input
                      type="email"
                      required
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      placeholder="e.g. marcus.vance@cflicanada.com"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Password *</label>
                    <input
                      type="password"
                      required
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#5859A7] hover:bg-[#494a8f] text-white font-black text-xs rounded-xl shadow-xs transition-all flex items-center justify-center space-x-1.5"
                  >
                    <LogIn className="w-3.5 h-3.5" />
                    <span>Sign In as Staff</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* NEW PARENT SIGN-UP 4-STEP WIZARD                                  */}
        {/* ================================================================= */}
        {isNewParentSignUp && (
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-3 sm:p-4">
            <div className="bg-white border border-slate-200 w-full max-w-md rounded-3xl p-5 shadow-2xl space-y-4 animate-in fade-in max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-xl bg-[#E98E30]/15 text-[#E98E30] flex items-center justify-center font-bold">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-sm">New Parent Registration</h3>
                    <span className="text-[10px] text-slate-500 font-semibold">Step {signUpStep} of 4 • Supabase Linked</span>
                  </div>
                </div>
                <button type="button" onClick={() => setIsNewParentSignUp(false)} className="p-1 rounded-lg text-slate-400 hover:text-slate-700">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-4 gap-1.5 pt-0.5">
                {[
                  { step: 1, label: 'Parent' },
                  { step: 2, label: 'Child' },
                  { step: 3, label: 'Program' },
                  { step: 4, label: 'Payment' },
                ].map((s) => (
                  <div key={s.step} className="space-y-1">
                    <div className={`h-1.5 rounded-full transition-all ${signUpStep >= s.step ? 'bg-[#E98E30]' : 'bg-slate-200'}`} />
                    <span className={`text-[9px] block text-center font-bold uppercase ${signUpStep === s.step ? 'text-[#E98E30]' : 'text-slate-400'}`}>
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {signUpStep === 1 && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!newParentForm.firstName || !newParentForm.lastName || !newParentForm.email || !newParentForm.phone) {
                      triggerSavedToast('Please complete all required fields.');
                      return;
                    }
                    setSignUpStep(2);
                  }}
                  className="space-y-3"
                >
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">First Name *</label>
                      <input
                        type="text"
                        required
                        value={newParentForm.firstName}
                        onChange={(e) => setNewParentForm({ ...newParentForm, firstName: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-2.5 py-1.5 text-xs text-slate-900 font-bold"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Last Name *</label>
                      <input
                        type="text"
                        required
                        value={newParentForm.lastName}
                        onChange={(e) => setNewParentForm({ ...newParentForm, lastName: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-2.5 py-1.5 text-xs text-slate-900 font-bold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={newParentForm.email}
                      onChange={(e) => setNewParentForm({ ...newParentForm, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-2.5 py-1.5 text-xs text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Canadian Phone *</label>
                    <input
                      type="tel"
                      required
                      value={newParentForm.phone}
                      onChange={(e) => setNewParentForm({ ...newParentForm, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-2.5 py-1.5 text-xs text-slate-900 font-bold"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#E98E30] hover:bg-amber-600 text-white font-black text-xs rounded-xl shadow-xs transition-all flex items-center justify-center space-x-1.5"
                  >
                    <span>Continue to Step 2: Child Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}

              {signUpStep === 2 && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!newParentForm.childFirstName || !newParentForm.childLastName || !newParentForm.childDob) {
                      triggerSavedToast('Child First Name, Last Name, and DOB are mandatory.');
                      return;
                    }
                    setSignUpStep(3);
                  }}
                  className="space-y-3"
                >
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Child First Name *</label>
                      <input
                        type="text"
                        required
                        value={newParentForm.childFirstName}
                        onChange={(e) => setNewParentForm({ ...newParentForm, childFirstName: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-2.5 py-1.5 text-xs text-slate-900 font-bold"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Child Last Name *</label>
                      <input
                        type="text"
                        required
                        value={newParentForm.childLastName}
                        onChange={(e) => setNewParentForm({ ...newParentForm, childLastName: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-2.5 py-1.5 text-xs text-slate-900 font-bold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Date of Birth *</label>
                      <input
                        type="date"
                        required
                        value={newParentForm.childDob}
                        onChange={(e) => setNewParentForm({ ...newParentForm, childDob: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-2.5 py-1.5 text-xs text-slate-900 font-bold"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Grade</label>
                      <select
                        value={newParentForm.childGrade}
                        onChange={(e) => setNewParentForm({ ...newParentForm, childGrade: parseInt(e.target.value) || 8 })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-2.5 py-1.5 text-xs text-slate-900 font-bold"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((g) => (
                          <option key={g} value={g}>Grade {g}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-1">
                    <button type="button" onClick={() => setSignUpStep(1)} className="py-2.5 px-3 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl">
                      Back
                    </button>
                    <button type="submit" className="flex-1 py-2.5 bg-[#339CA3] text-white font-black text-xs rounded-xl shadow-xs">
                      Continue to Step 3: Program
                    </button>
                  </div>
                </form>
              )}

              {signUpStep === 3 && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSignUpStep(4);
                  }}
                  className="space-y-3"
                >
                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Select Master Program</label>
                    <select
                      value={newParentForm.programId}
                      onChange={(e) => setNewParentForm({ ...newParentForm, programId: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-bold text-slate-900"
                    >
                      {masterProgramsList.map((p) => (
                        <option key={p.id} value={p.id}>{p.name} (${p.fee} CAD)</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Select Cohort & Location</label>
                    <select
                      value={newParentForm.batchId}
                      onChange={(e) => setNewParentForm({ ...newParentForm, batchId: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-bold text-slate-900"
                    >
                      {batches.map((b) => (
                        <option key={b.id} value={b.id}>{b.code} ({b.dayTime})</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex space-x-2 pt-1">
                    <button type="button" onClick={() => setSignUpStep(2)} className="py-2.5 px-3 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl">
                      Back
                    </button>
                    <button type="submit" className="flex-1 py-2.5 bg-[#5859A7] text-white font-black text-xs rounded-xl shadow-xs">
                      Proceed to Step 4: Pay Fee
                    </button>
                  </div>
                </form>
              )}

              {signUpStep === 4 && (
                <form onSubmit={handleCompleteNewParentSignUp} className="space-y-3.5">
                  <div className="p-3 bg-gradient-to-r from-amber-50 to-white rounded-2xl border border-amber-200 flex justify-between items-center">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-amber-800 block">Tuition Total</span>
                      <h4 className="text-xs font-black text-slate-900">{newParentForm.childFirstName} {newParentForm.childLastName}</h4>
                    </div>
                    <span className="text-lg font-black text-slate-900">$395 CAD</span>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5 bg-slate-100 p-1 rounded-2xl text-xs font-bold">
                    <button
                      type="button"
                      onClick={() => setNewParentForm({ ...newParentForm, paymentMethod: 'credit_card' })}
                      className={`py-1.5 rounded-xl transition-all ${
                        newParentForm.paymentMethod === 'credit_card' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
                      }`}
                    >
                      Credit Card
                    </button>
                    <button
                      type="button"
                      onClick={() => setNewParentForm({ ...newParentForm, paymentMethod: 'etransfer' })}
                      className={`py-1.5 rounded-xl transition-all ${
                        newParentForm.paymentMethod === 'etransfer' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
                      }`}
                    >
                      E-Transfer
                    </button>
                    <button
                      type="button"
                      onClick={() => setNewParentForm({ ...newParentForm, paymentMethod: 'pay_later' })}
                      className={`py-1.5 rounded-xl transition-all ${
                        newParentForm.paymentMethod === 'pay_later' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
                      }`}
                    >
                      Pay Later
                    </button>
                  </div>

                  <div className="flex space-x-2 pt-1">
                    <button type="button" onClick={() => setSignUpStep(3)} className="py-2.5 px-3 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl">
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isProcessingPayment}
                      className="flex-1 py-2.5 bg-[#FFC513] hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl shadow-xs"
                    >
                      {isProcessingPayment ? 'Saving to Database...' : 'Confirm Registration & Sync'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

        {/* MODAL: EDIT CHILD PROFILE */}
        {editingChild && (
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setBatchRoster(prev => prev.map(c => c.studentId === editingChild.studentId ? editingChild : c));
                triggerSavedToast(`Updated record for ${editingChild.firstName}!`);
                setEditingChild(null);
              }}
              className="bg-white border border-slate-200 w-full max-w-sm rounded-3xl p-5 shadow-2xl space-y-3"
            >
              <div className="flex justify-between items-center pb-1 border-b border-slate-100">
                <h3 className="font-extrabold text-slate-900 text-sm">Edit Student Profile</h3>
                <button type="button" onClick={() => setEditingChild(null)} className="p-1 text-slate-400"><X className="w-4 h-4" /></button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">First Name</label>
                  <input type="text" required value={editingChild.firstName} onChange={(e) => setEditingChild({ ...editingChild, firstName: e.target.value })} className="w-full bg-slate-50 border rounded-xl px-2.5 py-1.5 text-xs text-slate-900 font-bold" />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Last Name</label>
                  <input type="text" required value={editingChild.lastName} onChange={(e) => setEditingChild({ ...editingChild, lastName: e.target.value })} className="w-full bg-slate-50 border rounded-xl px-2.5 py-1.5 text-xs text-slate-900 font-bold" />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Date of Birth</label>
                <input type="date" required value={editingChild.dob} onChange={(e) => setEditingChild({ ...editingChild, dob: e.target.value })} className="w-full bg-slate-50 border rounded-xl px-2.5 py-1.5 text-xs text-slate-900 font-bold" />
              </div>
              <div className="flex space-x-2 pt-2">
                <button type="button" onClick={() => setEditingChild(null)} className="flex-1 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl">Cancel</button>
                <button type="submit" className="flex-1 py-2 bg-[#5859A7] text-white font-extrabold text-xs rounded-xl shadow-xs">Save Changes</button>
              </div>
            </form>
          </div>
        )}

        {/* MODAL: EDIT PARENT PROFILE */}
        {isEditingParentProfile && (
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsEditingParentProfile(false);
                triggerSavedToast('Guardian details updated!');
              }}
              className="bg-white border border-slate-200 w-full max-w-sm rounded-3xl p-5 shadow-2xl space-y-3"
            >
              <div className="flex justify-between items-center pb-1 border-b border-slate-100">
                <h3 className="font-extrabold text-slate-900 text-sm">Edit Guardian Details</h3>
                <button type="button" onClick={() => setIsEditingParentProfile(false)} className="p-1 text-slate-400"><X className="w-4 h-4" /></button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input type="text" required value={parentProfile.firstName} onChange={(e) => setParentProfile({ ...parentProfile, firstName: e.target.value })} className="w-full bg-slate-50 border rounded-xl px-2.5 py-1.5 text-xs text-slate-900 font-bold" />
                <input type="text" required value={parentProfile.lastName} onChange={(e) => setParentProfile({ ...parentProfile, lastName: e.target.value })} className="w-full bg-slate-50 border rounded-xl px-2.5 py-1.5 text-xs text-slate-900 font-bold" />
              </div>
              <input type="email" required value={parentProfile.email} onChange={(e) => setParentProfile({ ...parentProfile, email: e.target.value })} className="w-full bg-slate-50 border rounded-xl px-2.5 py-1.5 text-xs text-slate-900" />
              <input type="tel" required value={parentProfile.phone} onChange={(e) => setParentProfile({ ...parentProfile, phone: e.target.value })} className="w-full bg-slate-50 border rounded-xl px-2.5 py-1.5 text-xs text-slate-900 font-bold" />
              <div className="flex space-x-2 pt-2">
                <button type="button" onClick={() => setIsEditingParentProfile(false)} className="flex-1 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl">Cancel</button>
                <button type="submit" className="flex-1 py-2 bg-[#E98E30] text-white font-extrabold text-xs rounded-xl shadow-xs">Save Profile</button>
              </div>
            </form>
          </div>
        )}

        {/* MODAL: CO-FACILITATORS DIRECTORY */}
        {showCoFacilitatorsModal && (
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <div className="bg-white border border-slate-200 w-full max-w-sm rounded-3xl p-5 shadow-2xl space-y-3.5">
              <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                <h3 className="font-extrabold text-slate-900 text-sm">Assigned Cohort Facilitators</h3>
                <button onClick={() => setShowCoFacilitatorsModal(false)} className="p-1 text-slate-400"><X className="w-4 h-4" /></button>
              </div>
              <div className="space-y-2">
                {activeBatch.facilitators.map((fac) => (
                  <div key={fac.id} className="p-3 bg-slate-50 rounded-2xl flex justify-between items-center">
                    <div>
                      <span className="text-xs font-bold text-slate-900">{fac.name}</span>
                      <span className="text-[10px] text-slate-500 block">{fac.role} • {fac.phone}</span>
                    </div>
                    <a href={`tel:${fac.phone.replace(/[^0-9]/g, '')}`} className="p-2 bg-white rounded-xl border border-slate-200 text-[#339CA3]">
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* MODAL: EDIT ROLE ASSIGNMENT */}
        {editingRoleAssignmentStudent && (
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const key = `${selectedSessionNum}_${editingRoleAssignmentStudent.student.studentId}`;
                setStudentSessionAssignments(prev => ({ ...prev, [key]: editingRoleAssignmentStudent.asg }));
                triggerSavedToast(`Updated role for ${editingRoleAssignmentStudent.student.firstName}!`);
                setEditingRoleAssignmentStudent(null);
              }}
              className="bg-white border border-slate-200 w-full max-w-sm rounded-3xl p-5 shadow-2xl space-y-3"
            >
              <div className="flex justify-between items-center pb-1 border-b border-slate-100">
                <h3 className="font-extrabold text-slate-900 text-sm">Assign Role: {editingRoleAssignmentStudent.student.firstName}</h3>
                <button type="button" onClick={() => setEditingRoleAssignmentStudent(null)} className="p-1 text-slate-400"><X className="w-4 h-4" /></button>
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Meeting Role</label>
                <select
                  value={editingRoleAssignmentStudent.asg.role}
                  onChange={(e) => setEditingRoleAssignmentStudent({ ...editingRoleAssignmentStudent, asg: { ...editingRoleAssignmentStudent.asg, role: e.target.value } })}
                  className="w-full bg-slate-50 border rounded-xl px-2.5 py-1.5 text-xs font-bold text-slate-900"
                >
                  {MEETING_ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Speech Category</label>
                <select
                  value={editingRoleAssignmentStudent.asg.category}
                  onChange={(e) => setEditingRoleAssignmentStudent({ ...editingRoleAssignmentStudent, asg: { ...editingRoleAssignmentStudent.asg, category: e.target.value } })}
                  className="w-full bg-slate-50 border rounded-xl px-2.5 py-1.5 text-xs font-bold text-slate-900"
                >
                  {ASSIGNMENT_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Assigned Speech Topic</label>
                <input
                  type="text"
                  required
                  value={editingRoleAssignmentStudent.asg.topic}
                  onChange={(e) => setEditingRoleAssignmentStudent({ ...editingRoleAssignmentStudent, asg: { ...editingRoleAssignmentStudent.asg, topic: e.target.value } })}
                  className="w-full bg-slate-50 border rounded-xl px-2.5 py-1.5 text-xs text-slate-900 font-semibold"
                />
              </div>
              <div className="flex space-x-2 pt-2">
                <button type="button" onClick={() => setEditingRoleAssignmentStudent(null)} className="flex-1 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl">Cancel</button>
                <button type="submit" className="flex-1 py-2 bg-[#5859A7] text-white font-extrabold text-xs rounded-xl shadow-xs">Save</button>
              </div>
            </form>
          </div>
        )}

        {/* MODAL: EDIT ATTENDANCE & FEEDBACK */}
        {editingAttendanceStudent && (
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const key = `${selectedSessionNum}_${editingAttendanceStudent.student.studentId}`;
                setSessionRecords(prev => ({ ...prev, [key]: editingAttendanceStudent.rec }));
                triggerSavedToast(`Feedback saved for ${editingAttendanceStudent.student.firstName}!`);
                setEditingAttendanceStudent(null);
              }}
              className="bg-white border border-slate-200 w-full max-w-sm rounded-3xl p-5 shadow-2xl space-y-3"
            >
              <div className="flex justify-between items-center pb-1 border-b border-slate-100">
                <h3 className="font-extrabold text-slate-900 text-sm">Session {selectedSessionNum} Feedback</h3>
                <button type="button" onClick={() => setEditingAttendanceStudent(null)} className="p-1 text-slate-400"><X className="w-4 h-4" /></button>
              </div>
              <textarea
                rows={3}
                value={editingAttendanceStudent.rec.feedback}
                onChange={(e) => setEditingAttendanceStudent({ ...editingAttendanceStudent, rec: { ...editingAttendanceStudent.rec, feedback: e.target.value } })}
                placeholder="Coaching notes on vocal projection, eye contact, body language..."
                className="w-full bg-slate-50 border rounded-xl px-2.5 py-1.5 text-xs text-slate-900"
              />
              <div className="flex space-x-2 pt-2">
                <button type="button" onClick={() => setEditingAttendanceStudent(null)} className="flex-1 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl">Cancel</button>
                <button type="submit" className="flex-1 py-2 bg-[#339CA3] text-white font-extrabold text-xs rounded-xl shadow-xs">Save Feedback</button>
              </div>
            </form>
          </div>
        )}

        {/* MODAL: ADMIN PROMOTION CONFIRMATION */}
        {showPromotionConfirmationModal && (
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <div className="bg-white border border-slate-200 w-full max-w-sm rounded-3xl p-5 shadow-2xl space-y-3.5">
              <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-[#FFC513]" />
                  <h3 className="font-extrabold text-slate-900 text-sm">Confirm Batch Promotion</h3>
                </div>
                <button onClick={() => setShowPromotionConfirmationModal(false)} className="p-1 text-slate-400"><X className="w-4 h-4" /></button>
              </div>
              <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900">
                Promoting <strong>{selectedStudentIdsForPromo.length} students</strong> into {promoTargetTerm}.
              </div>
              <div className="flex space-x-2 pt-1">
                <button type="button" onClick={() => setShowPromotionConfirmationModal(false)} className="flex-1 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl">Cancel</button>
                <button type="button" onClick={handleExecutePromotion} className="flex-1 py-2 bg-[#FFC513] text-slate-950 font-black text-xs rounded-xl shadow-xs">Confirm</button>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* MODAL: SUPABASE DATABASE CONNECTION MANAGER                       */}
        {/* ================================================================= */}
        {showDbConnectModal && (
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <div className="bg-white border border-slate-200 w-full max-w-md rounded-3xl p-5 shadow-2xl space-y-4 animate-in fade-in max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                <div className="flex items-center space-x-2">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${supabaseConnected ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-sm">Supabase Database Connection</h3>
                    <span className="text-[10px] text-slate-500 font-semibold">
                      {supabaseConnected ? '🟢 Live PostgreSQL Connected' : '🟠 Running in Offline / Mock Mode'}
                    </span>
                  </div>
                </div>
                <button onClick={() => setShowDbConnectModal(false)} className="p-1 text-slate-400 hover:text-slate-700">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {dbConnectError && (
                <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{dbConnectError}</span>
                </div>
              )}

              {supabaseConnected ? (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-900 space-y-1">
                  <span className="font-extrabold block">Database Connection Verified!</span>
                  <p className="text-[11px] text-emerald-800">
                    The portal is actively reading and saving records directly to your Supabase project (<code>ifitoxccgoeofrbtzutm</code>).
                  </p>
                </div>
              ) : (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-900 space-y-1">
                  <span className="font-bold block">Why is it in Offline / Mock Mode?</span>
                  <p className="text-[11px] text-amber-800 leading-relaxed">
                    The app needs your Supabase <strong>anon public key</strong> to authenticate database queries. You can either paste it below to connect immediately on this browser, or trigger a <strong>Redeploy</strong> on Vercel so your environment variables take effect.
                  </p>
                </div>
              )}

              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setDbConnectError('');
                  setIsTestingDb(true);

                  const cleanedKey = dbKeyInput.trim();
                  const cleanedUrl = dbUrlInput.trim() || DEFAULT_SUPABASE_URL;

                  if (!cleanedKey) {
                    setDbConnectError('Please enter your Supabase anon / public API key.');
                    setIsTestingDb(false);
                    return;
                  }

                  const success = await testAndLoadSupabase(cleanedKey, cleanedUrl);
                  setIsTestingDb(false);

                  if (success) {
                    try {
                      localStorage.setItem('cfli_supabase_anon_key', cleanedKey);
                    } catch (err) {}
                    triggerSavedToast('Connected to Supabase! Live database active.');
                    setShowDbConnectModal(false);
                  } else {
                    setDbConnectError('Could not connect with this key. Check that you copied the green "anon / public" key from Supabase Settings -> API Keys.');
                  }
                }}
                className="space-y-3"
              >
                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">
                    Supabase Project URL
                  </label>
                  <input
                    type="url"
                    required
                    value={dbUrlInput}
                    onChange={(e) => setDbUrlInput(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 font-mono"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">
                    Supabase Anon / Public Key *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Paste your long anon public key (starts with eyJhbGci...)"
                    value={dbKeyInput}
                    onChange={(e) => setDbKeyInput(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 font-mono leading-tight focus:ring-2 focus:ring-[#5859A7]"
                  />
                  <span className="text-[10px] text-slate-400 block mt-1">
                    Found in Supabase: Settings (⚙️) $\rightarrow$ API Keys $\rightarrow$ <strong>Project API keys: anon / public</strong>
                  </span>
                </div>

                <div className="flex space-x-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setShowDbConnectModal(false)}
                    className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    disabled={isTestingDb}
                    className="flex-1 py-2.5 bg-[#5859A7] hover:bg-[#494a8f] text-white font-extrabold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center space-x-1.5 disabled:opacity-50"
                  >
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>{isTestingDb ? 'Verifying with Supabase...' : 'Connect & Sync Database'}</span>
                  </button>
                </div>
              </form>

              <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
                <span className="font-bold text-slate-700 block">How to make this automatic on Vercel:</span>
                <p className="text-[10px] leading-relaxed">
                  1. In Vercel, go to <strong>Project Settings $\rightarrow$ Environment Variables</strong> and confirm <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code> are saved.
                </p>
                <p className="text-[10px] leading-relaxed">
                  2. Go to <strong>Deployments</strong> $\rightarrow$ click the three dots (<code>...</code>) on the latest deployment $\rightarrow$ click <strong>Redeploy</strong>. Vite will bake the keys into the site automatically.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="mt-4 text-center text-xs text-slate-500 flex items-center justify-center space-x-2">
        <div className="w-5 h-5 bg-white rounded-md p-0.5 inline-flex items-center justify-center shadow-xs border border-slate-200">
          <CfliLogo variant="mark" className="w-4 h-4" />
        </div>
        <span>Centre for Leadership and Innovation • Connected to Supabase</span>
      </footer>
    </div>
  );
}
