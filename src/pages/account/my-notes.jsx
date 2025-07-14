import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer.jsx';
import Header from '../../components/header';
import './../../assets/my-notes.css';

function MyNotes() {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
  const [loading, setLoading] = useState(false);

  const authToken = localStorage.getItem('authToken');

  // Fetch notes from backend
  useEffect(() => {
    if (!authToken) {
      navigate('/login');
      return;
    }
    setLoading(true);
    fetch('http://api.neuramedix.co/api/user_notes/', {
      headers: {
        'Authorization': `Bearer ${authToken}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        setNotes(data.notes || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [navigate, authToken]);

  // Add note
  const handleAddNote = () => {
    if (newNote.trim() === '') return;
    fetch('http://api.neuramedix.co/api/user_notes/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      },
      body: JSON.stringify({ title: `Note ${notes.length + 1}`, content: newNote }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.note) {
          setNotes([...notes, data.note]);
          setNewNote('');
        }
      });
  };

  // Delete note
  const handleDeleteNote = (index) => {
    const note = notes[index];
    if (!note) return;
    fetch('http://api.neuramedix.co/api/user_notes/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      },
      body: JSON.stringify({ id: note.id }),
    })
      .then(res => res.json())
      .then(() => {
        const updatedNotes = notes.filter((_, i) => i !== index);
        setNotes(updatedNotes);
        if (selectedNoteIndex === index) setSelectedNoteIndex(null);
      });
  };

  return (
    <div className='my-notes-page'>
      <Header />
      <div className="notes-container">
        <h1>My Notes</h1>

        <div className="notes-layout">
          {/* Left Column: Notes List */}
          <div className="notes-sidebar">
            <div className="add-note-section">
              <textarea
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Write your note here..."
              />
              <button onClick={handleAddNote}>Add Note</button>
            </div>

            {loading ? (
              <p>Loading...</p>
            ) : notes.length === 0 ? (
              <p className="no-notes">No notes yet.</p>
            ) : (
              <ul className="notes-list">
                {notes.map((note, index) => (
                  <li
                    key={note.id}
                    className={selectedNoteIndex === index ? 'selected' : ''}
                    onClick={() => setSelectedNoteIndex(index)}
                  >
                    <span>{note.title || `Note ${index + 1}`}</span>
                    <button className="delete-btn" onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteNote(index);
                    }}>🗑</button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Right Column: Display Selected Note */}
          <div className="note-preview">
            {selectedNoteIndex !== null && notes[selectedNoteIndex] ? (
              <>
                <h2>{notes[selectedNoteIndex].title}</h2>
                <p>{notes[selectedNoteIndex].content}</p>
              </>
            ) : (
              <p className="no-selection">Select a note to view it here.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyNotes;