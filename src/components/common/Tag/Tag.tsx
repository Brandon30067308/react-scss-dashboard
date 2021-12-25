import { FC } from 'react';
import TagStyles from './Tag.module.scss';

interface TagProps {
  text: string | number;
}

const Tag: FC<TagProps> = ({ text }) => {
  const isNumber = typeof text === 'number';
  return (
    <div
      className={`${isNumber ?
        (text > 0 ?
          TagStyles.greenTag :
          TagStyles.redTag) :
        ''} tag round-lg py-0-5 px-0-75 text-md`}
    >{isNumber ? `${text > 0 ? '+' : ''}${text}%` : text}</div>
  );
}

export default Tag;