/// <reference types="nativewind/types" />

import Container from "./components/atoms/Container";
import Typography from "./components/atoms/Typography";
import { DataProvider } from "./components/providers/DataProvider";
import Posts from "./components/templates/Posts";

const App = () => {
    return (
        <DataProvider>
            <Container>
                <Typography
                    variant="h1"
                    className="mx-4 mt-2"
                >
                    Home
                </Typography>

                <Posts />
            </Container>
        </DataProvider>
    );
}

export default App;