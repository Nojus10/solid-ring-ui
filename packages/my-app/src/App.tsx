import type {Component} from 'solid-js';
import {Badge,Button} from "solid-ring-ui"
import "solid-ring-ui/dist/style.css"

const App: Component = () => {
    return (
        <div>

            <div>
                <Badge>simple</Badge>
                <Badge gray>gray</Badge>
                <Badge valid>valid</Badge>
                <Badge invalid>invalid</Badge>
                <Badge disabled>disabled</Badge>
            </div>

            <div>
                <Button>Nice</Button>
            </div>
        </div>
    );
};

export default App;
