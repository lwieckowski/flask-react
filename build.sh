cd react-app
npm run build
cd ..
cp -r react-app/dist/* static/
mv static/index.html static/react.html
flask --app app run