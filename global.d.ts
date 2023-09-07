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
      }[];
      activities?: {
        title: string;
        hour: string;
        shortDescription?: string;
        description?: string;
        href?: string;
      }[];
    }[];
  }
}