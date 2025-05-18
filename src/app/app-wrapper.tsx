import { Onborda, OnbordaProvider } from "onborda";
import { getOnboardingSteps } from "./utils/onboarding-steps";
import TourCard from "./components/onboarding/tour-card";

export function AppWrapper({ children }: { children: React.ReactNode }) {
    const steps = getOnboardingSteps();

    return (
        <>
            <OnbordaProvider>
                <Onborda
                    steps={steps}
                    shadowRgb="50, 50, 50"
                    shadowOpacity="0.6"
                    cardComponent={TourCard}
                >
                    {children}
                </Onborda>
            </OnbordaProvider>
        </>
    );
}
