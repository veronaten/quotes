import { useParams } from 'react-router-dom';
import { Route } from 'react-router';
import { Fragment } from 'react/cjs/react.production.min';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_DATA = [
  {id: 'q1', author: 'Max', text: 'Learning React is super!'},
  {id: 'q2', author: 'Veronika', text: 'Learning Route is super!'}
];

const QuotesDetail = () => {
  const params = useParams();

  const quote = DUMMY_DATA.find(quote => quote.id === params.quotesId);

  if (!quote) {
    return <p>No quote yet!</p>
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author}/>
      <Route path={`/quotes/${params.quotesId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  
  )
};

export default QuotesDetail;