import { HeroUIProvider } from "@heroui/react";
import { ReactNode } from "react";

interface AppProps {
    children: ReactNode
}

export default function App({children}: AppProps) {
    return (
        <HeroUIProvider>
            {children}
        </HeroUIProvider>
    )
}