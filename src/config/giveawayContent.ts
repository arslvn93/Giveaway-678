// This file centralizes all editable content for the giveaway page

// Prize section
export const prizeImages = [
  "https://api.typeform.com/responses/files/ea11f57d932d624ed5938c78e4da092cc2e99dcfb94963f5b0bbe23dcfe7f9f1/raps_game.jpg", // Raptors game action image
  "https://images.unsplash.com/photo-1578575433563-d6e768915a67?q=80&w=500", // Stadium interior view
  "https://images.unsplash.com/photo-1592179906122-f3e068f1fdb7?q=80&w=500", // Crowd cheering
];

export const prizeContent = {
  title: "Win Two Lower Bowl Raptors Tickets",
  description:
    "Experience the thrill of live NBA action with two exclusive lower bowl tickets to see the Toronto Raptors in full flight! Enjoy an unforgettable game day experience with premium seating valued between $300 and $400. Perfect for a memorable date night or a fun outing with family.",
  features: [
    "Exclusive lower bowl seating for an up-close game experience",
    "Enjoy premium views and electrifying live basketball action",
    "Perfect for a memorable night out – whether it’s a date or family outing",
    "Join fellow fans in cheering for the Toronto Raptors",
    "Prize valued between $300 and $400, absolutely free to win",
  ],
  value: "$300-$400",
};

// Header section
export const headerContent = {
  title: "Win 2 Raptors Tickets for an Unforgettable Night Out!",
  description:
    "Calling all Toronto Raptors fans! Enter for a chance to win exclusive lower bowl tickets for the upcoming game. Experience thrilling live action and be a part of the excitement!",
  ctaText: "Enter Now",
  heroImage: prizeImages[0],
};

// Navigation section
export const navigationContent = {
  title: "Raptors Ticket Giveaway",
  links: [
    { name: "Home", href: "#" },
    { name: "Prize Details", href: "#prize" },
    { name: "How to Enter", href: "#howToEnter" },
    { name: "Rules", href: "#rules" },
    { name: "Contact", href: "#contact" },
  ],
};

// How to Enter section
export const howToEnterContent = {
  title: "How to Enter",
  description:
    "Entering is easy! Follow these simple steps to secure your chance to win two exclusive lower bowl Raptors tickets.",
  steps: [
    {
      icon: "Mail",
      title: "Fill Out the Entry Form",
      description: "Provide your name and email to register for the giveaway.",
    },
    {
      icon: "Share2",
      title: "Share with Friends",
      description: "Share the giveaway on social media for additional entries.",
    },
    {
      icon: "Users",
      title: "Confirm Your Entry",
      description: "Check your email for a confirmation link to finalize your entry.",
    },
  ],
  benefits: [
    {
      icon: "Clock",
      title: "Quick & Easy",
      desc: "Takes less than a minute.",
    },
    {
      icon: "Trophy",
      title: "Multiple Entries",
      desc: "Share for extra chances to win.",
    },
    {
      icon: "Gift",
      title: "Exclusive Prize",
      desc: "Valued between $300 and $400.",
    },
  ],
  formLabels: {
    nameLabel: "Your Name",
    namePlaceholder: "John Doe",
    emailLabel: "Email Address",
    emailPlaceholder: "you@example.com",
    submitButton: "Enter Giveaway",
    processingText: "Submitting your entry...",
    sharingPlatforms: ["Facebook", "Twitter", "Instagram"],
    sharingText: "Share for Extra Entries:",
    termsText:
      "By entering, you agree to our Terms & Conditions and Privacy Policy.",
  },
  successMessage: {
    title: "Entry Submitted!",
    description: "Check your email to confirm your entry and secure your chance to win.",
  },
  currentEntries: 482,
};

