import React, { FC } from "react";
import { Pressable, View } from "react-native";

interface IconButtonProps {
    icon: React.ReactNode;
    onPress: () => void;
    [key: string]: any;
}

const rem = 16;

const IconButton: FC<IconButtonProps> = ({ icon, onPress, ...props }) => {
    return (
        <View
            style={{
                width: 2 * rem,
                height: 2 * rem,
                borderRadius: rem,
                marginRight: .25 * rem,
                justifyContent: "center",
                overflow: "hidden",
            }}
        >
            <Pressable
                onPress={onPress}
                android_ripple={{ color: "gray" }}
                style={{
                    width: 2 * rem,
                    height: 2 * rem,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {icon}
            </Pressable>
        </View>
    );
}

export default IconButton;