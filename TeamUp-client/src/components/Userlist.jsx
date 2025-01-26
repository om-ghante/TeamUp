import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Userlist = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [skillsFilter, setSkillsFilter] = useState('');
  const [languagesFilter, setLanguagesFilter] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  const loggedInUserId = localStorage.getItem('userId');  

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_API}/userlist-api/userlist`);
        
        const usersWithoutLoggedInUser = response.data.filter(user => user._id !== loggedInUserId);
        
        setUsers(usersWithoutLoggedInUser);
        setFilteredUsers(usersWithoutLoggedInUser);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, [loggedInUserId]);

  useEffect(() => {
    const filtered = users.filter(user => {
      const skillMatch = user.skills.some(skill => skill.toLowerCase().includes(skillsFilter.toLowerCase()));
      const languageMatch = user.languages.some(language => language.toLowerCase().includes(languagesFilter.toLowerCase()));
      return skillMatch && languageMatch;
    });
    setFilteredUsers(filtered);
  }, [skillsFilter, languagesFilter, users]);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleMessageClick = (user) => {
    console.log("Messaging user:", user);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Users List</h1>

      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Filter by Skills"
          className="p-2 border border-gray-300 rounded"
          value={skillsFilter}
          onChange={(e) => setSkillsFilter(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by Languages"
          className="p-2 border border-gray-300 rounded"
          value={languagesFilter}
          onChange={(e) => setLanguagesFilter(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map((user) => (
          <div
            key={user._id}
            className="bg-white p-6 rounded-lg shadow-md cursor-pointer flex justify-between"
            onClick={() => handleUserClick(user)}
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{user.fullName}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
            <button
                className="bg-blue-500 text-white p-2 rounded"
                onClick={() => handleMessageClick(selectedUser)}
              >
                Message
              </button>
          </div>
        ))}
      </div>

      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-2xl font-semibold">{selectedUser.fullName}</h2>
            <p className="text-gray-600">Email: {selectedUser.email}</p>
            <p className="text-gray-600 mt-2">Skills: {selectedUser.skills.join(", ")}</p>
            <p className="text-gray-600">Languages: {selectedUser.languages.join(", ")}</p>
            <div className="mt-6 flex justify-between">
              <button
                className="bg-blue-500 text-white p-2 rounded"
                onClick={() => handleMessageClick(selectedUser)}
              >
                Message
              </button>
              <button
                className="bg-gray-300 p-2 rounded"
                onClick={() => setSelectedUser(null)}   
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Userlist;
