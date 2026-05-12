import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Address = () => {
  const { shippingAddress, userAddress } = useContext(AppContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    phoneNumber: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { fullName, address, city, state, country, pincode, phoneNumber } =
    formData;

  const submitHandler = async (e) => {
    e.preventDefault();

    const result = await shippingAddress(
      fullName,
      address,
      city,
      state,
      country,
      pincode,
      phoneNumber
    );

    console.log(result);

    if (result.success) {
      navigate("/checkout");
    }

    setFormData({
      fullName: "",
      address: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
      phoneNumber: "",
    });
  };

  return (
    <>
      <section className="max-w-4xl mx-auto px-6 py-20">
  <div className="bg-white border border-border-soft rounded-2xl p-10">
    
    <h1 className="text-2xl font-medium mb-2">
      Shipping address
    </h1>
    <p className="text-sm text-text-muted mb-10">
      Please enter the address where you’d like your order delivered
    </p>

    <form onSubmit={submitHandler} className="grid md:grid-cols-2 gap-6">
      
      {/* FULL NAME */}
      <div>
        <label className="block text-sm text-text-muted mb-1">
          Full name
        </label>
        <input
          name="fullName"
          value={formData.fullName}
          onChange={onChangeHandler}
          type="text"
          className="w-full rounded-xl border border-border-soft px-4 py-3 text-sm focus:outline-none focus:border-accent"
        />
      </div>

      {/* PHONE */}
      <div>
        <label className="block text-sm text-text-muted mb-1">
          Phone number
        </label>
        <input
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={onChangeHandler}
          type="number"
          className="w-full rounded-xl border border-border-soft px-4 py-3 text-sm focus:outline-none focus:border-accent"
        />
      </div>

      {/* COUNTRY */}
      <div>
        <label className="block text-sm text-text-muted mb-1">
          Country
        </label>
        <input
          name="country"
          value={formData.country}
          onChange={onChangeHandler}
          type="text"
          className="w-full rounded-xl border border-border-soft px-4 py-3 text-sm focus:outline-none focus:border-accent"
        />
      </div>

      {/* STATE */}
      <div>
        <label className="block text-sm text-text-muted mb-1">
          State
        </label>
        <input
          name="state"
          value={formData.state}
          onChange={onChangeHandler}
          type="text"
          className="w-full rounded-xl border border-border-soft px-4 py-3 text-sm focus:outline-none focus:border-accent"
        />
      </div>

      {/* CITY */}
      <div>
        <label className="block text-sm text-text-muted mb-1">
          City
        </label>
        <input
          name="city"
          value={formData.city}
          onChange={onChangeHandler}
          type="text"
          className="w-full rounded-xl border border-border-soft px-4 py-3 text-sm focus:outline-none focus:border-accent"
        />
      </div>

      {/* PINCODE */}
      <div>
        <label className="block text-sm text-text-muted mb-1">
          Pincode
        </label>
        <input
          name="pincode"
          value={formData.pincode}
          onChange={onChangeHandler}
          type="number"
          className="w-full rounded-xl border border-border-soft px-4 py-3 text-sm focus:outline-none focus:border-accent"
        />
      </div>

      {/* ADDRESS */}
      <div className="md:col-span-2">
        <label className="block text-sm text-text-muted mb-1">
          Address (nearby landmark)
        </label>
        <textarea
          name="address"
          value={formData.address}
          onChange={onChangeHandler}
          rows={3}
          className="w-full rounded-xl border border-border-soft px-4 py-3 text-sm focus:outline-none focus:border-accent resize-none"
        />
      </div>

      {/* SUBMIT */}
      <div className="md:col-span-2 mt-6 flex flex-col sm:flex-row gap-4">
        <button
          type="submit"
          className="bg-accent hover:bg-accent-hover text-white px-10 py-3 rounded-full text-sm transition"
        >
          Save & continue
        </button>

        {userAddress && (
          <button
            type="button"
            onClick={() => navigate("/checkout")}
            className="border border-border-soft px-10 py-3 rounded-full text-sm hover:border-accent transition"
          >
            Use saved address
          </button>
        )}
      </div>
    </form>
  </div>
</section>

    </>
  );
};

export default Address;
