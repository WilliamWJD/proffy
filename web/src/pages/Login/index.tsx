import React, { useState, useContext } from 'react';

import AuthContext from '../../context/auth';

import logo from '../../assets/logo.svg';
import purple from '../../assets/icons/purple-heart.svg';

import Input from '../../components/Input';

import './styles.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signed, user, signIn } = useContext(AuthContext);

  console.log({ signed, user });

  function handleSignIn(e: any) {
    e.preventDefault();
    signIn(email, password);
  }

  return (
    <div className="loginContainer">
      <div className="boxLogo">
        <div className="logo-container">
          <img src={logo} alt="Proffy" />
          <h2>Sua plataforma de estudos online</h2>
        </div>
      </div>

      <div className="boxLogin">
        <div className="boxLoginForm">
          <div className="formLogin">
            <h2>Fazer login</h2>

            <form onSubmit={handleSignIn}>
              <Input
                name="email"
                label="E-mail"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                name="password"
                label="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
              <button type="submit">Salvar cadastro</button>
            </form>
          </div>
          <div className="footer">
            <div className="cadastre">
              <span>Não tem conta ?</span>
              <a href="#">Cadastre-se</a>
            </div>
            <span>
              é de graça <img src={purple} alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
