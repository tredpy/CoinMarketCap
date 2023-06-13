import { useDispatch } from 'react-redux';

import { AppDispatch } from 'store/StoreProvider';

export const useAppDispatch = () => useDispatch<AppDispatch>();
