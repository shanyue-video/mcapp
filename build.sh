git pull
rm -rf ./build && meteor build ./build --directory --server=http://oforever.net:8899 && cd ./build/bundle/programs/server && npm install
cd ../../../../
rm -rf /var/www/mcapp
mv ./build/bundle /var/www/mcapp
rm -rf ./build/
cp ./ecosystem.json /var/www/mcapp/
cd /var/www/mcapp
pm2 delete mcapp
pm2 start ecosystem.json
