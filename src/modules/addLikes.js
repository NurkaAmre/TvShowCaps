const likesAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OpXkQhwbfD4wnLSWy6wV/likes';

const likeShow = async (id, likesNumber) => {
  await fetch(likesAPI, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(() => {
    likesNumber.innerHTML = parseInt(likesNumber.innerHTML, 10) + 1;
  });
};

export default likeShow;