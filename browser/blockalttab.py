# Python script to block Alt+Tab key presses
import keyboard


# keyboard.add_hotkey("alt + tab", lambda: None, suppress=True)
keyboard.add_hotkey("win + d", lambda:None, suppress=True)
keyboard.add_hotkey("shift + tab", lambda:None, suppress=True)
# keyboard.add_hotkey("ctrl + c", lambda:None, suppress=True)
# keyboard.add_hotkey("ctrl + v", lambda:None, suppress=True)
# keyboard.add_hotkey("ctrl + x", lambda:None, suppress=True)

keyboard.wait()
# import keyboard

# # Function to block Alt+Tab key press
# def block_alt_tab():
#     keyboard.press_and_release('alt + tab')

# # Function to block Windows+D key press
# def block_windows_d():
#     keyboard.press_and_release('win + d')

# # Register the hotkeys to block Alt+Tab and Windows+D
# keyboard.add_hotkey("alt + tab", block_alt_tab, suppress=True)

# # Run the script indefinitely
# keyboard.wait()

