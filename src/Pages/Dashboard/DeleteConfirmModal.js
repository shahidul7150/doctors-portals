import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingDoctor,refetch, setDeletingDoctor }) => {
    const { name,email } = deletingDoctor;
    
    const handleDelete = () => {
        fetch(`https://polar-spire-82017.herokuapp.com/doctor/${email}`, {
          method: 'DELETE',
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
    
            if (data.deletedCount) {
                toast.success(`Doctor ${name} is remove`);
                setDeletingDoctor(null)
              refetch();
            }
          });
      };
  return (
    <div>
      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">
            Are you sure you want to delete {name}!
          </h3>
          <p class="py-4">
            Once delete never seen without again add a doctor!!
          </p>
          <div class="modal-action">
            <button
              onClick={() => handleDelete()}
              class="btn btn-xs btn-error text-white"
            >
              Delete
            </button>

            <label for="delete-confirm-modal" class="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
