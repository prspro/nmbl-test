import {FC} from 'react'
import classNames from "classnames";
import sprite from "../../img/sprite.svg";

interface ISvgIconProps {
    id: string;
    className?: string;
}

const SvgIcon:FC<ISvgIconProps> = ({id, className}) => {
  return (
    <svg className={classNames("icon", id, className)} >
      <use href={sprite + "#" + id} />
    </svg>
  )
}

export default SvgIcon