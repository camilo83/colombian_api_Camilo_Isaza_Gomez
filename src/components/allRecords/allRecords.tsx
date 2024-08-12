import './allRecords.scss';

type PropsType = {
  data: any[];
  entityName: string;
};

export default function AllRecords({ data, entityName }: PropsType) {
  return (
    <div className="all-records">
      <p className="all-records-title">Historial de {entityName}</p>
      <ul>
        {data.map((item) => {
          switch (entityName) {
            case 'presidentes':
              return (
                <li key={item.id} className="presidents">
                  <img src={item.image} alt="" />
                  <h2>
                    {item.name} {item.lastName}
                  </h2>
                  <p>Inicio del mandato: {item.startPeriodDate}</p>
                  <p>Fin del mandato: {item.endPeriodDate}</p>
                </li>
              );
            case 'aeropuertos':
              return (
                <li key={item.id} className="airports">
                  <h2>{item.name}</h2>
                  <h3>{item.department.name}</h3>
                  <h3>{item.city.name}</h3>
                </li>
              );
            case 'atracciones turísticas':
              return (
                <li key={item.id} className="attractions">
                  <img src={item.images[0]} alt="" />

                  <h2>{item.name}</h2>
                  <p>{item.city.name}</p>
                </li>
              );
            default:
              return <li key={item.id}>{item.name}</li>;
          }
        })}
      </ul>
    </div>
  );
}
