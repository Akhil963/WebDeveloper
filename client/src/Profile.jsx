import { useEffect, useState } from "react";
import axios from "axios";
import StoreNavbar from "./components/StoreNavbar";

const tabs = ["Overview", "Purchases", "Settings"];

function Profile() {
  const userId = localStorage.getItem("userId");
  const [activeTab, setActiveTab] = useState("Overview");
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/profile/${userId}`)
      .then(res => setUser(res.data));
  }, [userId]);

  if (!user) return <p className="pt-32 text-center">Loading...</p>;

  return (
    <>
      <StoreNavbar userName={user.name} />

      <div className="pt-32 max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex items-center gap-6 mb-10">
          <div className="w-20 h-20 rounded-full bg-indigo-600 text-white
          flex items-center justify-center text-3xl font-bold">
            {user.name[0]}
          </div>
          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-slate-500">{user.email}</p>
          </div>
        </div>

        {/* TABS */}
        <div className="flex gap-6 border-b mb-8">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 font-semibold ${
                activeTab === tab
                  ? "border-b-2 border-indigo-600 text-indigo-600"
                  : "text-slate-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* TAB CONTENT */}
        {activeTab === "Overview" && (
          <div className="grid grid-cols-2 gap-6">
            <Card title="Wallet Balance" value={`₹${user.wallet.balance}`} />
            <Card title="Total Purchases" value={user.purchases.length} />
          </div>
        )}

        {activeTab === "Purchases" && (
          <div className="grid md:grid-cols-2 gap-6">
            {user.purchases.map(p => (
              <div key={p._id} className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-bold">{p.itemId.title}</h3>
                <p>Progress: {p.progress}%</p>
                <div className="w-full bg-gray-200 h-2 rounded mt-2">
                  <div
                    className="bg-indigo-600 h-2 rounded"
                    style={{ width: `${p.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Settings" && (
          <Settings user={user} />
        )}
      </div>
    </>
  );
}

const Card = ({ title, value }) => (
  <div className="bg-white rounded-xl shadow p-6">
    <p className="text-slate-500">{title}</p>
    <h3 className="text-2xl font-bold">{value}</h3>
  </div>
);

const Settings = ({ user }) => {
  const [name, setName] = useState(user.name);

  const updateProfile = async () => {
    await axios.put(`http://localhost:3001/profile/${user._id}`, { name });
    alert("Profile updated");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow max-w-md">
      <h3 className="font-bold mb-4">Edit Profile</h3>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-2 rounded mb-4"
      />

      <button
        onClick={updateProfile}
        className="px-4 py-2 bg-indigo-600 text-white rounded"
      >
        Save
      </button>
    </div>
  );
};

export default Profile;
