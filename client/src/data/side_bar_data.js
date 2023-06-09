import { MdHome, MdChecklist, MdOutlineBloodtype, MdOutlineLogout} from "react-icons/md";
import {ImProfile} from "react-icons/im"
import {RiStethoscopeLine} from "react-icons/ri"

// Recipient Menu
export const recipientMenu = [
  {
    name: "Home",
    icon: MdHome,
  },
  {
    name: "Appointments",
    icon: MdChecklist,
  },
  {
    name: "Blood Donation Camps",
    icon: MdOutlineBloodtype,
  },
  {
    name: "Profile Details",
    icon: ImProfile,
  },
  {
    name: "Logout",
    path: "/login",
    icon: MdOutlineLogout,
  },
];
//Healthcare Professional Menu
export const proMenu = [
  {
    name: "Home",
    icon: MdHome,
  },
  {
    name: "Appointments",
    icon: MdChecklist,
  },
  {
    name: "Profile Details",
    icon: ImProfile,
  },
  {
    name: "Logout",
    path: "/login",
    icon: MdOutlineLogout,
  },
];

export const facilityMenu=[
  {
    name:"Home",
    icon: MdHome,
  },
  {
name:"Doctors",
icon:RiStethoscopeLine,
  },
  {
  name:"Facility Profile",
  icon:ImProfile,
  },
  {
  name:"Logout",
  path: "/login",
  icon: MdOutlineLogout,
},
]

//Blood Donation Camps Menu
export const campMenu = [
  {
    name: "Home",
    icon: MdHome,
  },
  {
    name: "Blood Donation Camps",
    icon: MdOutlineBloodtype,
  },
  {
    name: "Appointments",
    icon: MdChecklist,
  },
  {
    name: "Profile Details",
    icon: ImProfile,
  },
  {
    name: "Logout",
    path: "/login",
    icon: MdOutlineLogout,
  },
];