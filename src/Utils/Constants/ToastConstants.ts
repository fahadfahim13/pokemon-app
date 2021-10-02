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

export const TeamMaxLimitExceedToast: ToastInterface = {
    title: "Team limit reached.",
    description: "The maximum limit of team size is 6. More than 6 pokemons are allowed in your team.",
    status: "warning",
    duration: 5000,
    isClosable: true
}

export const TeamItemAddSuccessToast: ToastInterface = {
    title: "Successful",
    description: "Successfully added item into your team.",
    status: "success",
    duration: 5000,
    isClosable: true
}

export const TeamItemRemoveSuccessToast: ToastInterface = {
    title: "Successful",
    description: "Successfully removed item from your team.",
    status: "success",
    duration: 5000,
    isClosable: true
}