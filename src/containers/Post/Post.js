import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../components/CodeBlock/CodeBlock';

export default function (props) {

    const [content, setContent] = useState('');
    let { key } = useParams();
    const p = props.postsMeta.find(element => element.key === key);

    console.log(props.postsMeta);
    console.log(key);
    console.log(p);

    useEffect(() => {
        axios.get(p.link)
            .then(response => {
                setContent(response.data);
            });
    });

    return (
        <div style={{ paddingTop: "10px" }}>
            <ReactMarkdown
                source={content}
                renderers={{ code: CodeBlock }} />
        </div>
    )
};