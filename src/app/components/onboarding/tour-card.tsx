"use client";
import React from "react";
import type { CardComponentProps } from "onborda";
import { useOnborda } from "onborda";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import { X } from "lucide-react";
import confetti from "canvas-confetti";

export default function TourCard({ step, currentStep, totalSteps, nextStep, prevStep, }: CardComponentProps) {
    const { closeOnborda } = useOnborda();
    const progress = ((currentStep + 1) / totalSteps) * 100;

    const handleFinish = () => {
        closeOnborda();
        confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 },
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
        <Card className="relative z-[999] w-[350px] shadow-xl rounded-2xl bg-background border border-muted">
            <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                    <div>
                        <CardDescription className="text-muted-foreground text-xs font-medium tracking-wider">
                            Step {currentStep + 1} of {totalSteps}
                        </CardDescription>
                        <CardTitle className="text-xl mt-1 font-semibold leading-tight flex items-center">
                            <span className="mr-2 text-2xl">{step.icon}</span>
                            {step.title}
                        </CardTitle>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-muted-foreground hover:text-foreground hover:bg-transparent"
                        onClick={closeOnborda}
                    >
                        <X className="w-4 h-4" />
                    </Button>
                </div>
                <Progress
                    value={progress}
                    className="mt-3 h-2 bg-gray-200 dark:bg-gray-700"
                />
            </CardHeader>

            <CardContent className="text-sm text-foreground pt-0">
                {step.content}
            </CardContent>

            <CardFooter className="pt-4">
                <div className="flex justify-between items-center w-full space-x-3">
                    {currentStep !== 0 && (
                        <Button
                            variant="outline"
                            className="text-xs px-4 py-2 rounded-full border-muted"
                            onClick={prevStep}
                        >
                            ← Previous
                        </Button>
                    )}
                    {currentStep + 1 !== totalSteps ? (
                        <Button
                            className="ml-auto bg-primary text-primary-foreground text-xs px-4 py-2 rounded-full shadow-md hover:bg-primary/90"
                            onClick={nextStep}
                        >
                            Next →
                        </Button>
                    ) : (
                        <Button
                            className="ml-auto bg-green-600 hover:bg-green-500 text-white text-xs px-4 py-2 rounded-full shadow-md"
                            onClick={handleFinish}
                        >
                            🎉 Finish Tour
                        </Button>
                    )}
                </div>
            </CardFooter>
        </Card>
        </motion.div>
    );
};
