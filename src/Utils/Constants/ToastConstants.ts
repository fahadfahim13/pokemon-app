export interface ToastInterface {
    title: string;
    description: string;
    status: "success" | "error" | "warning" | "info";
    duration: number;
    isClosable: boolean;
    variant?: "solid" | "subtle" | "left-accent" | "top-accent";
    position?: "top" | "top-right" | "top-left" | "bottom" | "bottom-right" | "bottom-left";
}

export const SearchErrorToast: ToastInterface = {
    title: "No Pokemon Found",
    description: "No pokemon has been found with this name",
    status: "error",
    duration: 5000,
    isClosable: true
}