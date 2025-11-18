import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { FileCode, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Queries() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const queries = [
    {
      titulo: 'Preço Médio por Categoria',
      categoria: 'AVG + GROUP BY',
      descricao: 'Calcula o preço médio por tonelada agrupado por categoria de aço',
      sql: `SELECT
    C.nome AS Categoria,
    AVG(P.preco_tonelada) AS Preco_Medio_Ton
FROM
    PRODUTOS_ACO P
JOIN
    CATEGORIAS_ACO C ON P.cd_categoria = C.cd_categoria
GROUP BY
    C.nome`
    },
    {
      titulo: 'Ordens Abertas por Cliente',
      categoria: 'COUNT + IN',
      descricao: 'Conta ordens em status PENDENTE ou EM_PRODUCAO agrupadas por cliente',
      sql: `SELECT
    C.nome AS Nome_Cliente,
    COUNT(O.cd_ordem) AS Total_Ordens_Abertas
FROM
    ORDENS_VENDA O
JOIN
    CLIENTES_CORPORATIVOS C ON O.cd_cliente = C.cd_cliente
WHERE
    O.status_ordem IN ('PENDENTE', 'EM_PRODUCAO')
GROUP BY
    C.nome`
    },
    {
      titulo: 'Produtos Fora de Categorias Principais',
      categoria: 'NOT IN',
      descricao: 'Lista produtos que não pertencem às categorias 10 (Longos) e 20 (Planos)',
      sql: `SELECT
    P.nome AS Nome_Produto,
    P.preco_tonelada,
    C.nome AS Categoria
FROM
    PRODUTOS_ACO P
JOIN
    CATEGORIAS_ACO C ON P.cd_categoria = C.cd_categoria
WHERE
    P.cd_categoria NOT IN (10, 20)`
    },
    {
      titulo: 'Valores Min/Max no Período',
      categoria: 'MIN + MAX + BETWEEN',
      descricao: 'Encontra menor e maior valor de ordem entre 15/10 e 15/11/2025',
      sql: `SELECT
    MIN(valor_total) AS Menor_Valor_Periodo,
    MAX(valor_total) AS Maior_Valor_Periodo
FROM
    ORDENS_VENDA
WHERE
    data_pedido BETWEEN '2025-10-15' AND '2025-11-15'`
    },
    {
      titulo: 'Produtos com Preço Alto e Nome Iniciando com P',
      categoria: 'Comparação + LIKE',
      descricao: 'Filtra produtos com preço >= 5000 e nome começando com "P"',
      sql: `SELECT
    nome,
    preco_tonelada,
    especificacao_norma
FROM
    PRODUTOS_ACO
WHERE
    preco_tonelada >= 5000.00
    AND nome LIKE 'P%'`
    },
    {
      titulo: 'Total de Ordens no Período',
      categoria: 'COUNT + BETWEEN',
      descricao: 'Conta ordens realizadas entre outubro e novembro de 2025',
      sql: `SELECT
    COUNT(cd_ordem) AS Total_Ordens_Feitas_No_Periodo
FROM
    ORDENS_VENDA
WHERE
    data_pedido BETWEEN '2025-10-01' AND '2025-11-30'`
    },
    {
      titulo: 'Min/Max Ordens Abertas',
      categoria: 'MIN + MAX + IN',
      descricao: 'Valores mínimo e máximo de ordens em status aberto',
      sql: `SELECT
    MIN(valor_total) AS Menor_Ordem_Aberta,
    MAX(valor_total) AS Maior_Ordem_Aberta
FROM
    ORDENS_VENDA
WHERE
    status_ordem IN ('PENDENTE', 'EM_PRODUCAO')`
    },
    {
      titulo: 'Eficiência Logística (DESAFIO)',
      categoria: 'Complexa',
      descricao: 'Análise completa de entregas por transportadora com múltiplos JOINs e agregações',
      sql: `SELECT
    T.nome AS Transportadora,
    COUNT(L.cd_logistica) AS Total_Entregas_Concluidas,
    AVG(L.data_entrega_final - L.data_envio) AS Tempo_Medio_Entrega_Dias,
    MAX(O.valor_total) AS Ordem_Mais_Cara_Entregue
FROM
    TRANSPORTADORAS T
JOIN
    LOGISTICA_ENTREGA L ON T.cd_transportadora = L.cd_transportadora
JOIN
    ORDENS_VENDA O ON L.cd_ordem = O.cd_ordem
WHERE
    L.data_entrega_final IS NOT NULL
    AND O.valor_total > 50000.00
GROUP BY
    T.nome
ORDER BY
    Tempo_Medio_Entrega_Dias ASC`
    }
  ];

  const handleCopy = async (sql, index) => {
    await navigator.clipboard.writeText(sql);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const categoriaColors = {
    'AVG + GROUP BY': 'bg-blue-100 text-blue-800',
    'COUNT + IN': 'bg-green-100 text-green-800',
    'NOT IN': 'bg-purple-100 text-purple-800',
    'MIN + MAX + BETWEEN': 'bg-orange-100 text-orange-800',
    'Comparação + LIKE': 'bg-pink-100 text-pink-800',
    'COUNT + BETWEEN': 'bg-cyan-100 text-cyan-800',
    'MIN + MAX + IN': 'bg-yellow-100 text-yellow-800',
    'Complexa': 'bg-red-100 text-red-800'
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-4">
          <FileCode className="w-4 h-4" />
          <span className="text-sm font-semibold">Consultas SQL</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Banco de Queries SQL
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Todas as consultas SQL desenvolvidas para o projeto, organizadas por tipo de operação
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="text-center border-none shadow-lg">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-[#003087] mb-1">{queries.length}</div>
            <div className="text-sm text-gray-600">Queries Implementadas</div>
          </CardContent>
        </Card>
        <Card className="text-center border-none shadow-lg">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-[#003087] mb-1">14</div>
            <div className="text-sm text-gray-600">Tabelas Utilizadas</div>
          </CardContent>
        </Card>
        <Card className="text-center border-none shadow-lg">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-[#003087] mb-1">15+</div>
            <div className="text-sm text-gray-600">JOINs Realizados</div>
          </CardContent>
        </Card>
        <Card className="text-center border-none shadow-lg">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-[#003087] mb-1">8</div>
            <div className="text-sm text-gray-600">Tipos de Operação</div>
          </CardContent>
        </Card>
      </div>

      {/* Queries List */}
      <div className="space-y-4">
        {queries.map((query, index) => (
          <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <CardTitle className="text-lg">{query.titulo}</CardTitle>
                    <Badge className={categoriaColors[query.categoria]}>
                      {query.categoria}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{query.descricao}</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleCopy(query.sql, index)}
                  className="flex-shrink-0"
                >
                  {copiedIndex === index ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copiar
                    </>
                  )}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-green-400 font-mono leading-relaxed">
                  {query.sql}
                </pre>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary */}
      <Card className="border-none shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
        <CardHeader>
          <CardTitle>Operações SQL Implementadas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.keys(categoriaColors).map((cat) => (
              <div key={cat} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                <Badge className={categoriaColors[cat]}>{cat}</Badge>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-white rounded-lg">
            <h4 className="font-bold text-gray-900 mb-2">Conceitos Aplicados:</h4>
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#003087] font-bold">•</span>
                <span>Funções Agregadas (AVG, COUNT, MIN, MAX)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#003087] font-bold">•</span>
                <span>Agrupamento com GROUP BY</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#003087] font-bold">•</span>
                <span>Filtros com WHERE, IN, NOT IN, BETWEEN</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#003087] font-bold">•</span>
                <span>Padrões com LIKE</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#003087] font-bold">•</span>
                <span>Múltiplos JOINs entre tabelas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#003087] font-bold">•</span>
                <span>Ordenação com ORDER BY</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}