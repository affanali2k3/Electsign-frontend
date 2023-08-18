import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

export const FileViewer = () => {
    const location = useLocation();
    console.log(location.state.url)

    return (
        <div>
            <h1>File Viewer</h1>
            <iframe src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(location.state.url)}`} width="100%" height="600" title="Office Online Viewer" />
        </div>
    );
};

