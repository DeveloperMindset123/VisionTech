import React from 'react';

const Buttons: React.FC = () => {
    const handleButtonClick = (label: string) => {
        alert(`You clicked: ${label}`);
    };

    return (
        <div style={styles.container}>
            <h1>Select Options</h1>
            <div style={styles.buttonContainer}>
                {["Features Available", "Age", "Occupation", "Experience Level", "Gender", "Salary", "Phone Number", "State"].map((label) => (
                    <button
                        key={label}
                        style={styles.button}
                        onClick={() => handleButtonClick(label)}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        border: '1px solid #007BFF',
        borderRadius: '5px',
        backgroundColor: '#007BFF',
        color: '#fff',
        transition: 'background-color 0.3s',
    }
};

export default Buttons;
