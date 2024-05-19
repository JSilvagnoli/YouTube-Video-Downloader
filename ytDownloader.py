from flask import Flask, jsonify, request
from flask_cors import CORS
from pytube import YouTube

app = Flask(__name__) # Creates a Flask application instance
CORS(app)  # Enable CORS for all routes to allow the frontend (Chrome Extension) to make requests to the backend without encountering CORS issues

@app.route('/api/downloadVideo', methods=['POST']) # Defines a route that listens for POST requests
def downloadVideo():
    # Extracts the JSON sent through the POST request
    data = request.get_json()
    video_url = data.get('url')
    
    # Uses the pytube library to downloade the YouTube video from the url
    yt = YouTube(video_url)
    yd = yt.streams.get_highest_resolution()    
    yd.download('D:/Downloaded YouTube Videos')
    
    return jsonify(message="Video downloaded successfully")

# Ensures that the Flask application runs only when the script is executed directly
if __name__ == '__main__':
    app.run(debug=True)
