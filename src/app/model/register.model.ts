 export interface ContactInfo {
    name: string;
    email: string;
    phone: string;
  }
  export interface Education {
    degree: string;
    fieldOfStudy: string;
    graduationDate: string;
  }
  export interface Experience {
    company: string;
    jobTitle: string;
    startDate: string;
    endDate: string;
  }
 
  export interface FormData {
    contactInfo: ContactInfo;
    education: Education;
    experience: Experience;
    image: File;
  }
