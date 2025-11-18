import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Database, Link as LinkIcon, Table, Key } from 'lucide-react';

export default function ModeloDados() {
  const tabelas = [
    {
      nome: 'CLIENTES_CORPORATIVOS',
      descricao: 'Dados dos clientes B2B',
      atributos: ['cd_cliente (PK)', 'nome', 'cnpj', 'email_contato', 'telefone', 'segmento', 'data_cadastro'],
      categoria: 'core'
    },
    {
      nome: 'ENDERECOS_CLIENTE',
      descricao: 'Endereços de entrega e faturamento',
      atributos: ['cd_endereco (PK)', 'cd_cliente (FK)', 'rua', 'numero', 'cidade', 'estado', 'cep', 'tipo_endereco'],
      categoria: 'support'
    },
    {
      nome: 'FORNECEDORES_MP',
      descricao: 'Fornecedores de matéria-prima',
      atributos: ['cd_fornecedor (PK)', 'nome', 'cnpj', 'email', 'telefone', 'tipo_material_fornecido'],
      categoria: 'support'
    },
    {
      nome: 'TRANSPORTADORAS',
      descricao: 'Empresas de logística',
      atributos: ['cd_transportadora (PK)', 'nome', 'cnpj', 'telefone'],
      categoria: 'support'
    },
    {
      nome: 'CATEGORIAS_ACO',
      descricao: 'Categorias de produtos siderúrgicos',
      atributos: ['cd_categoria (PK)', 'nome', 'descricao'],
      categoria: 'catalog'
    },
    {
      nome: 'UNIDADES_FABRIS',
      descricao: 'Fábricas e centros de distribuição',
      atributos: ['cd_unidade (PK)', 'nome_fabrica', 'cidade', 'estado', 'capacidade_anual_ton'],
      categoria: 'core'
    },
    {
      nome: 'PRODUTOS_ACO',
      descricao: 'Catálogo de produtos',
      atributos: ['cd_produto (PK)', 'cd_categoria (FK)', 'nome', 'descricao', 'especificacao_norma', 'preco_tonelada', 'peso_unitario', 'unidade_medida', 'ativo'],
      categoria: 'catalog'
    },
    {
      nome: 'LOTES_PRODUCAO',
      descricao: 'Controle de produção',
      atributos: ['cd_lote_producao (PK)', 'cd_produto (FK)', 'cd_unidade (FK)', 'data_producao', 'quantidade_ton'],
      categoria: 'operation'
    },
    {
      nome: 'LAUDOS_QUALIDADE',
      descricao: 'Certificados de qualidade',
      atributos: ['cd_laudo (PK)', 'cd_lote_producao (FK)', 'resultado', 'data_analise', 'teor_carbono', 'observacoes'],
      categoria: 'operation'
    },
    {
      nome: 'ORDENS_VENDA',
      descricao: 'Pedidos de clientes',
      atributos: ['cd_ordem (PK)', 'cd_cliente (FK)', 'cd_unidade_saida (FK)', 'cd_endereco_entrega (FK)', 'data_pedido', 'data_entrega_prevista', 'valor_total', 'status_ordem', 'tipo_contrato', 'condicao_pagamento', 'data_faturamento', 'cd_vendedor'],
      categoria: 'core'
    },
    {
      nome: 'ITENS_ORDEM',
      descricao: 'Detalhamento dos pedidos',
      atributos: ['cd_item_ordem (PK)', 'cd_ordem (FK)', 'cd_produto (FK)', 'quantidade', 'preco_unitario_negociado'],
      categoria: 'transaction'
    },
    {
      nome: 'ESTOQUE_PRODUCAO',
      descricao: 'Controle de estoque por unidade',
      atributos: ['cd_estoque (PK)', 'cd_produto (FK)', 'cd_unidade (FK)', 'quantidade_atual', 'localizacao_armazem', 'data_ultima_movimentacao'],
      categoria: 'operation'
    },
    {
      nome: 'FATURAMENTO',
      descricao: 'Gestão financeira dos pedidos',
      atributos: ['cd_faturamento (PK)', 'cd_ordem (FK)', 'valor', 'metodo', 'status', 'data_vencimento', 'data_liquidacao'],
      categoria: 'financial'
    },
    {
      nome: 'LOGISTICA_ENTREGA',
      descricao: 'Rastreamento de entregas',
      atributos: ['cd_logistica (PK)', 'cd_ordem (FK)', 'cd_transportadora (FK)', 'codigo_rastreamento', 'data_envio', 'data_entrega_prevista', 'data_entrega_final'],
      categoria: 'operation'
    }
  ];

  const relacionamentos = [
    { de: 'ENDERECOS_CLIENTE', para: 'CLIENTES_CORPORATIVOS', tipo: 'N:1' },
    { de: 'PRODUTOS_ACO', para: 'CATEGORIAS_ACO', tipo: 'N:1' },
    { de: 'LOTES_PRODUCAO', para: 'PRODUTOS_ACO', tipo: 'N:1' },
    { de: 'LOTES_PRODUCAO', para: 'UNIDADES_FABRIS', tipo: 'N:1' },
    { de: 'LAUDOS_QUALIDADE', para: 'LOTES_PRODUCAO', tipo: '1:1' },
    { de: 'ORDENS_VENDA', para: 'CLIENTES_CORPORATIVOS', tipo: 'N:1' },
    { de: 'ORDENS_VENDA', para: 'UNIDADES_FABRIS', tipo: 'N:1' },
    { de: 'ORDENS_VENDA', para: 'ENDERECOS_CLIENTE', tipo: 'N:1' },
    { de: 'ITENS_ORDEM', para: 'ORDENS_VENDA', tipo: 'N:1' },
    { de: 'ITENS_ORDEM', para: 'PRODUTOS_ACO', tipo: 'N:1' },
    { de: 'ESTOQUE_PRODUCAO', para: 'PRODUTOS_ACO', tipo: 'N:1' },
    { de: 'ESTOQUE_PRODUCAO', para: 'UNIDADES_FABRIS', tipo: 'N:1' },
    { de: 'FATURAMENTO', para: 'ORDENS_VENDA', tipo: '1:1' },
    { de: 'LOGISTICA_ENTREGA', para: 'ORDENS_VENDA', tipo: '1:1' },
    { de: 'LOGISTICA_ENTREGA', para: 'TRANSPORTADORAS', tipo: 'N:1' }
  ];

  const categoriaColors = {
    core: 'bg-blue-100 text-blue-800 border-blue-300',
    catalog: 'bg-green-100 text-green-800 border-green-300',
    operation: 'bg-purple-100 text-purple-800 border-purple-300',
    transaction: 'bg-orange-100 text-orange-800 border-orange-300',
    financial: 'bg-red-100 text-red-800 border-red-300',
    support: 'bg-gray-100 text-gray-800 border-gray-300'
  };

  const categoriaLabels = {
    core: 'Principal',
    catalog: 'Catálogo',
    operation: 'Operacional',
    transaction: 'Transacional',
    financial: 'Financeiro',
    support: 'Suporte'
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4">
          <Database className="w-4 h-4" />
          <span className="text-sm font-semibold">Modelo Entidade-Relacionamento</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Estrutura do Banco de Dados
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          14 tabelas relacionadas representando o sistema completo de gestão da Gerdau, 
          desde clientes e produtos até logística e faturamento.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="text-center border-none shadow-lg">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-[#003087] mb-1">14</div>
            <div className="text-sm text-gray-600">Tabelas</div>
          </CardContent>
        </Card>
        <Card className="text-center border-none shadow-lg">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-[#003087] mb-1">15</div>
            <div className="text-sm text-gray-600">Relacionamentos</div>
          </CardContent>
        </Card>
        <Card className="text-center border-none shadow-lg">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-[#003087] mb-1">100+</div>
            <div className="text-sm text-gray-600">Atributos</div>
          </CardContent>
        </Card>
        <Card className="text-center border-none shadow-lg">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-[#003087] mb-1">6</div>
            <div className="text-sm text-gray-600">Categorias</div>
          </CardContent>
        </Card>
      </div>

      {/* Tabelas */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Table className="w-6 h-6 text-[#003087]" />
          Tabelas do Sistema
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tabelas.map((tabela, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <CardTitle className="text-sm font-mono text-[#003087]">
                    {tabela.nome}
                  </CardTitle>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${categoriaColors[tabela.categoria]} border`}
                  >
                    {categoriaLabels[tabela.categoria]}
                  </Badge>
                </div>
                <p className="text-xs text-gray-600">{tabela.descricao}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  {tabela.atributos.slice(0, 5).map((attr, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs">
                      {attr.includes('PK') ? (
                        <Key className="w-3 h-3 text-yellow-600 flex-shrink-0" />
                      ) : attr.includes('FK') ? (
                        <LinkIcon className="w-3 h-3 text-blue-600 flex-shrink-0" />
                      ) : (
                        <div className="w-3 h-3 flex-shrink-0 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                        </div>
                      )}
                      <span className="text-gray-700 font-mono text-xs truncate">
                        {attr}
                      </span>
                    </div>
                  ))}
                  {tabela.atributos.length > 5 && (
                    <div className="text-xs text-gray-500 italic pl-5">
                      +{tabela.atributos.length - 5} atributos
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Relacionamentos */}
      <Card className="border-none shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <LinkIcon className="w-6 h-6 text-[#003087]" />
            Relacionamentos Entre Tabelas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {relacionamentos.map((rel, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200"
              >
                <div className="flex-1">
                  <div className="text-xs font-mono text-gray-700 mb-1">
                    {rel.de}
                  </div>
                  <div className="flex items-center gap-2">
                    <LinkIcon className="w-3 h-3 text-blue-600" />
                    <Badge variant="outline" className="text-xs bg-white">
                      {rel.tipo}
                    </Badge>
                  </div>
                  <div className="text-xs font-mono text-gray-700 mt-1">
                    {rel.para}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Legenda */}
      <Card className="border-none shadow-lg bg-gradient-to-br from-slate-50 to-blue-50">
        <CardHeader>
          <CardTitle className="text-lg">Legenda</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-sm mb-3 text-gray-900">Tipos de Chave</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Key className="w-4 h-4 text-yellow-600" />
                  <span className="text-gray-700">PK = Chave Primária</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <LinkIcon className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">FK = Chave Estrangeira</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3 text-gray-900">Cardinalidade</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <div>1:1 = Um para Um</div>
                <div>N:1 = Muitos para Um</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visualizações Interativas - Preview Completo */}
      <Card className="border-none shadow-xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="flex items-center justify-between">
            <CardTitle className="text-white flex items-center gap-2">
              <Database className="w-5 h-5" />
              Modelagem 2D Interativa
            </CardTitle>
            <a
              href="https://schema-weaver-.base44.app/diagrameditor?project=691c6ef0b608ec05317947a9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200 text-sm flex items-center gap-1 transition-colors"
            >
              Abrir em tela cheia
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          <p className="text-blue-100 text-sm mt-2">
            Diagrama ER completo com todas as 14 tabelas e relacionamentos - Use o mouse para navegar
          </p>
        </CardHeader>
        <CardContent className="p-0">
          <div className="relative w-full" style={{ height: '600px' }}>
            <iframe
              src="https://schema-weaver-.base44.app/diagrameditor?project=691c6ef0b608ec05317947a9"
              className="w-full h-full border-0"
              title="Modelagem 2D do Banco de Dados Gerdau"
              allow="fullscreen"
            />
            <div className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4" />
                <span className="text-sm font-semibold">Diagrama 2D</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-none shadow-xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-700">
          <div className="flex items-center justify-between">
            <CardTitle className="text-white flex items-center gap-2">
              <Database className="w-5 h-5" />
              Modelagem 3D Interativa
            </CardTitle>
            <a
              href="https://schema-weaver-.base44.app/diagrameditor?project=691c6ef0b608ec05317947a9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-200 text-sm flex items-center gap-1 transition-colors"
            >
              Abrir em tela cheia
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          <p className="text-purple-100 text-sm mt-2">
            Visualização tridimensional imersiva - Arraste para rotacionar e explorar o modelo em 3D
          </p>
        </CardHeader>
        <CardContent className="p-0">
          <div className="relative w-full" style={{ height: '600px' }}>
            <iframe
              src="https://schema-weaver-.base44.app/diagrameditor?project=691c6ef0b608ec05317947a9"
              className="w-full h-full border-0"
              title="Modelagem 3D do Banco de Dados Gerdau"
              allow="fullscreen"
            />
            <div className="absolute top-4 left-4 bg-purple-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4" />
                <span className="text-sm font-semibold">Diagrama 3D</span>
                <div className="bg-white text-purple-600 text-xs font-bold px-2 py-0.5 rounded-full ml-1">
                  3D
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Info sobre as modelagens */}
      <Card className="border-none shadow-lg bg-gradient-to-br from-green-50 to-blue-50">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-green-100 rounded-xl">
              <Database className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Como Interagir com as Modelagens</h3>
              <p className="text-gray-700 mb-3">
                As visualizações acima são totalmente interativas e podem ser exploradas diretamente nesta página. 
                Use o mouse ou toque para navegar, dar zoom e explorar cada detalhe do modelo de dados.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                    <Database className="w-4 h-4" />
                    Navegação 2D
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>🖱️ Arraste para mover o diagrama</li>
                    <li>🔍 Scroll para zoom in/out</li>
                    <li>👆 Clique nas tabelas para detalhes</li>
                    <li>↔️ Visualize todos os relacionamentos</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                    <Database className="w-4 h-4" />
                    Navegação 3D
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>🔄 Arraste para rotacionar em 3D</li>
                    <li>🎯 Explore diferentes ângulos</li>
                    <li>📐 Visualize profundidade das relações</li>
                    <li>🌟 Experiência imersiva completa</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-100 border border-blue-300 rounded-lg">
                <p className="text-sm text-blue-900">
                  💡 <strong>Dica:</strong> Para uma visualização em tela cheia, clique no botão "Abrir em tela cheia" 
                  no canto superior direito de cada modelagem.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}