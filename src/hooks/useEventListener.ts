import { useEffect } from 'react';

type EventListenerHook = (target: any, type: any, listener: any) => void;

export const useEventListener: EventListenerHook = (
    target,
    type,
    listener,
    ...rest
) => {
    useEffect(() => {
        target.addEventListener(type, listener, ...rest);
        return () => {
            target.removeEventListener(type, listener, ...rest);
        };
    }, [listener, rest, target, type]);
};
