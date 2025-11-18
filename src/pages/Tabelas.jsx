import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Database, CheckCircle } from 'lucide-react';

export default function Tabelas() {
  const dadosTabelas = {
    clientes: [
      { cd: 1, nome: 'Construtora Alfa', cnpj: '01.111.111/0001-01', email: 'alfa@construtora.com.br', telefone: '(11) 9876-5432', segmento: 'Construção Civil' },
      { cd: 2, nome: 'Indústria Beta', cnpj: '02.222.222/0001-02', email: 'beta_supri@industria.com.br', telefone: '(21) 1234-5678', segmento: 'Automotiva' },
      { cd: 3, nome: 'Metalúrgica Gama', cnpj: '03.333.333/0001-03', email: 'compras@gama.com.br', telefone: '(31) 5555-4444', segmento: 'Fabricação' },
      { cd: 4, nome: 'Exportadora Delta', cnpj: '04.444.444/0001-04', email: 'exporta@delta.com', telefone: '(81) 9999-1111', segmento: 'Exportação' },
      { cd: 5, nome: 'Empreendimentos Sul', cnpj: '05.555.555/0001-05', email: 'compras@empreendimento.com', telefone: '(51) 3333-2222', segmento: 'Construção Civil' },
      { cd: 6, nome: 'Comércio do Nordeste', cnpj: '06.666.666/0001-06', email: 'comercial@nordeste.com.br', telefone: '(85) 4444-1111', segmento: 'Distribuição' },
      { cd: 7, nome: 'Montagens do Centro', cnpj: '07.777.777/0001-07', email: 'contato@montagenscentro.com.br', telefone: '(62) 7777-6666', segmento: 'Infraestrutura' }
    ],
    enderecos: [
      { cd: 1, cd_cliente: 1, rua: 'Rua das Obras', numero: '100', cidade: 'São Paulo', estado: 'SP', cep: '01000-000', tipo: 'ENTREGA' },
      { cd: 2, cd_cliente: 1, rua: 'Av. Faturamento', numero: '50', cidade: 'São Paulo', estado: 'SP', cep: '01000-111', tipo: 'FATURAMENTO' },
      { cd: 3, cd_cliente: 2, rua: 'Rua Industrial', numero: '300', cidade: 'Rio de Janeiro', estado: 'RJ', cep: '20000-000', tipo: 'ENTREGA' },
      { cd: 4, cd_cliente: 3, rua: 'Rua Metal', numero: '5', cidade: 'Belo Horizonte', estado: 'MG', cep: '30000-000', tipo: 'ENTREGA' },
      { cd: 5, cd_cliente: 5, rua: 'Av. Principal', numero: '700', cidade: 'Porto Alegre', estado: 'RS', cep: '90000-000', tipo: 'ENTREGA' },
      { cd: 6, cd_cliente: 6, rua: 'Rua da Logística', numero: '45', cidade: 'Fortaleza', estado: 'CE', cep: '60000-000', tipo: 'ENTREGA' },
      { cd: 7, cd_cliente: 7, rua: 'Av. Goiás', numero: '1200', cidade: 'Goiânia', estado: 'GO', cep: '74000-000', tipo: 'ENTREGA' }
    ],
    fornecedores: [
      { cd: 10, nome: 'Mineradora Terra', cnpj: '10.111.111/0001-10', email: 'vendas@terra.com', telefone: '(31) 98888-7777', tipo_material: 'Minério de Ferro' },
      { cd: 11, nome: 'Sucatas Brasil', cnpj: '11.222.222/0001-11', email: 'sucatas@br.com', telefone: '(11) 99999-0000', tipo_material: 'Sucata Metálica' },
      { cd: 12, nome: 'Química Pura', cnpj: '12.333.333/0001-12', email: 'vendas@quimica.com', telefone: '(21) 77777-6666', tipo_material: 'Ligas de Cromo' },
      { cd: 13, nome: 'Refratários Norte', cnpj: '13.444.444/0001-13', email: 'compras@norte.com', telefone: '(92) 55555-4444', tipo_material: 'Material Refratário' },
      { cd: 14, nome: 'Carbono S/A', cnpj: '14.555.555/0001-14', email: 'contato@carbono.com', telefone: '(11) 33333-2222', tipo_material: 'Eletrodos de Grafite' },
      { cd: 15, nome: 'Gás Industrial', cnpj: '15.666.666/0001-15', email: 'gas@ind.com', telefone: '(19) 11111-0000', tipo_material: 'Oxigênio Industrial' },
      { cd: 16, nome: 'Ligas e Metais Finos', cnpj: '16.777.777/0001-16', email: 'ligas@metaisfinos.com', telefone: '(11) 98765-1234', tipo_material: 'Ligas de Níquel' }
    ],
    transportadoras: [
      { cd: 500, nome: 'Logística Fênix', cnpj: '50.000.000/0001-50', telefone: '(11) 5000-0000' },
      { cd: 501, nome: 'Via Rápida Cargas', cnpj: '50.001.000/0001-51', telefone: '(21) 5001-0000' },
      { cd: 502, nome: 'Expresso Nordestino', cnpj: '50.002.000/0001-52', telefone: '(85) 3000-0000' },
      { cd: 503, nome: 'Tora Logística', cnpj: '50.003.000/0001-53', telefone: '(31) 2000-0000' },
      { cd: 504, nome: 'Expresso Central', cnpj: '50.004.000/0001-54', telefone: '(62) 9999-8888' },
      { cd: 505, nome: 'Marítima Global', cnpj: '50.005.000/0001-55', telefone: '(21) 1000-0000' },
      { cd: 506, nome: 'Rodovias do Sul', cnpj: '50.006.000/0001-56', telefone: '(51) 2222-3333' }
    ],
    categorias: [
      { cd: 10, nome: 'Aços Longos', descricao: 'Vergalhões, barras e perfis' },
      { cd: 20, nome: 'Aços Planos', descricao: 'Chapas e bobinas' },
      { cd: 30, nome: 'Aços Especiais', descricao: 'Materiais com ligas especiais' },
      { cd: 40, nome: 'Trefilados', descricao: 'Fios e telas de aço' },
      { cd: 50, nome: 'Componentes Siderúrgicos', descricao: 'Peças semi-prontas' },
      { cd: 60, nome: 'Sucatas', descricao: 'Materiais para reciclagem' },
      { cd: 70, nome: 'Tubos', descricao: 'Tubos de condução e estruturais' }
    ],
    produtos: [
      { cd: 1001, categoria: 'Aços Longos', nome: 'Vergalhão CA-50', norma: 'ABNT NBR 7480', preco: 4500.00, peso: 1000.00, unidade: 'TON' },
      { cd: 1002, categoria: 'Aços Longos', nome: 'Perfil I 150mm', norma: 'ASTM A36', preco: 5200.00, peso: 1500.00, unidade: 'TON' },
      { cd: 2001, categoria: 'Aços Planos', nome: 'Chapa Fina Frio', norma: 'SAE 1008', preco: 6100.00, peso: 5000.00, unidade: 'TON' },
      { cd: 2002, categoria: 'Aços Planos', nome: 'Bobina Laminada', norma: 'SAE 1020', preco: 5800.00, peso: 10000.00, unidade: 'TON' },
      { cd: 3001, categoria: 'Aços Especiais', nome: 'Aço Inox 304', norma: 'ASTM A240', preco: 12500.00, peso: 2000.00, unidade: 'TON' },
      { cd: 4001, categoria: 'Trefilados', nome: 'Fio Máquina 6mm', norma: 'SAE 1006', preco: 4800.00, peso: 50.00, unidade: 'KG' },
      { cd: 7001, categoria: 'Tubos', nome: 'Tubo Estrutural', norma: 'NBR 6591', preco: 5500.00, peso: 100.00, unidade: 'MTS' }
    ],
    unidades: [
      { cd: 100, nome: 'Usina de Ouro Branco', cidade: 'Ouro Branco', estado: 'MG', capacidade: 4000000 },
      { cd: 200, nome: 'Centro de Distribuição RJ', cidade: 'Duque de Caxias', estado: 'RJ', capacidade: 500000 },
      { cd: 300, nome: 'Unidade Ceará', cidade: 'Caucaia', estado: 'CE', capacidade: 1500000 },
      { cd: 400, nome: 'Unidade Minas Gerais 2', cidade: 'Divinópolis', estado: 'MG', capacidade: 1800000 },
      { cd: 500, nome: 'Unidade Pernambuco', cidade: 'Recife', estado: 'PE', capacidade: 900000 },
      { cd: 600, nome: 'Centro de Serviços SP', cidade: 'São Paulo', estado: 'SP', capacidade: 300000 },
      { cd: 700, nome: 'Usina de Charqueadas', cidade: 'Charqueadas', estado: 'RS', capacidade: 2500000 }
    ],
    lotes: [
      { cd: 10, cd_produto: 1001, cd_unidade: 100, data: '2025-08-01', quantidade: 500.00 },
      { cd: 11, cd_produto: 2001, cd_unidade: 200, data: '2025-09-05', quantidade: 100.00 },
      { cd: 12, cd_produto: 1001, cd_unidade: 400, data: '2025-09-10', quantidade: 800.00 },
      { cd: 13, cd_produto: 2002, cd_unidade: 300, data: '2025-10-01', quantidade: 1500.00 },
      { cd: 14, cd_produto: 3001, cd_unidade: 100, data: '2025-10-15', quantidade: 300.00 },
      { cd: 15, cd_produto: 7001, cd_unidade: 700, data: '2025-10-25', quantidade: 120.00 },
      { cd: 16, cd_produto: 4001, cd_unidade: 500, data: '2025-11-01', quantidade: 90.00 }
    ],
    laudos: [
      { cd: 100, cd_lote: 10, resultado: 'Aprovado', data: '2025-08-05', teor_carbono: 0.25, obs: 'Conforme norma CA-50.' },
      { cd: 101, cd_lote: 11, resultado: 'Aprovado', data: '2025-09-07', teor_carbono: 0.07, obs: 'Adequado para dobramento.' },
      { cd: 102, cd_lote: 12, resultado: 'Aprovado', data: '2025-09-12', teor_carbono: 0.24, obs: null },
      { cd: 103, cd_lote: 13, resultado: 'Aprovado', data: '2025-10-03', teor_carbono: 0.18, obs: 'Alta resistência.' },
      { cd: 104, cd_lote: 14, resultado: 'Reprovado', data: '2025-10-18', teor_carbono: 0.01, obs: 'Teor de cromo abaixo do especificado.' },
      { cd: 105, cd_lote: 15, resultado: 'Aprovado', data: '2025-10-28', teor_carbono: 0.20, obs: null },
      { cd: 106, cd_lote: 16, resultado: 'Aprovado', data: '2025-11-03', teor_carbono: 0.05, obs: 'Baixo carbono, ideal para trefilação.' }
    ],
    ordens: [
      { cd: 101, cliente: 'Construtora Alfa', valor: 90000.00, status: 'ENTREGUE', data: '2025-10-01', contrato: 'SPOT', pagamento: '30 DIAS' },
      { cd: 102, cliente: 'Indústria Beta', valor: 300000.00, status: 'EM_PRODUCAO', data: '2025-10-15', contrato: 'CONTRATO ANUAL', pagamento: '45/60 DIAS' },
      { cd: 103, cliente: 'Metalúrgica Gama', valor: 12200.00, status: 'PENDENTE', data: '2025-10-20', contrato: 'SPOT', pagamento: 'À VISTA' },
      { cd: 104, cliente: 'Exportadora Delta', valor: 500000.00, status: 'ENTREGUE', data: '2025-11-10', contrato: 'EXPORTACAO', pagamento: '90 DIAS' },
      { cd: 105, cliente: 'Construtora Alfa', valor: 40000.00, status: 'ENTREGUE', data: '2025-11-15', contrato: 'SPOT', pagamento: '30 DIAS' },
      { cd: 106, cliente: 'Empreendimentos Sul', valor: 150000.00, status: 'PENDENTE', data: '2025-11-18', contrato: 'SPOT', pagamento: '60 DIAS' },
      { cd: 107, cliente: 'Montagens do Centro', valor: 48000.00, status: 'EM_PRODUCAO', data: '2025-11-18', contrato: 'SPOT', pagamento: '30/60 DIAS' }
    ],
    itens: [
      { cd: 1, cd_ordem: 101, cd_produto: 1001, quantidade: 20.00, preco_negociado: 4500.00 },
      { cd: 2, cd_ordem: 102, cd_produto: 3001, quantidade: 10.00, preco_negociado: 12000.00 },
      { cd: 3, cd_ordem: 102, cd_produto: 2002, quantidade: 40.00, preco_negociado: 4500.00 },
      { cd: 4, cd_ordem: 103, cd_produto: 2001, quantidade: 2.00, preco_negociado: 6100.00 },
      { cd: 5, cd_ordem: 104, cd_produto: 1002, quantidade: 90.00, preco_negociado: 5555.55 },
      { cd: 6, cd_ordem: 105, cd_produto: 1001, quantidade: 8.89, preco_negociado: 4500.00 },
      { cd: 7, cd_ordem: 106, cd_produto: 7001, quantidade: 30.00, preco_negociado: 5000.00 }
    ],
    estoque: [
      { cd: 1, cd_produto: 1001, cd_unidade: 100, quantidade: 5000.00, localizacao: 'ARMAZEM A1', data: '2025-11-10' },
      { cd: 2, cd_produto: 1002, cd_unidade: 100, quantidade: 3200.00, localizacao: 'ARMAZEM A2', data: '2025-11-15' },
      { cd: 3, cd_produto: 2001, cd_unidade: 200, quantidade: 800.00, localizacao: 'CD RJ 1', data: '2025-10-25' },
      { cd: 4, cd_produto: 2002, cd_unidade: 300, quantidade: 12000.00, localizacao: 'CD CE 3', data: '2025-11-01' },
      { cd: 5, cd_produto: 3001, cd_unidade: 100, quantidade: 1500.00, localizacao: 'ARMAZEM B1', data: '2025-11-11' },
      { cd: 6, cd_produto: 7001, cd_unidade: 700, quantidade: 1000.00, localizacao: 'AREA TUBOS', data: '2025-11-16' },
      { cd: 7, cd_produto: 4001, cd_unidade: 500, quantidade: 1500.00, localizacao: 'AREA TREFILADOS', data: '2025-11-17' }
    ],
    faturamento: [
      { cd: 201, cd_ordem: 101, valor: 90000.00, metodo: 'BOLETO', status: 'PAGO', vencimento: '2025-11-01', liquidacao: '2025-11-01' },
      { cd: 202, cd_ordem: 102, valor: 300000.00, metodo: 'DUPLICATA', status: 'PENDENTE', vencimento: '2025-12-15', liquidacao: null },
      { cd: 203, cd_ordem: 103, valor: 12200.00, metodo: 'TED', status: 'PAGO', vencimento: '2025-10-21', liquidacao: '2025-10-20' },
      { cd: 204, cd_ordem: 104, valor: 500000.00, metodo: 'CARTA CREDITO', status: 'PAGO', vencimento: '2025-12-05', liquidacao: '2025-12-04' },
      { cd: 205, cd_ordem: 105, valor: 40000.00, metodo: 'BOLETO', status: 'PAGO', vencimento: '2025-12-01', liquidacao: '2025-12-01' },
      { cd: 206, cd_ordem: 106, valor: 150000.00, metodo: 'DUPLICATA', status: 'PENDENTE', vencimento: '2026-01-18', liquidacao: null },
      { cd: 207, cd_ordem: 107, valor: 48000.00, metodo: 'BOLETO', status: 'PENDENTE', vencimento: '2026-01-01', liquidacao: null }
    ],
    logistica: [
      { cd: 301, cd_ordem: 101, transportadora: 'Logística Fênix', rastreamento: 'BR123456', envio: '2025-10-05', previsao: '2025-10-10', entrega: '2025-10-09' },
      { cd: 302, cd_ordem: 102, transportadora: 'Via Rápida Cargas', rastreamento: 'BR987654', envio: '2025-11-01', previsao: '2025-11-20', entrega: null },
      { cd: 303, cd_ordem: 103, transportadora: 'Logística Fênix', rastreamento: 'BR111222', envio: '2025-10-22', previsao: '2025-10-25', entrega: '2025-10-24' },
      { cd: 304, cd_ordem: 104, transportadora: 'Marítima Global', rastreamento: 'SHIP004', envio: '2025-11-15', previsao: '2025-12-20', entrega: '2025-12-19' },
      { cd: 305, cd_ordem: 105, transportadora: 'Tora Logística', rastreamento: 'MG001', envio: '2025-11-20', previsao: '2025-11-25', entrega: '2025-11-24' },
      { cd: 306, cd_ordem: 106, transportadora: 'Rodovias do Sul', rastreamento: 'RS4455', envio: null, previsao: '2025-12-01', entrega: null },
      { cd: 307, cd_ordem: 107, transportadora: 'Expresso Nordestino', rastreamento: 'CE3322', envio: '2025-11-20', previsao: '2025-11-25', entrega: null }
    ]
  };

  const statusColors = {
    'ENTREGUE': 'bg-green-100 text-green-800',
    'EM_PRODUCAO': 'bg-blue-100 text-blue-800',
    'PENDENTE': 'bg-yellow-100 text-yellow-800'
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4">
          <Database className="w-4 h-4" />
          <span className="text-sm font-semibold">Dados Inseridos</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Visualização dos Dados
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore os dados inseridos nas principais tabelas do sistema através dos comandos INSERT
        </p>
      </div>

      {/* Tabs */}
      <Card className="border-none shadow-xl">
        <Tabs defaultValue="clientes" className="w-full">
          <CardHeader>
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
              <TabsTrigger value="clientes" className="text-xs md:text-sm">Clientes</TabsTrigger>
              <TabsTrigger value="enderecos" className="text-xs md:text-sm">Endereços</TabsTrigger>
              <TabsTrigger value="fornecedores" className="text-xs md:text-sm">Fornecedores</TabsTrigger>
              <TabsTrigger value="transportadoras" className="text-xs md:text-sm">Transportadoras</TabsTrigger>
              <TabsTrigger value="categorias" className="text-xs md:text-sm">Categorias</TabsTrigger>
              <TabsTrigger value="unidades" className="text-xs md:text-sm">Unidades</TabsTrigger>
              <TabsTrigger value="produtos" className="text-xs md:text-sm">Produtos</TabsTrigger>
              <TabsTrigger value="lotes" className="text-xs md:text-sm">Lotes</TabsTrigger>
              <TabsTrigger value="laudos" className="text-xs md:text-sm">Laudos</TabsTrigger>
              <TabsTrigger value="ordens" className="text-xs md:text-sm">Ordens</TabsTrigger>
              <TabsTrigger value="itens" className="text-xs md:text-sm">Itens Ordem</TabsTrigger>
              <TabsTrigger value="estoque" className="text-xs md:text-sm">Estoque</TabsTrigger>
              <TabsTrigger value="faturamento" className="text-xs md:text-sm">Faturamento</TabsTrigger>
              <TabsTrigger value="logistica" className="text-xs md:text-sm">Logística</TabsTrigger>
            </TabsList>
          </CardHeader>

          <CardContent>
            {/* Clientes */}
            <TabsContent value="clientes" className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Clientes Corporativos</h3>
                <Badge className="bg-[#003087]">{dadosTabelas.clientes.length} registros</Badge>
              </div>
              <div className="overflow-x-auto rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead>Código</TableHead>
                      <TableHead>Nome</TableHead>
                      <TableHead>CNPJ</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Telefone</TableHead>
                      <TableHead>Segmento</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dadosTabelas.clientes.map((cliente) => (
                      <TableRow key={cliente.cd}>
                        <TableCell className="font-mono">{cliente.cd}</TableCell>
                        <TableCell className="font-medium">{cliente.nome}</TableCell>
                        <TableCell className="font-mono text-sm">{cliente.cnpj}</TableCell>
                        <TableCell className="text-sm">{cliente.email}</TableCell>
                        <TableCell className="text-sm">{cliente.telefone}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{cliente.segmento}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            {/* Endereços */}
            <TabsContent value="enderecos" className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Endereços de Clientes</h3>
                <Badge className="bg-[#003087]">{dadosTabelas.enderecos.length} registros</Badge>
              </div>
              <div className="overflow-x-auto rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead>Código</TableHead>
                      <TableHead>Cliente</TableHead>
                      <TableHead>Endereço</TableHead>
                      <TableHead>Cidade/Estado</TableHead>
                      <TableHead>CEP</TableHead>
                      <TableHead>Tipo</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dadosTabelas.enderecos.map((end) => (
                      <TableRow key={end.cd}>
                        <TableCell className="font-mono">{end.cd}</TableCell>
                        <TableCell className="font-mono text-sm">{end.cd_cliente}</TableCell>
                        <TableCell>{end.rua}, {end.numero}</TableCell>
                        <TableCell>{end.cidade}/{end.estado}</TableCell>
                        <TableCell className="font-mono text-sm">{end.cep}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{end.tipo}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            {/* Fornecedores */}
            <TabsContent value="fornecedores" className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Fornecedores de Matéria-Prima</h3>
                <Badge className="bg-[#003087]">{dadosTabelas.fornecedores.length} registros</Badge>
              </div>
              <div className="overflow-x-auto rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead>Código</TableHead>
                      <TableHead>Nome</TableHead>
                      <TableHead>CNPJ</TableHead>
                      <TableHead>Telefone</TableHead>
                      <TableHead>Material Fornecido</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dadosTabelas.fornecedores.map((forn) => (
                      <TableRow key={forn.cd}>
                        <TableCell className="font-mono">{forn.cd}</TableCell>
                        <TableCell className="font-medium">{forn.nome}</TableCell>
                        <TableCell className="font-mono text-sm">{forn.cnpj}</TableCell>
                        <TableCell className="text-sm">{forn.telefone}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{forn.tipo_material}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            {/* Transportadoras */}
            <TabsContent value="transportadoras" className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Transportadoras</h3>
                <Badge className="bg-[#003087]">{dadosTabelas.transportadoras.length} registros</Badge>
              </div>
              <div className="overflow-x-auto rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead>Código</TableHead>
                      <TableHead>Nome</TableHead>
                      <TableHead>CNPJ</TableHead>
                      <TableHead>Telefone</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dadosTabelas.transportadoras.map((trans) => (
                      <TableRow key={trans.cd}>
                        <TableCell className="font-mono">{trans.cd}</TableCell>
                        <TableCell className="font-medium">{trans.nome}</TableCell>
                        <TableCell className="font-mono text-sm">{trans.cnpj}</TableCell>
                        <TableCell className="text-sm">{trans.telefone}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            {/* Categorias */}
            <TabsContent value="categorias" className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Categorias de Aço</h3>
                <Badge className="bg-[#003087]">{dadosTabelas.categorias.length} registros</Badge>
              </div>
              <div className="overflow-x-auto rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead>Código</TableHead>
                      <TableHead>Nome</TableHead>
                      <TableHead>Descrição</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dadosTabelas.categorias.map((cat) => (
                      <TableRow key={cat.cd}>
                        <TableCell className="font-mono">{cat.cd}</TableCell>
                        <TableCell className="font-medium">{cat.nome}</TableCell>
                        <TableCell className="text-sm">{cat.descricao}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            {/* Produtos */}
            <TabsContent value="produtos" className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Produtos de Aço</h3>
                <Badge className="bg-[#003087]">{dadosTabelas.produtos.length} registros</Badge>
              </div>
              <div className="overflow-x-auto rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead>Código</TableHead>
                      <TableHead>Categoria</TableHead>
                      <TableHead>Nome</TableHead>
                      <TableHead>Norma</TableHead>
                      <TableHead className="text-right">Preço/Ton</TableHead>
                      <TableHead>Unidade</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dadosTabelas.produtos.map((produto) => (
                      <TableRow key={produto.cd}>
                        <TableCell className="font-mono">{produto.cd}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="text-xs">{produto.categoria}</Badge>
                        </TableCell>
                        <TableCell className="font-medium">{produto.nome}</TableCell>
                        <TableCell className="font-mono text-sm">{produto.norma}</TableCell>
                        <TableCell className="text-right font-semibold">
                          R$ {produto.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </TableCell>
                        <TableCell className="font-mono text-sm">{produto.unidade}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            {/* Lotes */}
            <TabsContent value="lotes" className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Lotes de Produção</h3>
                <Badge className="bg-[#003087]">{dadosTabelas.lotes.length} registros</Badge>
              </div>
              <div className="overflow-x-auto rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead>Lote</TableHead>
                      <TableHead>Produto</TableHead>
                      <TableHead>Unidade</TableHead>
                      <TableHead>Data Produção</TableHead>
                      <TableHead className="text-right">Quantidade (ton)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dadosTabelas.lotes.map((lote) => (
                      <TableRow key={lote.cd}>
                        <TableCell className="font-mono font-semibold">{lote.cd}</TableCell>
                        <TableCell className="font-mono text-sm">{lote.cd_produto}</TableCell>
                        <TableCell className="font-mono text-sm">{lote.cd_unidade}</TableCell>
                        <TableCell>{new Date(lote.data).toLocaleDateString('pt-BR')}</TableCell>
                        <TableCell className="text-right font-semibold">
                          {lote.quantidade.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            {/* Laudos */}
            <TabsContent value="laudos" className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Laudos de Qualidade</h3>
                <Badge className="bg-[#003087]">{dadosTabelas.laudos.length} registros</Badge>
              </div>
              <div className="overflow-x-auto rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead>Laudo</TableHead>
                      <TableHead>Lote</TableHead>
                      <TableHead>Resultado</TableHead>
                      <TableHead>Data Análise</TableHead>
                      <TableHead>Teor Carbono</TableHead>
                      <TableHead>Observações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dadosTabelas.laudos.map((laudo) => (
                      <TableRow key={laudo.cd}>
                        <TableCell className="font-mono">{laudo.cd}</TableCell>
                        <TableCell className="font-mono text-sm">{laudo.cd_lote}</TableCell>
                        <TableCell>
                          <Badge className={laudo.resultado === 'Aprovado' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                            {laudo.resultado}
                          </Badge>
                        </TableCell>
                        <TableCell>{new Date(laudo.data).toLocaleDateString('pt-BR')}</TableCell>
                        <TableCell className="font-mono text-sm">{laudo.teor_carbono}%</TableCell>
                        <TableCell className="text-sm max-w-xs truncate">{laudo.obs || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            {/* Unidades */}
            <TabsContent value="unidades" className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Unidades Fabris</h3>
                <Badge className="bg-[#003087]">{dadosTabelas.unidades.length} registros</Badge>
              </div>
              <div className="overflow-x-auto rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead>Código</TableHead>
                      <TableHead>Nome</TableHead>
                      <TableHead>Cidade</TableHead>
                      <TableHead>Estado</TableHead>
                      <TableHead className="text-right">Capacidade Anual (ton)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dadosTabelas.unidades.map((unidade) => (
                      <TableRow key={unidade.cd}>
                        <TableCell className="font-mono">{unidade.cd}</TableCell>
                        <TableCell className="font-medium">{unidade.nome}</TableCell>
                        <TableCell>{unidade.cidade}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{unidade.estado}</Badge>
                        </TableCell>
                        <TableCell className="text-right font-semibold">
                          {unidade.capacidade.toLocaleString('pt-BR')}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            {/* Ordens */}
            <TabsContent value="ordens" className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Ordens de Venda</h3>
                <Badge className="bg-[#003087]">{dadosTabelas.ordens.length} registros</Badge>
              </div>
              <div className="overflow-x-auto rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead>Ordem</TableHead>
                      <TableHead>Cliente</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead className="text-right">Valor Total</TableHead>
                      <TableHead>Contrato</TableHead>
                      <TableHead>Pagamento</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dadosTabelas.ordens.map((ordem) => (
                      <TableRow key={ordem.cd}>
                        <TableCell className="font-mono font-semibold">{ordem.cd}</TableCell>
                        <TableCell className="font-medium">{ordem.cliente}</TableCell>
                        <TableCell>{new Date(ordem.data).toLocaleDateString('pt-BR')}</TableCell>
                        <TableCell className="text-right font-semibold">
                          R$ {ordem.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </TableCell>
                        <TableCell className="text-xs">{ordem.contrato}</TableCell>
                        <TableCell className="text-xs">{ordem.pagamento}</TableCell>
                        <TableCell>
                          <Badge className={statusColors[ordem.status]}>
                            {ordem.status.replace('_', ' ')}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            {/* Itens Ordem */}
            <TabsContent value="itens" className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Itens das Ordens</h3>
                <Badge className="bg-[#003087]">{dadosTabelas.itens.length} registros</Badge>
              </div>
              <div className="overflow-x-auto rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead>Item</TableHead>
                      <TableHead>Ordem</TableHead>
                      <TableHead>Produto</TableHead>
                      <TableHead className="text-right">Quantidade</TableHead>
                      <TableHead className="text-right">Preço Negociado</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dadosTabelas.itens.map((item) => (
                      <TableRow key={item.cd}>
                        <TableCell className="font-mono">{item.cd}</TableCell>
                        <TableCell className="font-mono text-sm">{item.cd_ordem}</TableCell>
                        <TableCell className="font-mono text-sm">{item.cd_produto}</TableCell>
                        <TableCell className="text-right">
                          {item.quantidade.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </TableCell>
                        <TableCell className="text-right font-semibold">
                          R$ {item.preco_negociado.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            {/* Estoque */}
            <TabsContent value="estoque" className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Estoque de Produção</h3>
                <Badge className="bg-[#003087]">{dadosTabelas.estoque.length} registros</Badge>
              </div>
              <div className="overflow-x-auto rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead>Código</TableHead>
                      <TableHead>Produto</TableHead>
                      <TableHead>Unidade</TableHead>
                      <TableHead className="text-right">Quantidade Atual</TableHead>
                      <TableHead>Localização</TableHead>
                      <TableHead>Última Movimentação</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dadosTabelas.estoque.map((est) => (
                      <TableRow key={est.cd}>
                        <TableCell className="font-mono">{est.cd}</TableCell>
                        <TableCell className="font-mono text-sm">{est.cd_produto}</TableCell>
                        <TableCell className="font-mono text-sm">{est.cd_unidade}</TableCell>
                        <TableCell className="text-right font-semibold">
                          {est.quantidade.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{est.localizacao}</Badge>
                        </TableCell>
                        <TableCell>{new Date(est.data).toLocaleDateString('pt-BR')}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            {/* Faturamento */}
            <TabsContent value="faturamento" className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Faturamento</h3>
                <Badge className="bg-[#003087]">{dadosTabelas.faturamento.length} registros</Badge>
              </div>
              <div className="overflow-x-auto rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead>Código</TableHead>
                      <TableHead>Ordem</TableHead>
                      <TableHead className="text-right">Valor</TableHead>
                      <TableHead>Método</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Vencimento</TableHead>
                      <TableHead>Liquidação</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dadosTabelas.faturamento.map((fat) => (
                      <TableRow key={fat.cd}>
                        <TableCell className="font-mono">{fat.cd}</TableCell>
                        <TableCell className="font-mono text-sm">{fat.cd_ordem}</TableCell>
                        <TableCell className="text-right font-semibold">
                          R$ {fat.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </TableCell>
                        <TableCell className="text-sm">{fat.metodo}</TableCell>
                        <TableCell>
                          <Badge className={fat.status === 'PAGO' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                            {fat.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{new Date(fat.vencimento).toLocaleDateString('pt-BR')}</TableCell>
                        <TableCell>{fat.liquidacao ? new Date(fat.liquidacao).toLocaleDateString('pt-BR') : '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            {/* Logística */}
            <TabsContent value="logistica" className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Logística de Entrega</h3>
                <Badge className="bg-[#003087]">{dadosTabelas.logistica.length} registros</Badge>
              </div>
              <div className="overflow-x-auto rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead>Código</TableHead>
                      <TableHead>Ordem</TableHead>
                      <TableHead>Transportadora</TableHead>
                      <TableHead>Rastreamento</TableHead>
                      <TableHead>Envio</TableHead>
                      <TableHead>Previsão</TableHead>
                      <TableHead>Entrega</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dadosTabelas.logistica.map((log) => (
                      <TableRow key={log.cd}>
                        <TableCell className="font-mono">{log.cd}</TableCell>
                        <TableCell className="font-mono text-sm">{log.cd_ordem}</TableCell>
                        <TableCell className="text-sm font-medium">{log.transportadora}</TableCell>
                        <TableCell className="font-mono text-xs">{log.rastreamento}</TableCell>
                        <TableCell className="text-sm">{log.envio ? new Date(log.envio).toLocaleDateString('pt-BR') : '-'}</TableCell>
                        <TableCell className="text-sm">{new Date(log.previsao).toLocaleDateString('pt-BR')}</TableCell>
                        <TableCell>
                          {log.entrega ? (
                            <Badge className="bg-green-100 text-green-800">
                              {new Date(log.entrega).toLocaleDateString('pt-BR')}
                            </Badge>
                          ) : (
                            <Badge className="bg-yellow-100 text-yellow-800">Em trânsito</Badge>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </CardContent>
        </Tabs>
      </Card>

      {/* Info Card */}
      <Card className="border-none shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-xl">
              <CheckCircle className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Dados Completos de Todas as 14 Tabelas</h3>
              <p className="text-gray-700 mb-3">
                Todos os dados foram inseridos usando comandos INSERT e representam um cenário 
                realista de operação da Gerdau, incluindo diferentes segmentos de clientes, 
                variedade de produtos siderúrgicos e operações em múltiplas unidades fabris.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className="bg-white p-2 rounded border border-blue-200">
                  <div className="font-semibold text-[#003087]">7</div>
                  <div className="text-xs text-gray-600">Clientes</div>
                </div>
                <div className="bg-white p-2 rounded border border-blue-200">
                  <div className="font-semibold text-[#003087]">7</div>
                  <div className="text-xs text-gray-600">Endereços</div>
                </div>
                <div className="bg-white p-2 rounded border border-blue-200">
                  <div className="font-semibold text-[#003087]">7</div>
                  <div className="text-xs text-gray-600">Fornecedores</div>
                </div>
                <div className="bg-white p-2 rounded border border-blue-200">
                  <div className="font-semibold text-[#003087]">7</div>
                  <div className="text-xs text-gray-600">Transportadoras</div>
                </div>
                <div className="bg-white p-2 rounded border border-blue-200">
                  <div className="font-semibold text-[#003087]">7</div>
                  <div className="text-xs text-gray-600">Categorias</div>
                </div>
                <div className="bg-white p-2 rounded border border-blue-200">
                  <div className="font-semibold text-[#003087]">7</div>
                  <div className="text-xs text-gray-600">Unidades</div>
                </div>
                <div className="bg-white p-2 rounded border border-blue-200">
                  <div className="font-semibold text-[#003087]">7</div>
                  <div className="text-xs text-gray-600">Produtos</div>
                </div>
                <div className="bg-white p-2 rounded border border-blue-200">
                  <div className="font-semibold text-[#003087]">7</div>
                  <div className="text-xs text-gray-600">Lotes</div>
                </div>
                <div className="bg-white p-2 rounded border border-blue-200">
                  <div className="font-semibold text-[#003087]">7</div>
                  <div className="text-xs text-gray-600">Laudos</div>
                </div>
                <div className="bg-white p-2 rounded border border-blue-200">
                  <div className="font-semibold text-[#003087]">7</div>
                  <div className="text-xs text-gray-600">Ordens</div>
                </div>
                <div className="bg-white p-2 rounded border border-blue-200">
                  <div className="font-semibold text-[#003087]">7</div>
                  <div className="text-xs text-gray-600">Itens Ordem</div>
                </div>
                <div className="bg-white p-2 rounded border border-blue-200">
                  <div className="font-semibold text-[#003087]">7</div>
                  <div className="text-xs text-gray-600">Estoque</div>
                </div>
                <div className="bg-white p-2 rounded border border-blue-200">
                  <div className="font-semibold text-[#003087]">7</div>
                  <div className="text-xs text-gray-600">Faturamento</div>
                </div>
                <div className="bg-white p-2 rounded border border-blue-200">
                  <div className="font-semibold text-[#003087]">7</div>
                  <div className="text-xs text-gray-600">Logística</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}