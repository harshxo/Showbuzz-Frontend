import axios from 'axios';

export default axios.create({ 
    // baseURL: 'http://localhost:8080/',
    baseURL: 'cooperative-clarity-production.up.railway.app',

    headers: {
        "ngrok-skip-browser-warning": "true"   
    },
});