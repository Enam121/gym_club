import React from 'react';
import './SectionTitle.css'

const SectionTitle = ({ title }) => {
    return (
        <>
            <div className="py-3 ">
                <h1 className="SectionTitle">{title}</h1>
                <div className="underline mx-auto"></div>
            </div>
        </>
    );
};

export default SectionTitle;