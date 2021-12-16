import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import { Fragment } from 'react';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_DATA = [
  {id: 'q1', author: 'Max', text: 'Learning React is super!'},
  {id: 'q2', author: 'Veronika', text: 'Learning Route is super!'}
];

const QuotesDetail = () => {
  const params = useParams();
  const match = useRouteMatch();
  console.log(match);

  const quote = DUMMY_DATA.find(quote => quote.id === params.quotesId);

  if (!quote) {
    return <p>No quote yet!</p>
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author}/>
      <Route path={match.path} exact>
      <div className='centered'>
        <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
      </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  
  )
};

export default QuotesDetail;