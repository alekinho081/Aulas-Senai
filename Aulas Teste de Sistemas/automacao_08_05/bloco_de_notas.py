import pyautogui

pyautogui.PAUSE = 0.7

pyautogui.press('win')
pyautogui.write('notepad')
pyautogui.press('enter')
pyautogui.write('Automatizando com PyAutoGUI e divertido!', interval=0.1)