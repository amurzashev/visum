import axios from 'axios';

const csrfLaravel = document.head.querySelector('[name~=csrf-token][content]').content;
const apiRequest = axios.create({
  baseURL: '/api/web/v1/',
  headers: {
    'Content-Type': 'application/json',
    'csrf-token': csrfLaravel
  },
  timeout: 15000
});

export default apiRequest;
