import { FC } from "react";
import { ScrollView, View } from "react-native"

interface ContainerProps {
    children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
    return (
        <ScrollView className="mt-5 bg-white">
            <View className="min-w-full min-h-full">
                {children}
            </View>
        </ScrollView>
    )
}

export default Container;