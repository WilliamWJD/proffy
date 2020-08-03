import React from 'react';

import WhatsAppIcon from '../../assets/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/31516475?s=460&u=e2be85f1b7be7a9cd728c0fe9fd0ad8552d9cd57&v=4"
          alt="William Dias"
        />
        <div>
          <strong>William Dias</strong>
          <span>Java</span>
        </div>
      </header>

      <p>
        Sou um amante e entusiasta da tecnologia, sempre buscando novos
        conhecimentos e procurando melhorar a cada dia não só como profissional
        mas também como pessoa.
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$:150,00</strong>
        </p>
        <button type="button">
          <img src={WhatsAppIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
