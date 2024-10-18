
export interface Experience {
  company: string;
  position: string;
  years: string; // Number of years worked
  desc: string; // Number of years worked
}

export interface Education {
  institute: string;
  title: string;
  years: string; // Number of years worked
  desc: string; // Number of years worked
  sub: string; // Number of years worked
}

export interface User {
  name: string;
  title: string;
  description: string;
  age: number;
  email: string;
  phone: string;
  address: string;
  language: string;
  photoshop: string;
  sass: string;
  bootstrap: string;
  javascript: string;
  css: string;
  html: string;
  experience: Experience[];
  education: Education[];
}

export const DEFAULT_USER: User = {
  name: 'Ekta',
  title: 'Full Stack Developer',
  description: 'I am web developer, I am web developer, I am web developer, I am web developer.',
  age: 32,
  email: 'ektabindal08@gmail.com',
  phone: '+1 (647)-830-0424',
  address: 'Unit 404, Brampton, Canada',
  language: 'English,French',
  photoshop: '70%',
  sass: '60%',
  bootstrap: '75%',
  javascript: '60%',
  css: '75%',
  html: '80%',
  experience: [
    {
      company: 'CREATIVEM',
      position: 'Front End Developer',
      years: 'MARCH 2016 - PRESENT',
      desc:'Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus.'
    },
    {
      company: 'WEBNOTE',
      position: 'Web Developer',
      years: 'APRIL 2014 - MARCH 2016',
      desc:'Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus.'
    },
    {
      company: 'WEBM',
      position: 'Intern',
      years: 'APRIL 2013 - FEBRUARY 2014',
      desc:'Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus.'
    },
  ],
  education: [
    {
      institute: 'University of Computer Science',
      title: 'Master\'s Degree',
      years: '2013 - 2015',
      desc: 'Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus.',
      sub: 'Master of Information Technology'
    },
    {
      institute: 'University of Computer Science',
      title: 'Bachelor\'s Degree',
      years: '2009 - 2013',
      desc: 'Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus.',
      sub: 'Bachelor of Computer Science'
    },
    {
      institute: 'School of Secondary Board',
      title: 'High School',
      years: '2007 - 2009',
      desc: 'Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus.',
      sub: 'Science and Mathematics'
    },
  ]
};
