import {Project} from "@/components/ProjectSection";
import lockWidgetImage from "../app/resources/images/IMG_1714.png";
import thermostatWidgetImage from "../app/resources/images/IMG_1708.png";
import packagesList from "../app/resources/images/Screenshot_20240311-085924.png";
import packageHistory from "../app/resources/images/Screenshot_20240311-085930.png";
import english from "../app/resources/images/IMG_1800.jpeg";
import spanish from "../app/resources/images/IMG_1801.jpeg";
import messagesList from "../app/resources/images/Screenshot_20230417-122801.png";
import message from "../app/resources/images/Screenshot_20230417-123003.png";
import {strings} from "@/app/page.strings";

export const widgetProject: Project = {
    projectName: strings.deviceWidgets,
    projectDescription: strings.deviceWidgetsDescription,
    projectImages: [lockWidgetImage.src, thermostatWidgetImage.src],
}

export const packagesProject: Project = {
    projectName: strings.packages,
    projectDescription: strings.packagesDescription,
    projectImages: [packagesList.src, packageHistory.src],
}

export const localizationProject: Project = {
    projectName: strings.localization,
    projectDescription: strings.localizationDescription,
    projectImages: [english.src, spanish.src],
}

export const communityBroadcastsProject: Project = {
    projectName: strings.broadcasts,
    projectDescription: strings.broadcastsDescription,
    projectImages: [messagesList.src, message.src],
}

export const projects: Project[] = [
    widgetProject,
    packagesProject,
    localizationProject,
    communityBroadcastsProject,
]
