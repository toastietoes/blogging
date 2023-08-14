import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {useState} from "react";

const modules = {
    toolbar: [
        [{'header': [1,2,false]}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': -1}, {'indent': +1}],
        ['link', 'image'],
        ['clean']
    ]
};
const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote', 
    'list', 'bullet', 'indent', 
    'line', 'image'
]

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState('');
    function createNewPost(ev) {
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary); 
        data.set('content', content);
        data.set('file', file);
        ev.preventDefault();
        fetch('http//localhost:4000/post', {
            method:'POST',
            //body:
        })
    }
    return (
        <form onSumbit={createNewPost}>
            <input type = "title" 
                placeholder={'Title'} 
                value={title}
                onChange = {ev => setTitle(ev.target.value)}/>
            <input type = "summary" 
                placeholder = {'Summary'}
                value={summary}
                onChange={ev => setSummary(ev.target.value)}/>
            <input type = "file" 
                value={file}
                onChange={ev => setFile(ev.target.file)}/>
            <ReactQuill 
                value={content} 
                onChange={newValue => setContent(newValue)}
                modules={modules} 
                formats={formats}/>
             <button style={{marginTop:'5px'}}>Create post</button>
        </form>
    );
}
    