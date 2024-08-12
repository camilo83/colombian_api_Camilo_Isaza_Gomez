import './InfoSummary.scss';

type propsType = {
  data: any[];
};

export function InfoSummary({ data }: propsType) {
  if (data.length === 0) return <div>No hay datos disponibles</div>;

  const headers = Object.keys(data[0]);

  return (
    <div className="info-summary">
      <h2>Resumen de información</h2>
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td key={header}>{item[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
