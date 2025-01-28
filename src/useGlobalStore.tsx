import {useAtom} from 'jotai';
import {routeAtom} from './globalStore';

const useGlobalStore = () => {
  const [route, setRoute] = useAtom(routeAtom);

  return {route, setRoute};
};

export default useGlobalStore;
