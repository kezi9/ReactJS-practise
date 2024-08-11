import React from 'react';
import ReactDOM from 'react-dom';

function Page() {
    return (
        <>
            <h1>Reason learning React</h1>
            <ol>
                <li>easy</li>
                <li>fast</li>
                <li>powerful</li>
                <li>fun</li>
            </ol>
        </>
    );
}

ReactDOM.render(<Page />, document.getElementById('root'));