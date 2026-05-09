import genpact from "@/assets/logos/genpact.png";
import capgemini from "@/assets/logos/capgemini.png";
import hdfc from "@/assets/logos/hdfc.png";
import kotak from "@/assets/logos/kotak.png";
import hpe from "@/assets/logos/hpe.png";
import techmahindra from "@/assets/logos/techmahindra.png";
import icici from "@/assets/logos/icici.png";
import ltimindtree from "@/assets/logos/ltimindtree.png";
import wipro from "@/assets/logos/wipro.png";
import tcs from "@/assets/logos/tcs.png";

export const logoMap: Record<string, string> = {
  Genpact: genpact,
  Capgemini: capgemini,
  "HDFC Life": hdfc,
  "Kotak Mahindra Bank": kotak,
  "Hewlett Packard Enterprise": hpe,
  "Tech Mahindra": techmahindra,
  "ICICI Bank": icici,
  LTIMindtree: ltimindtree,
  Wipro: wipro,
  TCS: tcs,
  "Sopra Steria": ltimindtree, // fallback
  Infosys: hpe, // fallback (no logo provided)
};

export const partnerLogos: { name: string; src: string }[] = [
  { name: "Genpact", src: genpact },
  { name: "Capgemini", src: capgemini },
  { name: "HDFC Life", src: hdfc },
  { name: "HPE", src: hpe },
  { name: "Kotak Mahindra Bank", src: kotak },
  { name: "Tech Mahindra", src: techmahindra },
  { name: "ICICI Bank", src: icici },
  { name: "LTIMindtree", src: ltimindtree },
  { name: "Wipro", src: wipro },
  { name: "TCS", src: tcs },
];
