import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RecordCounter from '../../recordCounter/recordCounter';
import AllRecords from '../../allRecords/allRecords';
import { InfoSummary } from '../../infoSummary/infoSummary';
import { groupAttractionsByDepartmentAndCity } from '../../../functions/groupAttractionsByDepartmentAndCity';
import { TouristicAttraction } from '../../../model/touristic_attraction';
import { useDepartment } from '../../../hooks/useDepartment/useDepartment';
import { Banner } from '../../banner/banner';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../../store/store';
import { setAttractionsTable } from '../../../redux/AttractionsSlice';

type PropsType = {
  attractions: TouristicAttraction[];
};

export function Attractions({ attractions }: PropsType) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loadDepartment } = useDepartment();
  const attractionsTable = useSelector(
    (state: RootState) => state.attractionsState.attractionsTable
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!attractionsTable) {
        const calculatedAttractionsTable =
          await groupAttractionsByDepartmentAndCity(
            attractions,
            loadDepartment
          );
        dispatch(setAttractionsTable(calculatedAttractionsTable));
        setLoading(false);
      } else {
        setLoading(false);
      }
    };

    fetchData();
  }, [attractions, attractionsTable, dispatch, loadDepartment]);

  const returnToHome = () => {
    navigate('/');
  };

  if (loading) {
    return (
      <div className="loading">
        <img src="/loading.gif" alt="Cargando" width={50} />
      </div>
    );
  }

  return (
    <div>
      <Banner path={'/attractions_banner.jpg'}></Banner>
      <button className="return-to-home" onClick={returnToHome}>
        Volver a la página de inicio
      </button>
      <RecordCounter
        data={attractions}
        entityName={'atracciones turísticas'}
      ></RecordCounter>
      <AllRecords
        data={attractions}
        entityName={'atracciones turísticas'}
      ></AllRecords>
      <InfoSummary data={attractionsTable || []}></InfoSummary>
    </div>
  );
}
