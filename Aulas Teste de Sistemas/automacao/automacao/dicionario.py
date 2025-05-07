import pyautogui
import time

pyautogui.PAUSE = 0.5

pyautogui.press('win')
pyautogui.write('chrome')
pyautogui.press('enter')
time.sleep(1)
pyautogui.write('https://eng-pablo-tec.github.io/produtos/')
pyautogui.press('enter')
time.sleep(1)
pyautogui.click(360,263)

