import React, { useMemo } from "react";
import { Link, Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../Redux/auth/thunks'
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import GoogleIcon from '@mui/icons-material/Google';
import "../../styles/loginRes.css"

export const LoginPage = () => {
  
  const dispatch = useDispatch();

  const { status } = useSelector((state)=> state.auth);

  const isChecking = useMemo(() => status === 'checking', [status])

  const { email, password, onInputChange } = useForm({
    email: '',
    password: ''
  })
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({email, password});
    dispatch(startLoginWithEmailPassword({email, password}));
    navigate("/", {
      replace: true,
    });
  }

  const onGoogleSignIn = ()=>{
    console.log('onGoogleSignIn');
    dispatch(startGoogleSignIn());
    navigate("/", {
      replace: true,
    });
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column vw-100 vh-100  ">
        <form onSubmit={onSubmit} className="mainLog">
         
          <div className="d-grid gap-2 mt-3">
            
            <input
              className="inputlogin"
              style={{ borderRadius:"0.2em", padding:"0.5em"}}
              label="Correo"
              type="email"
              placeholder="correo@gmail.com"
              
              name='email'
              value={email}
              onChange={onInputChange}
            />
            <input
              className="inputlogin"
              style={{ borderRadius:"0.2em", padding:"0.5em"}}
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              name="password"
              value={password}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-3" type="submit">
              Login
            </button>
            <button  className="btn btn-outline-primary mt-3 " type="submit"onClick={onGoogleSignIn}
                 >
            <GoogleIcon/>
            </button>
            <Link component={RouterLink} color="inherit" to="/register" style={{display: 'flex', justifyContent: 'end'}}>
              Crear una cuenta
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};