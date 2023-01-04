import { FC } from "react";
import { Text } from "react-native";
import { twMerge } from "tailwind-merge";

const variantToStyle = {
    h1: "text-4xl font-bold tracking-tight text-gray-900",
    h2: "text-3xl font-bold tracking-tight text-gray-900",
    h3: "text-2xl font-bold tracking-tight text-gray-900",
    h4: "text-xl font-bold tracking-tight text-gray-900",
    h5: "text-lg font-bold tracking-tight text-gray-900",
    h6: "text-base font-bold tracking-tight text-gray-900",
    subtitle1: "text-lg font-medium tracking-tight text-gray-900",
    subtitle2: "text-base font-medium tracking-tight text-gray-900",
    body1: "text-lg font-normal text-gray-700",
    body2: "text-base font-normal text-gray-700",
    caption: "text-sm font-normal text-gray-700",
    overline: "text-xs font-normal text-gray-700",
}

interface TypographyProps {
    variant: keyof typeof variantToStyle;
    children: React.ReactNode;
    className?: string;
    [x: string]: any;
}

const Typography: FC<TypographyProps> = ({ children, variant, className, ...props }) => {
    const classes = twMerge(variantToStyle[variant], className);

    return (
        <Text
            className={classes}
            ellipsizeMode={"tail"}
            {...props}
        >
            {children}
        </Text>
    );
}

export default Typography;