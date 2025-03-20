from pydantic import BaseModel
import enum
from typing import Optional

class Tag(enum.Enum):
    Positive = "Positive"
    Negative = "Negative"
    Neutral = "Neutral"

class Category(enum.Enum):
    Hate_Speech = "Hate Speech"
    Violence = "Violence"
    Bullying = "Bullying"
    Harassment = "Harassment"
    Misinformation = "Misinformation"
    Spam = "Spam"
    Fake_News = "Fake News"
    Nota = "Nota"

# Pydantic Model for Request and Response Validation
class SentimentAnalysis(BaseModel):
    tag: Tag
    category: Category
    description: str

class AnalyzeRequest(BaseModel):
    text: str
    image: Optional[str] = None