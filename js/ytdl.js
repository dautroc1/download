window.getInfo = async (e) => {
    if ("" !== e) {
      var t = await fetch("https://ytdl-ios.netlify.app/.netlify/functions/ytdl?url=" + e, {
        method: 'GET',
    headers: {
      'authority': 'ytdl-ios.netlify.app',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Safari/537.36',
      'accept': '*/*',
      'sec-gpc': '1',
      'origin': 'https://ytdl-app.pages.dev',
      'sec-fetch-site': 'cross-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': 'https://ytdl-app.pages.dev/',
      'accept-language': 'en-US,en;q=0.9',
      'if-none-match': 'W/"945d1-UGkHzAYa+k8twc5B4z0RXN3rkcA"'
    },
      });
      return 500 === t.status ? (console.log(await t.json()), "") : await t.json();
    }
    console.log("Error: video URL cannot be empty");
  };