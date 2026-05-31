import { useEffect, useState } from 'react';
import { useApi } from './useApi';

export const useUpdateRequests = (user: User | null) => {
  const [request, setRequest] = useState<number | null>(null);
  const [limitDay, setLimitDay] = useState<number | null>(null);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const api = useApi();

  const handleUpdateRequests = async () => {
    if (!user) return;

    setLoadingStatus(true);
    try {
      const requests: { current: number; limit_day: number } =
        await api.updateRequests();
      setRequest(requests.current);
      setLimitDay(requests.limit_day);
    } catch (error) {
      console.error('Erro ao atualizar status:', error);
      setLoadingStatus(false);
    } finally {
      setLoadingStatus(false);
    }
  };

  useEffect(() => {
    if (user) {
      handleUpdateRequests();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return {
    request,
    limitDay,
    loadingStatus,
    handleUpdateRequests,
  };
};
