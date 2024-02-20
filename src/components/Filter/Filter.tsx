import Select from "react-select";

const Filter = (props: any) => {
    const { item, getData } = props;
  const obj: any = {
    checkbox: (
      <div>
        {item.options.map((opt: any) => (
          <div key={opt.value}>
            <input type="checkbox" id={opt.label} name={item.label} value={opt.value} onChange={(e) => getData(item.key, opt.value, item.type, e.target.checked)} />
             <label>{opt.label}</label>
          </div>
        ))}
      </div>
    ),
    select: <Select defaultValue={item.options?.[0]} options={item.options} onChange={(selected) => getData(item.key, selected.value, item.type)}
    />,
    radio: (
      <div>
        {item.options.map((opt: any) => (
          <div key={opt.value}>
            <input type="radio" id={opt.label} name={item.label} value={opt.value} onChange={(e) => getData(item.key, opt.value, item.filterType ? item.filterType : item.type, "", opt.min || 0, opt.max)} />
             <label>{opt.label}</label>
          </div>
        ))}
      </div>
    ),
  };
  return (
    <div className="mt-1">
      <h3>{item.label}</h3>
      {obj[item.type]}
    </div>
  );
};

export default Filter;
