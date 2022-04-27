$('button').click(function () {
  let xhr = $.get(
    `http://api.giphy.com/v1/gifs/search?q=${$(
      '#my-input'
    ).val()}&api_key={Put Your API Key Here}&q=cats&limit=1`
  );

  xhr.done(function (data) {
    const url = data.data[0].embed_url;
    const gifImage = `<iframe src='${url}'></iframe>`;

    $('#print').append(gifImage);
  });
});
