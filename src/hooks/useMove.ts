import { useNavigate } from "react-router-dom";

const useMove = () => {
  const navigate = useNavigate();

  const moveToPage = (path: string) => {
    navigate(path);
  };

  return { moveToPage };
};

export default useMove;
