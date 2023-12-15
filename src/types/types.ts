export type Experience = {
  fromDate: string;
  toDate: string;
  role: string;
  company: string;
  description: string;
  skills: string[];
};

export type Course = {
  name: string;
  semester: string;
  description: string;
};

export type Skills = {
  group: string;
  description: string;
  skills: string[];
};

export type Project = {
  title: string;
  relation: string;
  status: string;
  description: string;
  links: string[];
};

export type Contact = {
  name: string;
  url: string;
  urlText: string;
};

export type Tab = {
  title: string;
};
