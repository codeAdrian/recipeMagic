import { useEffect } from 'react';
import { API_TIMER_TYPES } from 'modules';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

export const ApiTimer = () => {
  const dispatch = useDispatch();
  const { isActive } = useSelector((state: any) => state.apiTimer);

  useEffect(() => {
    if (isActive) {
      toast(`Preparing more yummy recipes for you. Please wait.`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        closeButton: false,
        draggable: false,
        pauseOnHover: false,
        closeOnClick: false,
        pauseOnFocusLoss: false,
        autoClose: 6000,
        onClose: () => dispatch({ type: API_TIMER_TYPES.API_TIMER_RESET })
      });
    }
  }, [isActive, dispatch]);

  return null;
};
