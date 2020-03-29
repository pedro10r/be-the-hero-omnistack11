import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; // Link e History são funções para navegação entre páginas
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logo.png'
import heroes from '../../assets/heroes.png';

export default function Logon() {
  const [id, setId] = useState('');  // Usando estado
  const history = useHistory();

  async function handleLogin(e) { // Função para fazer login com a ONG
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile'); // Vai para pasta profile

    } catch (err) {
      alert('Falha no login, tente novamente.');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logo} alt="Logo" height={100} />

        <form onSubmit={handleLogin}> {/*Chamando função reponsavel pelo Login, assim que o SUBMIT for acionado executa a função*/}
          <h1>Faça seu login</h1>

          <input
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />

          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroes} alt="Heroes" />
    </div>
  );
}
