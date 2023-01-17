import {TeachingStaffMembers , TeachingStaffKey} from './TeachingStaffMembers';
import {NonTeachingStaffMembers , NonTeachingStaffKey} from './NonTeachingStaffMembers';

export const Staffs = [
    {
        id: "teaching-faculties",
        heading:"Teaching Staffs",
        staffs: TeachingStaffMembers,
        keys: TeachingStaffKey,
        height: "375px"
    },
    {
        id: "non-teaching-faculties",
        heading:"Non-Teaching Staffs",
        staffs: NonTeachingStaffMembers,
        keys: NonTeachingStaffKey,
        height: "375px"
    },
]
