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
      <img
        src={thumbnails.medium.url}
        alt="thumbnail"
        className={isList ? 'w-60 mr-2' : 'w-full'}
      />
      <section className="channel-info">
        <p className="font-bold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{makeTimeTamplate(publishedAt)}</p>
      </section>
    </li>
  );
}

function makeTimeTamplate(publishedTime) {
  const now = new Date();
  const publishedDate = new Date(publishedTime);
  const diffTime = now.getTime() - publishedDate.getTime();
  const dateDifferent = isDifferentDate(diffTime);
  if (dateDifferent) return dateDifferent;
  const timeDifferent = isDifferentTime(diffTime);
  if (timeDifferent) return timeDifferent;
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
