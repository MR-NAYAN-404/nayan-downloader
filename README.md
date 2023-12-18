# video-downloader-pro

Video Downloader Pro is a magic npm package helping you download any media content from any website all over the Net.

# Installation

```sh
npm i video-downloader-pro
```

then...

```js
const vdp = require("video-downloader-pro");

vdp("https://www.youtube.com/watch?v=-DEPDfN8ZYk").then((data) => {
  console.log(data);
  return data;
});

/*
output:
{
  info: {
    duration: '10:08',
    thub: 'https://i.ytimg.com/vi/-DEPDfN8ZYk/hqdefault.jpg',
    title: 'Top New Zach King Magic Vines 2017 - Best Magic Tricks Ever'
  },
  links: [
    {
      url: downloadabe video url,
      format: 'MP4'
      quality: '720',
    },
    {
      url: downloadabe video url,
      format: 'MP4'
      quality: '720',
    }
  ]
}
*/
```

## Supported Platforms:

Download videos and music from any website with "video-downloader-pro". It helps you to generate the downloadable urls for any video or music online from any website. You can use it for downloading videos like a professional.

\
[![Best Buildup](https://res.cloudinary.com/alasim/image/upload/v1638729338/hosting%20content/best_buldup.png)](https://www.bestbuildup.com/)\
[BesBuildup.com](https://www.bestbuildup.com/) - excellency in software development
