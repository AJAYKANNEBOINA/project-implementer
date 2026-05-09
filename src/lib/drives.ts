export type Drive = {
  id: string;
  company: string;
  logoSeed: string;
  experience: string;
  priority?: boolean;
  role: string;
  date: string;
  time: string;
  location: string;
  eligibility: string;
};

export const drives: Drive[] = [
  { id: "1", company: "Genpact", logoSeed: "G", experience: "0-1 years", priority: true, role: "Customer Support Associate", date: "12 Feb 2026", time: "10:00 AM - 4:00 PM", location: "Hyderabad, Telangana", eligibility: "Any Graduate" },
  { id: "2", company: "Capgemini", logoSeed: "C", experience: "3-5 years", priority: true, role: "Java Full Stack Developer", date: "14 Feb 2026", time: "10:00 AM - 2:00 PM", location: "Bengaluru, Karnataka", eligibility: "B.E / B.Tech / MCA" },
  { id: "3", company: "Capgemini", logoSeed: "C", experience: "1-3 years", role: "Software Engineer (Java / .NET)", date: "07 Feb 2026", time: "9:30 AM - 1:00 PM", location: "Bengaluru, Karnataka", eligibility: "B.E / B.Tech / MCA" },
  { id: "4", company: "HDFC Life", logoSeed: "H", experience: "1-3 years", priority: true, role: "Sales Development Manager", date: "08 Feb 2026", time: "10:00 AM - 4:00 PM", location: "Mumbai, Maharashtra", eligibility: "Any Graduate" },
  { id: "5", company: "Genpact", logoSeed: "G", experience: "0-1 years", role: "Process Associate (Finance & Accounting)", date: "09 Feb 2026", time: "9:00 AM - 12:30 PM", location: "Hyderabad, Telangana", eligibility: "B.Com / M.Com / MBA" },
  { id: "6", company: "Kotak Mahindra Bank", logoSeed: "K", experience: "0-1 years", priority: true, role: "Acquisition Manager - CASA", date: "09 Feb 2026", time: "10:00 AM - 3:00 PM", location: "Pune, Maharashtra", eligibility: "Any Graduate" },
  { id: "7", company: "Hewlett Packard Enterprise", logoSeed: "HPE", experience: "3-5 years", priority: true, role: "Server Support Engineer", date: "10 Feb 2026", time: "9:30 AM - 1:30 PM", location: "Bengaluru, Karnataka", eligibility: "B.E / B.Tech (CS / IT / ECE)" },
  { id: "8", company: "Tech Mahindra", logoSeed: "T", experience: "1-3 years", role: "Network Engineer", date: "10 Feb 2026", time: "9:00 AM - 1:00 PM", location: "Hyderabad, Telangana", eligibility: "B.E / B.Tech with CCNA" },
  { id: "9", company: "Genpact", logoSeed: "G", experience: "0-1 years", role: "Customer Service Representative", date: "11 Feb 2026", time: "10:00 AM - 3:00 PM", location: "Gurugram, Haryana", eligibility: "Any Graduate" },
  { id: "10", company: "Sopra Steria", logoSeed: "S", experience: "3-5 years", priority: true, role: "SAP Consultant", date: "11 Feb 2026", time: "9:30 AM - 1:30 PM", location: "Noida, Uttar Pradesh", eligibility: "Any Graduate with SAP" },
  { id: "11", company: "ICICI Bank", logoSeed: "I", experience: "1-3 years", role: "Relationship Manager - Retail Banking", date: "12 Feb 2026", time: "9:30 AM - 2:00 PM", location: "Chennai, Tamil Nadu", eligibility: "Any Graduate / MBA" },
  { id: "12", company: "LTIMindtree", logoSeed: "L", experience: "5-8 years", priority: true, role: "Senior Software Engineer (Full Stack)", date: "14 Feb 2026", time: "9:30 AM - 1:00 PM", location: "Bengaluru, Karnataka", eligibility: "B.E / B.Tech / MCA" },
  { id: "13", company: "LTIMindtree", logoSeed: "L", experience: "3-5 years", role: "Data Engineer", date: "15 Feb 2026", time: "10:00 AM - 2:00 PM", location: "Hyderabad, Telangana", eligibility: "B.E / B.Tech / M.Tech" },
  { id: "14", company: "ICICI Bank", logoSeed: "I", experience: "0-1 years", role: "Phone Banking Officer", date: "13 Feb 2026", time: "10:00 AM - 4:00 PM", location: "Mumbai, Maharashtra", eligibility: "Any Graduate" },
];

export const partners = [
  "Genpact", "Capgemini", "HDFC Life", "Hewlett Packard Enterprise",
  "Kotak Mahindra Bank", "Infosys", "Tech Mahindra", "Sopra Steria",
  "ICICI Bank", "Wipro", "LTIMindtree", "TCS",
];
