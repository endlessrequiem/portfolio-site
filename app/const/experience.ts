import {Experience} from "~/components/ExperienceSection";
import {strings} from "~/routes/page.strings";

export const engTwoExp: Experience = {
    title: strings.engTwoTitle,
    company: strings.companies[0],
    listItems: strings.engTwoPoints
}

export const engOneExp: Experience = {
    title: strings.engOneTitle,
    company: strings.companies[0],
    listItems: strings.engOnePoints
}

export const jrEngExp: Experience = {
    title: strings.jrEngineerTitle,
    company: strings.companies[0],
    listItems: strings.jrEngineerPoints
}

export const workExperience: Experience[] = [engTwoExp, engOneExp, jrEngExp]
