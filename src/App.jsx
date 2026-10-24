import React, { useState } from 'react';
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
  FileCheck2,
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
  RefreshCw
} from 'lucide-react';

// =============================================================================
// CFLI OFFICIAL BRAND COLOR PALETTE CONSTANTS
// =============================================================================
// ⚬ #FFC513 (Golden Yellow)   - Milestones, Star Speaker, Trophy Highlights
// ⚬ #339CA3 (Teal)             - Student Journey, Team Badges, Attendance
// ⚬ #5859A7 (Royal Indigo)     - Primary Brand, Parent Portal, Facilitator Hub
// ⚬ #E98E30 (Warm Tangerine)   - Actions, Late Status, Medical Alerts

// =============================================================================
// CFLI OFFICIAL BRAND LOGO (Centre for Leadership and Innovation)
// Loads from user's live Supabase Storage bucket with zero-blank fallback
// =============================================================================
export const CFLI_LOGO_URL = 'https://ifitoxccgoeofrbtzutm.supabase.co/storage/v1/object/public/CFLI/cfli-logo.png';

export const CfliLogo = ({ variant = 'full', className = 'h-10' }) => {
  const [loadError, setLoadError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(CFLI_LOGO_URL);

  const fallbackUrls = [
    'https://ifitoxccgoeofrbtzutm.supabase.co/storage/v1/object/public/CFLI/cfli-logo.png',
    'https://ifitoxccgoeofrbtzutm.supabase.co/storage/v1/object/public/cfli/cfli-logo.png',
    'https://ifitoxccgoeofrbtzutm.supabase.co/storage/v1/object/public/CFLI/CFLI%20Logo%20No%20shadow.png',
    'https://ifitoxccgoeofrbtzutm.supabase.co/storage/v1/object/public/assets/cfli-logo.png',
  ];

  const handleError = () => {
    const currentIndex = fallbackUrls.indexOf(currentSrc);
    if (currentIndex >= 0 && currentIndex < fallbackUrls.length - 1) {
      setCurrentSrc(fallbackUrls[currentIndex + 1]);
    } else {
      setLoadError(true);
    }
  };

  // If the remote storage image is blocked, private, or offline, render the exact branded logo
  // so the user interface NEVER displays a blank white box
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

// Reusable Branded Logo Card Container with explicit dimensions
export const CfliLogoCard = ({ className = 'max-w-xs', size = 'normal' }) => (
  <div
    className={`bg-white rounded-2xl p-2.5 sm:p-3 shadow-xl border border-white/20 inline-flex items-center justify-center transition-transform hover:scale-[1.01] ${className}`}
  >
    <CfliLogo
      variant="full"
      className={size === 'large' ? 'w-full h-16 sm:h-20' : 'w-full h-10 sm:h-12'}
    />
  </div>
);

// Master 10-Session Curriculum Calendar
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

// Helper: Calculate 365-day expiration and validity status from VSC issue date
const calculateVscStatus = (issueDateStr) => {
  if (!issueDateStr) {
    return {
      issueFormatted: 'Not Recorded',
      expiryFormatted: 'Pending',
      daysRemaining: 0,
      isExpired: true,
      isExpiringSoon: false,
      statusLabel: 'Action Required',
      badgeClass: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
    };
  }

  const [year, month, day] = issueDateStr.split('-').map(Number);
  const issueDate = new Date(year, month - 1, day);
  // Add exactly 365 days for Canadian annual police clearance
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
  let badgeClass = 'bg-[#339CA3]/20 text-[#339CA3] border-[#339CA3]/40';

  if (isExpired) {
    statusLabel = 'Expired';
    badgeClass = 'bg-rose-500/20 text-rose-300 border-rose-500/40';
  } else if (isExpiringSoon) {
    statusLabel = `Expires in ${daysRemaining}d`;
    badgeClass = 'bg-[#E98E30]/20 text-[#E98E30] border-[#E98E30]/40';
  }

  return {
    issueFormatted,
    expiryFormatted,
    daysRemaining,
    isExpired,
    isExpiringSoon,
    statusLabel,
    badgeClass,
  };
};

export default function App() {
  // Mobile Frame Viewport Simulator toggle
  const [deviceFrame, setDeviceFrame] = useState(true);

  // Authentication & Perspective States: 'gateway', 'admin', 'facilitator', 'student', 'parent'
  const [activeRolePerspective, setActiveRolePerspective] = useState('gateway');

  // SUB-NAVIGATION STATES
  // Parent Sub-Tabs: 'dashboard', 'prep', 'milestones', 'feedback', 'profile'
  const [parentActiveTab, setParentActiveTab] = useState('dashboard');
  const [parentActiveChildId, setParentActiveChildId] = useState('s-alex-chen');
  const [isRegisteringProgram, setIsRegisteringProgram] = useState(false);
  const [newRegChildType, setNewRegChildType] = useState('new'); // 'new' | 'existing'
  const [newRegistrationData, setNewRegistrationData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    grade: 8,
    allergies: 'None',
    city: 'Markham',
    postalCode: 'L3R 5M9',
    program: 'Youth Leadership Program',
    term: 'Spring 2026',
    batchCode: 'YLP - 1A Spring 2026: 1 Markham',
    existingStudentId: 's-alex-chen',
  });

  // Student Sub-Tabs: 'dashboard', 'prep', 'milestones', 'feedback'
  const [studentActiveTab, setStudentActiveTab] = useState('dashboard');

  // Facilitator Navigation tabs: 'dashboard', 'roles', 'milestones', 'attendance', 'roster', 'profile'
  const [facilitatorActiveTab, setFacilitatorActiveTab] = useState('dashboard');
  const [facilitatorMilestoneSubTab, setFacilitatorMilestoneSubTab] = useState('teams'); // 'teams' | 'starspeaker'
  const [showCoFacilitatorsModal, setShowCoFacilitatorsModal] = useState(false);

  // ADMIN PORTAL STATES
  // Sub-Tabs: 'overview', 'masters', 'staffing', 'students', 'promotion'
  const [adminActiveTab, setAdminActiveTab] = useState('overview');
  const [adminMasterSubTab, setAdminMasterSubTab] = useState('programs'); // 'programs' | 'batches' | 'terms' | 'locations' | 'calendar'
  const [adminSearchTerm, setAdminSearchTerm] = useState('');
  const [adminSelectedCohortForStaffing, setAdminSelectedCohortForStaffing] = useState('b2');

  // Batch Promotion Engine States
  const [promoSourceCohortId, setPromoSourceCohortId] = useState('b2');
  const [selectedStudentIdsForPromo, setSelectedStudentIdsForPromo] = useState(['s-alex-chen', 's-sophia-patel']);
  const [promoTargetLevel, setPromoTargetLevel] = useState(2);
  const [promoTargetTerm, setPromoTargetTerm] = useState('Spring 2026');
  const [promoTargetCohortLetter, setPromoTargetCohortLetter] = useState('A');
  const [showPromotionConfirmationModal, setShowPromotionConfirmationModal] = useState(false);

  // Admin Master Records State
  const [masterProgramsList, setMasterProgramsList] = useState([
    { id: 'p1', code: 'YLP', name: 'Youth Leadership Program', description: 'Flagship public speaking and leadership training for ages 12-18', active: true },
    { id: 'p2', code: 'YHACKS', name: 'YHacks Series', description: 'Youth hackathons, team innovation and technological pitching', active: true },
    { id: 'p3', code: 'CENTRE_STAGE', name: 'Centre Stage Showcase', description: 'Annual speech tournament and gala theatrical showcase', active: true },
    { id: 'p4', code: 'YJOBS', name: 'YJobs Career Hub', description: 'Coaching, resumes, interview simulations, and job placement', active: true },
    { id: 'p5', code: 'YAI', name: 'YAi Artificial Intelligence', description: 'Applied AI ethics, prompt mastery, and modern technical literacy', active: true },
  ]);

  // Master Batch Names (New Table: Formulates Program = Program + Batch Name + Term + Location)
  const [masterBatchNamesList, setMasterBatchNamesList] = useState([
    { id: 'bn1', code: '1A', name: 'Level 1 Cohort A', level: 1, description: 'Foundational speaking & problem solving' },
    { id: 'bn2', code: '1B', name: 'Level 1 Cohort B', level: 1, description: 'Foundational active listening & vocal clarity' },
    { id: 'bn3', code: '2A', name: 'Level 2 Cohort A', level: 2, description: 'Intermediate debate & structured discourse' },
    { id: 'bn4', code: '2B', name: 'Level 2 Cohort B', level: 2, description: 'Intermediate persuasive argumentation' },
    { id: 'bn5', code: '3A', name: 'Level 3 Cohort A', level: 3, description: 'Advanced executive presence & tournament prep' },
    { id: 'bn6', code: '3B', name: 'Level 3 Cohort B', level: 3, description: 'Advanced keynote speaking & showcase prep' },
    { id: 'bn7', code: 'ZZ', name: 'ZZ Withdrawn', level: 0, description: 'Data hygiene placeholder for withdrawn students' },
  ]);

  const [masterTermsList, setMasterTermsList] = useState([
    { id: 't1', name: 'Winter 2026', season: 'Winter', year: 2026, isCurrent: true, startDate: '2026-01-10', endDate: '2026-03-28' },
    { id: 't2', name: 'Spring 2026', season: 'Spring', year: 2026, isCurrent: false, startDate: '2026-04-11', endDate: '2026-06-20' },
    { id: 't3', name: 'Fall 2026', season: 'Fall', year: 2026, isCurrent: false, startDate: '2026-09-19', endDate: '2026-11-28' },
  ]);

  // Master Locations with 5 Markham Sub-Locations (Markham 1, 2, 3, 4, 5)
  const [masterLocationsList, setMasterLocationsList] = useState([
    { id: 'loc1', code: 'MARKHAM_1', name: 'Markham 1', address: '101 Town Centre Blvd (Hub 1)', city: 'Markham' },
    { id: 'loc2', code: 'MARKHAM_2', name: 'Markham 2', address: '101 Town Centre Blvd (Hub 2)', city: 'Markham' },
    { id: 'loc3', code: 'MARKHAM_3', name: 'Markham 3', address: '101 Town Centre Blvd (Hub 3)', city: 'Markham' },
    { id: 'loc4', code: 'MARKHAM_4', name: 'Markham 4', address: '101 Town Centre Blvd (Hub 4)', city: 'Markham' },
    { id: 'loc5', code: 'MARKHAM_5', name: 'Markham 5', address: '101 Town Centre Blvd (Hub 5)', city: 'Markham' },
    { id: 'loc6', code: 'VIRTUAL', name: 'Virtual Classroom (Zoom Cloud)', address: 'Online / Encrypted Portal', city: 'Virtual' },
    { id: 'loc7', code: 'RICHMOND_HILL', name: 'Richmond Hill Center', address: '10268 Yonge St', city: 'Richmond Hill' },
  ]);

  // Master Program Calendar (10 Sessions)
  const [masterProgramCalendar, setMasterProgramCalendar] = useState([
    { num: 1, date: '2026-01-10', topic: 'Orientation, Voice Mastery & Icebreakers', notes: 'Intro speeches & diagnostic assessments' },
    { num: 2, date: '2026-01-17', topic: 'Active Listening & Conflict Resolution', notes: 'Partner debate & listening drills' },
    { num: 3, date: '2026-01-24', topic: 'Persuasive Storytelling & Audience Engagement', notes: 'Hook formulation & narrative arcs' },
    { num: 4, date: '2026-01-31', topic: 'Mid-Term Team Milestone Simulation', notes: 'Team crisis debate & role rotations' },
    { num: 5, date: '2026-02-07', topic: 'Non-Verbal Body Language & Executive Presence', notes: 'Stance, purposeful gestures, filler reduction' },
    { num: 6, date: '2026-02-14', topic: 'Impromptu Speaking & Rapid Reasoning (Table Topics)', notes: '1-minute impromptu drills & timing control' },
    { num: 7, date: '2026-02-21', topic: 'Star Speaker Semi-Final Rehearsal', notes: 'Cohort preliminary presentations' },
    { num: 8, date: '2026-02-28', topic: 'Judged Star Speaker Round', notes: 'Judges evaluation round' },
    { num: 9, date: '2026-03-07', topic: 'Peer Evaluations & Final Speeches', notes: 'Constructive feedback & polish' },
    { num: 10, date: '2026-03-28', topic: 'Centre Stage Showcase & Graduation Gala', notes: 'Grand showcase & graduation ceremony' },
  ]);

  // Admin Staffing Engine: Track Current vs. Upcoming Term and Mid-Term Changes
  const [facilitatorStaffList, setFacilitatorStaffList] = useState([
    {
      id: 'f-marcus',
      name: 'Marcus Vance',
      email: 'marcus.vance@cflicanada.com',
      phone: '(416) 555-7821',
      currentAssignment: {
        term: 'Winter 2026',
        batchCode: 'YLP - 1A Winter 2026: 2 Markham',
        location: 'Markham 2',
        role: 'Lead Facilitator',
        status: 'Active On-Duty',
      },
      upcomingAssignment: {
        term: 'Spring 2026',
        batchCode: 'YLP - 2A Spring 2026: 2 Markham',
        location: 'Markham 2',
        role: 'Lead Facilitator',
        status: 'Assigned',
      },
    },
    {
      id: 'f-devon',
      name: 'Devon Patel',
      email: 'devon.patel@cflicanada.com',
      phone: '(905) 555-3419',
      currentAssignment: {
        term: 'Winter 2026',
        batchCode: 'YLP - 1A Winter 2026: 1 Markham',
        location: 'Markham 1',
        role: 'Co-Facilitator',
        status: 'Active On-Duty',
      },
      upcomingAssignment: {
        term: 'Spring 2026',
        batchCode: 'Pending / Unassigned',
        location: 'Unassigned',
        role: 'Co-Facilitator',
        status: 'Unassigned',
      },
    },
    {
      id: 'f-sarah',
      name: 'Sarah Jenkins',
      email: 'sarah.jenkins@cflicanada.com',
      phone: '(416) 555-9082',
      currentAssignment: {
        term: 'Winter 2026',
        batchCode: 'YLP - 1A Winter 2026: 2 Markham',
        location: 'Markham 2',
        role: 'Assistant Facilitator',
        status: 'Active On-Duty',
      },
      upcomingAssignment: {
        term: 'Spring 2026',
        batchCode: 'YLP - 1A Spring 2026: 1 Markham',
        location: 'Markham 1',
        role: 'Lead Facilitator',
        status: 'Assigned',
      },
    },
    {
      id: 'f-chloe',
      name: 'Chloe Zhang',
      email: 'chloe.zhang@cflicanada.com',
      phone: '(647) 555-8201',
      currentAssignment: {
        term: 'Winter 2026',
        batchCode: 'YLP - 1A Winter 2026: 1 Markham',
        location: 'Markham 1',
        role: 'Grad Facilitator / Mentor',
        status: 'Active On-Duty',
      },
      upcomingAssignment: {
        term: 'Spring 2026',
        batchCode: 'YLP - 1A Spring 2026: 1 Markham',
        location: 'Markham 1',
        role: 'Grad Facilitator / Mentor',
        status: 'Assigned',
      },
    },
  ]);

  // Admin Modals
  const [editingProgramModal, setEditingProgramModal] = useState(null);
  const [editingBatchNameModal, setEditingBatchNameModal] = useState(null);
  const [editingTermModal, setEditingTermModal] = useState(null);
  const [editingLocationModal, setEditingLocationModal] = useState(null);
  const [editingCalendarModal, setEditingCalendarModal] = useState(null);
  const [midTermChangeModal, setMidTermChangeModal] = useState(null);
  const [upcomingTermAssignModal, setUpcomingTermAssignModal] = useState(null);
  const [isAssigningFacilitatorModal, setIsAssigningFacilitatorModal] = useState(false);
  const [newFacilitatorAssignment, setNewFacilitatorAssignment] = useState({
    name: 'Devon Patel',
    email: 'devon.patel@cflicanada.com',
    phone: '(905) 555-3419',
    role: 'Co-Facilitator',
  });

  // Facilitator Active Cohort & Time-Travel Session Selector
  const [selectedBatchId, setSelectedBatchId] = useState('b2');
  const [selectedSessionNum, setSelectedSessionNum] = useState(5);
  const [notificationToast, setNotificationToast] = useState(false);

  // Modals for editing profiles
  const [isEditingParentProfile, setIsEditingParentProfile] = useState(false);
  const [editingChild, setEditingChild] = useState(null);
  const [isEditingFacilitatorProfile, setIsEditingFacilitatorProfile] = useState(false);
  const [viewingVscModal, setViewingVscModal] = useState(false);

  // Facilitator Profile Info with Enhanced VSC & Tenure Specifications
  // NOTE: startDateOfService, tenureTerms, and previousTermBatch are ADMIN-MANAGED ONLY
  const [facilitatorProfile, setFacilitatorProfile] = useState({
    firstName: 'Marcus',
    lastName: 'Vance',
    role: 'Lead Facilitator',
    phone: '(416) 555-7821',
    email: 'marcus.vance@cflicanada.com',
    personalEmail: 'marcus.vance.personal@gmail.com',
    bio: 'Youth leadership mentor & speech coach specializing in impromptu reasoning and public speaking tournament preparation. Passionate about empowering young orators across York Region.',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    // Vulnerable Sector Certificate (VSC)
    vscCleared: true,
    vscIssueDate: '2025-10-15', // YYYY-MM-DD
    vscAttachmentName: 'VSC_Marcus_Vance_YorkPolice_2025.pdf',
    vscAttachmentSize: '1.4 MB',
    vscAttachmentDate: '2025-10-16',
    // CFLI Service History & Tenure (Strictly Admin Controlled)
    startDateOfService: '2023-09-09', // Sep 9, 2023
    tenureTerms: 7, // Completed 7 terms (Fall 2023 through Winter 2026)
    previousTermBatch: 'YLP - 1A Fall 2025: 1 Markham',
  });

  // Google Session Notes Links
  const [sessionNotesLinks, setSessionNotesLinks] = useState({
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

  const [isEditingNotesUrl, setIsEditingNotesUrl] = useState(false);
  const [tempNotesUrl, setTempNotesUrl] = useState('');

  // Cohort Student Roster
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
      primaryGuardianName: 'David Chen (Father)',
      primaryGuardianPhone: '(647) 555-0192',
      emergencyContactName: 'Rachel Chen (Mother)',
      emergencyContactPhone: '(647) 555-0199',
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
      primaryGuardianName: 'David Chen (Father)',
      primaryGuardianPhone: '(647) 555-0192',
      emergencyContactName: 'Rachel Chen (Mother)',
      emergencyContactPhone: '(647) 555-0199',
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
      primaryGuardianName: 'Grace Wong (Mother)',
      primaryGuardianPhone: '(416) 555-8832',
      emergencyContactName: 'Alan Wong (Uncle)',
      emergencyContactPhone: '(416) 555-8839',
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
      primaryGuardianName: 'Priya Patel (Mother)',
      primaryGuardianPhone: '(905) 555-4310',
      emergencyContactName: 'Vikram Patel (Father)',
      emergencyContactPhone: '(905) 555-4318',
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
      primaryGuardianName: 'Karen Taylor (Mother)',
      primaryGuardianPhone: '(647) 555-9011',
      emergencyContactName: 'Mark Taylor (Father)',
      emergencyContactPhone: '(647) 555-9019',
    },
  ]);

  // Active Batches
  const [batches] = useState([
    {
      id: 'b1',
      code: 'YLP - 1A Winter 2026: 1 Markham',
      program: 'Youth Leadership Program',
      level: 1,
      cohort: '1A',
      location: 'Markham Community Hub (Room 204)',
      dayTime: 'Saturdays, 10:00 AM - 12:00 PM',
      capacity: 25,
      enrolled: 22,
      facilitators: [
        { id: 'f-marcus', name: 'Marcus Vance', role: 'Lead Facilitator', phone: '(416) 555-7821', email: 'marcus.vance@cflicanada.com' },
        { id: 'f-devon', name: 'Devon Patel', role: 'Co-Facilitator', phone: '(905) 555-3419', email: 'devon.patel@cflicanada.com' },
        { id: 'f-chloe', name: 'Chloe Zhang', role: 'Grad Facilitator / Mentor', phone: '(647) 555-8201', email: 'chloe.zhang@cflicanada.com' },
      ],
      tag: 'Foundation Level (Ages 12-14)',
    },
    {
      id: 'b2',
      code: 'YLP - 1A Winter 2026: 2 Markham',
      program: 'Youth Leadership Program',
      level: 1,
      cohort: '1A',
      location: 'Markham Community Hub (Room 205)',
      dayTime: 'Saturdays, 1:00 PM - 3:00 PM',
      capacity: 25,
      enrolled: 20,
      facilitators: [
        { id: 'f-marcus', name: 'Marcus Vance', role: 'Lead Facilitator', phone: '(416) 555-7821', email: 'marcus.vance@cflicanada.com' },
        { id: 'f-sarah', name: 'Sarah Jenkins', role: 'Assistant Facilitator', phone: '(416) 555-9082', email: 'sarah.jenkins@cflicanada.com' },
        { id: 'f-aiden', name: 'Aiden Wong', role: 'Youth Mentor (Alumni)', phone: '(647) 555-4421', email: 'aiden.wong@cflicanada.com' },
      ],
      tag: 'Foundation Level (Ages 12-14)',
    },
  ]);

  // 10-Session Attendance & Feedback Matrix
  const [sessionRecords, setSessionRecords] = useState({
    '1_s-alex-chen': { attendance: 'present', feedback: 'Alexander showed remarkable poise and vocal clarity.' },
    '1_s-maya-chen': { attendance: 'present', feedback: 'Confident self-introduction and warm stage smile.' },
    '2_s-alex-chen': { attendance: 'present', feedback: 'Active participation in conflict resolution debate.' },
    '2_s-maya-chen': { attendance: 'present', feedback: 'Great listening skills during peer speeches.' },
    '3_s-alex-chen': { attendance: 'present', feedback: 'Outstanding personal narrative delivered under 2 mins.' },
    '3_s-maya-chen': { attendance: 'present', feedback: 'Clear structure and engaging storytelling arc.' },
    '4_s-alex-chen': { attendance: 'present', feedback: 'Voted team captain for collaborative crisis scenario.' },
    '4_s-maya-chen': { attendance: 'present', feedback: 'Reliable team contributor and time-keeper.' },
    '5_s-alex-chen': { attendance: 'present', feedback: 'Superb stance and purposeful hand gestures today. Addressed verbal fillers.' },
    '5_s-maya-chen': { attendance: 'present', feedback: 'Good posture; projected voice well across the room.' },
    '5_s-lucas-wong': { attendance: 'late', feedback: 'Arrived at 1:12 PM; joined mirror exercise quickly.' },
    '5_s-sophia-patel': { attendance: 'present', feedback: 'Masterful eye contact across all corners of the room.' },
    '5_s-liam-taylor': { attendance: 'absent', feedback: 'Family travel out of province.' },
  });

  // Session Roles & Assignments
  const [studentSessionAssignments, setStudentSessionAssignments] = useState({
    '5_s-alex-chen': {
      role: 'Chairperson',
      category: 'Prepared Speech',
      topic: 'The Power of Resilience: Overcoming High School Obstacles',
    },
    '5_s-maya-chen': {
      role: 'Time Manager',
      category: 'Show & Tell',
      topic: 'My Provincial Robotics Award & What It Taught Me',
    },
    '5_s-lucas-wong': {
      role: 'Linguistic Manager',
      category: 'Impromptu Speech',
      topic: 'Table Topics Fast-Fire Delivery',
    },
    '5_s-sophia-patel': {
      role: 'Assessors',
      category: 'Prepared Speech',
      topic: 'Community Leadership in Youth Sports',
    },
    '5_s-liam-taylor': {
      role: 'None',
      category: 'Other',
      topic: 'Vocal Projection & Breathing Drill Demonstration',
    },
  });

  // Cohort Milestones State (Team Competitions & 2 Star Speakers)
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

  // Facilitator assigns exactly 2 Star Speaker Candidates per cohort
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

  // Team Edit Modal State
  const [editingTeam, setEditingTeam] = useState(null);
  const [isCreatingNewTeam, setIsCreatingNewTeam] = useState(false);

  // Parent Profile Info
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

  const activeBatch = batches.find((b) => b.id === selectedBatchId) || batches[1];
  const activeSessionMeta = MASTER_SESSIONS.find((s) => s.num === selectedSessionNum) || MASTER_SESSIONS[4];
  const currentGoogleNotesUrl = sessionNotesLinks[selectedSessionNum] || 'https://docs.google.com';

  const vscInfo = calculateVscStatus(facilitatorProfile.vscIssueDate);

  const getRecord = (studentId) => {
    const key = `${selectedSessionNum}_${studentId}`;
    return sessionRecords[key] || { attendance: 'present', feedback: '' };
  };

  const getStudentAssignment = (studentId) => {
    const key = `${selectedSessionNum}_${studentId}`;
    return (
      studentSessionAssignments[key] || {
        role: 'None',
        category: 'Prepared Speech',
        topic: '',
      }
    );
  };

  const handleUpdateStudentAssignment = (studentId, field, value) => {
    const key = `${selectedSessionNum}_${studentId}`;
    const current = getStudentAssignment(studentId);
    setStudentSessionAssignments((prev) => ({
      ...prev,
      [key]: {
        ...current,
        [field]: value,
      },
    }));
    triggerSavedToast(`Updated ${field} for student!`);
  };

  const handleToggleAttendance = (studentId) => {
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
  };

  const handleUpdateFeedback = (studentId, note) => {
    const key = `${selectedSessionNum}_${studentId}`;
    setSessionRecords((prev) => ({
      ...prev,
      [key]: {
        attendance: prev[key]?.attendance || 'present',
        feedback: note,
      },
    }));
  };

  const handleSaveNotesUrl = (e) => {
    e.preventDefault();
    setSessionNotesLinks((prev) => ({
      ...prev,
      [selectedSessionNum]: tempNotesUrl,
    }));
    setIsEditingNotesUrl(false);
    triggerSavedToast(`Session ${selectedSessionNum} Google Notes URL updated!`);
  };

  // MILESTONE TEAM OPERATIONS
  const handleSaveTeam = (e) => {
    e.preventDefault();
    if (!editingTeam.name.trim() || !editingTeam.topic.trim()) return;

    if (isCreatingNewTeam) {
      setMilestoneTeams((prev) => [...prev, { ...editingTeam, id: `team-${Date.now()}` }]);
      triggerSavedToast('New Milestone Team Created!');
    } else {
      setMilestoneTeams((prev) =>
        prev.map((t) => (t.id === editingTeam.id ? editingTeam : t))
      );
      triggerSavedToast('Team Details Updated!');
    }
    setEditingTeam(null);
    setIsCreatingNewTeam(false);
  };

  const handleDeleteTeam = (teamId) => {
    setMilestoneTeams((prev) => prev.filter((t) => t.id !== teamId));
    triggerSavedToast('Team Removed.');
  };

  const toggleStudentInEditingTeam = (studentId) => {
    if (!editingTeam) return;
    const currentMembers = editingTeam.members || [];
    const newMembers = currentMembers.includes(studentId)
      ? currentMembers.filter((id) => id !== studentId)
      : [...currentMembers, studentId];
    setEditingTeam({ ...editingTeam, members: newMembers });
  };

  // STAR SPEAKER OPERATIONS (Exactly 2 Candidates)
  const handleUpdateStarSpeakerCandidate = (slotNum, studentId, speechTitle) => {
    setStarSpeakerCandidates((prev) =>
      prev.map((c) =>
        c.slot === slotNum
          ? { ...c, studentId: studentId ?? c.studentId, speechTitle: speechTitle ?? c.speechTitle }
          : c
      )
    );
    triggerSavedToast(`Star Speaker Slot #${slotNum} updated!`);
  };

  const triggerSavedToast = (msg = 'Changes saved successfully!') => {
    setNotificationToast(msg);
    setTimeout(() => setNotificationToast(false), 2500);
  };

  const getStudentTeam = (studentId) => {
    return milestoneTeams.find((t) => t.members.includes(studentId));
  };

  const getStudentStarSpeakerCandidacy = (studentId) => {
    return starSpeakerCandidates.find((c) => c.studentId === studentId);
  };

  // Alexander Chen (Single logged-in student)
  const currentStudent = batchRoster[0];
  // My children for Parent (dynamically includes registered children)
  const myChildren = batchRoster.filter(
    (c) =>
      c.primaryGuardianPhone === parentProfile.phone ||
      c.studentId === 's-alex-chen' ||
      c.studentId === 's-maya-chen' ||
      c.primaryGuardianName.includes(parentProfile.lastName)
  );
  const activeChild = myChildren.find((c) => c.studentId === parentActiveChildId) || myChildren[0];

  return (
    <div className="min-h-screen bg-[#0d0f17] text-slate-100 flex flex-col items-center justify-start p-2 sm:p-6 font-sans antialiased selection:bg-[#5859A7] selection:text-white">
      {/* CFLI Official 4-Color Brand Ribbon */}
      <div className="w-full max-w-5xl h-1.5 rounded-full overflow-hidden flex mb-3 shadow-md">
        <div className="w-1/4 h-full bg-[#5859A7]" title="Royal Indigo #5859A7" />
        <div className="w-1/4 h-full bg-[#339CA3]" title="Teal #339CA3" />
        <div className="w-1/4 h-full bg-[#E98E30]" title="Warm Tangerine #E98E30" />
        <div className="w-1/4 h-full bg-[#FFC513]" title="Golden Yellow #FFC513" />
      </div>

      {/* Top Navigation & Role Perspective Bar */}
      <header className="w-full max-w-5xl mb-3 flex flex-wrap items-center justify-between gap-3 px-2">
        <div className="flex items-center space-x-3">
          {/* Official CFLI Logo Badge in Header */}
          <div className="bg-white rounded-2xl px-2.5 py-1.5 shadow-md shadow-[#5859A7]/20 border border-white/30 flex items-center justify-center">
            <CfliLogo variant="full" className="h-7 sm:h-8 w-auto" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-extrabold tracking-tight text-white text-base">
                CFLI <span className="text-[#339CA3]">Canada</span>
              </span>
              <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-[#339CA3]/15 text-[#339CA3] border border-[#339CA3]/30">
                Staff & Portal Verified
              </span>
            </div>
            <p className="text-xs text-slate-400">Markham Winter 2026 • Youth Leadership Operations</p>
          </div>
        </div>

        {/* Viewport Frame Toggle & Tri-Perspective Switcher */}
        <div className="flex items-center space-x-2 text-xs">
          <button
            onClick={() => setDeviceFrame(!deviceFrame)}
            className={`px-2.5 py-1.5 rounded-xl border flex items-center space-x-1.5 transition-all font-medium ${
              deviceFrame
                ? 'bg-[#5859A7] text-white border-[#5859A7] shadow-sm'
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Phone:</span>
            <span className="font-bold">{deviceFrame ? 'ON' : 'OFF'}</span>
          </button>

          {/* 5-Way Perspective Switcher: Gateway, Admin, Facilitator, Parent, Student */}
          <div className="bg-slate-900 border border-slate-800 p-1 rounded-xl flex items-center space-x-1 overflow-x-auto">
            <button
              onClick={() => setActiveRolePerspective('gateway')}
              className={`px-2.5 py-1 rounded-lg transition-all font-bold text-xs flex items-center space-x-1 ${
                activeRolePerspective === 'gateway'
                  ? 'bg-slate-800 text-[#FFC513] border border-[#FFC513]/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Home className="w-3 h-3 text-[#FFC513]" />
              <span className="hidden sm:inline">Gateway</span>
            </button>
            <button
              onClick={() => setActiveRolePerspective('admin')}
              className={`px-2.5 py-1 rounded-lg transition-all font-bold text-xs flex items-center space-x-1 ${
                activeRolePerspective === 'admin'
                  ? 'bg-[#FFC513] text-slate-950 font-black shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Crown className="w-3 h-3 text-slate-950" />
              <span>Admin</span>
            </button>
            <button
              onClick={() => setActiveRolePerspective('facilitator')}
              className={`px-2.5 py-1 rounded-lg transition-all font-bold text-xs ${
                activeRolePerspective === 'facilitator'
                  ? 'bg-[#5859A7] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Facilitator
            </button>
            <button
              onClick={() => setActiveRolePerspective('parent')}
              className={`px-2.5 py-1 rounded-lg transition-all font-bold text-xs ${
                activeRolePerspective === 'parent'
                  ? 'bg-[#E98E30] text-slate-950 shadow-sm font-extrabold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Parent
            </button>
            <button
              onClick={() => setActiveRolePerspective('student')}
              className={`px-2.5 py-1 rounded-lg transition-all font-bold text-xs ${
                activeRolePerspective === 'student'
                  ? 'bg-[#339CA3] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Student
            </button>
          </div>
        </div>
      </header>

      {/* Main Viewport Container */}
      <main
        className={`w-full transition-all duration-300 ${
          deviceFrame
            ? 'max-w-md bg-[#121520] border-[6px] border-slate-800 rounded-[44px] shadow-2xl shadow-[#5859A7]/15 overflow-hidden relative min-h-[860px] flex flex-col justify-between'
            : 'max-w-4xl bg-[#121520] border border-slate-800 rounded-3xl shadow-xl overflow-hidden flex flex-col justify-between'
        }`}
      >
        {/* Phone Notch & Status bar */}
        {deviceFrame && (
          <div className="w-full bg-[#121520] pt-3 pb-2 px-6 flex items-center justify-between text-[11px] font-semibold text-slate-400 border-b border-slate-900 select-none">
            <span>9:41</span>
            <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto" />
            <div className="flex items-center space-x-1.5">
              <span className="text-[10px] text-[#339CA3] font-bold">5G</span>
              <div className="w-5 h-2.5 border border-slate-400 rounded-sm p-0.5 flex items-center">
                <div className="w-full h-full bg-[#339CA3] rounded-sm" />
              </div>
            </div>
          </div>
        )}

        {/* Notification Toast */}
        {notificationToast && (
          <div className="mx-4 mt-2 p-2 bg-[#339CA3]/20 border border-[#339CA3]/50 rounded-xl text-center text-xs font-bold text-[#339CA3] flex items-center justify-center space-x-2 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-[#FFC513]" />
            <span>{notificationToast}</span>
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* PERSPECTIVE MASTER: ROLE GATEWAY & JOURNEY SELECTOR               */}
        {/* ----------------------------------------------------------------- */}
        {activeRolePerspective === 'gateway' && (
          <div className="flex-1 flex flex-col justify-between p-5 space-y-4 overflow-y-auto">
            {/* Header / Hero with Prominent CFLI Logo Card */}
            <div className="text-center space-y-2 pt-1">
              <div className="flex justify-center">
                <CfliLogoCard className="max-w-[280px] sm:max-w-xs shadow-2xl shadow-black/50" size="large" />
              </div>

              <div className="pt-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#339CA3] block">
                  Youth Leadership & Speech Programs
                </span>
                <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  CFLI Canada <span className="text-[#FFC513]">Portal</span>
                </h1>
                <p className="text-xs text-slate-400 max-w-xs mx-auto mt-1">
                  Choose your role below to access your custom dashboard and start your journey.
                </p>
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-[10px] text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Winter 2026 Term Active</span>
                <span className="text-slate-600">•</span>
                <span className="text-[#339CA3] font-bold">Markham 1–5</span>
              </div>
            </div>

            {/* 4 Interactive Role Gateways */}
            <div className="space-y-3 flex-1 py-1">
              {/* 1. PARENTS & GUARDIANS */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-[#E98E30]/15 border border-[#E98E30]/40 p-4 hover:border-[#E98E30] transition-all shadow-md">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#E98E30]/20 text-[#E98E30] border border-[#E98E30]/40 flex items-center justify-center shadow-inner">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <h2 className="text-sm font-black text-white">Parents & Guardians</h2>
                        <span className="px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-[#E98E30]/20 text-[#E98E30]">
                          Family Hub
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Enrol your child, track attendance, meeting roles & speech feedback.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mt-3 pt-3 border-t border-slate-800/80">
                  <button
                    onClick={() => {
                      setParentActiveTab('dashboard');
                      setActiveRolePerspective('parent');
                    }}
                    className="flex-1 py-2 px-3 bg-[#E98E30] hover:bg-amber-500 text-slate-950 font-black text-xs rounded-xl flex items-center justify-center space-x-1.5 transition-all shadow-md"
                  >
                    <span>Enter Family Portal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      setActiveRolePerspective('parent');
                      setIsRegisteringProgram(true);
                    }}
                    className="py-2 px-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs rounded-xl transition-all"
                    title="Enrol new child"
                  >
                    <span>Enrol</span>
                  </button>
                </div>
              </div>

              {/* 2. STUDENTS */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-[#339CA3]/15 border border-[#339CA3]/40 p-4 hover:border-[#339CA3] transition-all shadow-md">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#339CA3]/20 text-[#339CA3] border border-[#339CA3]/40 flex items-center justify-center shadow-inner">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <h2 className="text-sm font-black text-white">Students</h2>
                        <span className="px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-[#339CA3]/20 text-[#339CA3]">
                          My Journey
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Isolated personal journey: speech roles, milestone teams & Star Speaker badge.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-800/80">
                  <button
                    onClick={() => {
                      setStudentActiveTab('dashboard');
                      setActiveRolePerspective('student');
                    }}
                    className="w-full py-2 px-3 bg-[#339CA3] hover:bg-[#339CA3]/90 text-white font-extrabold text-xs rounded-xl flex items-center justify-center space-x-1.5 transition-all shadow-md"
                  >
                    <span>Open My Student Journey</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* 3. FACILITATORS */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-[#5859A7]/25 border border-[#5859A7]/50 p-4 hover:border-[#5859A7] transition-all shadow-md">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#5859A7]/30 text-indigo-300 border border-[#5859A7]/50 flex items-center justify-center shadow-inner">
                      <Crown className="w-5 h-5 text-[#FFC513]" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <h2 className="text-sm font-black text-white">Facilitators & Coaches</h2>
                        <span className="px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-[#5859A7]/30 text-indigo-200">
                          Classroom Hub
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        1-tap attendance, role assignments, emergency dialer & milestone setup.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-800/80">
                  <button
                    onClick={() => {
                      setFacilitatorActiveTab('dashboard');
                      setActiveRolePerspective('facilitator');
                    }}
                    className="w-full py-2 px-3 bg-[#5859A7] hover:bg-indigo-600 text-white font-extrabold text-xs rounded-xl flex items-center justify-center space-x-1.5 transition-all shadow-md"
                  >
                    <span>Access Facilitator Hub</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* 4. SUPER ADMIN */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-[#FFC513]/15 border border-[#FFC513]/40 p-4 hover:border-[#FFC513] transition-all shadow-md">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#FFC513]/20 text-[#FFC513] border border-[#FFC513]/40 flex items-center justify-center shadow-inner">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <h2 className="text-sm font-black text-white">Administrator</h2>
                        <span className="px-1.5 py-0.2 rounded-full text-[9px] font-black bg-[#FFC513] text-slate-950">
                          Full Access
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Master records, term staffing, bulk promotion engine & universal registry.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-800/80">
                  <button
                    onClick={() => {
                      setAdminActiveTab('overview');
                      setActiveRolePerspective('admin');
                    }}
                    className="w-full py-2 px-3 bg-gradient-to-r from-[#FFC513] to-amber-400 hover:opacity-95 text-slate-950 font-black text-xs rounded-xl flex items-center justify-center space-x-1.5 transition-all shadow-md"
                  >
                    <span>Launch Admin Console</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Footer Info */}
            <div className="pt-2 text-center border-t border-slate-900 text-[10px] text-slate-500">
              CFLI Portal v2.0 • Row-Level Security Protected • Richmond Hill & Markham Hubs
            </div>
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* PERSPECTIVE 0: ADMINISTRATOR CENTRAL OPERATIONS                   */}
        {/* ----------------------------------------------------------------- */}
        {activeRolePerspective === 'admin' && (
          <div className="flex-1 flex flex-col justify-between">
            {/* Admin Header with Operational Status */}
            <div className="px-5 py-3 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="w-7 h-7 bg-white rounded-lg p-0.5 shadow-sm flex items-center justify-center shrink-0">
                  <CfliLogo variant="mark" className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#FFC513] flex items-center space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>CFLI Canada Super Admin</span>
                  </span>
                  <h2 className="text-sm font-extrabold text-white flex items-center space-x-1.5">
                    <span>Administrative Control Center</span>
                    <span className="px-1.5 py-0.2 rounded-full text-[9px] bg-[#339CA3]/20 text-[#339CA3] border border-[#339CA3]/40">
                      Winter 2026 Active
                    </span>
                  </h2>
                </div>
              </div>

              <div className="flex items-center space-x-1.5">
                <button
                  onClick={() => setActiveRolePerspective('gateway')}
                  className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-[10px] font-bold flex items-center space-x-1 transition-all border border-slate-700"
                  title="Return to Master Screen"
                >
                  <Home className="w-3 h-3 text-[#FFC513]" />
                  <span>Gateway</span>
                </button>
                <span className="text-[10px] text-slate-400 font-semibold bg-slate-950 px-2 py-1 rounded-xl border border-slate-800">
                  Full Access
                </span>
              </div>
            </div>

            {/* TAB CONTENT 1: ADMIN OVERVIEW METRICS */}
            {adminActiveTab === 'overview' && (
              <div className="p-4 space-y-4 flex-1 overflow-y-auto">
                {/* 1. High-Level Operational Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-2xl space-y-1">
                    <span className="text-[9px] uppercase font-bold text-slate-400 block">Active Term</span>
                    <strong className="text-xs text-white block">Winter 2026</strong>
                    <span className="text-[10px] text-[#339CA3] font-semibold">Session 5 of 10</span>
                  </div>
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-2xl space-y-1">
                    <span className="text-[9px] uppercase font-bold text-slate-400 block">Total Cohorts</span>
                    <strong className="text-xs text-white block">10 Batches</strong>
                    <span className="text-[10px] text-[#FFC513] font-semibold">Markham 1 to 5</span>
                  </div>
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-2xl space-y-1">
                    <span className="text-[9px] uppercase font-bold text-slate-400 block">Enrolled Students</span>
                    <strong className="text-xs text-white block">{batchRoster.length * 4} Registered</strong>
                    <span className="text-[10px] text-[#339CA3] font-semibold">96% Attendance</span>
                  </div>
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-2xl space-y-1">
                    <span className="text-[9px] uppercase font-bold text-slate-400 block">Instructional Staff</span>
                    <strong className="text-xs text-white block">{facilitatorStaffList.length} Instructors</strong>
                    <span className="text-[10px] text-emerald-400 font-semibold">100% VSC Cleared</span>
                  </div>
                </div>

                {/* 2. CORE OPERATIONAL DOMAINS (Moved above Batch Student Promotion Engine) */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block px-1">
                    Core Operational Domains
                  </span>

                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      onClick={() => {
                        setAdminMasterSubTab('programs');
                        setAdminActiveTab('masters');
                      }}
                      className="p-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-2xl text-left space-y-1.5 transition-all"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#5859A7]/20 text-indigo-300 flex items-center justify-center">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-white block">Master Programs ({masterProgramsList.length})</span>
                      <p className="text-[10px] text-slate-400">YLP, YHacks, Centre Stage, YJobs, YAi</p>
                    </button>

                    <button
                      onClick={() => {
                        setAdminMasterSubTab('batches');
                        setAdminActiveTab('masters');
                      }}
                      className="p-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-2xl text-left space-y-1.5 transition-all"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#FFC513]/20 text-[#FFC513] flex items-center justify-center">
                        <Layers className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-white block">Batch Names ({masterBatchNamesList.length})</span>
                      <p className="text-[10px] text-slate-400">1A, 1B, 2A, 2B, 3A, 3B, ZZ</p>
                    </button>

                    <button
                      onClick={() => {
                        setAdminMasterSubTab('locations');
                        setAdminActiveTab('masters');
                      }}
                      className="p-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-2xl text-left space-y-1.5 transition-all"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#E98E30]/20 text-[#E98E30] flex items-center justify-center">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-white block">Locations ({masterLocationsList.length})</span>
                      <p className="text-[10px] text-slate-400">Markham 1 to 5, Virtual, Richmond</p>
                    </button>

                    <button
                      onClick={() => {
                        setAdminMasterSubTab('terms');
                        setAdminActiveTab('masters');
                      }}
                      className="p-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-2xl text-left space-y-1.5 transition-all"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#339CA3]/20 text-[#339CA3] flex items-center justify-center">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-white block">Program Terms ({masterTermsList.length})</span>
                      <p className="text-[10px] text-slate-400">Winter, Spring, Fall 2026 dates</p>
                    </button>
                  </div>
                </div>

                {/* 3. BATCH STUDENT PROMOTION ENGINE (Positioned BELOW Operational Domains) */}
                <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-[#FFC513]/15 border border-[#FFC513]/50 rounded-2xl p-4 space-y-2.5 shadow-md">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-8 h-8 rounded-xl bg-[#FFC513]/20 border border-[#FFC513]/40 text-[#FFC513] flex items-center justify-center font-bold">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-extrabold text-white">
                          Batch Student Promotion Engine
                        </h4>
                        <span className="text-[10px] text-slate-400">Advance students to Level 2, 3 or Alumni status</span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-black bg-[#FFC513] text-slate-950">
                      Term Tool
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Bulk-select students from active cohorts and promote them to the next level of their program with automated registration rollover.
                  </p>
                  <button
                    onClick={() => setAdminActiveTab('promotion')}
                    className="w-full py-2 bg-[#FFC513] hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl flex items-center justify-center space-x-1.5 transition-all shadow-md"
                  >
                    <span>Launch Promotion Engine</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* TAB CONTENT 2: BATCH STUDENT PROMOTION ENGINE */}
            {adminActiveTab === 'promotion' && (
              <div className="p-4 space-y-4 flex-1 overflow-y-auto">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-black uppercase text-[#FFC513] tracking-wider">
                      Student Progression
                    </span>
                    <h3 className="text-sm font-extrabold text-white">
                      Batch Student Promotion Engine
                    </h3>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#FFC513]/20 text-[#FFC513] border border-[#FFC513]/40">
                    Bulk Advancement
                  </span>
                </div>

                {/* Step 1: Select Source Cohort */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3.5 space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    1. Select Source Cohort to Promote
                  </label>
                  <select
                    value={promoSourceCohortId}
                    onChange={(e) => setPromoSourceCohortId(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs font-bold text-white focus:outline-none focus:ring-2 focus:ring-[#FFC513]"
                  >
                    <option value="b2">YLP - 1A Winter 2026: 2 Markham (Location: Markham 2)</option>
                    <option value="b1">YLP - 1A Winter 2026: 1 Markham (Location: Markham 1)</option>
                  </select>
                </div>

                {/* Step 2: Target Level & Target Term Configuration */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3.5 space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    2. Select Promotion Destination
                  </span>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <label className="text-[9px] font-bold uppercase text-slate-500 block mb-1">
                        Advance to Level
                      </label>
                      <select
                        value={promoTargetLevel}
                        onChange={(e) => setPromoTargetLevel(parseInt(e.target.value))}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs font-bold text-white"
                      >
                        <option value={2}>Level 2 (Intermediate)</option>
                        <option value={3}>Level 3 (Advanced Leadership)</option>
                        <option value={4}>Alumni Graduate Status</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[9px] font-bold uppercase text-slate-500 block mb-1">
                        Target Term
                      </label>
                      <select
                        value={promoTargetTerm}
                        onChange={(e) => setPromoTargetTerm(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs font-bold text-white"
                      >
                        <option value="Spring 2026">Spring 2026 (Starts Apr 11)</option>
                        <option value="Fall 2026">Fall 2026 (Starts Sep 19)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Step 3: Student Roster Selection */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center px-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      3. Select Students ({selectedStudentIdsForPromo.length} of {batchRoster.length} Selected)
                    </span>
                    <button
                      onClick={() => {
                        if (selectedStudentIdsForPromo.length === batchRoster.length) {
                          setSelectedStudentIdsForPromo([]);
                        } else {
                          setSelectedStudentIdsForPromo(batchRoster.map(s => s.studentId));
                        }
                      }}
                      className="text-xs text-[#339CA3] font-bold hover:underline"
                    >
                      {selectedStudentIdsForPromo.length === batchRoster.length ? 'Deselect All' : 'Select All'}
                    </button>
                  </div>

                  <div className="space-y-2">
                    {batchRoster.map((student) => {
                      const isSelected = selectedStudentIdsForPromo.includes(student.studentId);
                      return (
                        <div
                          key={student.studentId}
                          onClick={() => {
                            setSelectedStudentIdsForPromo(prev =>
                              isSelected ? prev.filter(id => id !== student.studentId) : [...prev, student.studentId]
                            );
                          }}
                          className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? 'bg-[#5859A7]/25 border-[#5859A7] text-white shadow-sm'
                              : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                              isSelected ? 'bg-[#FFC513] border-[#FFC513] text-slate-950 font-bold' : 'border-slate-600'
                            }`}>
                              {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white">
                                {student.firstName} {student.lastName}
                              </div>
                              <span className="text-[10px] text-slate-400">
                                Grade {student.grade} • Current: Level 1 • DOB: {student.dob}
                              </span>
                            </div>
                          </div>

                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#339CA3]/20 text-[#339CA3] border border-[#339CA3]/40">
                            Eligible
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <button
                  disabled={selectedStudentIdsForPromo.length === 0}
                  onClick={() => setShowPromotionConfirmationModal(true)}
                  className={`w-full py-3 rounded-xl font-extrabold text-xs flex items-center justify-center space-x-2 transition-all shadow-lg ${
                    selectedStudentIdsForPromo.length > 0
                      ? 'bg-gradient-to-r from-[#FFC513] to-[#E98E30] text-slate-950 hover:opacity-95'
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  <Award className="w-4 h-4" />
                  <span>Execute Bulk Promotion for {selectedStudentIdsForPromo.length} Students</span>
                </button>
              </div>
            )}

            {/* TAB CONTENT 3: MASTER RECORDS MANAGEMENT (Program = Name + Batch Name + Term + Location) */}
            {adminActiveTab === 'masters' && (
              <div className="p-4 space-y-4 flex-1 overflow-y-auto">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-[10px] font-black uppercase text-[#FFC513] tracking-wider">
                      Master Configuration
                    </span>
                    <h3 className="text-sm font-extrabold text-white">
                      Master Records Management
                    </h3>
                  </div>
                  <span className="text-[10px] text-amber-300 font-semibold bg-amber-950/30 px-2 py-0.5 rounded-lg border border-amber-600/40">
                    Protected Tables
                  </span>
                </div>

                {/* Sub-Switch: Programs, Batch Names, Terms, Locations, Calendar */}
                <div className="bg-slate-950 p-1 border border-slate-800 rounded-2xl flex space-x-1 overflow-x-auto scrollbar-thin">
                  <button
                    onClick={() => setAdminMasterSubTab('programs')}
                    className={`py-1.5 px-2.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
                      adminMasterSubTab === 'programs' ? 'bg-[#5859A7] text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Programs ({masterProgramsList.length})
                  </button>
                  <button
                    onClick={() => setAdminMasterSubTab('batches')}
                    className={`py-1.5 px-2.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
                      adminMasterSubTab === 'batches' ? 'bg-[#5859A7] text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Batch Names ({masterBatchNamesList.length})
                  </button>
                  <button
                    onClick={() => setAdminMasterSubTab('locations')}
                    className={`py-1.5 px-2.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
                      adminMasterSubTab === 'locations' ? 'bg-[#5859A7] text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Locations ({masterLocationsList.length})
                  </button>
                  <button
                    onClick={() => setAdminMasterSubTab('terms')}
                    className={`py-1.5 px-2.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
                      adminMasterSubTab === 'terms' ? 'bg-[#5859A7] text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Terms ({masterTermsList.length})
                  </button>
                  <button
                    onClick={() => setAdminMasterSubTab('calendar')}
                    className={`py-1.5 px-2.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
                      adminMasterSubTab === 'calendar' ? 'bg-[#5859A7] text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Calendar (10)
                  </button>
                </div>

                {/* ARCHITECTURAL FORMULA BANNER */}
                <div className="p-3 bg-gradient-to-r from-slate-950 via-slate-900 to-[#5859A7]/20 rounded-2xl border border-slate-800 space-y-1">
                  <span className="text-[9px] font-black uppercase text-[#339CA3] tracking-widest block">
                    CFLI Program Formulation
                  </span>
                  <div className="text-xs font-bold text-white flex flex-wrap items-center gap-1.5">
                    <span className="text-indigo-300">Program Name</span>
                    <span className="text-slate-500">+</span>
                    <span className="text-[#FFC513]">Batch Name</span>
                    <span className="text-slate-500">+</span>
                    <span className="text-[#339CA3]">Term</span>
                    <span className="text-slate-500">+</span>
                    <span className="text-[#E98E30]">Location</span>
                  </div>
                  <p className="text-[10px] text-slate-400">
                    Example: YLP + 1A + Winter 2026 + Markham 2 = <strong className="text-white">YLP - 1A Winter 2026: 2 Markham</strong>
                  </p>
                </div>

                {/* SUB-SECTION 1: PROGRAMS */}
                {adminMasterSubTab === 'programs' && (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center px-1">
                      <span className="text-xs text-slate-400">Master Program Entities</span>
                      <button
                        onClick={() => setEditingProgramModal({ id: `p-${Date.now()}`, code: '', name: '', description: '', active: true, isNew: true })}
                        className="py-1 px-2.5 bg-[#339CA3] text-white text-xs font-bold rounded-xl flex items-center space-x-1"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add Program</span>
                      </button>
                    </div>

                    <div className="space-y-2.5">
                      {masterProgramsList.map((prog) => (
                        <div key={prog.id} className="p-3.5 bg-slate-900 border border-slate-800 rounded-2xl space-y-1.5">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                              <span className="px-2 py-0.5 rounded-lg text-[10px] font-black bg-[#5859A7]/30 text-indigo-300 border border-[#5859A7]/50">
                                {prog.code}
                              </span>
                              <h4 className="text-xs font-bold text-white">{prog.name}</h4>
                            </div>
                            <button
                              onClick={() => setEditingProgramModal({ ...prog })}
                              className="p-1 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg"
                            >
                              <Pencil className="w-3.5 h-3.5 text-[#FFC513]" />
                            </button>
                          </div>
                          <p className="text-[11px] text-slate-400">{prog.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* SUB-SECTION 2: BATCH NAMES (NEW TABLE) */}
                {adminMasterSubTab === 'batches' && (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center px-1">
                      <span className="text-xs text-slate-400">Master Batch Names & Cohort Codes</span>
                      <button
                        onClick={() => setEditingBatchNameModal({ id: `bn-${Date.now()}`, code: '', name: '', level: 1, description: '', isNew: true })}
                        className="py-1 px-2.5 bg-[#339CA3] text-white text-xs font-bold rounded-xl flex items-center space-x-1"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add Batch Name</span>
                      </button>
                    </div>

                    <div className="space-y-2.5">
                      {masterBatchNamesList.map((bn) => (
                        <div key={bn.id} className="p-3 bg-slate-900 border border-slate-800 rounded-2xl space-y-1">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                              <span className="px-2 py-0.5 rounded-md text-[10px] font-black bg-[#FFC513]/20 text-[#FFC513] border border-[#FFC513]/40">
                                {bn.code}
                              </span>
                              <h4 className="text-xs font-bold text-white">{bn.name}</h4>
                              <span className="text-[10px] text-slate-400">Level {bn.level}</span>
                            </div>
                            <button
                              onClick={() => setEditingBatchNameModal({ ...bn })}
                              className="p-1 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg"
                            >
                              <Pencil className="w-3.5 h-3.5 text-[#FFC513]" />
                            </button>
                          </div>
                          <p className="text-[11px] text-slate-400">{bn.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* SUB-SECTION 3: LOCATIONS (Markham 1, 2, 3, 4, 5) */}
                {adminMasterSubTab === 'locations' && (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center px-1">
                      <span className="text-xs text-slate-400">Teaching Locations (5 Markham Hubs)</span>
                      <button
                        onClick={() => setEditingLocationModal({ id: `loc-${Date.now()}`, code: '', name: '', address: '', city: 'Markham', isNew: true })}
                        className="py-1 px-2.5 bg-[#339CA3] text-white text-xs font-bold rounded-xl flex items-center space-x-1"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add Location</span>
                      </button>
                    </div>

                    <div className="space-y-2.5">
                      {masterLocationsList.map((loc) => (
                        <div key={loc.id} className="p-3.5 bg-slate-900 border border-slate-800 rounded-2xl space-y-1">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                              <MapPin className="w-3.5 h-3.5 text-[#E98E30]" />
                              <h4 className="text-xs font-bold text-white">{loc.name}</h4>
                              {loc.name.startsWith('Markham') && (
                                <span className="px-1.5 py-0.2 rounded text-[9px] font-black bg-[#E98E30]/20 text-[#E98E30]">
                                  Sub-Location
                                </span>
                              )}
                            </div>
                            <button
                              onClick={() => setEditingLocationModal({ ...loc })}
                              className="p-1 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg"
                            >
                              <Pencil className="w-3.5 h-3.5 text-[#FFC513]" />
                            </button>
                          </div>
                          <p className="text-[11px] text-slate-400">{loc.address}, {loc.city}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* SUB-SECTION 4: TERMS */}
                {adminMasterSubTab === 'terms' && (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center px-1">
                      <span className="text-xs text-slate-400">Seasonal Program Cycles</span>
                    </div>

                    <div className="space-y-2.5">
                      {masterTermsList.map((term) => (
                        <div key={term.id} className="p-3.5 bg-slate-900 border border-slate-800 rounded-2xl space-y-1.5">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                              <h4 className="text-xs font-bold text-white">{term.name}</h4>
                              {term.isCurrent && (
                                <span className="px-2 py-0.5 rounded-full text-[9px] font-black bg-[#339CA3]/20 text-[#339CA3] border border-[#339CA3]/40">
                                  Current Term
                                </span>
                              )}
                            </div>
                          </div>
                          <p className="text-[11px] text-slate-400">
                            {term.startDate} to {term.endDate} • Season: {term.season} {term.year}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* SUB-SECTION 5: PROGRAM CALENDAR */}
                {adminMasterSubTab === 'calendar' && (
                  <div className="space-y-3">
                    <div className="space-y-2">
                      {masterProgramCalendar.map((sess) => (
                        <div key={sess.num} className="p-3 bg-slate-900 border border-slate-800 rounded-2xl space-y-1">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                              <span className="w-6 h-6 rounded-lg bg-[#5859A7]/20 border border-[#5859A7]/40 text-indigo-300 flex items-center justify-center font-bold text-xs">
                                {sess.num}
                              </span>
                              <h4 className="text-xs font-bold text-white">{sess.topic}</h4>
                            </div>
                          </div>
                          <p className="text-[11px] text-slate-400">Date: {sess.date} • Notes: {sess.notes}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB CONTENT 4: FACILITATOR COHORT STAFFING (Current vs. Upcoming Term & Mid-Term Changes) */}
            {adminActiveTab === 'staffing' && (
              <div className="p-4 space-y-4 flex-1 overflow-y-auto">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-black uppercase text-[#FFC513] tracking-wider">
                      Staffing Operations
                    </span>
                    <h3 className="text-sm font-extrabold text-white">
                      Facilitator Term & Cohort Assignments
                    </h3>
                  </div>
                  <span className="text-[10px] text-[#339CA3] font-semibold bg-[#339CA3]/10 px-2 py-0.5 rounded-lg border border-[#339CA3]/30">
                    Live Assignment Engine
                  </span>
                </div>

                <div className="p-3 bg-slate-900 border border-slate-800 rounded-2xl space-y-1 text-xs">
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Active Current Term: <strong className="text-white">Winter 2026</strong></span>
                    <span>Planning Upcoming Term: <strong className="text-[#339CA3]">Spring 2026</strong></span>
                  </div>
                  <p className="text-[10px] text-slate-400">
                    Manage where facilitators are currently teaching and schedule upcoming term cohorts or execute mid-term shifts.
                  </p>
                </div>

                {/* Facilitator Staff List */}
                <div className="space-y-3">
                  {facilitatorStaffList.map((fac) => (
                    <div key={fac.id} className="p-3.5 bg-slate-900 border border-slate-800 rounded-2xl space-y-2.5">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center space-x-1.5">
                            <h4 className="text-xs font-extrabold text-white">{fac.name}</h4>
                            <BadgeCheck className="w-3.5 h-3.5 text-[#339CA3]" />
                          </div>
                          <p className="text-[10px] text-slate-400">{fac.phone} • {fac.email}</p>
                        </div>
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#339CA3]/20 text-[#339CA3] border border-[#339CA3]/40">
                          {fac.currentAssignment.role}
                        </span>
                      </div>

                      {/* Dual Assignment Box: Current Term vs Upcoming Term */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {/* Current Term Box */}
                        <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                          <div className="flex justify-between items-center">
                            <span className="text-[9px] uppercase font-bold text-slate-400 block">
                              Current: Winter 2026
                            </span>
                            <span className="text-[9px] text-emerald-400 font-bold">On-Duty</span>
                          </div>
                          <div className="text-xs font-bold text-white truncate">
                            {fac.currentAssignment.batchCode}
                          </div>
                          <div className="flex justify-between items-center pt-1 border-t border-slate-900 text-[10px] text-slate-400">
                            <span>Hub: {fac.currentAssignment.location}</span>
                            <button
                              onClick={() => setMidTermChangeModal({ ...fac })}
                              className="text-amber-400 hover:underline font-bold flex items-center space-x-0.5"
                            >
                              <RefreshCw className="w-2.5 h-2.5" />
                              <span>Mid-Term Change</span>
                            </button>
                          </div>
                        </div>

                        {/* Upcoming Term Box */}
                        <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                          <div className="flex justify-between items-center">
                            <span className="text-[9px] uppercase font-bold text-[#FFC513] block">
                              Upcoming: Spring 2026
                            </span>
                            <span className={`text-[9px] font-bold ${fac.upcomingAssignment.status === 'Assigned' ? 'text-[#339CA3]' : 'text-slate-500'}`}>
                              {fac.upcomingAssignment.status}
                            </span>
                          </div>
                          <div className="text-xs font-bold text-white truncate">
                            {fac.upcomingAssignment.batchCode}
                          </div>
                          <div className="flex justify-between items-center pt-1 border-t border-slate-900 text-[10px] text-slate-400">
                            <span>Hub: {fac.upcomingAssignment.location}</span>
                            <button
                              onClick={() => setUpcomingTermAssignModal({ ...fac })}
                              className="text-indigo-400 hover:underline font-bold flex items-center space-x-0.5"
                            >
                              <Pencil className="w-2.5 h-2.5" />
                              <span>{fac.upcomingAssignment.status === 'Assigned' ? 'Edit Upcoming' : 'Assign Cohort'}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB CONTENT 5: STUDENT & PARENT REGISTRY */}
            {adminActiveTab === 'students' && (
              <div className="p-4 space-y-4 flex-1 overflow-y-auto">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-[10px] font-black uppercase text-[#FFC513] tracking-wider">
                      Master Registry
                    </span>
                    <h3 className="text-sm font-extrabold text-white">
                      Students & Enrolments
                    </h3>
                  </div>
                  <span className="text-xs text-slate-400 font-semibold">{batchRoster.length} Records</span>
                </div>

                <input
                  type="text"
                  placeholder="Search student, parent, or city..."
                  value={adminSearchTerm}
                  onChange={(e) => setAdminSearchTerm(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#5859A7]"
                />

                <div className="space-y-3">
                  {batchRoster
                    .filter((s) =>
                      `${s.firstName} ${s.lastName} ${s.city}`.toLowerCase().includes(adminSearchTerm.toLowerCase())
                    )
                    .map((student) => (
                      <div key={student.studentId} className="p-3.5 bg-slate-900 border border-slate-800 rounded-2xl space-y-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-xs font-bold text-white">
                              {student.firstName} {student.lastName}
                            </h4>
                            <p className="text-[10px] text-slate-400">
                              Grade {student.grade} • DOB: {student.dob} • {student.city} ({student.postalCode})
                            </p>
                          </div>
                          <button
                            onClick={() => setEditingChild(student)}
                            className="p-1 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg"
                            title="Edit Student Record"
                          >
                            <Pencil className="w-3.5 h-3.5 text-[#FFC513]" />
                          </button>
                        </div>

                        <div className="p-2 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                          <span>Primary Guardian: <strong>{student.primaryGuardianName}</strong></span>
                          <span className="text-[#339CA3]">{student.primaryGuardianPhone}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* PERSISTENT ADMIN 5-TAB MOBILE BOTTOM NAVIGATION BAR */}
            <nav className="bg-slate-950 border-t border-slate-800 px-3 py-2 flex items-center justify-around text-xs font-semibold select-none">
              <button
                onClick={() => setAdminActiveTab('overview')}
                className={`flex flex-col items-center space-y-1 transition-colors ${
                  adminActiveTab === 'overview' ? 'text-[#FFC513]' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span className="text-[9px] font-bold">Overview</span>
              </button>

              <button
                onClick={() => setAdminActiveTab('staffing')}
                className={`flex flex-col items-center space-y-1 transition-colors ${
                  adminActiveTab === 'staffing' ? 'text-[#5859A7]' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Users className="w-4 h-4" />
                <span className="text-[9px] font-bold">Staffing</span>
              </button>

              <button
                onClick={() => setAdminActiveTab('promotion')}
                className={`flex flex-col items-center space-y-1 transition-colors ${
                  adminActiveTab === 'promotion' ? 'text-[#FFC513]' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Award className="w-4 h-4" />
                <span className="text-[9px] font-black">Promotion</span>
              </button>

              <button
                onClick={() => setAdminActiveTab('masters')}
                className={`flex flex-col items-center space-y-1 transition-colors ${
                  adminActiveTab === 'masters' ? 'text-[#339CA3]' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span className="text-[9px] font-bold">Masters</span>
              </button>

              <button
                onClick={() => setAdminActiveTab('students')}
                className={`flex flex-col items-center space-y-1 transition-colors ${
                  adminActiveTab === 'students' ? 'text-[#E98E30]' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span className="text-[9px] font-bold">Registry</span>
              </button>
            </nav>
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* PERSPECTIVE 1: FACILITATOR OPERATIONS & MILESTONES HUB             */}
        {/* ----------------------------------------------------------------- */}
        {activeRolePerspective === 'facilitator' && (
          <div className="flex-1 flex flex-col justify-between">
            {/* Contextual Header with Return to Facilitator Dashboard */}
            <div className="px-5 py-3 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 flex items-center justify-between">
              {facilitatorActiveTab !== 'dashboard' ? (
                <button
                  onClick={() => setFacilitatorActiveTab('dashboard')}
                  className="flex items-center space-x-1.5 text-xs font-bold text-[#5859A7] hover:text-indigo-300 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Hub Dashboard</span>
                </button>
              ) : (
                <div className="flex items-center space-x-2.5">
                  <div className="w-7 h-7 bg-white rounded-lg p-0.5 shadow-sm flex items-center justify-center shrink-0">
                    <CfliLogo variant="mark" className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#FFC513]">
                      Facilitator Operations
                    </span>
                    <h2 className="text-sm font-bold text-white flex items-center space-x-1.5">
                      <span>{facilitatorProfile.firstName} {facilitatorProfile.lastName}</span>
                      <BadgeCheck className="w-4 h-4 text-[#339CA3]" />
                    </h2>
                  </div>
                </div>
              )}

              <div className="flex items-center space-x-1.5">
                <button
                  onClick={() => setActiveRolePerspective('gateway')}
                  className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-[10px] font-bold flex items-center space-x-1 transition-all border border-slate-700"
                  title="Return to Master Screen"
                >
                  <Home className="w-3 h-3 text-[#FFC513]" />
                  <span>Gateway</span>
                </button>

                <button
                  onClick={() => setShowCoFacilitatorsModal(true)}
                  className="px-2.5 py-1 bg-[#5859A7]/20 hover:bg-[#5859A7]/40 border border-[#5859A7]/40 rounded-xl text-xs font-bold text-indigo-300 flex items-center space-x-1 transition-all"
                  title="View Assigned Team"
                >
                  <Users className="w-3.5 h-3.5 text-[#FFC513]" />
                  <span>Team ({activeBatch.facilitators.length})</span>
                </button>

                <button
                  onClick={() => setIsEditingFacilitatorProfile(true)}
                  className="px-2.5 py-1 bg-[#5859A7] hover:bg-indigo-600 text-white rounded-xl text-xs font-bold flex items-center space-x-1 transition-all shadow-sm"
                  title="Staff Profile & VSC"
                >
                  <Pencil className="w-3 h-3 text-[#FFC513]" />
                  <span>Edit Profile</span>
                </button>
              </div>
            </div>

            {/* TAB CONTENT: FACILITATOR DASHBOARD (HOME OVERVIEW) */}
            {facilitatorActiveTab === 'dashboard' && (
              <div className="p-4 space-y-4 flex-1 overflow-y-auto">
                {/* Facilitator Status Banner Card */}
                <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-[#5859A7]/30 border border-slate-800 rounded-2xl p-4 flex items-center justify-between shadow-sm">
                  <div className="flex items-start space-x-3">
                    <div className="relative">
                      {facilitatorProfile.photoUrl ? (
                        <img
                          src={facilitatorProfile.photoUrl}
                          alt={`${facilitatorProfile.firstName} ${facilitatorProfile.lastName}`}
                          className="w-12 h-12 rounded-2xl object-cover ring-2 ring-[#5859A7]/50 shadow-md"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-2xl bg-[#5859A7]/30 border border-[#5859A7]/50 text-indigo-200 flex items-center justify-center font-bold text-sm">
                          {facilitatorProfile.firstName[0]}{facilitatorProfile.lastName[0]}
                        </div>
                      )}
                      <span className="absolute -bottom-1 -right-1 p-0.5 rounded-full bg-[#339CA3] text-slate-950 border border-slate-900">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center space-x-1.5">
                        <h3 className="font-extrabold text-white text-sm">
                          {facilitatorProfile.firstName} {facilitatorProfile.lastName}
                        </h3>
                        <span className="px-1.5 py-0.5 rounded-full text-[9px] font-black bg-[#FFC513]/20 text-[#FFC513] border border-[#FFC513]/40">
                          {facilitatorProfile.role}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">{facilitatorProfile.phone}</p>
                      
                      <div className="flex items-center space-x-1.5 mt-2">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border flex items-center space-x-1 ${vscInfo.badgeClass}`}>
                          <ShieldCheck className="w-3 h-3" />
                          <span>VSC: {vscInfo.statusLabel}</span>
                        </span>
                        <span className="text-[10px] text-slate-400 font-semibold">
                          • {facilitatorProfile.tenureTerms} Terms Served
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setFacilitatorActiveTab('profile')}
                    className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-all"
                  >
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </button>
                </div>

                {/* Active Batch Selection & Cohort Stats Card */}
                <div className="bg-slate-900/95 border border-slate-800 rounded-2xl p-3.5 space-y-2.5">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    <span>Active Cohort</span>
                    <span className="text-[#339CA3] font-semibold">
                      {activeBatch.facilitators.length} Instructors On-Duty
                    </span>
                  </div>
                  <select
                    value={selectedBatchId}
                    onChange={(e) => setSelectedBatchId(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs font-bold text-white focus:outline-none focus:ring-2 focus:ring-[#5859A7]"
                  >
                    <option value="b2">YLP - 1A Winter 2026: 2 Markham (Location: Markham 2)</option>
                    <option value="b1">YLP - 1A Winter 2026: 1 Markham (Location: Markham 1)</option>
                  </select>
                </div>

                {/* 1. Classroom Operations Navigation Grid */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block px-1">
                    Classroom Operations
                  </span>

                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      onClick={() => setFacilitatorActiveTab('roles')}
                      className="p-3.5 bg-slate-900 hover:bg-slate-800/90 border border-slate-800 rounded-2xl text-left space-y-2 transition-all group"
                    >
                      <div className="w-8 h-8 rounded-xl bg-[#FFC513]/15 text-[#FFC513] flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Crown className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white flex items-center justify-between">
                          <span>Roles & Tasks</span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white" />
                        </div>
                        <span className="text-[10px] text-slate-400 block mt-0.5">
                          Meeting roles & 4 speech categories
                        </span>
                      </div>
                    </button>

                    <button
                      onClick={() => setFacilitatorActiveTab('attendance')}
                      className="p-3.5 bg-slate-900 hover:bg-slate-800/90 border border-slate-800 rounded-2xl text-left space-y-2 transition-all group"
                    >
                      <div className="w-8 h-8 rounded-xl bg-[#339CA3]/15 text-[#339CA3] flex items-center justify-center group-hover:scale-105 transition-transform">
                        <UserCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white flex items-center justify-between">
                          <span>Attendance</span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white" />
                        </div>
                        <span className="text-[10px] text-slate-400 block mt-0.5">
                          1-tap check-in & feedback notes
                        </span>
                      </div>
                    </button>

                    <button
                      onClick={() => setFacilitatorActiveTab('roster')}
                      className="p-3.5 bg-slate-900 hover:bg-slate-800/90 border border-slate-800 rounded-2xl text-left space-y-2 transition-all group"
                    >
                      <div className="w-8 h-8 rounded-xl bg-[#E98E30]/15 text-[#E98E30] flex items-center justify-center group-hover:scale-105 transition-transform">
                        <PhoneCall className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white flex items-center justify-between">
                          <span>Safety Roster</span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white" />
                        </div>
                        <span className="text-[10px] text-slate-400 block mt-0.5">
                          Dual emergency quick dialing
                        </span>
                      </div>
                    </button>

                    <button
                      onClick={() => setShowCoFacilitatorsModal(true)}
                      className="p-3.5 bg-slate-900 hover:bg-slate-800/90 border border-slate-800 rounded-2xl text-left space-y-2 transition-all group"
                    >
                      <div className="w-8 h-8 rounded-xl bg-[#5859A7]/25 text-indigo-300 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Users className="w-4 h-4 text-[#FFC513]" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white flex items-center justify-between">
                          <span>Team Directory</span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white" />
                        </div>
                        <span className="text-[10px] text-slate-400 block mt-0.5">
                          {activeBatch.facilitators.length} Co-Facilitators on batch
                        </span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* 2. Milestones Setup Hub Card */}
                <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-[#FFC513]/15 border border-[#FFC513]/50 rounded-2xl p-4 space-y-3 shadow-md">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-xl bg-[#FFC513]/20 text-[#FFC513] flex items-center justify-center font-bold">
                        <Trophy className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-extrabold text-white">
                          Milestones Setup Hub
                        </h4>
                        <span className="text-[10px] text-slate-400">Team Competitions & Star Speaker Slots</span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-[#FFC513]/20 text-[#FFC513] border border-[#FFC513]/40">
                      Term Setup
                    </span>
                  </div>

                  <p className="text-xs text-slate-300">
                    Organize your cohort into competition teams, assign debate/speech topics, and nominate the 2 Star Speaker candidates. No feedback required.
                  </p>

                  <div className="flex space-x-2 pt-1">
                    <button
                      onClick={() => {
                        setFacilitatorMilestoneSubTab('teams');
                        setFacilitatorActiveTab('milestones');
                      }}
                      className="flex-1 py-1.5 px-2 bg-[#339CA3]/20 hover:bg-[#339CA3]/30 border border-[#339CA3]/40 text-[#339CA3] rounded-xl text-xs font-bold flex items-center justify-center space-x-1"
                    >
                      <Users className="w-3.5 h-3.5" />
                      <span>Manage Teams ({milestoneTeams.length})</span>
                    </button>
                    <button
                      onClick={() => {
                        setFacilitatorMilestoneSubTab('starspeaker');
                        setFacilitatorActiveTab('milestones');
                      }}
                      className="flex-1 py-1.5 px-2 bg-[#FFC513]/20 hover:bg-[#FFC513]/30 border border-[#FFC513]/40 text-[#FFC513] rounded-xl text-xs font-bold flex items-center justify-center space-x-1"
                    >
                      <Star className="w-3.5 h-3.5" />
                      <span>2 Star Speakers</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: FACILITATOR MILESTONES */}
            {facilitatorActiveTab === 'milestones' && (
              <div className="p-4 space-y-4 flex-1 overflow-y-auto">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-[10px] font-black uppercase text-[#FFC513] tracking-wider">
                      Term Competitions Setup
                    </span>
                    <h3 className="text-sm font-extrabold text-white">Cohort Milestones Setup</h3>
                  </div>
                  <span className="text-[10px] text-slate-400 font-semibold bg-slate-900 px-2.5 py-1 rounded-xl border border-slate-800">
                    No Feedback Required
                  </span>
                </div>

                <div className="bg-slate-950 p-1 border border-slate-800 rounded-2xl flex space-x-1">
                  <button
                    onClick={() => setFacilitatorMilestoneSubTab('teams')}
                    className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center space-x-1.5 ${
                      facilitatorMilestoneSubTab === 'teams' ? 'bg-[#339CA3] text-white' : 'text-slate-400'
                    }`}
                  >
                    <Users className="w-3.5 h-3.5" />
                    <span>Cohort Teams ({milestoneTeams.length})</span>
                  </button>
                  <button
                    onClick={() => setFacilitatorMilestoneSubTab('starspeaker')}
                    className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center space-x-1.5 ${
                      facilitatorMilestoneSubTab === 'starspeaker' ? 'bg-[#FFC513] text-slate-950 font-black' : 'text-slate-400'
                    }`}
                  >
                    <Trophy className="w-3.5 h-3.5" />
                    <span>2 Star Speakers</span>
                  </button>
                </div>

                {facilitatorMilestoneSubTab === 'teams' && (
                  <div className="space-y-3">
                    {milestoneTeams.map((team, idx) => (
                      <div key={team.id} className="p-3 bg-slate-900 border border-slate-800 rounded-2xl space-y-2">
                        <div className="flex justify-between items-center">
                          <h4 className="text-xs font-bold text-white">{team.name}</h4>
                          <span className="text-[10px] text-slate-400">{team.members.length} members</span>
                        </div>
                        <p className="text-xs text-[#FFC513] font-medium">"{team.topic}"</p>
                      </div>
                    ))}
                  </div>
                )}

                {facilitatorMilestoneSubTab === 'starspeaker' && (
                  <div className="space-y-3">
                    {starSpeakerCandidates.map((cand) => (
                      <div key={cand.slot} className="p-3 bg-slate-900 border border-[#FFC513]/40 rounded-2xl space-y-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-black bg-[#FFC513] text-slate-950">
                          Star Speaker Slot #{cand.slot}
                        </span>
                        <div className="text-xs font-bold text-white">Title: {cand.speechTitle}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TAB CONTENT: FACILITATOR ROLES */}
            {facilitatorActiveTab === 'roles' && (
              <div className="p-4 space-y-3.5 flex-1 overflow-y-auto">
                <div className="flex justify-between items-center px-1">
                  <span className="text-xs font-bold text-white">Session {selectedSessionNum} Assignments</span>
                  <span className="text-[10px] text-[#339CA3]">Live Sync</span>
                </div>
                <div className="space-y-2.5">
                  {batchRoster.map((student) => {
                    const asg = getStudentAssignment(student.studentId);
                    return (
                      <div key={student.studentId} className="p-3 bg-slate-900 border border-slate-800 rounded-2xl space-y-1.5">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-bold text-white">{student.firstName} {student.lastName}</span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#FFC513]/20 text-[#FFC513]">
                            {asg.role}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-400">Category: {asg.category}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TAB CONTENT: FACILITATOR ATTENDANCE */}
            {facilitatorActiveTab === 'attendance' && (
              <div className="p-4 space-y-3.5 flex-1 overflow-y-auto">
                <div className="flex justify-between items-center px-1">
                  <span className="text-xs font-bold text-white">Session {selectedSessionNum} Attendance</span>
                  <button
                    onClick={() => {
                      const updates = {};
                      batchRoster.forEach((s) => {
                        const key = `${selectedSessionNum}_${s.studentId}`;
                        updates[key] = { attendance: 'present', feedback: sessionRecords[key]?.feedback || '' };
                      });
                      setSessionRecords((prev) => ({ ...prev, ...updates }));
                      triggerSavedToast('All marked present!');
                    }}
                    className="text-xs bg-[#339CA3]/20 text-[#339CA3] font-bold px-2 py-0.5 rounded-lg"
                  >
                    Mark All Present
                  </button>
                </div>
                <div className="space-y-2">
                  {batchRoster.map((student) => {
                    const rec = getRecord(student.studentId);
                    return (
                      <div key={student.studentId} className="p-3 bg-slate-900 border border-slate-800 rounded-2xl flex justify-between items-center">
                        <span className="text-xs font-bold text-white">{student.firstName} {student.lastName}</span>
                        <button
                          onClick={() => handleToggleAttendance(student.studentId)}
                          className={`px-2.5 py-1 rounded-xl text-xs font-bold capitalize border ${
                            rec.attendance === 'present' ? 'bg-[#339CA3]/20 text-[#339CA3] border-[#339CA3]/50' : 'bg-[#E98E30]/20 text-[#E98E30] border-[#E98E30]/50'
                          }`}
                        >
                          {rec.attendance}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TAB CONTENT: FACILITATOR SAFETY */}
            {facilitatorActiveTab === 'roster' && (
              <div className="p-4 space-y-3.5 flex-1 overflow-y-auto">
                <div className="space-y-2.5">
                  {batchRoster.map((student) => (
                    <div key={student.studentId} className="p-3 bg-slate-900 border border-slate-800 rounded-2xl space-y-1">
                      <div className="text-xs font-bold text-white">{student.firstName} {student.lastName}</div>
                      <div className="text-[11px] text-slate-400">{student.city} • Guardian: {student.primaryGuardianName}</div>
                      <a href={`tel:${student.primaryGuardianPhone}`} className="text-xs text-[#339CA3] font-bold block">
                        {student.primaryGuardianPhone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB CONTENT: FACILITATOR PROFILE */}
            {facilitatorActiveTab === 'profile' && (
              <div className="p-4 space-y-4 flex-1 overflow-y-auto">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {facilitatorProfile.photoUrl ? (
                        <img
                          src={facilitatorProfile.photoUrl}
                          alt={`${facilitatorProfile.firstName} ${facilitatorProfile.lastName}`}
                          className="w-12 h-12 rounded-2xl object-cover ring-2 ring-[#5859A7]/50 shadow-md"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-2xl bg-[#5859A7]/30 text-indigo-200 flex items-center justify-center font-bold">
                          {facilitatorProfile.firstName[0]}{facilitatorProfile.lastName[0]}
                        </div>
                      )}
                      <div>
                        <h4 className="text-sm font-bold text-white">
                          {facilitatorProfile.firstName} {facilitatorProfile.lastName}
                        </h4>
                        <span className="text-xs text-[#FFC513] font-semibold">{facilitatorProfile.role}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsEditingFacilitatorProfile(true)}
                      className="px-3 py-1.5 bg-[#5859A7] hover:bg-indigo-600 text-white text-xs font-bold rounded-xl flex items-center space-x-1.5 transition-all shadow-md"
                    >
                      <Pencil className="w-3.5 h-3.5 text-[#FFC513]" />
                      <span>Edit Profile</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                    <div className="p-2 bg-slate-950 rounded-xl border border-slate-800">
                      <span className="text-[9px] uppercase font-bold text-slate-500 block">Official Email</span>
                      <span className="text-white font-medium">{facilitatorProfile.email}</span>
                    </div>
                    <div className="p-2 bg-slate-950 rounded-xl border border-slate-800">
                      <span className="text-[9px] uppercase font-bold text-slate-500 block">Personal Email</span>
                      <span className="text-white font-medium">{facilitatorProfile.personalEmail}</span>
                    </div>
                    <div className="p-2 bg-slate-950 rounded-xl border border-slate-800">
                      <span className="text-[9px] uppercase font-bold text-slate-500 block">Mobile Phone</span>
                      <span className="text-[#339CA3] font-bold">{facilitatorProfile.phone}</span>
                    </div>
                    <div className="p-2 bg-slate-950 rounded-xl border border-slate-800">
                      <span className="text-[9px] uppercase font-bold text-slate-500 block">Active Assignment</span>
                      <span className="text-white font-medium">YLP - 1A Winter 2026: 2 Markham</span>
                    </div>
                  </div>

                  {facilitatorProfile.bio && (
                    <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-xs">
                      <span className="text-[9px] uppercase font-bold text-slate-500 block mb-0.5">Coaching Bio</span>
                      <p className="text-slate-300 leading-relaxed">{facilitatorProfile.bio}</p>
                    </div>
                  )}
                </div>

                {/* VSC Compliance Card */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2.5">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#339CA3] block flex items-center space-x-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>VSC Clearance Status</span>
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${vscInfo.badgeClass}`}>
                      {vscInfo.statusLabel}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2 bg-slate-950 rounded-xl border border-slate-800">
                      <span className="text-[9px] uppercase font-bold text-slate-500 block">Issue Date</span>
                      <span className="text-white font-semibold">{vscInfo.issueFormatted}</span>
                    </div>
                    <div className="p-2 bg-slate-950 rounded-xl border border-slate-800">
                      <span className="text-[9px] uppercase font-bold text-slate-500 block">Expires (365d)</span>
                      <span className="text-[#FFC513] font-semibold">{vscInfo.expiryFormatted}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-2 bg-slate-950 rounded-xl border border-slate-800 text-xs">
                    <span className="text-slate-400 truncate max-w-[190px]">{facilitatorProfile.vscAttachmentName}</span>
                    <button
                      onClick={() => setViewingVscModal(true)}
                      className="text-xs text-[#339CA3] font-bold hover:underline flex items-center space-x-1"
                    >
                      <Eye className="w-3 h-3" />
                      <span>View</span>
                    </button>
                  </div>
                </div>

                {/* CFLI Service History & Tenure (Admin Controlled) */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block flex items-center space-x-1">
                      <Lock className="w-3 h-3 text-[#FFC513]" />
                      <span>CFLI Service & Tenure (Admin Managed)</span>
                    </span>
                    <span className="text-[9px] text-[#FFC513] font-bold bg-[#FFC513]/10 px-2 py-0.5 rounded-full border border-[#FFC513]/30">
                      Locked
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2 bg-slate-950 rounded-xl border border-slate-800">
                      <span className="text-[9px] uppercase font-bold text-slate-500 block">Start Date</span>
                      <span className="text-white font-semibold">{facilitatorProfile.startDateOfService}</span>
                    </div>
                    <div className="p-2 bg-slate-950 rounded-xl border border-slate-800">
                      <span className="text-[9px] uppercase font-bold text-slate-500 block">Terms Served</span>
                      <span className="text-[#FFC513] font-bold">{facilitatorProfile.tenureTerms} Terms</span>
                    </div>
                  </div>
                  <div className="p-2 bg-slate-950 rounded-xl border border-slate-800 text-xs">
                    <span className="text-[9px] uppercase font-bold text-slate-500 block">Previous Term</span>
                    <span className="text-slate-300 font-medium">{facilitatorProfile.previousTermBatch}</span>
                  </div>
                </div>
              </div>
            )}

            {/* PERSISTENT FACILITATOR 5-TAB MOBILE BOTTOM NAVIGATION BAR */}
            <nav className="bg-slate-950 border-t border-slate-800 px-3 py-2 flex items-center justify-around text-xs font-semibold select-none">
              <button
                onClick={() => setFacilitatorActiveTab('dashboard')}
                className={`flex flex-col items-center space-y-1 transition-colors ${
                  facilitatorActiveTab === 'dashboard' ? 'text-[#5859A7]' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span className="text-[9px]">Dashboard</span>
              </button>

              <button
                onClick={() => setFacilitatorActiveTab('roles')}
                className={`flex flex-col items-center space-y-1 transition-colors ${
                  facilitatorActiveTab === 'roles' ? 'text-[#FFC513]' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Crown className="w-4 h-4" />
                <span className="text-[9px]">Roles</span>
              </button>

              <button
                onClick={() => setFacilitatorActiveTab('milestones')}
                className={`flex flex-col items-center space-y-1 transition-colors ${
                  facilitatorActiveTab === 'milestones' ? 'text-[#FFC513]' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Trophy className="w-4 h-4" />
                <span className="text-[9px] font-black">Milestones</span>
              </button>

              <button
                onClick={() => setFacilitatorActiveTab('attendance')}
                className={`flex flex-col items-center space-y-1 transition-colors ${
                  facilitatorActiveTab === 'attendance' ? 'text-[#339CA3]' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <UserCheck className="w-4 h-4" />
                <span className="text-[9px]">Attendance</span>
              </button>

              <button
                onClick={() => setFacilitatorActiveTab('profile')}
                className={`flex flex-col items-center space-y-1 transition-colors ${
                  facilitatorActiveTab === 'profile' ? 'text-[#339CA3]' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <User className="w-4 h-4" />
                <span className="text-[9px]">Profile</span>
              </button>
            </nav>
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* PERSPECTIVE 2: PARENT FAMILY HUB & DASHBOARD                      */}
        {/* ----------------------------------------------------------------- */}
        {activeRolePerspective === 'parent' && (
          <div className="flex-1 flex flex-col justify-between">
            <div className="px-5 py-3 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="w-7 h-7 bg-white rounded-lg p-0.5 shadow-sm flex items-center justify-center shrink-0">
                  <CfliLogo variant="mark" className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#E98E30]">
                    Guardian Portal
                  </span>
                  <h2 className="text-sm font-bold text-white">{parentProfile.firstName} {parentProfile.lastName} Hub</h2>
                </div>
              </div>
              <div className="flex items-center space-x-1.5">
                <button
                  onClick={() => setActiveRolePerspective('gateway')}
                  className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-[10px] font-bold flex items-center space-x-1 transition-all border border-slate-700"
                  title="Return to Master Screen"
                >
                  <Home className="w-3 h-3 text-[#FFC513]" />
                  <span>Gateway</span>
                </button>
                <button
                  onClick={() => setIsEditingParentProfile(true)}
                  className="px-2.5 py-1 bg-[#E98E30] hover:bg-amber-500 text-slate-950 rounded-xl text-xs font-extrabold flex items-center space-x-1 transition-all shadow-sm"
                >
                  <Pencil className="w-3 h-3 text-slate-950" />
                  <span>Edit Profile</span>
                </button>
              </div>
            </div>

            {/* TAB CONTENT: PARENT FAMILY HUB */}
            {parentActiveTab === 'dashboard' && (
              <div className="p-4 space-y-4 flex-1 overflow-y-auto">
                {/* Action Banner: New Program / Child Registration */}
                <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-[#E98E30]/20 border border-[#E98E30]/40 rounded-2xl p-3.5 flex items-center justify-between shadow-sm">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#E98E30] block">
                      Program Enrolment
                    </span>
                    <h3 className="text-xs font-bold text-white">Register for Next Term or Add Sibling</h3>
                  </div>
                  <button
                    onClick={() => setIsRegisteringProgram(true)}
                    className="py-1.5 px-3 bg-[#E98E30] hover:bg-amber-500 text-slate-950 font-black text-xs rounded-xl flex items-center space-x-1 transition-all shadow-md"
                  >
                    <Plus className="w-3.5 h-3.5 stroke-[3]" />
                    <span>New Enrolment</span>
                  </button>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3.5 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase text-slate-400 block">
                      Enrolled Children ({myChildren.length})
                    </span>
                    <button
                      onClick={() => setIsRegisteringProgram(true)}
                      className="text-xs text-[#E98E30] font-bold hover:underline flex items-center space-x-0.5"
                    >
                      <Plus className="w-3 h-3" />
                      <span>Add Sibling</span>
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {myChildren.map((child) => (
                      <div key={child.studentId} className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center space-x-2">
                              <h4 className="text-xs font-bold text-white">{child.firstName} {child.lastName}</h4>
                              <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-[#339CA3]/20 text-[#339CA3]">
                                Grade {child.grade}
                              </span>
                            </div>
                            <p className="text-[10px] text-slate-400 mt-0.5">
                              DOB: <strong className="text-white">{child.dob}</strong> • {child.city} ({child.postalCode})
                            </p>
                          </div>

                          <button
                            onClick={() => setEditingChild({ ...child })}
                            className="py-1 px-2.5 bg-slate-800 hover:bg-slate-700 text-[#FFC513] hover:text-white rounded-lg flex items-center space-x-1 text-[11px] font-bold border border-slate-700 transition-colors shadow-xs"
                            title="Edit Child Profile"
                          >
                            <Pencil className="w-3 h-3" />
                            <span>Edit Child</span>
                          </button>
                        </div>

                        <div className="flex items-center justify-between pt-1 border-t border-slate-900 text-[10px] text-slate-400">
                          <span>Allergies: <strong className={child.allergies === 'None' ? 'text-slate-300' : 'text-amber-300'}>{child.allergies}</strong></span>
                          <span className="text-[#339CA3] font-semibold">Winter 2026 Active</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: PARENT PREP & ROLES */}
            {parentActiveTab === 'prep' && (
              <div className="p-4 space-y-4 flex-1 overflow-y-auto">
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-2xl space-y-2">
                  <h4 className="text-xs font-bold text-white">Upcoming Session Preparation</h4>
                  <p className="text-[11px] text-slate-400">Alexander: Chairperson • Speech Category: Prepared Speech</p>
                  <a
                    href={currentGoogleNotesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#FFC513] font-bold flex items-center space-x-1"
                  >
                    <span>Open Session Notes (Google Doc)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}

            {/* TAB CONTENT: PARENT MILESTONES */}
            {parentActiveTab === 'milestones' && (
              <div className="p-4 space-y-4 flex-1 overflow-y-auto">
                <div className="p-3 bg-slate-900 border border-[#FFC513]/40 rounded-2xl space-y-2">
                  <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-[#FFC513] text-slate-950">
                    Star Speaker Candidate
                  </span>
                  <h4 className="text-xs font-bold text-white">Alexander Chen</h4>
                  <p className="text-[11px] text-slate-300">Topic: "The Architecture of Resilience"</p>
                </div>
              </div>
            )}

            {/* TAB CONTENT: PARENT FEEDBACK */}
            {parentActiveTab === 'feedback' && (
              <div className="p-4 space-y-4 flex-1 overflow-y-auto">
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-2xl space-y-2">
                  <h4 className="text-xs font-bold text-white">Alexander Chen Feedback History</h4>
                  <div className="text-[11px] text-slate-300 p-2 bg-slate-950 rounded-lg border border-slate-800">
                    "Session 5: Superb stance and purposeful hand gestures today. Addressed verbal fillers."
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: PARENT PROFILE */}
            {parentActiveTab === 'profile' && (
              <div className="p-4 space-y-4 flex-1 overflow-y-auto">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#E98E30]/20 text-[#E98E30] border border-[#E98E30]/40 flex items-center justify-center font-bold text-sm">
                        {parentProfile.firstName[0]}{parentProfile.lastName[0]}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm">
                          {parentProfile.firstName} {parentProfile.lastName}
                        </h4>
                        <span className="text-[10px] text-[#E98E30] font-bold">Primary Guardian</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsEditingParentProfile(true)}
                      className="px-3 py-1.5 bg-[#E98E30] hover:bg-amber-500 text-slate-950 text-xs font-black rounded-xl flex items-center space-x-1.5 transition-all shadow-md"
                    >
                      <Pencil className="w-3.5 h-3.5" />
                      <span>Edit Profile</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                    <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
                      <span className="text-[9px] uppercase font-bold text-slate-500 block">Mobile Phone</span>
                      <span className="text-[#339CA3] font-bold">{parentProfile.phone}</span>
                    </div>
                    <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
                      <span className="text-[9px] uppercase font-bold text-slate-500 block">Email Address</span>
                      <span className="text-white font-medium">{parentProfile.email}</span>
                    </div>
                    <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
                      <span className="text-[9px] uppercase font-bold text-slate-500 block">City of Residence</span>
                      <span className="text-white font-medium">{parentProfile.city}</span>
                    </div>
                    <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
                      <span className="text-[9px] uppercase font-bold text-slate-500 block">Postal Code</span>
                      <span className="text-white font-medium uppercase">{parentProfile.postalCode}</span>
                    </div>
                  </div>

                  <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-xs">
                    <span className="text-[9px] uppercase font-bold text-slate-500 block mb-0.5">Emergency Contact</span>
                    <div className="flex justify-between items-center text-slate-300">
                      <span>{parentProfile.emergencyContactName}</span>
                      <span className="text-[#339CA3] font-bold">{parentProfile.emergencyContactPhone}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* PERSISTENT PARENT 5-TAB MOBILE BOTTOM NAVIGATION BAR */}
            <nav className="bg-slate-950 border-t border-slate-800 px-3 py-2 flex items-center justify-around text-xs font-semibold select-none">
              <button
                onClick={() => setParentActiveTab('dashboard')}
                className={`flex flex-col items-center space-y-1 transition-colors ${
                  parentActiveTab === 'dashboard' ? 'text-[#E98E30]' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Home className="w-4 h-4" />
                <span className="text-[9px]">Family Hub</span>
              </button>

              <button
                onClick={() => setParentActiveTab('prep')}
                className={`flex flex-col items-center space-y-1 transition-colors ${
                  parentActiveTab === 'prep' ? 'text-[#FFC513]' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Crown className="w-4 h-4" />
                <span className="text-[9px]">Prep & Roles</span>
              </button>

              <button
                onClick={() => setParentActiveTab('milestones')}
                className={`flex flex-col items-center space-y-1 transition-colors ${
                  parentActiveTab === 'milestones' ? 'text-[#FFC513]' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Trophy className="w-4 h-4" />
                <span className="text-[9px]">Milestones</span>
              </button>

              <button
                onClick={() => setParentActiveTab('feedback')}
                className={`flex flex-col items-center space-y-1 transition-colors ${
                  parentActiveTab === 'feedback' ? 'text-[#339CA3]' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Star className="w-4 h-4" />
                <span className="text-[9px]">Feedback</span>
              </button>

              <button
                onClick={() => setParentActiveTab('profile')}
                className={`flex flex-col items-center space-y-1 transition-colors ${
                  parentActiveTab === 'profile' ? 'text-[#5859A7]' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <User className="w-4 h-4" />
                <span className="text-[9px]">Profile</span>
              </button>
            </nav>
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* PERSPECTIVE 3: STUDENT JOURNEY DASHBOARD (ALEXANDER CHEN)          */}
        {/* ----------------------------------------------------------------- */}
        {activeRolePerspective === 'student' && (
          <div className="flex-1 flex flex-col justify-between">
            <div className="px-5 py-3 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="w-7 h-7 bg-white rounded-lg p-0.5 shadow-sm flex items-center justify-center shrink-0">
                  <CfliLogo variant="mark" className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#339CA3]">
                    Student Journey
                  </span>
                  <h2 className="text-sm font-bold text-white">Alexander Chen</h2>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setActiveRolePerspective('gateway')}
                  className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-[10px] font-bold flex items-center space-x-1 transition-all border border-slate-700"
                  title="Return to Master Screen"
                >
                  <Home className="w-3 h-3 text-[#FFC513]" />
                  <span>Gateway</span>
                </button>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#339CA3]/20 text-[#339CA3] border border-[#339CA3]/40">
                  Level 1
                </span>
              </div>
            </div>

            {/* TAB CONTENT: STUDENT JOURNEY DASHBOARD */}
            {studentActiveTab === 'dashboard' && (
              <div className="p-4 space-y-4 flex-1 overflow-y-auto">
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-white">YLP - 1A Winter 2026: 2 Markham</span>
                    <span className="text-[10px] text-[#339CA3] font-bold">Session 5 of 10</span>
                  </div>
                  <p className="text-xs text-slate-400">Hub: Markham 2 (Saturdays 1:00 PM)</p>
                </div>
              </div>
            )}

            {/* TAB CONTENT: STUDENT PREP & ROLES */}
            {studentActiveTab === 'prep' && (
              <div className="p-4 space-y-4 flex-1 overflow-y-auto">
                <div className="p-3.5 bg-slate-900 border border-slate-800 rounded-2xl space-y-2 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white">My Next Role:</span>
                    <span className="px-2 py-0.5 rounded bg-[#FFC513] text-slate-950 font-bold">Chairperson</span>
                  </div>
                  <p className="text-slate-300">Category: Prepared Speech</p>
                  <p className="text-slate-400">Topic: "The Power of Resilience: Overcoming High School Obstacles"</p>
                </div>
              </div>
            )}

            {/* TAB CONTENT: STUDENT MILESTONES */}
            {studentActiveTab === 'milestones' && (
              <div className="p-4 space-y-4 flex-1 overflow-y-auto">
                <div className="p-3.5 bg-slate-900 border border-[#FFC513]/40 rounded-2xl space-y-2 text-xs">
                  <span className="px-2 py-0.5 rounded text-[9px] font-black bg-[#FFC513] text-slate-950">
                    Star Speaker Candidate Slot #1
                  </span>
                  <h4 className="font-bold text-white">"The Architecture of Resilience"</h4>
                  <p className="text-slate-400">Team: Velocity Orators</p>
                </div>
              </div>
            )}

            {/* TAB CONTENT: STUDENT FEEDBACK */}
            {studentActiveTab === 'feedback' && (
              <div className="p-4 space-y-4 flex-1 overflow-y-auto">
                <div className="p-3.5 bg-slate-900 border border-slate-800 rounded-2xl space-y-2 text-xs">
                  <span className="font-bold text-[#339CA3]">Session 5 Feedback:</span>
                  <p className="text-slate-300 italic">"Superb stance and purposeful hand gestures today. Addressed verbal fillers."</p>
                </div>
              </div>
            )}

            {/* PERSISTENT STUDENT 4-TAB MOBILE BOTTOM NAVIGATION BAR */}
            <nav className="bg-slate-950 border-t border-slate-800 px-3 py-2 flex items-center justify-around text-xs font-semibold select-none">
              <button
                onClick={() => setStudentActiveTab('dashboard')}
                className={`flex flex-col items-center space-y-1 transition-colors ${
                  studentActiveTab === 'dashboard' ? 'text-[#339CA3]' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Home className="w-4 h-4" />
                <span className="text-[9px]">My Journey</span>
              </button>

              <button
                onClick={() => setStudentActiveTab('prep')}
                className={`flex flex-col items-center space-y-1 transition-colors ${
                  studentActiveTab === 'prep' ? 'text-[#FFC513]' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Crown className="w-4 h-4" />
                <span className="text-[9px]">My Role</span>
              </button>

              <button
                onClick={() => setStudentActiveTab('milestones')}
                className={`flex flex-col items-center space-y-1 transition-colors ${
                  studentActiveTab === 'milestones' ? 'text-[#FFC513]' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Trophy className="w-4 h-4" />
                <span className="text-[9px]">Team Event</span>
              </button>

              <button
                onClick={() => setStudentActiveTab('feedback')}
                className={`flex flex-col items-center space-y-1 transition-colors ${
                  studentActiveTab === 'feedback' ? 'text-[#339CA3]' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Star className="w-4 h-4" />
                <span className="text-[9px]">Feedback</span>
              </button>
            </nav>
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* MODAL: MID-TERM FACILITATOR REASSIGNMENT                          */}
        {/* ----------------------------------------------------------------- */}
        {midTermChangeModal && (
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setFacilitatorStaffList((prev) =>
                  prev.map((f) =>
                    f.id === midTermChangeModal.id
                      ? {
                          ...f,
                          currentAssignment: {
                            ...f.currentAssignment,
                            batchCode: midTermChangeModal.newBatchCode || f.currentAssignment.batchCode,
                            location: midTermChangeModal.newLocation || f.currentAssignment.location,
                            role: midTermChangeModal.newRole || f.currentAssignment.role,
                          },
                        }
                      : f
                  )
                );
                triggerSavedToast(`Mid-Term assignment updated for ${midTermChangeModal.name}!`);
                setMidTermChangeModal(null);
              }}
              className="bg-slate-900 border border-slate-700 w-full max-w-sm rounded-3xl p-5 shadow-2xl space-y-3.5 animate-in fade-in"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <RefreshCw className="w-4 h-4 text-amber-400" />
                  <h3 className="font-extrabold text-white text-sm">Mid-Term Facilitator Change</h3>
                </div>
                <button type="button" onClick={() => setMidTermChangeModal(null)} className="p-1 text-slate-400 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300">
                <span>Facilitator: <strong className="text-white">{midTermChangeModal.name}</strong></span>
                <span className="block text-[10px] text-slate-400">Current: {midTermChangeModal.currentAssignment.batchCode}</span>
              </div>

              <div>
                <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">
                  Reassign to Cohort (Winter 2026)
                </label>
                <select
                  defaultValue={midTermChangeModal.currentAssignment.batchCode}
                  onChange={(e) => {
                    const selectedBatch = batches.find(b => b.code === e.target.value);
                    setMidTermChangeModal({
                      ...midTermChangeModal,
                      newBatchCode: e.target.value,
                      newLocation: e.target.value.includes('1 Markham') ? 'Markham 1' : 'Markham 2',
                    });
                  }}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs font-bold text-white"
                >
                  <option value="YLP - 1A Winter 2026: 1 Markham">YLP - 1A Winter 2026: 1 Markham (Markham 1)</option>
                  <option value="YLP - 1A Winter 2026: 2 Markham">YLP - 1A Winter 2026: 2 Markham (Markham 2)</option>
                  <option value="YLP - 1A Winter 2026: 4 Markham">YLP - 1A Winter 2026: 4 Markham (Markham 4)</option>
                </select>
              </div>

              <div>
                <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">Instructional Role</label>
                <select
                  defaultValue={midTermChangeModal.currentAssignment.role}
                  onChange={(e) => setMidTermChangeModal({ ...midTermChangeModal, newRole: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs font-bold text-white"
                >
                  <option value="Lead Facilitator">Lead Facilitator</option>
                  <option value="Co-Facilitator">Co-Facilitator</option>
                  <option value="Assistant Facilitator">Assistant Facilitator</option>
                  <option value="Grad Facilitator / Mentor">Grad Facilitator / Mentor</option>
                </select>
              </div>

              <div className="flex space-x-2 pt-1">
                <button type="button" onClick={() => setMidTermChangeModal(null)} className="flex-1 py-2 bg-slate-800 text-slate-300 font-bold text-xs rounded-xl">
                  Cancel
                </button>
                <button type="submit" className="flex-1 py-2 bg-amber-500 text-slate-950 font-black text-xs rounded-xl">
                  Save Mid-Term Change
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* MODAL: ASSIGN UPCOMING TERM (SPRING 2026)                          */}
        {/* ----------------------------------------------------------------- */}
        {upcomingTermAssignModal && (
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setFacilitatorStaffList((prev) =>
                  prev.map((f) =>
                    f.id === upcomingTermAssignModal.id
                      ? {
                          ...f,
                          upcomingAssignment: {
                            term: 'Spring 2026',
                            batchCode: upcomingTermAssignModal.targetBatchCode || 'YLP - 2A Spring 2026: 1 Markham',
                            location: upcomingTermAssignModal.targetLocation || 'Markham 1',
                            role: upcomingTermAssignModal.targetRole || f.upcomingAssignment.role,
                            status: 'Assigned',
                          },
                        }
                      : f
                  )
                );
                triggerSavedToast(`Spring 2026 cohort assigned for ${upcomingTermAssignModal.name}!`);
                setUpcomingTermAssignModal(null);
              }}
              className="bg-slate-900 border border-slate-700 w-full max-w-sm rounded-3xl p-5 shadow-2xl space-y-3.5 animate-in fade-in"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-indigo-400" />
                  <h3 className="font-extrabold text-white text-sm">Assign Upcoming Term (Spring 2026)</h3>
                </div>
                <button type="button" onClick={() => setUpcomingTermAssignModal(null)} className="p-1 text-slate-400 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300">
                <span>Staff: <strong className="text-white">{upcomingTermAssignModal.name}</strong></span>
                <span className="block text-[10px] text-indigo-300">Target Term: Spring 2026 (Starts Apr 11)</span>
              </div>

              <div>
                <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">Select Spring 2026 Batch</label>
                <select
                  onChange={(e) => setUpcomingTermAssignModal({
                    ...upcomingTermAssignModal,
                    targetBatchCode: e.target.value,
                    targetLocation: e.target.value.includes('1 Markham') ? 'Markham 1' : 'Markham 2',
                  })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs font-bold text-white"
                >
                  <option value="YLP - 1A Spring 2026: 1 Markham">YLP - 1A Spring 2026: 1 Markham (Markham 1)</option>
                  <option value="YLP - 2A Spring 2026: 2 Markham">YLP - 2A Spring 2026: 2 Markham (Markham 2)</option>
                  <option value="YLP - 3A Spring 2026: 3 Markham">YLP - 3A Spring 2026: 3 Markham (Markham 3)</option>
                  <option value="YLP - 1B Spring 2026: 4 Markham">YLP - 1B Spring 2026: 4 Markham (Markham 4)</option>
                </select>
              </div>

              <div>
                <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">Instructional Role</label>
                <select
                  defaultValue={upcomingTermAssignModal.upcomingAssignment.role}
                  onChange={(e) => setUpcomingTermAssignModal({ ...upcomingTermAssignModal, targetRole: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs font-bold text-white"
                >
                  <option value="Lead Facilitator">Lead Facilitator</option>
                  <option value="Co-Facilitator">Co-Facilitator</option>
                  <option value="Assistant Facilitator">Assistant Facilitator</option>
                  <option value="Grad Facilitator / Mentor">Grad Facilitator / Mentor</option>
                </select>
              </div>

              <div className="flex space-x-2 pt-1">
                <button type="button" onClick={() => setUpcomingTermAssignModal(null)} className="flex-1 py-2 bg-slate-800 text-slate-300 font-bold text-xs rounded-xl">
                  Cancel
                </button>
                <button type="submit" className="flex-1 py-2 bg-[#5859A7] text-white font-extrabold text-xs rounded-xl">
                  Confirm Spring Assignment
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* MODAL: ADD / EDIT MASTER BATCH NAME (NEW TABLE)                   */}
        {/* ----------------------------------------------------------------- */}
        {editingBatchNameModal && (
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (editingBatchNameModal.isNew) {
                  setMasterBatchNamesList(prev => [...prev, { ...editingBatchNameModal, isNew: false }]);
                  triggerSavedToast(`Batch Name ${editingBatchNameModal.code} created!`);
                } else {
                  setMasterBatchNamesList(prev => prev.map(b => b.id === editingBatchNameModal.id ? editingBatchNameModal : b));
                  triggerSavedToast(`Batch Name ${editingBatchNameModal.code} updated!`);
                }
                setEditingBatchNameModal(null);
              }}
              className="bg-slate-900 border border-slate-700 w-full max-w-sm rounded-3xl p-5 shadow-2xl space-y-3.5 animate-in fade-in"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-extrabold text-white text-sm">
                  {editingBatchNameModal.isNew ? 'Create Batch Name' : 'Edit Batch Name'}
                </h3>
                <button type="button" onClick={() => setEditingBatchNameModal(null)} className="p-1 text-slate-400 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div>
                <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">Batch Code</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 1A, 2B, 3A..."
                  value={editingBatchNameModal.code}
                  onChange={(e) => setEditingBatchNameModal({ ...editingBatchNameModal, code: e.target.value.toUpperCase() })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Level 1 Cohort A"
                  value={editingBatchNameModal.name}
                  onChange={(e) => setEditingBatchNameModal({ ...editingBatchNameModal, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">Progression Level</label>
                <select
                  value={editingBatchNameModal.level}
                  onChange={(e) => setEditingBatchNameModal({ ...editingBatchNameModal, level: parseInt(e.target.value) })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs font-bold text-white"
                >
                  <option value={1}>Level 1 (Foundation)</option>
                  <option value={2}>Level 2 (Intermediate)</option>
                  <option value={3}>Level 3 (Advanced)</option>
                  <option value={0}>Level 0 (ZZ Withdrawn Placeholder)</option>
                </select>
              </div>

              <div className="flex space-x-2 pt-1">
                <button type="button" onClick={() => setEditingBatchNameModal(null)} className="flex-1 py-2 bg-slate-800 text-slate-300 font-bold text-xs rounded-xl">
                  Cancel
                </button>
                <button type="submit" className="flex-1 py-2 bg-[#5859A7] text-white font-extrabold text-xs rounded-xl">
                  Save Batch Name
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* MODAL: BATCH PROMOTION CONFIRMATION                               */}
        {/* ----------------------------------------------------------------- */}
        {showPromotionConfirmationModal && (
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-700 w-full max-w-sm rounded-3xl p-5 shadow-2xl space-y-4 animate-in fade-in">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-[#FFC513]" />
                  <h3 className="font-extrabold text-white text-sm">Confirm Batch Promotion</h3>
                </div>
                <button
                  onClick={() => setShowPromotionConfirmationModal(false)}
                  className="p-1 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-3.5 bg-slate-950 rounded-2xl border border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between items-center text-slate-300">
                  <span>Selected Students:</span>
                  <strong className="text-white">{selectedStudentIdsForPromo.length} Students</strong>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span>New Level:</span>
                  <strong className="text-[#FFC513]">Level {promoTargetLevel}</strong>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span>Target Term:</span>
                  <strong className="text-[#339CA3]">{promoTargetTerm}</strong>
                </div>

                <div className="p-2 bg-[#5859A7]/15 rounded-xl border border-[#5859A7]/30 text-[11px] text-indigo-200 mt-2">
                  ✓ Prior Winter 2026 registrations will be archived as <span className="text-white font-bold">Completed</span>.
                  <br />
                  ✓ New registrations and batch assignments will be seeded in Supabase.
                </div>
              </div>

              <div className="flex space-x-2 pt-1">
                <button
                  type="button"
                  onClick={() => setShowPromotionConfirmationModal(false)}
                  className="flex-1 py-2 bg-slate-800 text-slate-300 font-bold text-xs rounded-xl hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowPromotionConfirmationModal(false);
                    triggerSavedToast(`Successfully promoted ${selectedStudentIdsForPromo.length} students to Level ${promoTargetLevel}!`);
                  }}
                  className="flex-1 py-2 bg-[#FFC513] text-slate-950 font-black text-xs rounded-xl hover:bg-amber-400 shadow-md"
                >
                  Confirm Promotion
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* MODAL: ADD / EDIT MASTER PROGRAM                                  */}
        {/* ----------------------------------------------------------------- */}
        {editingProgramModal && (
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (editingProgramModal.isNew) {
                  setMasterProgramsList(prev => [...prev, { ...editingProgramModal, isNew: false }]);
                  triggerSavedToast(`Program ${editingProgramModal.code} created!`);
                } else {
                  setMasterProgramsList(prev => prev.map(p => p.id === editingProgramModal.id ? editingProgramModal : p));
                  triggerSavedToast(`Program ${editingProgramModal.code} updated!`);
                }
                setEditingProgramModal(null);
              }}
              className="bg-slate-900 border border-slate-700 w-full max-w-sm rounded-3xl p-5 shadow-2xl space-y-3.5 animate-in fade-in"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-extrabold text-white text-sm">
                  {editingProgramModal.isNew ? 'Create Master Program' : 'Edit Master Program'}
                </h3>
                <button type="button" onClick={() => setEditingProgramModal(null)} className="p-1 text-slate-400 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div>
                <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">Program Code</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. YLP, YHACKS..."
                  value={editingProgramModal.code}
                  onChange={(e) => setEditingProgramModal({ ...editingProgramModal, code: e.target.value.toUpperCase() })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">Full Program Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Youth Leadership Program"
                  value={editingProgramModal.name}
                  onChange={(e) => setEditingProgramModal({ ...editingProgramModal, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">Description</label>
                <textarea
                  rows={2}
                  value={editingProgramModal.description}
                  onChange={(e) => setEditingProgramModal({ ...editingProgramModal, description: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                />
              </div>

              <div className="flex space-x-2 pt-1">
                <button type="button" onClick={() => setEditingProgramModal(null)} className="flex-1 py-2 bg-slate-800 text-slate-300 font-bold text-xs rounded-xl">
                  Cancel
                </button>
                <button type="submit" className="flex-1 py-2 bg-[#5859A7] text-white font-extrabold text-xs rounded-xl">
                  Save Program
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* MODAL: ADD / EDIT MASTER TERM                                     */}
        {/* ----------------------------------------------------------------- */}
        {editingTermModal && (
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (editingTermModal.isNew) {
                  setMasterTermsList(prev => [...prev, { ...editingTermModal, isNew: false }]);
                  triggerSavedToast(`Term ${editingTermModal.name} created!`);
                } else {
                  setMasterTermsList(prev => prev.map(t => t.id === editingTermModal.id ? editingTermModal : t));
                  triggerSavedToast(`Term ${editingTermModal.name} updated!`);
                }
                setEditingTermModal(null);
              }}
              className="bg-slate-900 border border-slate-700 w-full max-w-sm rounded-3xl p-5 shadow-2xl space-y-3.5 animate-in fade-in"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-extrabold text-white text-sm">
                  {editingTermModal.isNew ? 'Create Program Term' : 'Edit Program Term'}
                </h3>
                <button type="button" onClick={() => setEditingTermModal(null)} className="p-1 text-slate-400 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div>
                <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">Term Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Winter 2026"
                  value={editingTermModal.name}
                  onChange={(e) => setEditingTermModal({ ...editingTermModal, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">Start Date</label>
                  <input
                    type="date"
                    required
                    value={editingTermModal.startDate}
                    onChange={(e) => setEditingTermModal({ ...editingTermModal, startDate: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">End Date</label>
                  <input
                    type="date"
                    required
                    value={editingTermModal.endDate}
                    onChange={(e) => setEditingTermModal({ ...editingTermModal, endDate: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-1">
                <input
                  type="checkbox"
                  id="termCurrent"
                  checked={editingTermModal.isCurrent}
                  onChange={(e) => setEditingTermModal({ ...editingTermModal, isCurrent: e.target.checked })}
                  className="rounded accent-[#339CA3]"
                />
                <label htmlFor="termCurrent" className="text-xs text-white font-medium cursor-pointer">
                  Mark as Current Active Term
                </label>
              </div>

              <div className="flex space-x-2 pt-1">
                <button type="button" onClick={() => setEditingTermModal(null)} className="flex-1 py-2 bg-slate-800 text-slate-300 font-bold text-xs rounded-xl">
                  Cancel
                </button>
                <button type="submit" className="flex-1 py-2 bg-[#5859A7] text-white font-extrabold text-xs rounded-xl">
                  Save Term
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* MODAL: ADD / EDIT MASTER LOCATION                                 */}
        {/* ----------------------------------------------------------------- */}
        {editingLocationModal && (
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (editingLocationModal.isNew) {
                  setMasterLocationsList(prev => [...prev, { ...editingLocationModal, isNew: false }]);
                  triggerSavedToast(`Location ${editingLocationModal.name} created!`);
                } else {
                  setMasterLocationsList(prev => prev.map(l => l.id === editingLocationModal.id ? editingLocationModal : l));
                  triggerSavedToast(`Location ${editingLocationModal.name} updated!`);
                }
                setEditingLocationModal(null);
              }}
              className="bg-slate-900 border border-slate-700 w-full max-w-sm rounded-3xl p-5 shadow-2xl space-y-3.5 animate-in fade-in"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-extrabold text-white text-sm">
                  {editingLocationModal.isNew ? 'Create Location' : 'Edit Location'}
                </h3>
                <button type="button" onClick={() => setEditingLocationModal(null)} className="p-1 text-slate-400 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div>
                <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">Location Code</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. MARKHAM_1"
                  value={editingLocationModal.code}
                  onChange={(e) => setEditingLocationModal({ ...editingLocationModal, code: e.target.value.toUpperCase() })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">Location Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Markham 1"
                  value={editingLocationModal.name}
                  onChange={(e) => setEditingLocationModal({ ...editingLocationModal, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">Address</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 101 Town Centre Blvd"
                  value={editingLocationModal.address}
                  onChange={(e) => setEditingLocationModal({ ...editingLocationModal, address: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">City</label>
                <input
                  type="text"
                  required
                  value={editingLocationModal.city}
                  onChange={(e) => setEditingLocationModal({ ...editingLocationModal, city: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                />
              </div>

              <div className="flex space-x-2 pt-1">
                <button type="button" onClick={() => setEditingLocationModal(null)} className="flex-1 py-2 bg-slate-800 text-slate-300 font-bold text-xs rounded-xl">
                  Cancel
                </button>
                <button type="submit" className="flex-1 py-2 bg-[#5859A7] text-white font-extrabold text-xs rounded-xl">
                  Save Location
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* MODAL: ASSIGN INSTRUCTOR TO BATCH                                 */}
        {/* ----------------------------------------------------------------- */}
        {isAssigningFacilitatorModal && (
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsAssigningFacilitatorModal(false);
                triggerSavedToast(`Assigned ${newFacilitatorAssignment.name} as ${newFacilitatorAssignment.role}!`);
              }}
              className="bg-slate-900 border border-slate-700 w-full max-w-sm rounded-3xl p-5 shadow-2xl space-y-3.5 animate-in fade-in"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-extrabold text-white text-sm">Assign Facilitator to Batch</h3>
                <button type="button" onClick={() => setIsAssigningFacilitatorModal(false)} className="p-1 text-slate-400 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div>
                <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">Staff Member Name</label>
                <input
                  type="text"
                  required
                  value={newFacilitatorAssignment.name}
                  onChange={(e) => setNewFacilitatorAssignment({ ...newFacilitatorAssignment, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">Instructional Role</label>
                <select
                  value={newFacilitatorAssignment.role}
                  onChange={(e) => setNewFacilitatorAssignment({ ...newFacilitatorAssignment, role: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs font-bold text-white"
                >
                  <option value="Lead Facilitator">Lead Facilitator</option>
                  <option value="Co-Facilitator">Co-Facilitator</option>
                  <option value="Assistant Facilitator">Assistant Facilitator</option>
                  <option value="Grad Facilitator / Mentor">Grad Facilitator / Mentor</option>
                </select>
              </div>

              <div className="flex space-x-2 pt-1">
                <button type="button" onClick={() => setIsAssigningFacilitatorModal(false)} className="flex-1 py-2 bg-slate-800 text-slate-300 font-bold text-xs rounded-xl">
                  Cancel
                </button>
                <button type="submit" className="flex-1 py-2 bg-[#5859A7] text-white font-extrabold text-xs rounded-xl">
                  Confirm Assignment
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* MODAL: VIEW / DOWNLOAD VSC CERTIFICATE MODAL                      */}
        {/* ----------------------------------------------------------------- */}
        {viewingVscModal && (
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-700 w-full max-w-sm rounded-3xl p-5 shadow-2xl space-y-4 animate-in fade-in">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-[#339CA3]" />
                  <h3 className="font-extrabold text-white text-sm">Vulnerable Sector Certificate</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setViewingVscModal(false)}
                  className="p-1 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Certificate Mock Document Preview */}
              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex justify-between items-start border-b border-slate-800 pb-2">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Issuing Authority</span>
                    <strong className="text-xs text-white">York Regional Police Service</strong>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-[#339CA3]/20 text-[#339CA3] border border-[#339CA3]/40">
                    CLEARED
                  </span>
                </div>

                <div className="text-xs space-y-1 text-slate-300">
                  <p><strong className="text-slate-400">Applicant:</strong> {facilitatorProfile.firstName} {facilitatorProfile.lastName}</p>
                  <p><strong className="text-slate-400">File Reference:</strong> {facilitatorProfile.vscAttachmentName}</p>
                  <p><strong className="text-slate-400">Issue Date:</strong> {vscInfo.issueFormatted}</p>
                  <p><strong className="text-[#FFC513]">Auto Expiration:</strong> {vscInfo.expiryFormatted} (365 days)</p>
                </div>

                <div className="p-2 bg-[#5859A7]/15 rounded-xl border border-[#5859A7]/30 text-[10px] text-indigo-200 flex items-center space-x-2">
                  <BadgeCheck className="w-4 h-4 text-[#339CA3] shrink-0" />
                  <span>Verified for CFLI Youth Leadership Program delivery.</span>
                </div>
              </div>

              <div className="flex space-x-2 pt-1">
                <button
                  type="button"
                  onClick={() => setViewingVscModal(false)}
                  className="flex-1 py-2 bg-slate-800 text-slate-300 font-bold text-xs rounded-xl hover:bg-slate-700"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    triggerSavedToast('Downloading certificate copy...');
                    setViewingVscModal(false);
                  }}
                  className="flex-1 py-2 bg-[#339CA3] text-white font-extrabold text-xs rounded-xl hover:opacity-95 shadow-md flex items-center justify-center space-x-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* MODAL: EDIT FACILITATOR PROFILE & VSC (SERVICE HISTORY IS LOCKED) */}
        {/* ----------------------------------------------------------------- */}
        {isEditingFacilitatorProfile && (
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsEditingFacilitatorProfile(false);
                triggerSavedToast('Facilitator Details & VSC Updated!');
              }}
              className="bg-slate-900 border border-slate-700 w-full max-w-sm rounded-3xl p-5 shadow-2xl space-y-3.5 animate-in fade-in max-h-[92vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center pb-1 border-b border-slate-800">
                <h3 className="font-extrabold text-white text-sm flex items-center space-x-1.5">
                  <User className="w-4 h-4 text-[#5859A7]" />
                  <span>Edit Personal Details & VSC</span>
                </h3>
                <button
                  type="button"
                  onClick={() => setIsEditingFacilitatorProfile(false)}
                  className="p-1 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Section 1: Personal Details & Bio */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFC513] block">
                  1. Personal & Contact Info
                </span>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">First Name</label>
                    <input
                      type="text"
                      required
                      value={facilitatorProfile.firstName}
                      onChange={(e) => setFacilitatorProfile({ ...facilitatorProfile, firstName: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">Last Name</label>
                    <input
                      type="text"
                      required
                      value={facilitatorProfile.lastName}
                      onChange={(e) => setFacilitatorProfile({ ...facilitatorProfile, lastName: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">Mobile Phone</label>
                  <input
                    type="tel"
                    required
                    value={facilitatorProfile.phone}
                    onChange={(e) => setFacilitatorProfile({ ...facilitatorProfile, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">Official Email</label>
                    <input
                      type="email"
                      required
                      value={facilitatorProfile.email}
                      onChange={(e) => setFacilitatorProfile({ ...facilitatorProfile, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">Personal Email</label>
                    <input
                      type="email"
                      required
                      value={facilitatorProfile.personalEmail}
                      onChange={(e) => setFacilitatorProfile({ ...facilitatorProfile, personalEmail: e.target.value })}
                      placeholder="e.g. personal@gmail.com"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">Profile Photo URL</label>
                  <input
                    type="url"
                    value={facilitatorProfile.photoUrl}
                    onChange={(e) => setFacilitatorProfile({ ...facilitatorProfile, photoUrl: e.target.value })}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">Professional Coaching Bio</label>
                  <textarea
                    rows={2}
                    value={facilitatorProfile.bio}
                    onChange={(e) => setFacilitatorProfile({ ...facilitatorProfile, bio: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#5859A7]"
                  />
                </div>
              </div>

              {/* Section 2: VSC & 365-Day Expiration */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#339CA3] block">
                    2. Vulnerable Sector Check (VSC)
                  </span>
                  <label className="flex items-center space-x-1.5 text-xs text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={facilitatorProfile.vscCleared}
                      onChange={(e) => setFacilitatorProfile({ ...facilitatorProfile, vscCleared: e.target.checked })}
                      className="rounded accent-[#339CA3]"
                    />
                    <span className="text-[11px] font-bold">VSC Cleared Flag</span>
                  </label>
                </div>

                <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 space-y-2.5">
                  <div>
                    <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">
                      VSC Issue Date (Auto 365-Day Expiry)
                    </label>
                    <input
                      type="date"
                      required
                      value={facilitatorProfile.vscIssueDate}
                      onChange={(e) => setFacilitatorProfile({ ...facilitatorProfile, vscIssueDate: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-white"
                    />
                    <span className="text-[10px] text-[#FFC513] block mt-1 font-semibold">
                      Calculated Expiration: {calculateVscStatus(facilitatorProfile.vscIssueDate).expiryFormatted}
                    </span>
                  </div>

                  <div>
                    <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">
                      Certificate Attachment File
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={facilitatorProfile.vscAttachmentName}
                        onChange={(e) => setFacilitatorProfile({ ...facilitatorProfile, vscAttachmentName: e.target.value })}
                        placeholder="VSC_Certificate_2026.pdf"
                        className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-white"
                      />
                      <label className="px-2.5 py-1.5 bg-[#339CA3]/20 hover:bg-[#339CA3]/30 text-[#339CA3] text-xs font-bold rounded-xl border border-[#339CA3]/40 cursor-pointer flex items-center space-x-1">
                        <Paperclip className="w-3.5 h-3.5" />
                        <span>Browse</span>
                        <input
                          type="file"
                          className="hidden"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              setFacilitatorProfile({
                                ...facilitatorProfile,
                                vscAttachmentName: e.target.files[0].name,
                                vscAttachmentSize: `${(e.target.files[0].size / (1024 * 1024)).toFixed(1)} MB`,
                                vscAttachmentDate: new Date().toISOString().split('T')[0],
                              });
                            }
                          }}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: CFLI Service History & Tenure (LOCKED / ADMIN-MANAGED NOTICE) */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block flex items-center space-x-1">
                    <Lock className="w-3 h-3 text-[#FFC513]" />
                    <span>3. Service History & Tenure (Admin Controlled)</span>
                  </span>
                  <span className="text-[9px] text-[#FFC513] font-bold bg-[#FFC513]/10 px-2 py-0.5 rounded-full border border-[#FFC513]/30">
                    Read-Only
                  </span>
                </div>

                <div className="p-3 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-2">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-[9px] uppercase font-bold text-slate-500 block">Start Date</span>
                      <span className="text-xs font-bold text-slate-300">{facilitatorProfile.startDateOfService}</span>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase font-bold text-slate-500 block">Tenure Credit</span>
                      <span className="text-xs font-bold text-[#FFC513]">{facilitatorProfile.tenureTerms} Terms Served</span>
                    </div>
                  </div>

                  <div className="pt-1 border-t border-slate-900 text-xs">
                    <span className="text-[9px] uppercase font-bold text-slate-500 block">Previous Batch</span>
                    <span className="text-xs font-medium text-slate-300">{facilitatorProfile.previousTermBatch}</span>
                  </div>

                  <p className="text-[10px] text-slate-500 pt-1 leading-snug">
                    🔒 These records are locked to preserve operational audit integrity. To request tenure or service adjustments, please contact CFLI administration.
                  </p>
                </div>
              </div>

              <div className="flex space-x-2 pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsEditingFacilitatorProfile(false)}
                  className="flex-1 py-2 bg-slate-800 text-slate-300 font-bold text-xs rounded-xl hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 bg-[#5859A7] text-white font-extrabold text-xs rounded-xl hover:opacity-95 shadow-md"
                >
                  Save Profile
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* MODAL: CREATE / EDIT TEAM MILESTONE                               */}
        {/* ----------------------------------------------------------------- */}
        {editingTeam && (
          <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <form
              onSubmit={handleSaveTeam}
              className="bg-slate-900 border border-slate-700 w-full max-w-sm rounded-3xl p-5 shadow-2xl space-y-3.5 animate-in fade-in"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-white text-sm flex items-center space-x-1.5">
                  <Trophy className="w-4 h-4 text-[#FFC513]" />
                  <span>{isCreatingNewTeam ? 'Create Milestone Team' : 'Edit Team & Topic'}</span>
                </h3>
                <button
                  type="button"
                  onClick={() => setEditingTeam(null)}
                  className="p-1 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Team Name
                </label>
                <input
                  type="text"
                  required
                  value={editingTeam.name}
                  onChange={(e) => setEditingTeam({ ...editingTeam, name: e.target.value })}
                  placeholder="e.g. Velocity Orators..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white focus:ring-2 focus:ring-[#339CA3]"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Competition Speech / Debate Topic
                </label>
                <textarea
                  rows={2}
                  required
                  value={editingTeam.topic}
                  onChange={(e) => setEditingTeam({ ...editingTeam, topic: e.target.value })}
                  placeholder="e.g. AI in Education: Catalyst or Shortcut?..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white focus:ring-2 focus:ring-[#FFC513]"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                  Assign Cohort Members ({editingTeam.members?.length || 0})
                </label>
                <div className="max-h-36 overflow-y-auto space-y-1.5 p-2 bg-slate-950 rounded-xl border border-slate-800">
                  {batchRoster.map((student) => {
                    const isSelected = editingTeam.members?.includes(student.studentId);
                    return (
                      <div
                        key={student.studentId}
                        onClick={() => toggleStudentInEditingTeam(student.studentId)}
                        className={`p-2 rounded-lg text-xs font-semibold cursor-pointer flex items-center justify-between border transition-all ${
                          isSelected
                            ? 'bg-[#339CA3]/20 border-[#339CA3] text-white'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <span>{student.firstName} {student.lastName} (Gr {student.grade})</span>
                        <div className={`w-4 h-4 rounded-md flex items-center justify-center border ${
                          isSelected ? 'bg-[#339CA3] border-[#339CA3] text-slate-950' : 'border-slate-600'
                        }`}>
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setEditingTeam(null)}
                  className="flex-1 py-2 bg-slate-800 text-slate-300 font-bold text-xs rounded-xl hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 bg-[#339CA3] text-white font-extrabold text-xs rounded-xl hover:opacity-95 shadow-md"
                >
                  Save Team
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* MODAL: CO-FACILITATOR TEAM ROSTER                                 */}
        {/* ----------------------------------------------------------------- */}
        {showCoFacilitatorsModal && (
          <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-3">
            <div className="bg-slate-900 border border-slate-700 w-full rounded-3xl p-5 shadow-2xl space-y-4 animate-in slide-in-from-bottom max-w-sm">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-[10px] font-bold uppercase text-[#FFC513] tracking-wider">
                    Instructional Team
                  </span>
                  <h3 className="font-extrabold text-white text-base">Co-Facilitators on Batch</h3>
                </div>
                <button
                  onClick={() => setShowCoFacilitatorsModal(false)}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-white bg-slate-800"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-2.5">
                {activeBatch.facilitators.map((fac) => (
                  <div key={fac.id} className="p-3 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-xs font-bold text-white">{fac.name}</div>
                        <span className="text-[10px] text-[#339CA3] font-semibold">{fac.role}</span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1" />
                    </div>

                    <div className="flex items-center space-x-2 pt-1 border-t border-slate-800/80">
                      <a
                        href={`tel:${fac.phone}`}
                        className="flex-1 py-1 px-2 bg-[#339CA3]/20 hover:bg-[#339CA3]/30 text-[#339CA3] text-xs font-bold rounded-lg flex items-center justify-center space-x-1"
                      >
                        <PhoneCall className="w-3 h-3" />
                        <span>{fac.phone}</span>
                      </a>
                      <a
                        href={`mailto:${fac.email}`}
                        className="flex-1 py-1 px-2 bg-[#5859A7]/20 hover:bg-[#5859A7]/30 text-indigo-300 text-xs font-bold rounded-lg flex items-center justify-center space-x-1"
                      >
                        <Mail className="w-3 h-3" />
                        <span>Email</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowCoFacilitatorsModal(false)}
                className="w-full py-2.5 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs hover:bg-slate-700"
              >
                Close Team Roster
              </button>
            </div>
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* MODAL: EDIT GOOGLE DOC NOTES URL                                  */}
        {/* ----------------------------------------------------------------- */}
        {isEditingNotesUrl && (
          <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <form
              onSubmit={handleSaveNotesUrl}
              className="bg-slate-900 border border-slate-700 w-full max-w-sm rounded-3xl p-5 shadow-2xl space-y-3.5 animate-in fade-in"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-white text-sm flex items-center space-x-1.5">
                  <BookOpen className="w-4 h-4 text-[#FFC513]" />
                  <span>Edit Session {selectedSessionNum} Notes Link</span>
                </h3>
                <button
                  type="button"
                  onClick={() => setIsEditingNotesUrl(false)}
                  className="p-1 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Google Doc / Drive URL
                </label>
                <input
                  type="url"
                  required
                  value={tempNotesUrl}
                  onChange={(e) => setTempNotesUrl(e.target.value)}
                  placeholder="https://docs.google.com/document/d/..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#FFC513]"
                />
              </div>

              <div className="flex space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditingNotesUrl(false)}
                  className="flex-1 py-2 bg-slate-800 text-slate-300 font-bold text-xs rounded-xl hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 bg-[#FFC513] text-slate-950 font-extrabold text-xs rounded-xl hover:opacity-95 shadow-md"
                >
                  Save Link
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* MODAL: EDIT PARENT PROFILE                                        */}
        {/* ----------------------------------------------------------------- */}
        {isEditingParentProfile && (
          <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsEditingParentProfile(false);
                triggerSavedToast('Parent Profile Updated!');
              }}
              className="bg-slate-900 border border-slate-700 w-full max-w-sm rounded-3xl p-5 shadow-2xl space-y-3.5 animate-in fade-in max-h-[92vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-white text-sm flex items-center space-x-1.5">
                  <User className="w-4 h-4 text-[#E98E30]" />
                  <span>Edit Guardian Profile</span>
                </h3>
                <button
                  type="button"
                  onClick={() => setIsEditingParentProfile(false)}
                  className="p-1 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                  Full Name
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    value={parentProfile.firstName}
                    onChange={(e) => setParentProfile({ ...parentProfile, firstName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                  />
                  <input
                    type="text"
                    required
                    value={parentProfile.lastName}
                    onChange={(e) => setParentProfile({ ...parentProfile, lastName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                    Mobile Phone
                  </label>
                  <input
                    type="tel"
                    required
                    value={parentProfile.phone}
                    onChange={(e) => setParentProfile({ ...parentProfile, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={parentProfile.email}
                    onChange={(e) => setParentProfile({ ...parentProfile, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                    City of Residence
                  </label>
                  <input
                    type="text"
                    required
                    value={parentProfile.city}
                    onChange={(e) => setParentProfile({ ...parentProfile, city: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    required
                    value={parentProfile.postalCode}
                    onChange={(e) => setParentProfile({ ...parentProfile, postalCode: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white uppercase"
                  />
                </div>
              </div>

              <div className="space-y-2 pt-1 border-t border-slate-800">
                <span className="text-[10px] font-bold uppercase text-slate-400 block">Emergency Contact</span>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Contact Name"
                    value={parentProfile.emergencyContactName}
                    onChange={(e) => setParentProfile({ ...parentProfile, emergencyContactName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                  />
                  <input
                    type="tel"
                    placeholder="Contact Phone"
                    value={parentProfile.emergencyContactPhone}
                    onChange={(e) => setParentProfile({ ...parentProfile, emergencyContactPhone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                  />
                </div>
              </div>

              <div className="flex space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditingParentProfile(false)}
                  className="flex-1 py-2 bg-slate-800 text-slate-300 font-bold text-xs rounded-xl hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 bg-[#E98E30] text-slate-950 font-extrabold text-xs rounded-xl hover:opacity-95 shadow-md"
                >
                  Save Profile
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* MODAL: EDIT CHILD DETAILS                                         */}
        {/* ----------------------------------------------------------------- */}
        {editingChild && (
          <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setBatchRoster((prev) =>
                  prev.map((c) => (c.studentId === editingChild.studentId ? editingChild : c))
                );
                setEditingChild(null);
                triggerSavedToast('Student Details Updated!');
              }}
              className="bg-slate-900 border border-slate-700 w-full max-w-sm rounded-3xl p-5 shadow-2xl space-y-3 animate-in fade-in max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-white text-sm flex items-center space-x-1.5">
                  <GraduationCap className="w-4 h-4 text-[#339CA3]" />
                  <span>Edit Child: {editingChild.firstName} {editingChild.lastName}</span>
                </h3>
                <button
                  type="button"
                  onClick={() => setEditingChild(null)}
                  className="p-1 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">First Name</label>
                  <input
                    type="text"
                    required
                    value={editingChild.firstName}
                    onChange={(e) => setEditingChild({ ...editingChild, firstName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Last Name</label>
                  <input
                    type="text"
                    required
                    value={editingChild.lastName}
                    onChange={(e) => setEditingChild({ ...editingChild, lastName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                  Mandatory Date of Birth
                </label>
                <input
                  type="date"
                  required
                  value={editingChild.dob}
                  onChange={(e) => setEditingChild({ ...editingChild, dob: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                    Grade Level
                  </label>
                  <select
                    value={editingChild.grade}
                    onChange={(e) => setEditingChild({ ...editingChild, grade: parseInt(e.target.value) })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                  >
                    {[7, 8, 9, 10, 11, 12].map((g) => (
                      <option key={g} value={g}>Grade {g}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    value={editingChild.postalCode}
                    onChange={(e) => setEditingChild({ ...editingChild, postalCode: e.target.value.toUpperCase() })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white uppercase"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">City of Residence</label>
                <input
                  type="text"
                  value={editingChild.city || 'Markham'}
                  onChange={(e) => setEditingChild({ ...editingChild, city: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                  Medical / Allergies
                </label>
                <input
                  type="text"
                  value={editingChild.allergies}
                  onChange={(e) => setEditingChild({ ...editingChild, allergies: e.target.value })}
                  placeholder="e.g. Peanuts, Asthma, None..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                />
              </div>

              <div className="flex space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setEditingChild(null)}
                  className="flex-1 py-2 bg-slate-800 text-slate-300 font-bold text-xs rounded-xl hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 bg-[#339CA3] text-white font-extrabold text-xs rounded-xl hover:opacity-95 shadow-md"
                >
                  Save Child
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* MODAL: NEW PROGRAM REGISTRATION / CHILD ENROLMENT WIZARD          */}
        {/* ----------------------------------------------------------------- */}
        {isRegisteringProgram && (
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (newRegChildType === 'new') {
                  const newChildId = `s-${Date.now()}`;
                  const createdChild = {
                    studentId: newChildId,
                    firstName: newRegistrationData.firstName,
                    lastName: newRegistrationData.lastName,
                    grade: parseInt(newRegistrationData.grade),
                    dob: newRegistrationData.dob,
                    allergies: newRegistrationData.allergies || 'None',
                    city: newRegistrationData.city || 'Markham',
                    postalCode: newRegistrationData.postalCode || 'L3R 5M9',
                    primaryGuardianName: `${parentProfile.firstName} ${parentProfile.lastName} (Parent)`,
                    primaryGuardianPhone: parentProfile.phone,
                    emergencyContactName: parentProfile.emergencyContactName,
                    emergencyContactPhone: parentProfile.emergencyContactPhone,
                  };
                  setBatchRoster((prev) => [createdChild, ...prev]);
                  triggerSavedToast(`Enrolled ${createdChild.firstName} into ${newRegistrationData.batchCode}!`);
                } else {
                  triggerSavedToast(`Registration confirmed for ${newRegistrationData.batchCode}!`);
                }
                setIsRegisteringProgram(false);
              }}
              className="bg-slate-900 border border-slate-700 w-full max-w-sm rounded-3xl p-5 shadow-2xl space-y-3 animate-in fade-in max-h-[92vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center pb-1 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded-lg bg-[#E98E30]/20 text-[#E98E30] flex items-center justify-center font-bold">
                    <Plus className="w-4 h-4 stroke-[3]" />
                  </div>
                  <h3 className="font-extrabold text-white text-sm">Program & Child Enrolment</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsRegisteringProgram(false)}
                  className="p-1 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Selector: New Child vs Existing Child */}
              <div className="bg-slate-950 p-1 border border-slate-800 rounded-xl flex space-x-1">
                <button
                  type="button"
                  onClick={() => setNewRegChildType('new')}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    newRegChildType === 'new' ? 'bg-[#E98E30] text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Enrol New Child
                </button>
                <button
                  type="button"
                  onClick={() => setNewRegChildType('existing')}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    newRegChildType === 'existing' ? 'bg-[#E98E30] text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Existing Child
                </button>
              </div>

              {newRegChildType === 'new' ? (
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase text-[#FFC513] block">1. Child Identity</span>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">First Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Child's first name"
                        value={newRegistrationData.firstName}
                        onChange={(e) => setNewRegistrationData({ ...newRegistrationData, firstName: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">Last Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Child's last name"
                        value={newRegistrationData.lastName}
                        onChange={(e) => setNewRegistrationData({ ...newRegistrationData, lastName: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[9px] font-bold uppercase text-[#FFC513] block mb-1">
                      Mandatory Date of Birth *
                    </label>
                    <input
                      type="date"
                      required
                      value={newRegistrationData.dob}
                      onChange={(e) => setNewRegistrationData({ ...newRegistrationData, dob: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">Grade Level</label>
                      <select
                        value={newRegistrationData.grade}
                        onChange={(e) => setNewRegistrationData({ ...newRegistrationData, grade: parseInt(e.target.value) })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs font-bold text-white"
                      >
                        {[7, 8, 9, 10, 11, 12].map((g) => (
                          <option key={g} value={g}>Grade {g}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">Postal Code</label>
                      <input
                        type="text"
                        value={newRegistrationData.postalCode}
                        onChange={(e) => setNewRegistrationData({ ...newRegistrationData, postalCode: e.target.value.toUpperCase() })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-white uppercase"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">City of Residence</label>
                    <input
                      type="text"
                      value={newRegistrationData.city}
                      onChange={(e) => setNewRegistrationData({ ...newRegistrationData, city: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">Medical / Allergies</label>
                    <input
                      type="text"
                      placeholder="e.g. Peanuts, Asthma, None"
                      value={newRegistrationData.allergies}
                      onChange={(e) => setNewRegistrationData({ ...newRegistrationData, allergies: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">Select Registered Child</label>
                  <select
                    value={newRegistrationData.existingStudentId}
                    onChange={(e) => setNewRegistrationData({ ...newRegistrationData, existingStudentId: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs font-bold text-white"
                  >
                    {myChildren.map((c) => (
                      <option key={c.studentId} value={c.studentId}>
                        {c.firstName} {c.lastName} (Grade {c.grade})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Program & Batch Selection */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <span className="text-[10px] font-bold uppercase text-[#339CA3] block">2. Select Program & Cohort</span>

                <div>
                  <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">Target Term</label>
                  <select
                    value={newRegistrationData.term}
                    onChange={(e) => setNewRegistrationData({ ...newRegistrationData, term: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs font-bold text-white"
                  >
                    <option value="Spring 2026">Spring 2026 (Starts Apr 11)</option>
                    <option value="Winter 2026">Winter 2026 (Current)</option>
                    <option value="Fall 2026">Fall 2026 (Starts Sep 19)</option>
                  </select>
                </div>

                <div>
                  <label className="text-[9px] font-bold uppercase text-slate-400 block mb-1">Select Cohort / Location</label>
                  <select
                    value={newRegistrationData.batchCode}
                    onChange={(e) => setNewRegistrationData({ ...newRegistrationData, batchCode: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs font-bold text-white"
                  >
                    <option value="YLP - 1A Spring 2026: 1 Markham">YLP - 1A Spring 2026: 1 Markham (Saturdays 10:00 AM)</option>
                    <option value="YLP - 1A Spring 2026: 2 Markham">YLP - 1A Spring 2026: 2 Markham (Saturdays 1:00 PM)</option>
                    <option value="YLP - 2A Spring 2026: 3 Markham">YLP - 2A Spring 2026: 3 Markham (Saturdays 1:00 PM)</option>
                    <option value="YLP - 1A Spring 2026: 4 Markham">YLP - 1A Spring 2026: 4 Markham (Saturdays 3:30 PM)</option>
                    <option value="YLP - 1A Spring 2026: 5 Markham">YLP - 1A Spring 2026: 5 Markham (Saturdays 3:30 PM)</option>
                  </select>
                </div>
              </div>

              <div className="flex space-x-2 pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsRegisteringProgram(false)}
                  className="flex-1 py-2 bg-slate-800 text-slate-300 font-bold text-xs rounded-xl hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 bg-[#E98E30] text-slate-950 font-black text-xs rounded-xl hover:opacity-95 shadow-md"
                >
                  Confirm Enrolment
                </button>
              </div>
            </form>
          </div>
        )}
      </main>

      <footer className="mt-4 text-center text-xs text-slate-500 flex items-center justify-center space-x-2">
        <div className="w-5 h-5 bg-white rounded-md p-0.5 inline-flex items-center justify-center shadow-xs">
          <CfliLogo variant="mark" className="w-4 h-4" />
        </div>
        <span>CFLI Canada Youth Leadership Program • Facilitator Compliance & VSC Management</span>
      </footer>
    </div>
  );
}
