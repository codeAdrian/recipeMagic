import { useState, useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useSearch } from 'hooks';

export const useFilters: any = (initialValue: any, submitCallback: any) => {
  const [searchState, searchApi] = useSearch(initialValue, submitCallback);

  const state = { ...searchState };
  const api = { ...searchApi };

  return [state, api];
};
