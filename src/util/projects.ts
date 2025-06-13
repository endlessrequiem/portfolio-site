import {Project} from "@/components/ProjectSection";
import lockWidgetImage from "../app/resources/images/IMG_1714.png";
import thermostatWidgetImage from "../app/resources/images/IMG_1708.png";
import packagesList from "../app/resources/images/Screenshot_20240311-085924.png";
import packageHistory from "../app/resources/images/Screenshot_20240311-085930.png";
import english from "../app/resources/images/IMG_1800.jpeg";
import spanish from "../app/resources/images/IMG_1801.jpeg";
import messagesList from "../app/resources/images/Screenshot_20230417-122801.png";
import message from "../app/resources/images/Screenshot_20230417-123003.png";


//TODO Add these strings to strings file
export const widgetProject: Project = {
    projectName: "Android IoT Device Widgets",
    projectDescription: "For my Android Widgets project, I developed native Android Widgets for the SmartRent Resident app. This was particularly interesting because the main app itself is built in React Native, so I got to bridge that gap. I created widgets that let users control their smart locks directly from their home screen for quick locking/unlocking, and also widgets for operating smart thermostats to adjust temperatures instantly. My focus was on making sure these widgets were super functional, highly performant (so they updated smoothly and responded fast), and really easy to use for residents.",
    projectImages: [lockWidgetImage.src, thermostatWidgetImage.src],
}

export const packagesProject: Project = {
    projectName: "Packages",
    projectDescription: "For my Packages project, I was responsible for developing a new feature that allowed residents to track their incoming packages within the SmartRent Resident app. This involved building out the functionality that enabled residents to monitor the status of their deliveries from arrival to being ready for pickup from the community's package room, aiming to create a seamless and clear experience for package retrieval.",
    projectImages: [packagesList.src, packageHistory.src],
}

export const localizationProject: Project = {
    projectName: "App Localization",
    projectDescription: "For my Localization project, I was responsible for implementing and optimizing the system to support both English and Spanish, along with corresponding date formats, across the application. This ensured a more tailored and accessible experience based on user preferences. (Note: Project wasn't fully finished)",
    projectImages: [english.src, spanish.src],
}

export const communityBroadcastsProject: Project = {
    projectName: "Community Broadcasts",
    projectDescription: "For my Community Broadcasts project, I developed a feature that allowed property managers to send direct messages to residents through the app. This enabled them to quickly and efficiently update residents on important information, ensuring clear communication about community-wide announcements or issues.",
    projectImages: [messagesList.src, message.src],
}

export const projects: Project[] = [
    widgetProject,
    packagesProject,
    localizationProject,
    communityBroadcastsProject,
]
