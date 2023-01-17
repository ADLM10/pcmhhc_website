import {CourseList} from './CourseList';
import { AdmissionData } from './AdmissionData';
import { AwardsData } from './AwardsData';
import { JournalData } from './JournalData';

export const CollegeDetails = [
    {
        id:"courses",
        heading:"Courses",
        detailsList:CourseList
    },
    {
        id:"admission",
        heading:"Admission",
        detailsList:AdmissionData
    },
    {
        id:"award-achievements",
        heading:"Awards and Achievements",
        detailsList:AwardsData
    },
    {
        id:"journal-publications",
        heading:"Journal & Publications",
        detailsList:JournalData
    }
]

