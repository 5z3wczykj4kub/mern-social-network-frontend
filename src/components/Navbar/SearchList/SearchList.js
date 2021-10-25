import { useSelector } from 'react-redux';

import SearchListItem from './SearchListItem/SearchListItem';

import classes from './SearchList.module.scss';

function SearchList() {
  const { isSearchListEmpty, isLoading, searchedUsers } = useSelector(
    ({ navbar }) => navbar
  );

  const skeletonUsersList = (
    <>
      <SearchListItem isLoading={isLoading} />
      <SearchListItem isLoading={isLoading} />
      <SearchListItem isLoading={isLoading} />
      <SearchListItem isLoading={isLoading} />
      <SearchListItem isLoading={isLoading} />
    </>
  );
  const usersList = searchedUsers.map((user) => (
    <SearchListItem
      key={user.id}
      firstName={user.firstName}
      lastName={user.lastName}
      avatarImageUrl={user.avatarImageUrl}
    />
  ));

  return (
    <ul className={classes.searchList}>
      {isLoading && skeletonUsersList}
      {!isLoading && searchedUsers.length > 0 && usersList}
      {!isLoading && !isSearchListEmpty && searchedUsers.length === 0 && (
        <li>
          <p>No users found</p>
        </li>
      )}
    </ul>
  );
}

export default SearchList;
