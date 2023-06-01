import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { VideoContext } from '../context/VideoContext';

export default function Video({ video }) {
  const { id, thumbnail, title, channelTitle, time, channelId } = video;
  const { setVideoInfo } = useContext(VideoContext);

  function handleClick() {
    setVideoInfo({ title, channelId });
  }

  makeTimeTamplate(time);

  return (
    <div className="w-full">
      <Link to={`/videos/watch/${id}`} onClick={handleClick}>
        <img src={thumbnail} alt="thumbnail" className="w-full" />
      </Link>
      <section className="channel-info">
        <p className="font-bold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{makeTimeTamplate(time)}</p>
      </section>
    </div>
  );
}

function makeTimeTamplate(publishedTime) {
  const now = new Date();
  const publishedDate = new Date(publishedTime);
  const diffTime = now.getTime() - publishedDate.getTime();
  const dateDifferent = isDifferentDate(diffTime);
  if (dateDifferent) {
    console.log(dateDifferent);
    return dateDifferent;
  }
  const timeDifferent = isDifferentTime(diffTime);
  if (timeDifferent) {
    console.log(timeDifferent);
    return timeDifferent;
  }
  return '방금전';
}

function isDifferentDate(diffTime) {
  const diffYear = parseInt(diffTime / (1000 * 60 * 60 * 24 * 30 * 12));
  const diffMonth = parseInt(diffTime / (1000 * 60 * 60 * 24 * 30));
  const diffDay = parseInt(diffTime / (1000 * 60 * 60 * 24));

  if (diffYear) return `${diffYear}년 전`;
  if (diffMonth) return `${diffMonth}개월 전`;
  if (diffDay) return `${diffDay}일 전`;
  return null;
}

function isDifferentTime(diffTime) {
  const diffHour = parseInt(diffTime / (1000 * 60 * 60));
  const diffMinuite = parseInt(diffTime / (1000 * 60));
  const diffSecond = parseInt(diffTime / 1000);

  if (diffHour) return `${diffHour}시간 전`;
  if (diffMinuite) return `${diffMinuite}분 전`;
  if (diffSecond) return `${diffSecond}초 전`;
  return null;
}
