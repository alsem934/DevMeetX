import React, { useState, useEffect } from 'react';
import { db } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from "firebase/firestore";

const LiveUpdates = () => {
  const [updates, setUpdates] = useState([]);
  const [newUpdate, setNewUpdate] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'updates'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, snapshot => {
      setUpdates(snapshot.docs.map(doc => ({
        id: doc.id,
        text: doc.data().text,
        timestamp: doc.data().timestamp?.toDate().toLocaleString(),
      })));
    });
    return unsubscribe;
  }, []);

  const addUpdate = async () => {
    if (!newUpdate.trim()) return;
    await addDoc(collection(db, 'updates'), {
      text: newUpdate,
      timestamp: serverTimestamp(),
    });
    setNewUpdate('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Live Updates</h2>

      {/* Input and Button */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 mb-4 max-w-xl mx-auto">
        <input 
          type="text" 
          value={newUpdate} 
          onChange={e => setNewUpdate(e.target.value)} 
          placeholder="Enter new update..." 
          className="border p-3 w-full md:w-2/3 rounded-lg text-lg"
        />
        <button 
          onClick={addUpdate} 
          className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 text-lg w-full md:w-auto"
        >
          Post
        </button>
      </div>

      {/* Updates List */}
      <div className="bg-white shadow-lg rounded-lg p-4 max-w-xl mx-auto max-h-[500px] overflow-y-auto">
        {updates.length === 0 ? (
          <p className="text-gray-500 text-center">No updates available.</p>
        ) : (
          updates.map(update => (
            <div key={update.id} className="mb-4 p-3 border-b border-gray-200">
              <p className="text-gray-700 text-lg">{update.text}</p>
              <p className="text-sm text-gray-500">{update.timestamp}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LiveUpdates;
