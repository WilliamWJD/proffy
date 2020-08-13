import React from 'react';

import logo from '../../assets/logo.svg';
import purple from '../../assets/icons/purple-heart.svg';

import Input from '../../components/Input';

import './styles.css';

const Login: React.FC = () => {
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

            <form action="">
              <Input name="email" label="E-mail" />
              <Input name="password" label="Senha" />
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
