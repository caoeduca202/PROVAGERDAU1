import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { 
  Database, 
  Factory, 
  TrendingUp, 
  Users, 
  Package, 
  ArrowRight,
  CheckCircle,
  Layers
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  const stats = [
    { label: 'Tabelas', value: '14', icon: Database, color: 'from-blue-500 to-blue-600' },
    { label: 'Relacionamentos', value: '12+', icon: Layers, color: 'from-purple-500 to-purple-600' },
    { label: 'Queries SQL', value: '20+', icon: TrendingUp, color: 'from-green-500 to-green-600' },
    { label: 'Análises', value: '10+', icon: CheckCircle, color: 'from-orange-500 to-orange-600' },
  ];

  const features = [
    {
      title: 'Clientes Corporativos',
      description: 'Gestão completa de clientes com endereços e segmentação',
      icon: Users,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'Produtos de Aço',
      description: 'Catálogo com 7 categorias e especificações técnicas',
      icon: Package,
      color: 'bg-green-50 text-green-600'
    },
    {
      title: 'Unidades Fabris',
      description: '7 unidades produtivas distribuídas pelo Brasil',
      icon: Factory,
      color: 'bg-purple-50 text-purple-600'
    },
    {
      title: 'Ordens de Venda',
      description: 'Controle completo do ciclo de vendas e faturamento',
      icon: TrendingUp,
      color: 'bg-orange-50 text-orange-600'
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#003087] to-[#0066CC] rounded-3xl shadow-2xl">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djRoLTR2LTRoNHptMCA0djRoLTR2LTRoNHptLTQgNHY0aC00di00aDR6bTAgMHYtNGgtNHY0aDR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="relative px-8 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Database className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-semibold">Projeto Acadêmico</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Sistema de Banco de Dados
              <span className="block mt-2 text-blue-200">Gerdau S.A.</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Modelagem completa do banco de dados corporativo com 14 tabelas relacionadas, 
              simulando o sistema real de gestão da maior empresa de aços longos das Américas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to={createPageUrl('ModeloDados')}
                className="inline-flex items-center gap-2 bg-white text-[#003087] px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105"
              >
                Ver Modelo MER
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://schema-weaver-.base44.app/diagrameditor?project=691c6ef0b608ec05317947a9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white border-2 border-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all"
              >
                <Database className="w-5 h-5" />
                Modelagem 3D
              </a>
              <Link
                to={createPageUrl('Analises')}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white border-2 border-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all"
              >
                Explorar Análises
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Features Grid */}
      <div>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Principais Módulos do Sistema
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            O banco de dados contempla todas as operações críticas da cadeia de valor da Gerdau
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${feature.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Technical Details */}
      <Card className="border-none shadow-xl bg-gradient-to-br from-slate-50 to-blue-50">
        <CardHeader>
          <CardTitle className="text-2xl">Especificações Técnicas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-3 text-[#003087]">Tabelas Principais</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>CLIENTES_CORPORATIVOS (7 atributos)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>PRODUTOS_ACO (9 atributos)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>ORDENS_VENDA (12 atributos)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>UNIDADES_FABRIS</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>+ 10 tabelas complementares</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-[#003087]">Operações SQL</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>AVG com GROUP BY</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>COUNT com IN / NOT IN</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>MIN/MAX com BETWEEN</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>Comparadores e LIKE</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>JOINs complexos</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-[#003087]">Dados Inseridos</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>7 Clientes Corporativos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>7 Produtos de Aço</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>7 Ordens de Venda</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>7 Unidades Fabris</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>+ dados em outras tabelas</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}