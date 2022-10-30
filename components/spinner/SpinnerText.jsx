const SpinnerText = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"  style={{margin: 'auto', background: 'none', display: 'block', shapeRendering: 'auto'}} width="70px" height="70px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <rect className='rect' x="15" y="30" width="10" height="40" fill="rgba(18, 18, 18, 0.7)">
        <animate attributeName="opacity" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" values="1;0.2;1" begin="-0.6"></animate>
        </rect><rect className='rect' x="35" y="30" width="10" height="40" fill="rgba(18, 18, 18, 0.7)">
        <animate attributeName="opacity" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" values="1;0.2;1" begin="-0.4"></animate>
        </rect><rect className='rect' x="55" y="30" width="10" height="40" fill="rgba(18, 18, 18, 0.7)">
        <animate attributeName="opacity" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" values="1;0.2;1" begin="-0.2"></animate>
        </rect><rect className='rect' x="75" y="30" width="10" height="40" fill="rgba(18, 18, 18, 0.7)">
        <animate attributeName="opacity" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" values="1;0.2;1" begin="-1"></animate>
        </rect>
        </svg>
    )
}

export default SpinnerText