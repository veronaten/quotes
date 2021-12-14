import QuoteList from '../components/quotes/QuoteList';

const DUMMY_DATA = [
  {id: 'q1', author: 'Max', text: 'Learning React is super!'},
  {id: 'q2', author: 'Veronika', text: 'Learning Route is super!'}
]

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_DATA}/>
};

export default AllQuotes;