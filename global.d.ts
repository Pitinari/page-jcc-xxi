export { }
declare global {
  interface Window {
    Schedule: {
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
        href?: string;
      }[];
    }[];
    Sponsors: {
      name: string;
      logo: string;
    }
  }
}