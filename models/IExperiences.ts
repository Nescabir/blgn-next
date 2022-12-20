import { ExperienceType } from "./experienceType.enum";

export default interface IExperiences {
  name: string;
  type: ExperienceType;
  company: string;
  link?: string;
  location: string;
  startDate: Date;
  endDate: Date | string;
}
