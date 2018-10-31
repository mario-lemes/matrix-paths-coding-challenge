import axios from 'axios';

const apiUrl = 'https://coding-challenge.mariolemesmedina.me/api';

export async function uploadFile(file) {
  const formData = new FormData();
  formData.append('file', file);

  return axios.post(apiUrl + '/v1/matrixes', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export async function getPath(file) {
  return axios.get(apiUrl + '/v1/paths', {
    params: {
      file,
    },
  });
}
