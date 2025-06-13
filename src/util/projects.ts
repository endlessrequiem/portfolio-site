import {Project} from "@/components/ProjectSection";
import widgetImage from "../app/resources/images/IMG_1714.png";


//TODO Add these strings to strings file
//TODO Make project images an array
export const widgetProject: Project = {
    projectName: "Native Android Widgets",
    projectDescription: "Android Widgets for IoT Device Control",
    projectImage: widgetImage.src,
}

export const packagesProject: Project = {
    projectName: "Packages",
    projectDescription: "Smart Package Room solution for Residents",
    projectImage: "TODO",
}

export const localizationProject: Project = {
    projectName: "App Localization",
    projectDescription: "Support for Spanish and English in Resident App",
    projectImage: "TODO",
}

export const communityBroadcastsProject: Project = {
    projectName: "Community Broadcasts",
    projectDescription: "Broadcast messages to Residents",
    projectImage: "TODO",
}

export const appOnboardingProject: Project = {
    projectName: "In-App Registration",
    projectDescription: "Add in-app registration to Resident App",
    projectImage: "TODO",
}

export const projects: Project[] = [
    widgetProject,
    packagesProject,
    localizationProject,
    communityBroadcastsProject,
    appOnboardingProject,
]
