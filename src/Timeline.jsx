import scan from './scan.jsx';

import TimelineItem from "./Timelineitem";
import src from "./FrontendAssets/warehouse.svg";
import dest from "./FrontendAssets/destination.svg";
const Timeline = () =>
    scan.length > 0 && (
        <div>
            <img src={dest} className='Image destinationImage' />
        <div className="timeline-container">
            {scan.map((scan, idx) => (
                <TimelineItem scan={scan} key={idx} />
            ))}
        </div>
            <img src={src} className='Image sourceImage'/>
        </div>
    );
export default Timeline;