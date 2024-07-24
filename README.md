# Full-Stack-React-Django-Rest-Security-with-JWT



# Django-React JWT Authentication Project

This project demonstrates a secure, full-stack application using Django REST Framework for the backend and React for the frontend, implementing JWT (JSON Web Token) based authentication.

## Features

- JWT token-based authentication
- Secure password hashing
- CSRF protection
- React frontend with TypeScript
- Django REST Framework backend

## Prerequisites

- Python 3.8+
- Node.js 14+
- npm or yarn

## Backend Setup (Django)

1. Clone the repository:
   ```bash
   git clone git@github.com:RichardKaranuMbuti/Full-Stack-React-Django-Rest-Security-with-JWT.git
   cd your-repo-name
   ```

2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use venv\Scripts\activate
   ```

3. Install the required packages:
   ```bash
   pip install -r requirements.txt
   ```

4. Apply migrations:
   ```bash
   python manage.py migrate
   ```

5. Create a superuser:
   ```bash
   python manage.py createsuperuser
   ```

6. Run the Django development server:
   ```bash
   python manage.py runserver
   ```
   The backend will be available at `http://localhost:8000`.

## Frontend Setup (React)

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   or if you're using yarn:
   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   or with yarn:
   ```bash
   yarn dev
   ```
   The frontend will be available at `http://localhost:5173`.

## Making Requests

The frontend is configured to send requests to the Django backend. The main interaction points are:

- Login: POST request to `http://localhost:8000/api/token/`
- Refresh Token: POST request to `http://localhost:8000/api/token/refresh/`
- Protected Routes: Include the JWT token in the Authorization header

Example of a protected request:

```javascript
axios.get('http://localhost:8000/api/protected-route/', {
  headers: {
    'Authorization': `Bearer ${accessToken}`
  }
})
```

## Security Features

- JWT tokens for stateless authentication
- Access and refresh token mechanism
- CSRF protection for non-GET requests
- Secure password hashing with Django's default hasher
- CORS configuration to prevent unauthorized access

## Contributing

If you wish to contribute just clone and open a pr

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.
