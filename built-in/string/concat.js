export default function(str, content, ..._content) {
    if(_content)
        str.concat(content, _content);

    str.concat(content);
}