import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RecordCounter from '../../recordCounter/recordCounter';
import AllRecords from '../../allRecords/allRecords';
import { InfoSummary } from '../../infoSummary/infoSummary';
import { Airport } from '../../../model/airport';
import { groupAirportsByRegionDepartmentCityAndType } from '../../../functions/groupAirportsByRegionDepartmentCityAndType';
import { groupAirportsByDepartmentAndCity } from '../../../functions/groupAirportsByDepartmentAndCity';
import { Banner } from '../../banner/banner';
import { useNavigate } from 'react-router-dom';
import { useRegion } from '../../../hooks/useRegion/useregion';
import { RootState } from '../../../store/store';
import { setAirportsTable } from '../../../redux/AirportsSlice';

type PropsType = {
  airports: Airport[];
};

export function Airports({ airports }: PropsType) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loadRegion } = useRegion();
  const airportsTable = useSelector(
    (state: RootState) => state.airportsState.airportsTable
  );
  const [loading, setLoading] = useState(true);
  const [isSimpleTable, setIsSimpleTable] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!airportsTable) {
        let calculatedAirportsTable;

        if (isSimpleTable) {
          calculatedAirportsTable = await groupAirportsByDepartmentAndCity(
            airports
          );
        } else {
          calculatedAirportsTable =
            await groupAirportsByRegionDepartmentCityAndType(
              airports,
              loadRegion
            );
        }

        dispatch(setAirportsTable(calculatedAirportsTable));
        setLoading(false);
      } else {
        setLoading(false);
      }
    };

    fetchData();
  }, [airports, airportsTable, dispatch, isSimpleTable, loadRegion]);

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
      <Banner path={'/banner_airport.jpg'}></Banner>
      <button className="return-to-home" onClick={returnToHome}>
        Volver a la página de inicio
      </button>
      <RecordCounter data={airports} entityName={'aeropuertos'}></RecordCounter>
      <AllRecords data={airports} entityName={'aeropuertos'}></AllRecords>
      <button
        className="change-airport-view-button"
        onClick={() => setIsSimpleTable(!isSimpleTable)}
      >
        {isSimpleTable ? 'Mostrar tabla detallada' : 'Mostrar tabla simple'}
      </button>
      <InfoSummary data={airportsTable || []}></InfoSummary>
    </div>
  );
}
