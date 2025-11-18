import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Menu, X, Database, Home, Table, BarChart3, FileCode } from 'lucide-react';

export default function Layout({ children, currentPageName }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: 'Home', icon: Home },
    { name: 'Modelo de Dados', path: 'ModeloDados', icon: Database },
    { name: 'Dados das Tabelas', path: 'Tabelas', icon: Table },
    { name: 'Análises SQL', path: 'Analises', icon: BarChart3 },
    { name: 'Queries SQL', path: 'Queries', icon: FileCode },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <style>{`
        :root {
          --gerdau-blue: #003087;
          --gerdau-blue-light: #0066CC;
          --gerdau-gray: #4A5568;
          --gerdau-orange: #FF6B35;
        }
      `}</style>

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-lg border-b-4 border-[#003087] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo and Title */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-4 group">
              <div className="bg-gradient-to-br from-[#003087] to-[#0066CC] p-3 rounded-xl shadow-lg group-hover:scale-105 transition-transform">
                <Database className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#003087] tracking-tight">
                  Sistema Gerdau
                </h1>
                <p className="text-sm text-gray-600">Banco de Dados Corporativo</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPageName === item.path;
                return (
                  <Link
                    key={item.path}
                    to={createPageUrl(item.path)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      isActive
                        ? 'bg-[#003087] text-white shadow-md'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-[#003087]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium text-sm">{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-[#003087]" />
              ) : (
                <Menu className="w-6 h-6 text-[#003087]" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPageName === item.path;
                return (
                  <Link
                    key={item.path}
                    to={createPageUrl(item.path)}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all ${
                      isActive
                        ? 'bg-[#003087] text-white'
                        : 'text-gray-700 hover:bg-blue-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#003087] text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-1">Projeto Acadêmico - Gerdau</h3>
              <p className="text-blue-200 text-sm">
                Sistema de Banco de Dados Corporativo
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-blue-200 text-sm">
                14 Tabelas • Relacionamentos Complexos • Análises SQL
              </p>
              <p className="text-blue-300 text-xs mt-1">
                Desenvolvido como trabalho escolar
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}