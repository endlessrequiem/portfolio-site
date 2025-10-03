import {Project} from "~/components/ProjectSection";
import lockWidgetImage from "~/resources/images/IMG_1714.png?url";
import thermostatWidgetImage from "~/resources/images/IMG_1708.png?url";
import packagesList from "~/resources/images/Screenshot_20240311-085924.png?url";
import packageHistory from "~/resources/images/Screenshot_20240311-085930.png?url";
import english from "~/resources/images/IMG_1800.jpeg?url";
import spanish from "~/resources/images/IMG_1801.jpeg?url";
import messagesList from "~/resources/images/Screenshot_20230417-122801.png?url";
import message from "~/resources/images/Screenshot_20230417-123003.png?url";
import {strings} from "~/const/strings";

export const widgetProject: Project = {
    projectName: strings.deviceWidgets,
    projectDescription: strings.deviceWidgetsDescription,
    projectImages: [lockWidgetImage, thermostatWidgetImage],
}

export const packagesProject: Project = {
    projectName: strings.packages,
    projectDescription: strings.packagesDescription,
    projectImages: [packagesList, packageHistory],
}

export const localizationProject: Project = {
    projectName: strings.localization,
    projectDescription: strings.localizationDescription,
    projectImages: [english, spanish],
}

export const communityBroadcastsProject: Project = {
    projectName: strings.broadcasts,
    projectDescription: strings.broadcastsDescription,
    projectImages: [messagesList, message],
}

export const projects: Project[] = [
    widgetProject,
    packagesProject,
    localizationProject,
    communityBroadcastsProject,
]
