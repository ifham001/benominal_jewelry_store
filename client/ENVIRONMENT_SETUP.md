# Environment Variables Setup

## Required Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Backend API URLs
NEXT_PUBLIC_USER_ROUTE_URL=https://your-backend-domain.com/api/user
NEXT_PUBLIC_ADMIN_ROUTE_URL=https://your-backend-domain.com/api/admin

# Example for Railway deployment:
# NEXT_PUBLIC_ADMIN_ROUTE_URL=https://benominalbackend-production.up.railway.app/api/admin

# Google OAuth Client ID
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id_here
```

## For Local Development

```bash
# Local development URLs
NEXT_PUBLIC_USER_ROUTE_URL=http://localhost:3001/api/user
NEXT_PUBLIC_ADMIN_ROUTE_URL=http://localhost:3001/api/admin
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id_here
```

## Production Deployment

Make sure to set these environment variables in your hosting platform:
- **Vercel**: Add them in Project Settings → Environment Variables
- **Netlify**: Add them in Site Settings → Environment Variables
- **Other platforms**: Check their documentation for environment variable setup

## Common Issues

1. **405 Error on Admin Login**: Usually means `NEXT_PUBLIC_ADMIN_ROUTE_URL` is not set correctly
   - Make sure it includes `https://` protocol
   - Check that the path includes `/api/admin`
   - Example: `https://benominalbackend-production.up.railway.app/api/admin`

2. **API calls failing**: Check that the backend URLs are correct and accessible
   - Test the URL in browser or Postman
   - Make sure the backend is deployed and running

3. **JSON Parse Error**: Usually happens when getting HTML error page instead of JSON
   - Check that the API URL is correct
   - Verify the backend endpoint exists and accepts POST requests

4. **Google login not working**: Verify `NEXT_PUBLIC_GOOGLE_CLIENT_ID` is set correctly 