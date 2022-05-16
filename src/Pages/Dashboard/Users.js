import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
  const { data: users, isLoading,refetch } = useQuery('users', () =>
      fetch('https://polar-spire-82017.herokuapp.com/user', {
          method: 'GET',
          headers: {
              authorization:`Bearer ${localStorage.getItem('accessToken')}`
          }
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-2xl">All Users: {users.length}</h2>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>User Email</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
                      {
                          users.map((user,index) => <UserRow
                              key={user._id}
                              user={user}
                              index={index}
                              refetch={refetch}
                          ></UserRow>)
           }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
