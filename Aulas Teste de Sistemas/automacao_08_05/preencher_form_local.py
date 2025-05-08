import pyautogui
import time

pyautogui.PAUSE = 0.7

pyautogui.press('win')
pyautogui.write('chrome')
pyautogui.press('enter')
pyautogui.hotkey('win', 'left')
pyautogui.click(x=186, y=65)
pyautogui.write('https://eng-pablo-tec.github.io/ficha1/')
pyautogui.press('enter')
time.sleep(0.5)
pyautogui.press('tab')
pyautogui.write('Alex')
pyautogui.press('tab')
pyautogui.write('17')
pyautogui.press('tab')
pyautogui.write('A+')
pyautogui.press('tab')
pyautogui.write('Cursando 3 ano do ensino médio')
pyautogui.press('tab')
pyautogui.write('1.78')
pyautogui.press('tab')
pyautogui.write('70')
pyautogui.press('tab')
pyautogui.press('enter')


