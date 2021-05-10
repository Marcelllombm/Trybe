# Agora, a prática

1 Para esta etapa, utilizaremos um dataset que contém três coleções: clientes , produtos e vendas . Utilize os comandos abaixo para importar essas coleções para o banco erp :
Faça o download dos arquivos json , clicando com o botão direito e escolhando a opção "Salvar como":

clientes n)
produtos n)
vendas n)

2 Faça a importação para sua instância do MongoDB:
```
mongoimport --db erp <caminho_do_arquivo_clientes.json>
mongoimport --db erp <caminho_do_arquivo_produtos.json>
mongoimport --db erp <caminho_do_arquivo_vendas.json>
```

3 Conecte-se à sua instância e confira o número de documentos em cada coleção:
```
use erp;
db.clientes.count(); // 499
db.produtos.count(); // 499
db.vendas.count(); // 4900

```
Com o dataset importado, é hora de colocar a mão na massa!