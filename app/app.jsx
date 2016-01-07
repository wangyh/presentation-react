import * as React from "react";
import {Page} from "./page";
import {Center} from "./center";
import {Presentation} from "./presentation";

export class App extends React.Component {
    render() {
        return <Presentation>
            <Page>
                <Center>
                    <h1>Frontend tech AMS will use in 2016</h1>
                </Center>
            </Page>
            <Page>
                <Center align='left'>
                <h2>Lanugage</h2>
                <ul>
                    <li>ES6 (ES2015)</li>
                    <li>ES7 (ES2016)</li>
                    <li>Typescript - Microsoft</li>
                </ul>
                <h2>Framework</h2>
                <ul>
                    <li>ReactJs - Facebook</li>
                    <li>Redux</li>
                </ul>
                </Center>
            </Page>
            <Page>
                <Center align='left'>
                    <h2>Library</h2>
                    <ul>
                        <li>Immutable.js - Facebook</li>
                        <li>FormatJS</li>
                    </ul>
                    <h2>Tools</h2>
                    <ul>
                        <li>Babel</li>
                        <li>Flow</li>
                        <li>Webpack</li>
                    </ul>
                </Center>
            </Page>
            <Page>
                <Center>
                    <h1>Q&A</h1>
                </Center>
            </Page>
        </Presentation>;
    }
}
