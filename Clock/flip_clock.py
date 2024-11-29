import tkinter as tk
from datetime import datetime

class FlipClockApp(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Digital Flip Clock")
        self.geometry("{0}x{1}+0+0".format(self.winfo_screenwidth(), self.winfo_screenheight()))
        self.configure(background='black')
        self.time_label = tk.Label(self, font=('Courier', 200), fg='white', bg='black')
        self.time_label.pack(expand=True)
        self.update_time()

    def update_time(self):
        current_time = datetime.now().strftime("%H:%M:%S")
        self.time_label.configure(text=current_time)
        self.after(1000, self.update_time)

if __name__ == "__main__":
    app = FlipClockApp()
    app.mainloop()
