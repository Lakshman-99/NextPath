import { Tour } from "onborda/dist/types";

export const getOnboardingSteps = (): Tour[] => {
    const steps: Tour[] =  [
        {
            tour: "onboarding",
            steps: [
                {
                    selector: "#tour1-step1",
                    icon: "👋",
                    title: "Welcome to Onborda!",
                    content: "This is step 1",
                    side: "top",
                    showControls: true,
                    pointerPadding: 0,
                    pointerRadius: 11,
                },
            ],
        },
    ];

    return steps;
};
