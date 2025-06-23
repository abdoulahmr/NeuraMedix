import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../../assets/cell_count.css';
import Header from '../../components/header';
import Footer from '../../components/footer.jsx';

function CellCounter() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [cellCount, setCellCount] = useState(null);
    const [processedImage, setProcessedImage] = useState(null);
    const [originalFilename, setOriginalFilename] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem('authToken');

    const navigate = useNavigate();

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setError('');
        setProcessedImage(null);
        setCellCount(null);
        setOriginalFilename('');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!selectedFile) {
            setError('Please select an image file to upload.');
            return;
        }

        setError('');
        setCellCount(null);
        setProcessedImage(null);
        setOriginalFilename('');
        setLoading(true);

        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
            const response = await fetch('http://127.0.0.1:8000/api/cell_detection/', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                setCellCount(data.cell_count);
                setProcessedImage(data.processed_image || null);
                setOriginalFilename(data.original_filename || selectedFile.name);
            } else {
                setError(data.error || 'Failed to analyze image. Please try again.');
                console.error('API Error:', data);
            }
        } catch (err) {
            console.error('Network or unexpected error:', err);
            setError('An unexpected error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Header />
            <div className="container">
                <h1>Cell Detection & Counting</h1>

                {error && <p className="error">{error}</p>}

                <form onSubmit={handleSubmit} className="upload-form">
                    <label htmlFor="file">Choose image to upload:</label>
                    <input
                        type="file"
                        name="file"
                        id="file"
                        accept="image/png, image/jpeg, image/gif"
                        onChange={handleFileChange}
                        required
                    />
                    <br />
                    <button type="submit" disabled={loading || !selectedFile} className="analyze-button">
                        {loading ? 'Analyzing...' : 'Analyze Image'}
                    </button>
                </form>

                {cellCount !== null && (
                    <div className="results-section">
                        <h2>
                            Detection Results
                            {originalFilename && ` for "${originalFilename}"`}
                        </h2>
                        <p><strong>Detected Cells:</strong> {cellCount}</p>

                        {processedImage ? (
                            <>
                                <h3>Processed Image with Detections:</h3>
                                <p>Green boxes indicate detected cells with a score higher than 0.5.</p>
                                <img
                                    src={`data:image/png;base64,${processedImage}`}
                                    alt="Detected Cells"
                                    className="mask-image"
                                />
                            </>
                        ) : (
                            <p className="error-message">Processed image could not be generated.</p>
                        )}
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}

export default CellCounter;
