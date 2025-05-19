"use client";

import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import { Button } from "@/components/ui/button";

const BMC_URL = "https://www.buymeacoffee.com/lakshmansiva";

export default function BuyMeCoffeeImageButton() {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return isMobile ? (
        <Button
            asChild
            size="icon"
            className="bg-[#FD0] hover:bg-[#ffea00]"
            title="Buy me a coffee"
        >
            <a href={BMC_URL} target="_blank" rel="noopener noreferrer">
                <Image
                    src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
                    alt="Buy Me a Coffee"
                    width={20}
                    height={20}
                    unoptimized
                />
            </a>
        </Button>
    ) : (
        <a
            id="bmc-button"
            href={BMC_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="Buy me a coffee"
        >
            <Image
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                alt="Buy Me A Coffee"
                width={120}
                height={40}
                unoptimized
                priority
            />
        </a>
    );
}
