import SearchListItem from './SearchListItem/SearchListItem';

import classes from './SearchList.module.scss';

function SearchList(props) {
  const skeletonUsersList = (
    <>
      <SearchListItem isLoading={props.isLoading} />
      <SearchListItem isLoading={props.isLoading} />
      <SearchListItem isLoading={props.isLoading} />
      <SearchListItem isLoading={props.isLoading} />
    </>
  );
  const usersList = props.users.map((user) => (
    <SearchListItem key={user.id} name={`${user.firstName} ${user.lastName}`} />
  ));

  return (
    <ul className={classes.searchList}>
      {props.isLoading && skeletonUsersList}
      {!props.isLoading && props.users.length > 0 && usersList}
      {!props.isLoading && !props.isSearchEmpty && props.users.length === 0 && (
        <li>
          <p>No users found</p>
        </li>
      )}
    </ul>
  );
}

export default SearchList;
