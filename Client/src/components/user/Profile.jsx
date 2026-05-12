import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import { FiUser, FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const Profile = () => {
  const { user, userAddress } = useContext(AppContext);

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      
      {/* HEADER */}
      <div className="mb-12">
        <h1 className="text-3xl font-medium mb-2">
          My profile
        </h1>
        <p className="text-text-muted">
          Manage your personal information and address
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        
        {/* USER INFO */}
        <div className="bg-white border border-border-soft rounded-2xl p-8">
          <h2 className="text-lg font-medium mb-6 flex items-center gap-2">
            <FiUser size={18} />
            Account details
          </h2>

          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <FiUser className="text-text-muted" />
              <span>{user?.name}</span>
            </li>

            <li className="flex items-center gap-3">
              <FiMail className="text-text-muted" />
              <span>{user?.email}</span>
            </li>

            <li className="flex items-center gap-3">
              <FiPhone className="text-text-muted" />
              <span>{user?.phone || "Not provided"}</span>
            </li>
          </ul>
        </div>

        {/* ADDRESS INFO */}
        <div className="bg-white border border-border-soft rounded-2xl p-8">
          <h2 className="text-lg font-medium mb-6 flex items-center gap-2">
            <FiMapPin size={18} />
            Shipping address
          </h2>

          {userAddress ? (
            <ul className="space-y-3 text-sm text-text-muted">
              <li>{userAddress.fullName}</li>
              <li>{userAddress.phoneNumber}</li>
              <li>
                {userAddress.city}, {userAddress.state}
              </li>
              <li>
                {userAddress.country} – {userAddress.pincode}
              </li>
              <li>{userAddress.address}</li>
            </ul>
          ) : (
            <p className="text-sm text-text-muted">
              No address saved yet
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Profile;
