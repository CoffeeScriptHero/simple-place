import * as Icons from "../../assets/icons";
import { Svg, IconLink } from "./Icon-styles";

const Icon = ({ type, onClick, path, ...rest }) => {
  const iconJsx = Icons[type];
  if (!iconJsx) {
    return null;
  }
  return (
    <Svg onClick={onClick} {...rest}>
      {path && <IconLink to={path}>{iconJsx()}</IconLink>}
      {!path && iconJsx()}
    </Svg>
  );
};

export default Icon;
