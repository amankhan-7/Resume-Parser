import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="loading-spinner-container">
            <div className="loading-spinner"></div>
            <p className="loading-text">Generating...</p>
        </div>
    );
};

export default LoadingSpinner;
