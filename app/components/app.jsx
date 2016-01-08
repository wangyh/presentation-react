import * as React from "react";
import {Page} from "./page";
import {Center} from "./center";
import {PresentationContainer} from "./presentation";

export class App extends React.Component {
    render() {
        return <PresentationContainer>
            <Page>
                <Center>
                    <h1>Frontend tech update</h1>
                    <h3>Yuheng Wang | Jan 2016</h3>
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
                <Center>
                    <h2>ES6 - let and const</h2>
                    <img src={require("../../images/ES6-let-const.png")} style={{height:"300px"}}/>
                </Center>
            </Page>
            <Page>
                <Center>
                    <h2>ES6 - let and const</h2>
                    <img src={require("../../images/ES6-let.png")} style={{height:"300px"}}/>
                </Center>
            </Page>

            <Page>
                <Center>
                    <h2>ES6 - arrow function and lexical this</h2>
                    <img src={require("../../images/ES6-arrow-function.png")}/>
                </Center>
            </Page>
            <Page>
                <Center>
                    <h2>ES6 - default, rest & spread parameter</h2>
                    <img src={require("../../images/ES6-default-parameter.png")}/>
                    <img src={require("../../images/ES6-rest-parameter.png")}/>
                    <img src={require("../../images/ES6-spread-parameter.png")}/>
                </Center>
            </Page>
            <Page>
                <Center>
                    <h2>ES6 - iterator & for..of</h2>
                    <img src={require("../../images/ES6-iterator-for-of.png")}/>
                </Center>
            </Page>
            <Page>
                <Center>
                    <h2>ES6 - template strings</h2>
                    <img src={require("../../images/ES6-template-strings.png")}/>
                </Center>
            </Page>
            <Page>
                <Center>
                    <h2>ES6 - destructing</h2>
                    <img src={require("../../images/ES6-destructing.png")}/>
                </Center>
            </Page>
            <Page>
                <Center>
                    <h2>ES6 - class</h2>
                    <img src={require("../../images/ES6-class.png")}/>
                </Center>
            </Page>
            <Page>
                <Center>
                    <h2>ES6 - modules</h2>
                    <img src={require("../../images/ES6-modules-1.png")}/>
                    <img src={require("../../images/ES6-modules-2.png")}/>
                </Center>
            </Page>
            <Page>
                <Center>
                    <h2>ES6 - generators</h2>
                    <img src={require("../../images/ES6-generators.png")}/>
                </Center>
            </Page>
            <Page>
                <Center>
                    <h2>ES6 - promises</h2>
                    <img src={require("../../images/ES6-promises.png")}/>
                </Center>
            </Page>
            <Page>
                <Center>
                    <h2>ES6 - tail call</h2>
                    <img src={require("../../images/ES6-tail-call.png")}/>
                </Center>
            </Page>
            <Page>
                <Center>
                    <h2>ES6 - i18n</h2>
                    <pre style={{textAlign: 'left', fontSize: '20pt'}}>
                    <code>
                        Intl.NumberFormat('zh-CN').format(12345.67)     -> 12,345.67<br/>
                        Intl.NumberFormat('de-DE').format(12345.67)     -> 12.345,67<br/>
                        Intl.DateTimeFormat('zh-CN').format(new Date()) -> 2016/1/8<br/>
                        Intl.DateTimeFormat('de-DE').format(new Date()) -> 8.1.2016<br/>
                        Intl.DateTimeFormat('en-US').format(new Date()) -> 1/8/2016<br/>
                    </code>
                    </pre>
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
                <Center>
                    <h2>ES7 - decorators</h2>
                    <img src={require("../../images/ES7-decorators.png")}/>
                </Center>
            </Page>
            <Page>
                <Center>
                    <h2>ES7 - async/await</h2>
                    <img src={require("../../images/ES7-async-await.png")}/>
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
                    <h2>Typescript</h2>
                    <img src={require("../../images/Typescript-class.png")}/>
                    <img src={require("../../images/Typescript-interface.png")}/>
                </Center>
            </Page>
            <Page>
                <Center>
                    <h2>Flow</h2>
                    <img src={require("../../images/Flow-1.png")}/>
                    <img src={require("../../images/Flow-2.png")}/>
                    <img src={require("../../images/Flow-3.png")}/>
                </Center>
            </Page>
            <Page>
                <Center>
                    <h2>ReactJs</h2>
                    <img src={require("../../images/React-1.png")}/>
                    <img src={require("../../images/React-2.png")}/>
                </Center>
            </Page>
            <Page>
                <Center>
                    <h2>Flux</h2>
                    <img src={require("../../images/Flux-1.png")}/>
                    <img src={require("../../images/Flux-2.png")}/>
                </Center>
            </Page>
            
            <Page>
                <Center>
                    <h2>Redux</h2>
                    <img src={require("../../images/Redux-1.png")}/>
                    <img src={require("../../images/Redux-2.png")}/>
                </Center>
            </Page>
            <Page>
                <Center>
                    <h2>Immutable.js</h2>
                    <img src={require("../../images/immutable-trie.png")}/>
                </Center>
            </Page>
            <Page>
                <Center>
                    <h2>FormatJS</h2>
                    <img src={require("../../images/formatjs.png")}/>
                    <img src={require("../../images/formatjs-integration.png")}/>
                </Center>
            </Page>
            <Page>
                <Center>
                    <h2>Webpack</h2>
                    <img src={require("../../images/Webpack.png")}/>
                </Center>
            </Page>
            <Page>
                <Center>
                    <h1>Demo 1</h1>
                    <h2>ES6 + React</h2>
                </Center>
            </Page>
            <Page>
                <Center>
                    <h1>Demo 2</h1>
                    <h2>Typescript + React</h2>
                </Center>
            </Page>
            <Page>
                <Center>
                    <h1>Demo 3</h1>
                    <h2>React + Redux + Immutable.js + Unit Test</h2>
                </Center>
            </Page>
            <Page>
                <Center>
                    <h1>Demo 4</h1>
                    <h2>React Developer Tools</h2>
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
