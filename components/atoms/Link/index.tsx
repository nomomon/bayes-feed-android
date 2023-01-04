import { FC, useCallback } from "react";
import { Linking, Alert, TouchableOpacity } from "react-native";
import { twMerge } from "tailwind-merge";
import Text from "../Text";

interface LinkProps {
    children: React.ReactNode;
    className?: string;
    href: string;
    [x: string]: any;
}

const Link: FC<LinkProps> = ({ children, className, href, ...props }) => {
    const classes = twMerge("underline text-gray-500", className)

    const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(href);

        if (supported) {
            await Linking.openURL(href);
        } else {
            Alert.alert(`Can't open this link: ${href}`);
        }
    }, [href]);

    return (
        <TouchableOpacity onPress={handlePress}>
            <Text className={classes} {...props}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

export default Link;