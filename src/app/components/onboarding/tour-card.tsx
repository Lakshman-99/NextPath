"use client";
import React from "react";
import type { CardComponentProps } from "onborda";
import { useOnborda } from "onborda";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";

import { ChevronLeft, ChevronRight, PartyPopper, X } from "lucide-react";
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
        <AnimatePresence mode="wait">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
        <Card className="relative z-[999] w-[350px] shadow-xl rounded-2xl bg-background border border-muted overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-[2px] bg-primary/30" />
            <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                    <motion.div layout>
                        <CardDescription className="text-muted-foreground text-xs font-medium tracking-wider flex items-center">
                            <motion.div 
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                transition={{ 
                                    type: "spring",
                                    damping: 10,
                                    stiffness: 200
                                }}
                                className="text-primary bg-primary/10 w-5 h-5 inline-flex items-center justify-center rounded-full mr-2"
                            >
                                {currentStep + 1}
                            </motion.div>
                            <span>of {totalSteps}</span>
                            <span className="mx-2 text-border">•</span>
                            <span className="text-foreground/70">{Math.round(progress)}% Complete</span>
                        </CardDescription>
                        
                        <CardTitle className="text-xl mt-2 font-semibold leading-tight flex items-center">
                            <motion.span 
                                initial={{ rotate: -10, scale: 0.9, opacity: 0.7 }}
                                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                                transition={{ duration: 0.4 }}
                                className="mr-3 text-2xl"
                            >
                                {step.icon}
                            </motion.span>
                            <motion.span 
                                initial={{ x: -5, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                            >
                                {step.title}
                            </motion.span>
                        </CardTitle>
                    </motion.div>
                    <motion.div whileHover={{ rotate: 90 }} transition={{ duration: 0.2 }} >
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-muted-foreground rounded-full hover:text-foreground hover:bg-transparent"
                            onClick={closeOnborda}
                        >
                            <X className="w-4 h-4" />
                        </Button>
                    </motion.div>
                </div>
            </CardHeader>

            <CardContent className="text-sm text-foreground">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="relative"
                >
                    {step.content}
                </motion.div>
            </CardContent>

            <CardFooter className="pt-4">
                <div className="flex justify-between items-center w-full space-x-3">
                    {currentStep !== 0 && (
                        <motion.div whileHover={{ x: -4 }} whileTap={{ scale: 0.97 }}>
                            <Button
                                variant="outline"
                                className="text-xs px-4 py-2 rounded-full border-muted"
                                onClick={prevStep}
                            >
                                <ChevronLeft className="w-4 h-4 mr-1" />
                                Previous
                            </Button>
                        </motion.div>
                    )}
                    {currentStep + 1 !== totalSteps ? (
                        <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.97 }} className="ml-auto">
                            <Button
                                className="ml-auto bg-primary text-primary-foreground text-xs px-4 py-2 rounded-full shadow-md hover:bg-primary/90"
                                onClick={nextStep}
                            >
                                Next
                                <ChevronRight className="w-4 h-4 ml-1" />
                            </Button>
                        </motion.div>
                    ) : (
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="ml-auto">
                            <Button
                                className="ml-auto bg-green-600 hover:bg-green-500 text-white text-xs px-4 py-2 rounded-full shadow-md"
                                onClick={handleFinish}
                            >
                                <PartyPopper className="w-4 h-4 mr-1" />
                                Finish Tour
                            </Button>
                        </motion.div>
                    )}
                </div>
            </CardFooter>
        </Card>
        </motion.div>
        </AnimatePresence>
    );
};
