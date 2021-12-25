import { FC } from 'react';
import InfoCard from './InfoCard/InfoCard';
import DashboardStyles from '../../Dashboard.module.scss';
import img from '../../../../images/image-1.png';
import { info } from '../../../../types/types';
import useWindowDimensions from './../../../../hooks/useWindowDimensions';
import breakpoints from './../../../../breakpoints/breakpoints';

interface InfoCardsProps {
  info: info[]
}

const InfoCards: FC<InfoCardsProps> = ({ info }) => {
  const { width } = useWindowDimensions();
  return (
    <div className={`${DashboardStyles.info} gap-0-75`}>
      <div className={`${DashboardStyles.infoItem} shadow-sm w-100 bg-light round-sm text-dark
        flex justify-space-between ${width >= breakpoints['xs'] ? 'p-1-25' : 'p-0-85'}`}>
        <div className="h-100 flex row-gap-0-45 justify-flex-start align-flex-start">
          <p className="flex align-flex-start font-xl weight-500">Welcome Back, Shaun!</p>
        </div>
        <div className="flex justify-flex-end align-flex-end h-100">
          <img src={img} alt="..." className="w-100" />
        </div>
      </div>
      {
        info.map((i, index) => (
          <InfoCard
            key={`ic-${index}`}
            info={i}
          />
        ))
      }
    </div>
  )
}

export default InfoCards;