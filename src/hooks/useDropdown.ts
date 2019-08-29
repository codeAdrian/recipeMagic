import { useCallback, useRef, useState } from 'react';

import { useEventListener } from './useEventListener';

export const useDropdown = () => {
    const elementRef = useRef<any>(null);
    const [expanded, setExpanded] = useState(false);

    const shouldCollapse = useCallback(({ target }) => {
        const currentRef = elementRef.current;
        if (!currentRef || !currentRef.contains(target)) {
            setExpanded(false);
        }
    }, []);

    useEventListener(document, 'mousedown', shouldCollapse);

    return {
        elementRef,
        expanded,
        setExpanded
    };
};
