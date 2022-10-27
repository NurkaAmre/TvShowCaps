
const likesShow = async (id, likesNumber, likesBtn) => {
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
      const i = likesBtn.querySelector('i');
      i.classList.remove('fa-regular');
      i.classList.add('fa-solid');
    });
  };