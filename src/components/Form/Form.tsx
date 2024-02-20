import "./Form.css";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addDetail } from "../../reducers/carsReducer";

type Field = {
  id: number,
  label: string,
  type: string,
  key: string,
  disabled: boolean,
  required: boolean
};

const Form = (props: any) => {
  const { formFields, selected } = props;
  const dispatch = useDispatch();

  const [details, setDetails] = useState<any[]>([]);
  const [showJson, setShowJson] = useState(false);
  const [showError, setShowError] = useState(false);
  const [file, setFile] = useState<string>();

  const refs = React.useRef<any>({});

  useEffect(() => {
    setShowJson(false);
    setShowError(false);
  }, [selected]);

  const saveEntry = () => {
    const non_required_fields = ["image_url"];
    let obj: any = {};
    let isEmpty = false;
    for (let key in refs.current) {
      obj[key] = refs.current[key].value;
      isEmpty = !obj[key]?.length && !non_required_fields.includes(key);
      if (isEmpty) {
        break;
      }
    }
    if (isEmpty) {
      setShowError(true);
    } else {
      obj["image_url"] = file;
      dispatch(addDetail(obj));
      setShowError(false);
      setDetails(obj);
      setShowJson(true);
      for (let key in refs.current) {
        refs.current[key].value = null;
      }
    }
  };

  useEffect(() => {
    !showJson && (refs.current["brand"].value = selected);
  }, [showJson])

  const saveFile = (e: any) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      {!showJson && (
        <>
          <div className="flex flex_column container">
            {formFields.map((field: Field) => (
              <div className={"field " + (field.required ? "required": "")} key={field.id}>
                <label>{field.label}</label>
                <input
                  disabled={field.disabled}
                  ref={(ref) => (refs.current[field.key] = ref)}
                  type={field.type}
                  onChange={field.type === "file" ? saveFile : ()=>{}}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center align-center flex_column">
            <button
              className="btn_primary text-center"
              onClick={saveEntry}
              type="submit"
            >
              Submit
            </button>
            {showError && (
              <div className="error mt-1">Please enter all fields!</div>
            )}
          </div>
        </>
      )}
      {showJson && (
        <div className="text-center mt-1">{JSON.stringify(details)}</div>
      )}
    </>
  );
};

export default Form;
