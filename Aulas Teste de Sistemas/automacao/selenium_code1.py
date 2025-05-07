# dependencias
# pip install selenium
# se nao rodar instale a segunda dependencia -> pip install webdriver-manager
# para executar >> cmd >> python -m pytest C:\LOCAL DO ARQUIVO\selenium_code1.py

# importar
from selenium import webdriver
import time

# ja que o navegador vai abrir e fechar...
# quando encerrar o codigo, vamos por time

# abrir navegador
navegador = webdriver.Chrome()


# acessar um site
# navegador.get("https://eng-pablo-tec.github.io/inove-teste/")
navegador.get("https://eng-pablo-tec.github.io/curso-idiomas-e-produtos/")
time.sleep(1)
# colocar navegador em tela cheia
navegador.maximize_window()
time.sleep(1)
# documentação -> https://selenium-python.readthedocs.io/
# e exemplos -> https://selenium-python.readthedocs.io/

# o selenium automaticamente espera a pagina carregar
# se tiver "carregando, ele não passa pro proximo codigo"
# segundo o mestre Lira da Hashtag


# selecionar UM elemento na tela

# navegador.find_element()


# selecionar VARIOS elemento na tela
# navegador.find_elements


# tem que receber 2 parametros:

# 1 - qual a caracteristica ?
#   a) id
#   b) class
#   c) name
#   d) texto?


# como sei?
# F12, ou botao direito do mouse no elemento
# inspecionar >> ler o codigo html css dele


# 2 - qual a caracteristica ?
# se o primeiro é como se fosse a "key"
# o segundo são os dados que estão salvos nessa "key"

# entao fica assim
# navegador.find_element("class name", "botao-azul")

# ou

# botao_azul = navegador.find_element("class name", "botao-azul")


# agora interagir com esse elemento

# botao_azul.click()

# problema, se mais de um elemento tiver essa classe
# como solucionar, primeiro usa o find_elementS no plural

"""
grupo_botoes = navegador.find_elements("class name", "nav-link")

for botao in grupo_botoes:
    if "Assinatura" in botao.text:
        botao.click()
        break


# CLICAR ABRINDO EM OUTRA ABA, caso queira
"""
from selenium.webdriver.common.keys import Keys

grupo_botoes = navegador.find_elements("class name", "nav-link")

for botao in grupo_botoes:
    if "Cadastro" in botao.text:
        botao.send_keys(Keys.CONTROL + Keys.RETURN)
        break

time.sleep(1)
# selecionar abas entre si
abas = navegador.window_handles #sintaxe que te da a lista de abas
# abas[0]
# abas[1]


# navegador, por favor, muda para a aba que eu quero
navegador.switch_to.window(abas[1])


# escrever em um campo
# inspeciona
# acha uma forma de identificar o elemento

# navegador.find_element("id", "codigo")
time.sleep(1)
# ai vem

campo_escrever = navegador.find_element("id", "codigo")
campo_escrever.send_keys("Codigo")

# ou

# navegador.find_element("id", "codigo").send_keys("texto que voce quer")

# inspecionar todos os inputs, e anotar no bloco de notas

navegador.find_element("id", "marca").send_keys("Marca")
time.sleep(1)
navegador.find_element("id", "tipo").send_keys("Tipo")
time.sleep(1)
navegador.find_element("id", "categoria").send_keys(1)
time.sleep(1)
navegador.find_element("id", "preco").send_keys(1.50)
time.sleep(1)
navegador.find_element("id", "custo").send_keys(3)
time.sleep(1)
navegador.find_element("id", "obs").send_keys("Observações")
time.sleep(1)


# clicar no botao
navegador.find_element("class name", "enviar").click()


# observação
# crie uma automação nova para clicar nesse site
# url -> 

time.sleep(10)