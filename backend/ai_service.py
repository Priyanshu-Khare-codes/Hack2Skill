from google import genai
from models import SentimentAnalysis
import PIL.Image
import json

# Initialize the client
client = genai.Client(api_key="AIzaSyD7SeZ_nZVUW1-Uti8KzFWkgAMVkq5tT6E")

def flag_social(text="", image_path=None):

    # Initialize contents with the system prompt and text
    contents = [
        "You are a content moderator in a social media platform. Your task is to analyse the content uploaded in the user's post and flag them based on tag, category & description of it : ",
        text
    ]

    # Check if image exists and add it to contents if it does
    if image_path:
        try:
            image = PIL.Image.open(image_path)
            contents.append(image)
        except Exception as e:
            print(f"Error loading image: {e}")

    # Generate content with the prepared contents
    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents=contents,
        config={
            'response_mime_type': 'application/json',
            'response_schema': SentimentAnalysis
        }
    )
    result_dict = json.loads(response.text)
    return result_dict

print(flag_social(text="I like holi",image_path="holi.jpeg"))