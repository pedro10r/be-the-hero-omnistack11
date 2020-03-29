import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css'

import logo from '../../assets/logo.png';

export default function Profile() {
  const [incidents, setIncidents] = useState([]); // Usando estado

  const history = useHistory(); // History para navegação entre páginas

  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  useEffect(() => { // useEffect para mostrar os dados que o useState recebeu
    api.get('profile', {
      headers: {
        Authorization: ongId,
      }
    }).then(response => {
      setIncidents(response.data);
    })
  }, [ongId]);

  async function handleDeleteIncident(id) { // Função que deleta um caso
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (err) {
      alert('Erro ao deletar caso, tente novamente.');
    }
  }

  function handleLogout() { // Função para Logout da ONG
    localStorage.clear();

    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logo} alt="Logo" />
        <span>Bem vinda, {ongName}</span>

        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button onClick={handleLogout} type="button"> {/* Chama função de Logout */}
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            {/* INTL serve para formatação de DATA/HORA, MOEDA, etc... (Nesse caso => Modeda) */}
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

            <button onClick={() => handleDeleteIncident(incident.id)} type="button">
              <FiTrash2 size={20} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
