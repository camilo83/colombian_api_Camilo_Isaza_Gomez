import './homePage.scss';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  const handleDashPage = () => {
    navigate('/colombia_dash/');
  };

  return (
    <div className="home-page">
      <h1>BIENVENIDO A COLOMBIA</h1>
      <button onClick={handleDashPage}>VER INFORMACIÓN</button>
    </div>
  );
}
