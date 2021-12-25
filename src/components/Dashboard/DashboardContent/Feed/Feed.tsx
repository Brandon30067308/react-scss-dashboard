import { FC } from 'react';
import DashboardStyles from '../../Dashboard.module.scss';
import userImg1 from '../../../../images/user-img-1.jpg';
import userImg2 from '../../../../images/user-img-2.jpg';
import userImg3 from '../../../../images/user-img-3.jpg';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import breakpoints from '../../../../breakpoints/breakpoints';

const Feed: FC = () => {
  const { width } = useWindowDimensions();

  return (
    <div className={`${DashboardStyles.feed} bg-light mt-1-5 ml-1 shadow-sm round-sm flex flex-column
      row-gap-1-25 justify-flex-start ${width >= breakpoints['xs'] ? 'p-1-15' : 'p-0-65'}`}>
      <header className="flex w-100 justify-space-between">
        <h3 className="font-xl weight-500 text-muted">Daily Feed</h3>
        <div className="round-sm p-0-5 font-sm bg-primary text-light">Today</div>
      </header>
      {/* feeds container */}
      <div className="flex flex-column align-flex-start">

        {/* feed container */}
        <div className="w-100 flex justify-space-between align-flex-start justify-flex-start column-gap-0-25">

          {/* left side  */}
          <div className="flex column-gap-0-65 align-flex-start justify-flex-start" style={{ flex: '.85' }}>
            <img
              src={userImg3}
              alt="profile"
              className={`${DashboardStyles.feedImg} round-full`}
            />
            <div className="flex flex-column row-gap-0-5 align-flex-start">
              <span className="text-md">
                <span className="weight-500">Meghan Lowe</span> started following <span
                  className="weight-500">Ashley Brigg</span>.
              </span>
              <span className="text-muted text-sm">Today 9:05 am</span>
            </div>
          </div>

          {/* right side */}
          <div style={{ flex: '.15', textAlign: 'right' }}>
            <span className="text-muted font-sm">23m ago</span>
          </div>

        </div>

        <hr />

        {/* feed container */}
        <div className="w-100 flex justify-space-between align-flex-start column-gap-0-25">

          {/* left side  */}
          <div className="flex column-gap-0-65 align-flex-start" style={{ flex: '.85' }}>
            <img
              src={userImg1}
              alt="profile"
              className={`${DashboardStyles.feedImg} round-full`}
            />
            <div className="flex flex-column row-gap-0-5 align-flex-start">
              <span className="text-md">
                <span className="weight-500">Shaun Philips </span>posted something on <span
                  className="weight-500">Ashley Finch's </span> timeline.
              </span>
              <span className="text-muted text-sm">Today 14:03 pm</span>
              {/* comment posted */}
              <div className={`${DashboardStyles.feedComment} font-sm text-muted p-0-65`}>
                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing...
              </div>
            </div>
          </div>

          {/* right side */}
          <div style={{ flex: '.15', textAlign: 'right' }}>
            <span className="text-muted font-sm">34m ago</span>
          </div>

        </div>

        <hr />

        {/* feed container */}
        <div className="w-100 flex justify-space-between align-flex-start column-gap-0-25">

          {/* left side  */}
          <div className="flex column-gap-0-65 align-flex-start justify-flex-start" style={{ flex: '.85' }}>
            <img
              src={userImg2}
              alt="profile"
              className={`${DashboardStyles.feedImg} round-full`}
            />
            <div className="flex flex-column row-gap-0-5 align-flex-start">
              <span className="text-md">
                <span className="weight-500">Ashley Finch</span> posted a new blog.
              </span>
              <span className="text-muted text-sm">Today 16:28 pm</span>
            </div>
          </div>

          {/* right side */}
          <div style={{ flex: '.15', textAlign: 'right' }}>
            <span className="text-muted font-sm">54m ago</span>
          </div>

        </div>

        <hr />

        <button className={`${DashboardStyles.feedBtn} text-light w-100 bg-primary round-sm py-0-65 
          font-md pointer`}>Load more...</button>
      </div>
    </div>
  )
}

export default Feed;