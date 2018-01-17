import React from 'react';
import ReactDOM from 'react-dom';
import './Style/style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <div>
        <App />
        <footer onClick={()=>{window.location.replace("https:/GitHub.com/RostislavZalevsky")}}>
            Created by Rostislav Zalevsky &copy; {(new Date()).getFullYear()}
        </footer>
    </div>
), document.getElementById('root'));
registerServiceWorker();
