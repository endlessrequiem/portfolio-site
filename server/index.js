import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer, Meta, Links, Outlet, ScrollRestoration, Scripts, LiveReload } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import React, { useState } from "react";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  let prohibitOutOfOrderStreaming = isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode;
  return prohibitOutOfOrderStreaming ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  if (!userAgent) {
    return false;
  }
  if ("isbot" in isbotModule && typeof isbotModule.isbot === "function") {
    return isbotModule.isbot(userAgent);
  }
  if ("default" in isbotModule && typeof isbotModule.default === "function") {
    return isbotModule.default(userAgent);
  }
  return false;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const meta$1 = () => [
  { title: "Austin White, Software Engineer" },
  { name: "description", content: "Portfolio of Austin White, Software Engineer" }
];
function App() {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(Outlet, {}),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {}),
      /* @__PURE__ */ jsx(LiveReload, {})
    ] })
  ] });
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: App,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
const strings = {
  header: "Austin White",
  jobTitle: "Software Engineer",
  subHeader: ["React Native", "Android", "Frontend"],
  aboutMeTitle: "About Me",
  aboutMeText: "I am a Software Engineer with a strong track record of building high-quality mobile applications that enhance user experience and deliver measurable impact. I've led and contributed to critical projects from concept to deployment, consistently driving improvements in performance, usability, and reliability. I thrive on solving complex technical challenges and am passionate about using technology to create innovative, user-centered solutions.",
  skillsHeader: "Skills",
  skills: [
    "TypeScript",
    "Kotlin",
    "JavaScript",
    "Java",
    "Git",
    "React Native",
    "Android SDK",
    "Android App Widgets",
    "Android WorkManager",
    "XML",
    "Firebase",
    "Yarn",
    "Jest",
    "Retrofit",
    "Axios",
    "Jotai",
    "React Hooks",
    "Cursor",
    "GitHub Copilot"
  ],
  experienceHeader: "Experience",
  companies: ["SmartRent"],
  jrEngineerTitle: "Junior Software Engineer",
  jrEngineerPoints: [
    "Drove a significant improvement in average app rating (from 2.1 to 4.2) by strategically deploying in-app review prompts, resulting in increased user satisfaction and positive app store feedback",
    "Prepared the SmartRent Resident App for international expansion by implementing an international environment specifically to accommodate GDPR requirements, enabling the app to launch in European markets.",
    "Implemented user interfaces from wireframes, ensuring alignment with design guidelines",
    "Implemented deep links for resident account registration, enhancing app onboarding and leveraging deep links to improve user retention",
    "Contributed to the rewrite of the SmartRent Resident app in React Native using TypeScript, enabling the integration of in-house design system components for a unified user experience across all company products"
  ],
  engOneTitle: "Software Engineer I",
  engOnePoints: [
    "Led projects to implement Community-focused features for the SmartRent Resident App, including Package Management, Amenity Reservations, and Community Broadcasts",
    "Led the planning and implementation of infrastructure for language localization in the app, while adding support for both English and Spanish languages to improve user experience",
    "Developed and implemented Firebase analytics for the app, providing detailed insights into user behavior and app usage patterns",
    "Ranked in the top 10% of performers in the Engineering department in the 2024 year-end review, earning the designation of 'key-performer' for consistently delivering high-quality code and demonstrating a strong receptiveness to feedback."
  ],
  engTwoTitle: "Software Engineer II",
  engTwoPoints: [
    "Designed and documented (via RFC) a system for authenticating Native Android Widgets with the React Native app, establishing a framework for secure user session and access control management",
    "Led the development of interactive IoT device control Android Widgets for Smart Locks and Thermostats, enabling users to quickly and directly adjust settings and monitor device status from their home screen",
    "Engineered an in-house Native Android solution for secure storage of sensitive user data, replacing a problematic third-party package that caused unintended user logouts"
  ],
  educationHeader: "Education",
  university: "California State University, Stanislaus",
  classOf: "Class of 2020",
  degree: "Bachelor of Arts in English",
  extracurriculars: "Extracurriculars",
  activities: ["Computer Science Club (President)", "StanHacks (Founder, Director)"],
  linkedIn: "LinkedIn",
  github: "GitHub",
  projectsHeader: "Highlighted Projects",
  deviceWidgets: "Android IoT Device Widgets",
  deviceWidgetsDescription: "For my Android Widgets project, I developed native Android Widgets for the SmartRent Resident app. This was particularly interesting because the main app itself is built in React Native, so I got to bridge that gap. I created widgets that let users control their smart locks directly from their home screen for quick locking/unlocking, and also widgets for operating smart thermostats to adjust temperatures instantly. My focus was on making sure these widgets were super functional, highly performant (so they updated smoothly and responded fast), and really easy to use for residents.",
  packages: "Packages",
  packagesDescription: "For my Packages project, I was responsible for developing a new feature that allowed residents to track their incoming packages within the SmartRent Resident app. This involved building out the functionality that enabled residents to monitor the status of their deliveries from arrival to being ready for pickup from the community's package room, aiming to create a seamless and clear experience for package retrieval.",
  localization: "App Localization",
  localizationDescription: "For my Localization project, I was responsible for implementing and optimizing the system to support both English and Spanish, along with corresponding date formats, across the application. This ensured a more tailored and accessible experience based on user preferences. (Note: Project wasn't fully finished)",
  broadcasts: "Community Broadcasts",
  broadcastsDescription: "For my Community Broadcasts project, I developed a feature that allowed property managers to send direct messages to residents through the app. This enabled them to quickly and efficiently update residents on important information, ensuring clear communication about community-wide announcements or issues."
};
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  strings
}, Symbol.toStringTag, { value: "Module" }));
const Pill = ({ text, index, textSize }) => {
  const fontSize = () => {
    if (textSize === "medium") {
      return "18px";
    } else if (textSize === "large") {
      return "24px";
    } else {
      return "14px";
    }
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        background: "rgba(255, 255, 255, 0.08)",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        borderRadius: "20px",
        padding: "8px 16px",
        fontSize: fontSize(),
        fontFamily: "var(--font-geist-mono)",
        color: "#ffffff",
        cursor: "default",
        transition: "all 0.2s ease-in-out",
        userSelect: "none"
      },
      children: text
    },
    index
  ) });
};
const PageHeader = ({ title, subTitle, content }) => {
  return /* @__PURE__ */ jsxs("div", { className: "liquid-glass", style: { padding: "20px", textAlign: "center", marginTop: "16px" }, children: [
    /* @__PURE__ */ jsx("h1", { style: { marginBottom: "12px" }, children: title }),
    /* @__PURE__ */ jsx("h3", { style: { marginBottom: "6px" }, children: subTitle }),
    /* @__PURE__ */ jsx("div", { style: {
      padding: "24px",
      display: "flex",
      flexWrap: "wrap",
      gap: "12px",
      alignItems: "flex-start",
      justifyContent: "center"
    }, children: content.map((text, index) => /* @__PURE__ */ jsx(Pill, { text, index }, index)) })
  ] });
};
const SectionHeader = ({ title }) => {
  return /* @__PURE__ */ jsx("h2", { className: "section-header-blur", style: {
    paddingLeft: "24px",
    paddingRight: "24px",
    alignSelf: "center"
  }, children: title });
};
const SkillsSection = ({ title, listItems }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SectionHeader, { title }),
    /* @__PURE__ */ jsx("div", { className: "liquid-glass", style: {
      padding: "24px",
      display: "flex",
      flexWrap: "wrap",
      gap: "12px",
      alignItems: "flex-start",
      justifyContent: "center"
    }, children: listItems.map((skill, index) => /* @__PURE__ */ jsx(Pill, { text: skill, index }, index)) })
  ] });
};
const ResumeCard = ({ title, company, listItems }) => {
  return /* @__PURE__ */ jsxs("div", { className: "liquid-glass", style: {
    padding: "24px",
    marginBottom: "16px",
    position: "relative"
  }, children: [
    /* @__PURE__ */ jsx("div", { style: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "16px",
      paddingBottom: "12px",
      borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
    }, children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { style: {
        fontSize: "20px",
        fontWeight: "600",
        color: "#ffffff",
        margin: "0 0 4px 0",
        fontFamily: "var(--font-geist-mono)"
      }, children: title }),
      /* @__PURE__ */ jsx("div", { style: {
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }, children: /* @__PURE__ */ jsxs("span", { style: {
        fontSize: "16px",
        color: "rgba(255, 255, 255, 0.8)",
        fontFamily: "var(--font-geist-mono)"
      }, children: [
        "@ ",
        company
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { style: {
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }, children: listItems.map((item, index) => /* @__PURE__ */ jsx(Pill, { text: item, index }, index)) })
  ] });
};
const ExperienceSection = ({ header, workExperience: workExperience2 }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SectionHeader, { title: header }),
    workExperience2.map((item, index) => /* @__PURE__ */ jsx(ResumeCard, { ...item }, index))
  ] });
};
const engTwoExp = {
  title: strings.engTwoTitle,
  company: strings.companies[0],
  listItems: strings.engTwoPoints
};
const engOneExp = {
  title: strings.engOneTitle,
  company: strings.companies[0],
  listItems: strings.engOnePoints
};
const jrEngExp = {
  title: strings.jrEngineerTitle,
  company: strings.companies[0],
  listItems: strings.jrEngineerPoints
};
const workExperience = [engTwoExp, engOneExp, jrEngExp];
const EducationSection = ({
  sectionTitle,
  university,
  classOf,
  degree,
  extracurricularsTitle,
  activities
}) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SectionHeader, { title: sectionTitle }),
    /* @__PURE__ */ jsxs("div", { className: "liquid-glass", style: {
      padding: "24px"
    }, children: [
      /* @__PURE__ */ jsxs("div", { style: {
        marginBottom: "24px",
        paddingBottom: "20px",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
      }, children: [
        /* @__PURE__ */ jsxs("div", { style: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "8px"
        }, children: [
          /* @__PURE__ */ jsx("h2", { style: {
            fontSize: "20px",
            fontWeight: "600",
            color: "#ffffff",
            margin: "0"
          }, children: university }),
          /* @__PURE__ */ jsx(Pill, { text: classOf })
        ] }),
        /* @__PURE__ */ jsx("h3", { style: {
          fontSize: "16px",
          fontWeight: "500",
          color: "rgba(255, 255, 255, 0.9)",
          margin: "0",
          fontFamily: "var(--font-geist-mono)"
        }, children: degree })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { style: {
          fontSize: "16px",
          fontWeight: "600",
          color: "#ffffff",
          margin: "0 0 16px 0",
          fontFamily: "var(--font-geist-mono)"
        }, children: extracurricularsTitle }),
        /* @__PURE__ */ jsx("div", { style: {
          display: "flex",
          flexDirection: "row",
          gap: "12px"
        }, children: activities.map((item, index) => /* @__PURE__ */ jsx(Pill, { text: item, index }, index)) })
      ] })
    ] })
  ] });
};
const AboutMeSection = ({ title }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SectionHeader, { title }),
    /* @__PURE__ */ jsx("div", { className: "liquid-glass", style: {
      padding: "20px",
      textAlign: "left"
    }, children: strings.aboutMeText })
  ] });
};
const FooterLink = ({ text, link, icon }) => {
  const Icon = getIcon(icon);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "liquid-glass footer-link-hover",
      style: {
        display: "flex",
        padding: "10px",
        transition: "all 0.3s ease",
        cursor: "pointer"
      },
      children: [
        Icon,
        /* @__PURE__ */ jsx(
          "a",
          {
            href: link,
            target: "_blank",
            rel: "noopener noreferrer",
            style: { transition: "all 0.3s ease" },
            children: text
          }
        )
      ]
    }
  );
};
function getIcon(icon) {
  const iconSize = 20;
  const rightPadding = "5px";
  if (icon === "github") {
    return /* @__PURE__ */ jsx(IoLogoGithub, { size: iconSize, style: { alignSelf: "center", paddingRight: rightPadding } });
  } else if (icon === "linkedin") {
    return /* @__PURE__ */ jsx(FaLinkedin, { size: iconSize, style: { alignSelf: "center", paddingRight: rightPadding } });
  } else {
    return null;
  }
}
const FooterSection = ({ items }) => {
  return items.map(
    (item, index) => /* @__PURE__ */ jsx(FooterLink, { text: item.text, link: item.link, icon: item.icon }, index)
  );
};
const linkedInFooter = {
  text: strings.linkedIn,
  link: "https://www.linkedin.com/in/austinjwhite96/",
  icon: "linkedin"
};
const githubFooter = {
  text: strings.github,
  link: "https://github.com/endlessrequiem",
  icon: "github"
};
const DELAY_TIME = 100;
const ProjectSection = ({ projects: projects2, sectionTitle }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SectionHeader, { title: sectionTitle }),
    projects2.map((project, index) => /* @__PURE__ */ jsx(ProjectComponent, { project }, index))
  ] });
};
const ProjectComponent = (current) => {
  const { projectName, projectDescription, projectImages } = current.project;
  const [expandedImage, setExpandedImage] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const handleImageClick = (index) => {
    setExpandedImage(expandedImage === index ? null : index);
  };
  const handleTransition = (newExpandedImage) => {
    setExpandedImage(newExpandedImage);
    setTimeout(() => setIsTransitioning(false), DELAY_TIME);
  };
  const goToPreviousImage = () => {
    if (expandedImage !== null && expandedImage > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        handleTransition(expandedImage - 1);
      }, DELAY_TIME);
    }
  };
  const goToNextImage = () => {
    if (expandedImage !== null && expandedImage < projectImages.length - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        handleTransition(expandedImage + 1);
      }, DELAY_TIME);
    }
  };
  const handleKeyDown = (e) => {
    if (expandedImage !== null && !isTransitioning) {
      if (e.key === "ArrowLeft") {
        goToPreviousImage();
      } else if (e.key === "ArrowRight") {
        goToNextImage();
      } else if (e.key === "Escape") {
        setExpandedImage(null);
      }
    }
  };
  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [expandedImage, isTransitioning]);
  return /* @__PURE__ */ jsxs("div", { className: "liquid-glass", style: {
    padding: "20px",
    justifyContent: "space-between",
    flex: 1,
    textAlign: "center",
    position: "relative"
  }, children: [
    /* @__PURE__ */ jsx(Pill, { text: projectName, textSize: "large" }),
    /* @__PURE__ */ jsx("h4", { style: { marginBottom: "18px", marginTop: "18px" }, children: projectDescription }),
    projectImages.map((image, index) => /* @__PURE__ */ jsx(
      "img",
      {
        src: image,
        alt: projectName,
        className: "liquid-glass",
        style: {
          width: expandedImage === index ? "80%" : "33%",
          marginLeft: "10px",
          marginRight: "10px",
          marginTop: "10px",
          marginBottom: "48px",
          padding: "5px",
          cursor: "pointer",
          zIndex: expandedImage === index ? 1e3 : 1,
          position: expandedImage === index ? "fixed" : "static",
          top: expandedImage === index ? "50%" : "auto",
          left: expandedImage === index ? "50%" : "auto",
          transform: expandedImage === index ? "translate(-50%, -50%)" : "none",
          maxHeight: expandedImage === index ? "80vh" : "auto",
          objectFit: expandedImage === index ? "contain" : "cover",
          opacity: expandedImage === index ? isTransitioning ? 0.3 : 1 : 1,
          transition: expandedImage === index ? "all 0.3s ease-in-out, opacity 0.15s ease-in-out" : "all 0.3s ease-in-out"
        },
        onClick: () => handleImageClick(index),
        onMouseEnter: (e) => {
          if (expandedImage !== index) {
            e.currentTarget.style.transform = "scale(1.05)";
          }
        },
        onMouseLeave: (e) => {
          if (expandedImage !== index) {
            e.currentTarget.style.transform = "scale(1)";
          }
        }
      },
      index
    )),
    expandedImage !== null && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          style: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 999,
            cursor: "pointer",
            transition: "opacity 0.3s ease-in-out"
          },
          onClick: () => setExpandedImage(null)
        }
      ),
      expandedImage > 0 && /* @__PURE__ */ jsx(
        "button",
        {
          onClick: (e) => {
            e.stopPropagation();
            goToPreviousImage();
          },
          disabled: isTransitioning,
          style: {
            position: "fixed",
            left: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1001,
            background: isTransitioning ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.2)",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            cursor: isTransitioning ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            color: "white",
            transition: "all 0.3s ease",
            opacity: isTransitioning ? 0.5 : 1
          },
          onMouseEnter: (e) => {
            if (!isTransitioning) {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
            }
          },
          onMouseLeave: (e) => {
            if (!isTransitioning) {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
            }
          },
          children: "‹"
        }
      ),
      expandedImage < projectImages.length - 1 && /* @__PURE__ */ jsx(
        "button",
        {
          onClick: (e) => {
            e.stopPropagation();
            goToNextImage();
          },
          disabled: isTransitioning,
          style: {
            position: "fixed",
            right: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1001,
            background: isTransitioning ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.2)",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            cursor: isTransitioning ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            color: "white",
            transition: "all 0.3s ease",
            opacity: isTransitioning ? 0.5 : 1
          },
          onMouseEnter: (e) => {
            if (!isTransitioning) {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
            }
          },
          onMouseLeave: (e) => {
            if (!isTransitioning) {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
            }
          },
          children: "›"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setExpandedImage(null),
          style: {
            position: "fixed",
            top: "20px",
            right: "20px",
            zIndex: 1001,
            background: "rgba(255, 255, 255, 0.2)",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            color: "white",
            transition: "background-color 0.3s ease"
          },
          onMouseEnter: (e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
          },
          children: "×"
        }
      )
    ] })
  ] });
};
const lockWidgetImage = "/portfolio-site/assets/IMG_1714-Bej8VP0R.png";
const thermostatWidgetImage = "/portfolio-site/assets/IMG_1708-Bi2u1QOp.png";
const packagesList = "/portfolio-site/assets/Screenshot_20240311-085924-DdYtoqDi.png";
const packageHistory = "/portfolio-site/assets/Screenshot_20240311-085930-CulTul8h.png";
const english = "/portfolio-site/assets/IMG_1800-DpEL3sIB.jpeg";
const spanish = "/portfolio-site/assets/IMG_1801-CWKUgWg6.jpeg";
const messagesList = "/portfolio-site/assets/Screenshot_20230417-122801-D3oFly_M.png";
const message = "/portfolio-site/assets/Screenshot_20230417-123003-B1G-Ycsz.png";
const widgetProject = {
  projectName: strings.deviceWidgets,
  projectDescription: strings.deviceWidgetsDescription,
  projectImages: [lockWidgetImage, thermostatWidgetImage]
};
const packagesProject = {
  projectName: strings.packages,
  projectDescription: strings.packagesDescription,
  projectImages: [packagesList, packageHistory]
};
const localizationProject = {
  projectName: strings.localization,
  projectDescription: strings.localizationDescription,
  projectImages: [english, spanish]
};
const communityBroadcastsProject = {
  projectName: strings.broadcasts,
  projectDescription: strings.broadcastsDescription,
  projectImages: [messagesList, message]
};
const projects = [
  widgetProject,
  packagesProject,
  localizationProject,
  communityBroadcastsProject
];
const meta = () => {
  return [
    { title: "Austin White, Software Engineer" },
    { name: "description", content: "Portfolio of Austin White, Software Engineer" }
  ];
};
function Home() {
  return /* @__PURE__ */ jsxs("div", { style: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    paddingLeft: "80px",
    paddingRight: "80px",
    paddingBottom: "60px",
    gap: "12px",
    fontFamily: "var(--font-geist-sans)",
    color: "#ffffff"
  }, children: [
    /* @__PURE__ */ jsxs("main", { style: {
      display: "flex",
      flexDirection: "column",
      gap: "32px",
      gridRowStart: "2"
    }, children: [
      /* @__PURE__ */ jsx(PageHeader, { title: strings.header, subTitle: strings.jobTitle, content: strings.subHeader }),
      /* @__PURE__ */ jsx("hr", { style: {
        width: "100%",
        height: "2px",
        background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)",
        border: "none",
        margin: "20px 0"
      } }),
      /* @__PURE__ */ jsx(AboutMeSection, { title: strings.aboutMeTitle }),
      /* @__PURE__ */ jsx("hr", { style: {
        width: "100%",
        height: "2px",
        background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)",
        border: "none",
        margin: "20px 0"
      } }),
      /* @__PURE__ */ jsx(ExperienceSection, { header: strings.experienceHeader, workExperience }),
      /* @__PURE__ */ jsx("hr", { style: {
        width: "100%",
        height: "2px",
        background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)",
        border: "none",
        margin: "20px 0"
      } }),
      /* @__PURE__ */ jsx(ProjectSection, { projects, sectionTitle: strings.projectsHeader }),
      /* @__PURE__ */ jsx("hr", { style: {
        width: "100%",
        height: "2px",
        background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)",
        border: "none",
        margin: "20px 0"
      } }),
      /* @__PURE__ */ jsx(SkillsSection, { title: strings.skillsHeader, listItems: strings.skills }),
      /* @__PURE__ */ jsx("hr", { style: {
        width: "100%",
        height: "2px",
        background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)",
        border: "none",
        margin: "20px 0"
      } }),
      /* @__PURE__ */ jsx(
        EducationSection,
        {
          sectionTitle: strings.educationHeader,
          university: strings.university,
          classOf: strings.classOf,
          degree: strings.degree,
          extracurricularsTitle: strings.extracurriculars,
          activities: strings.activities
        }
      )
    ] }),
    /* @__PURE__ */ jsx("footer", { style: {
      marginTop: "72px",
      gridRowStart: "3",
      display: "flex",
      gap: "24px",
      paddingTop: "12px"
    }, children: /* @__PURE__ */ jsx(FooterSection, { items: [linkedInFooter, githubFooter] }) })
  ] });
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/portfolio-site/assets/entry.client-Y-G8AV_a.js", "imports": ["/portfolio-site/assets/jsx-runtime-BWtM72Fx.js", "/portfolio-site/assets/components-CH9gIafG.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/portfolio-site/assets/root-DS325Mh3.js", "imports": ["/portfolio-site/assets/jsx-runtime-BWtM72Fx.js", "/portfolio-site/assets/components-CH9gIafG.js"], "css": ["/portfolio-site/assets/root-GVC3pECQ.css"] }, "routes/page.strings": { "id": "routes/page.strings", "parentId": "root", "path": "page/strings", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/portfolio-site/assets/page.strings-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/portfolio-site/assets/_index-_G-7qZhQ.js", "imports": ["/portfolio-site/assets/jsx-runtime-BWtM72Fx.js"], "css": [] } }, "url": "/portfolio-site/assets/manifest-b90c41b6.js", "version": "b90c41b6" };
const mode = "production";
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false, "v3_throwAbortReason": false, "v3_routeConfig": false, "v3_singleFetch": false, "v3_lazyRouteDiscovery": false, "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/portfolio-site/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/page.strings": {
    id: "routes/page.strings",
    parentId: "root",
    path: "page/strings",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route2
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
