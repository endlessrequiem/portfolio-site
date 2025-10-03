import {Project} from "~/components/ProjectSection";
import lockWidgetImage from "~/resources/images/lock_widget.png";
import thermostatWidgetImage from "~/resources/images/thermostat_widget.png";
import packagesList from "~/resources/images/packages_list.png";
import packageHistory from "~/resources/images/packages_history.png";
import english from "~/resources/images/localization_en.jpeg";
import spanish from "~/resources/images/localization_es.jpeg";
import messagesList from "~/resources/images/community_broadcasts_list.png";
import message from "~/resources/images/community_broadcast.png";
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
