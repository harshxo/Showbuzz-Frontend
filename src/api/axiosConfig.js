import axios from 'axios';

export default axios.create({ 
    // baseURL: 'http://localhost:8080/',
    baseURL: 'https://showbuzz-production.up.railway.app/',

    headers: {
        "ngrok-skip-browser-warning": "true"   
    },
});