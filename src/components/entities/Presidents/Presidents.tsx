import { useEffect, useState } from 'react';
import { President } from '../../../model/president';
import { groupPresidentsByPoliticalParty } from '../../../functions/groupPresidentsByPoliticalParty';
import RecordCounter from '../../recordCounter/recordCounter';
import AllRecords from '../../allRecords/allRecords';
import { InfoSummary } from '../../infoSummary/infoSummary';
import { Banner } from '../../banner/banner';
import { useNavigate } from 'react-router-dom';

type PropsType = {
  presidents: President[];
};

export function Presidents({ presidents }: PropsType) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [countParties, setCountParties] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const countParties = await groupPresidentsByPoliticalParty(presidents);
      if (!countParties) {
        return;
      }
      setCountParties(countParties);
      console.log(countParties);
      setLoading(false);
    };

    fetchData();
  }, [presidents]);

  const returnToHome = () => {
    navigate('/');
  };

  if (loading) {
    return (
      <div className="loading">
        <img src="/loading.gif" alt="" width={50} />
      </div>
    );
  }

  return (
    <div>
      <Banner path={'/presidents_banner.jpg'}></Banner>
      <button className="return-to-home" onClick={returnToHome}>
        Volver a la página de inicio
      </button>
      <RecordCounter
        data={presidents}
        entityName={'presidentes'}
      ></RecordCounter>
      <AllRecords data={presidents} entityName={'presidentes'}></AllRecords>
      <InfoSummary data={countParties}></InfoSummary>
    </div>
  );
}
