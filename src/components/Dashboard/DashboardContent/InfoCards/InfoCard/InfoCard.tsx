import { FC } from 'react';
import { info } from '../../../../../types/types';
import DashboardStyles from '../../../Dashboard.module.scss';
import Tag from '../../../../common/Tag/Tag';
import { faDollarSign, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useWindowDimensions from './../../../../../hooks/useWindowDimensions';
import breakpoints from './../../../../../breakpoints/breakpoints';

type InfoCardProps = {
  info: info
};

const InfoCard: FC<InfoCardProps> = ({ info: { value, name, rate, type, date } }) => {
  const { width } = useWindowDimensions();

  return (
    <div className={`${DashboardStyles.infoItem} shadow-sm w-100 bg-light round-sm text-dark
      flex justify-space-between align-flex-start ${width >= breakpoints['xs'] ? 'p-1-25' : 'p-0-85'}`}>
      <div className="flex w-100 flex-column row-gap-1 justify-flex-start flex-column align-flex-start">
        <div className="flex w-100 justify-space-between">
          <div className="flex flex-column row-gap-0-65 align-flex-start">
            <span className="font-2xl weight-500">{value}</span>
            <span className="text-muted">{name}</span>
          </div>
          <div className={`${DashboardStyles.infoCardIcon} p-0-5 round-full flex`}>
            <FontAwesomeIcon icon={type === 'income' ? faDollarSign : faShoppingBag} size="2x" />
          </div>
        </div>
        <div className="flex justify-flex-start column-gap-0-85">
          <Tag numberOrText={rate} />
          <span className="text-sm text-muted">{date}</span>
        </div>
      </div>
    </div>
  )
}

export default InfoCard;
