import { useSelector } from 'react-redux';

import SearchListItem from './SearchListItem/SearchListItem';

import classes from './SearchList.module.scss';

function SearchList() {
  const { isSearchEmpty, isSearchUsed, searchedUsers } = useSelector(
    ({ navbar }) => navbar
  );

  const skeletonUsersList = (
    <>
      <SearchListItem />
      <SearchListItem />
      <SearchListItem />
      <SearchListItem />
    </>
  );
  const usersList = searchedUsers.map((user) => (
    <SearchListItem key={user.id}>
      {`${user.firstName} ${user.lastName}`}
    </SearchListItem>
  ));

  return (
    <ul className={classes.searchList}>
      {isSearchUsed && skeletonUsersList}
      {!isSearchUsed && searchedUsers.length > 0 && usersList}
      {!isSearchUsed && !isSearchEmpty && searchedUsers.length === 0 && (
        <li>
          <p>No users found</p>
        </li>
      )}
    </ul>
  );
}

export default SearchList;
