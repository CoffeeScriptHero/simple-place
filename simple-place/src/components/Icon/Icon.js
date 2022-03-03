import * as Icons from "../../assets/icons";
import { Svg } from "./Icon-styles";

const Icon = ({ type, onClick, ...rest }) => {
  const iconJsx = Icons[type];
  if (!iconJsx) {
    return null;
  }
  return (
    <Svg onClick={onClick} {...rest}>
      {iconJsx()}
    </Svg>
  );
};

export default Icon;