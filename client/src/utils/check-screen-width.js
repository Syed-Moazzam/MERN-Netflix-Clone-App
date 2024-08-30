import { useEffect, useState } from 'react';

const useMobileHeader = () => {
    const [showMobileHeader, setShowMobileHeader] = useState(false);
    useEffect(() => {
        if (window.innerWidth <= 992) setShowMobileHeader(true);
    }, []);

    window.addEventListener('resize', () => {
        window.innerWidth <= 992 ? setShowMobileHeader(true) : setShowMobileHeader(false);
    });

    return showMobileHeader;
}

export default useMobileHeader;