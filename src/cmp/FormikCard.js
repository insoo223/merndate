import React from 'react';
import { useFormik } from 'formik';
import axios from './axios';

const FormikCard = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      cust: '',
      pic: '',
    },
    onSubmit: values => {
      //alert(JSON.stringify(values, null, 2));
      axios.post('/dating/cards', {
        name: formik.values.cust,
        imgUrl: formik.values.pic,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="cust">Name</label>
      <input
        id="cust"
        name="cust"
        type="cust"
        onChange={formik.handleChange}
        value={formik.values.cust}
      />

      <label htmlFor="pic">Img URL</label>
      <input
        id="pic"
        name="pic"
        type="pic"
        onChange={formik.handleChange}
        value={formik.values.pic}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormikCard;