// Rules section
export const rulesContent = {
  title: "Rules & Eligibility",
  description:
    "Review the following rules and eligibility requirements before entering the giveaway.",
  rules: [
    {
      question: "Who is eligible to enter?",
      answer:
        "Anyone 18 years or older residing in the Greater Toronto Area can enter this giveaway.",
    },
    {
      question: "How long does the giveaway run?",
      answer:
        "This giveaway runs until March 21, 2025. Don’t miss your chance to enter before the deadline!",
    },
    {
      question: "How will the winner be selected?",
      answer:
        "The winner will be selected randomly from all valid entries using a certified random selection tool to ensure fairness.",
    },
    {
      question: "When and how will the winner be notified?",
      answer:
        "The winner will be notified via email within 48 hours after the giveaway ends. They must respond within 72 hours to claim their prize.",
    },
    {
      question: "How many times can I enter?",
      answer:
        "Each person may enter once. Additional entries can be earned through sharing on social media (up to 3 additional entries).",
    },
    {
      question: "Is my information secure?",
      answer:
        "Yes, we take privacy seriously. Your information will only be used for this giveaway and will not be shared with third parties.",
    },
  ],
  imageUrl:
    "https://images.unsplash.com/photo-1592179906122-f3e068f1fdb7?q=80&w=800",
  tipsForEntering: [
    "Double-check your email address before submitting your entry",
    "Share on social media for additional entry opportunities",
    "Set a reminder for the drawing date on March 21, 2025",
  ],
  importantNotice:
    "The winner will be contacted via the email provided during entry. Make sure to check your inbox (and spam folder) regularly after the giveaway ends.",
  supportEmail: "arslan@salesgenius.co",
  termsText: "By entering, you agree to all rules and terms.",
  downloadRulesText: "Download Full Rules PDF",
};

// Contact section
export const contactContent = {
  title: "Get In Touch",
  email: "arslan@salesgenius.co",
  phone: "4166554850",
  brokerage: {
    name: "Sales Genius",
    address: "123 Arena Blvd, Toronto",
  },
  disclaimer:
    "This site is not intended to solicit buyers or sellers who are currently under contract.",
  copyright: "Copyright 2025. All rights reserved",
  privacyPolicyText: "Privacy Policy",
};

// Footer section
export const footerContent = {
  aboutText:
    "Sales Genius brings you exclusive giveaways and unforgettable experiences for Toronto sports fans.",
  email: "arslan@salesgenius.co",
  phone: "4166554850",
  quickLinks: ["Home", "About", "Giveaway", "Rules", "Contact"],
  newsletterText:
    "Subscribe to our newsletter for the latest updates on giveaways and exclusive events.",
  brokerage: {
    name: "Sales Genius",
    address: "123 Arena Blvd, Toronto",
  },
  disclaimer:
    "This site is not intended to solicit buyers or sellers who are currently under contract.",
  copyright: "Copyright 2025. All rights reserved",
  company: "Sales Genius",
  privacyPolicyText: "Privacy Policy",
};

// Countdown
export const countdownContent = {
  endDate: new Date("March 21, 2025"),
};

// Color scheme configuration for the entire giveaway
export const colorScheme = {
  primary: {
    main: "blue-600",
    light: "blue-400",
    dark: "blue-800",
    gradient: "from-blue-500 to-blue-700",
    text: "blue-700",
    textLight: "blue-500",
    textDark: "blue-900",
    hover: "blue-700",
    border: "blue-200",
    background: "blue-50",
    accent: "blue-100",
    accentDark: "blue-300",
  },
  secondary: {
    main: "white",
    text: "gray-700",
    textLight: "gray-600",
    textDark: "gray-800",
    border: "gray-200",
    background: "white",
    accent: "gray-100",
  },
  utility: {
    success: "green-600",
    successLight: "green-100",
    error: "red-600",
    errorLight: "red-100",
    warning: "yellow-600",
    warningLight: "yellow-100",
    info: "blue-600",
    infoLight: "blue-100",
  },
  gradients: {
    header: "from-blue-100/70 via-blue-50/40 to-transparent",
    countdownBg: "from-blue-800 to-blue-950",
    countdownText: "from-blue-200 to-blue-400",
    prizeTitle: "from-blue-700 to-blue-500",
    button: "from-blue-500 to-blue-600",
    buttonHover: "from-blue-600 to-blue-700",
  },
  shadows: {
    small: "shadow-md",
    medium: "shadow-lg",
    large: "shadow-xl",
    extraLarge: "shadow-2xl",
    glow: "shadow-[0_0_15px_rgba(59,130,246,0.3)]",
  },
  animations: {
    float: "animate-float",
    pulseSlow: "animate-pulse-slow",
    bounceSlow: "animate-bounce-slow",
  },
};