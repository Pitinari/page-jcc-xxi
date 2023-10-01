export { }
declare global {
  interface Window {
    schedule: {
      dayId: string;
      date: string;
      talks: {
        title: string;
        hour: string;
        shortDescription?: string;
        description?: string;
        hrefText?: string;
        hrefUrl?: string;
      }[];
      activities?: {
        title: string;
        hour: string;
        shortDescription?: string;
        description?: string;
        hrefText?: string;
        hrefUrl?: string;
      }[];
    }[];
    sponsors: {
      href: string;
      logo: string;
    }[];
    sponsorsJobSearch: {
      logo: string;
      jobTitle: string;
      jobDescription: string;
      jobHrefText: string;
      jobHrefUrl: string;
    }[];
    university: {
      href: string;
      logo: string;
    }[];
    env: {
      baseUrl: string;
    }
  }
}