
# SignSpeak

**SignSpeak** is an open-source Django-based application aimed at translating sign language gestures into text or speech. The project leverages computer vision and machine learning techniques to recognize and interpret sign language, enhancing communication accessibility.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Database Configuration](#database-configuration)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Project Overview

SignSpeak utilizes a combination of Django for the backend and machine learning models for gesture recognition. The application captures sign language gestures through a webcam, processes the input using trained models, and outputs the corresponding text or speech.

## Features

- Real-time sign language recognition using webcam input.
- Translation of recognized gestures into text and/or speech.
- User-friendly web interface for interaction.
- Modular codebase facilitating easy updates and maintenance.

## Installation

### Prerequisites

- Python 3.10 or higher
- Git
- Virtual environment tool (e.g., `venv`)

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/SnakeyEye497/SignSpeak.git
   cd SignSpeak
   ```

2. **Create and Activate Virtual Environment**

   ```bash
   python -m venv sign-venv
   # On Windows
   sign-venv\Scripts\activate
   # On Unix or MacOS
   source sign-venv/bin/activate
   ```

3. **Install Dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Apply Migrations**

   ```bash
   python manage.py migrate
   ```

5. **Run the Development Server**

   ```bash
   python manage.py runserver
   ```

   Access the application at `http://127.0.0.1:8000/`

## Usage

1. Ensure your webcam is connected.
2. Navigate to the application's homepage.
3. Use the interface to start the sign language recognition process.
4. The application will display the translated text and optionally output speech.

## Project Structure

```
SignSpeak/
├── SignSpeak/               # Django project configuration
├── signapp/                 # Main application containing views, models, etc.
├── templates/               # HTML templates
├── static/                  # Static files (CSS, JS, images)
├── media/                   # Uploaded media files
├── requirements.txt         # Python dependencies
├── manage.py                # Django management script
└── README.md                # Project documentation
```

## Database Configuration

The project uses SQLite by default. To configure a different database:

1. Open `SignSpeak/settings.py`.
2. Modify the `DATABASES` section with your database credentials.

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'your_db_name',
        'USER': 'your_username',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

3. Apply migrations:

   ```bash
   python manage.py migrate
   ```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add YourFeature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to all contributors and the open-source community for their invaluable support.
- Special thanks to the developers of the libraries and frameworks utilized in this project.
