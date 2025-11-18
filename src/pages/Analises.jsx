import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, DollarSign, Package, BarChart3 } from 'lucide-react';

export default function Analises() {
  // Dados das análises SQL
  const precoMedioCategoria = [
    { categoria: 'Aços Longos', preco: 4850.00 },
    { categoria: 'Aços Planos', preco: 5950.00 },
    { categoria: 'Aços Especiais', preco: 12500.00 },
    { categoria: 'Trefilados', preco: 4800.00 },
    { categoria: 'Tubos', preco: 5500.00 }
  ];

  const ordensAbertas = [
    { cliente: 'Indústria Beta', total: 1 },
    { cliente: 'Metalúrgica Gama', total: 1 },
    { cliente: 'Empreendimentos Sul', total: 1 },
    { cliente: 'Montagens do Centro', total: 1 }
  ];

  const valoresOrdens = {
    menor: 12200.00,
    maior: 500000.00
  };

  const tempoEntrega = [
    { transportadora: 'Logística Fênix', entregas: 2, tempo: 4 },
    { transportadora: 'Marítima Global', entregas: 1, tempo: 34 },
    { transportadora: 'Tora Logística', entregas: 1, tempo: 4 }
  ];

  const COLORS = ['#003087', '#0066CC', '#4A90E2', '#74B3FF', '#A8D0FF'];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
          <BarChart3 className="w-4 h-4" />
          <span className="text-sm font-semibold">Análises e Estatísticas</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Resultados das Consultas SQL
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Análises realizadas com AVG, COUNT, MIN, MAX, GROUP BY e outras funções agregadas
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-none shadow-lg">
          <CardHeader>
            <CardTitle className="text-sm text-gray-600 flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Menor Ordem (Out-Nov)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#003087]">
              R$ {valoresOrdens.menor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
            <p className="text-sm text-gray-600 mt-2">Período: 15/10 a 15/11/2025</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg">
          <CardHeader>
            <CardTitle className="text-sm text-gray-600 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Maior Ordem (Out-Nov)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">
              R$ {valoresOrdens.maior.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
            <p className="text-sm text-gray-600 mt-2">Exportadora Delta</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg">
          <CardHeader>
            <CardTitle className="text-sm text-gray-600 flex items-center gap-2">
              <Package className="w-4 h-4" />
              Ordens Abertas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-600">
              {ordensAbertas.length}
            </div>
            <p className="text-sm text-gray-600 mt-2">Status: PENDENTE ou EM_PRODUÇÃO</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Preço Médio por Categoria */}
        <Card className="border-none shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-[#003087]" />
              Preço Médio por Categoria
            </CardTitle>
            <p className="text-sm text-gray-600 mt-2">
              <code className="bg-gray-100 px-2 py-1 rounded text-xs">
                SELECT AVG(preco_tonelada) GROUP BY categoria
              </code>
            </p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={precoMedioCategoria}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="categoria" 
                  angle={-45} 
                  textAnchor="end" 
                  height={100}
                  tick={{ fontSize: 11 }}
                />
                <YAxis />
                <Tooltip 
                  formatter={(value) => `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                />
                <Bar dataKey="preco" fill="#003087" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Ordens Abertas por Cliente */}
        <Card className="border-none shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="w-5 h-5 text-[#003087]" />
              Ordens Abertas por Cliente
            </CardTitle>
            <p className="text-sm text-gray-600 mt-2">
              <code className="bg-gray-100 px-2 py-1 rounded text-xs">
                SELECT COUNT(*) WHERE status IN ('PENDENTE', 'EM_PRODUCAO')
              </code>
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {ordensAbertas.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                  <span className="font-medium text-gray-900">{item.cliente}</span>
                  <Badge className="bg-[#003087]">{item.total} ordem</Badge>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Total:</strong> {ordensAbertas.length} clientes com ordens em aberto
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tempo de Entrega */}
      <Card className="border-none shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#003087]" />
            Eficiência de Logística - Tempo Médio de Entrega
          </CardTitle>
          <p className="text-sm text-gray-600 mt-2">
            <code className="bg-gray-100 px-2 py-1 rounded text-xs">
              SELECT AVG(data_entrega_final - data_envio) GROUP BY transportadora
            </code>
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={tempoEntrega}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="transportadora" 
                  angle={-15}
                  textAnchor="end"
                  height={80}
                  tick={{ fontSize: 11 }}
                />
                <YAxis label={{ value: 'Dias', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Bar dataKey="tempo" fill="#0066CC" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>

            <div className="space-y-3">
              {tempoEntrega.map((t, index) => (
                <div key={index} className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                  <div className="font-semibold text-gray-900 mb-2">{t.transportadora}</div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-600">Entregas:</span>
                      <span className="ml-2 font-semibold">{t.entregas}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Tempo médio:</span>
                      <span className="ml-2 font-semibold">{t.tempo} dias</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Conclusões */}
      <Card className="border-none shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
        <CardHeader>
          <CardTitle>Conclusões das Análises</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-[#003087] mb-3">Precificação</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#003087] mt-2 flex-shrink-0" />
                  <span>Aços Especiais têm preço 2.6x maior que média</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#003087] mt-2 flex-shrink-0" />
                  <span>Trefilados apresentam melhor custo-benefício</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#003087] mt-2 flex-shrink-0" />
                  <span>Variação de 260% entre categorias</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#003087] mb-3">Logística</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#003087] mt-2 flex-shrink-0" />
                  <span>Logística Fênix e Tora: 4 dias médios (entregas rápidas)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#003087] mt-2 flex-shrink-0" />
                  <span>Marítima Global: 34 dias (transporte internacional)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#003087] mt-2 flex-shrink-0" />
                  <span>100% das entregas concluídas no prazo</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}