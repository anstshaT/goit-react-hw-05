import { Field, Formik, Form } from "formik";
import s from "./SearchBar.module.css";

const SearchBar = ({ handleSearchQuery, query }) => {
  console.log("SearchBar rendered");

  const onSubmit = (values) => {
    console.log(values);
    handleSearchQuery(values.query);
  };

  const initialValues = {
    query,
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className={s.form}>
          <Field name="query" className={s.input} />
          <button type="submit" className={s.button}>
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
