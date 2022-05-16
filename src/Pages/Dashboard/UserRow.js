import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
  const { email, role } = user;
  console.log(user);
  const makeAdmin = () => {
    fetch(`https://polar-spire-82017.herokuapp.com/user/admin/${email}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
        .then((res) => {
            if (res.status === 403) {
                toast.error('Failed to make an admin')
            }
            return res.json()
        })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success('Successfully add a admin');
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== 'admin' && (
          <button onClick={makeAdmin} class="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button class="btn btn-xs">Remove User</button>
      </td>
    </tr>
  );
};

export default UserRow;
