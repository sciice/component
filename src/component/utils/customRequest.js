import axios from './request';

function customRequest({ action, data, file, filename, headers, onError, onProgress, onSuccess }) {
  const formData = new FormData();
  if (data) {
    Object.keys(data).map(key => formData.append(key, data[key]));
  }
  formData.append(filename, file);

  axios
    .post(action, formData, {
      headers,
      onUploadProgress: ({ total, loaded }) => {
        onProgress({ percent: Math.round((loaded / total) * 100).toFixed(2) }, file);
      },
    })
    .then(({ data: response }) => {
      onSuccess(response);
    })
    .catch(onError);

  return {
    abort() {
      console.log('upload progress is aborted.');
    },
  };
}

export default customRequest;
