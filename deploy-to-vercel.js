// Simple script to deploy to Vercel
const { execSync } = require('child_process');

// Check if Vercel CLI is installed
try {
  execSync('vercel --version', { stdio: 'ignore' });
  console.log('✅ Vercel CLI is installed');
} catch (error) {
  console.error('❌ Vercel CLI is not installed. Installing...');
  execSync('npm i -g vercel', { stdio: 'inherit' });
}

// Deploy to Vercel
try {
  console.log('🚀 Deploying to Vercel...');
  execSync('vercel --prod', { stdio: 'inherit' });
  console.log('✅ Deployment successful!');
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}
