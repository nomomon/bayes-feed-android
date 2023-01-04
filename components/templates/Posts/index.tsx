import { FC } from "react";
import { View } from "react-native";
import Text from "../../atoms/Text";
import Card from "../../molecules/Card";
import { DataProviderInterface, WithData } from "../../providers/DataProvider";


const Posts: FC<DataProviderInterface> = ({ posts, loading }) => {

    return (
        <View className="w-full flex flex-col items-center overflow-hidden">
            {posts.map((post, idx) => (
                <Card
                    key={idx}
                    {...post}
                />
            ))}
            {loading && (
                <Text>
                    Loading...
                </Text>
            )}
            {posts.length === 0 && !loading && (
                <Text>
                    No posts found
                </Text>
            )}
        </View>
    )
}

export default WithData(Posts);