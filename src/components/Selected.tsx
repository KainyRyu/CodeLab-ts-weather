import { useQuery, useQueryClient } from 'react-query';
import Current from './Current';

export default function Selected() {
  const queryClient = useQueryClient();
  const query = useQuery('selected');

  return (
    <div>
      <h1>Selected</h1>
      <Current />
    </div>
  );
}
