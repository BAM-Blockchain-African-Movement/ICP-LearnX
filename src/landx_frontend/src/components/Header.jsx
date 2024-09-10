import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Header = () => {
  const { user, logout, hasAdminAccess } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="container mx-auto">
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-yellow-200">Accueil</Link></li>
          <li><Link to="/services" className="hover:text-yellow-200">Services</Link></li>
          <li><Link to="/about" className="hover:text-yellow-200">À Propos</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-200">Contact</Link></li>
          <li><Link to="/terrain-management" className="hover:text-yellow-200">Gestion des terrains</Link></li>
          {user ? (
            <>
              {hasAdminAccess() && (
                <li><Link to="/dashboard" className="hover:text-yellow-200">Tableau de Bord</Link></li>
              )}
              <li><button onClick={handleLogout} className="hover:text-yellow-200">Déconnexion</button></li>
            </>
          ) : (
            <li><Link to="/login" className="hover:text-yellow-200">Connexion</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;