import pyautogui
import time

pyautogui.PAUSE = 0.7


pyautogui.press("win")
pyautogui.write("chrome") 
pyautogui.press("enter")
pyautogui.hotkey('win', 'left')
pyautogui.click(x=184, y=60)
pyautogui.write("https://eng-pablo-tec.github.io/produtos/")
pyautogui.press("enter")
pyautogui.press("tab")
pyautogui.hotkey('ctrl', 't')
pyautogui.click(x=184, y=60)
pyautogui.write('https://encurtador.com.br/Q7WZU')
pyautogui.press('enter')


# clicar excel
pyautogui.click(x=317, y=21)

# clicar linha 1 (excel)
pyautogui.click(x=84, y=283)


def cadastrar():
    for _ in range(7):
        pyautogui.hotkey("ctrl", "c")
        # abrir pagina produtos
        pyautogui.click(x=96, y=19)
        pyautogui.hotkey("ctrl", "v")
        pyautogui.press("tab")
        #clicar no excel
        pyautogui.click(x=317, y=21)
        pyautogui.press("right")

        pyautogui.hotkey("ctrl", "c")
        
    pyautogui.press('down')

    for _ in range(7):
        pyautogui.press("left")

    # cadastro de produtos
    pyautogui.click(x=96, y=19)
    # clicar em enviar
    pyautogui.click(x=575, y=516)
    # clicar no primeiro input
    pyautogui.click(x=78, y=264)
    #clicar no excel
    pyautogui.click(x=317, y=21)


cadastrar()
cadastrar()
cadastrar()
cadastrar()
cadastrar()
cadastrar()
cadastrar()
cadastrar()
cadastrar()
cadastrar()