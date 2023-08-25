import React from 'react';
import './featureItem.css';

function FeatureItem({img, title, text}) {
  return (
    <div className="feature-item">
          <img
            src={img}
            alt="featureItemImg"
            className="feature-icon"
          />
          <h3 className="feature-item-title">{title}</h3>
          <p>
            {text}
          </p>
        </div>
  )
}

export default FeatureItem