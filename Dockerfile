FROM nginx

COPY index.html /usr/share/nginx/html
RUN mkdir /usr/share/nginx/html/js
RUN mkdir /usr/share/nginx/html/img
COPY js /usr/share/nginx/html/js
COPY img /usr/share/nginx/html/img
COPY nginx.conf /etc/nginx/nginx.conf

VOLUME /etc/nginx


CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/nginx.conf && nginx -g 'daemon off;'
 
