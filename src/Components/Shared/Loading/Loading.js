import React from 'react';
import FadeLoader from "react-spinners/FadeLoader";
const Loading = () => {
    return (
        <div className="flex items-center justify-center pt-32">
            <FadeLoader
  color="#1CE2DB"
  height={15}
  loading={true}
  radius={2}
  margin={2}
  speedMultiplier={1}
  width={3}
  cssOverride={{}}
/>
        </div>
    );
};

export default Loading;