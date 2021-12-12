import UpTriangle from "./assets/up-triangle.svg";
import DownTriangle from "./assets/down-triangle.svg";

const imageHandler = () => {
  async function getUpTriangle() {
    return UpTriangle;
  }
  async function getDownTriangle() {
    return DownTriangle;
  }
  return {
    getUpTriangle,
    getDownTriangle,
  };
};

export default imageHandler;
