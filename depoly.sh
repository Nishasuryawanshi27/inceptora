# Inceptora Quick Deploy Script
echo "🚀 Inceptora - Quick Deploy to Vercel"
echo "======================================"
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm i -g vercel
fi

# Login to Vercel
echo "🔐 Logging into Vercel..."
vercel login

# Deploy
echo "🚀 Deploying to production..."
vercel --prod

echo ""
echo "✅ Deployment complete!"
echo "📱 Your app is now live on Vercel"
echo ""
echo "Next steps:"
echo "1. Add environment variables in Vercel dashboard"
echo "2. Test all routes and features"
echo "3. Configure custom domain (optional)"
echo ""
echo "Environment Variables to add:"
echo "- VITE_SUPABASE_URL"
echo "- VITE_SUPABASE_ANON_KEY"
echo ""
