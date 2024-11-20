import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

const PDFViewer = ({ fileUrl }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
            <div className="w-full h-full ">
                <Viewer 
                    fileUrl={`/assets/${fileUrl}`} 
                    plugins={[defaultLayoutPluginInstance]} 
                    style={{ width: '100%', height: '100%' }} 
                />
            </div>
        </Worker>
    );
};
export default PDFViewer
