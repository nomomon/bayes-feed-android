import { View } from "react-native"
import Like from "../../atoms/Icon/Like";
import Dislike from "../../atoms/Icon/Dislike";
import IconButton from "../../atoms/IconButton";
import Link from "../../atoms/Link";
import Text from "../../atoms/Text";
import Typography from "../../atoms/Typography";
import { FC, useState } from "react";
import { DataProviderInterface, WithData } from "../../providers/DataProvider";
import preprocess from "../../utils/Preprocess";
import { Score } from "../../interface/Score";
import ReactionButton from "../ReactionButton";

const READMORE = {
    "en": "Read more",
    "ru": "Читать далее"
}

interface CardProps {
    sourceName?: string;
    postName: string;
    postDescription: string;
    link: string;
    lang: string;
    score: number;
}

const Card: FC<CardProps & DataProviderInterface> = ({
    sourceName,
    postName,
    postDescription,
    link,
    lang,
    score,
    reactToPost
}) => {
    const [reaction, setReaction] = useState(0); // -1 0 1

    const handleReactionClick = async (reaction: number) => {
        const text = postName + " " + postDescription;

        const wordFreq = preprocess(text);
        const score = {
            like: Number(reaction == 1),
            dislike: Number(reaction == -1)
        } as Score;

        reactToPost(
            wordFreq,
            score
        ).then(() => setReaction(reaction))
    }

    return (
        <View className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md my-3 w-full">
            <View className="p-3">
                <Typography
                    variant="caption"
                    numberOfLines={1}
                >
                    {sourceName}
                </Typography>
                <Typography
                    variant="h3"
                    numberOfLines={2}
                >
                    {postName}
                </Typography>
                <Typography
                    variant="caption"
                    numberOfLines={4}
                >
                    {postDescription}
                </Typography>
                <Link
                    className="mt-2"
                    href={link}
                >
                    {READMORE[lang || "ru"]}
                </Link>
                <View className="flex flex-row mt-2 w-full">
                    <ReactionButton
                        reaction={reaction}
                        onReactionClick={handleReactionClick}
                    />
                    <View className="ml-auto">
                        <Text className="text-gray-500 text-xs align-middle">
                            {score.toFixed(2)}
                        </Text>
                    </View>
                </View>
            </View>
        </View >
    )
}

export default WithData(Card);