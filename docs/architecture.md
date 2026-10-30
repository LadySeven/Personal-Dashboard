# Application Architecture

## Repository layout

- `frontend/` contains the Next.js and React application.
- `backend/` contains the Python API built with Django REST Framework.
- `docs/` contains project planning and architecture documents.

## Frontend organization

- `app/` contains Next.js routes and shared page layouts.
- `components/` will contain UI components used across features.
- `features/` will group code by dashboard feature, such as tasks, projects, and time logs.
- Each feature can contain its own components, view-model logic, API calls, and TypeScript types.
- `lib/` will hold shared utilities, such as API-client setup and date formatting.

We’ll add feature folders when we build those features rather than creating empty folders now.

## Backend organization

- `config/` contains Django project settings and the main URL configuration.
- `dashboard/` contains the dashboard app’s data models, API views, URL routes, and serializers.
- `services.py` or other modules will be added when a feature has business rules that need their own place.

The backend follows Django and Django REST Framework conventions instead of duplicating the frontend’s MVVM structure.

## MVVM guide

- **Model:** Stored entities managed by Django, such as projects, tasks, tags, and time logs.
- **View:** Next.js routes and React components that display information and controls.
- **ViewModel:** Frontend logic that connects a view to API data and handles presentation behavior, such as filters and form state.

## Request flow

The frontend sends a request to a Django API route. A DRF view coordinates the request, serializers validate or format data, and Django models work with the database.