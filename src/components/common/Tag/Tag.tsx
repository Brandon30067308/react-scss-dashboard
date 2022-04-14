import { FC } from 'react';
import TagStyles from './Tag.module.scss';

interface TagProps {
  numberOrText: string | number;
}

const Tag: FC<TagProps> = ({ numberOrText }) => {
  const isNumber = typeof numberOrText === 'number';
  return (
    <div
      className={`${isNumber ?
        (numberOrText > 0 ?
          TagStyles.greenTag :
          TagStyles.redTag) :
        ''} tag round-lg py-0-5 px-0-75 text-md w-fit text-align-center`}
    >{isNumber ? `${numberOrText > 0 ? '+' : ''}${numberOrText}%` : numberOrText}</div>
  );
}

export default Tag;