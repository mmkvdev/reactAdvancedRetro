import React from "react";
function GreetWithoutJSX () {
    return React.createElement('div', null, React.createElement('h1', null, 'hello world without JSX'));
}

export default GreetWithoutJSX;