export default {
  id: 2,
  components: [
    {
      type: 'subHeading',
      value: 'A problem statement',
    },
    {
      type: 'paragraph',
      value: `We have to build an app which displays metadata of HD images like height, width, pixels, date, etc. The user clicks on a thumbnail/name of an image and we show the image details on the screen.`,
    },
    {
      type: 'paragraph',
      value: `We need to understand that accessing HD pictures over the network takes time and a lot of network bandwidth. We also don't want to redownload the same picture again if a user wishes to know the metadata of one picture many times.`,
    },
  ],
};
