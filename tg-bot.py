import telebot
import requests
import os
from dotenv import load_dotenv

load_dotenv()

TOKEN = os.getenv("TOKEN")

bot = telebot.TeleBot(TOKEN)

@bot.message_handler(commands=['cpu'])
def send_cpu(message):
    cevap = requests.get('http://localhost:3000/cpu/average')
    bot.reply_to(message, cevap.text)

@bot.message_handler(commands=['ram'])
def send_ram(message):
    cevap = requests.get('http://localhost:3000/ram/usage')
    bot.reply_to(message, cevap.text)

bot.infinity_polling()