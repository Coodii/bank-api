import React from 'react';
import './featureItem.css';

function FeatureItem({img, title, text}) {
  return (
    <div class="feature-item">
          <img
            src={img}
            alt="featureItemImg"
            class="feature-icon"
          />
          <h3 class="feature-item-title">{title}</h3>
          <p>
            {text}
          </p>
        </div>
  )
}

export default FeatureItem