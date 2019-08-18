FROM nginx

COPY index.html /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

VOLUME /etc/nginx


CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/nginx.conf && nginx -g 'daemon off;'
 
