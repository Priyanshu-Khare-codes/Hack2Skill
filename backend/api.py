from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from models import SentimentAnalysis
from ai_service import flag_social
import tempfile
import os

app = FastAPI()

# Allow all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/analyse/social", response_model=SentimentAnalysis)
async def analyse_content(text: str = Form(...), image: UploadFile = File(None)):
    try:
        # Handle the image if it exists
        image_path = None
        if image:
            # Create temporary file to store the uploaded image
            with tempfile.NamedTemporaryFile(delete=False, suffix=os.path.splitext(image.filename)[1]) as temp_file:
                temp_file.write(await image.read())
                image_path = temp_file.name

        # Process the content
        result = flag_social(text=text, image_path=image_path)

        # Clean up temporary file if it was created
        if image_path:
            os.unlink(image_path)

        return result
    
    except Exception as e:
        return {"error": str(e)}