export default {
  id: 3,
  components: [
    {
      type: 'subHeading',
      value: 'The solution',
    },
    {
      type: 'paragraph',
      value: `To avoid this we will:<br/>
          <ul>
          <li> &bull; Download the image only when the thumbnail is clicked, so that we don't consume user's bandwidth as soon as the user opens the app.</li>
          <li> &bull; Cache the image object for later use.</li>
          </ul>
          <br/>
          The structure of the Proxy pattern is defined as:`,
    },
    {
      type: 'img',
      value: `https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Proxy_pattern_diagram.svg/439px-Proxy_pattern_diagram.svg.png`,
    },
    {
      type: 'paragraph',
      value: `Here, our classes RealImage and ProxyImage implement a common interface Image. The client is only aware of the interface and has no knowledge if it's interacting with a real image or a proxy image. And our ProxyImage contains a reference to RealImage, which will be used to cache the instance as we do not want to instantiate RealImage every time, which is an expensive operation.`,
    },
    {
      type: 'paragraph',
      value: `When the application loads, the objects of ProxyImages will be available for the user. The proxy objects do not have any RealImage objects as of now.
          <br/>
          Once a user clicks the thumbnail of the images and wants to know the metadata of the image, only then we will create an object of RealImage and return metadata from it.`,
    },
    {
      type: 'code',
      value: `
public class RealImage implements Image {
    private String fileName;

    public RealImage(String fileName) {
        this.fileName = fileName;
    }
    public void printMetaData(){
        Sysout.out.println("Height: 4000px, Width: 300px");
    }
}`,
    },
    {
      type: 'code',
      value: `
public class ProxyImage implements Image {
    private String fileName;
    private RealImage realImage;

    public ProxyImage(String fileName) {
        this.fileName = fileName;
    }

    public void printMetaData() {
        if (realImage == null) {
          realImage = new RealImage(fileName);
        }
        realImage.printMetaData();
    }
}`,
    },
    {
      type: 'paragraph',
      value: `Subsequent requests to the same proxy object will not result in object creation again and again.`,
    },
  ],
};
