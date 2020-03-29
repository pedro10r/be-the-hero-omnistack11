import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';


import api from '../../services/api';
import './styles.css';

import logo from '../../assets/logo.png'

export default function Register() {
  const [name, setName] = useState(''); // Usando estado
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(e) { // Cadastrando uma nova ONG
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    }

    try {
      const response = await api.post('ongs', data);

      alert(`Seu ID de acesso: ${response.data.id}`); // Mosrra um alerta com ID gerado para ONG, com esse ID faz login
      history.push('/');

    } catch (err) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logo} alt="Logo" height={100} />

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas encontrar os casos de sua ONG.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar ao logon
          </Link>
        </section>

        <form onSubmit={handleRegister}> {/* Assim que o submit é acionado, executa a função */}
          <input
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              value={uf}
              onChange={e => setUf(e.target.value)}
              style={{ width: 80 }} />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
