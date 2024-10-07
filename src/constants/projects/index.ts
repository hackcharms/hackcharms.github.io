import * as CredilioP from './credilioProjects';
import * as TWCP from './theCodeworkProjects';
import * as PP from './personalProjects';
import { PersonalProjectType, ProjectType } from '@/types';
export const all = [...CredilioP.projects, ...TWCP.projects, ...PP.projects] as unknown as ProjectType<PersonalProjectType>[];