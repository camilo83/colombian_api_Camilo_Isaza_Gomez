import { useEffect, useState } from 'react';
import { useAirport } from '../../hooks/useAirport/useAirport';
import { usePresident } from '../../hooks/usePresident/usePresident';
import { useTouristicAttraction } from '../../hooks/useTouristicAttraction/useTouristicAttraction';
import { Airport } from '../../model/airport';
import { President } from '../../model/president';
import { TouristicAttraction } from '../../model/touristic_attraction';
import { Presidents } from '../../components/entities/Presidents/Presidents';
import { Attractions } from '../../components/entities/Attractions/Attractions';
import { Airports } from '../../components/entities/Airports/Airports';
import './dashboard.scss';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('presidents');
  const { loadAirports } = useAirport();
  const { loadPresidents } = usePresident();
  const { loadAttraction } = useTouristicAttraction();

  const [airports, setAirports] = useState<Airport[]>([]);
  const [presidents, setPresidents] = useState<President[]>([]);
  const [attractions, setAttractions] = useState<TouristicAttraction[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const airportsList = await loadAirports();
      if (!airportsList) {
        return;
      }
      setAirports(airportsList);

      const presidentList = await loadPresidents();
      if (!presidentList) {
        return;
      }
      setPresidents(presidentList);

      const attractionsList = await loadAttraction();
      if (!attractionsList) {
        return;
      }
      setAttractions(attractionsList);
    };

    fetchData();
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'presidents':
        return (
          <div>
            <Presidents presidents={presidents}></Presidents>
          </div>
        );
      case 'airports':
        return (
          <div>
            <Airports airports={airports}></Airports>
          </div>
        );
      case 'attractions':
        return (
          <div>
            <Attractions attractions={attractions}></Attractions>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        <button
          onClick={() => setActiveTab('presidents')}
          className={activeTab === 'presidents' ? 'active' : ''}
        >
          Presidentes
        </button>
        <button
          onClick={() => setActiveTab('airports')}
          className={activeTab === 'airports' ? 'active' : ''}
        >
          Aeropuertos
        </button>
        <button
          onClick={() => setActiveTab('attractions')}
          className={activeTab === 'attractions' ? 'active' : ''}
        >
          Atracciciones Turísticas
        </button>
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
}
