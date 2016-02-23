import React from 'react';

export class I18nExmaple extends React.Component {
    render (){
        return <pre style={{textAlign: 'left', fontSize: '20pt'}}>
                    <code>
                        Intl.NumberFormat('zh-CN').format(12345.67)     -> 12,345.67<br/>
                        Intl.NumberFormat('de-DE').format(12345.67)     -> 12.345,67<br/>
                        Intl.DateTimeFormat('zh-CN').format(new Date()) -> 2016/1/8<br/>
                        Intl.DateTimeFormat('de-DE').format(new Date()) -> 8.1.2016<br/>
                        Intl.DateTimeFormat('en-US').format(new Date()) -> 1/8/2016<br/>
                    </code>
                </pre>
    }
}

