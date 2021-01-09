import Image from "../models/Image";

const url = "http://192.168.0.21:3333/";

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `${url}uploads/${image.path}`,
    };
  },
  renderMany(images: Image[]) {
    return images.map((image) => this.render(image));
  },
};
