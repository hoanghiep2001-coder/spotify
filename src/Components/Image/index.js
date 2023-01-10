import noImage from "~/image/thumb/no-image.jpg";

function Image({ src, alt, ...props }) {
  if (src) {
    console.log("check");
  } else {
    src = noImage;
  }
  return <img src={src} alt={alt} {...props} />;
}

export default Image;
