import { FC } from "react";
import { View } from "react-native";
import Dislike from "../../atoms/Icon/Dislike";
import Like from "../../atoms/Icon/Like";
import IconButton from "../../atoms/IconButton";

interface ReactionButtonProps {
    reaction: number;
    onReactionClick: (reaction: number) => void;
}

const ReactionButton: FC<ReactionButtonProps> = ({
    reaction, onReactionClick
}) => {
    return (
        <View className="flex flex-row">
            <IconButton
                icon={
                    <Like
                        className={(reaction == 1) ? "text-blue-500" : "text-gray-200"}
                    />
                }
                onPress={() => onReactionClick(1)}
            />
            <IconButton
                icon={
                    <Dislike
                        className={(reaction == -1) ? "text-blue-500" : "text-gray-200"}
                    />
                }
                onPress={() => onReactionClick(-1)}
            />
        </View>
    )
}

export default ReactionButton;