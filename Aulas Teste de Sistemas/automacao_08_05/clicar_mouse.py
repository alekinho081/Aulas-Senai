import pyautogui
import time

pyautogui.PAUSE = 0.7

xy = pyautogui.position()

time.sleep(3)
pyautogui.click(xy)