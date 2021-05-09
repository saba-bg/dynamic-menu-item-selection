import React, {useState, useEffect} from 'react';
import './App.scss';

function App() {
  const [idd, setIdd] = useState(10);
  const [state, setState] = useState(idd - 10);
  const [end, setEnd] = useState(0);
  const [btn, setBtn] = useState(false);
  const NumberDescriber = [];
  for (let index = 0; index < 3; index++) {
    NumberDescriber.push(<div key={index} className="ProjectInfo__dot"></div>);
  }
  return (
    <div className="StatisticInfo" style={{position: 'relative'}}>
      {btn && (
        <div className="ProjectInfo__DotBox">
          {ProjectInfoinfo.slice(10, ProjectInfoinfo.length).map(
            (index, ittem, arr) => (
              <ul>
                <li
                  onClick={() => {
                    setIdd(10 + ittem + 1);
                    setEnd(ittem + 1);
                  }}
                >
                  {index.title}
                </li>
              </ul>
            )
          )}
        </div>
      )}
      <div className="StatisticInfo__panel">
        <div className="StatisticInfo__title ">
          <p>مدیریت پروژه</p>
        </div>

        <div className="StatisticInfo__inside">
          <div className="StatisticInfo__ContentHead">
            {ProjectInfoinfo.slice(idd - 10, 10 + end).map((item, id) => (
              <div
                className={
                  state === id
                    ? 'StatisticInfo__head StatisticInfo__headblue'
                    : 'StatisticInfo__head'
                }
                onClick={() => setState(id)}
                key={id}
              >
                <p>{item.title}</p>
              </div>
            ))}
            <div className="ProjectInfo" onClick={() => setBtn(!btn)}>
              {NumberDescriber}
            </div>
          </div>

          {/* {state +end === 0} */}
        </div>
      </div>
    </div>
  );
}

export default App;
const ProjectInfoinfo = [
  {
    title: 'اطلاعات آماری',
    cou: 0,
  },
  {
    title: 'اطلاعات کلی',
    cou: 1,
  },
  {
    title: 'مراحل پروژه',
    cou: 2,
  },
  {
    title: 'قوانین',
    cou: 3,
  },
  {
    title: 'کاربران',
    cou: 4,
  },
  {
    title: 'ارسال ها',
    cou: 5,
  },
  {
    title: 'آزمونک',
    cou: 6,
  },
  {
    title: 'تیم ها',
    cou: 7,
  },
  {
    title: 'منابع آموزشی',
    cou: 8,
  },
  {
    title: 'تکالیف ',
    cou: 9,
  },
  {
    title: 'تخصص ',
    cou: 10,
  },
  {
    title: '1 ',
    cou: 11,
  },
  {
    title: '2 ',
    cou: 12,
  },
  {
    title: '3 ',
    cou: 13,
  },
  {
    title: '4 ',
    cou: 14,
  },
  {
    title: '5 ',
    cou: 15,
  },
];
