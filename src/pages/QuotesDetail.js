import { useParams } from 'react-router-dom';
import { Route } from 'react-router';
import { Fragment } from 'react/cjs/react.production.min';
import Comments from '../components/comments/Comments';

const QuotesDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Quotes Detail Page</h1>
      <p>{params.quotesId}</p>
      <Route path={`/quotes/${params.quotesId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  
  )
};

export default QuotesDetail;