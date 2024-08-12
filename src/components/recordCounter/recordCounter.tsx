import './recordCounter.scss';

type PropsType = {
  data: any[];
  entityName: string;
};

export default function RecordCounter({ data, entityName }: PropsType) {
  return (
    <div className="record-counter">
      <h3>
        El total de registros de {entityName} es de {data.length}.
      </h3>
    </div>
  );
}
