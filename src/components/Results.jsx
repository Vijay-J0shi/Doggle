import React, { useEffect } from 'react';
import { useStateContext } from '../contexts/StateContextProvider';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Loading } from './Loading';
export const Results = () => {
  const { getResults, results, searchTerm, loading } = useStateContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === '/images') {
        getResults({ tbm: 'isch' });
      } else if (location.pathname === '/news') {
        getResults({ tbm: 'nws' });
      } else if (location.pathname === '/videos') {
        getResults({ tbm: 'vid' });
      } else {
        getResults({});
      }
    }
  }, [searchTerm, location.pathname]);

  if (loading) return <Loading/>;

  switch (location.pathname) {
    case '/search':
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.organic_results?.map(({ link, title }, index) => (
            <div key={index} className="w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-lg hover:underline text-blue-700">{title}</p>
                <p className="text-sm text-gray-600">{link}</p>
              </a>
            </div>
          ))}
        </div>
      );

    case '/images':
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.images_results?.map(({ thumbnail, link, title }, index) => (
            <a key={index} href={link} target="_blank" rel="noreferrer" className="p-2">
              <img src={thumbnail} alt={title} className="w-48 h-48 object-cover" />
              <p className="w-48 text-sm truncate text-center">{title}</p>
            </a>
          ))}
        </div>
      );

    case '/news':
      return (
        <div className="flex flex-col space-y-6 sm:px-56">
          {results?.news_results?.map(({ link, title, source }, index) => (
            <div key={index}>
              <a href={link} target="_blank" rel="noreferrer" className="block">
                <p className="text-lg hover:underline text-blue-700">{title}</p>
                <p className="text-sm text-gray-600">{source?.title}</p>
              </a>
            </div>
          ))}
        </div>
      );

    case '/videos':
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.video_results?.map(({ link, title }, index) => (
            <div key={index} className="p-4">
              <ReactPlayer url={link} controls width="355px" height="200px" />
              <p className="w-80 text-md mt-2">{title}</p>
            </div>
          ))}
        </div>
      );

    default:
      return <div className="text-center mt-10">No route matched</div>;
  }
};

