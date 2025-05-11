import { Tour } from "onborda/dist/types";

export const getOnboardingSteps = (): Tour[] => {
    const steps: Tour[] =  [
        {
            tour: "onboarding-tour",
            steps: [
                {
                    selector: "#settings",
                    icon: "👋",
                    title: "Welcome to Onborda!",
                    content: "This is step 1",
                    side: "right",
                    showControls: true,
                    pointerPadding: 0,
                    pointerRadius: 11,
                },
                {
                    selector: "#graphType",
                    icon: "👋",
                    title: "Welcome to Onborda!",
                    content: "This is step 1",
                    side: "right",
                    showControls: true,
                    pointerPadding: 0,
                    pointerRadius: 11,
                },
                {
                    selector: "#export-graph",
                    icon: "👋",
                    title: "Welcome to Onborda!",
                    content: "This is step 1",
                    side: "left-top",
                    showControls: true,
                    pointerPadding: 0,
                    pointerRadius: 11,
                },
            ],
        },
    ];

    return steps;
};
