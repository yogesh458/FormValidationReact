import { useFormik } from 'formik';
import './App.css';
import * as Yup from 'yup';

function App() {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      gender: '',
      country:'',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(10, 'Cannot exceed 10 characters')
        .required('This field cannot be empty!'),
      email: Yup.string()
        .email('Invalid email address format')
        .required('Email is required'),
        password: Yup.string()
  .matches(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/,
    'Password must contain at least 6 characters, one uppercase letter, one lowercase letter, one special character, and one number'
  )
  .required('Password is required'),
      gender: Yup.string().required('Please select a gender'),
    }),
    country:Yup.string()
    .required("select country"),
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <div className="form-container">
      <h2>Login Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <label>USERNAME :</label>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.errors.username && <p className="error">{formik.errors.username}</p>}
       
        <label>EMAIL :</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && <p className="error">{formik.errors.email}</p>}
       
        <label>PASSWORD :</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && <p className="error">{formik.errors.password}</p>}
   
        <label>Gender:</label>
        <div className="radio-buttons">
          <label>
            Male
            <input
              type="radio"
              name="gender"
              onChange={formik.handleChange}
              value="male"
              //checked={formik.values.gender === 'male'}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              name="gender"
              onChange={formik.handleChange}
              value="female"
              //checked={formik.values.gender === 'female'}
            />
          </label>
          </div>
          {formik.errors.gender && <p className="error">{formik.errors.gender}</p>}
          <label>Country</label>
           <select
          name="country" 
          onChange={formik.handleChange}
          value={formik.values.country}
        >
          <option value="">Select a country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="China">China</option>
          <option value="Australia">Australia</option>
        </select>
        {formik.errors.country && <p className="error">{formik.errors.country}</p>}
        
        <br />
        <br />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default App;
