import { FC } from "react";
import Svg, { SvgProps, Path } from "react-native-svg"
import { twMerge } from "tailwind-merge";

interface Props extends SvgProps {
    className?: string;
}

const SvgComponent: FC<Props> = ({ className, ...props }) => {

    const classes = twMerge("w-6 h-6", className)

    return (
        <Svg
            className={classes}
            stroke="none"
            fill="currentColor"
            viewBox="0 0 24 24"
            // xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.25}
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            />
        </Svg>
    );
}

export default SvgComponent;