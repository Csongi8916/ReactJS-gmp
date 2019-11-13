import React from 'react';
import MovieResultHeader from './MovieResultHeader/MovieResultHeader'

import classes from './MovieResult.scss';

export default function MovieResult() {
  return (
    <div className="MovieResult" style={{ minHeight: '65vh' }}>
      <MovieResultHeader needTotal={true} needGengre={false} needSortToogle={true} />
    </div>
  )
}
