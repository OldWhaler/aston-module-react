import { createSearchParams, useNavigate } from 'react-router-dom';

type Params = {
  [key: string]: string
}

export const useNavigateSearch = () => {
  const navigate = useNavigate();
  return (pathname: string, params: Params) =>
    navigate({ pathname, search: `?${createSearchParams(params)}` });
};