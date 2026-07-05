export interface ProblemSection {
  title: string;
  text: string;
  boxTitle?: string;
  boxBullets?: string[];
  image?: string;
}

export interface SolutionSection {
  title: string;
  text: string;
  boxTitle?: string;
  boxBullets?: string[];
}

export interface TableRow {
  metric: string;
  before?: string;
  after?: string;
  outcome?: string;
}

export interface ResultsSection {
  title: string;
  text?: string;
  cols: number;
  table?: TableRow[];
}

export interface ExtraSection {
  title?: string;
  type: "quote" | "text";
  text: string;
  author?: string;
}

export interface CTASection {
  text: string;
  buttonText: string;
  href: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  badges: string[];
  stats: { value: string; label: string }[];
  sections: {
    problem: ProblemSection;
    solution: SolutionSection;
    results?: ResultsSection;
    extra?: ExtraSection;
    cta?: CTASection;
  };
}
