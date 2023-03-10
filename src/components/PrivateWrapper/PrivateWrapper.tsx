import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector";

const PrivateWrapper = ({ children, redirectPath }: { children: JSX.Element, redirectPath: string }) => {
  const isLogged = useAppSelector(store => store.userSlice.isLogged);

  if (!isLogged) {
    return <Navigate to={redirectPath} />
  }

  return children
}

export { PrivateWrapper }