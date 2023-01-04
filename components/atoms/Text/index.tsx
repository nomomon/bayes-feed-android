import { FC } from "react";
import { Text as Text_ } from "react-native"

interface TextProps {
    children: React.ReactNode;
    className?: string;
    numberOfLines?: number;

    [x: string]: any;
}

const Text: FC<TextProps> = ({ children, className, numberOfLines, ...props }) => {
    const classes = className ? className : "";

    return (
        <Text_
            className={classes}
            numberOfLines={numberOfLines}
            ellipsizeMode={"tail"}
            {...props}
        >
            {children}
        </Text_>
    );
}

export default Text;