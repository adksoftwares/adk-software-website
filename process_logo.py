import sys
from rembg import remove, new_session
from PIL import Image

input_path = "C:/Users/Arikarran/.gemini/antigravity/brain/1480b72b-6203-4327-b8d3-d9275177f339/.user_uploaded/media_1787077381528.jpg"
output_path = "public/logo.png"

print("Loading image...")
input_img = Image.open(input_path)

print("Removing background with small model...")
# Use u2netp which is only ~4MB
session = new_session("u2netp")
output_img = remove(input_img, session=session)

print(f"Saving to {output_path}...")
output_img.save(output_path, "PNG")

print("Done!")
