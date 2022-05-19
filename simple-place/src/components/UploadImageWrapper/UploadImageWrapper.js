import {
  UploadImgWrapper,
  UploadButton,
  InnerUploadWrapper,
  ImageWrapper,
  Image,
} from "./UploadImageWrapper-styles";
import ImageUploading from "react-images-uploading";
import Icon from "../Icon/Icon";

const UploadImageWrapper = ({ images, setImages, setStage }) => {
  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
    setStage(2);
  };

  return (
    <UploadImgWrapper>
      <ImageUploading
        value={images}
        onChange={onChange}
        maxNumber={1}
        dataURLKey="data_url"
        resolutionWidth={144}
        resolutionHeight={144}
      >
        {({ imageList, errors, onImageUpload, onImageRemove, dragProps }) => (
          <InnerUploadWrapper>
            {imageList.length === 0 && (
              <Icon type={"picture"} width="150" height="150" />
            )}
            {images.map((image, index) => (
              <ImageWrapper key={5}>
                <Image key={index} src={image.data_url}></Image>
                <Icon
                  key={2}
                  position="absolute"
                  top="10px"
                  right="10px"
                  type="cross"
                  onClick={() => {
                    onImageRemove(0);
                    setStage(1);
                  }}
                  pointer
                />
              </ImageWrapper>
            ))}
            {images.length === 0 && (
              <UploadButton onClick={onImageUpload} {...dragProps}>
                Select from computer
              </UploadButton>
            )}
            {errors && <div>{errors.resolution && <p>VERY MIN</p>}</div>}
          </InnerUploadWrapper>
        )}
      </ImageUploading>
    </UploadImgWrapper>
  );
};

export default UploadImageWrapper;
