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
  }
}

const Dropdown: FC<DropdownProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={`${DropdownStyles.container} w-100`}>
      <div
        className="w-100">
        <div
          className={`pb-1-35 w-100 flex justify-space-between pointer`}
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
        <ul className="pl-0-75">
          {
            isOpen && item.children?.map((c, ci) => (
              <li
                key={`d-c-${ci}`}
                className={`${DropdownStyles.item} font-md ${typeof c === 'string' ? 'pb-1-35' : 'pb-0'}`}
              >
                {
                  typeof c === 'string' ?
                    <a
                      className={`${DropdownStyles.item} pointer font-md`}
                      href="#"
                    >{c}</a> :
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