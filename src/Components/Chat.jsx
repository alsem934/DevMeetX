// import React, { useState, useEffect } from 'react';
// import { db, auth } from "../firebaseConfig";
// import { collection, addDoc, onSnapshot, serverTimestamp, query, orderBy } from "firebase/firestore";
// import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// const Chat = () => {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [user, setUser] = useState(null);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const q = query(collection(db, 'messages'), orderBy('timestamp', 'asc'));
//     const unsubscribe = onSnapshot(q, (snapshot) => {
//       setMessages(snapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data(),
//         timestamp: doc.data().timestamp ? doc.data().timestamp.toDate().toLocaleString() : "Just now", // Fallback added
//       })));
//     });
    
//     return () => unsubscribe(); // Cleanup the listener properly
//   }, []);

//   const signInWithEmail = async () => {
//     setError('');
//     try {
//       const result = await signInWithEmailAndPassword(auth, email, password);
//       setUser(result.user);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const registerWithEmail = async () => {
//     try {
//       const result = await createUserWithEmailAndPassword(auth, email, password);
//       await updateProfile(result.user, { displayName: email.split('@')[0] });
//       setUser(auth.currentUser);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const sendMessage = async (e) => {
//     e.preventDefault();
//     if (!newMessage.trim() || !user) return;
//     await addDoc(collection(db, 'messages'), {
//       text: newMessage,
//       timestamp: serverTimestamp(),
//       user: { uid: user.uid, displayName: user.displayName || 'Anonymous' },
//     });
//     setNewMessage('');
//   };

//   return (
//     <div className="flex flex-col h-screen bg-gray-800 text-white">
//       <header className="bg-blue-800 p-4 text-center font-semibold">Community Chat</header>
//       <main className="flex-grow p-6 flex flex-col items-center">
//         {!user ? (
//           <div className="max-w-md w-full bg-gray-700 p-6 rounded-lg">
//             <p className="text-gray-300 mb-4">Register to start chatting.</p>
//             {error && <p className="text-red-400">{error}</p>}
//             <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="mb-2 p-2 w-full bg-gray-600 text-white rounded" />
//             <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="mb-2 p-2 w-full bg-gray-600 text-white rounded" />
            
//             <button onClick={signInWithEmail} className="bg-blue-600 w-full py-2 rounded hover:bg-blue-700 mb-2 flex justify-center items-center">
//               Sign in
//             </button>
//             <button onClick={registerWithEmail} className="bg-green-600 w-full py-2 rounded hover:bg-green-700 flex justify-center items-center">
//               Register
//             </button>
//           </div>
//         ) : (
//           <div className="flex flex-col-reverse overflow-auto max-h-[80vh] w-full">
//             {messages.map(msg => (
//               <div key={msg.id} className="p-3 rounded-lg bg-gray-700 max-w-lg w-full shadow-md">
//                 <p className="text-sm text-blue-400 font-bold">{msg.user?.displayName || 'Anonymous'}</p>
//                 <p className="text-lg">{msg.text}</p>
//                 <p className="text-xs text-gray-400">{msg.timestamp?.toDate()?.toLocaleString()}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </main>
//       {user && (
//         <form onSubmit={sendMessage} className="flex p-4 bg-gray-700 w-full">
//           <input type="text" value={newMessage} onChange={e => setNewMessage(e.target.value)} placeholder="Type a message..." className="w-full p-2 rounded-l-lg bg-gray-600 text-white focus:outline-none" />
//           <button type="submit" className="bg-blue-600 px-6 py-2 rounded-r-lg hover:bg-blue-700">Send</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Chat;
import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const signInWithEmail = () => {
    setUser({ displayName: email.split('@')[0] });
  };

  const registerWithEmail = () => {
    setUser({ displayName: email.split('@')[0] });
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !user) return;
    setMessages([...messages, { text: newMessage, user: user.displayName, timestamp: new Date().toLocaleString() }]);
    setNewMessage('');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-800 text-white">
      <header className="bg-blue-800 p-4 text-center font-semibold">Community Chat</header>
      <main className="flex-grow p-6 flex flex-col items-center">
        {!user ? (
          <div className="max-w-md w-full bg-gray-700 p-6 rounded-lg">
            <p className="text-gray-300 mb-4">Register to start chatting.</p>
            {error && <p className="text-red-400">{error}</p>}
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="mb-2 p-2 w-full bg-gray-600 text-white rounded" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="mb-2 p-2 w-full bg-gray-600 text-white rounded" />
            <button onClick={signInWithEmail} className="bg-blue-600 w-full py-2 rounded hover:bg-blue-700 mb-2">Sign in</button>
            <button onClick={registerWithEmail} className="bg-green-600 w-full py-2 rounded hover:bg-green-700">Register</button>
          </div>
        ) : (
          <div className="flex flex-col-reverse overflow-auto max-h-[80vh] w-full">
            {messages.map((msg, index) => (
              <div key={index} className="p-3 rounded-lg bg-gray-700 max-w-lg w-full shadow-md">
                <p className="text-sm text-blue-400 font-bold">{msg.user}</p>
                <p className="text-lg">{msg.text}</p>
                <p className="text-xs text-gray-400">{msg.timestamp}</p>
              </div>
            ))}
          </div>
        )}
      </main>
      {user && (
        <form onSubmit={sendMessage} className="flex p-4 bg-gray-700 w-full">
          <input type="text" value={newMessage} onChange={e => setNewMessage(e.target.value)} placeholder="Type a message..." className="w-full p-2 rounded-l-lg bg-gray-600 text-white" />
          <button type="submit" className="bg-blue-600 px-6 py-2 rounded-r-lg hover:bg-blue-700">Send</button>
        </form>
      )}
    </div>
  );
};

export default Chat;