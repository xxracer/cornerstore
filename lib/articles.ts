export type ArticleSection = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Article = {
  slug: string;
  icon: string;
  tag: string;
  title: string;
  description: string;
  content: ArticleSection[];
  cta: {
    text: string;
    href: string;
  };
};

export const articles: Article[] = [
  {
    slug: "private-pay-mediplanner-nursing-visits",
    icon: "CalendarDays",
    tag: "Private-pay services",
    title: "Private-pay nursing visits to set up your MedPlanner",
    description:
      "We now offer affordable private-pay visits for patients and families who need a nurse to organize, set up, and explain a weekly medication planner in the comfort of home.",
    content: [
      {
        heading: "What is a MedPlanner visit?",
        paragraphs: [
          "A MedPlanner is a simple, weekly medication organizer that helps patients and caregivers keep track of multiple prescriptions, doses, and timing. Our private-pay nursing visit brings a licensed nurse to your home to review your medications, fill the planner for the week, label everything clearly, and teach you or your caregiver how to use it safely.",
          "This service is ideal for anyone who wants extra confidence with their medication routine but does not qualify for a full home health episode under insurance.",
        ],
      },
      {
        heading: "What is included",
        bullets: [
          "In-home visit from a licensed nurse",
          "Review of current medications, allergies, and physician instructions",
          "Set up of a weekly medication planner",
          "Clear labeling and written instructions",
          "Education for the patient and family caregiver",
          "Coordination with your pharmacy or physician when needed",
        ],
      },
      {
        heading: "Who benefits most",
        paragraphs: [
          "This service is especially helpful for seniors managing several prescriptions, patients recently discharged from a hospital or facility, family caregivers who want peace of mind, and anyone recovering from an illness or surgery who needs temporary support getting organized.",
        ],
      },
      {
        heading: "Simple, transparent pricing",
        paragraphs: [
          "Because this is a private-pay service, no insurance authorization is required. You choose the visit that fits your schedule. Pricing is straightforward, and our team will explain the cost before the visit so there are no surprises.",
        ],
      },
    ],
    cta: {
      text: "Schedule a MedPlanner visit",
      href: "/contact",
    },
  },
  {
    slug: "what-does-skilled-nursing-care-include-at-home",
    icon: "HeartPulse",
    tag: "Skilled nursing",
    title: "What does skilled nursing care include at home?",
    description:
      "Many families wonder what a home health nurse actually does. From wound care and IV therapy to medication management and vitals monitoring, skilled nursing keeps patients safe without leaving home.",
    content: [
      {
        heading: "Bringing the clinic to your living room",
        paragraphs: [
          "Skilled nursing at home means a licensed nurse comes to you with the training, supplies, and oversight needed to manage complex health needs. The goal is to keep you out of the hospital, comfortable in familiar surroundings, and connected to your physician's plan of care.",
        ],
      },
      {
        heading: "Services a home health nurse may provide",
        bullets: [
          "Wound care and dressing changes",
          "IV therapy, injections, and blood draws",
          "Medication management and education",
          "Vital signs and disease monitoring",
          "Tube feedings and catheter care",
          "Post-surgical recovery support",
          "Coordination with your physician and pharmacy",
        ],
      },
      {
        heading: "When families ask for help",
        paragraphs: [
          "Families in Rockport, Portland, Corpus Christi, and surrounding communities often call us after a hospital discharge, when a loved one's condition is changing, or when caregiving at home has become more than they can manage alone. A skilled nurse can visit regularly, teach family members what to watch for, and catch small problems before they become emergencies.",
        ],
      },
    ],
    cta: {
      text: "Ask about nursing care",
      href: "/contact",
    },
  },
  {
    slug: "how-to-care-for-a-loved-one-with-alzheimers-or-dementia",
    icon: "Brain",
    tag: "Memory care",
    title: "How to care for a loved one with Alzheimer's or dementia",
    description:
      "Caring for someone with memory loss can feel overwhelming. Learn how routine, communication, and professional support can help families in Rockport, Portland, and Corpus Christi.",
    content: [
      {
        heading: "Why memory care is different",
        paragraphs: [
          "Dementia and Alzheimer's disease change how a person understands the world, communicates, and completes everyday tasks. Care at home can work beautifully when the environment is predictable, the approach is patient-centered, and the family has the right support.",
        ],
      },
      {
        heading: "What helps at home",
        bullets: [
          "A consistent daily routine for meals, sleep, and activities",
          "Simple instructions and one-step requests",
          "Calm communication, even when questions repeat",
          "Safety checks for wandering, falls, and medication errors",
          "Respite and education for family caregivers",
        ],
      },
      {
        heading: "You do not have to do this alone",
        paragraphs: [
          "Our team specializes in dementia care for families across the Coastal Bend. We help create a plan that protects dignity, supports the caregiver, and keeps the patient safely at home for as long as possible.",
        ],
      },
    ],
    cta: {
      text: "Explore memory care support",
      href: "/contact",
    },
  },
  {
    slug: "medication-management-for-seniors-at-home",
    icon: "Pill",
    tag: "Medication safety",
    title: "Medication management for seniors at home",
    description:
      "Missed doses and medication conflicts are common risks for older adults. Discover how home health teams help organize, monitor, and administer medications safely.",
    content: [
      {
        heading: "The hidden risk of multiple medications",
        paragraphs: [
          "As we age, medication lists tend to grow. Multiple prescriptions, over-the-counter products, and supplements can interact in unexpected ways. For seniors living at home, the risk of missed doses, double doses, or dangerous interactions is real.",
        ],
      },
      {
        heading: "How home health can help",
        bullets: [
          "Create an accurate, up-to-date medication list",
          "Review prescriptions for duplications and interactions",
          "Set up pill organizers and reminders",
          "Teach patients and caregivers about each medication",
          "Watch for side effects and report concerns to the physician",
        ],
      },
      {
        heading: "Peace of mind for families",
        paragraphs: [
          "Whether you need short-term help after a hospital stay or ongoing oversight for a chronic condition, our nurses make medication safety a priority. We also offer private-pay MedPlanner setup visits for families who want extra support outside of insurance-covered care.",
        ],
      },
    ],
    cta: {
      text: "Learn about medication support",
      href: "/contact",
    },
  },
  {
    slug: "what-joint-commission-accreditation-means",
    icon: "ShieldCheck",
    tag: "Accreditation",
    title: "What Joint Commission accreditation means for your family",
    description:
      "Not every home health agency meets national quality and safety standards. Accreditation means your loved one's care is held to strict, regularly reviewed guidelines.",
    content: [
      {
        heading: "A national seal of quality",
        paragraphs: [
          "The Joint Commission's Gold Seal of Approval is one of the most respected quality marks in health care. Earning it means an agency has been reviewed against rigorous standards for patient safety, clinical practice, leadership, and performance improvement.",
        ],
      },
      {
        heading: "What accreditation checks",
        bullets: [
          "Patient rights and communication",
          "Infection control and medication safety",
          "Staff qualifications and training",
          "Care planning and coordination",
          "Continuous quality improvement",
        ],
      },
      {
        heading: "Why it matters at home",
        paragraphs: [
          "Home health happens where life is lived, not in a controlled clinic setting. Accreditation gives families confidence that the same high standards apply in the living room, kitchen, and bedroom. At Cornerstone, we are proud to carry the Gold Seal and to live up to it every day.",
        ],
      },
    ],
    cta: {
      text: "Request care from an accredited team",
      href: "/contact",
    },
  },
  {
    slug: "ten-practical-tips-for-family-caregivers",
    icon: "Users",
    tag: "Family caregivers",
    title: "10 practical tips for family caregivers",
    description:
      "Balancing work, family, and caregiving is exhausting. These tips can help caregivers protect their own health while supporting a parent, spouse, or aging relative.",
    content: [
      {
        heading: "Caregiving is a marathon, not a sprint",
        paragraphs: [
          "Most family caregivers never planned for the role. It often starts small and grows quickly. Protecting your own health is not selfish; it is the only way to keep showing up for the person you love.",
        ],
      },
      {
        heading: "Ten tips that make a difference",
        bullets: [
          "Accept help when it is offered and ask for it when it is not.",
          "Keep a shared notebook or digital file for medications, appointments, and concerns.",
          "Build a routine so both you and your loved one know what to expect.",
          "Take breaks before you feel burned out.",
          "Use respite care or a home health aide for personal tasks.",
          "Stay in touch with your loved one's physician and care team.",
          "Prioritize safety: remove fall hazards and organize medications.",
          "Keep important documents accessible and up to date.",
          "Join a caregiver support group in person or online.",
          "Notice your own stress, sleep, and mood. You matter too.",
        ],
      },
      {
        heading: "When to bring in professional help",
        paragraphs: [
          "If caregiving is affecting your health, your job, or your family relationships, it may be time to add professional support. A home health aide, nurse, or therapist can take on the clinical and physical tasks so you can focus on being a spouse, child, or partner again.",
        ],
      },
    ],
    cta: {
      text: "Get caregiver support",
      href: "/contact",
    },
  },
  {
    slug: "recovering-from-surgery-at-home-with-therapy-support",
    icon: "Home",
    tag: "Recovery",
    title: "Recovering from surgery at home with therapy support",
    description:
      "Physical and occupational therapy at home helps patients rebuild strength, balance, and confidence after surgery, reducing the risk of falls and readmissions.",
    content: [
      {
        heading: "Why recovery at home works",
        paragraphs: [
          "Hospitals are for acute care, but healing happens best where a patient feels safe and relaxed. Home-based therapy lets patients practice real-life movements in the exact place where they will live, from getting out of bed to navigating the bathroom and kitchen.",
        ],
      },
      {
        heading: "What therapy at home includes",
        bullets: [
          "Physical therapy for strength, balance, and mobility",
          "Occupational therapy for daily tasks like bathing and dressing",
          "Speech therapy when swallowing or communication is affected",
          "Fall prevention and home safety recommendations",
          "Progress tracking shared with the physician",
        ],
      },
      {
        heading: "Reducing the risk of returning to the hospital",
        paragraphs: [
          "Recovery does not stop when the incision heals. Regaining strength, learning to move safely, and following the surgeon's instructions are what prevent readmissions. Our therapy team works closely with nurses and physicians to keep recovery on track.",
        ],
      },
    ],
    cta: {
      text: "Ask about therapy at home",
      href: "/contact",
    },
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getAllSlugs(): string[] {
  return articles.map((article) => article.slug);
}
