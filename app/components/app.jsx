import * as React from "react";
import {Page} from "./page";
import {Center} from "./center";
import {PresentationContainer} from "./presentation";

export class App extends React.Component {
    render() {
        return <PresentationContainer>
            <Page>
                <Center>
                    <h1>Frontend tech update 2016</h1>
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
                <Center align='left'>
                    <h2>ES6 (ES2015)</h2>
                    <ul>
                        <li>let and const</li>
                        <li>arrow function and lexical this</li>
                        <li>default, rest & spread parameter</li>
                        <li>iterator & for..of</li>
                        <li>template strings</li>
                        <li>destructing</li>
                        <li>class</li>
                        <li>modules</li>
                        <li>generators</li>
                        <li>promises</li>
                        <li>tail call</li>
                        <li>i18n</li>
                    </ul> 
                </Center>
            </Page>
            <Page>
                <Center align='left'>
                    <h2>ES7 (ES2016)</h2>
                    <ul>
                        <li>decorators</li>
                        <li>async/await</li>
                    </ul>
                </Center>
            </Page>
            <Page>
                <Center align='left'>
                    <h2>Typescript</h2>
                    <ul>
                        <li>superset of ES6 (and ES7 in future)</li>
                        <li>compile to ES6/5/3</li>
                        <li>static typed (compile time)</li>
                    </ul>
                </Center>
            </Page>
            <Page>
                <Center>
                <h2>Babel</h2>
                <iframe height="500px" width="800px" src="https://babeljs.io/repl/"/>
                </Center>
            </Page>
            <Page>
                <Center>
                    <h1>Q&A</h1>
                </Center>
            </Page>
        </PresentationContainer>;
    }
}
