import os
import tensorflow as tf

# Path to the .h5 model
model_path = r"D:/pcos-detector-app/model/best_student_model.h5"
print(f"Trying to load model from: {os.path.abspath(model_path)}")

# Check if file exists at that location
if os.path.exists(model_path):
    print("Model file found!")
else:
    print("Model file not found, double-check the path.")

# Attempt to load the model
try:
    model = tf.keras.models.load_model(model_path)
    print("Model loaded successfully!")
    
    # Convert the model to TFLite format
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    tflite_model = converter.convert()

    # Save the TFLite model to file
    tflite_model_path = r"D:/pcos-detector-app/model/best_student_model.tflite"
    with open(tflite_model_path, 'wb') as f:
        f.write(tflite_model)
    
    print(f"Model successfully converted to TFLite format and saved as: {tflite_model_path}")
except Exception as e:
    print(f"Error loading model: {e}")
