import { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import DropdownStyles from './Dropdown.module.scss';

export interface DropdownChild {
  children: (DropdownChild | string)[];
  header: { content: (JSX.Element | string) }
}

export interface DropdownProps {
  item: {
    header: {
      content: JSX.Element | string;
      action?: JSX.Element | string;
    };
    children?: (DropdownChild | string)[];
  };
}

const Dropdown: FC<DropdownProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={`${DropdownStyles.container} w-100`}>
      <div
        className={`w-100 flex flex-column ${isOpen ? 'row-gap-1-35' : 'row-gap-0'}`}>
        <div
          className={`w-100 flex justify-space-between pointer`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`${DropdownStyles.item} font-md`}
          >{item.header.content}</span>
          <FontAwesomeIcon
            icon={faChevronDown}
            size='xs'
            className={DropdownStyles.dropdownIcon}
            style={{
              transition: 'transform .3s ease',
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
            }}
          />
        </div>
        <ul
          className="pl-0-75 flex flex-column w-100 row-gap-1-35 align-flex-start"
          style={{ display: isOpen ? 'flex' : 'none' }}
        >
          {
            item.children?.map((c, ci) => (
              <li
                key={`d-c-${ci}`}
                className={`${DropdownStyles.item} w-100 font-md`}
              >
                {
                  typeof c === 'string' ?
                    <span
                      className={`${DropdownStyles.item} w-100 pointer font-md`}
                    >{c}</span> :
                    <Dropdown
                      item={{
                        header: c.header,
                        children: c.children
                      }}
                    />
                }
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;