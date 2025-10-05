import React, {useState} from "react";
import {SectionHeader} from "~/components/SectionHeader";
import {Pill} from "~/components/Pill";

type ProjectSectionProps = {
    sectionTitle: string;
    sectionSubHeader: string;
    projects: Project[];
}

type ProjectComponentProps = {
    project: Project;
    sectionSubHeader: string;
}

export type Project = {
    projectName: string;
    projectDescription: string;
    projectImages: string[];
}

const DELAY_TIME = 100;

export const ProjectSection: React.FC<ProjectSectionProps> = ({
                                                                  projects,
                                                                  sectionTitle,
                                                                  sectionSubHeader
                                                              }: ProjectSectionProps) => {
    return (
        <>
            <SectionHeader title={sectionTitle}/>
            {projects.map((project, index) => (
                <ProjectComponent project={project} key={index} sectionSubHeader={sectionSubHeader}/>
            ))}
        </>
    )
}

const ProjectComponent: React.FC<ProjectComponentProps> = ((current) => {
    const {projectName, projectDescription, projectImages} = current.project;
    const [expandedImage, setExpandedImage] = useState<number | null>(null);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleImageClick = (index: number) => {
        setExpandedImage(expandedImage === index ? null : index);
    };

    const handleTransition = (newExpandedImage: number) => {
        setExpandedImage(newExpandedImage);
        setTimeout(() => setIsTransitioning(false), DELAY_TIME);
    }

    const goToPreviousImage = () => {
        if (expandedImage !== null && expandedImage > 0 && !isTransitioning) {
            setIsTransitioning(true);
            setTimeout(() => {
                handleTransition(expandedImage - 1)
            }, DELAY_TIME);
        }
    };

    const goToNextImage = () => {
        if (expandedImage !== null && expandedImage < projectImages.length - 1 && !isTransitioning) {
            setIsTransitioning(true);
            setTimeout(() => {
                handleTransition(expandedImage + 1)
            }, DELAY_TIME);
        }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (expandedImage !== null && !isTransitioning) {
            if (e.key === 'ArrowLeft') {
                goToPreviousImage();
            } else if (e.key === 'ArrowRight') {
                goToNextImage();
            } else if (e.key === 'Escape') {
                setExpandedImage(null);
            }
        }
    };

    React.useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [expandedImage, isTransitioning]);

    return (
        <div className="liquid-glass" style={{
            padding: "20px",
            justifyContent: "space-between",
            flex: 1,
            textAlign: "center",
            position: "relative",
        }}>
            <Pill text={projectName} textSize={"large"}/>
            <h4 style={{marginBottom: "18px", marginTop: "18px"}}>{projectDescription}</h4>
            {projectImages.map((image, index) => (
                <img
                    src={image}
                    alt={projectName}
                    key={index}
                    className="liquid-glass"
                    style={{
                        width: expandedImage === index ? "80%" : "33%",
                        marginLeft: "10px",
                        marginRight: "10px",
                        marginTop: "10px",
                        marginBottom: "48px",
                        padding: "5px",
                        cursor: "pointer",
                        zIndex: expandedImage === index ? 1000 : 1,
                        position: expandedImage === index ? "fixed" : "static",
                        top: expandedImage === index ? "50%" : "auto",
                        left: expandedImage === index ? "50%" : "auto",
                        transform: expandedImage === index ? "translate(-50%, -50%)" : "none",
                        maxHeight: expandedImage === index ? "100vh" : "auto",
                        objectFit: expandedImage === index ? "contain" : "cover",
                        opacity: expandedImage === index ? (isTransitioning ? 0.3 : 1) : 1,
                        transition: expandedImage === index
                            ? "all 0.3s ease-in-out, opacity 0.15s ease-in-out"
                            : "all 0.3s ease-in-out",
                        filter: expandedImage !== index ? "grayscale(100%)" : "grayscale(0%)",
                    }}
                    onClick={() => handleImageClick(index)}
                    onMouseEnter={(e) => {
                        if (expandedImage !== index) {
                            e.currentTarget.style.transform = "scale(1.05)";
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (expandedImage !== index) {
                            e.currentTarget.style.transform = "scale(1)";
                        }
                    }}
                />
            ))}
            <div style={{marginBottom: "9px"}}>
                <Pill text={current.sectionSubHeader}/>
            </div>
            {expandedImage !== null && (
                <>
                    <div
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                            zIndex: 999,
                            cursor: "pointer",
                            transition: "opacity 0.3s ease-in-out",
                        }}
                        onClick={() => setExpandedImage(null)}
                    />
                    {/* Left Navigation Button */}
                    {expandedImage > 0 && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                goToPreviousImage();
                            }}
                            disabled={isTransitioning}
                            style={{
                                position: "fixed",
                                left: "20px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                zIndex: 1001,
                                background: isTransitioning
                                    ? "rgba(255, 255, 255, 0.1)"
                                    : "rgba(255, 255, 255, 0.2)",
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
                                opacity: isTransitioning ? 0.5 : 1,
                            }}
                            onMouseEnter={(e) => {
                                if (!isTransitioning) {
                                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!isTransitioning) {
                                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                                }
                            }}
                        >
                            ‹
                        </button>
                    )}
                    {/* Right Navigation Button */}
                    {expandedImage < projectImages.length - 1 && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                goToNextImage();
                            }}
                            disabled={isTransitioning}
                            style={{
                                position: "fixed",
                                right: "20px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                zIndex: 1001,
                                background: isTransitioning
                                    ? "rgba(255, 255, 255, 0.1)"
                                    : "rgba(255, 255, 255, 0.2)",
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
                                opacity: isTransitioning ? 0.5 : 1,
                            }}
                            onMouseEnter={(e) => {
                                if (!isTransitioning) {
                                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!isTransitioning) {
                                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                                }
                            }}
                        >
                            ›
                        </button>
                    )}
                    {/* Close Button */}
                    <button
                        onClick={() => setExpandedImage(null)}
                        style={{
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
                            transition: "background-color 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                        }}
                    >
                        ×
                    </button>
                </>
            )}
        </div>
    )
})
