import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";

const MyProfile = () => {
  const { updateUser, user, setUser } = useContext(AuthContext);

  const { displayName, email, photoURL } = user;

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    // Update User
    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        form.reset();
      })
      .catch();
  };

  return (
    <div className="max-w-[1200px] mx-auto mt-10">
      {/* My Profile */}
      <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-xl border-slate-100 border">
        <div className="card-body">
          <h2 className="text-center">My Profile</h2>
          <hr className="border-base-300 my-3" />
          {/* Profile Image */}
          <div className="text-center border border-slate-200 py-4 mb-4 rounded-sm">
            <div className="avatar mb-6">
              <div className="ring-primary ring-offset-base-100 w-30 rounded-full ring-2 ring-offset-2">
                <img src={photoURL} />
              </div>
            </div>
            <h4>{displayName}</h4>
            <p>{email}</p>
          </div>

          {/* Profile Name and Photo Update form */}
          <h4>Update Your Profile</h4>
          <form onSubmit={handleUpdateProfile} className="fieldset">
            {/* Name */}
            <label className="label">Update Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Enter new name"
              required
            />
            {/* Photo */}
            <label className="label">Update Photo</label>
            <input
              type="text"
              name="photo"
              className="input w-full"
              placeholder="Enter new photo url"
              required
            />
            <button type="submit" className="btn btn-primary mt-4 text-white">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
