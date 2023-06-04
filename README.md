# Youtube_clone
Cloning Project of Youtube

## 링크
https://melodious-tapioca-105551.netlify.app

## 사용 방법
youtube-clone 디렉토리에 .env 파일 생성후 다음 코드를 입력
```
REACT_APP_YOUTUBE_API=[YOUR_API_KEY]
```

## 기술 스택

|Types|Techs|
|:-|:-|
|RunTime|<img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white"/>|
|Framework|<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/>|
|Language|<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"/> |
|Style|<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=Tailwind CSS&logoColor=white"/>|
|Formatter & Linter|<img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=ESLint&logoColor=white"/> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=Prettier&logoColor=white"/>|
|Bundler|<img src="https://img.shields.io/badge/Webpack-8DD6F9?style=flat&logo=Webpack&logoColor=white"/>|

## 어려웠던 점
### 첫번째 이슈
- react에서 Public안에 접근하려면 '/'를 앞에 붙여줘야 한다.
ex) '/data/channel/json' o 'data/channel/json' x
### 두번째 이슈
- 메인페이지나 검색 페이지에서 동영상을 클릭했을 때 상세 페이지로 이동한다.
- 상세 페이지에서 Video를 업로드한 채널의 정보를 보여줘야 하는데 이를 위해서는 ChannelID가 필요하다. 하지만 URL에서는 VideoId만 알아낼 수 있다.
- 따라서 메인 페이지나 검색페이지에서 정보를 전달해야하는데 어떻게 전달할지 고민을 했다.

### 첫번째 방법 : 전역적으로 Channel Context를 만들고 Context를 이용해 비디어 정보를 저장 및 조회했다.

ChannelContext.jsx
  ```jsx
  import React, { createContext, useState } from 'react';

  export const ChannelContext = createContext();

  export default function ChannelProvider({ children }) {
    const [channel, setChannel] = useState('');
    return (
      <div>
        <ChannelContext.Provider value={{ channel, setChannel }}>
          {children}
        </ChannelContext.Provider>
      </div>
    );
  }
  ```
  Video.jsx
  ```jsx
  import React, { useContext } from 'react';
  import { Link } from 'react-router-dom';
  import { ChannelContext } from '../context/ChannelContext';

  export default function Video({ video }) {
    const { id, thumbnail, title, channelTitle, time, channelId } = video;
    const { setChannel } = useContext(ChannelContext);
    function handleClick() {
      setChannel(channelId);
    }
    return (
      <div>
        //video click시 channel정보 context에 저장
        <Link to={`/videos/watch/${id}`} onClick={handleClick}>
        ...
      </div>
    );
  }
  ```
  VideoDetail.jsx
  ```jsx
  import React, { useContext } from 'react';
  import { ChannelContext } from '../context/ChannelContext';
  ...

export default function VideoDetail() {
  const { channel } = useContext(ChannelContext);
  const { videoId } = useParams();
  ...
  }
  ```
  ### 개선한 방법: react-router의 navigate의 두번째 인자로 정보를 전달할 수 있다는 것을 찾아서 리팩토링했다
  
  Video.jsx에서 video 정보 send
   ```jsx
  import React from 'react';
  import { useNavigate } from 'react-router-dom';

  export default function Video({ video, type }) {
    const { thumbnails, title, channelTitle, publishedAt } = video.snippet;
    const navigate = useNavigate();
    const isList = type === 'list';
    return (
      <li
        className={isList ? 'flex gap-1 m-2' : ''}
        onClick={() =>
          navigate(`/videos/watch/${video.id}`, { state: { video } })
        }>
        ...
      </li>
    );
  }
  ```
  Watch.jsx에서 useLocation을 이용해 receive
  ```jsx
  ...
  import { useLocation } from 'react-router-dom';

  export default function Watch() {
    const {
      state: { video },
    } = useLocation();
    ...
  }
  ```

  ## 목표 개선사항
  1. fetch를 이용해 통신했는데 axios를 이용해서 통신하도록 하기
  2. api통신하는 부분을 함수로 분리하긴 했지만 깔끔하게 Youtube 클래스로 만들기
  3. mockdata를 사용하는 fakeClient와 유튜브와 실제로 통신하는 YoutubeClient를 주입빋아 사용하도록 DI와 Ioc 도입

