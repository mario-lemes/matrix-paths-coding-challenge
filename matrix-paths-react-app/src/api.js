import axios from 'axios';

const apiUrl = 'https://coding-challenge.mariolemesmedina.me/api';

export async function uploadFile(file) {
  return axios.post(apiUrl + '/v1/matrixes', {
    file: null,
  });
}
