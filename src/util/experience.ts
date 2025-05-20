import {Experience} from "@/components/ExperienceSection";
import {strings} from "@/app/page.strings";

export const engTwoExp: Experience = {
    title: "Software Engineer II",
    company: "SmartRent",
    listItems: strings.engTwoPoints
}

export const engOneExp: Experience = {
    title: "Software Engineer I",
    company: "SmartRent",
    listItems: strings.engOnePoints
}

export const jrEngExp: Experience = {
    title: "Junior Software Engineer",
    company: "SmartRent",
    listItems: strings.jrEngineerPoints
}

export const workExperience: Experience[] = [engTwoExp, engOneExp, jrEngExp]
