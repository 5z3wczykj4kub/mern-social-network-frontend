import SearchListItem from './SearchListItem/SearchListItem';

import classes from './SearchList.module.scss';

function SearchList(props) {
  return (
    <ul className={classes.searchList}>
      <SearchListItem name={'John Doe'} isLoading={props.isLoading} />
      <SearchListItem name={'Max Mustermann'} isLoading={props.isLoading} />
      <SearchListItem name={'Jan Kowalski'} isLoading={props.isLoading} />
      <SearchListItem name={'Iwan Pietrowicz'} isLoading={props.isLoading} />
    </ul>
  );
}

export default SearchList;
